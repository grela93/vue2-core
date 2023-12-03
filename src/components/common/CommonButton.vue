<template>
  <b-button :variant="variant" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </b-button>
</template>

<script>
export default {
  props: {
    variant: String,
    disabled: Boolean,
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style>
.button {
  /* Add your button styles here */
}
</style>
