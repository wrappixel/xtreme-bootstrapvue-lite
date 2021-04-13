<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Basic Breadcrumb -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Basic Breadcrumb</h4>
          <b-card-text class="text-muted">
            Items are rendered using :items prop. It can be an array of objects
            to provide link and active state.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-breadcrumb :items="items" class="bg-light rounded"></b-breadcrumb>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BreadcrumbBasic",

  data: () => ({
    items: [
      {
        text: "Admin",
        href: "#",
      },
      {
        text: "Manage",
        href: "#",
      },
      {
        text: "Library",
        active: true,
      },
    ],
  }),
};
</script>