---
title: "Serialized Speech Information Guidance with Overlapped Encoding Separation for Multi-Speaker Automatic Speech Recognition"
collection: publications
category: conferences
permalink: /publication/Slt2024shi
excerpt: 'Hao Shi, Yuan Gao, Zhaoheng Ni, and Tatusya Kawahara'
date: 2024-12-02
venue: 'IEEE-SLT'
biburl: 'https://raw.githubusercontent.com/hshi-speech/hshi_speech.github.io/master/files/bib/slt-2024-shi.txt'
paperurl: 'https://arxiv.org/pdf/2409.00815'
citation: #
---

Serialized output training (SOT) attracts increasing attention due to its convenience and flexibility for multi-speaker automatic speech recognition (ASR). However, it is not easy to train with attention loss only. In this paper, we propose the overlapped encoding separation (EncSep) to fully utilize the benefits of the connectionist temporal classification (CTC) and attention (CTC-Attention) hybrid loss. This additional separator is inserted after the encoder to extract the multi-speaker information with CTC losses. Furthermore, we propose the serialized speech information guidance SOT (GEncSep) to further utilize the separated encodings. The separated streams are concatenated to provide single-speaker information to guide attention during decoding. The experimental results on Libri2Mix and Libri3Mix show that the single-speaker encoding can be separated from the overlapped encoding. The CTC loss helps to improve the encoder representation under complex scenarios (three-speaker and noisy conditions), which makes the EncSep have a relative improvement of more than 8% and 6% on the noisy Libri2Mix and Libri3Mix evaluation sets, respectively. GEncSep further improved performance, which was more than 12% and 9% relative improvement for the noisy Libri2Mix and Libri3Mix evaluation sets.
