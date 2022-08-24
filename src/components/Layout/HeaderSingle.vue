<template>
  <div>
    <q-header class="text-grey-8" height-hint="64">
      <div class="bg-white">
        <q-toolbar class="GNL__toolbar container">
          <div class="gt-sm flex items-center">
            <q-toolbar-title
              v-if="$q.screen.gt.xs"
              shrink
              class="row items-center no-wrap"
            >
              <span class="q-ml-sm"
                ><img src="src/assets/icon/logo.png" alt=""
              /></span>
            </q-toolbar-title>
          </div>
          <q-space />
          <!-- profile -->
          <q-btn no-caps unelevated class="q-mr-lg">
            <q-icon name="logout" />
          </q-btn>
        </q-toolbar>
      </div>
    </q-header>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
import { useAuthUserStore } from "src/stores/AuthUserStore";
import { ref } from "vue";
import { useRoute } from "vue-router";

const $q = useQuasar();
const $route = useRoute();
const authUserStore = useAuthUserStore();
const { user } = storeToRefs(authUserStore);
const { logout } = authUserStore;
</script>


