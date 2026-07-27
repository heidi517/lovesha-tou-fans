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
    const target = box.dataset.target; // ISO 日期，留空则演示态
    const dEl = $('[data-cd="d"]', box), hEl = $('[data-cd="h"]', box),
          mEl = $('[data-cd="m"]', box), sEl = $('[data-cd="s"]', box);
    const pad = (n) => String(n).padStart(2, '0');
    const tick = () => {
      let diff;
      if (target) {
        diff = new Date(target).getTime() - Date.now();
      } else {
        // 演示态：循环倒计时
        diff = (typeof diff === 'undefined' ? 5 * 86400000 : diff) ;
        diff = Math.max(0, diff - 1000);
      }
      if (diff < 0) diff = 0;
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

  /* ---------- 年份 ---------- */
  function initYear() {
    const y = $('[data-year]');
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- 入口 ---------- */
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
  });
})();
