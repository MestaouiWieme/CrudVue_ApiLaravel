<script></script>

<template>
  <main>
    <h1>Ajout d'un utilisateur</h1>
    
    <p>Nom:</p>
    <input v-model="nom" placeholder="Saisir votre nom" required />

    <p>Prénom:</p>
    <input v-model="prenom" placeholder="Saisir votre prénom" required /><br /><br />
    <button  v-on:click="addUser()" type="button" class="btn btn-outline-primary">Ajouter</button>
  </main>
</template>
<script>
import axios from "axios";
export default {
   name:'tab',
    data() {
        return {
        user: [{
            "id": "",
            "nom": "",
            "prenom": "",
           
            }],
                
        };
    },
    async created() {
    
        let res = await axios.get('http://127.0.0.1:8000/api/users');
        this.user = res.data;
    },
    methods: {
      async addUser()
      {
         const res = await axios.post('http://127.0.0.1:8000/api/users', {
         id : this.id ,
         nom : this.nom,
         prenom : this.prenom ,
      }).then( data => 
                    window.location.href ="/"
                );   
    
    window.location.href ="/"
    }
   },
};
</script>
