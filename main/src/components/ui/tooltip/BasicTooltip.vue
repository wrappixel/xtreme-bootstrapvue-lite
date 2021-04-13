<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Tooltips -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Tooltips</h4>
          <b-card-text class="text-muted">
            Easily add tooltips to elements or components via the b-tooltip
            component or v-b-tooltip directive
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="text-center btn-grp">
        <b-button
          variant="primary"
          v-b-tooltip.hover
          title="Tooltip directive content"
        >
          Hover Me
        </b-button>

        <b-button variant="info" id="tooltip-target-1"> Hover Me </b-button>
        <b-tooltip target="tooltip-target-1" triggers="hover">
          I am tooltip <b>component</b> content!
        </b-tooltip>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BasicTooltip",

  data: () => ({}),
};
</script>