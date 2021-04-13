<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Icon content -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Icon content</h4>
          <b-card-text class="text-muted">
            Easily use one of BootstrapVue's icons as the avatar content via the
            icon prop. The prop should be set to a valid icon name. Icons will
            scale respective to the size prop.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-avatar variant="info" class="text-white mr-2">
        <i class="mdi mdi-home-outline font-18"></i>
      </b-avatar>
      <b-avatar variant="primary" class="text-white mr-2">
        <i class="mdi mdi-home-outline font-18"></i>
      </b-avatar>
      <b-avatar variant="warning" class="text-white mr-2">
        <i class="mdi mdi-home-outline font-18"></i>
      </b-avatar>
      <b-avatar variant="dark" class="text-white mr-2">
        <i class="mdi mdi-home-outline font-18"></i>
      </b-avatar>
      <b-avatar variant="secondary" class="text-white mr-2">
        <i class="mdi mdi-home-outline font-18"></i>
      </b-avatar>
      <b-avatar variant="danger" class="text-white">
        <i class="mdi mdi-home-outline font-18"></i>
      </b-avatar>
      <div class="mt-2">
        <b-avatar variant="light-info" class="text-info mr-2">
          <i class="mdi mdi-home-outline font-18"></i>
        </b-avatar>
        <b-avatar variant="light-primary" class="text-primary mr-2">
          <i class="mdi mdi-home-outline font-18"></i>
        </b-avatar>
        <b-avatar variant="light-warning" class="text-warning mr-2">
          <i class="mdi mdi-home-outline font-18"></i>
        </b-avatar>
        <b-avatar variant="light-danger" class="text-danger mr-2">
          <i class="mdi mdi-home-outline font-18"></i>
        </b-avatar>
        <b-avatar variant="light-secondary" class="text-secondary mr-2">
          <i class="mdi mdi-home-outline font-18"></i>
        </b-avatar>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "AvatarIconContent",

  data: () => ({}),
};
</script>