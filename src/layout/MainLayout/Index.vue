<template>
  <div>
    <!-- Header -->
    <div class="main-page__header">
      <Header></Header>
    </div>

    <!-- Body -->
    <div class="main-page" :class="[isCollapsed ? 'main-page-collapsed' : '']">
      <Sidebar
        class="main-page__sidebar"
        :isCollapsed="isCollapsed"
        @update:isCollapsed="toggleCollapse()"
      />

      <div class="main-page__main-content">
        <TransitionFade>
          <router-view v-slot="{ Component }">
            <component :is="Component"></component>
          </router-view>
        </TransitionFade>
      </div>
    </div>

    <!-- Footer -->
  </div>
</template>

<script>
import TransitionFade from "@/components/animation/TransitionFade.vue";
import useWindowSize from "@/composables/useWindowSize";
import Header from "./Header.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "main-layout",
  components: { Header, TransitionFade, Sidebar },
  mixins: [useWindowSize],
  data() {
    return {
      isCollapsed: false,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$watch(
        () => this.windowSize,
        (newValue) => {
          this.isCollapsed = newValue.width > 991 ? false : true;
        },
        { immediate: true, deep: true }
      );
    });
  },
};
</script>

<style lang="scss">
.main-page {
  display: flex;
  background: var(--primary-bg-color);

  &__main-content {
    width: calc(100vw - var(--sidebar-width));
    padding: 40px;
    background: var(--primary-bg-color);
  }
}

.main-page-collapsed {
  .main-page {
    &__sidebar {
      width: var(--sidebar-collapse-width);
      transition: width 0.3s ease;
      // animation: rotate-fly 5s linear infinite;
    }

    &__main-content {
      width: 100%;
    }
  }
}

@media (min-width: 768px) {
  .main-page__header {
    height: 60px;
  }
}

@keyframes rotate-fly {
  0% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(100vw) rotate(360deg);
  }
}
</style>
