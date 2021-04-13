<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BadgeHeading />
    </b-col>

    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BadgeContextual />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BadgePill />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BadgeActionable />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Badge",

  data: () => ({
    page: {
      title: "Badge",
    },
  }),
  components: {
    BadgeHeading: () => import("@/components/ui/badge/BadgeHeading"),
    BadgeContextual: () => import("@/components/ui/badge/BadgeContextual"),
    BadgePill: () => import("@/components/ui/badge/BadgePill"),
    BadgeActionable: () => import("@/components/ui/badge/BadgeActionable"),
  },
};
</script>
