/* ===================================================================
   莎头球迷站 · 数据层 data.js
   ─────────────────────────────────────────────────────────────────
   说明：
   1. 球员资料部分为【公开事实】（姓名/籍贯/打法/主要荣誉），可放心引用。
   2. 「动态 / 资讯 / 视频 / 论坛帖子」均为【示例占位内容】，标有 sample 字段，
      上线前请用你实际收集的真实信息替换。示例内容不指向具体真实事件。
   3. 视频统一指向【官方正规来源】（央视体育/咪咕/WTT官网/ITTF等），不收录盗版。
   4. 接入真实论坛后端时，把 FORUM_BACKEND 配好即可（见底部）。
=================================================================== */

/* ---------- 双星公开资料 ---------- */
const PLAYERS = {
  sun: {
    id: 'sun',
    name: '孙颖莎',
    nick: '小魔王',
    mark: '莎',
    birth: '2000-11-04',
    hometown: '河北·石家庄',
    hand: '右手·横板',
    style: '正手进攻型，反手相持稳健，节奏快、杀伤力强',
    facts: [
      { k: '世界排名', v: '女单前列', sub: '长期稳居' },
      { k: '打法', v: '右手横板', sub: '两面反胶' },
      { k: '籍贯', v: '石家庄', sub: '河北' },
      { k: '招牌', v: '正手爆冲', sub: '小魔王' },
    ],
    honors: [
      { yr: '2024', ev: '奥运会 混双 & 团体', mk: 'GOLD' },
      { yr: '2024', ev: '奥运会 女单', mk: 'SILVER' },
      { yr: '2021', ev: '奥运会 团体', mk: 'GOLD' },
      { yr: '2021', ev: '奥运会 女单', mk: 'SILVER' },
      { yr: '多次', ev: '世乒赛 / 世界杯', mk: '冠军' },
      { yr: '长期', ev: '女单世界第一', mk: 'NO.1' },
      { yr: '多次', ev: 'WTT 大满贯', mk: '冠军' },
      { yr: '多届', ev: '全锦赛 / 全运会', mk: '冠军' },
    ],
  },
  wang: {
    id: 'wang',
    name: '王楚钦',
    nick: '大头',
    mark: '钦',
    birth: '2000-05-11',
    hometown: '吉林',
    hand: '左手·横板',
    style: '左手横板两面反胶，发球与正手抢冲突出，单板质量高',
    facts: [
      { k: '世界排名', v: '男单前列', sub: '长期稳居' },
      { k: '打法', v: '左手横板', sub: '两面反胶' },
      { k: '籍贯', v: '吉林', sub: '东北' },
      { k: '招牌', v: '正手抢冲', sub: '大头' },
    ],
    honors: [
      { yr: '2024', ev: '奥运会 混双 & 团体', mk: 'GOLD' },
      { yr: '2024', ev: '奥运会 男单', mk: '参赛' },
      { yr: '多次', ev: '世乒赛 男双/混双', mk: '冠军' },
      { yr: '多次', ev: '世界杯 / WTT', mk: '冠军' },
      { yr: '长期', ev: '男单世界第一', mk: 'NO.1' },
      { yr: '多届', ev: '全锦赛 / 全运会', mk: '冠军' },
      { yr: '多次', ev: 'WTT 大满贯', mk: '冠军' },
      { yr: '多届', ev: '亚运会 / 亚锦', mk: '冠军' },
    ],
  },
};

/* ---------- 首页：最新动态（示例） ---------- */
const UPDATES = [
  { date: '示例日期', player: 'sun', tag: '动态', title: '【示例】孙颖莎近期训练动态', excerpt: '此处为占位内容：介绍选手近期训练/备赛情况。上线前替换为真实动态并注明来源。', src: '待替换', sample: true },
  { date: '示例日期', player: 'wang', tag: '动态', title: '【示例】王楚钦近期赛事安排', excerpt: '此处为占位内容：介绍选手近期赛事与状态。上线前替换为真实信息并注明来源。', src: '待替换', sample: true },
  { date: '示例日期', player: 'both', tag: '混双', title: '【示例】莎头组合·混双前瞻', excerpt: '此处为占位内容：混双组合备战或看点分析。上线前替换为真实报道并注明来源。', src: '待替换', sample: true },
];

