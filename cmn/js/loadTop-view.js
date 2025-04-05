document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("top-view-placeholder");
    const topviewUrl = "cmn/html/top-view.html"; // 外部HTMLファイルのパス
  
    fetch(topviewUrl)
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
        console.error("Error loading top-view section:", error);
        placeholder.innerHTML =
          "<p>top-viewセクションの読み込みに失敗しました。</p>";
      });
  });
  