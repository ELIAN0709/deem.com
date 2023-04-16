let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add('typescript');
        habilidades[2].classList.add("react");
        habilidades[3].classList.add('angular');
        habilidades[4].classList.add("htmlcss");
        habilidades[5].classList.add('tailwind');
        habilidades[6].classList.add('bootstrap');
        habilidades[7].classList.add("python");
        habilidades[8].classList.add('webScrapy');
        habilidades[9].classList.add('flask');
        habilidades[10].classList.add('django');
        habilidades[11].classList.add('pandas');
        habilidades[12].classList.add('java');
        habilidades[13].classList.add("git");
        habilidades[14].classList.add('linux');
        habilidades[15].classList.add('postgresql');
        habilidades[16].classList.add('mysql');
        habilidades[17].classList.add("comunicacion");
        habilidades[18].classList.add("trabajo");
        habilidades[19].classList.add("creatividad");
        habilidades[20].classList.add("dedicacion");
        habilidades[21].classList.add("responsabilidad");
        habilidades[22].classList.add('colaborador');
        habilidades[23].classList.add('competitivo');
        habilidades[24].classList.add('decidido');
        habilidades[25].classList.add('entusiasta');
        habilidades[26].classList.add('intuitivo');
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 