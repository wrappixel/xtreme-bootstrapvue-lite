<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Toasts -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Toasts</h4>
          <b-card-text class="text-muted">
            Push notifications to your visitors with a b-toast and b-toaster,
            lightweight components which are easily customizable for generating
            alert messages.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="p-3 bg-light progress-bar-striped" style="min-height: 170px">
        <b-button
          class="mb-2"
          variant="primary"
          @click="$bvToast.show('example-toast')"
        >
          Show Toast
        </b-button>
        <b-toast id="example-toast" title="BootstrapVue" static no-auto-hide>
          Hello, world! This is a toast message.
        </b-toast>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "BasicToasts",

  data: () => ({}),
};
</script>