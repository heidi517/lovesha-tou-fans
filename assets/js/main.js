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

  /* ---------- 通用渲染：视频 ---------- */
  function renderVideos() {
    const box = $('[data-render="videos"]');
    if (!box) return;
    box.innerHTML = VIDEOS.map((v) => {
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

  /* ---------- 论坛渲染 + 筛选 ---------- */
  function renderForum() {
    const box = $('[data-render="threads"]');
    if (!box) return;
    const paint = (list) => {
      box.innerHTML = list.map((t) => {
        const flag = t.sample ? '<span class="sample-flag">示例</span>' : '';
        const pin = t.pin ? '<span class="thread-pin">📌 置顶</span> ' : '';
        const initials = esc(t.author).slice(0, 1);
        return `
          <div class="thread">
            <div class="thread-ava ${t.color}">${initials}</div>
            <div class="thread-main">
              <div class="tt">${pin}${flag}${esc(t.title)}</div>
              <div class="ex">${esc(t.excerpt)}</div>
              <div class="meta"><span>@${esc(t.author)}</span><span>${esc(t.time)}</span><span>${esc(t.views)} 浏览</span></div>
            </div>
            <div class="thread-side"><div class="replies">${t.replies}</div>回复</div>
          </div>`;
      }).join('');
      const empty = $('#forumEmpty');
      if (empty) empty.style.display = list.length ? 'none' : 'block';
    };
    paint(FORUM_THREADS);
    $$('.forum-cats .cat').forEach((c) => {
      c.addEventListener('click', () => {
        $$('.forum-cats .cat').forEach((x) => x.classList.remove('active'));
        c.classList.add('active');
        const f = c.dataset.cat;
        paint(f === 'all' ? FORUM_THREADS : FORUM_THREADS.filter((t) => t.cat === f));
      });
    });
  }

  /* ---------- 论坛发帖弹窗（演示态 + 后端接入点） ---------- */
  function initPostModal() {
    const fab = $('[data-fab="post"]');
    const mask = $('#postModal');
    if (!fab || !mask) return;
    const close = $('.modal-close', mask);
    const open = () => mask.classList.add('show');
    const hide = () => mask.classList.remove('show');
    fab.addEventListener('click', open);
    close && close.addEventListener('click', hide);
    mask.addEventListener('click', (e) => { if (e.target === mask) hide(); });

    const form = $('form', mask);
    form && form.addEventListener('submit', (e) => {
      e.preventDefault();
      /* ── 后端接入点 ─────────────────────────────
         当前为静态站，无持久化能力。接入方式：
         A) Giscus（推荐·零成本）：在 about.html 按引导把
            <script src="https://giscus.app/client.js" ...> 放进论坛页，
            并在 data.js 的 FORUM_BACKEND 填好 repo / repoID 等。
         B) 自定义后端：把下面 fetch 的 URL 改成你的 API，
            apiBase 见 data.js → FORUM_BACKEND.apiBase。
      ─────────────────────────────────────────── */
      const title = $('#postTitle', form).value.trim();
      const cat = $('#postCat', form).value;
      const body = $('#postBody', form).value.trim();
      if (!title || !body) { alert('标题和内容都要填哦～'); return; }
      if (typeof FORUM_BACKEND !== 'undefined' && FORUM_BACKEND.enabled && FORUM_BACKEND.apiBase) {
        fetch(FORUM_BACKEND.apiBase + '/threads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, cat, body }),
        }).then(() => { hide(); form.reset(); alert('发帖成功！'); location.reload(); })
          .catch(() => alert('网络出错了，稍后再试。'));
      } else {
        // 演示态：仅提示
        hide();
        form.reset();
        alert('【演示模式】当前为静态站，帖子暂不保存。\n接入 Giscus 或自建后端后即可真实发帖（见 about 页说明）。');
      }
    });
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
        const rows = ev.results.map(r => `
          <tr>
            <td>${ev.date}${ev.endDate ? ' –<br>' + ev.endDate : ''}</td>
            <td><span class="archive-event-name">${esc(ev.name)}</span></td>
            <td><span class="archive-event-type ${typeClass(ev.type)}">${esc(ev.type)}${ev.points ? ' · ' + ev.points + '分' : ''}</span></td>
            <td><span class="archive-player">${playerLabel(r.player)}</span></td>
            <td>${esc(r.event)}</td>
            <td><span class="archive-result ${resultClass(r.result)}">${esc(r.result)}</span></td>
            <td style="font-size:13px;">${esc(r.detail)}</td>
            <td><a class="archive-src" href="${esc(ev.url)}" target="_blank" rel="noopener nofollow">${esc(ev.src)}</a></td>
          </tr>`).join('');
        return rows;
      }).join('');
      return `
        <div class="archive-year">${yr.year} 赛季</div>
        <div style="overflow-x:auto;">
          <table class="archive-table">
            <thead>
              <tr>
                <th>日期</th><th>赛事</th><th>级别</th><th>选手</th><th>项目</th><th>成绩</th><th>详情</th><th>来源</th>
              </tr>
            </thead>
            <tbody>${eventsHtml}</tbody>
          </table>
        </div>`;
    }).join('')
    + `<div class="archive-disclaimer"><span>📋</span><div><b>数据说明：</b>本档案整理自公开赛事结果，以官方公布为准。部分早期赛事成绩标注"待补充"，欢迎通过论坛提供信息。标注"以官方为准"的项目请在 ITTF/WTT 官网核实。</div></div>`;
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
    renderVideos();
    renderSources();
    renderForum();
    initPostModal();
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
