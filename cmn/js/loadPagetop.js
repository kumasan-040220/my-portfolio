document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("pagetop-placeholder");
    const pagetopUrl = "cmn/html/pagetop.html"; // 外部HTMLファイルのパス
  
    fetch(pagetopUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        placeholder.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error loading pagetop section:", error);
        placeholder.innerHTML =
          "<p>pagetopセクションの読み込みに失敗しました。</p>";
      });
  });
  