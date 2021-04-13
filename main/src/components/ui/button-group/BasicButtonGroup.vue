<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Button Group -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Basic Button Group</h4>
          <b-card-text class="text-muted">
            Button groups are an easy way to group a series of buttons together.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-button-group>
        <b-button variant="primary">Button 1</b-button>
        <b-button variant="primary">Button 2</b-button>
        <b-button variant="primary">Button 3</b-button>
      </b-button-group>
      <div class="mt-2">
        <b-button-group>
          <b-button class="d-flex align-items-center justify-content-center">
            <i class="mdi mdi-skip-backward font-18"></i>
          </b-button>
          <b-button class="d-flex align-items-center justify-content-center">
            <i class="mdi mdi-play-circle-outline font-18"></i>
          </b-button>
          <b-button class="d-flex align-items-center justify-content-center">
            <i class="mdi mdi-skip-forward font-18"></i>
          </b-button>
        </b-button-group>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BasicButtonGroup",

  data: () => ({}),
};
</script>