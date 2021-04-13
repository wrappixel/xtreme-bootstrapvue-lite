<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Split Dropdown -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Split Dropdown</h4>
          <b-card-text class="text-muted">
            Create a split dropdown button, where the left button provides
            standard click event and link support, while the right hand side is
            the dropdown menu toggle button.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="btn-grp">
        <b-dropdown
          split
          variant="primary"
          id="dropdown-1"
          text="Split Dropdown"
          class="custom-dropdown"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          split
          variant="info"
          id="dropdown-1"
          text="Split Dropdown"
          class="custom-dropdown"
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: "SliptDropdown",

  data: () => ({}),
};
</script>