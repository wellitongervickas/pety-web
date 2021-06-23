import { mount } from '@vue/test-utils'
import Transactions, { Transaction } from '@/components/finances/Transactions'

describe('Transactions', () => {
  test('renders every transaction', () => {
    const transactions = [
      {
        id: '1',
        date: '2021-06-21 14:38:31',
      },
      {
        id: '2',
        date: '2021-03-21 14:38:31',
      },
    ]

    const wrapper = mount(Transactions, {
      components: {
        Transaction,
      },
      propsData: {
        transactions,
      },
    })

    const transactionElements = wrapper.findAll('.transaction')
    expect(transactionElements.length).toBe(2)
  })
})
