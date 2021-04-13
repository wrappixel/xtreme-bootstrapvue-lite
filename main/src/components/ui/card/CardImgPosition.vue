<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card with Image Position -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
    <!-- --------------------------
    code view
    ---------------------------- -->
    <h4 class="card-title mb-0 text-primary">Card with Image Position</h4>
    <div class="mt-4">
      <b-row>
        <b-col cols="12" md="8" class="d-flex align-items-stretch">
          <b-card-group deck>
            <b-card
              title="Image Top"
              class="mb-4"
              img-src="@/assets/images/background/weatherbg.jpg"
              img-alt="Card image"
              img-top
            >
              <b-card-text>
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </b-card-text>
            </b-card>

            <b-card
              title="Image Bottom"
              class="mb-4"
              img-src="@/assets/images/background/weatherbg.jpg"
              img-alt="Card image"
              img-bottom
            >
              <b-card-text>
                Some quick example text to build on the card and make up the
                bulk of the card's content.
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card
            title="Image Top"
            class="mb-4"
            img-src="@/assets/images/background/weatherbg.jpg"
            img-alt="Card image"
            img-top
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" lg="6" class="d-flex align-items-stretch">
          <b-card
            img-src="@/assets/images/background/user-info.jpg"
            img-alt="Card image"
            img-left
            class="mb-4 flex-column flex-md-row"
            title="Image Left"
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
        <b-col cols="12" lg="6" class="d-flex align-items-stretch">
          <b-card
            img-src="@/assets/images/background/user-info.jpg"
            img-alt="Card image"
            img-right
            class="mb-4 flex-column-reverse flex-md-row-reverse"
            title="Image Right"
          >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk
              of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardImgPosition",

  data: () => ({}),
  components: {},
};
</script>