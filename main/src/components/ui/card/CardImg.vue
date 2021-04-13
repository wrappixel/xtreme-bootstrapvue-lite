<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Card with Image -->
  <!-- ----------------------------------------------------------------------------- -->
  <div class="w-100 mb-4">
    <!-- --------------------------
    code view
    ---------------------------- -->

    <h4 class="card-title mb-0 text-primary">Card with Image</h4>

    <!-- --------------------------
    code view
    ---------------------------- -->
    <div class="mt-4">
      <b-row>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card
            title="Card Title"
            img-src="@/assets/images/big/img1.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Learn More</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card
            title="Card Title"
            img-src="@/assets/images/big/img2.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Learn More</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" md="4" class="d-flex align-items-stretch">
          <b-card
            title="Card Title"
            img-src="@/assets/images/big/img3.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Learn More</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardImg",

  data: () => ({}),
  components: {},
};
</script>