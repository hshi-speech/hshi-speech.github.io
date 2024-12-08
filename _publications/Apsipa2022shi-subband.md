---
title: "Subband-Based Spectrogram Fusion for Speech Enhancement by Combining Mapping and Masking Approaches"
collection: publications
category: conferences
permalink: /publication/Apsipa2022shi-subband
excerpt: 'Hao Shi, Longbiao Wang, Sheng Li, Jianwu Dang, and Tatsuya Kawahara'
date: 2022-11-07
venue: 'APSIPA ASC'
biburl: 'https://raw.githubusercontent.com/hshi-speech/hshi_speech.github.io/master/files/bib/apsipa-2022-shi-subband.txt'
paperurl: 'https://drive.google.com/file/d/1W_TerijGmLXgSbIRyFdefG73EoRQfGld/view?usp=drive_link'
citation: #
---

Deep learning brings effective optimization and significant improvements to speech enhancement (SE). Mapping and masking are currently major approaches in single-channel frequency-domain SE with supervised learning. In this work, we first show that these two approaches are complementary in that mapping is more effective in low-frequency bands, while masking is more suitable in high-frequency bands. This is because the high-frequency bands typically have low energy, so estimating the enhanced spectrogram directly does not make sense. Moreover, learning on the low-energy parts is often annihilated by learning on the high-energy parts during the entire loss calculation. To exploit this complementarity, we propose subband-based spectrogram fusion (SBSF), which combines the spectrogram of low-frequency and high-frequency estimated by different SE models. Experimental evaluations show that the SBSF significantly improved the SE performance.
