<template>
  <v-app>
    
    <v-app-bar
      app
      color="orange"
    >
      <v-app-bar-img>
        <v-img alt="Girl in a jacket"
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
      <h1 class="productName">{{ productName }}</h1>

      <v-expansion-panels id="tabs" multiple>
        <v-expansion-panel
          title="Описание товара"
        > 
          <v-expansion-panel-text>{{productDescription}}</v-expansion-panel-text>
        
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-title>
              Технические характеристики
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div>
            <v-data-table id="table">
              <tr
                id = "row"
                v-for="item in productInfo.productInfo"
                :key="item.name"
              >
                <td class="leftTd">{{ item.name }}</td>
                <td class="rightTd">{{ item.value }}</td>
              </tr>
            </v-data-table>
          </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
      

      <v-carousel class="photoSlider"
      hide-delimiter-background
      delimiter-icon="mdi-square"
      v-model="currentIndex"
      
      >
        <v-carousel-item
          :key="i" v-for="i in 6"
          :currentIndex = i
          :src="require('./assets/pic'+ i +'.png')"
          @click= "showImage"
        ></v-carousel-item>

        <div v-show="isImageVisible" id='fullScreenDiv' class="fullscreen-image" @click="hideImage">
          <img id='fullScreenImage' :src="require('./assets/pic1.png')" alt="Full screen Image" />
        </div>
      </v-carousel>
      <v-btn class="contactButton" @click = "showContactForm">Заказать</v-btn>
      <div id="regForm" v-show="isFormVisible" class="fullscreen-image" @click="hideContactForm">
      </div>
      <div id="contactWindow" v-show="isFormVisible" class="contactWindow">
        <form @submit.prevent="submit">
          <div class="contactFormHeader">Закажите сейчас</div>
          <v-text-field
            id="nameField"
            class="contactFormField"
            placeholder="Как вас зовут"
            required
            >
          </v-text-field>
          <v-text-field
            id="phoneField"
            class="contactFormField"
            placeholder="Ваш номер телефона"
            required
            >
          </v-text-field>
          <v-btn
              type="submit" class="contactFormButton">Связаться
            </v-btn>
          </form>
        </div>
    </v-main>
    
  </v-app>
</template>

<script type="module">

import productInfo from "./assets/productInfo.json";
  var productName = "SALVAS / Ласты для бассейна укороченные SALVAS F5 Fin. Италия"
  var productDescription = "Короткие ласты для плавания SALVAS F5 Fin - предназначены для тренировок в бассейне, направленных на укрепление мышц нижней части тела. Помогают укрепить мышцы ног и усовершенствовать технику плавания. Данная модель обеспечивает пловцу высокую маневренность и позволяют развивать необходимое усилие для эффективных тренировок. Ласты применяются для отработки навыков плавания стилем кроль и для обучения волнообразным движениям в брассе и баттерфляе. Короткая лопасть, дополнительные ребра жесткости со вставкой из легкого и упругого материала Technoflex, калоша из мягкого TPR (термопластичная резина). Открытый носок для более удобного подбора размера."

  const submit = () => {
    var name = document.getElementById('nameField').value
    var phone = document.getElementById('phoneField').value
    var request = new XMLHttpRequest();
    request.open('POST', '/makeOrder', true)
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.setRequestHeader("charset", "utf-8");

    request.send('name='+name+'&phone='+phone)
  }
  export default {
    name: 'App',
    data() {
      return {productInfo, productDescription, 
        productName, isImageVisible: false, currentIndex: 0,
        isFormVisible: false, submit} 
    },

    methods: {
         showImage() {
          this.isImageVisible = true;
          console.log(this.currentIndex +1)
          document.getElementById('fullScreenImage').src= require('./assets/pic'+ (this.currentIndex+1) +'.png')
          document.body.style.overflow = "hidden"; // Disable scrolling
        },
         hideImage() {
          this.isImageVisible = false;
          document.body.style.overflow = "auto"; // Enable scrolling
        },
        showContactForm() {
          this.isFormVisible = true;
          document.body.style.overflow = "hidden";
        },
        hideContactForm() {
          this.isFormVisible = false;
          document.body.style.overflow = "auto";
        }

      }
  }
  
</script>
<style scoped>
 

</style>