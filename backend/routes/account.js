const router = require('express').Router();
const { check } = require("express-validator");
const { onRegister, onLogin } = require('../service/account');
const {authenticated} = require('../configs/security')

//registerpage
router.post('/register', [
    check('username', 'มีอยู่แล้วในระบบ').not().isEmpty(),
    check('password').not().isEmpty(),
    check('fname').not().isEmpty(),
    check('lname').not().isEmpty()
], async (req, res) => {
    try {
        req.validate();
        const created = await onRegister(req.body);
        res.json(created);
    }
    catch (ex) {
        res.error(ex);
    }
});

//เข้าสู่ระบบ
router.post('/login', [
    check('username').not().isEmpty(),
    check('password').not().isEmpty()
], async (req, res) => {
    try {
        req.validate();
        const userLogin = await onLogin(req.body);
        req.session.userLogin = userLogin;//สร้าง session login ของ user
        res.json({message:req.session.userLogin})
        res.json(userLogin)
    }
    catch (ex) {
        res.error(ex);
    }
});

// ตรวจสอบ userlogin
router.post('/getUserLogin',authenticated, (req, res) => {
    try {
        if(req.session.userLogin){
            return res.json(req.session.userLogin);
        }
        throw new Error('Unauthorize.')
    }
    catch (ex) {
        res.error(ex, 401);
    }
})

// ตรวจสอบ userlogout
router.post('/logout', (req, res) => {
    try {
        if (req.session.userLogin) {
            delete req.session.userLogin; // sesstion destroy 
            return res.json(req.session.userLogin);
        }
        throw new Error("Unauthorized");
    }
    catch (ex) {
        res.error(ex, 401);
    }
})

module.exports = router;