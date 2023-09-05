<template>
  <v-app>
    
    <v-app-bar
      app
      color="orange"
    >
    <v-app-bar-img>
        <v-img
        :width="90"
        aspect-ratio="16/9"
        cover 
        style="margin-left: 10%"
        src="https://cdn-icons-png.flaticon.com/512/2361/2361624.png">
        </v-img>
      </v-app-bar-img>
      <v-app-bar-title>
        <h3>Диванный магазин</h3>
      </v-app-bar-title>
    </v-app-bar>
    
    <v-main>
      <router-view></router-view>
    </v-main>
    
  </v-app>
</template>
<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
</style>