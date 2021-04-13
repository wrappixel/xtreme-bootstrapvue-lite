<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Size Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Size Buttons</h4>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="btn-grp">
        <b-button size="sm" variant="primary">Small</b-button>
        <b-button variant="primary">Medium</b-button>
        <b-button size="lg" variant="primary">Large</b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "SizeButtons",

  data: () => ({}),
};
</script>