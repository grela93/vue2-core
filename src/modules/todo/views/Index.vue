<template>
  <div class="todo-container">
    <!-- Buttons -->
    <b-card class="todo-button-card">
      <h4>Button</h4>

      <p class="my-2">Normal Button</p>

      <div class="mb-3 d-flex" style="gap: 10px">
        <CommonButton></CommonButton>

        <CommonButton content="Dark" variant="dark" />

        <CommonButton content="Danger" variant="danger" />
      </div>

      <p class="my-2">Outline Button</p>

      <div class="d-flex" style="gap: 10px">
        <CommonButton content="Success" variant="outline-success" />

        <CommonButton content="Dark" variant="outline-dark" />

        <CommonButton content="Danger" variant="outline-danger" />
      </div>

      <p class="my-2">Pill Button</p>

      <div class="d-flex" style="gap: 10px">
        <CommonButton pill></CommonButton>

        <CommonButton content="Dark" variant="dark" pill />

        <CommonButton content="Danger" variant="danger" pill />

        <CommonButton content="Success" variant="outline-success" pill />

        <CommonButton content="Dark" variant="outline-dark" pill />

        <CommonButton content="Danger" variant="outline-danger" pill />
      </div>

      <p class="my-2">Full option Button</p>

      <CommonButton content="Full options" pill block disabled></CommonButton>
    </b-card>

    <!-- Toast -->
    <b-card class="todo-toast-card">
      <h4>Toast</h4>

      <div class="mb-3 d-flex" style="gap: 10px">
        <CommonButton
          class="mb-2"
          content="Success toast"
          @click="$bvToast.show('success-toast')"
        />

        <CommonButton
          class="mb-2"
          content="Error toast"
          variant="danger"
          @click="$bvToast.show('error-toast')"
        />
      </div>

      <CommonToast
        id="success-toast"
        title="Success toast"
        content="That is success toast"
        variant="success"
        toaster="b-toaster-top-full"
      />

      <CommonToast
        id="error-toast"
        title="Error toast"
        content="That is error toast"
        variant="danger"
      />
    </b-card>

    <!-- Select -->
    <b-card class="todo-select-card">
      <h4>Select</h4>

      <CommonSelect v-model="selected" :options="options" />

      <CommonSelect2 class="mt-3" />
    </b-card>

    <!-- Range Time Input -->
    <b-card class="todo-range-time-card">
      <h4>Range Time Input</h4>

      <CommonRangeTime />
    </b-card>

    <!-- Dialogs -->
    <b-card class="todo-modal-card" style="grid-column: span 2">
      <h4>Modal</h4>

      <div class="mb-3 d-flex" style="gap: 10px">
        <CommonButton content="Show modal" variant="dark" v-b-modal.my-modal />

        <CommonModal id="my-modal" hide-footer>
          <template #title> Common Modal </template>

          <div class="d-block text-center">
            <h3>Hello From This Modal!</h3>
          </div>

          <b-button class="mt-3" block @click="$bvModal.hide('my-modal')">
            Close Me
          </b-button>
        </CommonModal>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import CommonButton from "@/components/common/CommonButton.vue";
import CommonModal from "@/components/common/CommonModal.vue";
import CommonRangeTime from "@/components/common/CommonRangeTime.vue";
import CommonSelect from "@/components/common/CommonSelect.vue";
import CommonSelect2 from "@/components/common/CommonSelect2.vue";
import CommonToast from "@/components/common/CommonToast.vue";

export default {
  name: "TodoPage",
  components: {
    CommonButton,
    CommonModal,
    CommonToast,
    CommonSelect,
    CommonRangeTime,
    CommonSelect2,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option", disabled: true },
      ],
    };
  },
};
</script>

<style lang="scss">
.todo-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
</style>
