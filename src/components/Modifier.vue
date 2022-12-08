<script></script>

<template>
  <main>
    
    <h1>Modification d'un utilisateur</h1>
    <p>Nom:</p>
    <input v-model="user.nom" placeholder="" />

    <p>Prénom:</p>
    <input v-model="user.prenom" placeholder="" /><br /><br/>
    <button type="button" class="btn btn-outline-primary"
     v-on:click="updateUser(nom,prenom)">Modifier</button>
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
    async mounted()
    {
      const res = await axios.get('http://127.0.0.1:8000/api/users/'+this.$route.params.id);
      this.user = res.data;
    },
    methods: 
    {
    async updateUser( nom ,prenom)
        {
      
        
        try {
      
    let  user = await axios.put(
        'http://127.0.0.1:8000/api/users/' +this.$route.params.id,
      {
  
        nom: this.user.nom,
        prenom : this.user.prenom,
      }
    );

    console.log(user.data);
    alert("User Modifié!");
  } catch (e) {
    console.log(e);
  }
  window.location.href ="/";
},

   },
};
</script>