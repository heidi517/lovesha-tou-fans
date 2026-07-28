/* ===================================================================
   莎头球迷站 · 交互脚本 main.js
   依赖 data.js（PLAYERS / UPDATES / NEWS / VIDEOS / FORUM_* / SOURCES）
=================================================================== */
(function () {
  'use strict';

  /* ---------- 工具 ---------- */
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[(c)]));

  /* ---------- 移动端导航 ---------- */
  function initNav() {
    const toggle = $('.nav-toggle');
    const links = $('.nav-links');
    if (!toggle || !links) return;
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    $$('.nav-links a').forEach((a) => a.addEventListener('click', () => links.classList.remove('open')));
  }

  /* ---------- 通用渲染：最新动态 ---------- */
  function renderUpdates() {
    const box = $('[data-render="updates"]');
    if (!box) return;
    box.innerHTML = UPDATES.map((u) => {
      const who = u.player === 'sun' ? '莎' : u.player === 'wang' ? '钦' : '莎钦';
      const color = u.player === 'sun' ? 't-red' : u.player === 'wang' ? 't-blue' : 't-gold';
      const flag = u.sample ? '<span class="sample-flag">示例占位</span>' : '';
      return `
        <div class="feed-item">
          <div class="feed-thumb ${color}">${esc(who)}</div>
          <div class="feed-main">
            <div class="tt">${flag}${esc(u.title)}</div>
            <div class="ex">${esc(u.excerpt)}</div>
            <div class="meta"><span class="badge badge-red">${esc(u.tag)}</span><span>${esc(u.src)}</span><span>${esc(u.date)}</span></div>
          </div>
          <div class="feed-side">→</div>
        </div>`;
    }).join('');
  }

  /* ---------- 通用渲染：资讯流 + 筛选 ---------- */
  function renderNews() {
    const box = $('[data-render="news"]');
    if (!box) return;
    const paint = (list) => {
      box.innerHTML = list.map((n) => {
        const flag = n.sample ? '<span class="sample-flag">示例占位</span>' : '';
        const linkOpen = n.url ? `<a href="${esc(n.url)}" target="_blank" rel="noopener nofollow" style="text-decoration:none;color:inherit;display:contents;">` : '';
        const linkClose = n.url ? '</a>' : '';
        return `
          <div class="feed-item">
            ${linkOpen}
            <div class="feed-thumb ${n.color}">${esc(n.tag)}</div>
            <div class="feed-main">
              <div class="tt">${flag}${esc(n.title)}</div>
              <div class="ex">${esc(n.excerpt)}</div>
              <div class="meta"><span class="badge badge-blue">${esc(n.tag)}</span><span>${esc(n.src)}</span><span>${esc(n.date)}</span></div>
            </div>
            <div class="feed-side">→</div>
            ${linkClose}
          </div>`;
      }).join('');
      const empty = $('#newsEmpty');
      if (empty) empty.style.display = list.length ? 'none' : 'block';
    };
    paint(NEWS);
    $$('.filter-chip[data-filter]').forEach((chip) => {
      chip.addEventListener('click', () => {
        $$('.filter-chip[data-filter]').forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        const f = chip.dataset.filter;
        paint(f === 'all' ? NEWS : NEWS.filter((n) => n.cat === f));
      });
    });
  }

  /* ---------- 通用渲染：视频（赛事分组时间线） ---------- */
  function renderVideoTimeline(groups) {
    const box = $('[data-render="videos"]');
    if (!box) return;
    const data = groups || (typeof VIDEOS_TIMELINE !== 'undefined' ? VIDEOS_TIMELINE : []);
    if (!data.length) { box.innerHTML = '<p class="center muted">暂无视频</p>'; return; }

    const typeClass = (t) => {
      const m = { '大满贯': 'vt-type-gs', '世乒赛': 'vt-type-dark', '世界杯': 'vt-type-cup', '洲际杯': 'vt-type-plum', '联赛': 'vt-type-wtt' };
      return m[t] || 'vt-type-wtt';
    };
    const typeIcon = (t) => {
      const m = { '大满贯': '🏆', '世乒赛': '🌍', '世界杯': '🏅', '洲际杯': '🏟️', '联赛': '🏓' };
      return m[t] || '🏓';
    };

    box.innerHTML = data.map(g => {
      const videosHtml = g.videos.map(v => {
        const flag = v.sample ? '<span class="sample-flag">示例</span>' : '';
        return `
          <a class="video-card" href="${esc(v.url)}" target="_blank" rel="noopener nofollow">
            <div class="video-thumb ${v.color}">
              <div class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
              <span class="src">${esc(v.src)}</span>
            </div>
            <div class="video-body">
              <div class="video-title">${flag}${esc(v.title)}</div>
              <div class="video-meta"><span>${esc(v.meta)}</span><span>·</span><span>正版来源</span></div>
            </div>
          </a>`;
      }).join('');

      const ptsBadge = g.points ? `<span class="vt-pts">${g.points}分</span>` : '';

      return `
        <div class="vt-group">
          <div class="vt-dot"></div>
          <div class="vt-header">
            <div class="vt-header-top">
              <span class="vt-type ${typeClass(g.type)}">${typeIcon(g.type)} ${esc(g.type)}${ptsBadge}</span>
              <span class="vt-date">${esc(g.date)}</span>
            </div>
            <div class="vt-event-name">${esc(g.event)}</div>
            <div class="vt-event-loc">📍 ${esc(g.loc)}</div>
            <div class="vt-event-desc">${esc(g.desc)}</div>
          </div>
          <div class="vt-videos">${videosHtml}</div>
        </div>`;
    }).join('');
  }

  /* ---------- 通用渲染：官方来源 ---------- */
  function renderSources() {
    const box = $('[data-render="sources"]');
    if (!box) return;
    box.innerHTML = SOURCES.map((s) => `
      <a class="source" href="${esc(s.url)}" target="_blank" rel="noopener nofollow">
        <div class="ico ${s.color}">${esc(s.abbr)}</div>
        <div>
          <div class="nm">${esc(s.name)}</div>
          <div class="ds">${esc(s.desc)} · ${esc(s.host)}</div>
        </div>
      </a>`).join('');
  }

  /* ---------- 赛事倒计时（如有容器则用示例日期） ---------- */
  function initCountdown() {
    const box = $('[data-countdown]');
    if (!box) return;
    const target = box.dataset.target;
    const dEl = $('[data-cd="d"]', box), hEl = $('[data-cd="h"]', box),
          mEl = $('[data-cd="m"]', box), sEl = $('[data-cd="s"]', box);
    const lblEl = $('[data-cd-label]');
    const pad = (n) => String(n).padStart(2, '0');
    const tick = () => {
      let diff;
      if (target) {
        diff = new Date(target + 'T00:00:00+08:00').getTime() - Date.now();
      } else {
        diff = 0;
      }
      if (diff < 0) { diff = 0; if (lblEl) lblEl.textContent = '已开赛'; }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      dEl && (dEl.textContent = d); hEl && (hEl.textContent = pad(h));
      mEl && (mEl.textContent = pad(m)); sEl && (sEl.textContent = pad(s));
    };
    tick();
    setInterval(tick, 1000);
  }

  /* ---------- 赛事日历渲染 ---------- */
  function renderCalendar() {
    const box = $('[data-render="calendar"]');
    if (!box) return;
    const now = new Date();
    const upcoming = CALENDAR.filter(c => new Date(c.date) >= now).slice(0, 3);
    const typeClass = (t) => {
      const map = {'大满贯':'grandslam','冠军赛':'wtt','洲际':'championship','世界杯':'cup','综合':'combined','年终':'final'};
      return map[t] || 'wtt';
    };

    if (upcoming.length > 0) {
      const first = upcoming[0];
      const cdBox = $('#countdownTarget');
      if (cdBox) cdBox.setAttribute('data-target', first.date);
      const cdLbl = $('#cdLabel');
      if (cdLbl) cdLbl.textContent = first.name + ' · ' + first.loc;
    }

    box.innerHTML = upcoming.map((c) => {
      const diffDays = Math.ceil((new Date(c.date) - now) / 86400000);
      const cdText = diffDays <= 0 ? '进行中' : `${diffDays}天`;
      const liveBtns = c.live.map(l => `<a class="live-link" href="${esc(l.url)}" target="_blank" rel="noopener nofollow">${esc(l.name)}</a>`).join('');
      const endStr = c.endDate ? c.endDate.split('-').slice(1).join('/') : '';
      const dateStr = c.date.split('-').slice(1).join('/') + (endStr ? ' - ' + endStr : '');
      return `
        <div class="cal-card">
          <div class="cal-card-header">
            <span class="tour-type ${typeClass(c.type)}">${esc(c.type)} · ${c.points}分</span>
            <div class="tour-date">${dateStr}</div>
            <div class="tour-name">${esc(c.name)}</div>
            <div class="tour-loc">${esc(c.loc)}</div>
          </div>
          <div class="cal-card-body">
            <div class="cd-row">
              <div class="cd-num">${cdText}</div>
              <div class="cd-unit">距离开赛</div>
            </div>
            <div class="live-links">${liveBtns}</div>
          </div>
        </div>`;
    }).join('');
  }

  /* ---------- 精选墙渲染 ---------- */
  function renderFeatured() {
    const box = $('[data-render="featured"]');
    if (!box) return;
    box.innerHTML = FEATURED.map((f) => `
      <a class="featured-card" href="${esc(f.url)}" ${f.url.startsWith('#') ? '' : 'target="_blank" rel="noopener nofollow"'}>
        <div class="ft-tag ${f.color}">${esc(f.tag)}</div>
        <div class="ft-title">${esc(f.title)}</div>
        <div class="ft-desc">${esc(f.desc)}</div>
      </a>`).join('');
  }

  /* ---------- 直播入口条 ---------- */
  function renderLiveBar() {
    const box = $('[data-render="livebar"]');
    if (!box) return;
    box.innerHTML = `
      <div class="live-bar-title">直播入口</div>
      <div class="live-bar-links">
        ${LIVE_STREAMS.map(l => `
          <a class="live-bar-link" href="${esc(l.url)}" target="_blank" rel="noopener nofollow">
            <span class="liv">${esc(l.icon)}</span>${esc(l.name)}
          </a>`).join('')}
      </div>`;
  }

  /* ---------- 交手纪录渲染 ---------- */
  function renderH2H(player) {
    const box = $('[data-render="h2h"]');
    if (!box) return;
    const data = HEAD_TO_HEAD[player] || [];
    if (!data.length) { box.innerHTML = '<p class="center muted">暂无数据</p>'; return; }
    box.innerHTML = data.map((h) => {
      const winRate = h.rate;
      const barColor = winRate >= 70 ? '#C8102E' : winRate >= 50 ? '#D4AF37' : '#2E7D5B';
      const highlights = h.highlights && h.highlights.length
        ? `<ul class="h2h-highlights">${h.highlights.map(hi => `<li>${esc(hi)}</li>`).join('')}</ul>` : '';
      return `
        <div class="h2h-card">
          <div class="h2h-left">
            <div class="h2h-opp">${esc(h.opp)}</div>
            <div class="h2h-vs">VS</div>
            <div class="h2h-total">${esc(h.total)}</div>
            <div class="h2h-rate">胜率 ${winRate.toFixed(1)}%</div>
            <div class="h2h-bar"><div class="h2h-fill" style="width:${winRate}%;background:${barColor};"></div></div>
          </div>
          <div class="h2h-right">
            <div class="h2h-desc">${esc(h.desc)}</div>
            <div class="h2h-recent">${esc(h.recent)}</div>
            ${highlights}
          </div>
        </div>`;
    }).join('');
  }

  /* ---------- 生涯时间线渲染 ---------- */
  function renderCareerTimeline(player) {
    const box = $('[data-render="career"]');
    if (!box) return;
    const data = CAREER_TIMELINE[player] || [];
    if (!data.length) { box.innerHTML = '<p class="center muted">暂无数据</p>'; return; }
    box.innerHTML = data.map(p => `
      <div class="career-phase">
        <div class="ph-period">${esc(p.period)}</div>
        <div class="ph-title">${esc(p.title)}</div>
        <ul class="ph-items">${p.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>
      </div>`).join('');
  }

  /* ---------- 百科页面 tab 切换 ---------- */
  function initEncyclopediaTabs() {
    $$('.enc-tab[data-tab]').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.enc-tab[data-tab]').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const section = tab.dataset.tab;
        $$('[data-enc-section]').forEach(s => s.style.display = 'none');
        const target = $(`[data-enc-section="${section}"]`);
        if (target) target.style.display = 'block';
      });
    });
  }

  /* ---------- H2H 页面切换 ---------- */
  function initH2HTabs() {
    $$('.h2h-tab[data-h2h]').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.h2h-tab[data-h2h]').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderH2H(tab.dataset.h2h);
      });
    });
  }

  /* ---------- 年份 ---------- */
  function initYear() {
    const y = $('[data-year]');
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- 赛事档案馆渲染 ---------- */
  function renderTournamentArchive() {
    const box = $('[data-render="archive"]');
    if (!box) return;
    if (typeof TOURNAMENT_ARCHIVE === 'undefined') return;
    const typeClass = (t) => {
      const m = {'大满贯':'at-gs','世乒赛':'at-dark','奥运会':'at-red','亚运会':'at-red','世界杯':'at-green','全锦赛':'at-green','联赛':'at-wtt','洲际':'at-plum','年终':'at-dark'};
      return m[t] || 'at-wtt';
    };
    const playerLabel = (p) => {
      if (p === 'sun') return '<span class="ap-mark ap-sun">莎</span>孙颖莎';
      if (p === 'wang') return '<span class="ap-mark ap-wang">钦</span>王楚钦';
      return '<span class="ap-mark ap-both">莎钦</span>莎头组合';
    };
    const resultClass = (r) => {
      if (r.includes('🥇') || r.includes('金牌') || r.includes('冠军')) return 'gold';
      if (r.includes('🥈') || r.includes('银牌') || r.includes('亚军')) return 'silver';
      if (r.includes('🥉') || r.includes('铜牌') || r.includes('季军')) return 'bronze';
      return '';
    };
    box.innerHTML = TOURNAMENT_ARCHIVE.map(yr => {
      const eventsHtml = yr.events.map(ev => {
        const rows = ev.results.map(r => {
          const vidLink = ev.videoUrl
            ? `<a class="archive-vid" href="${esc(ev.videoUrl)}" target="_blank" rel="noopener nofollow" title="观看比赛视频">🎬</a>`
            : '<span class="archive-vid-na">—</span>';
          return `
          <tr>
            <td>${ev.date}${ev.endDate ? ' –<br>' + ev.endDate : ''}</td>
            <td><span class="archive-event-name">${esc(ev.name)}</span></td>
            <td><span class="archive-event-type ${typeClass(ev.type)}">${esc(ev.type)}${ev.points ? ' · ' + ev.points + '分' : ''}</span></td>
            <td><span class="archive-player">${playerLabel(r.player)}</span></td>
            <td>${esc(r.event)}</td>
            <td><span class="archive-result ${resultClass(r.result)}">${esc(r.result)}</span></td>
            <td style="font-size:13px;">${esc(r.detail)}</td>
            <td><a class="archive-src" href="${esc(ev.url)}" target="_blank" rel="noopener nofollow">${esc(ev.src)}</a></td>
            <td class="archive-vid-col">${vidLink}</td>
          </tr>`}).join('');
        return rows;
      }).join('');
      return `
        <div class="archive-year">${yr.year} 赛季</div>
        <div style="overflow-x:auto;">
          <table class="archive-table">
            <thead>
              <tr>
                <th>日期</th><th>赛事</th><th>级别</th><th>选手</th><th>项目</th><th>成绩</th><th>详情</th><th>来源</th><th>视频</th>
              </tr>
            </thead>
            <tbody>${eventsHtml}</tbody>
          </table>
        </div>`;
    }).join('')
    + `<div class="archive-disclaimer"><span>📋</span><div><b>数据说明：</b>本档案整理自公开赛事结果，以官方公布为准。部分早期赛事成绩标注"待补充"，欢迎通过论坛提供信息。标注"以官方为准"的项目请在 ITTF/WTT 官网核实。</div></div>`;
  }

  /* ---------- 选手荣誉墙（动态渲染） ---------- */
  function renderHonors() {
    const box = $('[data-render="honors"]');
    if (!box) return;
    const playerKey = document.body.dataset.player;
    if (!playerKey || !PLAYERS || !PLAYERS[playerKey]) return;
    const honors = PLAYERS[playerKey].honors || [];
    if (!honors.length) return;
    const medalIcon = (mk) => {
      if (mk === 'GOLD') return '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#D4AF37" stroke="#B8942E" stroke-width="1.5"/><text x="12" y="17" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">1</text></svg>';
      if (mk === 'SILVER') return '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#A8A8A8" stroke="#888" stroke-width="1.5"/><text x="12" y="17" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">2</text></svg>';
      if (mk === 'CAPTAIN') return '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#C8102E" stroke="#9B0E22" stroke-width="1.5"/><text x="12" y="17" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">C</text></svg>';
      return '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#D4AF37" stroke="#B8942E" stroke-width="1.5"/><text x="12" y="17" text-anchor="middle" fill="#fff" font-size="11" font-weight="bold">★</text></svg>';
    };
    box.innerHTML = honors.map(h => `
      <div class="ach">
        <div class="ach-medal">${medalIcon(h.mk)}</div>
        <div class="ach-yr">${esc(h.yr)}</div>
        <div class="ach-ev">${esc(h.ev)}</div>
      </div>`).join('');
  }

  /* ---------- 选手资料卡（动态渲染·替换硬编码） ---------- */
  function renderFacts() {
    const box = $('[data-render="facts"]');
    if (!box) return;
    const playerKey = document.body.dataset.player;
    if (!playerKey || !PLAYERS || !PLAYERS[playerKey]) return;
    const facts = PLAYERS[playerKey].facts || [];
    if (!facts.length) return;
    box.innerHTML = facts.map(f => `
      <div class="fact">
        <div class="fact-k">${esc(f.k)}</div>
        <div class="fact-v">${esc(f.v)}</div>
        <div class="fact-sub">${esc(f.sub)}</div>
      </div>`).join('');
  }

  /* ---------- 莎头语录条 ---------- */
  function renderQuotes() {
    const box = $('[data-render="quotes"]');
    if (!box) return;
    if (typeof QUOTES === 'undefined' || !QUOTES.length) return;
    const duped = [...QUOTES, ...QUOTES]; // 双份实现无缝滚动
    box.innerHTML = `
      <div class="q-track">
        ${duped.map(q => `
          <div class="q-item">
            <span class="q-text">"${esc(q.text)}"</span>
            <span class="q-from">—— ${esc(q.from)}</span>
          </div>`).join('')}
      </div>`;
  }

  /* ---------- 选手个人排名积分卡 ---------- */
  function renderPlayerRanking() {
    const box = $('[data-render="player-ranking"]');
    if (!box) return;
    const playerKey = document.body.dataset.player;
    if (!playerKey || typeof RANKING_DETAIL === 'undefined' || !RANKING_DETAIL[playerKey]) return;
    const d = RANKING_DETAIL[playerKey];
    const playerName = playerKey === 'sun' ? '孙颖莎' : '王楚钦';
    const playerColor = playerKey === 'sun' ? '#C8102E' : '#1B3A6B';

    // 积分柱状图数据
    const maxPts = Math.max(...d.breakdown.map(b => b.pts));
    const barsHtml = d.breakdown.map(b => {
      const pct = Math.round(b.pts / maxPts * 100);
      return `<div class="prc-bar-row">
        <div class="prc-bar-label">${esc(b.source)}</div>
        <div class="prc-bar-wrap"><div class="prc-bar-fill" style="width:${pct}%;background:${playerColor};"></div><span class="prc-bar-val">${b.pts}分</span></div>
        <div class="prc-bar-note">${esc(b.note)}</div>
      </div>`;
    }).join('');

    // 历史走势 mini chart
    const maxHistPts = Math.max(...d.history.map(h => h.pts));
    const histPoints = d.history.map((h, i) => {
      const x = Math.round(i / (d.history.length - 1) * 100);
      const y = 80 - Math.round(h.pts / maxHistPts * 80);
      return `${x},${y}`;
    }).join(' ');
    const histLine = d.history.map((h, i) => {
      const x = Math.round(i / (d.history.length - 1) * 100);
      const y = 80 - Math.round(h.pts / maxHistPts * 80);
      return `${x},${y}`;
    }).join(' ');

    box.innerHTML = `
      <div class="prc-card">
        <div class="prc-top">
          <div class="prc-badge">
            <div class="prc-rank-num">#${d.rank}</div>
            <div class="prc-rank-label">世界排名</div>
          </div>
          <div class="prc-points-wrap">
            <div class="prc-points">${d.points.toLocaleString()}</div>
            <div class="prc-points-label">总积分</div>
          </div>
          <div class="prc-lead">
            <div class="prc-lead-val">+${d.lead.toLocaleString()}</div>
            <div class="prc-lead-label">领先第2名 ${esc(d.leadOver)}</div>
          </div>
          <div class="prc-streak">
            <div class="prc-streak-val">${d.weeksAtNo1}周</div>
            <div class="prc-streak-label">${esc(d.streak)}</div>
          </div>
        </div>

        <div class="prc-body">
          <div class="prc-section-title">🏓 积分构成</div>
          <div class="prc-bars">${barsHtml}</div>
        </div>

        <div class="prc-body">
          <div class="prc-section-title">📈 历史走势</div>
          <div class="prc-chart-container">
            <svg class="prc-chart" viewBox="0 0 100 80" preserveAspectRatio="none">
              <polyline points="${histLine}" fill="none" stroke="${playerColor}" stroke-width="0.8" vector-effect="non-scaling-stroke"/>
              ${d.history.map((h, i) => {
                const x = Math.round(i / (d.history.length - 1) * 100);
                const y = 80 - Math.round(h.pts / maxHistPts * 80);
                return `<circle cx="${x}" cy="${y}" r="1.2" fill="${playerColor}"/>`;
              }).join('')}
            </svg>
            <div class="prc-chart-labels">
              ${d.history.map(h => `<span class="prc-chart-label">${esc(h.week)}<br>${h.pts.toLocaleString()}</span>`).join('')}
            </div>
          </div>
        </div>

        <div class="prc-footer">
          <span>数据来源：ITTF / WTT 世界排名</span>
          <span>${esc(WORLD_RANKINGS.updated)}</span>
        </div>
      </div>`;
  }
  /* ---------- 世界排名快照（全局） ---------- */
  function renderRankingCard() {
    const box = $('[data-render="ranking"]');
    if (!box) return;
    if (typeof WORLD_RANKINGS === 'undefined') return;
    const renderTable = (data, title) => `
      <div class="rank-snapshot">
        <div class="rank-snapshot-title">${title}</div>
        <table class="ranking-table">
          <thead><tr><th>#</th><th>选手</th><th>积分</th></tr></thead>
          <tbody>
            ${data.map(r => `
              <tr${r.rank <= 3 ? ' class="podium"' : ''}>
                <td><span class="rank-num r${r.rank}">${r.rank}</span></td>
                <td>${esc(r.flag)} ${esc(r.name)}</td>
                <td>${r.points.toLocaleString()}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>`;
    box.innerHTML = `
      <div class="ranking-hero">
        <div class="ranking-hero-title">世界排名</div>
        <div class="ranking-hero-updated">${esc(WORLD_RANKINGS.updated)}</div>
      </div>
      <div class="ranking-grid">
        ${renderTable(WORLD_RANKINGS.women, '女单 TOP5')}
        ${renderTable(WORLD_RANKINGS.men, '男单 TOP5')}
      </div>`;
  }

  /* ---------- 商务代言渲染 ---------- */
  function renderEndorsements() {
    const boxes = $$('[data-render="endorse"]');
    if (!boxes.length) return;
    if (typeof ENDORSEMENTS === 'undefined') return;
    const catIcons = { '美妆': '💄', '餐饮': '🍔', '日化': '🧴', '3C': '📱', '家电': '🏠', '食品': '🍜', '奢侈': '💎', '互联网': '🌐', '运动': '🏃', '服装': '👕', '饮品': '🥤', '汽车': '🚗' };
    boxes.forEach(box => {
      const playerKey = box.dataset.endorsePlayer || document.body.dataset.endorsePlayer;
      const list = playerKey ? (ENDORSEMENTS[playerKey] || []) : [...(ENDORSEMENTS.sun || []), ...(ENDORSEMENTS.wang || [])];
      if (!list.length) return;
      box.innerHTML = list.map(e => `
        <a class="endorse-card" href="${esc(e.url)}" target="_blank" rel="noopener nofollow">
          <div class="ed-icon ${e.cat === '奢侈' ? 'ed-lux' : e.cat === '运动' ? 'ed-sport' : e.cat === '汽车' ? 'ed-car' : 'ed-normal'}">${catIcons[e.cat] || '⭐'}</div>
          <div class="ed-brand">${esc(e.brand)}</div>
          <div class="ed-role">${esc(e.role)}</div>
          <div class="ed-date">${esc(e.date)} · ${esc(e.cat)}</div>
          <div class="ed-link">查看详情 →</div>
        </a>`).join('');
    });
  }

  /* ---------- 视频筛选（按赛事分组） ---------- */
  function initVideoFilter() {
    const bar = $('.video-filter-bar');
    if (!bar) return;
    const chips = $$('.vf-chip[data-vf]', bar);
    if (!chips.length) return;

    const allGroups = typeof VIDEOS_TIMELINE !== 'undefined' ? VIDEOS_TIMELINE : [];

    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const f = chip.dataset.vf;
        renderVideoTimeline(f === 'all' ? allGroups : allGroups.filter(g => g.cat === f));
      });
    });
  }

  /* ---------- 心声墙 ---------- */
  function initMessageWall() {
    const wall = $('[data-msgwall="wall"]');
    if (!wall) return;
    const STORAGE_KEY = 'shatou_msgwall';
    const MY_ID_KEY = 'shatou_myid';

    // 获取或创建用户 ID
    let myId = localStorage.getItem(MY_ID_KEY);
    if (!myId) { myId = 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6); localStorage.setItem(MY_ID_KEY, myId); }

    const load = () => {
      try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch(e) { return []; }
    };
    const save = (msgs) => { localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs)); };

    const colorMap = {
      'pink': 'mw-pink', 'blue': 'mw-blue', 'gold': 'mw-gold', 'green': 'mw-green', 'lavender': 'mw-lavender'
    };

    const render = () => {
      const msgs = load();
      if (!msgs.length) {
        wall.innerHTML = '<div class="msgwall-empty">还没有人留言，来做第一个写下祝福的人吧 💌</div>';
        return;
      }
      wall.innerHTML = msgs.slice().reverse().map((m, i) => {
        const isMine = m.uid === myId;
        const bgClass = colorMap[m.color] || 'mw-pink';
        const dateStr = new Date(m.time).toLocaleString('zh-CN', { month:'numeric', day:'numeric', hour:'2-digit', minute:'2-digit' });
        return `
          <div class="msgwall-note ${bgClass}">
            <div class="mn-author">
              <span>${esc(m.name || '匿名球迷')}</span>
              ${isMine ? `<button class="mn-del" data-msgwall-del="${m.id}" title="删除">×</button>` : ''}
            </div>
            <div class="mn-msg">${esc(m.msg)}</div>
            <div class="mn-time">${dateStr}</div>
          </div>`;
      }).join('');
    };

    render();

    // 删除事件
    wall.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-msgwall-del]');
      if (!btn) return;
      const id = btn.dataset.msgwallDel;
      let msgs = load();
      msgs = msgs.filter(m => m.id !== id);
      save(msgs);
      render();
    });

    // 发帖按钮
    const postBtn = $('[data-msgwall="post"]');
    const nameInput = $('[data-msgwall="name"]');
    const msgInput = $('[data-msgwall="msg"]');
    if (!postBtn) return;

    // 颜色选择
    let selectedColor = 'pink';
    $$('[data-msgwall-color]').forEach(c => {
      c.addEventListener('click', () => {
        $$('[data-msgwall-color]').forEach(x => x.classList.remove('selected'));
        c.classList.add('selected');
        selectedColor = c.dataset.msgwallColor;
      });
    });

    postBtn.addEventListener('click', () => {
      const name = (nameInput ? nameInput.value.trim() : '') || '匿名球迷';
      const msg = msgInput ? msgInput.value.trim() : '';
      if (!msg) { alert('写点什么吧～'); return; }
      if (msg.length > 300) { alert('最多300字哦～'); return; }
      const msgs = load();
      msgs.push({
        id: 'm_' + Date.now().toString(36) + Math.random().toString(36).slice(2,5),
        uid: myId,
        name,
        msg,
        color: selectedColor,
        time: Date.now()
      });
      if (msgs.length > 200) msgs.shift(); // 最多保留200条
      save(msgs);
      if (msgInput) msgInput.value = '';
      render();
    });
  }

  /* ---------- 论坛页心声墙 tab 切换 ---------- */
  function initForumTabs() {
    const tabs = $$('[data-forum-tab]');
    if (!tabs.length) return;
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const section = tab.dataset.forumTab;
        $$('[data-forum-section]').forEach(s => s.style.display = 'none');
        const target = $(`[data-forum-section="${section}"]`);
        if (target) target.style.display = 'block';
      });
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    renderUpdates();
    renderNews();
    renderVideoTimeline();
    renderSources();
    initCountdown();
    initYear();
    renderCalendar();
    renderFeatured();
    renderLiveBar();
    initEncyclopediaTabs();
    initH2HTabs();
    initMessageWall();
    initForumTabs();
    renderTournamentArchive();
    renderHonors();
    renderFacts();
    renderQuotes();
    renderRankingCard();
    renderPlayerRanking();
    renderEndorsements();
    initVideoFilter();
    // 选手页自动渲染生涯时间线
    const pagePlayer = document.body.dataset.player;
    if ($('[data-render="career"]') && pagePlayer) {
      renderCareerTimeline(pagePlayer);
      // 选手页也预渲染 h2h（在隐藏的 tab 里）
      if ($('[data-enc-section="h2h"]') && $('[data-render="h2h"]')) {
        renderH2H(pagePlayer);
      }
    }
    // H2H 独立页自动渲染
    if ($('[data-render="h2h"]') && !pagePlayer) {
      renderH2H('sun');
    }
  });
})();
