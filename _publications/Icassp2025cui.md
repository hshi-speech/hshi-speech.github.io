---
title: "Reducing the Gap between Pretrained Speech Enhancement and Recognition Models Using a Real Speech-Trained Bridging Module"
collection: publications
category: conferences
permalink: /publication/Icassp2025cui
excerpt: 'Zhongjian Cui, Chenrui Cui, Tianrui Wang, Mengnan He, Hao Shi, Meng Ge, Caixia Gong, Longbiao Wang, and Jianwu Dang'
date: 2025-04-06
venue: 'IEEE-ICASSP'
biburl: 'https://hshi-speech.github.io/files/bib/icassp-2025-cui.txt'
paperurl: 'https://arxiv.org/pdf/2501.02452'
citation: #
---

The information loss or distortion caused by single-channel speech enhancement (SE) harms the performance of automatic speech recognition (ASR). 
Observation addition (OA) is an effective post-processing method to improve ASR performance by balancing noisy and enhanced speech. 
Determining the OA coefficient is crucial. 
However, the currently supervised OA coefficient module, called the bridging module, only utilizes simulated noisy speech for training, which has a severe mismatch with real noisy speech. 
In this paper, we propose training strategies to train the bridging module with real noisy speech. 
First, DNSMOS is selected to evaluate the perceptual quality of real noisy speech with no need for the corresponding clean label to train the bridging module. 
Additional constraints during training are introduced to enhance the robustness of the bridging module further. 
Each utterance is evaluated by the ASR back-end using various OA coefficients to obtain the word error rates (WERs). 
The WERs are used to consist of a multidimensional vector. 
This vector is introduced into the bridging module with multi-task learning and is used to determine the optimal OA coefficients. 
The experimental results on the CHiME-4 dataset show that the proposed methods all had significant improvement compared with the simulated data trained bridging module, especially under real evaluation sets. 
