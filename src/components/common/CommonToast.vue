<template>
  <b-toast
    :class="[variant === 'success' ? 'custom-success-toast' : '']"
    :id="id"
    :title="computedTitle"
    :variant="variant"
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

<style>
/* .custom-success-toast {
  background: #28a745;
} */
</style>
