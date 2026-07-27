# 莎头球迷站 · 项目长期记忆

## 项目概况
- 类型：乒乓球迷站（孙颖莎 & 王楚钦）
- 用户角色：球迷（站长），非官方立场，强调不侵权
- 站点根目录：`C:\Users\惠普\WorkBuddy\2026-07-27-15-34-15`
- 云部署地址：https://a1d7b6b9790d4e31b9067d4002a4d539.app.codebuddy.work

## 技术栈
- 纯静态站点（HTML + CSS + 原生 JS），无构建依赖
- 数据层 data.js 集中管理（PLAYERS/UPDATES/NEWS/VIDEOS/FORUM_*/SOURCES），方便替换真实内容
- 论坛当前演示态，接入点：data.js 的 FORUM_BACKEND + main.js initPostModal

## 部署
- GitHub: heidi517/lovesha-tou-fans → GitHub Pages: https://heidi517.github.io/lovesha-tou-fans/
- CloudStudio: https://a1d7b6b9790d4e31b9067d4002a4d539.app.codebuddy.work
- Giscus 论坛已接入（repo_id: R_kgDOTkveKQ, category: General）

## 设计约定
- 主题：国乒热血·红金（红 #C8102E / 金 #D4AF37 / 暖白底 #FFFBF5）
- 涨红跌绿（中国惯例）；货币默认 ¥
- 选手头像用原创文字图形（莎/钦），不用真人照

## 版权红线（用户明确要求）
- 资讯/视频只指向官方正规来源，不托管/不搬运受保护内容
- 选手资料仅用公开事实，具体成绩以官方为准

## 待办/后续（已排优先级）
- #21: 交手纪录扩充 + 世界排名积分展示
- #22: 视频页按赛事时间线重组 + 赛事档案合并视频链接
- #27: 比赛视频只放比赛，按赛事类型/时间线整理，加筛选
- #29: 交手记录整合近3年，关注最新厉害选手
- #30: 加入世界排名明细和个人积分展示
- #31: 商务代言独立页，链接官方售卖平台
- #32: 结构化赛果和比赛视频链接合并
