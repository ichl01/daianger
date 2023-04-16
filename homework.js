var obj = [{
    subject: "国語",
    content: "プリント2枚",
    due: new Date(2023, 4, 17, 0, 0)
}, {
    subject: "数学",
    content: "テスト直し & 発展課題",
    due: new Date(2023, 4, 17, 0, 0)
}, {
    subject: "英語",
    content: "Breakthrough Workbook P.24〜P.35",
    due: new Date(2023, 4, 17, 0, 0)
}, {
    subject: "英語",
    content: "テスト直し",
    due: new Date(2023, 4, 21, 0, 0)
}];

var today = new Date()
var nowdate = today.getDate();
var nowmonth = today.getMonth() + 1;

function homework() {

    for (var i = 0; i < obj.length; i++) {
        let datedue = obj[i].due.getDate();
        let monthdue = obj[i].due.getMonth();
        console.log("datedue: " + datedue + " monthdue: " + monthdue)
        let content = '<div class="homework"><table><tr><td>教科:</td><td>' + obj[i].subject + '</td></tr><tr><td>範囲:</td><td>' + obj[i].content + '</td></tr><tr><td>提出日:</td><td>' + monthdue + "月" + datedue + "日" + '</td></tr></table></div>'
        if (datedue - nowdate <= 7 && monthdue == nowmonth) {
            document.getElementById('upcoming').insertAdjacentHTML('beforeend', content);
        } else {
            document.getElementById('others').insertAdjacentHTML('beforeend', content);
        }
    }

}
window.onload = homework()
