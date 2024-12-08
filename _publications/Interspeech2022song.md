---
title: "Language-specific Characteristic Assistance for Code-switching Speech Recognition"
collection: publications
category: conferences
permalink: /publication/Interspeech2022song
excerpt: 'Tongtong Song, Qiang Xu, Meng Ge, Longbiao Wang, Hao Shi, Yongjie Lv, Yuqin Lin, and Jianwu Dang'
date: 2022-09-14
venue: 'Interspeech'
biburl: 'https://raw.githubusercontent.com/hshi-speech/hshi_speech.github.io/master/files/bib/interspeech-2022-song.txt'
paperurl: 'https://drive.google.com/file/d/1UtgrYvwoP-GUWPgBCZEnn88qbcoINb7z/view?usp=drive_link'
citation: #
---

Dual-encoder structure successfully utilizes two languagespecific encoders (LSEs) for code-switching speech recognition. Because LSEs are initialized by two pre-trained languagespecific models (LSMs), the dual-encoder structure can exploit sufficient monolingual data and capture the individual language attributes. However, most existing methods have no language constraints on LSEs and underutilize language-specific knowledge of LSMs. In this paper, we propose a languagespecific characteristic assistance (LSCA) method to mitigate the above problems. Specifically, during training, we introduce two language-specific losses as language constraints and generate corresponding language-specific targets for them. During decoding, we take the decoding abilities of LSMs into account by combining the output probabilities of two LSMs and the mixture model to obtain the final predictions. Experiments show that either the training or decoding method of LSCA can improve the model’s performance. Furthermore, the best result can obtain up to 15.4% relative error reduction on the codeswitching test set by combining the training and decoding methods of LSCA. Moreover, the system can process code-switching speech recognition tasks well without extra shared parameters or even retraining based on two pre-trained LSMs by using our method.
