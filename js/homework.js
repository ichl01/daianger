var doneid = [];

//現在の日付を取得
var today = new Date();
var nowdate = today.getDate();
var execdate = new Date(0, 0, 1, 1, 1);
var execdatedone = new Date(0, 0, 1, 1, 1);

//Webストレージが使える?
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}
//完了済みの課題の一覧を取得
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    doneid.push(key);
}

function doit(id, state) {
    if (state == 0) {
        localStorage.removeItem(id);
        document.getElementById(id).remove()
        console.log("フラグ消したで")
    } else {
        localStorage.setItem(id, 1);
        doneid.push(id);
        document.getElementById(id).remove()
        console.log("フラグつけたで")
    }

}
function homework() {

    for (var i = 0; i < obj.length; i++) {

        //課題締切の月日を定義
        let datedue = obj[i].due.getDate();
        let monthdue = obj[i].due.getMonth() + 1;
        //console.log("due: " + monthdue + "/" + datedue)

        //要素を挿入

        let content = '<div id="' + obj[i].id + '" class="homework" ondblclick="doit(' + obj[i].id + ',1);"><table><tr><td>教科:</td><td>' + obj[i].subject + '</td></tr><tr><td>範囲:</td><td>' + obj[i].content + '</td></tr></table></div>'
        let contentbegin = '<h3>' + monthdue + '月' + datedue + '日</h3>'
        let donecontent = '<div id="' + obj[i].id + '" class="homework" ondblclick="doit(' + obj[i].id + ',0);"><table><tr><td>教科:</td><td>' + obj[i].subject + '</td></tr><tr><td>範囲:</td><td>' + obj[i].content + '</td></tr></table></div>'
        if (doneid.indexOf(obj[i].id.toString()) !== -1) {
            //課題が完了済みならここに来る
            if (obj[i].due - today < 0) {
                //完了済みの課題でかつ過去の課題
                if (monthdue == execdatedone.getMonth() && (datedue == execdatedone.getDate())) {
                    document.getElementById('past').insertAdjacentHTML('beforeend', content)
                } else if (obj[i].due != execdatedone) {
                    execdatedone = obj[i].due;
                    document.getElementById('past').insertAdjacentHTML('afterbegin', content)
                    document.getElementById('past').insertAdjacentHTML('afterbegin', contentbegin)
                }
                localStorage.removeItem(obj[i].id);
            } else {
                //完了済みの課題でかつ未来の課題
                if (datedue == execdatedone.getDate()) {
                    document.getElementById('finished').insertAdjacentHTML('beforeend', donecontent)
                } else if (obj[i].due != execdatedone) {
                    execdatedone = obj[i].due;
                    document.getElementById('finished').insertAdjacentHTML('beforeend', contentbegin)
                    document.getElementById('finished').insertAdjacentHTML('beforeend', donecontent)
                }
            }
        } else {
            if ((obj[i].due - today) / (1000 * 60 * 60 * 24) <= 7 && obj[i].due - today > 0) {
                if (datedue == execdate.getDate()) {
                    document.getElementById('upcoming').insertAdjacentHTML('beforeend', content)
                } else if (obj[i].due != execdate) {
                    execdate = obj[i].due;
                    document.getElementById('upcoming').insertAdjacentHTML('beforeend', contentbegin)
                    document.getElementById('upcoming').insertAdjacentHTML('beforeend', content)
                }

            } else if (obj[i].due - today < 0) {
                if (monthdue == execdate.getMonth() && (datedue == execdate.getDate())) {
                    document.getElementById('past').insertAdjacentHTML('beforeend', content)
                } else if (obj[i].due != execdate) {
                    execdate = obj[i].due;
                    document.getElementById('past').insertAdjacentHTML('afterbegin', content)
                    document.getElementById('past').insertAdjacentHTML('afterbegin', contentbegin)
                }

            } else {
                if (datedue == execdate.getDate()) {
                    document.getElementById('others').insertAdjacentHTML('beforeend', content)
                } else if (obj[i].due != execdate) {
                    execdate = obj[i].due;
                    document.getElementById('others').insertAdjacentHTML('beforeend', contentbegin)
                    document.getElementById('others').insertAdjacentHTML('beforeend', content)
                }


            }
        }
        //1つ目のif:7日以内の課題を振り分け
        //2つ目のif:過去の課題を振り分け
        //else それ以外の場合
    }

}

//change関数に必要な変数を定義
const defaultupc = document.getElementById('upcoming').style.display;
const defaultpast = document.getElementById('past').style.display;
const defaultothers = document.getElementById('others').style.display;
const defaultfinished = document.getElementById('others').style.display;
let upcdisp = true;
let pastdisp = true;
let othersdisp = true;
let finishedisp = true;

//開く、閉じるを実現するやつ
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
    } else if (target == "finished") {
        if (finishedisp == true) {
            document.getElementById('finished').style.display = 'none';
            finishedisp = false;
            document.getElementById('finishedstate').innerText = "- 開く";
        } else {
            document.getElementById('finished').style.display = defaultfinished;
            finishedisp = true;
            document.getElementById('finishedstate').innerText = "- 畳む";
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

window.onload = () => {
    homework()
    if (storageAvailable("localStorage")) {
        setTimeout(() => {
            console.log("Daiangerに課題記録機能が追加!課題をダブルクリックして下に移動しよう")
        }, timeout);
    } else {
        console.log("残念、ローカルストレージは利用できません")
    }

}

//課題のIDに対応する完了済みフラグがあるか判定

//あったら:
// 下部に移動(ダブルクリックで復元できるやつ)
// 課題の提出期限を過ぎてたら
//  フラグを消す
//なかったら:
// そのまま出す
