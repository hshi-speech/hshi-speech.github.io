---
title: "Singing Voice Extraction with Attention-Based Spectrograms Fusion"
collection: publications
category: conferences
permalink: /publication/Interspeech2020shi
excerpt: 'Hao Shi, Longbiao Wang, Sheng Li, Chenchen Ding, Meng Ge, Nan Li, Jianwu Dang, and Hiroshi Seki'
date: 2020-10-25
venue: 'Interspeech'
biburl: 'https://hshi-speech.github.io/files/bib/interspeech-2020-shi.txt'
paperurl: 'https://hshi-speech.github.io/files/publications/interspeech-2020-shi.pdf'
citation: #
---

We propose a novel attention mechanism-based spectrograms fusion system with minimum difference masks (MDMs) estimation for singing voice extraction. Compared with previous works that use a fully connected neural network, our system takes advantage of the multi-head attention mechanism. Specifically, we 1) try a variety of embedding methods of multiple spectrograms as the input of attention mechanisms, which can provide multi-scale correlation information between adjacent frames in the spectrograms; 2) add a regular term to loss function to obtain better continuity of spectrogram; 3) use the phase of the linear fusion waveform to reconstruct the final waveform, which can reduce the impact of the inconsistent spectrogram. Experiments on the MIR-1K dataset show that our system consistently improves the quantitative evaluation by the perceptual evaluation of speech quality, signal-to-distortion ratio, signal-to-interference ratio, and signal-to-artifact ratio.
