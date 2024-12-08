---
title: "Spectrograms Fusion with Minimum Difference Masks Estimation for Monaural Speech Dereverberation"
collection: publications
category: conferences
permalink: /publication/Icassp2020shi
excerpt: 'Hao Shi, Longbiao Wang, Meng Ge, Sheng Li, and Jianwu Dang'
date: 2020-05-04
venue: 'IEEE-ICASSP'
biburl: 'https://hshi-speech.github.io/files/bib/icassp-2020-shi.txt'
paperurl: 'https://hshi-speech.github.io/files/publications/icassp-2020-shi.pdf'
citation: #
---

Spectrograms fusion is an effective method for incorporating complementary speech dereverberation systems. Previous linear spectrograms fusion by averaging multiple spectrograms shows outstanding performance. However, various systems with different features cannot apply this simple method. In this study, we design the minimum difference masks (MDMs) to classify the time-frequency (T-F) bins in spectrograms according to the nearest distances from labels. Then, we propose a two-stage nonlinear spectrograms fusion system for speech dereverberation. First, we conduct a multitarget learning-based speech dereverberation front-end model to get spectrograms simultaneously. Then, MDMs are estimated to take the best parts of different spectrograms. We are using spectrograms in the first stage and MDMs in the second stage to recombine T-F bins. The experiments on the REVERB challenge show that a strong feature complementarity between spectrograms and MDMs. Moreover, the proposed framework can consistently and significantly improve PESQ and SRMR, both real and simulated data, e.g., an average PESQ gain of 0.1 in all simulated data and an average SRMR gain of 1.22 in all real data.