/* ---------- 资讯流（示例） ---------- */
const NEWS = [
  { cat: 'domestic', tag: '国内', color: 't-red', title: '【示例】国乒备战最新赛事', excerpt: '占位内容：国内乒乓球队集训、出征等报道。上线前替换真实资讯并注明出处。', src: '央视体育/新华社等', date: '示例日期', sample: true },
  { cat: 'international', tag: '国际', color: 't-blue', title: '【示例】WTT 系列赛赛程看点', excerpt: '占位内容：国际赛事日程与看点。上线前替换真实资讯并注明出处。', src: 'WTT 官网/ITTF', date: '示例日期', sample: true },
  { cat: 'domestic', tag: '国内', color: 't-gold', title: '【示例】乒超联赛动态', excerpt: '占位内容：俱乐部乒超赛事报道。上线前替换真实资讯并注明出处。', src: '中国乒协/央视体育', date: '示例日期', sample: true },
  { cat: 'international', tag: '国际', color: 't-dark', title: '【示例】世乒赛/世界杯综述', excerpt: '占位内容：国际大赛综述与分析。上线前替换真实资讯并注明出处。', src: 'ITTF/WTT 官网', date: '示例日期', sample: true },
  { cat: 'domestic', tag: '国内', color: 't-green', title: '【示例】全锦赛/全运会资讯', excerpt: '占位内容：国内综合赛事资讯。上线前替换真实资讯并注明出处。', src: '中国乒协', date: '示例日期', sample: true },
  { cat: 'international', tag: '国际', color: 't-plum', title: '【示例】国际排名与积分变化', excerpt: '占位内容：世界排名变化解读。上线前替换真实资讯并注明出处。', src: 'ITTF 官网', date: '示例日期', sample: true },
];

/* ---------- 比赛视频（示例 · 统一官方源） ---------- */
const VIDEOS = [
  { src: '央视体育', color: 't-red', title: '【示例】国乒赛事精彩集锦', meta: '官方集锦 · 正版', url: 'https://sports.cctv.com/', sample: true },
  { src: '咪咕视频', color: 't-blue', title: '【示例】乒乓赛事直播回放', meta: '官方直播 · 正版', url: 'https://www.miguvideo.com/', sample: true },
  { src: 'WTT 官网', color: 't-gold', title: '【示例】WTT 赛事回放与集锦', meta: 'WTT World · 正版', url: 'https://worldtabletennis.com/', sample: true },
  { src: 'ITTF 官网', color: 't-dark', title: '【示例】国际乒联赛事档案', meta: 'ITTF · 正版', url: 'https://www.ittf.com/', sample: true },
  { src: '中国乒协', color: 't-green', title: '【示例】国内赛事官方报道', meta: '中国乒协 · 正版', url: 'https://www.ctta.cn/', sample: true },
  { src: '央视体育', color: 't-plum', title: '【示例】专题报道与人物', meta: '央视体育 · 正版', url: 'https://sports.cctv.com/', sample: true },
];

/* ---------- 论坛分区与示例帖 ---------- */
const FORUM_CATS = [
  { id: 'all', name: '全部', ico: '☰', count: 8 },
  { id: 'match', name: '赛事讨论', ico: '🏆', count: 3 },
  { id: 'cheer', name: '选手应援', ico: '⭐', count: 2 },
  { id: 'tech', name: '技术交流', ico: '🏓', count: 2 },
  { id: 'water', name: '闲聊水区', ico: '💬', count: 1 },
];

