<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <AlertContextual />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <AlertLinks />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <AlertDismissible />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Alerts",

  data: () => ({
    page: {
      title: "Alerts",
    },
  }),
  components: {
    AlertContextual: () => import("@/components/ui/alert/AlertContextual"),
    AlertLinks: () => import("@/components/ui/alert/AlertLinks"),
    AlertDismissible: () => import("@/components/ui/alert/AlertDismissible"),
  },
};
</script>
