<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Square Buttons -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Square Buttons</h4>
          <b-card-text class="text-muted">
            Use a prop squared to quickly create a square button.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="btn-grp">
        <b-button squared variant="primary">Primary</b-button>
        <b-button squared variant="secondary">Secondary</b-button>
        <b-button squared variant="success">Success</b-button>
        <b-button squared variant="danger">Danger</b-button>
        <b-button squared variant="warning">Warning</b-button>
        <b-button squared variant="info">Info</b-button>
        <b-button squared variant="light">Light</b-button>
        <b-button squared variant="dark">Dark</b-button>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "SquareButtons",

  data: () => ({}),
};
</script>