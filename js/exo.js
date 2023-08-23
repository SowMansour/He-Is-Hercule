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
    
    },

   
    
    
   
};

window.addEventListener("DOMContentLoaded", app.init);

