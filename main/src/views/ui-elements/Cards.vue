<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardImg />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <CardImgPosition />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <HorizontalCard />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Cards",

  data: () => ({
    page: {
      title: "Cards",
    },
  }),
  components: {
    CardImg: () => import("@/components/ui/card/CardImg"),
    CardImgPosition: () => import("@/components/ui/card/CardImgPosition"),

    HorizontalCard: () => import("@/components/ui/card/HorizontalCard"),
  },
};
</script>
