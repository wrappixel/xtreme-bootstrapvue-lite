<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Programmatically Show/Hide Popover -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Programmatically Show/Hide Popover</h4>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="d-flex flex-column text-md-center">
        <div class="p-2">
          <b-button id="popover-button-sync" variant="primary"
            >I have a popover</b-button
          >
        </div>

        <div class="p-2">
          <b-button class="px-1" @click="show = !show">Toggle Popover</b-button>

          <b-popover
            :show.sync="show"
            target="popover-button-sync"
            title="Popover"
          >
            Hello <strong>World!</strong>
          </b-popover>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "ProgrammaticallyShowHidePopover",

  data: () => ({
    show: false,
  }),
};
</script>