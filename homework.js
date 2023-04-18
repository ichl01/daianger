

var today = new Date()
var nowdate = today.getDate();
var nowmonth = today.getMonth() + 1;

function homework() {

    for (var i = 0; i < obj.length; i++) {
        let datedue = obj[i].due.getDate();
        let monthdue = obj[i].due.getMonth();
        console.log("datedue: " + datedue + " monthdue: " + monthdue)
        let content = '<div class="homework"><table><tr><td>教科:</td><td>' + obj[i].subject + '</td></tr><tr><td>範囲:</td><td>' + obj[i].content + '</td></tr><tr><td>提出日:</td><td>' + monthdue + "月" + datedue + "日" + '</td></tr></table></div>'
        if ((datedue - nowdate) / (1000 * 60 * 60 * 24) <= 7 && datedue > nowdate) {
            document.getElementById('upcoming').insertAdjacentHTML('beforeend', content);
        } else if (datedue < nowdate) {
            document.getElementById('past').insertAdjacentHTML('beforeend', content);
        } else {
            document.getElementById('others').insertAdjacentHTML('beforeend', content);
        }
    }

}
window.onload = homework()
