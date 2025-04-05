// cmn/js/loadNote.js

document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("note-placeholder");
    const noteUrl = "cmn/html/note.html"; // 外部HTMLファイルのパス
  
    fetch(noteUrl)
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
        console.error("Error loading note section:", error);
        placeholder.innerHTML = "<p>noteセクションの読み込みに失敗しました。</p>";
      });
  });
  