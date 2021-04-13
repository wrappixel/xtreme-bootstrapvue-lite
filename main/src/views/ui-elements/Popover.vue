<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicPopover />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <ProgrammaticallyShowHidePopover />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Popover",

  data: () => ({
    page: {
      title: "Popover",
    },
  }),
  components: {
    BasicPopover: () => import("@/components/ui/popover/BasicPopover"),
    ProgrammaticallyShowHidePopover: () =>
      import("@/components/ui/popover/ProgrammaticallyShowHidePopover"),
  },
};
</script>
