import { mount } from '@vue/test-utils'
import Transactions, { Transaction } from '@/components/finances/Transactions'

describe('Transactions', () => {
  test('renders every transaction', () => {
    const transactions = [
      {
        id: '1',
        date_timestamp: 1624297111368,
      },
      {
        id: '2',
        date_timestamp: 1624297511468,
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
