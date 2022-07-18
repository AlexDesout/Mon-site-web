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

// Formulaire de contact


const bouton = document.querySelector('#contact button');
bouton.addEventListener('click', ouvreformulaire);

function ouvreformulaire(){
    document.querySelector('#fond').style.display = 'flex';
}

const fermeture = document.querySelector('#fermeture');
fermeture.addEventListener('click', fermeFormulaire);

function fermeFormulaire(){
    document.querySelector('#fond').style.display = 'none';
}

// Scroll vers le haut

const haut = document.querySelector('#scroll');

haut.addEventListener('click', remonte);
document.addEventListener('scroll', affichage);

console.log(window.scrollY);

// Affichage de l'élément
function affichage(){
        if (window.scrollY == 0){
            haut.style.display='none';
        }
        else{
            haut.style.display='flex';
        }
        // console.log(window.scrollY);
}


function remonte(){
    window.scroll(0, -window.innerHeight);
}

// Animation en fonction de la hauteur




// Animation des h3
let observer = new IntersectionObserver(function(observables){
    console.log(observables);
    observables.forEach(function(observable){
        if (observable.intersectionRatio > 0.4){
            observable.target.classList.remove('cache');
        }
    })
},{
    threshold: [0.4]
})


const allH3 = document.querySelectorAll('h3');
const carrou = document.querySelector('.carrou');
const p = document.querySelector('#stp');
const imgCv = document.querySelector('#imgCv');

const all = [];
let i = 0;

while (i< allH3.length){
    all.push(allH3[i]);
    i++;
}
all.push(carrou);
all.push(p);
all.push(imgCv);

console.log(all)

all.forEach(function(item){
    item.classList.add('cache');
    observer.observe(item);
})


// Animation image et carrousel



// let observeVersBas = new IntersectionObserver(function(animVersBas){
//     console.log(animVersBas);
//     animVersBas.forEach(function(bas){
//         if (bas.intersectionRatio > 0.4){
//             bas.target.classList.remove('animBas');
//         }
//     })
// },{
//     threshold: [0.4]
// })





// const allBas = [carrou,p]
// console.log(allBas);


// allBas.forEach(function(itemBas){
//     itemBas.classList.add('animBas');
//     observeVersBas.observe(itemBas);
// })