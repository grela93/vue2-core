<template>
  <b-modal :id="id" :title="computedTitle" :hide-footer="hideFooter">
    <template #modal-title v-if="!computedTitle">
      <slot name="title"></slot>
    </template>
    <slot></slot>
  </b-modal>
</template>

<script>
export default {
  name: "CommonModal",
  props: {
    id: String,
    title: String,
    hideFooter: Boolean,
  },
  computed: {
    computedTitle() {
      return this.title ?? undefined;
    },
  },
};
</script>

<style></style>
