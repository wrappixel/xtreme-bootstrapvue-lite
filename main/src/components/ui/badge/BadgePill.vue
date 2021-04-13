<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Pill badges -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Pill badges</h4>
          <b-card-text class="text-muted">
            Use the pill prop to make badges more rounded (with a larger
            border-radius and additional horizontal padding).
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-badge class="mr-1 px-2" pill variant="primary">Primary</b-badge>
      <b-badge class="mr-1 px-2" pill variant="secondary">Secondary</b-badge>
      <b-badge class="mr-1 px-2" pill variant="success">Success</b-badge>
      <b-badge class="mr-1 px-2" pill variant="danger">Danger</b-badge>
      <b-badge class="mr-1 px-2" pill variant="warning">Warning</b-badge>
      <b-badge class="mr-1 px-2" pill variant="info">Info</b-badge>
      <b-badge class="mr-1 px-2" pill variant="light">Light</b-badge>
      <b-badge class="mr-1 px-2" pill variant="dark">Dark</b-badge>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BadgePill",

  data: () => ({}),
};
</script>