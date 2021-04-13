<template>
  <b-row>
    <b-col cols="12" class="d-flex align-items-stretch">
      <BasicToasts />
    </b-col>
    <b-col cols="12" class="d-flex align-items-stretch">
      <ToastsDemand />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Toasts",

  data: () => ({
    page: {
      title: "Toasts",
    },
  }),
  components: {
    BasicToasts: () => import("@/components/ui/toasts/BasicToasts"),
    ToastsDemand: () => import("@/components/ui/toasts/ToastsDemand"),
  },
};
</script>
