<template>
  <div class="row items-stretch container">
    <div class="col-md-4 col-12 self-stetch q-pr-md">
      <q-card class="shdw-4 r-8 full-height">
        <q-card-section>
          <div class="flex items-center align-center q-mb-sm">
            <div>
              <img src="src/assets/icon/money1.png" alt="" />
            </div>
            <div class="mb-0 q-ml-sm">
              <div class="text-grey text-body1 text-weight-bold">
                Jami to‘langan summa
              </div>
              <div>
                <span class="text-black text-body2 text-weight-bold"
                  >{{ TopData?.total_paid }}
                </span>
                <span class="q-ml-sm text-grey text-body2 text-weight-bold"
                  >UZS</span
                >
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-4 col-12 self-stetch q-px-sm">
      <q-card class="shdw-4 r-8 full-height">
        <q-card-section>
          <div class="flex items-center align-center q-mb-sm">
            <div>
              <img src="src/assets/icon/money2.png" alt="" />
            </div>
            <div class="mb-0 q-ml-sm">
              <div class="text-grey text-body1 text-weight-bold">
                Jami so‘ralgan summa
              </div>
              <div>
                <span class="text-black text-body2 text-weight-bold"
                  >{{ TopData?.total_need }}
                </span>
                <span class="q-ml-sm text-grey text-body2 text-weight-bold"
                  >UZS</span
                >
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-4 col-12 self-stetch q-pl-sm">
      <q-card class="shdw-4 r-8 full-height">
        <q-card-section>
          <div class="flex items-center align-center q-mb-sm">
            <div>
              <img src="src/assets/icon/money3.png" alt="" />
            </div>
            <div class="mb-0 q-ml-sm">
              <div class="text-grey text-body1 text-weight-bold">
                To‘lanishi kerak summa
              </div>
              <div>
                <span class="text-black text-body2 text-weight-bold"
                  >{{ TopData?.total_must_pay }}
                </span>
                <span class="q-ml-sm text-grey text-body2 text-weight-bold"
                  >UZS</span
                >
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup>
defineProps({
  TopData: {
    type: Object,
  },
});
</script>
