<template>
    <v-container>
        <v-carousel class="photoSlider"
            hide-delimiter-background
            delimiter-icon="mdi-square"
            v-model="currentIndex"
      >
        <v-carousel-item
          :key="i" v-for="i in 6"
          :currentIndex = i
          :src="require('../assets/pic'+ i +'.png')"
          @click= "showImage"
        ></v-carousel-item>

        <div v-show="isImageVisible" id='fullScreenDiv' class="fullscreen-image" @click="hideImage">
          <img id='fullScreenImage' :src="require('../assets/pic1.png')" alt="Full screen Image" />
        </div>
      </v-carousel>
    </v-container>
</template>

<script>
    export default {
        name: 'photoSlider',
        data: () => {
        return {isImageVisible: false, currentIndex: 0} 
        },

        methods: {
            showImage() {
                this.isImageVisible = true;
                console.log(this.currentIndex +1)
                document.getElementById('fullScreenImage').src= require('./../assets/pic'+ (this.currentIndex+1) +'.png')
                document.body.style.overflow = "hidden"; // Disable scrolling
            },
            hideImage() {
                this.isImageVisible = false;
                document.body.style.overflow = "auto"; // Enable scrolling
            },
        }
    }
</script>