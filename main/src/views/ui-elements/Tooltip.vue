<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicTooltip />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <NoninteractiveTooltips />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Tooltip",

  data: () => ({
    page: {
      title: "Tooltip",
    },
  }),
  components: {
    BasicTooltip: () => import("@/components/ui/tooltip/BasicTooltip"),
    NoninteractiveTooltips: () =>
      import("@/components/ui/tooltip/NoninteractiveTooltips"),
  },
};
</script>
