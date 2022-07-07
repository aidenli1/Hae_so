const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlegnth: 50
    },
    email: {
        type: String,
        trim: true, //빈 공간을 없애줌
        unique: 1 //중복값 잡기
    },
    password: {
        type: String,
        maxlength: 50
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { // 관리자=1, 일반회원=0 구분
        type: Number,
        default: 0
    },
    image: String,

    token: { //유효성
        type: String
    },
    tokenExp: { //유효기간
        type: Number
    }

})

const User = mongoose.model('User', userSchema)

module.exports = { User }