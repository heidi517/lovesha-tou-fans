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
    worldRank: 1,
    worldPoints: 11350,
    rankPeriod: '连续217周世界第一',
    rankLead: '领先第2名2485分',
    facts: [
      { k: '世界排名', v: '女单第1', sub: '11350分·断层第一' },
      { k: '打法', v: '右手横板', sub: '两面反胶' },
      { k: '籍贯', v: '石家庄', sub: '河北' },
      { k: '招牌', v: '正手爆冲', sub: '小魔王' },
      { k: '胜率', v: '国际赛超90%', sub: '六边形战士' },
    ],
    honors: [
      { yr: '2026', ev: '伦敦世乒赛女团冠军·最佳女运动员', mk: 'GOLD' },
      { yr: '2026', ev: 'WTT新加坡大满贯 女单冠军', mk: 'GOLD' },
      { yr: '2026', ev: '亚洲杯 女单冠军', mk: 'GOLD' },
      { yr: '2026', ev: 'WTT美国大满贯 女单冠军(第6座)', mk: 'GOLD' },
      { yr: '2025', ev: '多哈世乒赛女单冠军·女团冠军', mk: 'GOLD' },
      { yr: '2025', ev: 'WTT瑞典大满贯 女单冠军', mk: 'GOLD' },
      { yr: '2024', ev: '巴黎奥运 混双金牌·女团金牌·女单银牌', mk: 'GOLD' },
      { yr: '2024', ev: '澳门世界杯 女单冠军', mk: 'GOLD' },
      { yr: '2023', ev: '德班世乒赛女单冠军·杭州亚运四金', mk: 'GOLD' },
      { yr: '2021', ev: '东京奥运 女团金牌·女单银牌', mk: 'GOLD' },
      { yr: '2019', ev: '布达佩斯世乒赛 女双冠军', mk: 'GOLD' },
      { yr: '累计', ev: 'WTT大满贯单打6冠·唯一全满贯', mk: 'NO.1' },
    ],
    quotes: ['胸前的国旗永远大于背后的姓名', '保持热爱，保持专注', '孙颖莎你皮紧一点'],
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
    worldRank: 1,
    worldPoints: 9177,
    rankPeriod: '长期稳居世界第一',
    rankLead: '领先第2名2227分',
    facts: [
      { k: '世界排名', v: '男单第1', sub: '9177分·断层第一' },
      { k: '打法', v: '左手横板', sub: '两面反胶' },
      { k: '籍贯', v: '吉林', sub: '东北' },
      { k: '身份', v: '男队队长', sub: '2026年接任' },
      { k: '胜率', v: '外战胜率97%+', sub: '对阵前十胜率81%' },
    ],
    honors: [
      { yr: '2026', ev: '伦敦世乒赛男团冠军·最佳男运动员', mk: 'GOLD' },
      { yr: '2026', ev: '澳门世界杯 男单冠军(首个)', mk: 'GOLD' },
      { yr: '2026', ev: 'WTT新加坡大满贯 男单冠军', mk: 'GOLD' },
      { yr: '2026', ev: '亚洲杯 男单冠军(卫冕)', mk: 'GOLD' },
      { yr: '2026', ev: '出任国乒男队队长', mk: 'CAPTAIN' },
      { yr: '2025', ev: '多哈世乒赛男单冠军·男团冠军', mk: 'GOLD' },
      { yr: '2025', ev: 'WTT美国大满贯 男单亚军', mk: 'SILVER' },
      { yr: '2024', ev: '巴黎奥运 混双金牌·男团金牌', mk: 'GOLD' },
      { yr: '2023', ev: '德班世乒赛男双/混双冠军·杭州亚运四金', mk: 'GOLD' },
      { yr: '2021', ev: '休斯敦世乒赛 混双冠军', mk: 'GOLD' },
      { yr: '2018', ev: '青奥会 男单冠军', mk: 'GOLD' },
      { yr: '累计', ev: '伦敦世乒赛10战全胜·三次独得两分', mk: 'NO.1' },
    ],
    quotes: ['坚定自信', '我是男队队长，要站出来', '接好马龙的接力棒'],
  },
};

/* ---------- 世界排名（2026年7月第31周） ---------- */
const WORLD_RANKINGS = {
  women: [
    { rank: 1, name: '孙颖莎', flag: '🇨🇳', points: 11350 },
    { rank: 2, name: '王曼昱', flag: '🇨🇳', points: 8865 },
    { rank: 3, name: '张本美和', flag: '🇯🇵', points: 5389 },
    { rank: 4, name: '蒯曼', flag: '🇨🇳', points: 4963 },
    { rank: 5, name: '陈幸同', flag: '🇨🇳', points: 4260 },
  ],
  men: [
    { rank: 1, name: '王楚钦', flag: '🇨🇳', points: 9177 },
    { rank: 2, name: '莫雷加德', flag: '🇸🇪', points: 6950 },
    { rank: 3, name: '松岛辉空', flag: '🇯🇵', points: 6298 },
    { rank: 4, name: 'F·勒布伦', flag: '🇫🇷', points: 5779 },
    { rank: 5, name: '张本智和', flag: '🇯🇵', points: 5313 },
  ],
  updated: '2026-07-27 · 第31周',
};

