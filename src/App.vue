<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log(`The App is mounted.`);
});
</script>

<template>
  <div id="app">
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
