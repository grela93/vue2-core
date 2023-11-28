<template>
  <div id="layout-spinner">
    <b-spinner variant="primary" v-show="spinning"> </b-spinner>

    <slot></slot>
  </div>
</template>

<script>
import { loadingInjectKey } from "./index";

export default {
  name: "layout-spinner",
  data() {
    return {
      spinning: false,
      loadingCount: 0,
    };
  },
  methods: {
    startLoading() {
      this.spinning = true;
      this.loadingCount++;
    },
    stopLoading() {
      this.loadingCount--;

      if (this.loadingCount >= 1) {
        return;
      }

      this.spinning = false;
      this.loadingCount = 0;
    },
  },
  provide() {
    const injectionLoading = {};
    injectionLoading[loadingInjectKey] = {
      spinning: this.spinning,
      startLoading: this.startLoading(),
      stopLoading: this.stopLoading(),
    };

    return {
      injectionLoading,
    };
  },
};
</script>

<style>
#layout-spinner {
}
</style>
