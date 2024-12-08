---
title: "Waveform-domain Speech Enhancement Using Spectrogram Encoding for Robust Speech Recognition"
collection: publications
category: manuscripts
permalink: /publication/Taslp2024shi
excerpt: 'Hao Shi, Masato Mimura, and Tatsuya Kawahara'
date: 2024-05-30
venue: 'IEEE/ACM Transactions on Audio, Speech, and Language Processing'
biburl: 'https://raw.githubusercontent.com/hshi-speech/hshi_speech.github.io/master/files/bib/taslp-2024-shi.pdf'
paperurl: 'https://drive.google.com/file/d/1f1gAmRCpyFv227d_J-DFoANb0u7hEG7_/view?usp=drive_link'
citation: #
---

While waveform-domain speech enhancement (SE) has been extensively investigated in recent years and achieves state-of-the-art performance in many datasets, spectrogram-based SE tends to show robust and stable enhancement behavior. In this paper, we propose a waveform-spectrogram hybrid method (WaveSpecEnc) to improve the robustness of waveform-domain SE. WaveSpecEnc refines the corresponding temporal feature map by spectrogram encoding in each encoder layer. Incorporating spectral information provides robust human hearing experience performance. However, it has a minor automatic speech recognition (ASR) improvement. Thus, we improve it for robust ASR by further utilizing spectrogram encoding information (WaveSpecEnc+) to both the SE front-end and ASR back-end. Experimental results using the CHiME-4 dataset show that ASR performance in real evaluation sets is consistently improved with the proposed method, which outperformed others, including DEMUCS and Conv-Tasnet. Refining in the shallow encoder layers is very effective, and the effect is confirmed even with a strong ASR baseline using WavLM.
