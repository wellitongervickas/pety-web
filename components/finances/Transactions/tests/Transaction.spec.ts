import { mount } from '@vue/test-utils'
import { Transaction } from '@/components/finances/Transactions'

describe('Transaction', () => {
  test('renders transaction date', () => {
    const wrapper = mount(Transaction, {
      propsData: {
        transaction: {
          id: 'some_id',
          date_timestamp: 1624297111368,
        },
      },
    })

    expect(wrapper.text().includes('21/06/2021')).toBeTruthy()
    expect(wrapper.text().includes('14:38:31')).toBeTruthy()
  })
})
