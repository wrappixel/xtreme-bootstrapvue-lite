<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Button Group Sizing -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Button Group Sizing</h4>
          <b-card-text class="text-muted">
            Set the size prop to lg or sm to render larger or smaller,
            respectively, buttons. There is no need to specify the size on the
            individual buttons.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div>
        <b-button-group size="sm">
          <b-button variant="primary">Left</b-button>
          <b-button variant="primary">Middle</b-button>
          <b-button variant="primary">Right</b-button>
        </b-button-group>
      </div>
      <div class="mt-3">
        <b-button-group>
          <b-button variant="primary">Left</b-button>
          <b-button variant="primary">Middle</b-button>
          <b-button variant="primary">Right</b-button>
        </b-button-group>
      </div>
      <div class="mt-3">
        <b-button-group size="lg">
          <b-button variant="primary">Left</b-button>
          <b-button variant="primary">Middle</b-button>
          <b-button variant="primary">Right</b-button>
        </b-button-group>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "SizeButtonGroup",

  data: () => ({}),
};
</script>