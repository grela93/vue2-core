<template>
  <div id="app">
    <LoadingProvider>
      <router-view />
    </LoadingProvider>
  </div>
</template>

<script lang="ts">
import { LoadingProvider } from "@/core/loading";

export default {
  name: "App",
  components: { LoadingProvider },
};
</script>

<style></style>
