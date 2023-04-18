//データベース
var obj = [
  {
    subject: "英語",
    content: "テスト直し",
    due: new Date(2023, 3, 21, 0, 0)
  }, {
    subject: "国語",
    content: "プリント2枚",
    due: new Date(2023, 3, 17, 0, 0)
  }, {
    subject: "数学",
    content: "テスト直し & 発展課題",
    due: new Date(2023, 3, 17, 0, 0)
  }, {
    subject: "英語",
    content: "Breakthrough Workbook P.24〜P.35",
    due: new Date(2023, 3, 17, 0, 0)
  }, {
    subject: "現代文",
    content: "プリント: 2(随)山内美郷",
    due: new Date(2023, 3, 24, 0, 0)
  }, {
    subject: "古文",
    content: "プリント: 1御伽草子",
    due: new Date(2023, 3, 24, 0, 0)
  }, {
    subject: "漢文",
    content: "プリント: 1「説苑」",
    due: new Date(2023, 4, 1, 0, 0)
  }, {
    subject: "現代文",
    content: "プリント: 3(評)平野啓一郎, 4(小)川端康成",
    due: new Date(2023, 4, 8, 0, 0)
  }, {
    subject: "古文",
    content: "プリント: 2古今著聞集, 3徒然草",
    due: new Date(2023, 4, 8, 0, 0)
  }, {
    subject: "漢文",
    content: "プリント: 3「十八史略」~5「論語」まで",
    due: new Date(2023, 4, 8, 0, 0)
  }, {
    subject: "現代文",
    content: "プリント: 5(評)鈴木孝夫",
    due: new Date(2023, 4, 22, 0, 0)
  }, {
    subject: "古文",
    content: "プリント: 4十訓抄",
    due: new Date(2023, 4, 22, 0, 0)
  }, {
    subject: "古文",
    content: "プリント: 5花月草子",
    due: new Date(2023, 4, 29, 0, 0)
  }, {
    subject: "漢文",
    content: "プリント: 6「後漢書」",
    due: new Date(2023, 4, 29, 0, 0)
  }, {
    subject: "現代文",
    content: "プリント: 6(評)加藤秀俊",
    due: new Date(2023, 5, 5, 0, 0)
  }, {
    subject: "漢文",
    content: "プリント: 7「閲微草堂筆記」",
    due: new Date(2023, 5, 5, 0, 0)
  }, {
    subject: "古文",
    content: "プリント: 6伊曽保物語",
    due: new Date(2023, 5, 12, 0, 0)
  }, {
    subject: "現代文",
    content: "プリント: 7(小)重松清",
    due: new Date(2023, 5, 19, 0, 0)
  }, {
    subject: "古文",
    content: "プリント: 7古今著聞集",
    due: new Date(2023, 5, 19, 0, 0)
  }, {
    subject: "漢文",
    content: "プリント: 8「戦国策」",
    due: new Date(2023, 5, 26, 0, 0)
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