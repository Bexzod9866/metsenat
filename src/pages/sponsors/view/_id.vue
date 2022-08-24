<template>
  <div v-if="sponsor">
    <div class="bg-grey-1">
      <div class="container">
        <div class="q-py-lg">
          <span class="q-mr-lg">
            <span class="cursor-pointer q-mr-lg" @click="$router.go(-1)"
              ><q-icon size="30px" name="arrow_back"></q-icon
            ></span>
          </span>
          <span class="text-black text-h6 text-weight-bold">{{
            sponsor.full_name
          }}</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-center q-mt-xl">
        <div class="col-md-8">
          <q-card class="shdw-4 r-8 full-height">
            <q-card-section class="flex">
              <div class="text-black text-body1 text-weight-bold">
                Homiy haqida
              </div>
              <q-space />
              <div>
                <q-btn
                  no-caps
                  icon="mode_edit"
                  color="primary"
                  label="Tahrirlash"
                  @click="alert = true"
                />
              </div>
            </q-card-section>
            <q-card-section class="flex">
              <div class="q-mr-md">
                <img src="src/assets/icon/men.png" alt="" />
              </div>
              <div class="q-mt-md" style="width: 200px">
                <div class="text-black text-body2 text-weight-bold">
                  {{ sponsor.full_name }}
                </div>
              </div>
            </q-card-section>
            <q-card-section class="row">
              <div class="col-md-6">
                <div class="text-grey text-body2">telefon raqam</div>
                <div class="text-black text-body2 text-weight-bold">
                  {{ sponsor.phone }}
                </div>
              </div>
              <div class="col-md-6">
                <div class="text-grey text-body2">Homiylik summasi</div>
                <div class="text-black text-body2 text-weight-bold">
                  {{ sponsor.sum }}
                </div>
              </div>
              <div v-if="sponsor.firm" class="col-md-6 q-mt-md">
                <div class="text-grey text-body2">Tashkilot nomi</div>
                <div class="text-black text-body2 text-weight-bold">
                  {{ sponsor.firm }}
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="row justify-center q-mt-xl">
        <img src="src/assets/icon/bigImg.png" alt="" />
      </div>
    </div>
    <q-dialog v-model="alert">
      <q-card style="width: 700px; max-width: 80vw" class="r-12">
        <q-card-section class="row items-center">
          <div class="text-h6">Tahrirlash</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <q-separator />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-tabs
            v-model="tab"
            dense
            class="text-grey"
            active-color="primary"
            indicator-color="primary"
            align="justify"
            narrow-indicator
          >
            <q-tab name="jis" label="Jismoniy shaxs" />
            <q-tab name="yur" label="Yuridik shaxs" />
          </q-tabs>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel name="jis">
              <div class="text-caption q-mt-md">
                F.I.Sh. (Familiya Ism Sharifingiz)
              </div>
              <q-input
                dense
                outlined
                color="blue-1"
                bg-color="blue-1"
                v-model="sponsorData.full_name"
                placeholder="F.I.Sh. (Familiya Ism Sharifingiz)"
              />
              <div class="text-caption q-mt-md">Telefon raqam</div>
              <q-input
                dense
                outlined
                color="blue-1"
                bg-color="blue-1"
                v-model="sponsorData.phone"
                placeholder="Telefon raqam)"
              />
              <div class="text-caption q-mt-md">Holati</div>
              <q-select
                dense
                outlined
                color="blue-1"
                bg-color="blue-1"
                v-model="sponsorData.get_status_display"
                :options="options"
                label="Standard"
              />
              <div class="text-caption q-mt-md">Homiylik summasi</div>
              <q-input
                dense
                outlined
                color="blue-1"
                bg-color="blue-1"
                v-model="sponsorData.sum"
                placeholder="Homiylik summasi"
              />
            </q-tab-panel>

            <q-tab-panel name="yur">
              <div class="text-caption q-mt-md">
                F.I.Sh. (Familiya Ism Sharifingiz)
              </div>
              <q-input
                dense
                outlined
                color="blue-1"
                bg-color="blue-1"
                v-model="sponsorData.full_name"
                placeholder="F.I.Sh. (Familiya Ism Sharifingiz)"
              />
              <div class="text-caption q-mt-md">Telefon raqam</div>
              <q-input
                dense
                outlined
                color="blue-1"
                bg-color="blue-1"
                v-model="sponsorData.phone"
                placeholder="Telefon raqam)"
              />
              <div class="text-caption q-mt-md">Holati</div>
              <q-select
                dense
                outlined
                color="blue-1"
                bg-color="blue-1"
                v-model="sponsorData.get_status_display"
                :options="options"
                label="Standard"
              />
              <div class="text-caption q-mt-md">Homiylik summasi</div>
              <q-input
                dense
                outlined
                color="blue-1"
                bg-color="blue-1"
                v-model="sponsorData.sum"
                placeholder="Homiylik summasi"
              />
              <div class="text-caption q-mt-md">Tashkilot nomi</div>
              <q-input
                dense
                outlined
                color="blue-1"
                bg-color="blue-1"
                v-model="sponsorData.firm"
                placeholder="Homiylik summasi"
              />
            </q-tab-panel>
          </q-tab-panels>
          <q-card-section>
            <q-separator />
          </q-card-section>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn
            @click="update"
            icon="save_as"
            label="Saqlash"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { onMounted, ref, computed, onUnmounted } from "vue";
import { storeToRefs } from "pinia";
import { useSponsorsStore } from "src/stores/SponsorStore";
import { useRoute } from "vue-router";
const route = useRoute();
const sponsorStore = useSponsorsStore();
const { sponsor } = storeToRefs(sponsorStore);
const tab = ref("jis");
onMounted(() => {
  sponsorStore.getSponsor(route.params.id);
});
onUnmounted(() => {
  tab.value = sponsor?.value.is_legal == true ? "jis" : "yur";
});
const sponsorData = computed(() => {
  return { ...sponsor.value };
});
function update() {
  if (tab.value == "yur") {
    sponsorData.value.is_legal = false;
  } else {
    sponsorData.value.is_legal = true;
    sponsorData.value.firm = "";
  }
  sponsorStore.updateSponsor(sponsorData.value);
}
const alert = ref(false); //

const options = [
  "Barchasi",
  "Yangi",
  "Moderatsiyada",
  "Tasdiqlangan",
  "Bekor qilingan",
];
const sums = [1000000, 5000000, 7000000, 10000000, 3000000];
</script>