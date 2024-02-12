//データベース
var obj = [
  {
    subject: "現代文",
    content: "プリント:23 (小)井上靖",
    due: new Date(2023, 11, 11, 0, 0),
    id: 174
  }, {
    subject: "現代文",
    content: "プリント:24 (評)佐藤卓~28 (評)石城謙吉",
    due: new Date(2024, 0, 10, 0, 0),
    id: 175
  }, {
    subject: "古文",
    content: "テキスト:22 蕪村自画賛",
    due: new Date(2023, 11, 11, 0, 0),
    id: 183
  }, {
    subject: "古文",
    content: "テキスト:23 古今著聞集",
    due: new Date(2023, 11, 18, 0, 0),
    id: 184
  }, {
    subject: "古文",
    content: "テキスト:24 俊頼髄脳~25沙石集",
    due: new Date(2024, 0, 10, 0, 0),
    id: 185
  }, {
    subject: "漢文",
    content: "プリント:21 説苑",
    due: new Date(2023, 11, 18, 0, 0),
    id: 193
  }, {
    subject: "漢文",
    content: "プリント:22 韓非子~27 白氏文集",
    due: new Date(2024, 0, 10, 0, 0),
    id: 194
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 11, 8, 0, 0),
    id: 236
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 11, 12, 0, 0),
    id: 237
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 11, 15, 0, 0),
    id: 238
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 11, 19, 0, 0),
    id: 239
  }, {
    subject: "数学A",
    content: "今日ドリ 第77回",
    due: new Date(2023, 11, 13, 0, 0),
    id: 240
  }, {
    subject: "数学A",
    content: "今日ドリ 第79回",
    due: new Date(2023, 11, 14, 0, 0),
    id: 241
  }, {
    subject: "数学A",
    content: "今日ドリ 第81回",
    due: new Date(2023, 11, 20, 0, 0),
    id: 242
  }, {
    subject: "数学A",
    content: "今日ドリ 第83回",
    due: new Date(2024, 0, 10, 0, 0),
    id: 243
  }, {
    subject: "数学A",
    content: "今日ドリ 第85回",
    due: new Date(2024, 0, 11, 0, 0),
    id: 244
  }, {
    subject: "数学A",
    content: "今日ドリ 第87回",
    due: new Date(2024, 0, 17, 0, 0),
    id: 245
  }, {
    subject: "数学A",
    content: "今日ドリ 第89回",
    due: new Date(2024, 0, 18, 0, 0),
    id: 246
  }, {
    subject: "数学A",
    content: "今日ドリ 第91回",
    due: new Date(2024, 0, 25, 0, 0),
    id: 247
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 0, 12, 0, 0),
    id: 248
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 0, 16, 0, 0),
    id: 249
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 0, 19, 0, 0),
    id: 250
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 0, 23, 0, 0),
    id: 251
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 0, 26, 0, 0),
    id: 252
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 1, 13, 0, 0),
    id: 253
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 2, 1, 0, 0),
    id: 254
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 2, 8, 0, 0),
    id: 255
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 2, 12, 0, 0),
    id: 256
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 2, 15, 0, 0),
    id: 257
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2024, 2, 19, 0, 0),
    id: 258
  }, {
    subject: "数学Ⅱ",
    content: "今日ドリ 第1回",
    due: new Date(2024, 2, 13, 0, 0),
    id: 259
  }, {
    subject: "数学Ⅱ",
    content: "今日ドリ 第3回",
    due: new Date(2024, 2, 14, 0, 0),
    id: 260
  }, {
    subject: "英語",
    content: "UNITE STAGE 3 Lesson 7,8",
    due: new Date(2023, 11, 11, 0, 0),
    id: 293
  }, {
    subject: "英語",
    content: "UNITE STAGE 3 Lesson 9,10",
    due: new Date(2023, 11, 18, 0, 0),
    id: 294
  }, {
    subject: "英語",
    content: "UNITE STAGE 3 Lesson 11,12",
    due: new Date(2023, 11, 25, 0, 0),
    id: 295
  }, {
    subject: "英語",
    content: "UNITE STAGE 3 Lesson 13 ~ Optional Lesson 2",
    due: new Date(2024, 0, 5, 0, 0),
    id: 296
  }, {
    subject: "数学B",
    content: "チャートプリント数学B「数列編」(1~8)",
    due: new Date(2023, 11, 18, 0, 0),
    id: 323
  }, {
    subject: "数学B",
    content: "チャートプリント数学B「数列編」(9~24)",
    due: new Date(2023, 11, 25, 0, 0),
    id: 324
  }, {
    subject: "数学",
    content: "過去問に挑戦プリント",
    due: new Date(2024, 0, 5, 0, 0),
    id: 325
  }, {
    subject: "数学",
    content: "大学への数学 一対一対応の演習(数学A) 場合の数&確率1~14",
    due: new Date(2024, 0, 10, 0, 0),
    id: 326
  }, {
    subject: "古文",
    content: "力をつける古文2 1~3",
    due: new Date(2024, 0, 10, 0, 0),
    id: 329
  }, {
    subject: "英語",
    content: "Heartening Advanced Exercise/Workbook Reading 2 'The Boy with the Box'",
    due: new Date(2024, 0, 5, 0, 0),
    id: 332
  }, {
    subject: "英語",
    content: "Focus on Listening Lesson 11~20 / Training Book 多聴問題トレーニング",
    due: new Date(2024, 0, 5, 0, 0),
    id: 333
  }, {
    subject: "英語",
    content: "NT WORKBOOK Lesson10",
    due: new Date(2024, 0, 10, 0, 0),
    id: 335
  }, {
    subject: "英語",
    content: "NEWSBREAKS 総合問題集",
    due: new Date(2024, 0, 10, 0, 0),
    id: 336
  }, {
    subject: "英語",
    content: "英語の構文150 Lesson41~50",
    due: new Date(2024, 0, 12, 0, 0),
    id: 337
  }, {
    subject: "公共α",
    content: "レポート「R5の気になるニュース」",
    due: new Date(2024, 0, 5, 0, 0),
    id: 338
  }, {
    subject: "地理総合",
    content: "白地図プリント「オーストラリア」",
    due: new Date(2024, 0, 12, 0, 0),
    id: 339
  }, {
    subject: "英語",
    content: "QUEST Stage3 Lesson1~8",
    due: new Date(2024, 0, 10, 0, 0),
    id: 340
  }, {
    subject: "英語",
    content: "QUEST Stage3 Lesson9~10",
    due: new Date(2024, 0, 15, 0, 0),
    id: 341
  }, {
    subject: "英語",
    content: "QUEST Stage3 Lesson11~12",
    due: new Date(2024, 0, 22, 0, 0),
    id: 342
  }, {
    subject: "英語",
    content: "QUEST Stage3 Lesson13~15",
    due: new Date(2024, 0, 29, 0, 0),
    id: 343
  }, {
    subject: "英語",
    content: "WIDE ANGLE BOOK 4 Lesson1~4",
    due: new Date(2024, 1, 13, 0, 0),
    id: 344
  }, {
    subject: "英語",
    content: "WIDE ANGLE BOOK 4 Lesson5~12",
    due: new Date(2024, 2, 7, 0, 0),
    id: 345
  }, {
    subject: "英語",
    content: "WIDE ANGLE BOOK 4 Lesson13~15",
    due: new Date(2024, 2, 7, 0, 0),
    id: 346
  }, {
    subject: "英語",
    content: "LISTENING TRIAL Stage 2.5 1~10",
    due: new Date(2024, 0, 22, 0, 0),
    id: 347
  }, {
    subject: "英語",
    content: "LISTENING TRIAL Stage 2.5 11~20",
    due: new Date(2024, 1, 13, 0, 0),
    id: 348
  }, {
    subject: "英語",
    content: "LISTENING TRIAL Stage 2.5 Extra Listening 1~10",
    due: new Date(2024, 2, 7, 0, 0),
    id: 349
  }, {
    subject: "英語",
    content: "LISTENING TRIAL Stage 2.5 Extra Listening 11~20",
    due: new Date(2024, 2, 18, 0, 0),
    id: 350
  }, {
    subject: "数学",
    content: "テスト直し+発展課題(+70点)",
    due: new Date(2024, 0, 15, 0, 0),
    id: 351
  }, {
    subject: "現代文",
    content: "29 小説新傾向問題",
    due: new Date(2024, 0, 15, 0, 0),
    id: 352
  }, {
    subject: "現代文",
    content: "30 評論「和の思想」",
    due: new Date(2024, 0, 22, 0, 0),
    id: 353
  }, {
    subject: "現代文",
    content: "1 評論「白秋望景」",
    due: new Date(2024, 1, 13, 0, 0),
    id: 354
  }, {
    subject: "現代文",
    content: "2 随想「ブラリひょうたん」",
    due: new Date(2024, 2, 11, 0, 0),
    id: 355
  }, {
    subject: "現代文",
    content: "3 小説「母の死と新しい母」",
    due: new Date(2024, 2, 11, 0, 0),
    id: 356
  }, {
    subject: "古文",
    content: "4 「竹取物語」",
    due: new Date(2024, 0, 15, 0, 0),
    id: 357
  }, {
    subject: "古文",
    content: "5 「大鏡」",
    due: new Date(2024, 0, 29, 0, 0),
    id: 358
  }, {
    subject: "古文",
    content: "6 「今昔物語集」",
    due: new Date(2024, 1, 13, 0, 0),
    id: 359
  }, {
    subject: "古文",
    content: "7 「宇治拾遺物語」",
    due: new Date(2024, 2, 11, 0, 0),
    id: 360
  }, {
    subject: "古文",
    content: "8 「沙石集」",
    due: new Date(2024, 2, 11, 0, 0),
    id: 361
  }, {
    subject: "古文",
    content: "実力考査解き直し",
    due: new Date(2024, 2, 18, 0, 0),
    id: 362
  }, {
    subject: "漢文",
    content: "28 「論衡」",
    due: new Date(2024, 0, 22, 0, 0),
    id: 363
  }, {
    subject: "漢文",
    content: "29 「杜子春伝」",
    due: new Date(2024, 0, 29, 0, 0),
    id: 364
  }, {
    subject: "漢文",
    content: "30 「戦国策」",
    due: new Date(2024, 2, 11, 0, 0),
    id: 365
  }, {
    subject: "漢文",
    content: "1 「蒙求」",
    due: new Date(2024, 2, 11, 0, 0),
    id: 366
  }, {
    subject: "漢文",
    content: "2 「史記」",
    due: new Date(2024, 2, 18, 0, 0),
    id: 367
  }, {
    subject: "保健",
    content: "ノート提出(未,再提出)",
    due: new Date(2024, 0, 31, 0, 0),
    id: 368
  }, {
    subject: "生物基礎",
    content: "授業プリント No.41~No.51",
    due: new Date(2024, 1, 5, 0, 0),
    id: 369
  }, {
    subject: "生物基礎",
    content: "プログレス生物基礎:P.64~83の範囲を丸付けして提出",
    due: new Date(2024, 1, 5, 0, 0),
    id: 370
  }, {
    subject: "生物基礎",
    content: "授業中に出題しているスプレッドシート、フォームへの解答",
    due: new Date(2024, 1, 9, 0, 0),
    id: 371
  }, {
    subject: "情報",
    content: "資料ノート(ワーク) P68~89,92~97(6,7,8)",
    due: new Date(2024, 1, 5, 0, 0),
    id: 372
  }, {
    subject: "公共α",
    content: "スタディノート P92〜101",
    due: new Date(2024, 1, 5, 0, 0),
    id: 373
  }, {
    subject: "公共β",
    content: "(2/9) 振り返りフォーム",
    due: new Date(2024, 1, 5, 0, 0),
    id: 374
  }, {
    subject: "地理総合",
    content: "ファイル",
    due: new Date(2024, 1, 6, 0, 0),
    id: 375
  }, {
    subject: "英語A",
    content: "SKYWARD OCEAN 「予習・復習ノート」 Unit14~17",
    due: new Date(2024, 1, 6, 0, 0),
    id: 376
  }, {
    subject: "英語A",
    content: "Long Run Reading「設問集」Unit4~9",
    due: new Date(2024, 1, 6, 0, 0),
    id: 377
  }, {
    subject: "物理基礎",
    content: "やったもの",
    due: new Date(2024, 1, 7, 0, 0),
    id: 378
  }, {
    subject: "古文",
    content: "授業ノート",
    due: new Date(2024, 1, 7, 0, 0),
    id: 379
  }, {
    subject: "論理・表現",
    content: "英語の構文150「学習ノート」",
    due: new Date(2024, 1, 8, 0, 0),
    id: 380
  }, {
    subject: "漢文",
    content: "授業ノート",
    due: new Date(2024, 1, 8, 0, 0),
    id: 381
  }, {
    subject: "化学基礎",
    content: "化学基礎の徹底ドリル p.41,42",
    due: new Date(2024, 1, 8, 0, 0),
    id: 382
  }, {
    subject: "現代文",
    content: "授業ノート「小景異情」のページを開いて提出",
    due: new Date(2024, 1, 9, 0, 0),
    id: 383
  }, {
    subject: "英語B",
    content: "英語Bファイル Lesson11",
    due: new Date(2024, 1, 9, 0, 0),
    id: 384
  }, {
    subject: "英語B",
    content: "NT WORKBOOK Lesson11",
    due: new Date(2024, 1, 9, 0, 0),
    id: 385
  }, {
    subject: "数学",
    content: "テスト直し",
    due: new Date(2024, 1, 13, 0, 0),
    id: 386
  }, {
    subject: "数学",
    content: "実テ過去問(70点以上)",
    due: new Date(2024, 1, 13, 0, 0),
    id: 387
  }];
//データベースの並び替え(日付順)
obj.sort(function (a, b) {
  if (a.due > b.due) {
    return 1;
  } else {
    return -1;
  }
})
console.log(obj)
console.log(obj[0].due)