---
title: "Adapting Pretrained Speech Recognition Models for Code-Switching through Encoding Refining and Language-Aware Attention-based Decoding"
collection: publications
category: conferences
permalink: /publication/Icassp2025zhao
excerpt: 'Jiahui Zhao, Hao Shi, Tianrui Wang, Hexin Liu, Zhaoheng Ni, Lingxuan Ye, and Longbiao Wang'
date: 2025-04-07
venue: 'IEEE-ICASSP'
biburl: 'https://hshi-speech.github.io/files/bib/icassp-2025-zhao.txt'
paperurl: 'https://arxiv.org/pdf/2412.16507'
citation: #
---

Code-switching (CS) automatic speech recognition (ASR) faces challenges due to the language confusion resulting from accents, auditory similarity, and seamless language switches. 
Adaptation on the pre-trained multi-lingual model has shown promising performance for CS-ASR. 
In this paper, we adapt Whisper, which is a large-scale multilingual pre-trained speech recognition model, to CS from both encoder and decoder parts. 
First, we propose an encoder refiner to enhance the encoder's capacity of intra-sentence swithching. 
Second, we propose using two sets of language-aware adapters with different language prompt embeddings to achieve language-specific decoding information in each decoder layer. 
Then, a fusion module is added to fuse the language-aware decoding. 
The experimental results using the SEAME dataset show that, compared with the baseline model, the proposed approach achieves a relative MER reduction of 4.1% and 7.2% on the dev_man and dev_sge test sets, respectively, surpassing state-of-the-art methods. 
Through experiments, we found that the proposed method significantly improves the performance on non-native language in CS speech, indicating that our approach enables Whisper to better distinguish between the two languages. 
