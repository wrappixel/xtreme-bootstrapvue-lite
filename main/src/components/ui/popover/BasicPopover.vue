<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Popover -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Popover</h4>
          <b-card-text class="text-muted">
            The Popover feature, which provides a tooltip-like behavior, can be
            easily applied to any interactive element via the b-popover
            component or v-b-popover directive.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <h5 class="my-3">Placement</h5>
      <b-row>
        <b-col
          v-for="placement in placements"
          :key="placement"
          md="4"
          xl="2"
          class="py-4 text-center"
        >
          <b-button :id="`popover-1-${placement}`" variant="primary">{{
            placement
          }}</b-button>
          <b-popover
            :target="`popover-1-${placement}`"
            :placement="placement"
            title="Popover!"
            triggers="hover focus"
            :content="`Placement ${placement}`"
          ></b-popover>
        </b-col>
      </b-row>

      <h5 class="my-3">Content via properties or slots</h5>
      <b-row>
        <b-col md="6" xl="2" class="py-4 text-center">
          <b-button id="popover-2" variant="primary">Using properties</b-button>
          <b-popover
            target="popover-2"
            title="Prop Examples"
            triggers="hover focus"
            content="Embedding content using properties is easy"
          ></b-popover>
        </b-col>

        <b-col md="6" class="py-4 text-center">
          <b-button id="popover-3" variant="primary">Using slots</b-button>
          <b-popover target="popover-3" triggers="hover focus">
            <template #title>Content via Slots</template>
            Embedding content
            <span class="text-danger">using slots</span> affords you
            <em>greater <strong>control.</strong></em> and basic HTML support.
          </b-popover>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BasicPopover",

  data: () => ({
    placement: "",
    placements: [
      "topright",
      "top",
      "topleft",
      "bottomright",
      "bottom",
      "bottomleft",
      "righttop",
      "right",
      "lefttop",
      "rightbottom",
      "left",
      "leftbottom",
    ],
  }),
};
</script>