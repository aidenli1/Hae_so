const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

const config = require('./config/key');

// application/x-www-form-urlencoded의 형태를 분석 후 가져옴
app.use(bodyParser.urlencoded({extended: true}));
// application/json ~~~
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
}).then(() => console.log('YEEEEEEE!!!'))
    .catch(err => console.log(err + "=================="))

app.get('/', (req, res) => res.send('Hello world!'))


// 회원가입 할때 필요한 정보를 client에서 가져오면
// 그 정보를 데이터 베이스에 넣는다.
app.post('/register', (req, res) => {
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => console.log(`Exapmle app listening on port ${port}! `))