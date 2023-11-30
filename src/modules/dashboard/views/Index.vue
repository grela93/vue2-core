<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-12 col-md-8 mb-4 d-flex flex-column" style="gap: 24px">
        <div class="card border-light">
          <div class="card-body">
            <div class="card-title d-flex justify-content-between">
              <h5>All Expenses</h5>

              <button class="btn btn-outline" type="button">
                <span class="mr-2"> Monthly </span>

                <font-awesome-icon icon="chevron-down" />
              </button>
            </div>

            <div class="d-flex" style="gap: 12px">
              {{ windowSize.width }}
            </div>
          </div>
        </div>

        <div class="card border-light">
          <div class="card-body">
            <h5 class="card-title">All Expenses</h5>

            <div class="d-flex" style="gap: 12px"></div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="card border-light">
          <div class="card-body">
            <h5 class="card-title">All Expenses</h5>

            <div class="d-flex" style="gap: 12px"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import useWindowSize from "@/composables/useWindowSize";

export default {
  name: "DashboardPage",
  mixins: [useWindowSize],
};
</script>

<style>
.dashboard {
  /* background: rgb(75, 183, 255); */
}
</style>
