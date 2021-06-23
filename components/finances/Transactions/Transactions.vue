<template>
  <dl class="transactions">
    <template v-if="isEmpty">
      <p>No transactions to show yet.</p>
    </template>
    <template v-else>
      <transaction
        v-for="transaction in transactions"
        :key="transaction.id"
        :transaction="transaction"
      />
    </template>
  </dl>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator'

import { Transaction } from '@/components/finances/Transactions'

type TransactionsImp = Array<Pick<{ id: string }, 'id'>>

@Component({
  components: {
    Transaction,
  },
})
export default class Transactions extends Vue {
  @Prop({ required: true })
  transactions!: TransactionsImp

  get isEmpty() {
    return !this.transactions.length
  }
}
</script>

<style></style>
