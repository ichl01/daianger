//var storage = localStorage;

//現在の日付を取得
var today = new Date()
var nowdate = today.getDate();
var execdate = new Date(0,0,1,1,1);


function homework() {

    for (var i = 0; i < obj.length; i++) {

        //課題締切の月日を定義
        let datedue = obj[i].due.getDate();
        let monthdue = obj[i].due.getMonth() + 1;
        //console.log("due: " + monthdue + "/" + datedue)

        //要素を挿入
        let content = '<div class="homework"><input type="hidden" value=' + obj[i].id + '><table><tr><td>教科:</td><td>' + obj[i].subject + '</td></tr><tr><td>範囲:</td><td>' + obj[i].content + '</td></tr></table></div>'
        let contentbegin = '<h3>'+monthdue+'月'+datedue+'日</h3>'
        if ((obj[i].due - today) / (1000 * 60 * 60 * 24) <= 7 && obj[i].due - today > 0) {
            if(datedue == execdate.getDate()){
                document.getElementById('upcoming').insertAdjacentHTML('beforeend', content)
            }else if(obj[i].due != execdate){
                execdate = obj[i].due;
                document.getElementById('upcoming').insertAdjacentHTML('beforeend', contentbegin)
                document.getElementById('upcoming').insertAdjacentHTML('beforeend', content)
            }
                
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


//document.getElementById('past')
//document.getElementById('others')

//必要な変数を定義
const defaultupc = document.getElementById('upcoming').style.display;
const defaultpast = document.getElementById('past').style.display;
const defaultothers = document.getElementById('others').style.display;
let upcdisp = true;
let pastdisp = true;
let othersdisp = true;

function change(target) {
    if (target == "upcoming") {
        if (upcdisp == true) {
            document.getElementById('upcoming').style.display = 'none';
            upcdisp = false;
            document.getElementById('upcstate').innerText = "- 開く";
        } else {
            document.getElementById('upcoming').style.display = defaultupc;
            upcdisp = true;
            document.getElementById('upcstate').innerText = "- 畳む";
        }

    } else if (target == "past") {
        if (pastdisp == true) {
            document.getElementById('past').style.display = 'none';
            pastdisp = false;
            document.getElementById('paststate').innerText = "- 開く";
        } else {
            document.getElementById('past').style.display = defaultpast;
            pastdisp = true;
            document.getElementById('paststate').innerText = "- 畳む";
        }
    } else {
        if (othersdisp == true) {
            document.getElementById('others').style.display = 'none';
            othersdisp = false;
            document.getElementById('othersstate').innerText = "- 開く";
        } else {
            document.getElementById('others').style.display = defaultothers;
            othersdisp = true;
            document.getElementById('othersstate').innerText = "- 畳む";
        }
    }
}
change('past')
change('others')