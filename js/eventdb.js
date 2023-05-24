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
    }, ];
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