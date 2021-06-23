import { mount } from '@vue/test-utils'
import { Transaction } from '@/components/finances/Transactions'

describe('Transaction', () => {
  test('renders transaction date', () => {
    const wrapper = mount(Transaction, {
      propsData: {
        transaction: {
          id: 'some_id',
          date: '2021-06-21 14:38:31',
        },
      },
    })

    expect(wrapper.text().includes('21/06/2021 às 14:38:31')).toBeTruthy()
  })
})
