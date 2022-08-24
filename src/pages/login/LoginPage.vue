<template>
  <q-page class="row q-pa-xl content-center items-center justify-evenly">
    <q-card
      class="login-card shdw q-px-xl q-pb-xl q-pt-md"
      style="border-radius: 12px"
    >
      <h5 class="text-h5 q-mt-sm text-weight-bold q-mb-md">Kirish</h5>
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="text-weight-bold q-mt-xl">LOGIN</div>
        <q-input
          class="q-my-none"
          outlined
          v-model="username"
          type="text"
          placeholder="login"
          lazy-rules
        >
        </q-input>
        <div class="text-weight-bold q-mt-xl">PAROL</div>
        <q-input
          class="q-my-none"
          outlined
          v-model="password"
          placeholder="Пароль"
          lazy-rules
          :type="isPwd ? 'password' : 'text'"
          :rules="passwordRules"
          autocomplete="password"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-card-section class="text-center q-pa-none text-right">
          <!-- <router-link class="text-primary" to="/auth/reset"
            >Забыли пароль?</router-link
          > -->
        </q-card-section>
        <div>
          <q-btn
            label="Kirish"
            type="submit"
            :loading="loading"
            :disable="loading"
            no-caps
            class="btn-submit full-width q-py-sm"
            color="primary"
          />
        </div>
      </q-form>
    </q-card>
  </q-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useMeta } from "quasar";
import { useAuthUserStore } from "src/stores/AuthUserStore";
import { ref } from "vue";

const username = ref("metsenatadmin");
const password = ref("uF9aH1vZ3bV2kN2y");
const isPwd = ref(true);
const authUserStore = useAuthUserStore();
const { loading } = storeToRefs(authUserStore);

const passwordRules = [
  (val) => (val && val.length >= 4) || "Введите пароль не менее 4 символов",
];

useMeta({
  title: "Авторизация в системе " + process.env.APP_NAME,
});

function onSubmit() {
  var formData = {
    username: username.value,
    password: password.value,
  };
  authUserStore.login(formData);
}
</script>
