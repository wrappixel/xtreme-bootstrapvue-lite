<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Dropdowns -->
  <!-- ----------------------------------------------------------------------------- -->
  <b-card class="w-100 mb-4" no-body>
    <div class="p-35">
      <div class="d-flex align-items-start">
        <div>
          <h4 class="card-title mb-1">Dropdowns</h4>
          <b-card-text class="text-muted">
            Dropdowns are toggleable, contextual overlays for displaying lists
            of links and actions in a dropdown menu format.
          </b-card-text>
        </div>
      </div>
    </div>
    <hr class="m-0" />
    <b-card-body>
      <div class="btn-grp">
        <b-dropdown
          variant="primary"
          id="dropdown-1"
          text="Primary Dropdown"
          class=""
        >
          <b-dropdown-item>First Action</b-dropdown-item>
          <b-dropdown-item>Second Action</b-dropdown-item>
          <b-dropdown-item>Third Action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item active>Active action</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
        <b-dropdown
          variant="info"
          id="dropdown-1"
          text="Info Dropdown"
          class=""
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
  name: "BasicDropdown",

  data: () => ({}),
};
</script>