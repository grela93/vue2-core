<template>
  <b-toast
    :id="id"
    :title="computedTitle"
    :variant="variant"
    :toaster="toaster"
    :auto-hide-delay="autoHideDelay"
    :solid="solid"
  >
    {{ computedContent }}
  </b-toast>
</template>

<script>
export default {
  name: "CommonToast",
  props: {
    id: String,
    title: String,
    content: String,
    variant: {
      type: String,
      default: "default",
    },
    toaster: {
      type: String,
      default: "b-toaster-top-center",
    },
    autoHideDelay: {
      type: Number,
      default: 5000,
    },
    solid: Boolean,
  },
  computed: {
    computedTitle() {
      return this.title;
    },
    computedContent() {
      return this.content;
    },
  },
};
</script>

<style lang="scss"></style>
