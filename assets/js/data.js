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
      { yr: '2026', ev: 'WTT美国大满贯 女单', mk: 'GOLD' },
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
      { k: '身份', v: '男队队长', sub: '2026年起' },
    ],
    honors: [
      { yr: '2026', ev: '国乒男队队长', mk: 'CAPTAIN' },
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

/* ---------- 首页：最新动态 ---------- */
const UPDATES = [
  { date: '2026-07-23', player: 'both', tag: '乒超', title: '2026乒超联赛大连开赛：孙颖莎、王楚钦双双出战', excerpt: '新赛季乒超联赛今日在辽宁大连开赛。王楚钦代表山东魏桥首战对阵山东鲁能，孙颖莎留守深圳大学首秀对阵成都高新。联赛实行新赛制，每队须有U19球员在前三盘登场。', src: '中国乒协', url: 'https://www.ctta.cn/' },
  { date: '2026-07-20', player: 'both', tag: '全锦赛', title: '全锦赛双打落幕：马龙/许昕男双夺冠，莎头组合混双止步半决赛', excerpt: '2026年全国乒乓球锦标赛双打比赛在长沙收官。王楚钦/孙颖莎作为头号种子搭档混双，半决赛2-3不敌袁励岑/王艺迪。马龙/许昕时隔六年再度联手，3-0横扫夺得男双冠军。', src: '新华社 / 中国乒协', url: 'https://www.ctta.cn/xwzx/ppxw/2026/0720/702758.html' },
  { date: '2026-07-06', player: 'sun', tag: '大满贯', title: '孙颖莎美国大满贯七局苦战夺冠，第六座大满贯入账', excerpt: 'WTT美国大满贯女单决赛，孙颖莎与蒯曼鏖战七局，在第六局浪费三个赛点后决胜局11-4锁定胜局。这是她本赛季第二座大满贯冠军，职业生涯第六座。', src: 'Olympics.com', url: 'https://www.olympics.com/zh/news/2026-us-smash-sun-yingsha-edges-kuaiman-seven-game-thriller-clinch-title-china-three-crowns' },
];

/* ---------- 资讯流 ---------- */
const NEWS = [
  { cat: 'international', tag: '国际', color: 't-red', title: 'WTT美国大满贯：孙颖莎七局力克蒯曼夺冠，国乒3冠3亚收官', excerpt: '7月6日，2026年WTT美国大满贯赛在洛杉矶收官。孙颖莎女单决赛4-3险胜蒯曼，斩获个人第六座大满贯冠军。中国队包揽女单、男双、女双三项冠军，王楚钦/孙颖莎混双摘银。', src: 'Olympics.com / WTT 官网', date: '2026-07-06', url: 'https://www.olympics.com/zh/news/2026-us-smash-sun-yingsha-edges-kuaiman-seven-game-thriller-clinch-title-china-three-crowns' },
  { cat: 'domestic', tag: '国内', color: 't-blue', title: '全锦赛双打落幕：马龙/许昕时隔六年再夺冠，蒯曼兼项双冠', excerpt: '7月19日，2026年全国乒乓球锦标赛双打比赛在长沙收官。马龙/许昕3-0横扫新生代组合夺得男双冠军；林诗栋/蒯曼混双登顶；蒯曼/覃予萱女双摘金。全锦赛团体和单打将于12月16日在福州进行。', src: '新华社 / 中国乒协', date: '2026-07-20', url: 'https://www.ctta.cn/xwzx/ppxw/2026/0720/702758.html' },
  { cat: 'domestic', tag: '国内', color: 't-gold', title: '2026乒超联赛名单公布：孙颖莎王楚钦领衔，7月23日大连开赛', excerpt: '中国乒协公示2026赛季乒超联赛注册名单。王楚钦继续代表山东魏桥·向尚运动出战，孙颖莎留守深圳大学。联赛实行新赛制：每队须有U19球员在前三盘登场。常规赛7月23日大连、7月29日雄安两站。', src: '中国乒协 / 央视体育', date: '2026-07-23', url: 'https://www.ctta.cn/' },
  { cat: 'international', tag: '国际', color: 't-dark', title: 'WTT美国大满贯：国乒男单无缘八强，王楚钦止步第三轮', excerpt: '本届美国大满贯男单赛场，王楚钦第三轮不敌丹麦选手林德，林诗栋同样在该轮出局，国乒男单创大满贯赛最差战绩。日本小将松岛辉空最终夺得男单冠军，成为日本乒坛首位大满贯男单冠军。', src: 'WTT 官网 / 环球时报', date: '2026-07-06', url: 'https://c.m.163.com/news/a/L17FD6HU0514R9OJ.html' },
  { cat: 'domestic', tag: '国内', color: 't-green', title: '乒超新赛季大变革：外援全清+U19新规，王楚钦首战对鲁能', excerpt: '本届乒超取消所有外协会选手报名，每队强制注册U19球员且前三盘必须登场。揭幕战7月23日上午山东魏桥对阵山东鲁能，王楚钦、梁靖崑领衔出战。孙颖莎深圳大学当晚首秀对阵成都高新。', src: '中国乒协 / 搜狐体育', date: '2026-07-23', url: 'https://new.qq.com/rain/a/20260723A03PWG00' },
  { cat: 'domestic', tag: '国内', color: 't-plum', title: '全锦赛双打：王楚钦/孙颖莎混双止步半决赛，马龙/许昕老将合体', excerpt: '本届全锦赛首次将双打单独设为一站，打破省区市组队限制。王楚钦/孙颖莎作为头号种子搭档混双，半决赛2-3不敌袁励岑/王艺迪。马龙/许昕时隔六年再度联手出战男双。', src: '央视体育 / 新华社', date: '2026-07-14', url: 'https://ysxw.cctv.cn/article.html?item_id=11812953281190128643' },
];

/* ---------- 比赛视频 · 统一官方源 ---------- */
const VIDEOS = [
  { src: '央视体育', color: 't-red', title: 'WTT美国大满贯：孙颖莎女单夺冠集锦', meta: '央视体育 · 官方集锦', url: 'https://sports.cctv.com/', sample: true },
  { src: '咪咕视频', color: 't-blue', title: '乒乓赛事直播回放', meta: '官方直播 · 正版', url: 'https://www.miguvideo.com/', sample: true },
  { src: 'WTT 官网', color: 't-gold', title: 'WTT 赛事回放与集锦', meta: 'WTT World · 正版', url: 'https://worldtabletennis.com/', sample: true },
  { src: 'ITTF 官网', color: 't-dark', title: '国际乒联赛事档案', meta: 'ITTF · 正版', url: 'https://www.ittf.com/', sample: true },
  { src: '中国乒协', color: 't-green', title: '国内赛事官方报道', meta: '中国乒协 · 正版', url: 'https://www.ctta.cn/', sample: true },
  /* 专题报道与人物 —— 央视《体坛零距离》系列 */
  { src: '央视·体坛零距离', color: 't-plum', title: '孙颖莎：全力以赴 继续追梦', meta: '2025-05-29 · 最好的自己', url: 'https://tv.cctv.com/2025/05/29/VIDE4IcWrlw4Qy9aTMUM6rT5250529.shtml' },
  { src: '央视·体坛零距离', color: 't-plum', title: '王楚钦：男队被质疑，我要站出来', meta: '2026-04-30 · 出征伦敦世乒赛', url: 'https://tv.cctv.cn/2026/04/30/VIDE2b7v4GoZm7aFboWjpcRM260430.shtml' },
  { src: '央视·体坛零距离', color: 't-plum', title: '王楚钦回应出任男队队长：接好马龙的接力棒', meta: '2026-06-11 · 王皓宣布任命', url: 'https://tv.cctv.cn/' },
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
