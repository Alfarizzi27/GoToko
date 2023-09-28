const {User} = require('../models/index.js')
const bcrypt = require('bcryptjs')
class Controller{
    static loginpagerenderer(req,res){
        res.render('loginpage')
    }
    static loginpagehandler(req,res){
        const { username, password } = req.body;

User.findOne({ where: { username: username } })
    .then(user => {
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                res.redirect('/home');
            } else {
                res.send('Invalid username or password');
            }
        } else {
            res.send('Invalid username or password');
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
    }


    static registerpagerenderer(req,res){//tampilkan register page
        res.render('registerpage')
    }
    static registerpagehandler(req,res){//ketika user sudah melakukan register
        const {username, email, password}= req.body
      
        User.create({username, email, password})
        .then(()=>{
            res.redirect('/login')
        })
        .catch(err => {
            res.send(err);
          })
    }

    static userprofilerenderer(req,res){//tampilkan user profile
        res.render('userprofile')
    }
    static userprofilehandler(req,res){//edit user profile
    }
}

module.exports = Controller