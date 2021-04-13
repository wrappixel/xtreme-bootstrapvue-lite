<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Multi-line text -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Multi-line text</h4>
          <b-card-text class="text-muted">
            Use the default slot to render custom content in the avatar, for
            finer grained control of its appearance, or if using custom icons or
            SVGs e.g.:
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-avatar variant="info" size="4em" class="mr-2"
        >Hello<br />World</b-avatar
      >
      <b-avatar variant="primary" size="4em" class="mr-2"
        >你好<br />世界</b-avatar
      >
      <b-avatar variant="danger" size="4em" class="mr-2"
        >Hello<br />World</b-avatar
      >
      <b-avatar variant="secondary" size="4em" class="mr-2"
        >Hello<br />World</b-avatar
      >
      <b-avatar variant="warning" size="4em">你好<br />世界</b-avatar>
      <div class="mt-2">
        <b-avatar variant="light-info" size="4em" class="mr-2 text-info"
          >Hello<br />World</b-avatar
        >
        <b-avatar variant="light-primary" size="4em" class="mr-2 text-primary"
          >你好<br />世界</b-avatar
        >
        <b-avatar variant="light-danger" size="4em" class="mr-2 text-danger"
          >Hello<br />World</b-avatar
        >
        <b-avatar
          variant="light-secondary"
          size="4em"
          class="mr-2 text-secondary"
          >Hello<br />World</b-avatar
        >
        <b-avatar variant="light-warning" size="4em" class="text-warning"
          >你好<br />世界</b-avatar
        >
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "AvatarMultilineText",

  data: () => ({}),
};
</script>