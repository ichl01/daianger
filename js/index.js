//現在の日付を取得
var today = new Date()
var execdate = new Date(0, 0, 1, 1, 1);
var nowdate = today.getDate();
function shomework() {

    for (var i = 0; i < obj.length; i++) {

        //課題締切の月日を定義
        let datedue = obj[i].due.getDate();
        let monthdue = obj[i].due.getMonth() + 1;

        //要素を挿入
        let content = '<div class="homework"><input type="hidden" value=' + obj[i].id + '><table><tr><td>教科:</td><td>' + obj[i].subject + '</td></tr><tr><td>範囲:</td><td>' + obj[i].content + '</td></tr></table></div>'
        let contentbegin = '<h3>' + monthdue + '月' + datedue + '日</h3>'
        if ((obj[i].due - today) / (1000 * 60 * 60 * 24) <= 7 && obj[i].due - today > 0) {
            if (datedue == execdate.getDate()) {
                document.getElementById('upcoming').insertAdjacentHTML('beforeend', content)
            } else if (obj[i].due != execdate) {
                execdate = obj[i].due;
                document.getElementById('upcoming').insertAdjacentHTML('beforeend', contentbegin)
                document.getElementById('upcoming').insertAdjacentHTML('beforeend', content)
            }
        }
    }
}