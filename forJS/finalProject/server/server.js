const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// 정적 파일 미들웨어 설정
// 'my-project' 폴더를 가리킵니다.
app.use(express.static(path.join(__dirname, "..")));

// SPA를 위한 Catch-all 라우트 (★★이 부분 확인★★)
// 모든 GET 요청을 잡아 index.html을 제공합니다.
// `*` 하나만 사용해야 합니다.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.listen(PORT, () => {
  console.log(`START SERVER on port ${PORT}`);
});
