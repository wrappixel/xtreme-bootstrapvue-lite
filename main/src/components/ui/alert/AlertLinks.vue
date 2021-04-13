<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Alert Link Colors -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Alert Link Colors</h4>
          <b-card-text class="text-muted">
            Use the .alert-link utility CSS class to quickly provide matching
            colored links within any alert.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-alert show variant="primary" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="primary">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Primary Alert
        </a>
      </b-alert>
      <b-alert show variant="secondary" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="secondary">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Secondary Alert
        </a>
      </b-alert>
      <b-alert show variant="success" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="success">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Success Alert
        </a>
      </b-alert>
      <b-alert show variant="danger" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="danger">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Danger Alert
        </a>
      </b-alert>
      <b-alert show variant="warning" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="warning" class="text-white">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Warning Alert
        </a>
      </b-alert>
      <b-alert show variant="info" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="info">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Info Alert
        </a>
      </b-alert>
      <b-alert show variant="light" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="light">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Light Alert
        </a>
      </b-alert>
      <b-alert show variant="dark" class="bt-alert">
        <a href="#" class="alert-link d-flex align-items-center">
          <b-button variant="dark">
            <i class="mdi mdi-alert-circle"></i>
          </b-button>
          Dark Alert
        </a>
      </b-alert>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "AlertLinks",

  data: () => ({}),
};
</script>