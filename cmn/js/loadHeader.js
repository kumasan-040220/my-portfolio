document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.getElementById("header-placeholder");
  const headerUrl = "cmn/html/header.html"; // 外部HTMLファイルのパス

  fetch(headerUrl)
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
      console.error("Error loading header section:", error);
      placeholder.innerHTML =
        "<p>headerセクションの読み込みに失敗しました。</p>";
    });
});
