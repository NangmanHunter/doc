const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();
const PORT = 3000;

// SSL 인증서와 개인 키 경로 설정
const options = {
  key: fs.readFileSync('C:/test/doc/key.pem'),
  cert: fs.readFileSync('C:/test/doc/cert.pem')
};

// HTTPS 서버 생성
https.createServer(options, app).listen(PORT, () => {
  console.log(`HTTPS Server running on https://localhost:${PORT}`);
});

// 기본 경로에 대한 라우팅
app.get('/', (req, res) => {
  res.send('Hello, HTTPS world!');
});
