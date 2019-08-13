const express = require('express'); // express라는 함수
const app = express(); // express라는 함수를 실행해서 함수정보를 app에 담음
const bodyParser = require('body-parser');

app.listen(3000, function() {
  // listen 함수 실행 3000이란 포트로 함수를 실행
  console.log('start! express server on port 3000');
});

app.use(express.static('public')); // public 폴더아래의 파일들은 정적이다라는것을 알려줌

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// bodyParser 사용시 json, url encoding(한글이나 다른 문자열은 인코딩을 해야함)

app.set('view engine', 'ejs');
// view engine은 ejs를 사용하겠다

console.log('end of server code.....'); // start보다 end가 먼저 실행 된다. (비동기적으로 실행 되기 때문)

// url 요청 => get
app.get('/main', function(req, res) {
  // '/main' 페이지에 가면 아래의 파일은 보내줘라
  res.sendFile(__dirname + '/public/main.html'); // 이 파일을 클라이언트에게 전달, __dirname을 하면 앞의 기본경로는 동일하게 들어감
});

app.post('/email_post', function(req, res) {
  // get : req.param('email')
  // console.log(req.body); // object의 형태로 반환
  // res.send('post response');
  // html형태로 응답을 줄 때
  // res.send('<h1>welcome! ' + req.body.email + '</h1>');
  res.render('email.ejs', { email: req.body.email });
  // 응답 렌더를 email.ejs파일을 email value를 사용해라
});
