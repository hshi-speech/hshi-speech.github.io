---
title: "Enhancing Two-stage Finetuning for Speech Emotion Recognition Using Adapters"
collection: publications
category: conferences
permalink: /publication/Icassp2024gao
excerpt: 'Yuan Gao, Hao Shi, Chenhui Chu, Tatsuya Kawahara'
date: 2024-04-14
venue: 'IEEE-ICASSP'
biburl: 'https://hshi-speech.github.io/files/bib/icassp-2024-gao.txt'
paperurl: 'https://hshi-speech.github.io/files/publications/icassp-2024-gao.pdf'
citation: #
---

This study investigates the effective finetuning of a pretrained model using adapters for speech emotion recognition (SER). Since emotion is related with linguistic and prosodic information and also other attributes such as gender and speaking style, a framework of multi-task learning (MTL) has been shown to be effective for SER. However, the learning targets of automatic speech recognition (ASR) and other attribute recognition are apparently in conflict. Therefore, we propose to employ different adaptation methods for different tasks in multiple finetuning stages. Since ASR is the most challenging and also influential for SER, in the first stage, we finetune all parameters of the pretrained model for ASR and SER. In the second stage, we incorporate adapters to finetune the model for gender and style recognition in addition to SER by freezing the parameters of the main Transformer model tuned for ASR. Experimental evaluations which extensively compare different adaptation methods using the IEMOCAP dataset demonstrate that the proposed approach achieves a significant improvement from the simple MTL.
