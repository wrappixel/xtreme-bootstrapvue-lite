<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdown Size -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Dropdown Size</h4>
          <b-card-text class="text-muted">
            Dropdowns work with trigger buttons of all sizes, including default
            and split dropdown buttons.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="btn-grp">
        <div>
          <b-dropdown variant="primary" size="lg" text="Large">
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button>Something else here</b-dropdown-item-button>
          </b-dropdown>

          <b-dropdown
            variant="primary"
            size="lg"
            split
            text="Large Split"
            class="custom-dropdown"
          >
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button
              >Something else here...</b-dropdown-item-button
            >
          </b-dropdown>
        </div>
        <div>
          <b-dropdown variant="primary" size="sm" text="Small">
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button
              >Something else here...</b-dropdown-item-button
            >
          </b-dropdown>

          <b-dropdown
            variant="primary"
            size="sm"
            split
            text="Small Split"
            class="custom-dropdown"
          >
            <b-dropdown-item-button>Action</b-dropdown-item-button>
            <b-dropdown-item-button>Another action</b-dropdown-item-button>
            <b-dropdown-item-button
              >Something else here...</b-dropdown-item-button
            >
          </b-dropdown>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "DropdownSize",

  data: () => ({}),
};
</script>