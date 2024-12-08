---
title: "Extending Audio Masked Autoencoders Toward Audio Restoration"
collection: publications
category: conferences
permalink: /publication/WASPAA2023zhong
excerpt: 'Zhi Zhong, Hao Shi, Masato Hirano, Kazuki Shimada, Kazuya Tateishi, Takashi Shibuya, Shusuke Takahashi, Yuki Mitsufuji'
date: 2023-10-22
venue: 'WASPAA'
biburl: 'https://hshi-speech.github.io/files/bib/waspaa-2023-zhong.txt'
paperurl: 'https://arxiv.org/pdf/2305.06701.pdf'
citation: #
---

Audio classification and restoration are among major downstream tasks in audio signal processing. However, restoration derives less of a benefit from pretrained models compared to the overwhelming success of pretrained models in classification tasks. Due to such unbalanced benefits, there has been rising interest in how to improve the performance of pretrained models for restoration tasks, e.g., speech enhancement (SE). Previous works have shown that the features extracted by pretrained audio encoders are effective for SE tasks, but these speech-specialized encoder-only models usually require extra decoders to become compatible with SE, and involve complicated pretraining procedures or complex data augmentation. Therefore, in pursuit of a universal audio model, the audio masked autoencoder (MAE) whose backbone is the autoencoder of Vision Transformers (ViT-AE), is extended from audio classification to SE, a representative restoration task with well-established evaluation standards. ViT-AE learns to restore masked audio signal via a mel-to-mel mapping during pretraining, which is similar to restoration tasks like SE. We propose variations of ViT-AE for a better SE performance, where the mel-to-mel variations yield high scores in non-intrusive metrics and the STFT-oriented variation is effective at intrusive metrics such as PESQ. Different variations can be used in accordance with the scenarios. Comprehensive evaluations reveal that MAE pretraining is beneficial to SE tasks and help the ViT-AE to better generalize to out-of-domain distortions. We further found that large-scale noisy data of general audio sources, rather than clean speech, is sufficiently effective for pretraining.
