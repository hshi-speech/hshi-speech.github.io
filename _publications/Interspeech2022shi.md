---
title: "Monaural speech enhancement based on spectrogram decomposition for convolutional neural network-sensitive feature extraction"
collection: publications
category: conferences
permalink: /publication/Interspeech2022shi
excerpt: 'Hao Shi, Longbiao Wang, Sheng Li, Jianwu Dang, and Tatsuya Kawahara'
date: 2022-09-14
venue: 'Interspeech'
biburl: 'https://hshi-speech.github.io/files/bib/interspeech-2022-shi.txt'
paperurl: 'https://hshi-speech.github.io/files/publications/interspeech-2022-shi.pdf'
citation: #
---

Many state-of-the-art speech enhancement (SE) systems have recently used convolutional neural networks (CNNs) to extract multi-scale feature maps. However, CNN relies more on local texture than global shape, which is more susceptible to degraded spectrogram and may fail to capture the detailed structure of speech. Although some two-stage systems feed the first-stage enhanced and original noisy spectrograms to the second stage simultaneously, this does not guarantee sufficient guidance for the second stage since the first-stage spectrogram can not provide precise spectral details. In order to allow CNNs to perceive clear speech component boundary information, we compose feature maps with spectrograms containing evident speech components according to the mask value from the first stage. The positions corresponding to the mask greater than certain thresholds are extracted as feature maps. These feature maps make the boundary information of speech components obvious by ignoring others, thus making CNNs sensitive to input features. Experiments on the VB dataset show that with a proper decomposition numbers, the proposed method can enhance SE performance, which can provide 0.15 PESQ improvement. Besides, the proposed method is more effective for spectral detail recovery.
