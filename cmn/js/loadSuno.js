// cmn/js/loadIdeogram.js

document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("suno-placeholder");
    const sunoUrl = "cmn/html/suno.html"; // 外部HTMLファイルのパス
  
    fetch(sunoUrl)
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
        console.error("Error loading suno section:", error);
        placeholder.innerHTML = "<p>ideogramセクションの読み込みに失敗しました。</p>";
      });
  });
  