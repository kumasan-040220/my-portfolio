document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("footer-placeholder");
    const footerUrl = "cmn/html/footer.html"; // 外部HTMLファイルのパス
  
    fetch(footerUrl)
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
        console.error("Error loading footer section:", error);
        placeholder.innerHTML = "<p>footerセクションの読み込みに失敗しました。</p>";
      });
  });