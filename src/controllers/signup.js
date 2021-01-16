const ctrl = {}
const User = require('../models/user');
const bcrypt = require('bcrypt');


ctrl.sign_up = async (req, res) => {
    res.render('../views/signup');
}

ctrl.new_user = async (req, res) => {
    const {names, last_names, user, email, password} = req.body;
    const encripted_password = bcrypt.hashSync(password, 10);
    const role = "user"

   const new_user = new User({
       names: names.trim().toLowerCase(),
       last_names: last_names.trim().toLowerCase(),
       user: user.trim().toLowerCase(),
       email: email.trim().toLowerCase(),
       password: encripted_password.trim(),
       role: role
   });

   const new_user_saved = await new_user.save();
   if(new_user_saved){
    res.redirect('/');
   }
}


module.exports = ctrl;