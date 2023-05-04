//データベース
var obj = [
  {
    subject: "英語",
    content: "テスト直し",
    due: new Date(2023, 3, 21, 0, 0),
    id: 0
  }, {
    subject: "国語",
    content: "プリント2枚",
    due: new Date(2023, 3, 17, 0, 0),
    id: 1
  }, {
    subject: "数学",
    content: "テスト直し & 発展課題",
    due: new Date(2023, 3, 17, 0, 0),
    id: 2
  }, {
    subject: "英語",
    content: "Breakthrough Workbook P.24〜P.35",
    due: new Date(2023, 3, 17, 0, 0),
    id: 3
  }, {
    subject: "現代文",
    content: "プリント: 2(随)山内美郷",
    due: new Date(2023, 3, 24, 0, 0),
    id: 4
  }, {
    subject: "古文",
    content: "テキスト: 1御伽草子",
    due: new Date(2023, 3, 24, 0, 0),
    id: 5
  }, {
    subject: "漢文",
    content: "プリント: 1「説苑」",
    due: new Date(2023, 4, 1, 0, 0),
    id: 6
  }, {
    subject: "現代文",
    content: "プリント: 3(評)平野啓一郎, 4(小)川端康成",
    due: new Date(2023, 4, 8, 0, 0),
    id: 7
  }, {
    subject: "古文",
    content: "テキスト: 2古今著聞集, 3徒然草",
    due: new Date(2023, 4, 8, 0, 0),
    id: 8
  }, {
    subject: "漢文",
    content: "プリント: 3「十八史略」~5「論語」まで",
    due: new Date(2023, 4, 8, 0, 0),
    id: 9
  }, {
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
    subject: "数学A",
    content: "授業プリント2枚(先週の)",
    due: new Date(2023, 3, 20, 0, 0),
    id: 32
  }, {
    subject: "英語",
    content: "OVER ALL 2: UNIT 1・2",
    due: new Date(2023, 3, 24, 0, 0),
    id: 33
  }, {
    subject: "英語",
    content: "Breakthrough ワークブック p.44~55,p.64~69",
    due: new Date(2023, 4, 8, 0, 0),
    id: 34
  }, {
    subject: "英語",
    content: "OVER ALL 2: UNIT 3~7",
    due: new Date(2023, 4, 8, 0, 0),
    id: 35
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
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 3, 18, 0, 0),
    id: 41
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 3, 21, 0, 0),
    id: 42
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 3, 25, 0, 0),
    id: 43
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 3, 28, 0, 0),
    id: 44
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第74回",
    due: new Date(2023, 3, 19, 0, 0),
    id: 45
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第76回",
    due: new Date(2023, 3, 20, 0, 0),
    id: 46
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第78回",
    due: new Date(2023, 3, 26, 0, 0),
    id: 47
  }, {
    subject: "数学Ⅰ",
    content: "今日ドリ 第80回",
    due: new Date(2023, 3, 27, 0, 0),
    id: 48
  }, {
    subject: "数学",
    content: "挑戦状",
    due: new Date(2023, 4, 2, 0, 0),
    id: 49
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
  }, {
    subject: "数学",
    content: "チャートプリント 1~7",
    due: new Date(2023, 3, 24, 0, 0),
    id: 79
  }, {
    subject: "数学",
    content: "チャートプリント 8~14",
    due: new Date(2023, 4, 1, 0, 0),
    id: 80
  }, {
    subject: "英語B",
    content: "NTワークブック Lesson1(p.8~p.16)",
    due: new Date(2023, 4, 8, 0, 0),
    id: 81
  }, {
    subject: "論理・表現",
    content: "EARTHRISEワークブック はじめに・Lesson1~3 (p.2~p.15)",
    due: new Date(2023, 4, 8, 0, 0),
    id: 82
  }, {
    subject: "英語B",
    content: "ブレイクスルー英文法27章 助動詞、受動態 (pp.26〜36 A) (復習問題は任意)",
    due: new Date(2023, 4, 1, 0, 0),
    id: 83
  }, {
    subject: "英語B",
    content: "ブレイクスルー英文法27章 ブレイクスルー動名詞、分詞(pp.46〜56) (復習問題は任意)",
    due: new Date(2023, 4, 10, 0, 0),
    id: 84
  }, {
    subject: "数学",
    content: "ハイレベル模試過去問に挑戦プリント",
    due: new Date(2023, 4, 8, 0, 0),
    id: 85
  }, {
    subject: "数学",
    content: "ノートにチャートの例題を20問以上解く",
    due: new Date(2023, 4, 8, 0, 0),
    id: 86
  }, {
    subject: "英語",
    content: "ALL EARS STANDARD: Lesson1~10",
    due: new Date(2023, 4, 29, 0, 0),
    id: 87
  },];
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