<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Manually placed items -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Manually placed items</h4>
          <b-card-text class="text-muted">
            You may also manually place individual b-breadcrumb-item child
            components in the default slot of the b-breadcrumb component, as an
            alternative to using the items prop, for greater control over the
            content of each item:
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-breadcrumb class="bg-light rounded">
        <b-breadcrumb-item href="#home">
          <div class="d-flex align-items-center">
            <i type="home" class="feather-sm mr-1"></i>
          </div>
        </b-breadcrumb-item>
        <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
        <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
        <b-breadcrumb-item active>Baz</b-breadcrumb-item>
      </b-breadcrumb>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BreadcrumbManualAddedItems",

  data: () => ({}),
};
</script>