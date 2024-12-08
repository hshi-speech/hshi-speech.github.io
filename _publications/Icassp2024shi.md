---
title: "Diffusion-Based Speech Enhancement with Joint Generative and Predictive Decoders"
collection: publications
category: conferences
permalink: /publication/Icassp2024shi
excerpt: 'Hao Shi, Kazuki Shimada, Masato Hirano, Takashi Shibuya, Yuichiro Koyama, Zhi Zhong, Shusuke Takahashi, Tatsuya Kawahara, and Yuki Mitsufuji'
date: 2024-04-14
venue: 'IEEE-ICASSP'
biburl: 'https://raw.githubusercontent.com/hshi-speech/hshi_speech.github.io/master/files/bib/icassp-2024-shi.txt'
paperurl: 'https://drive.google.com/file/d/14FWzu4bmH8HqhXHFkhasEcOxdrEYEja6/view?usp=drive_link'
citation: #
---

Diffusion-based generative speech enhancement (SE) has recently received attention, but reverse diffusion remains time-consuming. One solution is to initialize the reverse diffusion process with enhanced features estimated by a predictive SE system. However, the pipeline structure currently does not consider for a combined use of generative and predictive decoders. The predictive decoder allows us to use the further complementarity between predictive and diffusion-based generative SE. In this paper, we propose a unified system that use jointly generative and predictive decoders across two levels. The encoder encodes both generative and predictive information at the shared encoding level. At the decoded feature level, we fuse the two decoded features by generative and predictive decoders. Specifically, the two SE modules are fused in the initial and final diffusion steps: the initial fusion initializes the diffusion process with the predictive SE to improve convergence, and the final fusion combines the two complementary SE outputs to enhance SE performance. Experiments conducted on the Voice-Bank dataset demonstrate that incorporating predictive information leads to faster decoding and higher PESQ scores compared with other score-based diffusion SE (StoRM and SGMSE+).
