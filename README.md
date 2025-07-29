# Midjourney Image Downloader

一个为 [Midjourney](https://www.midjourney.com/) 网页端图片添加“一键下载原图”按钮的 Chrome 扩展。

## 功能简介
- 只在 Midjourney 网站弹窗大图（class 含 `bg-light-lightbox`，img 带 `draggable="true"`）右下角显示“下载原图”按钮。
- 一键下载原图，无需右键另存为。
- 小图、缩略图不会出现按钮，界面简洁。

## 安装方法
1. 克隆或下载本项目到本地：
   ```bash
   git clone https://github.com/你的用户名/midjourney-downloader.git
   ```
2. 打开 Chrome，访问 `chrome://extensions/`。
3. 开启右上角“开发者模式”。
4. 点击“加载已解压的扩展程序”，选择本项目文件夹（如 `midjourney-downloader`）。

## 使用说明
1. 访问 [https://www.midjourney.com/](https://www.midjourney.com/)。
2. 点开任意一张图片大图弹窗，右下角会出现“下载原图”按钮。
3. 点击按钮即可自动下载原图。

## 常见问题
- **按钮没显示？**
  - 请确保已点开大图弹窗，且图片的 `<img>` 标签带有 `draggable="true"` 属性。
  - 刷新页面或重新加载扩展后再试。
- **下载的不是原图？**
  - 本扩展使用图片的 `src` 属性作为下载链接。
  - 如 Midjourney 页面结构有变化，请反馈 issue。
- **支持Edge/其他Chromium浏览器吗？**
  - 支持，方法同上。

## 贡献 & 致谢
- 欢迎 PR 和 issue！
- 感谢 Midjourney 官方和所有开源贡献者。

---

> 本项目仅供学习与个人使用，请勿用于商业用途。 