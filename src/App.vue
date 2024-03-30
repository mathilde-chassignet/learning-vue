<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/users";

const userList = useUserStore();

function getRandomUsers() {
  axios
    .get("https://randomuser.me/api/?results=10")
    .then(function (response) {
      userList.array = response.data.results;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  // .finally(function () {
  //   // always executed
  // });
}

onMounted(() => {
  console.log(`The Generate Users button is mounted.`);
});
</script>

<template>
  <div id="app">
    <button @click="getRandomUsers">Generate Users</button>
    <ul>
      <li v-for="user in userList.array">
        <span>
          {{ user.name.title }}. {{ user.name.first }} {{ user.name.last }}
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
