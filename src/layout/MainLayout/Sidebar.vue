<template>
  <div class="sidebar-container shadow">
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
            <font-awesome-icon :icon="route.meta.icon" />

            <span class="pl-3" :class="isCollapsed ? 'd-none' : ''">
              {{ route.meta.title }}
            </span>
          </router-link>
        </div>

        <!-- Collapse sidebar -->
        <div
          class="sidebar-link text-center"
          @click="$emit('update:isCollapsed')"
        >
          <font-awesome-icon
            :icon="['fas', 'angles-right']"
            v-if="isCollapsed"
          />

          <font-awesome-icon :icon="['fas', 'angles-left']" v-else />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { appRoutes } from "@/router/routes";

export default {
  name: "layout-sidebar",
  props: {
    isCollapsed: Boolean,
  },
  emits: ["update:isCollapsed"],
  data() {
    return { routes: appRoutes };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  display: block;
  padding: 0;
}

.sidebar-container {
  position: sticky;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: var(--sidebar-width);
  padding: 24px 0 0;
  background: var(--primary-color-500);
  transition: width 0.3s ease;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: nowrap;

  .sidebar-link {
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
</style>
