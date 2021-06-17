const kai = document.getElementById('name');
const nameId = document.getElementById('kai');
const kekaBox = document.getElementById('keka-box');
//画像パターン
const kaiImg1 = document.getElementById('kai-img1');
const kaiImg2 = document.getElementById('kai-img2');
const kaiImg3 = document.getElementById('kai-img3');
const kaiImg4 = document.getElementById('kai-img4');
//階級
const a = ["魔王","帝王","魔神"];
const b = ["王族魔人","帝国魔人"];
const c = ["特上級魔人","上級魔人"];
const d = ["中級魔神","下級魔神","使い魔"];

function btn() {
    kekaBox.style.display = 'block';
    //画像のリセット
    kaiImg1.style.display = 'none';
    kaiImg2.style.display = 'none';
    kaiImg3.style.display = 'none';
    kaiImg4.style.display = 'none';
    var text = document.getElementById('exampleFormControlInput1');
    //名前を追加
    kai.textContent = text.value;

    //結果の選択
    if (text.value.length >= 9){
        let kaiName = d[Math.floor(Math.random() * d.length)];
        nameId.textContent = kaiName;
        //イメージ追加
        kaiImg4.style.display = 'block';
    } else if (text.value.length >= 6 && text.value.length <= 8){
        let kaiName = b[Math.floor(Math.random() * b.length)];
        nameId.textContent = kaiName;
        //イメージ追加
        kaiImg2.style.display = 'block';
    } else if (text.value.length >= 3 && text.value.length <= 5) {
        let kaiName = c[Math.floor(Math.random() * c.length)];
        nameId.textContent = kaiName;
        //イメージ追加
        kaiImg3.style.display = 'block';
    } else if (text.value.length <= 2) {
        let kaiName = a[Math.floor(Math.random() * a.length)];
        nameId.textContent = kaiName;
        //イメージ追加
        kaiImg1.style.display = 'block';
    }
}