<template>
  <q-page class="" v-if="students">
    <q-scroll-area style="height: calc(100vh - 50px)">
      <div class="container">
        <div class="row justify-end q-my-md">
          <q-btn
            dense
            class="q-btn-round q-btn-sm q-px-xl text-capitalize"
            no-caps
            style="padding: 0 30px"
            color="primary"
            label="Talaba qo‘shish"
            icon="add"
            :to="$route.path + '/create'"
          />
        </div>
        <q-table
          color="primary"
          class="mainTable shadow-0"
          :rows="students"
          :columns="columns"
          row-key="full_name"
        >
          <template v-slot:body-cell-type="props">
            <q-td :props="props">
              <div>{{ props.row.type == 1 ? "Bakalavr" : "Magistr" }}</div>
            </q-td>
          </template>
          <template v-slot:body-cell-id="props">
            <q-td :props="props">
              <router-link
                style="text-decoration: none"
                :to="$route.path + '/view/' + props.row.id"
              >
                <img src="src/assets/icon/eye.png" alt="" />
              </router-link>
            </q-td>
          </template>
          <template v-slot:no-data="">
            <div class="borderStyle">
              <img
                class="imgss"
                src="src/assets/images/icons/noInfo.svg"
                alt=""
              />
              <span> Отсутствуют данные </span>
            </div>
          </template>
        </q-table>
      </div>
    </q-scroll-area>
  </q-page>
  <q-page v-else>
    <q-scroll-area class="container" style="height: calc(100vh - 50px)">
      <TableSkeletron />
    </q-scroll-area>
  </q-page>
</template>
<script setup>
import { onMounted } from "vue";
import TableSkeletron from "src/components/Loader/TableSkeletron.vue";
import { storeToRefs } from "pinia";
import { useStudentsStore } from "src/stores/StudentsStore";
const studentStore = useStudentsStore();
const { students, loading } = storeToRefs(studentStore);
const columns = [
  {
    name: "full_name",
    width: "100px",
    required: true,
    label: "F.I.sh.",
    align: "left",
    field: (row) => row.full_name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "type",
    label: "Talabalik turi",
    field: "type",
    sortable: false,
    align: "center",
  },
  {
    name: "institute.name",
    label: "OTM",
    field: (row) => row.institute.name,
    format: (val) => `${val}`,
    sortable: false,
    align: "center",
  },
  {
    name: "given",
    label: "Ajratilingan summa",
    field: "given",
    sortable: false,
    align: "center",
  },
  {
    name: "contract",
    label: "Kontrakt miqdori",
    field: "contract",
    sortable: false,
    align: "center",
  },
  {
    name: "id",
    label: "Amallar",
    field: "id",
    sortable: false,
    align: "center",
  },
];

onMounted(() => {
  studentStore.getStudents();
});
</script>

<style>
</style>