<!-- Компоненты кнопки и формы заказа -->

<template>
    <v-container>

        <!-- Кнопка заказа -->
        <v-btn class="contactButton" @click = "showContactForm">Заказать</v-btn>

        <!-- Блок затемнения и форма заказа, на данный момент post запрос уходит в пустоту и получает 404, в дальнейшем можно привязать mailer и закрывать форму только
        при 200 статусе, при ином выдавать ошибку -->
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

                <!-- Поле ввода телефона явно требует маски, пока не успел найти подходящую библиотеку для Vuetify 3 -->
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