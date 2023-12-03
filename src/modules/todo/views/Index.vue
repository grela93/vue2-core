<template>
  <div class="todo-container">
    <div class="todo-button">
      <h4>Button</h4>

      <div class="mb-3 d-flex" style="gap: 10px">
        <CommonButton variant="primary" disabled>Primary</CommonButton>

        <CommonButton variant="secondary">Secondary</CommonButton>

        <CommonButton variant="success">Success</CommonButton>

        <CommonButton variant="danger">Danger</CommonButton>

        <CommonButton variant="warning">Warning</CommonButton>

        <CommonButton variant="info">Info</CommonButton>

        <CommonButton variant="light">Light</CommonButton>

        <CommonButton variant="dark">Dark</CommonButton>
      </div>

      <div class="d-flex" style="gap: 10px">
        <CommonButton variant="outline-primary">Primary</CommonButton>

        <CommonButton variant="outline-secondary">Secondary</CommonButton>

        <CommonButton variant="outline-success">Success</CommonButton>

        <CommonButton variant="outline-danger">Danger</CommonButton>

        <CommonButton variant="outline-warning">Warning</CommonButton>

        <CommonButton variant="outline-info">Info</CommonButton>

        <CommonButton variant="outline-light">Light</CommonButton>

        <CommonButton variant="outline-dark">Dark</CommonButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CommonButton from "@/components/common/CommonButton.vue";

export default {
  name: "TodoPage",
  components: { CommonButton },
};
</script>

<style></style>
