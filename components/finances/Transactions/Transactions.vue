<template>
  <div class="p-3 bg-white border">
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
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { Transaction } from '@/components/finances/Transactions'

type Transactions = Array<Pick<{ id: string }, 'id'>>

export default Vue.extend({
  name: 'Transactions',
  components: {
    Transaction,
  },
  props: {
    transactions: {
      type: Array,
      required: true,
    } as PropOptions<Transactions>,
  },
  computed: {
    isEmpty: {
      get(): boolean {
        return !this.transactions.length
      }
    }
  }
})
</script>

<style></style>
