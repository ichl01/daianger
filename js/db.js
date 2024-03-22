//データベース
var obj = [
 {
    subject: "現代文",
    content: "春休み課題冊子",
    due: new Date(2024, 3, 8, 0, 0),
    id: 392
  },{
    subject: "古文",
    content: "力をつける古文2 大問9~13",
    due: new Date(2024, 3, 8, 0, 0),
    id: 393
  },{
    subject: "漢文",
    content: "春休み課題冊子",
    due: new Date(2024, 3, 8, 0, 0),
    id: 394
  },{
    subject: "数学",
    content: "(発展)自習ノート(チャートコンパス3以上20問+)",
    due: new Date(2024, 3, 5, 0, 0),
    id: 395
  },{
    subject: "数学",
    content: "(標準)教科書を大切にプリント",
    due: new Date(2024, 3, 5, 0, 0),
    id: 395
  },{
    subject: "数学",
    content: "(発展)数学力の育成プリント",
    due: new Date(2024, 3, 10, 0, 0),
    id: 396
  },{
    subject: "数学",
    content: "(標準)数学力の育成プリント奇数題",
    due: new Date(2024, 3, 10, 0, 0),
    id: 396
  },{
    subject: "数学",
    content: "最大最小プリント",
    due: new Date(2024, 3, 10, 0, 0),
    id: 397
  },{
    subject: "英語",
    content: "第3回実力考査直し",
    due: new Date(2024, 3, 5, 0, 0),
    id: 398
  },{
    subject: "英語",
    content: "SKYWARD Unit6~13,20",
    due: new Date(2024, 3, 10, 0, 0),
    id: 399
  },{
    subject: "英語",
    content: "Long Run Reading Unit13~15",
    due: new Date(2024, 3, 10, 0, 0),
    id: 400
  },{
    subject: "英語",
    content: "Listening Laboratoey Standard α 本冊+ディクテーションノート",
    due: new Date(2024, 3, 10, 0, 0),
    id: 401
  },{
    subject: "英語",
    content: "英語の構文150 Lesson65~74",
    due: new Date(2024, 3, 10, 0, 0),
    id: 402
  },{
    subject: "英語",
    content: "(提出不要)シンプル英作文 第一編 第13~14章",
    due: new Date(2024, 3, 10, 0, 0),
    id: 403
  },{
    subject: "物理,物理基礎",
    content: "課題冊子",
    due: new Date(2024, 3, 15, 0, 0),
    id: 404
  },{
    subject: "理系化学",
    content: "セミナー40題以上",
    due: new Date(2024, 3, 10, 0, 0),
    id: 405
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