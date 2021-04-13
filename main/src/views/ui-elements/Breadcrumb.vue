<template>
  <b-row>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BreadcrumbBasic />
    </b-col>
    <b-col cols="12" md="6" class="d-flex align-items-stretch">
      <BreadcrumbManualAddedItems />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Breadcrumb",

  data: () => ({
    page: {
      title: "Breadcrumb",
    },
  }),
  components: {
    BreadcrumbBasic: () => import("@/components/ui/breadcrumb/BreadcrumbBasic"),

    BreadcrumbManualAddedItems: () =>
      import("@/components/ui/breadcrumb/BreadcrumbManualAddedItems"),
  },
};
</script>
