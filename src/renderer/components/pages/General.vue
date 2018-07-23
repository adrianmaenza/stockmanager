<template>
  
      <v-container
        fluid
        grid-list-lg
      >
        <h1 class="my-2">Welcome {{ name }}</h1>
        <v-divider class="mb-4"></v-divider>
        <v-layout row wrap>
          <v-flex md4 sm4 xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs12>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">250</div>
                      <div>Products</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn class="" color="success" block round v-on:click.stop="goTo('/products')" >More</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex md4 sm4 xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs12>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">21</div>
                      <div>Orders</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn v-on:click.stop="goTo('/orders')" color="success" block round>More</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex md4 sm4 xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout row>
                <v-flex xs12>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">70</div>
                      <div>Customers</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-btn class="" color="success" block round v-on:click.stop="goTo('/customers')" >More</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>
<script>
export default {
    data(){
        return {
            name: "Admin"
        }
    },
    methods: {
        goTo: function (path) {
            this.$router.push(path);
            // alert();
        },
    }
}
</script>
