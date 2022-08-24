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
          <q-btn no-caps unelevated class="q-mr-lg" @click="logOut()">
            <q-icon name="logout" />
          </q-btn>
        </q-toolbar>
      </div>
      <div class="bg-grey-1">
        <q-toolbar class="GNL__toolbar container">
          <div class="gt-sm flex items-center">
            <q-list class="sd-bar">
              <span class="flex">
                <q-item
                  class="rounded-borders"
                  v-ripple
                  v-for="link in links"
                  :key="link.text"
                  clickable
                  :to="link.link"
                  exact
                >
                  <q-item-section>
                    <q-item-label>
                      <span class="text-weight-medium text-subtitle2"
                        >{{ link.text }}
                      </span>
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </span>
            </q-list>
          </div>
          <q-space />
          <!-- profile  v-model="search"-->
          <q-input dense outlined filled borderless placeholder="Izlash">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
          <q-btn
            icon="filter_alt"
            outline
            label="Filter"
            no-caps
            text-color="primary"
            @click="alert = true"
            class="q-ml-md"
          />
        </q-toolbar>
      </div>
    </q-header>
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          <div class="text-h6">Alert</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
          perferendis totam, ea at omnis vel numquam exercitationem aut, natus
          minima, porro labore.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
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
function logOut() {
  authUserStore.logout();
}
const links = [
  {
    text: "Dashboard",
    link: "/",
  },
  { text: "Homiylar", link: "/sponsors" },
  { text: "Talabalar", link: "/students" },
];
const alert = ref(false);
</script>
<style lang="scss">
.sd-bar .q-item__label {
  font-size: 0.9rem;
  //border: 1px solid #000;
  //-top: 10px;
  //margin-bottom: 10px;
  //margin-left: 10px;
  // margin-right: 10px;
  // padding-top: 10px;
  // padding-bottom: 10px;
  //padding-left: 10px;
  //padding-right: 10px;
}
.sd-bar .q-item__section--side > .q-icon {
  font-size: 1.4rem;
}
.sd-bar .q-item__section--avatar {
  color: inherit;
  min-width: 30px;
}
.sd-bar .q-item {
  min-height: 40px;
  font-weight: 500;
}
.sd-bar .q-item:not(.q-router-link--active) {
  color: #0000008a;
}
.sd-bar .q-item:not(.q-router-link--active):hover {
  color: $primary;
}
.sd-bar .q-item:not(.q-router-link--active):hover .q-focus-helper {
  background: $primary;
  opacity: 0.15;
}
.sd-bar .q-item.q-router-link--active {
  color: $primary;
  background: $primary 0.3;
}

.sd-bar .q-item.q-router-link--active .q-focus-helper {
  background: $primary;
  color: $primary;
  opacity: 0.15;
}
</style>

