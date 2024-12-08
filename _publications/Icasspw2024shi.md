---
title: "Ensemble Inference for Diffusion Model-based Speech Enhancement"
collection: publications
category: conferences
permalink: /publication/Icasspw2024shi
excerpt: 'Hao Shi, Naoyuki Kamo, Marc Delcroix, Tomohiro Nakatani, and Shoko Araki'
date: 2024-04-14
venue: 'IEEE-ICASSPW'
biburl: 'https://hshi-speech.github.io/files/bib/hscma-2024-shi.txt'
paperurl: 'https://hshi-speech.github.io/files/publications/hscma-2024-shi.pdf'
citation: #
---

Diffusion-based speech enhancement (SE) is a probabilistic model that provides distribution of enhanced speech. Based on this property, we previously proposed ensemble inference and showed that solving a reverse Stochastic Differential Equation (SDE) multiple times and performing an ensemble over the obtained samples significantly improves the performance. Unfortunately, we failed to sufficiently explore our proposed ensemble inference. First, we only tested it on target speech extraction (TSE) and not on such general SE tasks as denoising. Second, sample generation greatly increased the computational complexity. Finally, the method considered all samples equally without heeding potential outliers. This paper addresses these issues and proposes a computationally efficient sample generation technique called SplitTree and ensemble inference combined with outlier removal to improve the ensemble’s effectiveness. We conducted experiments using the WSJ-CHiME3 and LibriMix-2spk datasets for denoising and TSE tasks and confirmed the following: 1) Ensemble inference also helps denoising tasks; 2) SplitTree reduces the complexity of the ensemble inference by about 40% while maintaining a similar level of performance; and 3) Our proposed outlier removal improves the ensemble performance for TSE task.
