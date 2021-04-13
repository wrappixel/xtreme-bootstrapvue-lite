<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicButtonGroup />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <SizeButtonGroup />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ButtonGroup",

  data: () => ({
    page: {
      title: "ButtonGroup",
    },
  }),
  components: {
    BasicButtonGroup: () =>
      import("@/components/ui/button-group/BasicButtonGroup"),
    SizeButtonGroup: () =>
      import("@/components/ui/button-group/SizeButtonGroup"),
  },
};
</script>
