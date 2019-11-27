const express = require("express")
const users = express.Router()
const cors = require("cors")
users.use(cors())

const user_cont = require("../controllers/Users")

//Developer REGISTER
users.post('/dev_register', user_cont.dev_register)

//Client REGISTER
users.post('/cli_register', user_cont.cli_register)

//Login
users.post('/',user_cont.login)

//PROFILE
users.get('/profile',user_cont.profile)
users.get('/skillprofile',user_cont.skill)
users.get('/technoprofile',user_cont.technology)

//Edit profile
users.post('/editProf',user_cont.edit_profile)


//email verification

users.post('/register/send',user_cont.send_email)

users.post('/verify',user_cont.verify_email)


//forgot password
users.post('/forgotPwd',user_cont.forgot_pwd)
users.post('/newPwd', user_cont.new_password)

//change password
users.get('/getPwd', user_cont.get_password)
users.post('/changePwd', user_cont.change_password)

//Change email
users.post('/sendNewEmail',user_cont.send_new_email)
users.post('/updateEmail', user_cont.update_email)


module.exports = users