<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Image content -->
  <!-- ----------------------------------------------------------------------------- -->

  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Image content</h4>
          <b-card-text class="text-muted">
            Use the src prop to specify a URL of an image to use as the avatar
            content. The image should have an aspect ratio of 1:1 (meaning the
            width and height should be equal), otherwise image aspect distortion
            will occur. The image will be scaled up or down to fit within the
            avatar's bounding box.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <b-avatar :src="img1" class="mr-2" variant="none"></b-avatar>
      <b-avatar :src="img2" variant="none" size="30px"></b-avatar>
    </b-card-body>
  </b-card>
</template>

<script>
import img1 from "../../../assets/images/users/1.jpg";
import img2 from "../../../assets/images/users/2.jpg";

export default {
  name: "AvatarImageContent",

  data: () => ({
    img1,
    img2,
  }),
};
</script>