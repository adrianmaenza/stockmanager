<template>
    <v-app>
        <v-toolbar 
          dark
          color="primary">
            <v-toolbar-side-icon v-on:click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer"
        absolute
        temporary>
          <v-toolbar flat>
            <v-list>
              <v-list-tile>
                <v-list-tile-title class="title">
                  Menu
                </v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-toolbar>

          <v-divider></v-divider>

          <v-list dense class="pt-0">
            <v-list-tile
              v-for="item in items"
              v-bind:key="item.title"
              :to="{path: item.path}"
            >
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                {{ item.title }}
              </v-list-tile-content>
            </v-list-tile>
            
            <v-list-tile
              v-on:click.stop="quit"
            >
              <v-list-tile-action>
                <v-icon>power_settings_new</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                Exit App
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-navigation-drawer>
        <router-view class="secondary lighten-3"></router-view>
    </v-app>
</template>
<script>
const electron = require("electron");
const {ipcRenderer} = electron;

  export default {
    data: () => ({
      items: [
          { title: 'General', icon: 'dashboard', path: '/' },
          { title: 'Products', icon: 'shopping_basket', path: '/products' },
          { title: 'Orders', icon: 'shopping_cart', path: '/orders' },
          { title: 'Customers', icon: 'people', path: '/customers' },
          { title: 'Sales', icon: 'shopping_cart', path: '/sales' },
        ],
        right: null,
        drawer: null,
        title: `Stock Manager`
    }),
    props: {
      source: String
    },
    methods: {
      quit: () => {
        ipcRenderer.send('application:quit', (err) => console.log(err));
      }
    }
  }
</script>

