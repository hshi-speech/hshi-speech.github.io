---
title: "Simultaneous Progressive Filtering-based Monaural Speech Enhancement"
collection: publications
category: conferences
permalink: /publication/Iconip2021yin
excerpt: 'Haoran Yin, Hao Shi, Longbiao Wang, Luya Qiang, Sheng Li, Meng Ge, Gaoyan Zhang, and Jianwu Dang'
date: 2021-12-08
venue: 'ICONIP'
biburl: 'https://raw.githubusercontent.com/hshi-speech/hshi_speech.github.io/master/files/bib/iconip-2021-yin.txt'
paperurl: 'https://drive.google.com/file/d/1WqPWUOL3AwS5ASjMg4-b929hGlBquacJ/view?usp=drive_link'
citation: #
---

Speech enhancement (SE) benefits from multi-stage stacking. However, this will introduce a lot of new parameters to the neural network. In this paper, we propose a simultaneous progressive filteringbased monaural SE model. Mapping-based and masking-based SE systems are simultaneously obtained with multi-target learning (MTL). Different from other MTL systems, our proposed model addresses different enhancement needs. The mapping-based SE system aims to recover speech signals from noisy features. While the masking-based SE system serves as a post-filtering to further reduce the noise that still exists after the mapping-based SE system. With the high signal-to-noise ratio inputs, noise reduction of the masking-based SE system is obvious with little speech signal loss. These two stages share one neural network which controls the parameters of the entire system with little or no increase. In addition, our approach is easy to integrate with existing methods and improve their performance significantly and stably. The experiments on Valentini-Botinhao data set show our proposed model achieves 0.12 PESQ improvement compared with directly mapping-based and masking-based SE systems both in single-target and multi-target learning. Furthermore, by comparing spectrograms, we find that our proposed models are able to recover better harmonic information.
