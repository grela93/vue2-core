<template>
  <b-button
    :variant="variant"
    :pill="pill"
    :block="block"
    :disabled="disabled"
    @click="handleClick()"
  >
    {{ computedContent }}
  </b-button>
</template>

<script>
/**
 * Variants of Button:
 * primary, secondary, success, danger, warning, info, light and dark.
 * outline-primary, outline-secondary, outline-success, outline-danger, outline-warning, outline-info, outline-light and outline-dark.
 */
export default {
  name: "CommonButton",
  props: {
    content: {
      type: String,
      default: "検索",
    },
    variant: {
      type: String,
      default: "success",
    },
    pill: Boolean,
    block: Boolean,
    disabled: Boolean,
  },
  computed: {
    computedContent() {
      return this.content;
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style></style>
