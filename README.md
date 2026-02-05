<h1 align="center">ACE-Step 1.5 + UI AIO</h1>

<p align="center">
  <strong>The Ultimate Open Source Suno Alternative</strong><br>
  <em>Seamless integration with <a href="https://github.com/ace-step/ACE-Step-1.5">ACE-Step 1.5</a> - The Open Source AI Music Generation Model</em>
</p>


<p align="center">
  <img src="https://img.shields.io/badge/CUDA-12.8-76B900?style=for-the-badge&logo=nvidia" alt="CUDA 12.8">
  <img src="https://img.shields.io/badge/Windows-10%2F11-0078D6?style=for-the-badge&logo=windows" alt="Windows">
  <img src="https://img.shields.io/badge/Python-3.11%2B-3776AB?style=for-the-badge&logo=python" alt="Python 3.11+">
  <img src="https://img.shields.io/badge/Git-Required-F05032?style=for-the-badge&logo=git" alt="Git Required">
  <img src="https://img.shields.io/badge/HuggingFace-ACE--Step-FFD21E?style=for-the-badge&logo=huggingface" alt="HuggingFace">
</p>

<p align="center">
  <a href="https://github.com/ace-step/ACE-Step-1.5">Original Model Repo</a> •
  <a href="https://huggingface.co/ACE-Step/Ace-Step1.5">HuggingFace Models</a> •
  <a href="https://ace-step.github.io/ace-step-v1.5.github.io/">Project Page</a> •
  <a href="https://arxiv.org/abs/2602.00744">Technical Report</a> •
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

## 🎬 Demo

<p align="center">
  <a href="https://www.youtube.com/watch?v=8zg0Xi36qGc">
    <img src="https://img.shields.io/badge/▶_Watch_Full_Demo-YouTube-FF0000?style=for-the-badge&logo=youtube" alt="Watch Demo on YouTube">
  </a>
</p>

<p align="center">
  <img src="demo.gif" alt="Demo Animation" width="100%">
</p>
 
<p align="center">
  <em>Generate professional AI music with a Spotify-like interface - 100% free and local</em>
</p>

---

## 🚀 Why ACE-Step AIO?

**Tired of paying $10+/month for Suno or Udio?** 

