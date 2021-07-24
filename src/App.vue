<template>
  <div id ="app">
 <product_list_one ></product_list_one>
 <product_list_two ></product_list_two>
  </div>
</template>

<script>
import Productlistone from './components/Productlistone.vue'

import Productlissttwo from './components/Productlisttwo.vue'

export default {
  name: 'App',
  components: {
    "product_list_one":Productlistone,
    "product_list_two":Productlissttwo,
  },
  
}
</script>



<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>

