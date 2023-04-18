//現在の日付を取得
var today = new Date()
var nowdate = today.getDate();

function homework() {

    for (var i = 0; i < obj.length; i++) {

        //課題締切の月日を定義
        let datedue = obj[i].due.getDate();
        let monthdue = obj[i].due.getMonth() +1;
        console.log("due: " + monthdue + "/" + datedue)

        //要素を挿入
        let content = '<div class="homework"><table><tr><td>教科:</td><td>' + obj[i].subject + '</td></tr><tr><td>範囲:</td><td>' + obj[i].content + '</td></tr><tr><td>提出日:</td><td>' + monthdue + "月" + datedue + "日" + '</td></tr></table></div>'
        console.log(obj[i].due - today)
        if ((obj[i].due - today) / (1000 * 60 * 60 * 24) <= 7 && obj[i].due - today > 0) {
            document.getElementById('upcoming').insertAdjacentHTML('beforeend', content);
        } else if (obj[i].due - today < 0) {
            document.getElementById('past').insertAdjacentHTML('beforeend', content);
        } else {
            document.getElementById('others').insertAdjacentHTML('beforeend', content);
        }
        //1つ目のif:7日以内の課題を振り分け
        //2つ目のif:過去の課題を振り分け
        //else それ以外の場合
    }

}
window.onload = homework()
