<script setup>
import { onMounted, computed, watch } from "vue";
import { useUsersStore } from "@/stores/users";
import { onBeforeRouteUpdate } from "vue-router";

const users = useUsersStore();
// const user = users.array[route.params.id];

// watch(
//   () => route.params.id,
//   async (newId, oldId) => {
//     let user = await users.getUser(newId);
//     console.log({ user });
//   }
// );
// **** OR ****
// onBeforeRouteUpdate(async (to, from) => {
//   let user = await users.getUser(to.params.id);
//   console.log({ user });
// });

onMounted(async () => {
  let user = await users.getUser(0);
  console.log({ user });
  console.log(`User Details is mounted.`);
});
</script>

<template>
  <h2>User {{ $route.params.id }} Details</h2>
  <div>
    <!-- {{ user }} -->
  </div>
</template>
