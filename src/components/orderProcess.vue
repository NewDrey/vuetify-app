<template>
    <v-container>
        <v-btn class="contactButton" @click = "showContactForm">Заказать</v-btn>
        <div id="regForm" v-show="isFormVisible" class="fullscreen-image" @click="hideContactForm"></div>
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

    </v-container>
</template>
<script>

    export default {
        name: 'orderProcess',
        data: () => {
        return {isFormVisible: false} 
        },

        methods: {
            showContactForm() {
                this.isFormVisible = true;
                document.body.style.overflow = "hidden";
            },
            hideContactForm() {
                this.isFormVisible = false;
                document.body.style.overflow = "auto";
            },
            submit() {
                var name = document.getElementById('nameField').value
                var phone = document.getElementById('phoneField').value
                var request = new XMLHttpRequest();
                request.open('POST', '/makeOrder', true)
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                request.setRequestHeader("charset", "utf-8");
                request.send('name='+name+'&phone='+phone)
                this.isFormVisible = false
            }
    }}
</script>