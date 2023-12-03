<template>
  <div>
    <b-form-group label="Time Range">
      <div class="d-flex">
        <b-form-timepicker
          class="start-time"
          v-model="startTime"
          :min="minTime"
          :max="endTime"
          @input="handleInput"
        ></b-form-timepicker>

        <span class="time-range-divider">~</span>

        <b-form-timepicker
          class="end-time"
          v-model="endTime"
          :min="startTime"
          :max="'23:59'"
          @input="handleInput"
        ></b-form-timepicker>
      </div>
    </b-form-group>

    <b-form inline>
      <b-form-timepicker
        placeholder="開始時間"
        v-model="startTime"
        reset-button
      />
      <span class="ml-2 mr-2">~</span>
      <b-form-timepicker
        placeholder="終了時間"
        v-model="endTime"
        reset-button
      />
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: null,
      endTime: null,
    };
  },
  computed: {
    minTime() {
      return this.startTime ? this.startTime : null;
    },
  },
  methods: {
    handleInput() {
      // Handle time input or selection change
      console.log("Start Time:", this.startTime);
      console.log("End Time:", this.endTime);
    },
  },
};
</script>

<style>
.start-time,
.end-time {
  height: 30px !important;
  border: 1px solid #ced2d5;
  background: #ffffff;
}

.start-time {
  border-radius: 4px 0 0 4px;
}

.end-time {
  border-radius: 0 4px 4px 0;
}

.time-range-divider {
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #ced2d5;
  background: #eceff2;
}
</style>
