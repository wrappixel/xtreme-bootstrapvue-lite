<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Toasts on demand -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Toasts on demand</h4>
          <b-card-text class="text-muted">
            Generate a dynamic toast from anywhere in your app via the
            this.$bvToast Vue component instance injection
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="btn-grp">
        <b-button variant="primary" @click="makeToast()">Show Toast</b-button>
        <b-button variant="success" @click="makeToast(true)"
          >Show Toast (appended)</b-button
        >
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "ToastsDemand",

  data: () => ({
    toastCount: 0,
  }),

  methods: {
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: "BootstrapVue Toast",
        autoHideDelay: 5000,
        appendToast: append,
      });
    },
  },
};
</script>