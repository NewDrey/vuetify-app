<template>
  <!-- Сама карточка товара -->
  
  <v-container>
    
    <v-row> 
      <v-col class="col">
        <h1 class="productName">{{ productName }}</h1>
        <descriptionTabs/>
        <photoSlider/> 
        <h2 class="price">Стоимость: {{ price }}</h2>
      </v-col>
      
      <v-col class="col">
        <orderProcess/>
      </v-col>
    </v-row>
  </v-container>
</template>

  <script>
  import photoSlider from '@/components/photoSlider.vue'
  import orderProcess from '@/components/orderProcess.vue'
  import descriptionTabs from '@/components/descriptionTabs.vue'
  var price = '1 558 ₽'
  var productName = "SALVAS / Ласты для бассейна укороченные SALVAS F5 Fin. Италия"
  
  export default {
    name: 'ProductView',
    data: () => ({
      productName, price
    }), 
    components: {
        photoSlider, orderProcess, descriptionTabs 
      }
    }
  </script>