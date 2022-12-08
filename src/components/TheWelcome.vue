<script setup lang="ts"></script>

<template>
  <h1>Gestion Des utilisateurs</h1>
  <button type="button" class="btn btn-outline-success" @click="$router.push('Ajout')">
    Ajouter un utilisateur
  </button>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nom</th>
        <th scope="col">Prénom</th>
      </tr>
    </thead>
    <tbody>
      <tr scope="row" v-for="us of user" :key="us.id">
        <td>{{ us.id }}</td>
        <td>{{ us.nom }}</td>
        <td>{{ us.prenom }}</td>
        <!--<RouterLink :to="'/Modifier/'+us.id">Modifier</RouterLink>-->
        <button
          type="button"
          class="btn btn-outline-primary"
          @click="$router.push('Modifier/' + us.id)"
        >
          Modifier
        </button>
        <button
          type="button"
          class="btn btn-outline-danger"
          v-on:click="deleteUser(us.id)"
        >
          Supprimer
        </button>
      </tr>
    </tbody>
  </table>
</template>
<script>
import axios from "axios";
export default {
  name: "tab",
  data() {
    return {
      user: [
        {
          id: "",
          nom: "",
          prenom: "",
        },
      ],
    };
  },
  async created() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/users");
      this.user = res.data;
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    async edit(id, user) {
      let res = await axios.get("http://127.0.0.1:8000/api/users/" + id);
      user.nom = res.data.nom;
      user.prenom = res.data.prenom;
    },

    async deleteUser(id) {
      let x = window.confirm("Voulez-vous supprimé cet utlisateur?");

      if (x) {
        let user = await axios.delete("http://127.0.0.1:8000/api/users/" + id);
        console.log(user);
        alert("User supprimé!");
        window.location.href = "/";
      }
      window.location.href = "/";
    },
  },
};
</script>
