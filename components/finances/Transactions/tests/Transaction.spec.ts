import { mount } from '@vue/test-utils'
import { Transaction } from '@/components/finances/Transactions'
import { format } from 'date-fns'

describe('Transaction', () => {
  test('renders transaction date', () => {
    const date = format(new Date(2014, 1, 11, 14, 33, 22), 'yyyy-MM-dd H:mm:ss')

    const wrapper = mount(Transaction, {
      propsData: {
        transaction: {
          id: 'some_id',
          date,
        },
      },
    })

    expect(wrapper.text().includes(`11/02/2014 às 14:33:22`)).toBeTruthy()
  })
})
