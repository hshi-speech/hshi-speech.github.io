---
title: "Error Correction by Paying Attention to Both Acoustic and Confidence References for Automatic Speech Recognition"
collection: publications
category: conferences
permalink: /publication/Interspeech2024shu
excerpt: 'Yuchun Shu, Bo Hu, Yifeng He, Hao Shi, Longbiao Wang, and Jianwu Dang'
date: 2024-09-01
venue: 'Interspeech'
biburl: 'https://raw.githubusercontent.com/hshi-speech/hshi_speech.github.io/master/files/bib/interspeech-2024-shu.txt'
paperurl: 'https://drive.google.com/file/d/1c8mJPRNJQRtNwxv60eICIh3V6nUBh4_E/view?usp=drive_link'
citation: #
---

Accurately finding the wrong words in the automatic speech recognition (ASR) hypothesis and recovering them well-founded is the goal of speech error correction. In this paper, we propose a non-autoregressive speech error correction method. A Confidence Module measures the uncertainty of each word of the N-best ASR hypotheses as the reference to find the wrong word position. Besides, the acoustic feature from the ASR encoder is also used to provide the correct pronunciation references. N-best candidates from ASR are aligned using the edit path, to confirm each other and recover some missing character errors. Furthermore, the cross-attention mechanism fuses the information between error correction references and the ASR hypothesis. The experimental results show that both the acoustic and confidence references help with error correction. The proposed system reduces the error rate by 21% compared with the ASR model.
