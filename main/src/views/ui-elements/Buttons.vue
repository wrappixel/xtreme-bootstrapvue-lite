<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <SolidButtons />
    </b-col>

    <b-col cols="12" class="d-flex align-items-stretch">
      <SquareButtons />
    </b-col>
    <b-col cols="12" md="4" xl="4" class="d-flex align-items-stretch">
      <BlockButtons />
    </b-col>
    <b-col cols="12" md="4" xl="4" class="d-flex align-items-stretch">
      <SizeButtons />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Buttons",

  data: () => ({
    page: {
      title: "Buttons",
    },
  }),
  components: {
    SolidButtons: () => import("@/components/ui/buttons/SolidButtons"),

    SquareButtons: () => import("@/components/ui/buttons/SquareButtons"),
    BlockButtons: () => import("@/components/ui/buttons/BlockButtons"),
    SizeButtons: () => import("@/components/ui/buttons/SizeButtons"),
  },
};
</script>
