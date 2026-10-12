window.addEventListener("load", () => {

  const heroOpening =
    document.getElementById("heroOpening");

  const heroWhite =
    document.getElementById("heroWhite");

  const heroFinal =
    document.getElementById("heroFinal");


  /*
   ①
   ページ読み込み直後

   CSSによって
   コラージュアニメーション開始
  */


  /*
   ②
   コラージュ完成後、
   少しだけ完成状態を見せる
  */

  setTimeout(() => {

    heroWhite.classList.add(
      "is-active"
    );

  }, 2400);



  /*
   ③
   画面が真っ白になっている間に
   裏側を最終画像へ切り替える
  */

  setTimeout(() => {

    heroFinal.classList.add(
      "is-show"
    );

    heroOpening.style.opacity = "0";

  }, 3000);



  /*
   ④
   ホワイトアウト終了後
   オープニングを削除
  */

  setTimeout(() => {

    heroOpening.style.display = "none";

  }, 3900);

});