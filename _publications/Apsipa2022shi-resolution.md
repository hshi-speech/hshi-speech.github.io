---
title: "Fusing Multiple Bandwidth Spectrograms for Improving Speech Enhancement"
collection: publications
category: conferences
permalink: /publication/Apsipa2022shi-resolution
excerpt: 'Hao Shi, Yuchun Shu, Longbiao Wang, Jianwu Dang, and Tatsuya Kawahara'
date: 2022-11-07
venue: 'APSIPA ASC'
biburl: 'https://raw.githubusercontent.com/hshi-speech/hshi_speech.github.io/master/files/bib/apsipa-2022-shi-resolutions.txt'
paperurl: 'https://drive.google.com/file/d/1AyC8eYq-d7fJkpAsN_zzt_DDcrSiszU9/view?usp=drive_link'
citation: #
---

Abstract—The spectrogram is a common feature of frequency domain speech enhancement (SE). It can be divided into wideband and narrowband according to the resolution of the spectrogram, which is controlled by the length of framing time. Although narrowband and wideband spectrograms have their own spectral characteristics, SE systems conventionally utilize single narrow bandwidth spectrograms. In this paper, we propose an SE system that simultaneously utilizes multiple bandwidth spectral information, more specifically, augments the wider bandwidth (16ms and 8ms) spectrograms as auxiliary information. Multiple bandwidth information fusion is implemented in the encoder in two ways: fusion only in the last layer (MI-F) and fusion layer by layer (MI-L). Experiments using the VB dataset show that different bandwidth spectrograms can provide supplementary information, which provides more than 0.1 PESQ improvement. The embedding dimension affects the position of the fusion position: MI-F requires less embedding dimension, while MI-L requires a larger dimension and more varied bandwidth. Moreover, the spectrogram which differs more from the main enhancement spectrogram provides better auxiliary information.
