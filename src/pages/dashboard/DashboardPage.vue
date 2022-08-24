<template>
  <q-page>
    <q-scroll-area style="height: calc(100vh - 50px)">
      <div class="q-pa-lg q-pt-md">
        <DashboardTop :TopData="TopData" />
      </div>
      <q-card class="shdw-4 r-8 container">
        <q-card-section>
          <div class="clearfix">
            <div class="card-title text-h6">Homiylar va talabalar soni</div>
          </div>
        </q-card-section>
        <q-card-section style="height: 450px">
          <LineCharts />
        </q-card-section>
      </q-card>
    </q-scroll-area>
  </q-page>
</template>
<script setup>
import { onMounted, defineAsyncComponent, computed } from "vue";
import { storeToRefs } from "pinia";
const DashboardTop = defineAsyncComponent(() =>
  import("src/components/Dashboard/DashboardTops.vue")
);
const LineCharts = defineAsyncComponent(() =>
  import("src/components/Dashboard/LineChart.vue")
);
import { useDashboardStore } from "src/stores/DashboardStore";
const dashboardStore = useDashboardStore();
const { dashboard, loading } = storeToRefs(dashboardStore);
onMounted(() => {
  dashboardStore.getDshboard();
});
const TopData = computed(() => {
  return dashboard.value;
});
</script>

<style>
</style>