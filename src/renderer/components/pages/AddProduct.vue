<template>
    <v-container>
        <h1>Add a new item</h1>
        <v-divider class="my-3"></v-divider>
        <v-card>
            <v-card-text>
                <v-form v-model="valid">

                    <v-text-field
                        v-model="name"
                        label="Name"
                        required
                        ></v-text-field>

                    <v-text-field
                        v-model="brand"
                        label="Brand"
                        required
                        ></v-text-field>

                    <v-text-field
                        v-model="price"
                        label="Price"
                        required
                        ></v-text-field>

                    <v-text-field
                        v-model="quantity"
                        label="Quantity"
                        required
                        ></v-text-field>

                    <v-text-field
                        v-model="type"
                        label="Type"
                        required
                        ></v-text-field>

                    <v-text-field
                        v-model="supplier"
                        label="Supplier"
                        required
                        ></v-text-field>

                    <v-textarea
                        v-model="description"
                        
                        label="Description"
                        auto-grow
                        ></v-textarea>

                </v-form>

            </v-card-text>
            <v-card-actions>
                <v-btn color="yellow" @click="back">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn dark color="green" @click="save">Add</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>
<script>
const electron = require('electron');
const {ipcRenderer} = electron;
let router;
ipcRenderer.on('product:saved', (data) => {
    console.log(`Product saved ${data}`);
    // redirect to products page
    router.push({path: '/products'});
});

const instance = {
    data() {
        return {
            name: '',
            brand: '',
            price: null,
            quantity: null,
            type: '',
            supplier: '',
            description : '',
        }
    },
    methods: {
        back: function () {
            this.$router.push('/products');
        },
        save: function () {
            let product = {
                name: this.name,
                brand: this.brand,
                price: this.price,
                quantity: this.quantity,
                type: this.type,
                supplier: this.supplier,
                description: this.description
            };

            console.log(product);

            ipcRenderer.send('product:save', product);
        }

    }, created(){
        router = this.$router;
        alert();
    }
}

export default instance;
</script>

