<template>
  <dt class="transaction">
    <div class="transaction__date">{{ date }}</div>
  </dt>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { format, parseISO } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'

@Component
export default class Transaction extends Vue {
  @Prop({ required: true })
  transaction!: {
    id: string
    date: string
  }

  get date() {
    const dateIso = parseISO(this.transaction.date)
    const utcDate = zonedTimeToUtc(dateIso, 'America/Sao_Paulo')

    return format(utcDate, "dd/MM/yyyy 'às' HH:MM:SS")
  }
}
</script>

<style></style>
