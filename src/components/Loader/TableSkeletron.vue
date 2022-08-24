<template>
  <div class="q-pa-md">
    <q-markup-table class="shadow-0 preTable">
      <thead>
        <tr>
          <th class="text-left" style="width: 150px">
            <q-skeleton animation="blink" type="text" height="25px" />
          </th>
          <th class="text-right" v-for="a in 5" :key="a + 'ddd'">
            <q-skeleton animation="blink" type="text" height="25px" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="n in 5" :key="n">
          <td class="text-left" v-for="a in 6" :key="a + 'bbbb'">
            <q-skeleton
              animation="blink"
              height="25px"
              type="text"
              width="85px"
            />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
export default {
  name: 'TableSkeletron',
};
</script>

<style lang="scss" scoped></style>
