---
title: "Dual-path Adaptation of Pretrained Feature Extraction Module for Robust Automatic Speech Recognition"
collection: publications
category: conferences
permalink: /publication/Interspeech2024shi
excerpt: 'Hao Shi, and Tatusya Kawahara'
date: 2024-09-01
venue: 'Interspeech'
biburl: 'https://hshi-speech.github.io/files/bib/interspeech-2024-shi.txt'
paperurl: 'https://hshi-speech.github.io/files/publications/interspeech-2024-shi.pdf'
citation: #
---

Self-supervised learning (SSL)-based pretrained models have significantly improved automatic speech recognition (ASR) performance. As the feature extraction (FE) module has also been well-trained with a large amount of training data, freezing the FE during finetuning for downstream ASR tasks is common. When there is a severe mismatch between the simulated noisy data for pretraining and real noisy data, however, finetuning the FE with the real noisy data should be done without losing the effective information of the pretrained FE. In this paper, we propose a dual-path adaptation of the FE to address this problem. It combines the frozen pretrained FE path and the finetuned-adapted FE path with convolutional fusion layers. Moreover, adapters are inserted into the Transformer encoder. The experimental results using the CHiME–4 dataset show that using adapters for the FE or the Transformer encoder is effective, but achieving synergy of these two is challenging. Finetuning of the FE combined with adapters in the encoder realizes effective model adaptation. Moreover, the proposed method utilizes the complementarity between the pretrained and the finetuned FE paths, achieving significant improvements even with noise-robust WavLM models.