This All-in-One (AIO) installer combines:
- **[ACE-Step 1.5](https://github.com/ace-step/ACE-Step-1.5)** - The revolutionary open source AI music generation model (MIT License)
- **[ACE-Step UI](https://github.com/fspecii/ace-step-ui)** - The beautiful Spotify-inspired interface (MIT License)

| Feature | Suno/Udio | ACE-Step AIO |
|---------|-----------|--------------|
| **Cost** | $10-50/month | **FREE forever** |
| **Privacy** | Cloud-based | **100% local** |
| **Ownership** | Licensed | **You own everything** |
| **Customization** | Limited | **Full control** |
| **Queue Limits** | Restricted | **Unlimited** |
| **Commercial Use** | Expensive tiers | **No restrictions** |

### What Makes ACE-Step 1.5 Special?

- **State-of-the-art quality** rivaling commercial services (between Suno v4.5 and v5)
- **Full song generation** up to 4+ minutes with vocals
- **Runs locally** - no internet required after setup
- **Open source** - inspect, modify, improve
- **Ultra-fast**: Under 2s (A100) to 10s (RTX 3090) per full song

---

## 📋 Minimum Requirements

| Component | Specification |
|-----------|---------------|
| **OS** | Windows 10/11 64-bit |
| **GPU** | NVIDIA GPU with CUDA 12.8 support |
| **VRAM** | **4GB minimum** (12GB+ recommended for LLM/Thinking Mode) |
| **RAM** | 8GB system memory |
| **Storage** | **~30GB free space** (includes ~24GB model files) |
| **Software** | Git, Python 3.11 (included in portable package) |
| **Internet** | Required for first-run model download only |

---

## 🚀 Quick Start (Windows AIO Installer)

**Download the All-in-One Installer for Windows (CUDA 12.8):**

📦 **[Download AceStep-1.5-UI-AIO-Installer-Windows-CUDA12.8-x64.zip](https://github.com/Saganaki22/ACE-Step-1.5-UI_AIO/releases/download/Installer/AceStep-1.5-UI-AIO-Installer-Windows-CUDA12.8-x64.zip)**

*No Git required, no manual setup. The batch file handles everything automatically.*

### Installation Steps

1. **Download** the ZIP from the link above (~5GB)
2. **Extract** all files to your desired installation directory
3. **Run** `Install-ACEStep_UI_AIO.bat` as Administrator
4. **Wait** for the automatic setup to complete (downloads ~24GB additional model files on first run)
5. **Access** the application at `http://localhost:3000`

*The installer automatically creates a desktop shortcut for future launches.*

### What the Installer Does
- ✅ Downloads the latest ACE-Step 1.5 and UI repositories (no git pull needed)
- ✅ Installs all Python dependencies (uv, torch, etc.)
- ✅ Downloads required AI models (~24GB) from [HuggingFace](https://huggingface.co/ACE-Step/Ace-Step1.5)
- ✅ Configures CUDA 12.8 environment
- ✅ Creates desktop shortcut for easy launching
- ✅ Starts Backend + Frontend + API automatically

### First Run Notes
⚠️ **Important**: On first run, the installer will download approximately **24 GB of model files**. This may take significant time depending on your internet speed. Please be patient and do not interrupt the process.

After completion, the installer automatically launches:
- **API Server** (Port 8001)
- **Backend** (Port 3001)  
- **Frontend** (Port 3000)

---

## ✨ Features

### 🎵 AI Music Generation
| Feature | Description |
|---------|-------------|
| **Full Song Generation** | Create complete songs with vocals and lyrics up to 4+ minutes |
| **Instrumental Mode** | Generate instrumental tracks without vocals |
| **Custom Mode** | Fine-tune BPM, key, time signature, and duration |
| **Style Tags** | Define genre, mood, tempo, and instrumentation |
| **Batch Generation** | Generate multiple variations at once |
| **Thinking Mode** | Let AI enhance your prompts automatically (requires 12GB+ VRAM) |

### 🎨 Advanced Parameters
| Feature | Description |
|---------|-------------|
| **Reference Audio** | Use any audio file as a style reference |
| **Audio Cover** | Transform existing audio with new styles |
| **Repainting** | Regenerate specific sections of a track |
| **Seed Control** | Reproduce exact generations for consistency |
| **Inference Steps** | Control quality vs speed tradeoff |

### 🎧 Professional Interface
| Feature | Description |
|---------|-------------|
| **Spotify-Inspired UI** | Clean, modern design with dark/light mode |
| **Bottom Player** | Full-featured player with waveform and progress |
| **Library Management** | Browse, search, and organize all your tracks |
| **Likes & Playlists** | Organize favorites into custom playlists |
| **LAN Access** | Use from any device on your local network |

### 🛠️ Built-in Tools
| Feature | Description |
|---------|-------------|
| **Audio Editor** | Trim, fade, and apply effects with AudioMass |
| **Stem Extraction** | Separate vocals, drums, bass, and other with Demucs |
| **Video Generator** | Create music videos with Pexels backgrounds |
| **Gradient Covers** | Beautiful procedural album art (no internet needed) |

---

## 🖥️ Architecture Overview

<p align="center">
    <img src="./assets/ACE-Step_framework.png" width="100%" alt="ACE-Step Framework">
</p>

**Core Components:**
- **DiT (Diffusion Transformer)**: Audio generation engine
  - `acestep-v15-turbo`: 8-step generation, fastest option (default)
  - `acestep-v15-sft`: 50-step, highest quality
- **LM (Language Model)**: Query understanding and metadata generation
  - `acestep-5Hz-lm-0.6B`: Lightweight (6-12GB VRAM)
  - `acestep-5Hz-lm-1.7B`: Balanced (12-16GB VRAM) 
  - `acestep-5Hz-lm-4B`: Best quality (16GB+ VRAM)

---

## 💻 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React 18, TypeScript, TailwindCSS, Vite |
| **Backend** | Express.js, SQLite, better-sqlite3 |
| **AI Engine** | [ACE-Step 1.5](https://github.com/ace-step/ACE-Step-1.5) |
| **Audio Tools** | AudioMass, Demucs, FFmpeg |

---

## 🎮 Usage

Once installed via the AIO package:

1. **Double-click** the desktop shortcut (or run `Install-ACEStep_UI_AIO.bat` again)
2. Wait for the API server to show "Application startup complete"
3. Open **http://localhost:3000** in your browser
4. Start generating!

**Access from other devices on your LAN:**
- Find your PC's IP address
- Access via `http://YOUR_IP:3000`

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **CUDA out of memory** | Disable "Thinking Mode" in settings (requires 12GB+ VRAM) or reduce duration |
| **4GB GPU crashes** | Ensure Thinking Mode is OFF. Use Simple Mode only. |
| **Models won't download** | Check internet connection; installer will retry automatically |
| **Port conflicts** | Ensure ports 3000, 3001, and 8001 are not in use by other applications |
| **Antivirus blocks** | Add exception for the installation directory |
| **Songs show 0:00 duration** | Install FFmpeg if not using the AIO package |


---

## 🙏 Credits & Attribution

This AIO installer combines two amazing open source projects:

- **[ACE-Step 1.5](https://github.com/ace-step/ACE-Step-1.5)** - The revolutionary open source AI music generation model
  - GitHub: https://github.com/ace-step/ACE-Step-1.5
  - HuggingFace: https://huggingface.co/ACE-Step/Ace-Step1.5
  - License: MIT

- **[ACE-Step UI](https://github.com/fspecii/ace-step-ui)** - The beautiful web interface for ACE-Step
  - GitHub: https://github.com/fspecii/ace-step-ui
  - License: MIT

- **[AudioMass](https://github.com/pkalogiros/AudioMass)** - Web audio editor
- **[Demucs](https://github.com/facebookresearch/demucs)** - Audio source separation
- **[Pexels](https://www.pexels.com)** - Stock video backgrounds

---

## 📄 License

This project is open source under the [MIT License](LICENSE).

**Note**: This AIO installer is a community convenience package. All credit for the AI model goes to the ACE-Step team, and all credit for the UI goes to the ACE-Step UI team.

---

<p align="center">
  <strong>⭐ If this AIO installer helps you create amazing music, please star the repo! ⭐</strong>
</p>

<p align="center">
  <em>Stop paying for Suno. Start creating with ACE-Step.</em><br>
  <strong>Made with ❤️ for the open-source AI music community</strong>
</p>
