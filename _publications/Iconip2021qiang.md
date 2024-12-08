---
title: "Speech Dereverberation Based on Scale-aware Mean Square Error Loss"
collection: publications
category: conferences
permalink: /publication/Iconip2021qiang
excerpt: 'Luya Qiang, Hao Shi, Meng Ge, Haoran Yin, Nan Li, Longbiao Wang, Sheng Li, and Jianwu Dang'
date: 2021-12-08
venue: 'ICONIP'
biburl: 'https://hshi-speech.github.io/files/bib/iconip-2021-qiang.txt'
paperurl: 'https://hshi-speech.github.io/files/publications/iconip-2021-qiang.pdf'
citation: #
---

Recently, deep learning-based speech dereverberation approaches have achieved remarkable performance by directly mapping the input spectrogram to a target spectrogram or time-frequency mask. However, these approaches are usually optimized under distance-related objective functions—the mean square error (MSE). The traditional MSE training criterion results in a strong inherent uniform variance statistical assumption on the target speech and noise during training, which cannot be satisfied in real-world scenarios. To alleviate such an assumption mismatch problem, we propose a speech dereverberation solution called Scale-aware Speech Dereverberation (SaSD) based on scaled-MSE. Specifically, we modify the MSE with different scales for each frequency band and progressively reduce the gap between the low- and high-frequency ranges to make the error follow the assumption of MSE assumption. Experiments demonstrated that SaSD achieved 1.0 SRMR and 0.8 PESQ improvements over the mapping baseline system.
