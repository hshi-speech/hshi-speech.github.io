---
title: "Self-Distillation Based on High-level Information Supervision for Compressing End-to-End ASR Model"
collection: publications
category: conferences
permalink: /publication/Interspeech2022xu
excerpt: 'Qiang Xu, Tongtong Song, Longbiao Wang, Hao Shi, Yuqin Lin, Yongjie Lv, Meng Ge, Qiang Yu, and Jianwu Dang'
date: 2022-09-14
venue: 'Interspeech'
biburl: 'https://hshi-speech.github.io/files/bib/interspeech-2022-xu.txt'
paperurl: 'https://hshi-speech.github.io/files/publications/interspeech-2022-xu.pdf'
citation: #
---

Model compression of ASR aims to reduce the model parameters while bringing as little performance degradation as possible. Knowledge Distillation (KD) is an efficient model compression method that transfers the knowledge from a large teacher model to a smaller student model. However, most of the existing KD methods study how to fully utilize the teacher’s knowledge without paying attention to the student’s own knowledge. In this paper, we explore whether the high-level information of the model itself is helpful for low-level information. We first propose neighboring feature self-distillation (NFSD) approach to distill the knowledge from the adjacent deeper layer to the shallow one, which shows significant performance improvement. Therefore, we further propose attention-based feature self-distillation (AFSD) approach to exploit more high-level information. Specifically, AFSD fuses the knowledge from multiple deep layers with an attention mechanism and distills it to a shallow one. The experimental results on AISHELL-1 dataset show that 7.3% and 8.3% relative character error rate (CER) reduction can be achieved from NFSD and AFSD, respectively. Inaddition, our proposed two approaches can be easily combined with the general teacher-student knowledge distillation method to achieve 12.4% and 13.4% relative CER reduction compared with the baseline student model, respectively.
