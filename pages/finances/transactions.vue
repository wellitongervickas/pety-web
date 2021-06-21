<template>
  <div>
    <div class="p-3 bg-white border">
      <transactions :transactions="transactions" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Transactions } from '~/components/finances/Transactions'

export default Vue.extend({
  name: 'FinancesTransactions',
  components: {
    Transactions,
  },
  data: () => ({
    transactions: [
      {
        id: '1',
        date_timestamp: 1624297111368,
      },
    ],
  }),
})
</script>
