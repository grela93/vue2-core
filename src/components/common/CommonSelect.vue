<template>
  <b-form-select
    class="common-select"
    :value="computedSelected"
    :options="options"
    @change="$emit('update:selected')"
  >
    <!-- <template #prepend>
      <font-awesome-icon :icon="['fas', 'check']" />
    </template> -->
  </b-form-select>
</template>

<script>
export default {
  name: "CommonSelect",
  props: {
    selected: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    computedSelected() {
      return this.selected;
    },
  },
};
</script>

<style>
.common-select:focus {
  border-color: #228d91 !important;
  box-shadow: none !important;
}
</style>
