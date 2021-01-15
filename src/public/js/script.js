//===> main header

const main_header = document.getElementById("mainHeader");
const jumbotron = document.getElementById("jumbotron");

if(main_header){
    function get_main_header_height(){
        const main_header_height = main_header.clientHeight;
        return main_header_height;
    }
}

const jumbotron_margin_top = get_main_header_height();

//===> Jumbotron

jumbotron.style.marginTop = `${jumbotron_margin_top}px`


