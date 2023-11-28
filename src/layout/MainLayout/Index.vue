<template>
  <div>
    <!-- Header -->
    <div class="main-page__header">
      <Header></Header>
    </div>

    <!-- Body -->
    <div class="main-page">
      <Sidebar class="main-page__sidebar" />

      <div class="main-page__main-content">
        <router-view v-slot="{ Component }">
          <TransitionFade>
            <component :is="Component"></component>
          </TransitionFade>
        </router-view>
      </div>
    </div>

    <!-- Footer -->
  </div>
</template>

<script>
import TransitionFade from "@/components/animation/TransitionFade.vue";
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "main-layout",
  components: { Header, TransitionFade, Sidebar },
};
</script>

<style lang="scss">
.main-page {
  // display: grid;
  // grid-template-columns: var(--sidebar-width) 1fr;
  display: flex;
  background: var(--primary-bg-color);

  &__header {
    height: 50px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  &__sidebar {
    position: sticky;
    top: 60px;
    left: 0;
    height: calc(100vh - 60px);
    overflow-x: hidden;
    overflow-y: auto;
    white-space: nowrap;
  }

  &__main-content {
    width: calc(100vw - var(--sidebar-width));
    padding: 24px 64px;
    background: var(--primary-bg-color);
  }
}

@media screen and (min-width: 768px) {
  .main-page__header {
    height: 60px;
  }
}
</style>
