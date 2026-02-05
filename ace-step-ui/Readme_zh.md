<h1 align="center">ACE-Step 1.5 + UI AIO</h1>

<p align="center">
  <strong>终极开源 Suno 替代品</strong><br>
  <em>与 <a href="https://github.com/ace-step/ACE-Step-1.5">ACE-Step 1.5</a> 无缝集成 - 开源 AI 音乐生成模型</em>
</p>


<p align="center">
  <img src="https://img.shields.io/badge/CUDA-12.8-76B900?style=for-the-badge&logo=nvidia" alt="CUDA 12.8">
  <img src="https://img.shields.io/badge/Windows-10%2F11-0078D6?style=for-the-badge&logo=windows" alt="Windows">
  <img src="https://img.shields.io/badge/Python-3.11%2B-3776AB?style=for-the-badge&logo=python" alt="Python 3.11+">
  <img src="https://img.shields.io/badge/Git-Required-F05032?style=for-the-badge&logo=git" alt="Git Required">
  <img src="https://img.shields.io/badge/HuggingFace-ACE--Step-FFD21E?style=for-the-badge&logo=huggingface" alt="HuggingFace">
</p>

<p align="center">
  <a href="https://github.com/ace-step/ACE-Step-1.5">原始模型仓库</a> •
  <a href="https://huggingface.co/ACE-Step/Ace-Step1.5">HuggingFace 模型</a> •
  <a href="https://ace-step.github.io/ace-step-v1.5.github.io/">项目主页</a> •
  <a href="https://arxiv.org/abs/2602.00744">技术报告</a> •
  <a href="https://discord.gg/PeWDxrkdj7">Discord</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-06B6D4?style=flat-square&logo=tailwindcss" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/SQLite-Local_First-003B57?style=flat-square&logo=sqlite" alt="SQLite">
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/github/stars/Saganaki22/ACE-Step-1.5-UI_AIO?style=flat-square" alt="AIO Stars">
</p>

<p align="center">
  <img src="./assets/orgnization_logos.png" width="100%" alt="ACE-Step Logo">
  <img src="docs/demo.gif" alt="ACE-Step UI Demo" width="100%">
</p>

---

## 🎬 演示

<p align="center">
  <a href="https://www.youtube.com/watch?v=8zg0Xi36qGc">
    <img src="https://img.shields.io/badge/▶_观看完整演示-YouTube-FF0000?style=for-the-badge&logo=youtube" alt="在 YouTube 上观看演示">
  </a>
</p>

<p align="center">
  <img src="demo.gif" alt="演示动画" width="100%">
</p>
 
<p align="center">
  <em>使用类似 Spotify 的界面生成专业 AI 音乐 - 100% 免费且本地运行</em>
</p>

---

## 🚀 为什么选择 ACE-Step AIO？

**厌倦了每月支付 $10+ 给 Suno 或 Udio？**

