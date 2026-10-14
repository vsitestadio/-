window.addEventListener("load", () => {

  const heroOpening =
    document.getElementById("heroOpening");

  const heroWhite =
    document.getElementById("heroWhite");

  const heroFinal =
    document.getElementById("heroFinal");


  /* ========================================
     必要な要素がない場合は終了
  ======================================== */

  if (
    !heroOpening ||
    !heroWhite ||
    !heroFinal
  ) {
    return;
  }


  /* ========================================
     URLを取得
  ======================================== */

  const url =
    new URL(window.location.href);

  const skipOpening =
    url.searchParams.get("skipOpening");


  /* ========================================
     詳細ページから戻ってきた場合
     Openingを再生しない
  ======================================== */

  if (skipOpening === "1") {

    heroOpening.style.display = "none";
    heroWhite.style.display = "none";

    heroFinal.classList.add(
      "is-show"
    );


    /*
      head内で付けた
      skip-openingクラスを削除
    */

    document.documentElement.classList.remove(
      "skip-opening"
    );


    /*
      URLから
      ?skipOpening=1
      を削除

      #about や #work は残す
    */

    url.searchParams.delete(
      "skipOpening"
    );


    const cleanUrl =
      url.pathname +
      url.search +
      url.hash;


    history.replaceState(
      null,
      "",
      cleanUrl
    );


    return;
  }


  /* ========================================
     通常アクセス時
     Opening開始
  ======================================== */

  document.body.classList.add(
    "is-opening"
  );


  /* ========================================
     ホワイトアウト開始
  ======================================== */

  setTimeout(() => {

    heroWhite.classList.add(
      "is-active"
    );

  }, 2400);


  /* ========================================
     メインビジュアル表示
  ======================================== */

  setTimeout(() => {

    heroFinal.classList.add(
      "is-show"
    );


    heroOpening.style.opacity =
      "0";

  }, 3000);


  /* ========================================
     Opening終了
  ======================================== */

  setTimeout(() => {

    heroOpening.style.display =
      "none";


    document.body.classList.remove(
      "is-opening"
    );

  }, 3900);

});