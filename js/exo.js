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
    const herculeFriends =[
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
    },

   
    
    
   
};

window.addEventListener("DOMContentLoaded", app.init);

