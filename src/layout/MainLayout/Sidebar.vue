<template>
  <div
    class="sidebar-container shadow"
    :class="isCollapsed ? 'sidebar-collapse' : ''"
  >
    <nav class="navbar navbar-default h-100" role="navigation">
      <div
        class="h-100 d-flex flex-column justify-content-between"
        style="gap: 6px"
      >
        <!-- Main Menu -->
        <div class="sidebar-link-container nav navbar-nav" style="gap: 6px">
          <router-link
            class="sidebar-link w-100 d-flex align-items-center"
            v-for="(route, index) in routes"
            :key="index"
            :class="[route.path === $route.path ? 'active' : '']"
            :to="route.path"
          >
            <fa-icon :icon="route.meta.icon" />

            <span class="pl-3" :class="isCollapsed ? 'd-none' : ''">
              {{ route.meta.title }}
            </span>
          </router-link>
        </div>

        <!-- Collapse sidebar -->
        <div class="sidebar-link text-center" @click="toggleCollapse()">
          <fa-icon :icon="['fas', 'angles-right']" v-if="isCollapsed" />

          <fa-icon :icon="['fas', 'angles-left']" v-else />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { appRoutes } from "@/router/routes";

export default {
  name: "layout-sidebar",
  data() {
    return { routes: appRoutes, isCollapsed: false };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: block;
  padding: 0;
}

.sidebar-container {
  width: var(--sidebar-width);
  padding: 24px 0 0;
  background: var(--primary-color-500);
  transition: width 0.3s ease;

  &.sidebar-collapse {
    width: var(--sidebar-collapse-width);
    // animation: rotate-fly 5s linear infinite;
  }

  .sidebar-link {
    width: 100%;
    height: 56px;
    padding: 16px 24px;
    color: var(--strong-primary-color);
    font-size: var(--text-base);
    font-weight: var(--font-semibold);
    text-decoration: none;
    cursor: pointer;

    &.active {
      background: var(--primary-color);

      color: var(--white-color);
    }

    &:hover {
      background: var(--primary-color);

      color: var(--white-color);
    }
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
