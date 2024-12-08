---
title: "Time-domain Speech Enhancement Assisted by Multi-resolution Frequency Encoder and Decoder"
collection: publications
category: conferences
permalink: /publication/Icassp2023shi
excerpt: 'Hao Shi, Masato Mimura, Longbiao Wang, Jianwu Dang, and Tatsuya Kawahara'
date: 2023-06-04
venue: 'IEEE-ICASSP'
biburl: 'https://hshi-speech.github.io/files/bib/icassp-2023-shi-tf.txt'
paperurl: 'https://hshi-speech.github.io/files/publications/icassp-2023-shi-tf.pdf'
citation: #
---

Time-domain speech enhancement (SE) has recently been intensively investigated. Among recent works, DEMUCS introduces multi-resolution STFT loss to enhance performance. However, some resolutions used for STFT contain non-stationary signals, and it is challenging to learn multi-resolution frequency losses simultaneously with only one output. For better use of multi-resolution frequency information, we supplement multiple spectrograms in different frame lengths into the time-domain encoders. They extract stationary frequency information in both narrowband and wideband. We also adopt multiple decoder outputs, each of which computes its corresponding resolution frequency loss. Experimental results show that (1) it is more effective to fuse stationary frequency features than non-stationary features in the encoder, and (2) the multiple outputs consistent with the frequency loss improve performance. Experiments on the Voice-Bank dataset show that the proposed method obtained a 0.14 PESQ improvement.
