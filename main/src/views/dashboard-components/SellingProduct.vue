<template>
  <div class="table-responsive">
    <table class="table v-middle text-nowrap bg-transparent">
      <thead class="bg-light">
        <tr class>
          <th class="border-0">Products</th>
          <th class="border-0">License</th>
          <th class="border-0">Support Agent</th>
          <th class="border-0">Technology</th>
          <th class="border-0">Tickets</th>
          <th class="border-0">Sales</th>
          <th class="border-0">Earnings</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <b-avatar variant="primary" text="EA" />
              </div>
              <div class>
                <h5 class="mb-0">Elite Admin</h5>
              </div>
            </div>
          </td>
          <td>Single Use</td>
          <td>John Doe</td>
          <td>
            <b-badge variant="danger" class="rounded-0">Angular</b-badge>
          </td>
          <td>46</td>
          <td>356</td>
          <td>
            <h5 class="mb-0">$2850.06</h5>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <b-avatar variant="danger" text="MA" />
              </div>
              <div class>
                <h5 class="mb-0">Monster Admin</h5>
              </div>
            </div>
          </td>
          <td>Single Use</td>
          <td>Venessa Fern</td>
          <td>
            <b-badge variant="info" class="rounded-0">Vue Js</b-badge>
          </td>
          <td>46</td>
          <td>356</td>
          <td>
            <h5 class="mb-0">$2850.06</h5>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <b-avatar variant="info" text="MP" />
              </div>
              <div class>
                <h5 class="mb-0">Material Pro Admin</h5>
              </div>
            </div>
          </td>
          <td>Single Use</td>
          <td>John Doe</td>
          <td>
            <b-badge variant="success" class="rounded-0">Bootstrap</b-badge>
          </td>
          <td>46</td>
          <td>356</td>
          <td>
            <h5 class="mb-0">$2850.06</h5>
          </td>
        </tr>
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <div class="mr-2">
                <b-avatar variant="success" text="AA" />
              </div>
              <div class>
                <h5 class="mb-0">Ample Admin</h5>
              </div>
            </div>
          </td>
          <td>Single Use</td>
          <td>John Doe</td>
          <td>
            <b-badge variant="warning" class="rounded-0">React</b-badge>
          </td>
          <td>46</td>
          <td>356</td>
          <td>
            <h5 class="mb-0">$2850.06</h5>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
	name:"SellingProduct",
    components: {}
}    
</script>