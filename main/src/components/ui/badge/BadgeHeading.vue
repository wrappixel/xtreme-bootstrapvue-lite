<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Bagde with Heading -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Bagde with Heading</h4>
          <b-card-text class="text-muted">
            Badges scale to match the size of the immediate parent element by
            using relative font sizing and em units.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <h2>Example heading <b-badge>New</b-badge></h2>
      <h3>Example heading <b-badge>New</b-badge></h3>
      <h4>Example heading <b-badge>New</b-badge></h4>
      <h5>Example heading <b-badge>New</b-badge></h5>
      <h6>Example heading <b-badge>New</b-badge></h6>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BadgeHeading",

  data: () => ({}),
};
</script>