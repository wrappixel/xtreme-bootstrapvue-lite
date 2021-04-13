<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Contextual variants -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Contextual variants</h4>
          <b-card-text class="text-muted">
            For proper styling of , use one of the four required contextual
            variants by setting the variant prop to one of the following: info,
            success, warning or danger. The default is info.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-alert
        class="d-flex align-items-center bt-alert"
        show
        variant="primary"
      >
        <b-button variant="primary">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>

        An informational alert
      </b-alert>
      <b-alert
        class="d-flex align-items-center bt-alert"
        show
        variant="secondary"
      >
        <b-button variant="secondary">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A secondary alert
      </b-alert>
      <b-alert
        class="d-flex align-items-center bt-alert"
        show
        variant="success"
      >
        <b-button variant="success">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A successful alert
      </b-alert>
      <b-alert class="d-flex align-items-center bt-alert" show variant="danger">
        <b-button variant="danger">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A destructive alert
      </b-alert>
      <b-alert
        class="d-flex align-items-center bt-alert"
        show
        variant="warning"
      >
        <b-button variant="warning" class="text-white">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A warning alert
      </b-alert>
      <b-alert class="d-flex align-items-center bt-alert" show variant="info">
        <b-button variant="info">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A information alert
      </b-alert>
      <b-alert
        class="d-flex align-items-center bt-alert bg-light"
        show
        variant="light"
      >
        <b-button variant="light">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A light alert
      </b-alert>
      <b-alert class="d-flex align-items-center bt-alert" show variant="dark">
        <b-button variant="dark">
          <i class="mdi mdi-alert-circle"></i>
        </b-button>
        A dark alert
      </b-alert>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "AlertContextual",

  data: () => ({}),
};
</script>