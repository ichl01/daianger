function homework() {
    let obj = [{
        subject: "国語",
        content: "プリント2枚",
        due: "2023/04/17"
    }, {
        subject: "数学",
        content: "テスト直し & 発展課題",
        due: "2023/04/17"
    },{
        subject: "英語",
        content: "Breakthrough Workbook P.24〜P.35",
        due: "2023/04/17"
    },{
        subject: "英語",
        content: "テスト直し",
        due: "2023/04/21"
    }];
    for (var i = 0; i < obj.length; i++) {
        let content = '<div class="homework"><table><tr><td>教科:</td><td>' + obj[i].subject + '</td></tr><tr><td>範囲:</td><td>' + obj[i].content + '</td></tr><tr><td>提出日:</td><td>' + obj[i].due + '</td></tr></table></div>'
        document.getElementById('homeworks').insertAdjacentHTML('beforeend', content);
    }

}
window.onload = homework()
