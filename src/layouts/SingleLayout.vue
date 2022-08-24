<template>
  <q-layout view="hHh lpR fFf">
    <HeaderSingle />
    <q-page-container style="background-color: #e5e5e5">
      <!-- <q-scroll-area class="fit"> -->
      <router-view />
      <!-- </q-scroll-area> -->
    </q-page-container>
  </q-layout>
  <!-- <DefaultSkaletron v-else /> -->
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import HeaderSingle from "src/components/Layout/HeaderSingle.vue";
import { onBeforeMount, ref } from "vue";
// import DefaultSkaletron from "../components/Loader/DefaultSkaletron.vue";
import { useAuthUserStore } from "../stores/AuthUserStore";

const $q = useQuasar();
const authUserStore = useAuthUserStore();

onBeforeMount(async () => {
  await authUserStore.getAuthUser();
});
</script>

<style lang="scss">
@import "src/css/main.scss";
</style>