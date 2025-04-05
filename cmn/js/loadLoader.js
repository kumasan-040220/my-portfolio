document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("loader-placeholder");
    const loaderUrl = "cmn/html/loader.html"; // 外部HTMLファイルのパス
  
    fetch(loaderUrl)
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
        console.error("Error loading loader section:", error);
        placeholder.innerHTML = "<p>loaderセクションの読み込みに失敗しました。</p>";
      });
  });