const FORUM_THREADS = [
  { cat: 'match', pin: true, title: '【示例·置顶】赛事观赛指南与转播渠道汇总', excerpt: '占位内容：汇总官方转播渠道（央视/咪咕/WTT官网），避免误入盗播。上线前替换真实内容。', author: '吧主', color: 't-red', replies: 128, views: '2.1k', time: '示例时间', sample: true },
  { cat: 'cheer', title: '【示例】孙颖莎应援楼', excerpt: '占位内容：球迷应援与讨论区。上线前替换真实内容。', author: '球迷A', color: 't-gold', replies: 86, views: '1.3k', time: '示例时间', sample: true },
  { cat: 'cheer', title: '【示例】王楚钦应援楼', excerpt: '占位内容：球迷应援与讨论区。上线前替换真实内容。', author: '球迷B', color: 't-blue', replies: 72, views: '1.1k', time: '示例时间', sample: true },
  { cat: 'tech', title: '【示例】正手爆冲技术讨论', excerpt: '占位内容：技术交流帖。上线前替换真实内容。', author: '球友C', color: 't-green', replies: 54, views: '780', time: '示例时间', sample: true },
  { cat: 'tech', title: '【示例】左手横板打法解析', excerpt: '占位内容：技术交流帖。上线前替换真实内容。', author: '球友D', color: 't-dark', replies: 43, views: '640', time: '示例时间', sample: true },
  { cat: 'match', title: '【示例】混双"莎头组合"观赛帖', excerpt: '占位内容：混双观赛讨论。上线前替换真实内容。', author: '球迷E', color: 't-plum', replies: 39, views: '520', time: '示例时间', sample: true },
  { cat: 'water', title: '【示例】日常水区·今天练球了吗', excerpt: '占位内容：闲聊水区。上线前替换真实内容。', author: '球友F', color: 't-red', replies: 24, views: '310', time: '示例时间', sample: true },
  { cat: 'match', title: '【示例】近期赛事结果速报', excerpt: '占位内容：赛果速报。上线前替换真实内容。', author: '吧主', color: 't-gold', replies: 18, views: '280', time: '示例时间', sample: true },
];

/* ---------- 官方正规来源清单 ---------- */
const SOURCES = [
  { name: '央视体育 CCTV5', desc: '官方转播 · 赛事直播/集锦', host: 'sports.cctv.com', url: 'https://sports.cctv.com/', color: 't-red', abbr: '央' },
  { name: 'WTT 世界乒联', desc: 'WTT 系列赛官网 · 赛程/回放', host: 'worldtabletennis.com', url: 'https://worldtabletennis.com/', color: 't-gold', abbr: 'W' },
  { name: 'ITTF 国际乒联', desc: '国际乒联官网 · 排名/档案', host: 'ittf.com', url: 'https://www.ittf.com/', color: 't-blue', abbr: 'I' },
  { name: '中国乒协 CTTA', desc: '中国乒协官网 · 国内赛事', host: 'ctta.cn', url: 'https://www.ctta.cn/', color: 't-green', abbr: '协' },
  { name: '咪咕视频', desc: '乒乓赛事正版直播平台', host: 'miguvideo.com', url: 'https://www.miguvideo.com/', color: 't-dark', abbr: '咪' },
  { name: '新华社体育', desc: '权威赛事报道', host: 'xinhuanet.com', url: 'https://www.xinhuanet.com/sports/', color: 't-plum', abbr: '华' },
];

/* ===================================================================
   论坛后端接入配置（静态站当前为演示态）
   推荐方案：接入 Giscus（基于 GitHub Discussions，免费、零成本托管）
   步骤见 about.html / 代码注释
=================================================================== */
const FORUM_BACKEND = {
  enabled: false,                 // 接入后改为 true
  type: 'giscus',                 // 'giscus' | 'custom-api'
  repo: '',                       // '你的用户名/仓库名'
  repoId: '',
  category: 'Announcements',
  categoryId: '',
  // 若用自定义后端：
  apiBase: '',                    // 例如 https://your-api.com
};