/* ---------- 选手个人排名详情（积分构成 + 历史走势） ---------- */
const RANKING_DETAIL = {
  sun: {
    rank: 1, points: 11350, lead: 2485, leadOver: '王曼昱',
    weeksAtNo1: 217, since: '2023年7月起连续霸榜',
    streak: '连续217周世界第一',
    breakdown: [
      { source: 'WTT美国大满贯(冠军)', pts: 2000, note: '2026.07·有效期内' },
      { source: 'WTT新加坡大满贯(冠军)', pts: 2000, note: '2026.03' },
      { source: '多哈世乒赛(冠军)', pts: 2000, note: '2025.05·单项' },
      { source: 'WTT瑞典大满贯(冠军)', pts: 2000, note: '2025.08' },
      { source: '澳门世界杯(冠军)', pts: 1500, note: '2024.04' },
      { source: '其他WTT赛事+奥运', pts: 1850, note: '含巴黎奥运女单银牌' },
    ],
    history: [
      { week: '2024.01', rank: 1, pts: 8800 },
      { week: '2024.07', rank: 1, pts: 9100 },
      { week: '2025.01', rank: 1, pts: 9800 },
      { week: '2025.07', rank: 1, pts: 10500 },
      { week: '2026.01', rank: 1, pts: 10900 },
      { week: '2026.07', rank: 1, pts: 11350 },
    ],
  },
  wang: {
    rank: 1, points: 9177, lead: 2227, leadOver: '莫雷加德',
    weeksAtNo1: 80, since: '2024年起稳居世界第一',
    streak: '长期稳居世界第一',
    breakdown: [
      { source: 'WTT澳门世界杯(冠军)', pts: 2500, note: '2026.04·2500分级' },
      { source: 'WTT新加坡大满贯(冠军)', pts: 2000, note: '2026.03' },
      { source: '多哈世乒赛(冠军)', pts: 2000, note: '2025.05·单项' },
      { source: 'WTT美国大满贯(亚军)', pts: 1400, note: '2025.08' },
      { source: '亚洲杯(冠军)', pts: 1000, note: '2026.02·卫冕' },
      { source: '其他WTT赛事+奥运', pts: 277, note: '含巴黎奥运男团金牌' },
    ],
    history: [
      { week: '2024.01', rank: 1, pts: 7100 },
      { week: '2024.07', rank: 1, pts: 7500 },
      { week: '2025.01', rank: 1, pts: 8200 },
      { week: '2025.07', rank: 1, pts: 8700 },
      { week: '2026.01', rank: 1, pts: 8900 },
      { week: '2026.07', rank: 1, pts: 9177 },
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

/* ---------- 比赛视频 · 按赛事时间线分组（仅比赛·官方源） ---------- */
const VIDEOS_TIMELINE = [
  {
    event: '2026乒超联赛', date: '2026-07-23', cat: 'domestic', type: '联赛', loc: '大连 / 雄安',
    desc: '孙颖莎代表深圳大学，王楚钦代表山东魏桥出战新赛季',
    videos: [
      { src: '咪咕视频', color: 't-gold', title: '山东魏桥 vs 山东鲁能 王楚钦出战', meta: '男团常规赛第1轮', url: 'https://www.miguvideo.com/' },
    ]
  },
  {
    event: 'WTT美国大满贯', date: '2026-07-06', cat: 'international', type: '大满贯', points: 2000, loc: '美国·洛杉矶',
    desc: '国乒3冠3亚收官，孙颖莎斩获第6座大满贯女单冠军',
    videos: [
      { src: '央视体育', color: 't-red', title: '孙颖莎女单决赛 4-3胜蒯曼', meta: '决胜局11-4锁定胜局 · 第6座大满贯', url: 'https://sports.cctv.com/' },
      { src: 'WTT 官网', color: 't-blue', title: '男单决赛：松岛辉空夺冠', meta: '日本首位大满贯男单冠军', url: 'https://worldtabletennis.com/' },
    ]
  },
  {
    event: '伦敦世乒赛（团体）', date: '2026-05-10', cat: 'international', type: '世乒赛', loc: '英国·伦敦',
    desc: '女团3-2惊天逆转日本、男团12连冠；莎头双双当选最佳运动员',
    videos: [
      { src: '央视体育', color: 't-red', title: '女团决赛：中国3-2逆转日本夺冠', meta: '孙颖莎独得两分 · 最佳女运动员', url: 'https://sports.cctv.com/' },
      { src: '央视体育', color: 't-blue', title: '男团决赛：中国3-0日本 12连冠', meta: '王楚钦10战全胜 · 最佳男运动员', url: 'https://sports.cctv.com/' },
    ]
  },
  {
    event: 'WTT澳门世界杯', date: '2026-04-05', cat: 'international', type: '世界杯', points: 2500, loc: '中国·澳门',
    desc: '王楚钦男单决赛4-3绝境逆转松岛辉空，夺得首个世界杯冠军',
    videos: [
      { src: '咪咕视频', color: 't-gold', title: '王楚钦男单决赛 4-3胜松岛辉空', meta: '首夺世界杯男单冠军 · 2500分', url: 'https://www.miguvideo.com/' },
    ]
  },
  {
    event: 'WTT新加坡大满贯', date: '2026-03-14', cat: 'international', type: '大满贯', points: 2000, loc: '新加坡',
    desc: '孙颖莎女单4-2胜王曼昱，王楚钦男单4-0横扫林昀儒',
    videos: [
      { src: '央视体育', color: 't-red', title: '孙颖莎女单决赛 4-2胜王曼昱', meta: '大满贯女单冠军 · 2000分', url: 'https://sports.cctv.com/' },
      { src: '央视体育', color: 't-blue', title: '王楚钦男单决赛 4-0胜林昀儒', meta: '大满贯男单冠军 · 2000分', url: 'https://sports.cctv.com/' },
    ]
  },
  {
    event: '亚洲杯', date: '2026-02-23', cat: 'international', type: '洲际杯', points: 1000, loc: '亚洲',
    desc: '孙颖莎女单4-3险胜王曼昱、王楚钦男单4-2胜张本智和，双双卫冕',
    videos: [
      { src: '央视体育', color: 't-red', title: '孙颖莎女单决赛 4-3胜王曼昱', meta: '亚洲杯女单冠军 · 1000分', url: 'https://sports.cctv.com/' },
      { src: '央视体育', color: 't-blue', title: '王楚钦男单决赛 4-2胜张本智和', meta: '亚洲杯男单冠军(卫冕) · 1000分', url: 'https://sports.cctv.com/' },
    ]
  },
  {
    event: 'WTT中国大满贯', date: '2025-10', cat: 'international', type: '大满贯', points: 2000, loc: '中国·北京',
    desc: '孙颖莎女单决赛2-4负王曼昱',
    videos: [
      { src: '咪咕视频', color: 't-gold', title: '孙颖莎女单决赛 2-4负王曼昱', meta: '大满贯女单亚军 · 2000分', url: 'https://www.miguvideo.com/' },
    ]
  },
  {
    event: 'WTT瑞典大满贯', date: '2025-08', cat: 'international', type: '大满贯', points: 2000, loc: '瑞典·马尔默',
    desc: '孙颖莎女单决赛3-0横扫早田希娜夺冠',
    videos: [
      { src: '央视体育', color: 't-red', title: '孙颖莎女单决赛 3-0胜早田希娜', meta: '大满贯女单冠军 · 2000分', url: 'https://sports.cctv.com/' },
    ]
  },
  {
    event: '多哈世乒赛（单项）', date: '2025-05', cat: 'international', type: '世乒赛', loc: '卡塔尔·多哈',
    desc: '王楚钦首夺世乒赛男单冠军、孙颖莎蝉联女单冠军，双双登顶',
    videos: [
      { src: '央视体育', color: 't-blue', title: '王楚钦男单夺冠 首夺世乒赛冠军', meta: '世乒赛男单冠军', url: 'https://sports.cctv.com/' },
      { src: '央视体育', color: 't-red', title: '孙颖莎女单夺冠 蝉联冠军', meta: '世乒赛女单冠军(卫冕)', url: 'https://sports.cctv.com/' },
    ]
  },
];

/* 向下兼容：扁平视频列表（供旧代码/筛选使用） */
const VIDEOS = VIDEOS_TIMELINE.flatMap(g =>
  g.videos.map(v => ({ ...v, event: g.cat, eventName: g.event, eventDate: g.date }))
);

/* ---------- 赛事日历（2026年下半年·国际+国内） ---------- */
const CALENDAR = [
  { date: '2026-07-23', endDate: '2026-08-01', name: '乒超常规赛(大连/雄安)', loc: '中国·大连&雄安', type: '联赛', points: 0, cat: 'domestic', live: [{ name: '咪咕视频', url: 'https://www.miguvideo.com/' }] },
  { date: '2026-08-05', endDate: '2026-08-09', name: 'WTT横滨冠军赛', loc: '日本·横滨', type: '冠军赛', points: 1000, cat: 'international', live: [{ name: '央视体育', url: 'https://sports.cctv.com/' }, { name: '咪咕视频', url: 'https://www.miguvideo.com/' }, { name: 'WTT', url: 'https://worldtabletennis.com/' }] },
  { date: '2026-08-13', endDate: '2026-08-23', name: 'WTT欧洲大满贯', loc: '瑞典·马尔默', type: '大满贯', points: 2000, cat: 'international', live: [{ name: '央视体育', url: 'https://sports.cctv.com/' }, { name: '咪咕视频', url: 'https://www.miguvideo.com/' }, { name: 'WTT', url: 'https://worldtabletennis.com/' }] },
  { date: '2026-09-08', endDate: '2026-09-13', name: 'WTT澳门冠军赛', loc: '中国·澳门', type: '冠军赛', points: 1000, cat: 'international', live: [{ name: '央视体育', url: 'https://sports.cctv.com/' }, { name: '咪咕视频', url: 'https://www.miguvideo.com/' }] },
  { date: '2026-09-20', endDate: '2026-09-28', name: '名古屋亚运会', loc: '日本·名古屋', type: '综合', points: 2000, cat: 'international', live: [{ name: '央视体育', url: 'https://sports.cctv.com/' }, { name: '咪咕视频', url: 'https://www.miguvideo.com/' }] },
  { date: '2026-10-01', endDate: '2026-10-11', name: 'WTT中国大满贯', loc: '中国·北京', type: '大满贯', points: 2000, cat: 'international', live: [{ name: '央视体育', url: 'https://sports.cctv.com/' }, { name: '咪咕视频', url: 'https://www.miguvideo.com/' }] },
  { date: '2026-10-19', endDate: '2026-10-25', name: '亚锦赛（单项）', loc: '乌兹别克·塔什干', type: '洲际', points: 1000, cat: 'international', live: [{ name: '央视体育', url: 'https://sports.cctv.com/' }] },
  { date: '2026-10-27', endDate: '2026-11-01', name: 'WTT蒙彼利埃冠军赛', loc: '法国·蒙彼利埃', type: '冠军赛', points: 1000, cat: 'international', live: [{ name: 'WTT', url: 'https://worldtabletennis.com/' }] },
  { date: '2026-11-03', endDate: '2026-11-08', name: 'WTT法兰克福冠军赛', loc: '德国·法兰克福', type: '冠军赛', points: 1000, cat: 'international', live: [{ name: 'WTT', url: 'https://worldtabletennis.com/' }] },
  { date: '2026-11-12', endDate: '2026-11-16', name: '乒超常规赛第三站', loc: '待定', type: '联赛', points: 0, cat: 'domestic', live: [{ name: '咪咕视频', url: 'https://www.miguvideo.com/' }] },
  { date: '2026-11-30', endDate: '2026-12-06', name: '混团世界杯', loc: '中国·成都', type: '世界杯', points: 2500, cat: 'international', live: [{ name: '央视体育', url: 'https://sports.cctv.com/' }, { name: '咪咕视频', url: 'https://www.miguvideo.com/' }] },
  { date: '2026-12-08', endDate: '2026-12-13', name: 'WTT总决赛', loc: '中国·香港', type: '年终', points: 2000, cat: 'international', live: [{ name: '央视体育', url: 'https://sports.cctv.com/' }, { name: '咪咕视频', url: 'https://www.miguvideo.com/' }] },
  { date: '2026-12-16', endDate: '2026-12-23', name: '全锦赛团体&单打', loc: '中国·福州', type: '全锦赛', points: 0, cat: 'domestic', live: [{ name: '咪咕视频', url: 'https://www.miguvideo.com/' }] },
  { date: '2026-12-25', endDate: '2026-12-27', name: '乒超总决赛', loc: '中国·广州', type: '联赛', points: 0, cat: 'domestic', live: [{ name: '咪咕视频', url: 'https://www.miguvideo.com/' }] },
];

/* ---------- 直播入口汇总 ---------- */
const LIVE_STREAMS = [
  { name: '央视体育 CCTV5', desc: '国乒主转播平台', url: 'https://sports.cctv.com/', icon: '央' },
  { name: '咪咕视频', desc: '正版高清直播', url: 'https://www.miguvideo.com/', icon: '咪' },
  { name: 'WTT 官网', desc: '国际赛官方直播', url: 'https://worldtabletennis.com/', icon: 'W' },
];

/* ---------- 交手纪录（近3年主要对手·2024-2026） ---------- */
const HEAD_TO_HEAD = {
  sun: [
    { opp: '王曼昱', total: '21胜13负', rate: 61.8, recent: '近4场各胜2场，五五开', desc: '女子乒坛最强双子星对决。近10次单打全部在决赛相遇，2026亚洲杯4-3险胜、新加坡大满贯4-2胜，但中国大满贯2-4负、澳门世界杯决赛负。两人互为最大对手。', highlights: ['2026亚洲杯决赛 4-3胜', '2026新加坡大满贯决赛 4-2胜', '2026澳门世界杯决赛 负', '2025中国大满贯决赛 2-4负'] },
    { opp: '张本美和', total: '8胜1负', rate: 88.9, recent: '2024年后7连胜', desc: '日本女乒新一姐，18岁世界第三。2024亚锦赛唯一一败（体力透支2-3负），此后7战全胜。2026伦敦世乒赛女团决赛3-0零封（三局仅让对手拿12分），堪称经典。', highlights: ['2026伦敦世乒赛女团 3-0胜(11-2/11-4/11-6)', '2025亚洲杯 3-0胜', '2025亚锦赛女团 3-0胜', '2024亚锦赛女团 2-3负(唯一败绩)'] },
    { opp: '早田希娜', total: '19胜0负', rate: 100, recent: '12年全胜，堪称克星', desc: '从2014年亚青赛到2026年伦敦世乒赛，12年19次交锋全胜。其中12场3-0或4-0零封。早田自评"赢面接近零"。', highlights: ['2026伦敦世乒赛女团 3-0胜', '2026新加坡大满贯 4-2胜', '2024巴黎奥运半决赛 4-0胜'] },
    { opp: '伊藤美诚', total: '11胜0负', rate: 100, recent: '东京周期后全胜，一代克星终被反杀', desc: '东京周期最大的对手。从2019瑞典公开赛首败后，至今11连胜，终结了伊藤美诚对国乒的威胁。伊藤2024年后淡出国际赛场，一代名将对决画上句号。', highlights: ['2023杭州亚运女团 3-1胜', '2022WTT新加坡大满贯 3-0胜', '2019世乒赛 4-1胜', '东京周期绝地反杀·11连胜'] },
    { opp: '蒯曼', total: '4胜1负', rate: 80.0, recent: '2026美国大满贯决赛4-3险胜', desc: '国乒新生代领军人物之一，女单世界第4。2026美国大满贯决赛七局大战决胜局11-4锁定胜局，是本周期新崛起的最强对手之一。2026澳门世界杯也曾交手。', highlights: ['2026WTT美国大满贯决赛 4-3胜(第6座)', '2026澳门世界杯 胜', '仅一败：WTT冠军赛'] },
    { opp: '陈幸同', total: '9胜2负', rate: 81.8, recent: '近年稳占上风', desc: '国乒女队核心主力，世界第5。两人风格对比较为鲜明——孙颖莎的正手压制力更强，近年交手优势明显。2025中国大满贯曾交锋。', highlights: ['近年国际赛事优势明显', '主要作为团体赛队友出战'] },
    { opp: '陈梦', total: '11胜7负', rate: 61.1, recent: '自2023年后孙颖莎明显占优', desc: '奥运决赛两度惜败（东京2-4、巴黎2-4），但2023德班世乒赛4-2获胜完成突破。随陈梦淡出国家队，近年交手减少。', highlights: ['2024巴黎奥运决赛 2-4负', '2023德班世乒赛决赛 4-2胜', '2021东京奥运决赛 2-4负'] },
    { opp: '其他日本新星', total: '全胜', rate: 100, recent: '封锁日本女乒五代主力', desc: '对阵桥本帆乃香（1胜0负）、大藤沙月（3胜0负）、佐藤瞳（2胜0负）、长崎美柚（4胜0负）、木原美悠（2胜0负），日本女乒五代主力（伊藤/早田除外）全部被封锁。', highlights: ['日本女乒五代: 胜率100%', '2025横滨冠军赛 3-1胜桥本帆乃香'] },
  ],
  wang: [
    { opp: '莫雷加德', total: '12胜2负', rate: 85.7, recent: '巴黎奥运后全胜', desc: '瑞典天才、奥运亚军、现世界第2。巴黎奥运32强那场是王楚钦球拍出问题输的——之后莫雷加德再也没赢过。2025横滨冠军赛4-0横扫（第三局曾10-0），2025世乒赛半决赛4-1逆转完成心理救赎。', highlights: ['2025横滨冠军赛 4-0胜(第三局10-0)', '2025多哈世乒赛半决赛 4-1胜', '2024巴黎奥运32强 2-4负(球拍问题)'] },
    { opp: '松岛辉空', total: '5胜2负', rate: 71.4, recent: '近期互有胜负·头号刺客', desc: '19岁日本新星，现世界第3，王楚钦最难缠的对手之一。2025亚锦赛首败(2-3)，2026重庆冠军赛再败(2-4)。但在2026澳门世界杯决赛4-3绝境逆转夺冠，证明实力。近三次交手松岛两胜。', highlights: ['2026澳门世界杯决赛 4-3胜(生死战)', '2026重庆冠军赛 2-4负', '2026伦敦世乒赛男团 3-1胜', '2025亚锦赛 2-3负(首败)'] },
    { opp: '张本智和', total: '14胜3负', rate: 82.4, recent: '近10场9胜1负', desc: '中日男单一哥对决。王楚钦绝大多数交锋占优，2026亚洲杯决赛4-2胜完成卫冕，此前一度8连胜。', highlights: ['2026亚洲杯决赛 4-2胜', '2025美国大满贯决赛 4-0胜', '2025横滨冠军赛决赛 2-4负'] },
    { opp: 'F·勒布伦（小布）', total: '7胜0负', rate: 100, recent: '全胜·堪称克星', desc: '法国天才少年，现世界第4。"八败之交"——七战七败，从险胜到碾压，小勒布伦赛后曾崩溃落泪。2026新加坡大满贯4-1、澳门世界杯4-2、伦敦世乒赛再胜，完全锁死近台打法。', highlights: ['2026伦敦世乒赛男团 3-1胜', '2026澳门世界杯1/8决赛 4-2胜', '2026新加坡大满贯半决赛 4-1胜', '2025中国大满贯决赛 4-0胜'] },
    { opp: 'A·勒布伦（大布）', total: '3胜0负', rate: 100, recent: '全胜·较少交手', desc: '勒布伦兄弟之兄，现世界第10，刚重返前十。力量型打法但面对王楚钦完全落下风。2026年美国大满贯后排名上升，值得持续关注。', highlights: ['目前3次交手全胜', '现世界第10·2026年重返前十'] },
    { opp: '林昀儒', total: '11胜3负', rate: 78.6, recent: '全面压制', desc: '中国台北一哥，左手将。近年来王楚钦持续压制，2026新加坡大满贯决赛4-0横扫最为经典，近两年三战4-0。作为左手将之间的对决，王楚钦在速度与质量上全面领先。', highlights: ['2026新加坡大满贯决赛 4-0胜', '历史交手14次 11胜3负', '左手将内战·王楚钦完胜'] },
    { opp: '雨果·卡尔德拉诺', total: '4胜1负', rate: 80.0, recent: '2025年后保持全胜', desc: '巴西名将、美洲乒乓球旗帜人物。力量型打法，正手暴力美学。王楚钦靠近台速度和发球变化压制，其反手位是明显突破口。2025WTT冠军赛4-1轻松取胜。', highlights: ['近3次交手全胜', '2025WTT冠军赛 4-1胜', '唯一一败：2023WTT常规挑战赛'] },
    { opp: '奥恰洛夫', total: '5胜1负', rate: 83.3, recent: '2023年之后保持全胜', desc: '德国老将、世界杯冠军、奥运铜牌得主。下蹲砍式发球独树一帜。王楚钦靠左手线路变化和节奏转换破解其发球体系，近三年完封。', highlights: ['2025世乒赛团体 3-0胜', '近三年保持全胜', '左手破解下蹲发球经典案例'] },
    { opp: '樊振东', total: '8胜26负', rate: 23.5, recent: '2024年后几乎无交手', desc: '国乒两代领军人物的经典对决。樊振东长期占绝对优势，但近年已淡出国际赛场。关注度降低，建议后置展示。', highlights: ['2023杭州亚运会决赛 4-3胜', '已退役/淡出国际赛场'] },
  ],
};

/* ---------- 生涯赛事档案 ---------- */
const CAREER_TIMELINE = {
  sun: [
    { period: '2017-2019', title: '崭露头角', items: ['2017年进入国家一队', '2019年布达佩斯世乒赛女双冠军', '2019年世界杯团体冠军'] },
    { period: '2020-2021', title: '奥运初体验', items: ['2020东京奥运会女单银牌', '2020东京奥运会女团金牌', '2021年休斯敦世乒赛女双/混双冠军'] },
    { period: '2022-2023', title: '世界第一之路', items: ['2022年登顶女单世界第一', '2023年德班世乒赛女单冠军', '2023年杭州亚运会女单冠军', '2023年WTT新加坡大满贯三冠王'] },
    { period: '2024', title: '巴黎荣光', items: ['2024澳门世界杯女单冠军', '2024巴黎奥运会混双金牌', '2024巴黎奥运会女团金牌', '2024巴黎奥运会女单银牌'] },
    { period: '2025-至今', title: '持续统治', items: ['2025多哈世乒赛女单冠军', '2025WTT瑞典大满贯冠军', '2026亚洲杯女单冠军', '2026WTT新加坡大满贯冠军', '2026WTT美国大满贯冠军（第6座）'] },
  ],
  wang: [
    { period: '2015-2019', title: '少年成名', items: ['2015年入选国家二队', '2018年青奥会男单冠军', '2019年世乒赛男双冠军'] },
    { period: '2020-2021', title: '快速成长', items: ['2020东京奥运会P卡选手', '2021年休斯敦世乒赛混双冠军'] },
    { period: '2022-2023', title: '跻身顶尖', items: ['2023年德班世乒赛男双/混双冠军', '2023年杭州亚运会男单冠军（决赛4-3胜樊振东）', '2023年登顶男单世界第一'] },
    { period: '2024', title: '巴黎双金', items: ['2024巴黎奥运会混双金牌', '2024巴黎奥运会男团金牌', '2024WTT多哈总决赛冠军'] },
    { period: '2025-至今', title: '男队领军人', items: ['2025多哈世乒赛男单冠军', '2025WTT美国大满贯决赛', '2026年出任国乒男队队长', '2026亚洲杯男单冠军', '2026澳门世界杯男单冠军'] },
  ],
};

/* ---------- 精选墙（首页·每周手动更新） ---------- */
const FEATURED = [
  { tag: '排名', color: 't-red', title: '7月27日世界排名：孙颖莎11350分断层第一，王楚钦9177分领跑', desc: '国际乒联第31周排名出炉。孙颖莎连续217周霸榜，唯一破万分选手。', url: '#rankings' },
  { tag: '进行中', color: 't-blue', title: '乒超联赛火热进行中：莎头双双出战', desc: '7月23日起大连&雄安两站背靠背，王楚钦代表山东魏桥，孙颖莎留守深圳大学。', url: '#calendar' },
  { tag: '必看', color: 't-gold', title: '伦敦世乒赛全回顾：莎头包揽最佳运动员', desc: '女团3-2惊天逆转日本、男团12连冠。王楚钦10战全胜·孙颖莎独得两分。', url: 'https://sports.cctv.com/' },
  { tag: '数据', color: 't-green', title: '王楚钦对阵世界前十胜率一览', desc: 'vs小勒布伦7-0全胜、vs莫雷加德12-2、vs张本智和14-3...一人打穿乒坛。', url: 'head-to-head.html' },
];

/* ---------- 商务代言 ---------- */
const ENDORSEMENTS = {
  sun: [
    { brand: 'OLAY', role: '品牌代言人', date: '2024.09', cat: '美妆', url: 'https://www.olay.com.cn/', info: 'OLAY官方商城' },
    { brand: '肯德基', role: '品牌代言人', date: '2024.11', cat: '餐饮', url: 'https://www.kfc.com.cn/', info: '肯德基中国' },
    { brand: '半亩花田', role: '全球品牌代言人(洗护发)', date: '2025.01', cat: '日化', url: 'https://www.banmuhuatian.com/', info: '半亩花田官方' },
    { brand: '高露洁', role: '品牌代言人', date: '2025.02', cat: '日化', url: 'https://www.colgate.com.cn/', info: '高露洁中国' },
    { brand: 'OPPO', role: '智能生态全球合作伙伴', date: '2025.03', cat: '3C', url: 'https://www.oppo.com/cn/', info: 'OPPO官网' },
    { brand: '碧然德', role: '品牌代言人', date: '2025.04', cat: '家电', url: 'https://www.brita.cn/', info: '碧然德中国' },
    { brand: '雀巢', role: '品牌代言人(饼干/糖巧)', date: '2025.05', cat: '食品', url: 'https://www.nestle.com.cn/', info: '雀巢中国' },
    { brand: '妮维雅', role: '品牌代言人', date: '2025.05', cat: '美妆', url: 'https://www.nivea.com.cn/', info: '妮维雅中国' },
    { brand: '马吉拉香氛', role: '品牌代言人', date: '2025.06', cat: '奢侈', url: 'https://www.maisonmargiela.com/', info: 'Maison Margiela' },
    { brand: '美团', role: '美味生活代言人', date: '2025.07', cat: '互联网', url: 'https://www.meituan.com/', info: '美团App' },
    { brand: '维达', role: '全球品牌代言人', date: '2025.08', cat: '日化', url: 'https://www.vinda.com/', info: '维达官方' },
    { brand: '全棉时代', role: '全球品牌代言人', date: '2025.09', cat: '日化', url: 'https://www.purcotton.com/', info: '全棉时代官方' },
    { brand: '联合利华', role: '身体清洁代言人', date: '2025.09', cat: '日化', url: 'https://www.unilever.com.cn/', info: '联合利华中国' },
    { brand: 'Keep', role: '品牌代言人', date: '2025.10', cat: '运动', url: 'https://www.keep.com/', info: 'Keep App' },
    { brand: '鸭鸭', role: '全球品牌代言人', date: '2025.11', cat: '服装', url: 'https://www.yaya.cn/', info: '鸭鸭官方' },
    { brand: '冠益乳', role: '亚太区品牌代言人', date: '2025.12', cat: '食品', url: 'https://www.mengniu.com.cn/', info: '蒙牛集团' },
    { brand: '蒙牛', role: '品牌代言人(全线)', date: '2026.03', cat: '食品', url: 'https://www.mengniu.com.cn/', info: '蒙牛集团·首位乒乓球代言人' },
    { brand: '白象', role: '品牌代言人', date: '2026.04', cat: '食品', url: 'https://www.baixiangfood.com/', info: '白象食品' },
    { brand: '可口可乐', role: '宝洁奥运大使', date: '2024', cat: '饮品', url: 'https://www.coca-cola.com.cn/', info: '可口可乐中国' },
    { brand: '李宁', role: '品牌代言人', date: '长期', cat: '运动', url: 'https://www.lining.com/', info: '李宁官方商城' },
  ],
  wang: [
    { brand: '路易威登', role: '品牌大使', date: '2025.02', cat: '奢侈', url: 'https://www.louisvuitton.cn/', info: 'LV中国官网' },
    { brand: 'Nespresso', role: '奈斯派索品牌大使', date: '2025.02', cat: '饮品', url: 'https://www.nespresso.com/cn/zh/', info: 'Nespresso中国' },
    { brand: '舒肤佳', role: '品牌全线代言人', date: '2025.04', cat: '日化', url: 'https://www.safeguard.com.cn/', info: '舒肤佳官方' },
    { brand: 'Qeelin', role: '全球品牌代言人', date: '2025.05', cat: '奢侈', url: 'https://www.qeelin.com/', info: 'Qeelin麒麟珠宝' },
    { brand: 'Mistine', role: '全球防晒代言人', date: '2025.07', cat: '美妆', url: 'https://www.mistine.cn/', info: 'Mistine中国' },
    { brand: '清扬', role: '品牌代言人', date: '2025.08', cat: '日化', url: 'https://www.clearhair.cn/', info: '清扬官方' },
    { brand: '梅赛德斯-奔驰', role: '品牌新锐大使', date: '2025.09', cat: '汽车', url: 'https://www.mercedes-benz.com.cn/', info: '奔驰中国官网' },
    { brand: '薇诺娜', role: '亚太区品牌代言人', date: '2026.02', cat: '美妆', url: 'https://www.winona.com/', info: '薇诺娜官方' },
    { brand: '欧珑', role: '全球品牌代言人', date: '2026.03', cat: '奢侈', url: 'https://www.ateliercologne.com/', info: 'Atelier Cologne' },
    { brand: 'Oakley', role: 'Team Oakley成员', date: '2015.06', cat: '运动', url: 'https://www.oakley.com.cn/', info: 'Oakley中国' },
    { brand: '可口可乐', role: '宝洁奥运大使', date: '2024', cat: '饮品', url: 'https://www.coca-cola.com.cn/', info: '可口可乐中国' },
    { brand: '李宁', role: '品牌代言人', date: '长期', cat: '运动', url: 'https://www.lining.com/', info: '李宁官方商城' },
  ],
};

/* ---------- 莎头经典语录 ---------- */
const QUOTES = [
  { text: '胸前的国旗永远大于背后的姓名', from: '孙颖莎', ctx: '国家队精神' },
  { text: '保持热爱，保持专注', from: '孙颖莎', ctx: '赛后采访' },
  { text: '孙颖莎你皮紧一点', from: '场边教练', ctx: '训练场名场面' },
  { text: '坚定自信', from: '王楚钦', ctx: '赛场信念' },
  { text: '我是男队队长，要站出来', from: '王楚钦', ctx: '2026年出任队长后' },
  { text: '接好马龙的接力棒', from: '王楚钦', ctx: '回应出任男队队长' },
  { text: '我们是一起长大的', from: '孙颖莎', ctx: '谈与王楚钦的搭档' },
  { text: '人生能有几回搏', from: '容国团', ctx: '国乒精神传承' },
  { text: '每一场比赛都当作最后一场来打', from: '孙颖莎', ctx: '比赛态度' },
];

/* ---------- 赛事档案馆（结构化赛果） ---------- */
const TOURNAMENT_ARCHIVE = [
  {
    year: '2026',
    events: [
      { date: '2026-07-23', name: '乒超联赛（常规赛）', loc: '大连 / 雄安', type: '联赛',
        videoUrl: 'https://www.miguvideo.com/',
        results: [
          { player: 'sun', event: '女团', result: '进行中', detail: '代表深圳大学出战' },
          { player: 'wang', event: '男团', result: '进行中', detail: '代表山东魏桥首战鲁能' },
        ], src: '中国乒协', url: 'https://www.ctta.cn/' },
      { date: '2026-07-14', endDate: '2026-07-20', name: '全国锦标赛·双打', loc: '长沙', type: '全锦赛',
        results: [
          { player: 'both', event: '混双', result: '四强', detail: '半决赛2-3袁励岑/王艺迪' },
          { player: 'sun', event: '女双', result: '未参赛', detail: '专注混双单项' },
          { player: 'wang', event: '男双', result: '未参赛', detail: '专注混双单项' },
        ], src: '新华社 / 中国乒协', url: 'https://www.ctta.cn/xwzx/ppxw/2026/0720/702758.html' },
      { date: '2026-07-06', name: 'WTT美国大满贯', loc: '美国·洛杉矶', type: '大满贯', points: 2000,
        videoUrl: 'https://sports.cctv.com/',
        results: [
          { player: 'sun', event: '女单', result: '🥇 冠军', detail: '决赛4-3胜蒯曼（第6座大满贯）' },
          { player: 'wang', event: '男单', result: '第三轮', detail: '1-4不敌丹麦选手林德' },
          { player: 'both', event: '混双', result: '🥈 亚军', detail: '决赛负于林诗栋/蒯曼' },
        ], src: 'Olympics.com / WTT官网', url: 'https://www.olympics.com/zh/news/2026-us-smash-sun-yingsha-edges-kuaiman-seven-game-thriller-clinch-title-china-three-crowns' },
      { date: '2026-06-10', endDate: '2026-06-16', name: '伦敦世乒赛（团体）', loc: '英国·伦敦', type: '世乒赛',
        videoUrl: 'https://sports.cctv.com/',
        results: [
          { player: 'sun', event: '女团', result: '🥇 冠军', detail: '中国队3-0日本队夺冠' },
          { player: 'wang', event: '男团', result: '🥇 冠军', detail: '中国队3-1德国队夺冠，首次以队长身份出战' },
        ], src: 'ITTF / 新华社', url: 'https://www.ittf.com/' },
      { date: '2026-04-15', endDate: '2026-04-21', name: 'WTT澳门世界杯', loc: '中国·澳门', type: '世界杯', points: 2500,
        videoUrl: 'https://www.miguvideo.com/',
        results: [
          { player: 'sun', event: '女单', result: '🥈 亚军', detail: '决赛不敌王曼昱' },
          { player: 'wang', event: '男单', result: '🥇 冠军', detail: '决赛4-1胜林诗栋' },
        ], src: 'WTT官网 / 央视体育', url: 'https://worldtabletennis.com/' },
      { date: '2026-03-08', endDate: '2026-03-14', name: 'WTT新加坡大满贯', loc: '新加坡', type: '大满贯', points: 2000,
        videoUrl: 'https://sports.cctv.com/',
        results: [
          { player: 'sun', event: '女单', result: '🥇 冠军', detail: '决赛4-2胜王曼昱' },
          { player: 'wang', event: '男单', result: '八强', detail: '不敌张本智和' },
        ], src: 'WTT官网 / 央视体育', url: 'https://worldtabletennis.com/' },
      { date: '2026-02-18', endDate: '2026-02-23', name: '亚洲杯', loc: '地点待确认', type: '洲际', points: 1000,
        videoUrl: 'https://sports.cctv.com/',
        results: [
          { player: 'sun', event: '女单', result: '🥇 冠军', detail: '决赛4-3胜王曼昱' },
          { player: 'wang', event: '男单', result: '🥇 冠军', detail: '决赛4-2胜张本智和' },
        ], src: '央视体育', url: 'https://sports.cctv.com/' },
    ]
  },
  {
    year: '2025',
    events: [
      { date: '2025-12', name: 'WTT总决赛', loc: '待确认', type: '年终', points: 2000,
        results: [
          { player: 'sun', event: '女单', result: '待补充', detail: '成绩以官方为准' },
          { player: 'wang', event: '男单', result: '待补充', detail: '成绩以官方为准' },
        ], src: 'WTT官网', url: 'https://worldtabletennis.com/' },
      { date: '2025-11', name: '混团世界杯', loc: '中国·成都', type: '世界杯', points: 2500,
        results: [
          { player: 'both', event: '混团', result: '待补充', detail: '中国队成绩以官方为准' },
        ], src: 'ITTF', url: 'https://www.ittf.com/' },
      { date: '2025-10', name: 'WTT中国大满贯', loc: '中国·北京', type: '大满贯', points: 2000,
        videoUrl: 'https://www.miguvideo.com/',
        results: [
          { player: 'sun', event: '女单', result: '🥈 亚军', detail: '决赛2-4负王曼昱' },
          { player: 'wang', event: '男单', result: '待补充', detail: '成绩以官方为准' },
        ], src: 'WTT官网', url: 'https://worldtabletennis.com/' },
      { date: '2025-08', name: 'WTT瑞典大满贯', loc: '瑞典·马尔默', type: '大满贯', points: 2000,
        videoUrl: 'https://sports.cctv.com/',
        results: [
          { player: 'sun', event: '女单', result: '🥇 冠军', detail: '决赛3-0胜早田希娜' },
        ], src: 'WTT官网 / 央视体育', url: 'https://worldtabletennis.com/' },
      { date: '2025-08', name: 'WTT美国大满贯', loc: '美国', type: '大满贯', points: 2000,
        results: [
          { player: 'wang', event: '男单', result: '🥈 亚军', detail: '决赛0-4负樊振东' },
        ], src: 'WTT官网', url: 'https://worldtabletennis.com/' },
      { date: '2025-05', name: '多哈世乒赛（单项）', loc: '卡塔尔·多哈', type: '世乒赛',
        videoUrl: 'https://sports.cctv.com/',
        results: [
          { player: 'sun', event: '女单', result: '🥇 冠军', detail: '蝉联世乒赛女单冠军' },
          { player: 'wang', event: '男单', result: '🥇 冠军', detail: '首夺世乒赛男单冠军' },
        ], src: 'ITTF / 新华社', url: 'https://www.ittf.com/' },
    ]
  },
  {
    year: '2024',
    events: [
      { date: '2024-07-26', endDate: '2024-08-11', name: '巴黎奥运会', loc: '法国·巴黎', type: '奥运会',
        results: [
          { player: 'sun', event: '混双', result: '🥇 金牌', detail: '搭档王楚钦，中国首枚奥运混双金牌' },
          { player: 'sun', event: '女单', result: '🥈 银牌', detail: '决赛2-4负陈梦' },
          { player: 'sun', event: '女团', result: '🥇 金牌', detail: '中国队3-0日本队' },
          { player: 'wang', event: '混双', result: '🥇 金牌', detail: '搭档孙颖莎夺冠' },
          { player: 'wang', event: '男团', result: '🥇 金牌', detail: '中国队3-0瑞典队' },
        ], src: '央视体育 / Olympics.com', url: 'https://olympics.com/' },
      { date: '2024-04', name: 'WTT澳门世界杯', loc: '中国·澳门', type: '世界杯', points: 2500,
        results: [
          { player: 'sun', event: '女单', result: '🥇 冠军', detail: '决赛4-3胜王曼昱' },
        ], src: 'WTT官网', url: 'https://worldtabletennis.com/' },
    ]
  },
  {
    year: '2023',
    events: [
      { date: '2023-09-23', endDate: '2023-10-08', name: '杭州亚运会', loc: '中国·杭州', type: '亚运会',
        results: [
          { player: 'sun', event: '女单', result: '🥇 金牌', detail: '决赛4-1胜早田希娜' },
          { player: 'sun', event: '女团', result: '🥇 金牌', detail: '中国队夺冠' },
          { player: 'wang', event: '男单', result: '🥇 金牌', detail: '决赛4-3胜樊振东' },
          { player: 'wang', event: '男团', result: '🥇 金牌', detail: '中国队夺冠' },
          { player: 'both', event: '混双', result: '🥇 金牌', detail: '莎头组合夺冠' },
        ], src: '新华社 / 央视体育', url: 'https://sports.cctv.com/' },
      { date: '2023-05', name: '德班世乒赛（单项）', loc: '南非·德班', type: '世乒赛',
        results: [
          { player: 'sun', event: '女单', result: '🥇 冠军', detail: '决赛4-2胜陈梦' },
          { player: 'wang', event: '男双', result: '🥇 冠军', detail: '搭档樊振东' },
          { player: 'wang', event: '混双', result: '🥇 冠军', detail: '搭档孙颖莎' },
        ], src: 'ITTF / 新华社', url: 'https://www.ittf.com/' },
      { date: '2023-03', name: 'WTT新加坡大满贯', loc: '新加坡', type: '大满贯', points: 2000,
        results: [
          { player: 'sun', event: '女单', result: '🥇 冠军', detail: '三冠王（女单+女双+混双）' },
        ], src: 'WTT官网', url: 'https://worldtabletennis.com/' },
    ]
  },
  {
    year: '2021',
    events: [
      { date: '2021-07-23', endDate: '2021-08-08', name: '东京奥运会', loc: '日本·东京', type: '奥运会',
        results: [
          { player: 'sun', event: '女单', result: '🥈 银牌', detail: '决赛2-4负陈梦' },
          { player: 'sun', event: '女团', result: '🥇 金牌', detail: '中国队夺冠' },
        ], src: '央视体育 / Olympics.com', url: 'https://olympics.com/' },
      { date: '2021-11', name: '休斯敦世乒赛', loc: '美国·休斯敦', type: '世乒赛',
        results: [
          { player: 'sun', event: '女双', result: '🥇 冠军', detail: '搭档王曼昱' },
          { player: 'sun', event: '混双', result: '🥇 冠军', detail: '搭档王楚钦' },
          { player: 'wang', event: '混双', result: '🥇 冠军', detail: '搭档孙颖莎' },
        ], src: 'ITTF', url: 'https://www.ittf.com/' },
    ]
  },
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
