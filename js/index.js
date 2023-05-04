//現在の日付を取得
var today = new Date()
var nowdate = today.getDate();
let count = 0;
function shomework() {

    for (var i = 0; i < obj.length; i++) {

        //課題締切の月日を定義
        let datedue = obj[i].due.getDate();
        let monthdue = obj[i].due.getMonth() + 1;

        //要素を挿入
        let content = '<div class="homework"><input type="hidden" value=' + obj[i].id + '><table><tr><td>教科:</td><td>' + obj[i].subject + '</td></tr><tr><td>範囲:</td><td>' + obj[i].content + '</td></tr><tr><td>提出日:</td><td>' + monthdue + "月" + datedue + "日" + '</td></tr></table></div>'
        if ((obj[i].due - today) / (1000 * 60 * 60 * 24) <= 7 && obj[i].due - today > 0) {
            document.getElementById('upcoming').insertAdjacentHTML('beforeend', content)
            count++
        }
    }
}