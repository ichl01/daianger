//データベース
var obj = [
  {
    subject: "現代文",
    content: "プリント: 5(評)鈴木孝夫",
    due: new Date(2023, 4, 22, 0, 0),
    id: 10
  }, {
    subject: "古文",
    content: "テキスト: 4十訓抄",
    due: new Date(2023, 4, 22, 0, 0),
    id: 11
  }, {
    subject: "古文",
    content: "テキスト: 5花月草子",
    due: new Date(2023, 4, 29, 0, 0),
    id: 12
  }, {
    subject: "漢文",
    content: "プリント: 6「後漢書」",
    due: new Date(2023, 4, 29, 0, 0),
    id: 13
  }, {
    subject: "現代文",
    content: "プリント: 6(評)加藤秀俊",
    due: new Date(2023, 5, 5, 0, 0),
    id: 14
  }, {
    subject: "漢文",
    content: "プリント: 7「閲微草堂筆記」",
    due: new Date(2023, 5, 5, 0, 0),
    id: 15
  }, {
    subject: "古文",
    content: "テキスト: 6伊曽保物語",
    due: new Date(2023, 5, 12, 0, 0),
    id: 16
  }, {
    subject: "現代文",
    content: "プリント: 7(小)重松清",
    due: new Date(2023, 5, 19, 0, 0),
    id: 17
  }, {
    subject: "古文",
    content: "テキスト: 7古今著聞集",
    due: new Date(2023, 5, 19, 0, 0),
    id: 18
  }, {
    subject: "漢文",
    content: "プリント: 8「戦国策」",
    due: new Date(2023, 5, 26, 0, 0),
    id: 19
  }, {
    subject: "現代文",
    content: "プリント: 8(評)日高敏隆",
    due: new Date(2023, 6, 10, 0, 0),
    id: 20
  }, {
    subject: "古文",
    content: "テキスト: 8北辺随筆",
    due: new Date(2023, 6, 10, 0, 0),
    id: 21
  }, {
    subject: "古文",
    content: "テキスト: 9おらが春",
    due: new Date(2023, 6, 18, 0, 0),
    id: 22
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
    content: "テキスト: 10今昔物語集~14今昔物語集",
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
    due: new Date(2023, 7, 28, 0, 0),
    id: 29
  }, {
    subject: "古文",
    content: "テキスト: 15徒然草, 16十訓抄",
    due: new Date(2023, 7, 28, 0, 0),
    id: 30
  }, {
    subject: "漢文",
    content: "プリント: 14 唐詩選, 15「太尉文正王...」",
    due: new Date(2023, 7, 28, 0, 0),
    id: 31
  }, {
    subject: "英語",
    content: "Breakthrough ワークブック p.76~p.89",
    due: new Date(2023, 4, 22, 0, 0),
    id: 36
  }, {
    subject: "英語",
    content: "OVER ALL 2: UNIT 8・9",
    due: new Date(2023, 4, 29, 0, 0),
    id: 37
  }, {
    subject: "英語",
    content: "OVER ALL 2: UNIT 10・11",
    due: new Date(2023, 5, 5, 0, 0),
    id: 38
  }, {
    subject: "英語",
    content: "OVER ALL 2: UNIT 12・13",
    due: new Date(2023, 5, 12, 0, 0),
    id: 39
  }, {
    subject: "英語",
    content: "OVER ALL 2: UNIT 14・15",
    due: new Date(2023, 5, 19, 0, 0),
    id: 40
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第82回",
    due: new Date(2023, 4, 24, 0, 0),
    id: 50
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第84回",
    due: new Date(2023, 4, 25, 0, 0),
    id: 51
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 4, 26, 0, 0),
    id: 52
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 4, 30, 0, 0),
    id: 53
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第86回",
    due: new Date(2023, 4, 31, 0, 0),
    id: 54
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第87回",
    due: new Date(2023, 5, 1, 0, 0),
    id: 55
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 5, 2, 0, 0),
    id: 56
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 5, 6, 0, 0),
    id: 57
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第89回",
    due: new Date(2023, 5, 8, 0, 0),
    id: 58
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 5, 9, 0, 0),
    id: 59
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 5, 13, 0, 0),
    id: 60
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第91回",
    due: new Date(2023, 5, 14, 0, 0),
    id: 61
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第88回",
    due: new Date(2023, 5, 15, 0, 0),
    id: 62
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 5, 16, 0, 0),
    id: 63
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 5, 20, 0, 0),
    id: 64
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第90回",
    due: new Date(2023, 5, 21, 0, 0),
    id: 65
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第92回",
    due: new Date(2023, 5, 22, 0, 0),
    id: 66
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 5, 23, 0, 0),
    id: 67
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
  },  {
    subject: "英語",
    content: "ALL EARS STANDARD: Lesson1~10",
    due: new Date(2023, 4, 29, 0, 0),
    id: 87
  }, {
    subject: "お知らせ",
    content: "中間考査以前の課題は削除いしました。お問い合わせいただければお探ししますのでお求めの方はサイト管理者までお問い合わせください。",
    due: new Date(2023, 4, 19, 0, 0),
    id: 99
  }, {
    subject: "数学",
    content: "進研模試過去問2021に挑戦",
    due: new Date(2023, 4, 22, 0, 0),
    id: 100
  }, {
    subject: "数学Ⅰ+A",
    content: "中間考査直し",
    due: new Date(2023, 4, 29, 0, 0),
    id: 101
  }, {
    subject: "数学",
    content: "進研模試過去問2020に挑戦",
    due: new Date(2023, 5, 5, 0, 0),
    id: 102
  }, {
    subject: "数学",
    content: "実力考査直し",
    due: new Date(2023, 5, 12, 0, 0),
    id: 103
  }, {
    subject: "数学",
    content: "進研模試過去問2019に挑戦",
    due: new Date(2023, 5, 19, 0, 0),
    id: 104
  }, {
    subject: "数学",
    content: "(数学Ⅰ+A一学期中間考査合計150点以上の人と希望者) 駿台ハイレベル模試(一部)をノートに問題を貼って解いて提出",
    due: new Date(2023, 4, 29, 0, 0),
    id: 105
  }, {
    subject: "英語A",
    content: "テスト直し",
    due: new Date(2023, 5, 2, 0, 0),
    id: 106
  }, {
    subject: "論理・表現",
    content: "テスト直し",
    due: new Date(2023, 5, 2, 0, 0),
    id: 107
  }, {
    subject: "化学基礎",
    content: "テスト直し",
    due: new Date(2023, 5, 6, 0, 0),
    id: 108
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