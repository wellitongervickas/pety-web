<template>
  <div class="finances">
    <transactions :transactions="transactions" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Transactions from '~/components/finances/Transactions'

@Component({
  components: {
    Transactions
  }
})
export default class FinancesTransactions extends Vue {
  transactions = [
    {
      id: '1',
      date_timestamp: 1624297111368,
    },
    {
      id: '2',
      date_timestamp: 1624297511468,
    },
  ]
}

</script>
