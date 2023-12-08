const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn');

// ハンバーガーメニューのクリックイベント
hamburgerMenu.addEventListener('click', function() {
  // メニューの表示・非表示を切り替える
  menu.classList.toggle('show');
});
//hamburgerMenu.addEventListener('click', function() {
  // ホームページに遷移する
 // window.location.href = "index.html";
//});

// 日付と時刻を表示する関数
function displayDateTime() {
  const dateTimeElement = document.getElementById('date-time');
  const now = new Date();
  const date = now.toLocaleDateString('ja-JP');
  const time = now.toLocaleTimeString('ja-JP');
  dateTimeElement.textContent = `日付: ${date}　時刻: ${time}`;
}
// 初期表示
displayDateTime();
// 定期的に日付と時刻を更新するためのタイマー
setInterval(displayDateTime, 1000); // 1秒ごとに更新


//バイク切り替え画像

let parent_tag = document.getElementById("parent")//変数
      let img1 = document.getElementById("bike1.jpg")//画像を変数に格納
      let img2 = document.getElementById("bike2.jpg")//画像を変数に格納
      let img3 = document.getElementById("bike3.jpg")//画像を変数に格納
      let img4 = document.getElementById("bike4.jpg")//画像を変数に格納
      let i = 1; //変数iに1を格納                     
      let setIntervalId;　//特定の時間間隔ごとに関数を繰り返し実行するためのタイマー処理を設定するための関数。

      parent_tag.addEventListener("mouseover", () => {　//マウスオーバー
        setIntervalId = setInterval(() => {
          img1.style.opacity = (i % 4 == 1) ? 1 : 0;　//三項演算子i=1を4で割って1になった場合は１(透明ではない)1でない場合は0(透明)
          img2.style.opacity = (i % 4 == 2) ? 1 : 0;　//三項演算子i=1を4で割って2になった場合は1(透明ではない)1でない場合は0(透明)
          img3.style.opacity = (i % 4 == 3) ? 1 : 0;　//三項演算子i=1を4で割って3になった場合は1(透明ではない)1でない場合は0(透明)
          img4.style.opacity = (i % 4 == 0) ? 1 : 0;　//三項演算子i=1を4で割って4になった場合は1(透明ではない)1でない場合は0(透明)
          i += 1;　//カウンター変数　iに1ずつ足されてカウントされる。数字が増える。
        }, 3000)　//画像が切り替わる時間　3秒
      })

      parent_tag.addEventListener("mouseout", () => {　//マウスアウトした場合
        img1.style.opacity = 1;　//１no画像が表示される
        img2.style.opacity = 0;　//表示されない透明
        img3.style.opacity = 0;　//表示されない透明
        img4.style.opacity = 0;  //表示されない透明
        clearInterval(setIntervalId) //clearInteはsetIntervalIdを停止させる
      })


