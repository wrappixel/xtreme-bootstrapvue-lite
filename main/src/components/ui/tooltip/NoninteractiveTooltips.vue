<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Noninteractive tooltips -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Noninteractive tooltips</h4>
          <b-card-text class="text-muted">
            To restore Bootstraps default behavior apply the noninteractive prop
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="text-center btn-grp">
        <div>
          <b-button variant="primary" id="tooltip-button-interactive"
            >My tooltip is interactive</b-button
          >
          <b-tooltip target="tooltip-button-interactive"
            >I will stay open when hovered</b-tooltip
          >
          <b-button variant="info" id="tooltip-button-not-interactive"
            >Mine is not...</b-button
          >
          <b-tooltip target="tooltip-button-not-interactive" noninteractive
            >Catch me if you can!</b-tooltip
          >
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "NoninteractiveTooltips",

  data: () => ({}),
};
</script>