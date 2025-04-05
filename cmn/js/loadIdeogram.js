// cmn/js/loadIdeogram.js

document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("ideogram-placeholder");
    const ideogramUrl = "cmn/html/ideogram.html"; // 外部HTMLファイルのパス
  
    fetch(ideogramUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        placeholder.innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading ideogram section:", error);
        placeholder.innerHTML = "<p>ideogramセクションの読み込みに失敗しました。</p>";
      });
  });
  