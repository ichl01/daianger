//データベース
var obj = [
  {
    subject: "古文",
    content: "テキスト: 7古今著聞集",
    due: new Date(2023, 6, 10, 0, 0),
    id: 18
  }, {
    subject: "現代文",
    content: "プリント: 8(評)日高敏隆",
    due: new Date(2023, 6, 10, 0, 0),
    id: 20
  }, {
    subject: "古文",
    content: "テキスト: 8北辺随筆",
    due: new Date(2023, 6, 18, 0, 0),
    id: 21
  }, {
    subject: "漢文",
    content: "プリント: 9「三国志」",
    due: new Date(2023, 6, 18, 0, 0),
    id: 23
  }, {
    subject: "現代文",
    content: "プリント: 9(評)山崎正和",
    due: new Date(2023, 6, 24, 0, 0),
    id: 24
  }, {
    subject: "漢文",
    content: "プリント: 10 唐詩選",
    due: new Date(2023, 6, 24, 0, 0),
    id: 25
  }, {
    subject: "現代文",
    content: "プリント: 10(小)佐藤多佳子~14(評)外山滋比古まで",
    due: new Date(2023, 7, 17, 0, 0),
    id: 26
  }, {
    subject: "古文",
    content: "テキスト: 9おらが春~13宇治拾遺物語",
    due: new Date(2023, 7, 17, 0, 0),
    id: 27
  }, {
    subject: "漢文",
    content: "プリント: 新傾向問題1~13「史記」",
    due: new Date(2023, 7, 17, 0, 0),
    id: 28
  }, {
    subject: "現代文",
    content: "プリント: 15(評)柏木博",
    due: new Date(2023, 8, 4, 0, 0),
    id: 29
  }, {
    subject: "古文",
    content: "テキスト: 14今昔物語, 15徒然草",
    due: new Date(2023, 7, 28, 0, 0),
    id: 30
  }, {
    subject: "漢文",
    content: "プリント: 14 唐詩選, 15「太尉文正王...」",
    due: new Date(2023, 8, 4, 0, 0),
    id: 31
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 6, 11, 0, 0),
    id: 68
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第41回",
    due: new Date(2023, 6, 12, 0, 0),
    id: 69
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第42回",
    due: new Date(2023, 6, 13, 0, 0),
    id: 70
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 6, 14, 0, 0),
    id: 71
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 6, 18, 0, 0),
    id: 72
  }, {
    subject: "数学A",
    content: "今日ドリ 第1回",
    due: new Date(2023, 6, 19, 0, 0),
    id: 73
  }, {
    subject: "数学A",
    content: "今日ドリ 第3回",
    due: new Date(2023, 6, 20, 0, 0),
    id: 74
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 6, 21, 0, 0),
    id: 75
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 6, 25, 0, 0),
    id: 76
  }, {
    subject: "数学A",
    content: "今日ドリ 第5回",
    due: new Date(2023, 6, 26, 0, 0),
    id: 77
  }, {
    subject: "数学A",
    content: "今日ドリ 第7回",
    due: new Date(2023, 6, 27, 0, 0),
    id: 78
  },{
    subject: "お知らせ",
    content: "期末考査以前の課題は削除いしました。お問い合わせいただければお探ししますのでお求めの方はサイト管理者までお問い合わせください。",
    due: new Date(2023, 6, 17, 0, 0),
    id: 99
  },  {
    subject: "英語",
    content: "WIDE ANGLE Book 3: Lesson 3,4",
    due: new Date(2023, 6, 10, 0, 0),
    id: 111
  }, {
    subject: "英語",
    content: "WIDE ANGLE Book 3: Lesson 5,6",
    due: new Date(2023, 6, 18, 0, 0),
    id: 112
  }, {
    subject: "英語",
    content: "WIDE ANGLE Book 3: Lesson 7,8",
    due: new Date(2023, 6, 24, 0, 0),
    id: 113
  }, {
    subject: "英語",
    content: "WIDE ANGLE Book 3: Lesson 9~15",
    due: new Date(2023, 7, 17, 0, 0),
    id: 114
  }, {
    subject: "物理基礎",
    content: "センサーP.16,20~27にあるStep1の例題とStep2の例題(Step2の31以外) (提出日:テスト実施日)",
    due: new Date(2023, 6, 5, 0, 0),
    id: 115
  }, {
    subject: "情報",
    content: "ノート 第一章",
    due: new Date(2023, 6, 3, 0, 0),
    id: 117
  }, {
    subject: "古文",
    content: "授業ノート",
    due: new Date(2023, 6, 4, 0, 0),
    id: 118
  },  {
    subject: "公共α",
    content: "スタディノート P.42~P.57",
    due: new Date(2023, 6, 4, 0, 0),
    id: 120
  }, {
    subject: "現代文",
    content: "授業ノート",
    due: new Date(2023, 6, 5, 0, 0),
    id: 121
  }, {
    subject: "論理・表現",
    content: "Workbook Lesson 5~9(p.20~p.39)",
    due: new Date(2023, 6, 5, 0, 0),
    id: 122
  }, {
    subject: "英語B",
    content: "英語Bファイル",
    due: new Date(2023, 6, 3, 0, 0),
    id: 123
  }, {
    subject: "英語B",
    content: "Workbook Lesson 2~3",
    due: new Date(2023, 6, 3, 0, 0),
    id: 124
  }, {
    subject: "数学A",
    content: "授業プリント No.16,17",
    due: new Date(2023, 6, 4, 0, 0),
    id: 125
  }, {
    subject: "漢文",
    content: "授業ノート",
    due: new Date(2023, 6, 6, 0, 0),
    id: 126
  }, {
    subject: "英語A",
    content: "英語Aノート",
    due: new Date(2023, 6, 6, 0, 0),
    id: 127
  }, {
    subject: "英語A",
    content: "Advanced Exercise / Workbook Lesson3~5",
    due: new Date(2023, 6, 6, 0, 0),
    id: 128
  }, {
    subject: "化学基礎",
    content: "徹底ドリル p.22~p.25,p.26の3",
    due: new Date(2023, 6, 3, 0, 0),
    id: 130
  }, {
    subject: "情報Ⅰ",
    content: "資料ノート P2~23、P92 1 2",
    due: new Date(2023, 6, 3, 0, 0),
    id: 131
  }, {
    subject: "地理総合",
    content: "授業プリント(B5ファイルに挟んで提出)",
    due: new Date(2023, 6, 7, 0, 0),
    id: 132
  }, {
    subject: "生物基礎",
    content: "授業プリント: No.10~No.22の範囲を完成させたものをノートに貼って提出",
    due: new Date(2023, 6, 7, 0, 0),
    id: 133
  }, {
    subject: "生物基礎",
    content: "プログレス生物基礎: P14~P37",
    due: new Date(2023, 6, 7, 0, 0),
    id: 134
  }, {
    subject: "歴史総合",
    content: "ノート提出",
    due: new Date(2023, 6, 6, 0, 0),
    id: 135
  }, {
    subject: "数学",
    content: "チャートプリント 15~22 (確率はきちんと説明を書くこと)",
    due: new Date(2023, 6, 10, 0, 0),
    id: 136
  }, {
    subject: "数学",
    content: "チャートプリント 23~26 (確率はきちんと説明を書くこと)",
    due: new Date(2023, 6, 18, 0, 0),
    id: 137
  }, {
    subject: "数学",
    content: "テスト直し",
    due: new Date(2023, 6, 18, 0, 0),
    id: 138
  }, {
    subject: "数学",
    content: "応用問題(数学期末合計点数が140点以上の人)",
    due: new Date(2023, 6, 18, 0, 0),
    id: 139
  }, {
    subject: "進路",
    content: "「夢ナビLive参加ガイド」に感想を書いて提出",
    due: new Date(2023, 6, 18, 0, 0),
    id: 140
  }, {
    subject: "英語",
    content: "テスト直し",
    due: new Date(2023, 6, 18, 0, 0),
    id: 141
  }, {
    subject: "公共Β",
    content: "プリント",
    due: new Date(2023, 7, 28, 0, 0),
    id: 142
  }, {
    subject: "数学",
    content: "チャートプリント 1~14",
    due: new Date(2023, 6, 26, 0, 0),
    id: 143
  }, {
    subject: "数学",
    content: "チャートプリント 15~53",
    due: new Date(2023, 7, 21, 0, 0),
    id: 144
  }, {
    subject: "数学",
    content: "自主課題(チャート40題+)",
    due: new Date(2023, 7, 17, 0, 0),
    id: 143
  }, {
    subject: "国語",
    content: "読書感想文",
    due: new Date(2023, 7, 17, 0, 0),
    id: 144
  }, {
    subject: "化学基礎",
    content: "テスト直し",
    due: new Date(2023, 6, 18, 0, 0),
    id: 145
  }, {
    subject: "英語",
    content: "英語A Advanced Exercise / Workbook: Reading1とLesson6",
    due: new Date(2023, 7, 17, 0, 0),
    id: 146
  }, {
    subject: "英語",
    content: "英語B NT WORKBOOK: Lesson4 ~ Lesson5",
    due: new Date(2023, 7, 17, 0, 0),
    id: 147
  }, {
    subject: "英語",
    content: "論理・表現 Earthrise ワークブック: Lesson10",
    due: new Date(2023, 7, 17, 0, 0),
    id: 148
  }, {
    subject: "英語",
    content: "岡山県高校生レターコンテスト",
    due: new Date(2023, 7, 17, 0, 0),
    id: 149
  }, {
    subject: "英語",
    content: "NEWSBREAKERS(総合設問集を提出)",
    due: new Date(2023, 7, 28, 0, 0),
    id: 150
  }, {
    subject: "英語",
    content: "CNN Workbook",
    due: new Date(2023, 7, 28, 0, 0),
    id: 151
  }, {
    subject: "公共",
    content: "スタディーノート: P.58~P.71",
    due: new Date(2023, 7, 17, 0, 0),
    id: 152
  }, {
    subject: "公共",
    content: "日本のマスメディアについて知ろう!(プリント)",
    due: new Date(2023, 7, 28, 0, 0),
    id: 153
  }, {
    subject: "地理総合",
    content: "白地図プリント",
    due: new Date(2023, 7, 25, 0, 0),
    id: 154
  }, {
    subject: "地理総合",
    content: "作文(Google Classroom参照)",
    due: new Date(2023, 7, 25, 0, 0),
    id: 155
  }, {
    subject: "化学基礎",
    content: "補習で配布するTSP",
    due: new Date(2023, 7, 28, 0, 0),
    id: 156
  }, {
    subject: "生物基礎",
    content: "プログレス生物基礎: P.38~P.39",
    due: new Date(2023, 7, 28, 0, 0),
    id: 157
  }, {
    subject: "進路",
    content: "オープンキャンパス参加シート",
    due: new Date(2023, 7, 28, 0, 0),
    id: 158
  }, {
    subject: "英語",
    content: "CROSSBEAM Pre-Standard Chapter 1,2",
    due: new Date(2023, 8, 4, 0, 0),
    id: 159
  }, {
    subject: "英語",
    content: "CROSSBEAM Pre-Standard Chapter 3,4",
    due: new Date(2023, 8, 12, 0, 0),
    id: 160
  }, {
    subject: "英語",
    content: "CROSSBEAM Pre-Standard Chapter 5,6",
    due: new Date(2023, 8, 19, 0, 0),
    id: 161
  }, {
    subject: "英語",
    content: "CROSSBEAM Pre-Standard Chapter 7,8",
    due: new Date(2023, 9, 2, 0, 0),
    id: 162
  }, {
    subject: "英語",
    content: "CROSSBEAM Pre-Standard Chapter 9,10",
    due: new Date(2023, 9, 16, 0, 0),
    id: 163
  }, {
    subject: "英語",
    content: "CROSSBEAM Pre-Standard Chapter 11,12",
    due: new Date(2023, 9, 23, 0, 0),
    id: 164
  }, {
    subject: "英語",
    content: "CROSSBEAM Pre-Standard Chapter 13~15",
    due: new Date(2023, 9, 30, 0, 0),
    id: 165
  }, {
    subject: "数学",
    content: "宿題テスト直し(一回目+二回目)",
    due: new Date(2023, 8, 4, 0, 0),
    id: 166
  }, {
    subject: "現代文",
    content: "16 (評)加村薩英",
    due: new Date(2023, 8, 12, 0, 0),
    id: 167
  }, {
    subject: "現代文",
    content: "17 (小)千刈あがた",
    due: new Date(2023, 9, 2, 0, 0),
    id: 168
  }, {
    subject: "現代文",
    content: "18 (評)山折哲雄",
    due: new Date(2023, 9, 16, 0, 0),
    id: 169
  }, {
    subject: "現代文",
    content: "19 (評)池上嘉彦",
    due: new Date(2023, 9, 23, 0, 0),
    id: 170
  }, {
    subject: "現代文",
    content: "20 (評)黒崎政男",
    due: new Date(2023, 10, 6, 0, 0),
    id: 171
  }, {
    subject: "現代文",
    content: "21 (詩)黒垣りん",
    due: new Date(2023, 10, 13, 0, 0),
    id: 172
  }, {
    subject: "現代文",
    content: "22 (歌)独楽",
    due: new Date(2023, 10, 27, 0, 0),
    id: 173
  }, {
    subject: "現代文",
    content: "23 (小)井上靖",
    due: new Date(2023, 11, 11, 0, 0),
    id: 174
  }, {
    subject: "現代文",
    content: "24 (評)佐藤卓~28 (評)石城謙吉",
    due: new Date(2024, 0, 10, 0, 0),
    id: 175
  }, {
    subject: "古文",
    content: "16 十訓抄",
    due: new Date(2023, 8, 12, 0, 0),
    id: 176
  }, {
    subject: "古文",
    content: "17 今物語",
    due: new Date(2023, 8, 19, 0, 0),
    id: 177
  }, {
    subject: "古文",
    content: "実力考査解き直し",
    due: new Date(2023, 9, 2, 0, 0),
    id: 178
  }, {
    subject: "古文",
    content: "18 徒然草",
    due: new Date(2023, 9, 23, 0, 0),
    id: 179
  }, {
    subject: "古文",
    content: "19 古本説話集",
    due: new Date(2023, 9, 30, 0, 0),
    id: 180
  }, {
    subject: "古文",
    content: "20 伊曽保物語",
    due: new Date(2023, 10, 13, 0, 0),
    id: 181
  }, {
    subject: "古文",
    content: "21 徒然草",
    due: new Date(2023, 10, 20, 0, 0),
    id: 182
  }, {
    subject: "古文",
    content: "22 蕪村自画賛",
    due: new Date(2023, 11, 11, 0, 0),
    id: 183
  }, {
    subject: "古文",
    content: "23 古今著聞集",
    due: new Date(2023, 11, 18, 0, 0),
    id: 184
  }, {
    subject: "古文",
    content: "24 俊頼髄脳~25沙石集+別途指示",
    due: new Date(2024, 0, 10, 0, 0),
    id: 185
  }, {
    subject: "漢文",
    content: "15「太慰文正王...」",
    due: new Date(2023, 8, 19, 0, 0),
    id: 186
  }, {
    subject: "漢文",
    content: "16 蒙求",
    due: new Date(2023, 9, 2, 0, 0),
    id: 187
  }, {
    subject: "漢文",
    content: "17 十八史略",
    due: new Date(2023, 9, 16, 0, 0),
    id: 188
  }, {
    subject: "漢文",
    content: "18 准南子",
    due: new Date(2023, 9, 30, 0, 0),
    id: 189
  }, {
    subject: "漢文",
    content: "19 世説新話",
    due: new Date(2023, 10, 6, 0, 0),
    id: 190
  }, {
    subject: "漢文",
    content: "20 孟子",
    due: new Date(2023, 10, 20, 0, 0),
    id: 191
  }, {
    subject: "漢文",
    content: "新傾向 2",
    due: new Date(2023, 10, 27, 0, 0),
    id: 192
  }, {
    subject: "漢文",
    content: "21 説苑",
    due: new Date(2023, 11, 18, 0, 0),
    id: 193
  }, {
    subject: "漢文",
    content: "22 韓非子~27 白氏文集",
    due: new Date(2024, 0, 10, 0, 0),
    id: 194
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