这个多合一（AIO）安装程序结合了：
- **[ACE-Step 1.5](https://github.com/ace-step/ACE-Step-1.5)** - 革命性的开源 AI 音乐生成模型（MIT 许可证）
- **[ACE-Step UI](https://github.com/fspecii/ace-step-ui)** - 美观的 Spotify 风格界面（MIT 许可证）

| 功能 | Suno/Udio | ACE-Step AIO |
|---------|-----------|--------------|
| **费用** | $10-50/月 | **永久免费** |
| **隐私** | 云端 | **100% 本地** |
| **所有权** | 许可 | **你拥有一切** |
| **自定义** | 有限 | **完全控制** |
| **队列限制** | 受限 | **无限制** |
| **商业使用** | 昂贵层级 | **无限制** |

### ACE-Step 1.5 有什么特别之处？

- **最先进的质量** - 媲美商业服务（介于 Suno v4.5 和 v5 之间）
- **完整歌曲生成** - 最长 4+ 分钟带人声
- **本地运行** - 设置完成后无需互联网
- **开源** - 检查、修改、改进
- **超快**：A100 不到 2 秒，RTX 3090 不到 10 秒生成完整歌曲

---

## 📋 最低要求

| 组件 | 规格 |
|-----------|---------------|
| **操作系统** | Windows 10/11 64位 |
| **显卡** | 支持 CUDA 12.8 的 NVIDIA 显卡 |
| **显存** | **最低 4GB**（LLM/思考模式建议 12GB+） |
| **内存** | 8GB 系统内存 |
| **存储** | **~30GB 可用空间**（包含 ~24GB 模型文件） |
| **软件** | Git、Python 3.11（便携包已包含） |
| **网络** | 仅首次运行下载模型时需要 |

---

## 🚀 快速开始（Windows AIO 安装程序）

**下载 Windows 多合一安装程序（CUDA 12.8）：**

📦 **[下载 AceStep-1.5-UI-AIO-Installer-Windows-CUDA12.8-x64.zip](https://github.com/Saganaki22/ACE-Step-1.5-UI_AIO/releases/download/Installer/AceStep-1.5-UI-AIO-Installer-Windows-CUDA12.8-x64.zip)**

*无需 Git，无需手动设置。批处理文件自动处理一切。*

### 安装步骤

1. **下载** 上方链接的 ZIP 文件（~5GB）
2. **解压** 所有文件到您想要的安装目录
3. **以管理员身份运行** `Install-ACEStep_UI_AIO.bat`
4. **等待** 自动设置完成（首次运行会下载约 24GB 额外模型文件）
5. **访问** 应用程序 `http://localhost:3000`

*安装程序会自动创建桌面快捷方式供以后启动。*

### 安装程序功能
- ✅ 下载最新 ACE-Step 1.5 和 UI 仓库（无需 git pull）
- ✅ 安装所有 Python 依赖（uv、torch 等）
- ✅ 从 [HuggingFace](https://huggingface.co/ACE-Step/Ace-Step1.5) 下载所需 AI 模型（~24GB）
- ✅ 配置 CUDA 12.8 环境
- ✅ 创建桌面快捷方式方便启动
- ✅ 自动启动后端 + 前端 + API

### 首次运行注意事项
⚠️ **重要**：首次运行时，安装程序将下载约 **24 GB 的模型文件**。根据您的网速可能需要较长时间。请耐心等待，不要中断进程。

完成后，安装程序自动启动：
- **API 服务器**（端口 8001）
- **后端**（端口 3001）
- **前端**（端口 3000）

### 🛑 停止应用程序

如果您需要停止所有进程或遇到端口冲突，请运行：

```batch
stop-all.bat
```

这将终止端口 3000-3008 和 8000-8008 上的所有进程。

---

## ✨ 功能

### 🎵 AI 音乐生成
| 功能 | 描述 |
|---------|-------------|
| **完整歌曲生成** | 创建带人声和歌词的完整歌曲，最长 4+ 分钟 |
| **纯音乐模式** | 生成无人声的纯音乐 |
| **自定义模式** | 微调 BPM、调性、拍号和时长 |
| **风格标签** | 定义流派、情绪、速度和乐器 |
| **批量生成** | 一次生成多个变体 |
| **思考模式** | 让 AI 自动增强您的提示（需要 12GB+ 显存） |

### 🤖 Gemini AI 集成（v0.1.1 新增）
**可选的 AI 增强功能** - 无需 API 密钥即可使用，但添加后功能更强大：

| 功能 | 描述 |
|---------|-------------|
| **AI 生成** | 使用 Google Gemini AI 从简单描述生成完整歌曲（提供 3 种模型可选） |
| **模型选择** | 可选择：Gemini 3 Flash (⚡ 快速)、Gemini 3 Pro (👑 最佳质量) 或 Gemini 2.5 Flash (💰 最便宜) |
| **智能参数** | 为您的歌曲自动生成匹配的 BPM、调性和拍号 |
| **详细风格** | 创建丰富的逗号分隔风格描述（200-300 字符） |
| **格式化与增强** | 一键增强现有歌词和风格描述 |

**注意：** 这些功能是**完全可选的**。没有 Gemini，应用程序也能完美运行 - 您仍然可以在简单模式下正常生成音乐，或在自定义模式下编写自己的歌词。Gemini 只是增加了 AI 辅助的便利性！

### 🎨 高级参数
| 功能 | 描述 |
|---------|-------------|
| **参考音频** | 使用任何音频文件作为风格参考 |
| **音频翻唱** | 用新风格转换现有音频 |
| **重绘** | 重新生成曲目的特定部分 |
| **种子控制** | 重现完全相同的生成结果 |
| **推理步数** | 控制质量与速度的权衡 |

### 🎧 专业界面
| 功能 | 描述 |
|---------|-------------|
| **Spotify 风格界面** | 简洁现代的设计，支持深色/浅色模式 |
| **底部播放器** | 带波形和进度的全功能播放器 |
| **库管理** | 浏览、搜索和组织所有曲目 |
| **喜欢与播放列表** | 将收藏组织到自定义播放列表 |
| **局域网访问** | 从本地网络中的任何设备使用 |

### 🛠️ 内置工具
| 功能 | 描述 |
|---------|-------------|
| **音频编辑器** | 使用 AudioMass 修剪、淡入淡出和应用效果 |
| **音轨分离** | 使用 Demucs 分离人声、鼓、贝斯等 |
| **视频生成器** | 使用 Pexels 背景创建音乐视频 |
| **渐变封面** | 精美的程序化专辑封面（无需互联网） |

---

## 🖥️ 架构概览

<p align="center">
    <img src="./assets/ACE-Step_framework.png" width="100%" alt="ACE-Step Framework">
</p>

**核心组件：**
- **DiT（扩散 Transformer）**：音频生成引擎
  - `acestep-v15-turbo`：8 步生成，最快选项（默认）
  - `acestep-v15-sft`：50 步，最高质量
- **LM（语言模型）**：查询理解和元数据生成
  - `acestep-5Hz-lm-0.6B`：轻量级（6-12GB 显存）
  - `acestep-5Hz-lm-1.7B`：平衡型（12-16GB 显存）
  - `acestep-5Hz-lm-4B`：最佳质量（16GB+ 显存）

---

## 💻 技术栈

| 层 | 技术 |
|-------|-------------|
| **前端** | React 18、TypeScript、TailwindCSS、Vite |
| **后端** | Express.js、SQLite、better-sqlite3 |
| **AI 引擎** | [ACE-Step 1.5](https://github.com/ace-step/ACE-Step-1.5) |
| **AI 助手** | Google Gemini API |
| **音频工具** | AudioMass、Demucs、FFmpeg |

---

## 🎮 使用

通过 AIO 包安装后：

1. **双击** 桌面快捷方式（或再次运行 `Install-ACEStep_UI_AIO.bat`）
2. 等待 API 服务器显示 "Application startup complete"
3. 在浏览器中打开 **http://localhost:3000**
4. 开始生成！

**使用 Gemini AI 功能：**
1. 从 [Google AI Studio](https://aistudio.google.com/app/apikey) 获取免费 API 密钥
2. 添加到 `.env` 文件：`GEMINI_API_KEY=your_key_here`
3. 在简单模式下，选择您喜欢的 Gemini 模型（⚡ Flash、👑 Pro 或 💰 2.5 Flash）
4. 输入歌曲描述并点击 "AI 生成"
5. 或在自定义模式下使用 ✨ 按钮增强现有歌词/风格

**从局域网其他设备访问：**
- 查找您电脑的 IP 地址
- 通过 `http://YOUR_IP:3000` 访问

---

## ⚙️ 配置

### 环境变量

项目包含 `.env.example` 文件，您可以复制并编辑：

1. **复制示例文件：**
   ```bash
   # Windows：
   copy .env.example .env
   
   # Linux/macOS：
   cp .env.example .env
   ```

2. **编辑 `.env` 文件** 在 **`ace-step-ui/` 文件夹**（UI 项目根目录）中，使用以下选项：

#### ACE-Step 模型配置

```env
# 选择您的模型配置（取消注释一个）：

# 标准配置（默认 - 平衡）
ACESTEP_CONFIG_PATH=acestep-v15-turbo
ACESTEP_LM_MODEL_PATH=acestep-5Hz-lm-1.7B
ACESTEP_DEVICE=auto
ACESTEP_LM_BACKEND=vllm

# 高质量配置（需要 16GB+ 显存）
# ACESTEP_CONFIG_PATH=acestep-v15-turbo
# ACESTEP_LM_MODEL_PATH=acestep-5Hz-lm-4B
# ACESTEP_DEVICE=auto
# ACESTEP_LM_BACKEND=vllm
```

**模型选项：**
- `acestep-5Hz-lm-0.6B` - 轻量级（6-12GB 显存）
- `acestep-5Hz-lm-1.7B` - 平衡型（12-16GB 显存）⭐ **默认**
- `acestep-5Hz-lm-4B` - 最佳质量（16GB+ 显存）

#### API 密钥（可选）

这些密钥启用额外功能，但**不是必需的**：

```env
# Pexels API 密钥 - 用于视频生成器中的视频背景
# 获取免费 API 密钥：https://www.pexels.com/api/
PEXELS_API_KEY=your_pexels_api_key_here

# Gemini API 密钥 - 用于 AI 驱动的歌词和风格生成
# 获取免费 API 密钥：https://aistudio.google.com/app/apikey
GEMINI_API_KEY=your_gemini_api_key_here
```

**添加 API 密钥：**
1. 访问上方链接获取免费 API 密钥
2. 打开 **`ace-step-ui/` 文件夹** 中的 `.env` 文件（不是 `server/` 文件夹）
3. 将 `your_pexels_api_key_here` 和/或 `your_gemini_api_key_here` 替换为您的实际密钥
4. 保存文件
5. 如果应用程序正在运行，请重新启动

**重要：** 有两个 `.env` 文件：
- **`ace-step-ui/.env`** ← **使用这个** 存放 API 密钥（Gemini、Pexels）
- `ace-step-ui/server/.env` ← 这是服务器专用设置

**如果不添加这些密钥会发生什么：**
- ✅ **应用程序完美运行** - 所有核心音乐生成功能正常工作
- ⚠️ **Pexels**：视频生成器没有背景视频（会显示错误）
- ⚠️ **Gemini**：AI 生成和格式化/增强按钮无法工作（会显示 "检查 API 密钥" 消息）

**注意：** `.env` 文件自动从 Git 中排除 - 您的 API 密钥保持私密！

---

## 🐛 故障排除

| 问题 | 解决方案 |
|-------|----------|
| **CUDA 内存不足** | 在设置中禁用 "思考模式"（需要 12GB+ 显存）或减少时长 |
| **4GB 显卡崩溃** | 确保思考模式已关闭。仅使用简单模式。 |
| **模型无法下载** | 检查网络连接；安装程序会自动重试 |
| **端口冲突** | 确保端口 3000、3001 和 8001 未被其他应用程序使用 |
| **杀毒软件阻止** | 为安装目录添加例外 |
| **歌曲显示 0:00 时长** | 如果没有使用 AIO 包，请安装 FFmpeg |
| **Gemini API 错误** | 检查 `.env` 文件中的 API 密钥并确保您有互联网连接 |

---

## 🙏 鸣谢

这个 AIO 安装程序结合了两个令人惊叹的开源项目：

- **[ACE-Step 1.5](https://github.com/ace-step/ACE-Step-1.5)** - 革命性的开源 AI 音乐生成模型
  - GitHub：https://github.com/ace-step/ACE-Step-1.5
  - HuggingFace：https://huggingface.co/ACE-Step/Ace-Step1.5
  - 许可证：MIT

- **[ACE-Step UI](https://github.com/fspecii/ace-step-ui)** - ACE-Step 的美观网页界面
  - GitHub：https://github.com/fspecii/ace-step-ui
  - 许可证：MIT

- **[AudioMass](https://github.com/pkalogiros/AudioMass)** - 网页音频编辑器
- **[Demucs](https://github.com/facebookresearch/demucs)** - 音频源分离
- **[Pexels](https://www.pexels.com)** - 库存视频背景
- **[Google Gemini](https://ai.google.dev/)** - AI 驱动的歌词和风格生成

---

## 📄 许可证

本项目在 [MIT 许可证](LICENSE) 下开源。

**注意：** 这个 AIO 安装程序是一个社区便利包。AI 模型的所有荣誉归于 ACE-Step 团队，界面的所有荣誉归于 ACE-Step UI 团队。

---

## 📝 更新日志

### v0.1.1 - Gemini AI 集成
- ✨ 添加 Google Gemini AI 集成用于智能歌曲生成
- 🎯 三个模型选项：Gemini 3 Flash (⚡)、Gemini 3 Pro (👑)、Gemini 2.5 Flash (💰)
- 🎵 简单模式下的 AI 生成按钮 - 从描述创建完整歌曲
- ✨ 自定义模式下的格式化与增强按钮 - 改进现有歌词和风格
- 🎼 自动生成 BPM、调性和拍号
- 📝 详细的风格描述（200-300 字符）和丰富标签
- 🔄 用于 API 可靠性的指数退避重试逻辑
- 🔔 更好的用户反馈的 Toast 通知

---

<p align="center">
  <strong>⭐ 如果这个 AIO 安装程序帮助您创作出令人惊叹的音乐，请给仓库加星！⭐</strong>
</p>

<p align="center">
  <em>停止支付 Suno 费用。开始使用 ACE-Step 创作。</em><br>
  <strong>为开源 AI 音乐社区制作 ❤️</strong>
</p>
