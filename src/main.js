import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from "vuex";
// import axios from "axios";

const store = createStore({
    state() {
        return {
            products :[
                {id:1,name:"Banana",price:30},
                {id:2,name:"Wine",price:100},
                {id:3,name:"Hoodie",price:450},
                {id:4,name:"Noodles",price:50},
            ]
        }
        
    },
    getters: {
        saleProducts: (state) => {
            var saleProducts = state.products.map( product => {
                return {
                    name:  '**' + product.name + '**',
                    price: product.price / 2,
                };
            });
            return saleProducts;
        }
    },
    mutations: {
        reducePrice: (state,payload) => {
            state.products.forEach( product => {
                product.price -= payload
            });
        }
    },
    actions:{
        reducePrice: (context,payload) =>{
            setTimeout(function(){ // reach out for data
                context.commit('reducePrice', payload);
            }, 2000);
        }

    }
    
})

const app = createApp(App)

app.use(store)

app.mount('#app')