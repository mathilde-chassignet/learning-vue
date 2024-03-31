<script setup>
import { onMounted } from "vue";
import Home from "./Home.vue";
import axios from "axios";
import { useUsersStore } from "@/stores/users";

const users = useUsersStore();

function getRandomUsers() {
  axios
    .get("https://randomuser.me/api/?results=10")
    .then(async function (response) {
      users.setUsers(response.data.results);
    })
    .catch(function (error) {
      console.log(error);
    });
}

onMounted(() => {
  console.log(`The Home is mounted.`);
});
</script>

<template>
  <button @click="getRandomUsers">Generate Users</button>
  <ul className="list-simple">
    <li className="box-white" v-for="(user, index) in users.array">
      <RouterLink :to="{ name: 'user', params: { id: index } }">
        <!-- <img :src="require(user.picture.medium)" /> -->
        {{ user.name.title }}. {{ user.name.first }} {{ user.name.last }}
      </RouterLink>
    </li>
  </ul>
</template>

<style>
.box-white {
  background-color: white;
  margin: 20px auto;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.list-simple {
  list-style: none;
  padding: 0px;
}
</style>
