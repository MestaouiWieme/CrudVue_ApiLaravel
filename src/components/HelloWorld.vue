<script setup lang="ts">

</script>
<template>

    <section>
        <div>
                    <h1>
                        <br>
                        Gestion Des utilisateurs
                        <br>
                    </h1>
                    <button @click="$router.push('Ajout')">Ajouter un utilisateur</button>
             
         </div>
  <table border='1'>
  
    <tr>
      <td>#</td>
      <td>Nom</td>
      <td>Prénom</td>
     
    </tr>
  

    <tr v-for="us of user" :key="us.id">
      <th>{{ us.id }}</th>
      <td>{{ us.nom }}</td>
      <td>{{ us.prenom }}</td>
      <td>Modifier</td>
      <td>Supprimer</td>
     
      
    </tr>
    
  </table>
  </section>

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
            "id": "",
            "nom": "",
            "prenom": "",
           
            
        };
    },
    async created() {
    try {
      const res = await axios.get('http://localhost:3000/user');
      this.user = res.data;
    } catch (e) {
      console.error(e);
    }
  }
    
   
    
    
            
    
};
</script>