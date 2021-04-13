<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Horizontal Card -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
    <h4 class="card-title mb-0 text-primary">Horizontal Card</h4>
    <div class="mt-4">
      <b-row>
        <b-col cols="12" md="6">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="img1"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
        <b-col cols="12" md="6">
          <b-card no-body class="overflow-hidden">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img
                  :src="img2"
                  alt="Image"
                  class="rounded-0"
                ></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body title="Horizontal Card">
                  <b-card-text>
                    This is a wider card with supporting text as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import img1 from "../../../assets/images/big/img1.jpg";
import img2 from "../../../assets/images/big/img2.jpg";

export default {
  name: "HorizontalCard",

  data: () => ({ img1, img2 }),
  components: {},
};
</script>