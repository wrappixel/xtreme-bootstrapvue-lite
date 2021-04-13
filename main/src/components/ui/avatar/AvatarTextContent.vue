<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Text content -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Text content</h4>
          <b-card-text class="text-muted">
            You can specify a short string as the content of an avatar via the
            text prop. The string should be short (1 to 3 characters), and will
            be transformed via CSS to be all uppercase. The font size will be
            scaled relative to the size prop setting.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-avatar
        class="mr-2 text-info"
        variant="light-info"
        text="BV"
        size="30px"
      ></b-avatar>
      <b-avatar
        class="mr-2 text-primary"
        variant="light-primary"
        text="a"
        size="40px"
      ></b-avatar>
      <b-avatar
        class="mr-2 text-danger"
        variant="light-danger"
        text="Foo"
        size="50px"
      ></b-avatar>
      <b-avatar
        class="mr-2 text-warning"
        variant="light-warning"
        text="BV"
        size="60px"
      ></b-avatar>
      <div class="mt-2">
        <b-avatar class="mr-2" variant="info" text="BV" size="30px"></b-avatar>
        <b-avatar
          class="mr-2"
          variant="primary"
          text="a"
          size="40px"
        ></b-avatar>
        <b-avatar
          class="mr-2"
          variant="danger"
          text="Foo"
          size="50px"
        ></b-avatar>
        <b-avatar
          class="mr-2"
          variant="warning"
          text="BV"
          size="60px"
        ></b-avatar>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "AvatarTextContent",

  data: () => ({}),
};
</script>