window.addEventListener("load", () => {

  const heroOpening =
    document.getElementById("heroOpening");

  const heroWhite =
    document.getElementById("heroWhite");

  const heroFinal =
    document.getElementById("heroFinal");


  // HEROが存在しないページでは処理を終了
  if (
    !heroOpening ||
    !heroWhite ||
    !heroFinal
  ) {
    return;
  }


  // ホワイトアウト開始
  setTimeout(() => {

    heroWhite.classList.add(
      "is-active"
    );

  }, 2400);


  // 最終画像へ切り替え
  setTimeout(() => {

    heroFinal.classList.add(
      "is-show"
    );

    heroOpening.style.opacity = "0";

  }, 3000);


  // オープニング画像を非表示
  setTimeout(() => {

    heroOpening.style.display = "none";

  }, 3900);

});