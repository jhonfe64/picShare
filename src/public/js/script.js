window.addEventListener("resize", function(){  
    page_height();
})
//===> main header

const main_header = document.getElementById("mainHeader");
const jumbotron = document.getElementById("jumbotron");
const signUp_page = document.getElementById("signUp_page");
const authentication_forms = document.getElementById("authentication_forms");

if(main_header){
    function get_main_header_height(){
        const main_header_height = main_header.clientHeight;
        return main_header_height;
    }
}

//===> Jumbotron

if(jumbotron){
    const jumbotron_margin_top = get_main_header_height();
    jumbotron.style.marginTop = `${jumbotron_margin_top}px`
}

//===> Heig signUp form page

const page_height = () => {
    if(signUp_page){
        const window_height = window.innerHeight;
        if(window_height < 478){
            signUp_page.classList.remove("h-100");
            authentication_forms.classList.add("my-5")
        }else{
            signUp_page.classList.add("h-100");
            authentication_forms.classList.remove("my-5")
        }
    }
}

page_height();


verify_passwords(password, confirm_password);






