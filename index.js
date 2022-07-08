const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require('./config/key');

// application/x-www-form-urlencoded의 형태를 분석 후 가져옴
app.use(bodyParser.urlencoded({ extended: true }));
// application/json ~~~
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
}).then(() => console.log('YEEEEEEE!!!'))
    .catch(err => console.log(err + ":  =================="))

app.get('/', (req, res) => res.send('Hello world!'))


// 회원가입 할때 필요한 정보를 client에서 가져오면
// 그 정보를 데이터 베이스에 넣는다.
app.post('/register', (req, res) => {

    const user = new User(req.body)
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })
})

app.post('./login', (req, res) => {

    // 요청된 이메일을 DB에 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user) {
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        // 요청된 이메일이 DB에 있다면 비밀번호가 맞는지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })

            // 비밀번호까지 맞다면 토큰 생성
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);

                // 토큰을 저장한다. where? 쿠키, 로컬스토리지 ...
            })
        })
    })

})

app.listen(port, () => console.log(`Exapmle app listening on port ${port}! `))