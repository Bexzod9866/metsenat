<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginLayout",
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.login-card {
  width: 100%;
  border-radius: 5px;
}
@media screen and (min-width: 768px) {
  .login-card {
    width: 450px;
  }
}
</style>
