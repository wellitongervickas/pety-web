import { mount } from '@vue/test-utils'
import { Transactions, Transaction } from '@/components/finances/Transactions'

describe('Transaction', () => {
  test('renders transaction date', () => {
    const wrapper = mount(Transactions, {
      components: {
        Transaction,
      },
      propsData: {
        transactions: [{}],
      },
    })

    expect(wrapper.getComponent(Transaction)).toBeTruthy()
  })
})
