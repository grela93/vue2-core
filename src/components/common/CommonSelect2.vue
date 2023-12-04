<template>
  <div class="select-custom">
    <div
      class="my-select mt-2 d-flex justify-content-between align-items-center"
      @click="showOption"
      v-click-outside="hideOption"
    >
      <span>{{ selectedOption }}</span>

      <div
        class="d-flex flex-column justify-content-center align-items-center"
        style="font-size: 8px"
      >
        <font-awesome-icon icon="fa-solid fa-chevron-up" />
        <font-awesome-icon icon="fa-solid fa-chevron-down" />
      </div>
    </div>

    <div v-show="visible" class="options">
      <div
        class="option-item"
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
import clickOutside from "@/directives/clickOutside";

export default {
  directives: {
    clickOutside,
  },
  data() {
    return {
      selectedOption: null,
      visible: false,
      options: [
        "Option 1as",
        "Option 2",
        "Option 3",
        "Option 1aqs",
        "Option 2as",
        "Option 3sa",
        "Option 1f",
        "Option 2g",
        "Option 3sg",
        "Option 1dg",
        "Option 2dg",
        "Option 3zcv",
        "Option 1fadsf",
        "Option 2vz",
        "Option 3ag",
      ],
    };
  },
  methods: {
    showOption() {
      this.visible = true;
    },
    hideOption() {
      this.visible = false;
    },
    selectOption(option) {
      this.selectedOption = option;
      // this.visible = false;
    },
  },
};
</script>

<style lang="scss">
.my-select {
  position: relative;
  padding: 7px 8px;
  width: 158px;
  height: 30px;

  border: 1px solid #ced2d5;
  border-radius: 4px;
  background: #ffffff;
  font-size: 14px !important;
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid #228d91;
  }
}

.options {
  position: absolute;
  max-width: 680px;
  min-width: 158px;
  max-height: 304px;
  padding: 5px 0;
  margin: 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  z-index: 1;

  .option-item {
    display: flex;
    align-items: center;
    padding: 10px;
    max-width: 200px;
    min-width: 158px;
    height: 30px;
    cursor: pointer;

    &:hover {
      background: #eceff2;
    }
  }
}
</style>
