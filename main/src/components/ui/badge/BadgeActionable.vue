<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Actionable badges -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Actionable badges</h4>
          <b-card-text class="text-muted">
            Quickly provide actionable badges with hover and focus states by
            specifying either the href prop (links) or to prop (router-links):
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-badge class="mr-1" href="#" variant="primary">Primary</b-badge>
      <b-badge class="mr-1" href="#" variant="secondary">Secondary</b-badge>
      <b-badge class="mr-1" href="#" variant="success">Success</b-badge>
      <b-badge class="mr-1" href="#" variant="danger">Danger</b-badge>
      <b-badge class="mr-1" href="#" variant="warning">Warning</b-badge>
      <b-badge class="mr-1" href="#" variant="info">Info</b-badge>
      <b-badge class="mr-1" href="#" variant="light">Light</b-badge>
      <b-badge class="mr-1" href="#" variant="dark">Dark</b-badge>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BadgeActionable",

  data: () => ({}),
};
</script>