# hshi-speech.github.io

个人学术主页（Academic Research Archive），由 GitHub Pages 用 Jekyll 自动构建。

## 日常更新

所有内容都在 `_data/` 里，一般不需要改 HTML。

| 要改什么 | 文件 |
| --- | --- |
| 论文 | `_data/publications.yml` |
| News（首页显示最新 5 条，超过后出现 `/news/` 入口） | `_data/news.yml` |
| 研究方向（Research Questions、Evolution、Contributions、Open Questions）及代表论文 | `_data/research.yml` |
| 项目 | `_data/projects.yml` |
| 履历、服务、荣誉 | `_data/profile.yml` |

### 新增一篇论文

1. 把 BibTeX 放到 `files/bib/<id>.txt`，PDF（可选）放到 `files/publications/<id>.pdf`。
2. 把示意图放到 `assets/figures/<id>.webp`（宽 1400px 以内）。
3. 在 `_data/publications.yml` 对应年份的位置加一条，字段说明见文件开头。

- 写了 `selected: true` 的论文会出现在首页，并在 Publications 里标记 Selected。
- 写了 `details` 的论文，展开后显示 Motivation / Method / Results；否则显示摘要。
- 音频放到 `assets/audio/<id>/`，再加 `audio` 字段，展开面板里就会出现播放器。

## 本地预览

```sh
bundle install
bundle exec jekyll serve
```
