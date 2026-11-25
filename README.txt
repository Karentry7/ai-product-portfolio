个人 AI 产品作品集：StorePilot 店策AI + JD Lens

开始使用
1. 先阅读 DEPLOY_GITHUB_PAGES.txt。
2. 将当前目录的内容完整上传到 GitHub 仓库根目录，不要把 ZIP 本身当网页上传。
3. 首页 index.html 与 storepilot/、jd-lens/、assets/ 必须同层。
4. Pages 选择发布分支 main 与 /(root)，成功后用公开首页链接报名。

实际结构
index.html                  新增统一首页，StorePilot 第一、JD Lens 第二
assets/                     新首页样式与图标
storepilot/index.html       StorePilot 原作品集
storepilot/evidence.html    评测记录、截图与完整输出入口
storepilot/StorePilot_Case_Study.pdf
jd-lens/index.html          JD Lens 原作品集
jd-lens/JD_Lens_产品案例_2026-11-25.pdf
.nojekyll                   静态资源发布配置
DEPLOY_GITHUB_PAGES.txt     详细部署教程
CHECKS.txt                 本次整合验收说明
FILES_SHA256.txt            解压后文件校验清单（不含清单自身）

来源与改动范围
来源是此前生成、已在本机验收的两个同名原包：
JD_Lens_报名作品集_静态网页与PDF.zip
StorePilot_Static_Package.zip
当前 /mnt/data 上传路径不可直接访问；本包基于已找到的同名原始产物，不代表另行完成了上传副本与原包的一致性比对。

原包共56文件：53文件保持字节一致，包含全部原HTML、截图、评测数据和输出。
StorePilot的1个CSS文件仅在末尾追加极窄屏适配，原样式完整保留，打印规则不变。
两份PDF仅把22条本机附件链接修正为相对链接；文本、截图和页面显示不变。
原有项目 README、CHECKS 等文件照原样保留，可能描述整合前的目录；本根目录说明对应整合后的结构。

成果边界
这是静态作品集与证据展示网站。现有项目的真实成果、质量问题及局限保留在原详情中。
StorePilot：12次工作室运行，另1次发布后功能验证；8组模拟场景、3版Prompt。执行成功不代表质量100%通过，也没有真实经营收益验证。
JD Lens：3份历史真实JD，5类工作流，7次工作流运行，构成1轮人工串联验证；演示原型与工作流尚未集成、未上线。
未增加账户、表单、分析追踪或外部服务依赖。没有实际部署、代填报名或生成已上线网址。
