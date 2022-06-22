const gauche = document.querySelector('#gauche');
const droite = document.querySelector('#droite')

conteneur = document.querySelector('.conteneur');

const elements = document.querySelectorAll(".conteneur img")
const taille = elements.length

var compt = 1;

console.log(taille-2)
function suivant(){
    // Suppression de l'actif actuel
    
    if (compt+1 <= taille-2){
    elements[compt-1].classList.remove('active');
    compt+=1;
    elements[compt+1].classList.add('active');
    
    }

    else{
        elements[compt].classList.remove('active');
        elements[compt-1].classList.remove('active'); 
        elements[compt+1].classList.remove('active'); 
        compt=1;
        elements[compt-1].classList.add('active');
        elements[compt].classList.add('active');
        elements[compt+1].classList.add('active'); 
    }
    
    console.log(compt)
}

droite.addEventListener('click',suivant);

function precedent(){
    if (compt-1 > 0){
        elements[compt+1].classList.remove('active');
        compt--;
        elements[compt-1].classList.add('active');  
    }
    else{
        elements[compt].classList.remove('active');
        elements[compt-1].classList.remove('active'); 
        elements[compt+1].classList.remove('active'); 
        compt=6;
        elements[compt-1].classList.add('active');
        elements[compt].classList.add('active');
        elements[compt+1].classList.add('active'); 
    }
    console.log(compt)
}

gauche.addEventListener('click', precedent);




// Interraction avec le caroussel 
inter = setInterval(suivant, 5000);

// Arrête le caroussel quand l'on place le curseur dessus
conteneur.addEventListener('mouseover',pause);

function pause(){ 
    clearInterval(inter);
    inter= null;
}


// Lance le défilement automatique du caroussel
conteneur.addEventListener('mouseout',resume);

function resume(){
    inter = setInterval(suivant, 5000);
}

