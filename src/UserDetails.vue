<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useUsersStore } from "@/stores/users";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

const route = useRoute();

const users = useUsersStore();
const user = ref(null);

onMounted(() => {
  user.value = users.getUser(route.params.id);
  console.log(`User Details is mounted.`);
});
</script>

<template>
  <h2>User {{ $route.params.id }} Details</h2>
  <div>
    {{ user }}
  </div>
</template>
