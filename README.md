# hshi-speech.github.io

个人学术主页（Academic Research Archive），由 GitHub Pages 用 Jekyll 自动构建。

## 日常更新

所有内容都在 `_data/` 里，一般不需要改 HTML。

| 要改什么 | 文件 |
| --- | --- |
| 论文 | `_data/publications.yml` |
| News（首页显示最新 5 条，超过后出现 `/news/` 入口） | `_data/news.yml` |
| 研究方向（总览 `/research/` 与子页面 `/research/<id>/`）；`highlights` 里标 `representative: true` 的条目显示在首页 | `_data/research.yml` |
| 项目 | `_data/projects.yml` |
| 履历、服务、荣誉 | `_data/profile.yml` |

### 新增一篇论文

1. 把 BibTeX 放到 `files/bib/<id>.txt`，PDF（可选）放到 `files/publications/<id>.pdf`。
2. 把示意图放到 `assets/figures/<id>.webp`（宽 1400px 以内）。
3. 在 `_data/publications.yml` 对应年份的位置加一条，字段说明见文件开头。

- 写了 `selected: true` 的论文会在 Publications 里标记 Selected，并出现在首页的 Other selected papers；首页的代表作由 `_data/research.yml` 决定，见下面的清单。
- 写了 `details` 的论文，展开后显示 Motivation / Method / Results；否则显示摘要。
- 音频放到 `assets/audio/<id>/`，再加 `audio` 字段，展开面板里就会出现播放器。

## 维护清单

**新增或修改论文**

- [ ] `id` 唯一，并和 `files/bib/<id>.txt`、`files/publications/<id>.pdf`、`assets/figures/<id>.webp` 的文件名一致。
- [ ] `venue`、`year`、作者和 BibTeX、DOI 一致。IEEE 期刊注意名称：2024 年及以前是 IEEE/ACM TASLP，2025 年起是 IEEE TASLP。
- [ ] `themes` 填 `robust`、`attribution`、`grounded` 或 `other`，可以填多个。主题计数由数据生成，不用手改。
- [ ] 链接打开后确实是这篇论文；`code`、`models` 只放真实存在的资源。
- [ ] 写进 `_data/research.yml` 的结论能在论文里找到依据。

**首页**

- [ ] 代表作：在 `_data/research.yml` 对应方向的 `highlights` 里加 `representative: true`，建议保持 3 篇左右；不必每个方向一篇。
- [ ] 其他代表论文：在 `_data/publications.yml` 写 `selected: true`。
- [ ] News：在 `_data/news.yml` 最上面加一条，写清日期、venue 和主题；有论文时用 `papers` 链接到 Publications。

**研究方向和项目**

- [ ] 方向的完整名称用 `name` 和 `subtitle`，导航短标签用 `short`，都只在 `_data/research.yml` 改。改名称时，同步 `research/<id>.html` 里的 `title`。
- [ ] 不要改 `id`，它决定 URL 和筛选链接。
- [ ] 项目的 `example` 必须来自已发布的真实输出，不要手写。

**发布前后**

- [ ] 本地运行 `bundle exec jekyll build`，确认没有报错，再用 `bundle exec jekyll serve` 看改过的页面（包括手机宽度）。
- [ ] 推送到 `master` 后，在仓库 Actions 里确认 `pages-build-deployment` 成功。
- [ ] 打开线上页面，强制刷新后确认改动已生效；改过论文的话，再试一次 Publications 的搜索和主题筛选。

## 本地预览

```sh
bundle install
bundle exec jekyll serve
```
