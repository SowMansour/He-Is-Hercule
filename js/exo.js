const app = {
    init: function(){
        //Defining Hercule profile
       const herculeProfil = {
        name: "Hercule",
        job: "Demi-Dieu",
        age: 35,
        department: 75,
        arm: 60.5,
        inRelationship: true
       };

       //Methode that allow render the hercule infos in the page
       const fillProfil = (profil) => {
        const listElem = document.getElementById('profil');
        listElem.classList.remove('hidden');
        if (!profil || typeof profil !== 'object') {
          listElem.innerHTML = '<li class="red">Tu as bien appelé <code>fillProfil</code> mais tu ne sembles pas avoir passé d\'objet en argument</li>';
        }
        else {
          if (
            profil.name === undefined
            || profil.inRelationship === undefined
            || profil.job === undefined
            || profil.department === undefined
            || profil.arm === undefined
            || profil.age === undefined
          ) {
            listElem.innerHTML = '<li class="yellow">Pour un meilleur affichage essaye de respecter les noms de propriétés donnés dans l\'énoncé et n\'oublie aucune propriété</li>';
          }
          else if (
            typeof profil.name !== 'string'
            || typeof profil.inRelationship !== 'boolean'
            || typeof profil.job !== 'string'
            || typeof profil.age !== 'number'
            || (typeof profil.department !== 'number' && typeof profil.department !== 'string')
            || typeof profil.arm !== 'number') {
            listElem.innerHTML = '<li class="yellow">Ça fonctionne mais certains types de valeurs ne sont pas idéalement choisis</li>';
          }
          for (const key in profil) {
            const newElem = document.createElement('li');
            newElem.className = 'tags__item';
            let text;
            switch (key) {
              case 'inRelationship':
                text = profil[key] ? 'En couple' : 'Célibataire';
                break;
              case 'age':
                text = profil[key] + ' ans';
                break;
              case 'department':
                text = 'Vit actuellement dans le ' + profil[key];
                break;
              case 'arm':
                text = profil[key] + 'cm de tour de bras';
                break;
              default:
                text = profil[key];
            }
            newElem.innerHTML = text;
            listElem.appendChild(newElem);
          }
        }
      };

     //Invoking the fillProfil method and fill it with herculeProfil object
    fillProfil(herculeProfil); 

    //Defining Hercule' friends
    const herculeFriends = [
        "Jupiter",
        "Junon",
        "Alcmène",
        "Déjanire"
    ];

    //Method rendering the friends on the browser
    const printFriends = (friends) => {
        const listElem = document.getElementById('friends');
        listElem.classList.remove('hidden');
        if (!friends || !Array.isArray(friends)) {
          listElem.innerHTML = '<li class="red">Tu as bien appelé <code>printFriends</code> mais tu ne sembles pas avoir passé de tableau en argument</li>';
        }
        else {
          friends.forEach((friend) => {
            const newElem = document.createElement('li');
            newElem.className = 'tags__item';
            newElem.innerHTML = friend;
            listElem.appendChild(newElem);
          });
        }
      };

      //Executing the friends method filled with herculeFriends array
      printFriends(herculeFriends);

      //Defining Hercule's Besti
      const setBestFriend = (name) => {
        document.querySelector('#best-friend').textContent = name;
      };
      //Here's his besti => index 0 of herculeFriends array
      setBestFriend(herculeFriends[0]);

      //Step 3: DOM Manip
      const titre = () => {
      const title = document.createElement('h1');
      title.classList.add('banner__title');
      title.innerText = 'Vous consultez le profil de Hercule';
      //retrieve the futur parent elem
      const parentElem = document.getElementById('header-banner');
      //Append the relation
      parentElem.appendChild(title);
     };
     titre();

      //Step 4 : Loops

      const displayWork = () => {
        const works = document.querySelectorAll('.panel--work');
        /* CASE 1 : Display the work with a simple FOR loop
        
        for(let i = 0; i < works.length; i++){
            works[i].classList.remove('hidden');
        }
        CASE 2 : Display the work using FOR...OF array loop
        for(const work of works){
            work.classList.remove('hidden');
        }*/
        //CASE 3: Display the work using the FOR...EACH() method
        works.forEach(work =>{
            work.classList.remove('hidden');
        })
      };
      //Invoking the method
      displayWork();

      //STEP 5: Conditional statements
      //Defining time and retrieve elem needed for the if statement
      const getHour = () => {
        const date = new Date('March 23, 2023 10:30');
        const hour = date.getHours();
    
        const availability = document.getElementById('availability');
      
        //CASE 1: Using ternary Operator
        return hour > 8 && hour < 20 ? availability.innerText = 'Disponible' : 
        (availability.innerText = 'Non Disponible', availability.classList.add('off'));
        
        
        /*CASE 2: Simplest way with a if statement
        if(hour > 8 && hour < 20){
           return availability.innerText = 'Disponible';
        }else{
            availability.innerText = 'Non Disponible';
            availability.classList.add('off')
        } */
    };
    //Invoking the availability method
    getHour();

    //STEP 6: Functions
    const surname = () => {
    const pseudo = (nom, departmentNum) => {
        return `${nom}-du-${departmentNum}`
    }
    const pseudoValue = pseudo(herculeProfil.name, herculeProfil.department);
    const profilName = document.getElementById('profil-name');
    profilName.append(pseudoValue)
    };
    surname();

    //STEP 7: EVENT
    const btnMenu = document.getElementById('menu-toggler');
    btnMenu.addEventListener('click', app.btnMenu);
},
    //Declaring the event handler
    btnMenu: () => {
        const headerMenu = document.getElementById('header-banner');
        headerMenu.classList.toggle('banner--open');
    }
   
};

window.addEventListener("DOMContentLoaded", app.init);

