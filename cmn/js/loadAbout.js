document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("about-placeholder");
    const aboutUrl = "cmn/html/about.html"; // 外部HTMLファイルのパス
  
    fetch(aboutUrl)
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
        console.error("Error loading about section:", error);
        placeholder.innerHTML = "<p>aboutセクションの読み込みに失敗しました。</p>";
      });
  });
  