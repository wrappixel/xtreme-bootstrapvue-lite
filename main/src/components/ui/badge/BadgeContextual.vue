<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Contextual variations -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Contextual variations</h4>
          <b-card-text class="text-muted">
            Add any of the following variants via the variant prop to change the
            appearance of a b-badge: default, primary, success, warning, info,
            and danger. If no variant is specified default will be used.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-badge class="mr-1" variant="primary">Primary</b-badge>
      <b-badge class="mr-1" variant="secondary">Secondary</b-badge>
      <b-badge class="mr-1" variant="success">Success</b-badge>
      <b-badge class="mr-1" variant="danger">Danger</b-badge>
      <b-badge class="mr-1" variant="warning">Warning</b-badge>
      <b-badge class="mr-1" variant="info">Info</b-badge>
      <b-badge class="mr-1" variant="light">Light</b-badge>
      <b-badge class="mr-1" variant="dark">Dark</b-badge>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BadgeContextual",

  data: () => ({}),
};
</script>