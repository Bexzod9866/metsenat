<template>
  <div v-if="student && studentSponsorList && sponsors">
    <q-scroll-area style="height: calc(100vh - 50px)">
      <div class="bg-grey-1">
        <div class="container">
          <div class="q-py-lg">
            <span class="cursor-pointer q-mr-lg" @click="$router.go(-1)"
              ><q-icon size="30px" name="arrow_back"></q-icon
            ></span>
            <span class="text-black text-h6 text-weight-bold">{{
              studentData.full_name
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
                  Talaba haqida
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
                <div class="text-black text-body1 text-weight-bold">
                  Asosiy ma’lumotlar
                </div>
                <q-space />
              </q-card-section>

              <q-card-section class="flex">
                <div class="q-mr-md">
                  <img src="src/assets/icon/men.png" alt="" />
                </div>
                <div class="q-mt-sm" style="width: 200px">
                  <div class="text-black text-body2 text-weight-bold">
                    {{ studentData.full_name }}
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="row">
                <div class="col-md-6">
                  <div class="text-grey text-body2">telefon raqam</div>
                  <div class="text-black text-body2 text-weight-bold">
                    {{ studentData.phone }}
                  </div>
                </div>
              </q-card-section>
              <q-card-section class="flex">
                <div class="text-black text-body1 text-weight-bold">
                  O‘qish joyi haqida ma’lumot
                </div>
                <q-space />
              </q-card-section>
              <q-card-section class="row">
                <div class="col-md-6">
                  <div class="text-grey text-body2">OTM</div>
                  <div class="text-black text-body2 text-weight-bold">
                    {{ studentData.institute.name }}
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="text-grey text-body2">Talabalik turi</div>
                  <div class="text-black text-body2 text-weight-bold">
                    {{ studentData.type == 1 ? "Bakalavr" : "Magistr" }}
                  </div>
                </div>
                <div class="col-md-6 q-mt-md">
                  <div class="text-grey text-body2">Ajratilingan summa</div>
                  <div class="text-black text-body2 text-weight-bold">
                    {{ studentData.given }}
                  </div>
                </div>
                <div class="col-md-6 q-mt-md">
                  <div class="text-grey text-body2">Kontrakt miqdori</div>
                  <div class="text-black text-body2 text-weight-bold">
                    {{ studentData.contract }}
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-center q-mt-xl">
          <div class="col-md-8">
            <q-card class="shdw-4 r-8 full-height q-mt-lg">
              <q-card-section class="flex">
                <div class="text-black text-body1 text-weight-bold">
                  Talabaga homiylar
                </div>
                <q-space />
                <div>
                  <q-btn
                    no-caps
                    icon="add"
                    color="primary"
                    label="Homiy qo‘shish"
                    @click="addSponsor = true"
                  />
                </div>
              </q-card-section>
              <q-card-section>
                <q-table
                  color="primary"
                  class="minTable shadow-0"
                  :rows="studentSponsorList.sponsors"
                  :columns="columns2"
                  row-key="full_name"
                >
                  <template v-slot:body-cell-id="props">
                    <q-td :props="props">
                      <router-link
                        style="text-decoration: none"
                        :to="$route.path + '/view/' + props.row.id"
                      >
                        <q-icon name="visibility"></q-icon
                      ></router-link>
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
          <q-card-section>
            <div class="text-caption q-mt-md">
              F.I.Sh. (Familiya Ism Sharifingiz)
            </div>
            <q-input
              dense
              outlined
              color="blue-1"
              bg-color="blue-1"
              v-model="studentData.full_name"
              placeholder="F.I.Sh. (Familiya Ism Sharifingiz)"
            />
            <div class="text-caption q-mt-md">Telefon raqam</div>
            <q-input
              dense
              outlined
              color="blue-1"
              bg-color="blue-1"
              v-model="studentData.phone"
              placeholder="Telefon raqam"
            />
            <div class="text-caption q-mt-md">OTM</div>
            <q-select
              dense
              outlined
              color="blue-1"
              bg-color="blue-1"
              emit-value
              map-options
              option-label="name"
              option-value="name"
              v-model="studentData.institute"
              autocomplete="name"
              use-input
              :options="instituteList"
            />
            <div class="text-caption q-mt-md">Kontrakt miqdori</div>
            <q-input
              dense
              outlined
              color="blue-1"
              bg-color="blue-1"
              v-model="studentData.contract"
              placeholder="Kontrakt miqdori"
            />
          </q-card-section>
          <q-card-section>
            <q-separator />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              no-caps
              @click="update"
              icon="save_as"
              label="Saqlash"
              color="primary"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-dialog v-model="addSponsor">
        <q-card style="width: 700px; max-width: 80vw" class="r-12">
          <q-card-section class="row items-center">
            <div class="text-h6">Homiy qo‘shish</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>
          <q-card-section>
            <q-separator />
          </q-card-section>
          <q-card-section>
            <div class="text-caption q-mt-md">
              F.I.Sh. (Familiya Ism Sharifingiz)
            </div>
            <q-select
              dense
              outlined
              color="blue-1"
              bg-color="blue-1"
              emit-value
              map-options
              option-label="full_name"
              option-value="full_name"
              v-model="addSponsorData.full_name"
              autocomplete="full_name"
              use-input
              :options="sponsors"
            />
            <div class="text-caption q-mt-md">Ajratilingan summa</div>
            <q-input
              dense
              outlined
              color="blue-1"
              bg-color="blue-1"
              v-model="addSponsorData.sum"
              placeholder="Kontrakt miqdori"
            />
          </q-card-section>
          <q-card-section>
            <q-separator />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              no-caps
              @click="update"
              icon="save_as"
              label="Saqlash"
              color="primary"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-scroll-area>
  </div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useStudentsStore } from "src/stores/StudentsStore";
import { useSponsorsStore } from "src/stores/SponsorStore";
import { useRoute } from "vue-router";
const route = useRoute();
const studentStore = useStudentsStore();
const sponsorStore = useSponsorsStore();
const { student, instituteList, studentSponsorList } =
  storeToRefs(studentStore);
const { sponsors } = storeToRefs(sponsorStore);
onMounted(() => {
  studentStore.getStudent(route.params.id);
  studentStore.getStudentSponsorList(route.params.id);
  studentStore.getInstitute();
  sponsorStore.getSponsors();
});
const addSponsorData = ref({
  sum: 0,
  full_name: "",
});
const studentData = computed(() => {
  return { ...student.value };
});
function update() {
  studentStore.updateStudent(studentData.value);
}
const columns2 = [
  {
    name: "sponsor.full_name",
    width: "100px",
    required: true,
    label: "F.I.sh.",
    align: "left",
    field: (row) => row.sponsor.full_name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "summa",
    label: "Ajratilingan summa",
    field: "summa",
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
const alert = ref(false);
const addSponsor = ref(false);
</script>