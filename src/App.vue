<template>
  <v-app class="fixed top-10 right-10 z-[1000]">
    <v-main class="p-1.5 w-sm bg-[--bg-color]">
      <v-text-field label="Email address" prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style scoped>
.app {
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 1000;
  width: 400px;
  padding: 8px;
  background: var(--bg-color);
}
</style>