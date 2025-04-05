document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM fully loaded and parsed");
  var body = document.body;
  var loader = document.getElementById('loader');
  var content = document.getElementById('content');

  if (!loader) {
    console.error("#loader element is missing!");
  }
  if (!content) {
    console.error("#content element is missing!");
  }

  window.addEventListener('load', function() {
    if (!loader || !content) {
      console.error("Loader or content element is missing!");
      return;
    }
    console.log("Loader and content elements found");
    loader.style.opacity = '0'; // フェードアウト
    setTimeout(function() {
      loader.style.display = 'none'; // フェードアウト後に非表示
      content.style.display = 'block'; // 表示
      body.classList.remove('loading'); // ローディング用のクラスを削除
      body.classList.add('main'); // ホームページ用のクラスを追加
      setTimeout(function() {
        content.style.opacity = '1'; // フェードイン
        console.log("Content displayed");
      }, 30); // 若干の遅延を入れることでスムーズなフェードインを実現
    }, 500); // フェードアウト時間を0.5秒に変更
  });
});
