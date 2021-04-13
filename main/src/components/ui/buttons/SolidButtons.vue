<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Solid Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Solid Buttons</h4>
          <b-card-text class="text-muted">
            Bootstrap includes six predefined button styles, each serving its
            own semantic purpose.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="btn-grp">
        <b-button variant="primary">Primary</b-button>
        <b-button variant="secondary">Secondary</b-button>
        <b-button variant="success">Success</b-button>
        <b-button variant="danger">Danger</b-button>
        <b-button variant="warning">Warning</b-button>
        <b-button variant="info">Info</b-button>
        <b-button variant="light">Light</b-button>
        <b-button variant="dark">Dark</b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "SolidButtons",

  data: () => ({}),
};
</script>