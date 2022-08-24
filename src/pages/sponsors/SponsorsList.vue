<template>
  <q-page class="" v-if="sponsors">
    <q-scroll-area style="height: calc(100vh - 50px)">
      <div class="container">
        <q-table
          color="primary"
          class="mainTable shadow-0"
          :rows="sponsors"
          :columns="columns"
          row-key="full_name"
        >
          <template v-slot:body-cell-created_at="props">
            <q-td :props="props">
              {{ dateFormat(props.row.created_at) }}
            </q-td>
          </template>
          <template v-slot:body-cell-get_status_display="props">
            <q-td :props="props">
              <div
                :style="`color:${
                  statusColor(props.row.get_status_display).color
                }`"
              >
                {{ props.row.get_status_display }}
              </div>
            </q-td>
          </template>
          <template v-slot:body-cell-id="props">
            <q-td :props="props">
              <router-link
                style="text-decoration: none"
                :to="$route.path + '/view/' + props.row.id"
              >
                <img src="src/assets/icon/eye.png" alt=""
              /></router-link>
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
import { onMounted, ref } from "vue";
import TableSkeletron from "src/components/Loader/TableSkeletron.vue";
import { storeToRefs } from "pinia";
import { useSponsorsStore } from "src/stores/SponsorStore";
import moment from "moment";
const sponsorStore = useSponsorsStore();
const { sponsors, loading } = storeToRefs(sponsorStore);
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
    name: "phone",
    label: "Tel.Raqami",
    field: "phone",
    sortable: false,
    align: "center",
  },
  {
    name: "sum",
    label: "Homiylik summas",
    field: "sum",
    sortable: false,
    align: "center",
  },
  {
    name: "spent",
    label: "Sarflangan summa",
    field: "spent",
    sortable: false,
    align: "center",
  },
  {
    name: "created_at",
    label: "Sana",
    field: "created_at",
    sortable: false,
    align: "center",
  },
  {
    name: "get_status_display",
    label: "Holati",
    field: "get_status_display",
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
function dateFormat(value) {
  return moment(value).format("YYYY-MM-DD");
}
const typeColor = ref([
  { val: "Yangi", color: "#5BABF2" },
  { val: "Moderatsiyada", color: "#FFA445" },
  { val: "Tasdiqlangan", color: "#00CF83" },
  { val: "Bekor qilingan", color: "#979797" },
]);
function statusColor(val) {
  let col = typeColor.value.find((item) => item.val == val);
  return col ? col : "";
}
onMounted(() => {
  sponsorStore.getSponsors();
});
</script>

<style>
</style>