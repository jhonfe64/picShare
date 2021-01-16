const ctrl = {}

ctrl.verify_fields = (req, res, next)=>{
    const {names, last_names, user, email, password, password_confirmation} = req.body;
    if(!names || !last_names || !user || !email || !password || !password_confirmation){
        res.redirect('/signUp');
    }else{
        next();
    }
}

ctrl.verify_passwords = (req, res, next) => {
    const {password, password_confirmation} = req.body;
    if(password.trim() !== password_confirmation.trim()){
        res.send("las claves no coinciden");
    }else{
        next();
    }
}

module.exports = ctrl;