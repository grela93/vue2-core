<template>
  <div class="header-container shadow-sm">
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="background-color: var(--white-color)"
    >
      <router-link
        class="navbar-brand d-flex align-items-center justify-content-center"
        to="/dashboard"
      >
        <img class="header-logo" :src="logoImg" alt="My Image" style="" />

        <span class="ml-2">Grela</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <button class="btn btn-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "layout-header",
  data() {
    return {
      logoImg: require("@/assets/images/logo.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-brand {
  font-size: var(--text-xxl);
  font-weight: var(--font-semibold);
}

.header-logo {
  width: 30px;
  border-radius: 2px;
  object-fit: contain;
}

@media (min-width: 768px) {
  .header-container,
  .navbar {
    height: 100%;
  }

  .header-logo {
    width: 40px;
  }
}
</style>
