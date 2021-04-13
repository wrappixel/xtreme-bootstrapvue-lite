<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dismissible alerts -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Dismissible alerts</h4>
          <b-card-text class="text-muted">
            Using the dismissible prop it's possible to dismiss any b-alert
            inline. This will add a close X button. Use the dismiss-label prop
            to change the hidden label text associated with the dismiss button.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-alert
        variant="primary"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="primary">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A informational alert
      </b-alert>
      <b-alert
        variant="secondary"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="secondary">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A secondary alert
      </b-alert>
      <b-alert
        variant="success"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="success">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A successful alert
      </b-alert>
      <b-alert
        variant="danger"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="danger">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A destructive alert
      </b-alert>
      <b-alert
        variant="warning"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="warning" class="text-white">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A warning alert
      </b-alert>
      <b-alert
        variant="info"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="info">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A informational alert
      </b-alert>
      <b-alert
        variant="light"
        class="d-flex align-items-center bt-alert bg-light"
        show
        dismissible
      >
        <b-button variant="light">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A light alert
      </b-alert>
      <b-alert
        variant="dark"
        class="d-flex align-items-center bt-alert"
        show
        dismissible
      >
        <b-button variant="dark">
          <i class="mdi mdi-alert-octagon"></i>
        </b-button>
        A dark alert
      </b-alert>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "AlertDismissible",

  data: () => ({}),
};
</script>