<template>
  <dt class="transaction">
    <div class="transaction__date">{{ date }}</div>
    <div class="transaction__time">{{ time }}</div>
  </dt>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

interface TransactionImp {
  id: string
  date_timestamp: number
}

@Component
export default class Transaction extends Vue {
  @Prop({ required: true })
  transaction!: TransactionImp

  get date() {
    return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(
      this.transaction.date_timestamp
    )
  }

  get time() {
    const date = new Date(this.transaction.date_timestamp)
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${hour}:${minutes}:${seconds}`
  }
}
</script>

<style></style>
