<template>
  <div class="finances">
    <transactions :transactions="transactions" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Transactions from '@/components/finances/Transactions'

@Component({
  components: {
    Transactions,
  },
})
export default class FinancesTransactions extends Vue {
  transactions = [
    {
      id: '1',
      date: '2021-06-21 14:38:31',
    },
    {
      id: '2',
      date: '2021-03-21 14:38:31',
    },
  ]
}
</script>
