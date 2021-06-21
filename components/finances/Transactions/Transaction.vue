<template>
  <dt class="flex items-center h-8">
    <div class="w-20 flex text-center">
      <div>{{ getDate }}</div>
      <div>{{ getTime }}</div>
    </div>
  </dt>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface Transaction {
  id: string
  date_timestamp: number
}

export default Vue.extend({
  name: 'Transaction',
  props: {
    transaction: {
      type: Object,
      required: true,
    } as PropOptions<Transaction>,
  },
  computed: {
    getDate() {
      return new Intl.DateTimeFormat('pt-BR').format(
        this.transaction.date_timestamp
      )
    },

    getTime() {
      const date = new Date(this.transaction.date_timestamp)
      const hour = date.getHours()
      const minutes = date.getMinutes()
      const seconds = date.getSeconds()

      return `${hour}:${minutes}:${seconds}`
    },
  },
})
</script>

<style></style>
