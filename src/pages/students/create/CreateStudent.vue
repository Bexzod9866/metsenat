<template>
  <div>
    <div class="bg-grey-1">
      <div class="container">
        <div class="q-py-lg">
          <span class="q-mr-lg">
            <q-icon size="30px" name="arrow_back"></q-icon>
          </span>
          <span class="text-black text-h6 text-weight-bold"
            >Talaba qo‘shish</span
          >
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-center q-mt-xl">
        <div class="col-md-8">
          <q-card class="shdw-4 r-8 full-height">
            <q-card-section class="row">
              <div class="col-md-6 q-pr-md">
                <div class="text-grey text-body2">
                  F.I.Sh. (Familiya Ism Sharif)
                </div>
                <q-input
                  outlined
                  dense
                  color="blue-1"
                  bg-color="blue-1"
                  v-model="data.full_name"
                  placeholder="F.I.Sh. (Familiya Ism Sharifingiz)"
                />
              </div>
              <div class="col-md-6 q-pl-md">
                <div class="text-grey text-body2">Telefon raqam</div>
                <q-input
                  dense
                  outlined
                  color="blue-1"
                  bg-color="blue-1"
                  v-model="data.phone"
                  placeholder="Telefon raqam"
                />
              </div>
              <div class="col-md-12 q-mt-md">
                {{ data }}
                <div class="text-grey text-body2">OTM</div>
                <q-select
                  dense
                  outlined
                  color="blue-1"
                  bg-color="blue-1"
                  emit-value
                  map-options
                  option-label="name"
                  option-value="name"
                  v-model="data.institute"
                  autocomplete="name"
                  use-input
                  :options="instituteList"
                />
              </div>
              <div class="col-md-6 q-pr-md">
                <div class="text-grey text-body2">Talabalik turi</div>
                <q-select
                  dense
                  outlined
                  color="blue-1"
                  bg-color="blue-1"
                  emit-value
                  map-options
                  v-model="data.type"
                  :options="typeOptions"
                />
              </div>
              <div class="col-md-6 q-pl-md">
                <div class="text-grey text-body2">Kontrakt summa</div>
                <q-input
                  dense
                  outlined
                  color="blue-1"
                  bg-color="blue-1"
                  v-model="data.contract"
                  placeholder="Kontrakt summa"
                />
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn
                @click="add"
                icon="save_as"
                label="Saqlash"
                color="primary"
                v-close-popup
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="row justify-center q-mt-xl">
        <img src="src/assets/icon/bigImg.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useStudentsStore } from "src/stores/StudentsStore";
const studentStore = useStudentsStore();
const { instituteList } = storeToRefs(studentStore);
const data = ref({
  full_name: "",
  type: 1,
  phone: "",
  institute: "",
  contract: 0,
  given: 0,
});
function add() {
  data.value.contract = Number(data.value.contract);
  studentStore.addStudent(data.value);
}
const alert = ref(false); //

const options = ["Yangi", "Moderatsiyada", "Tasdiqlangan", "Bekor qilingan"];
const typeOptions = [
  { value: 1, label: "Bakalavr" },
  { value: 2, label: "Magistr" },
];
const sums = [1000000, 5000000, 7000000, 10000000, 3000000];
onMounted(() => {
  studentStore.getInstitute();
});
</script>