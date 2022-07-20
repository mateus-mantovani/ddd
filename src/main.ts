import Address from './domain/entity/address'
import Customer from './domain/entity/customer'
import Order from './domain/entity/order'
import OrderItem from './domain/entity/order_item'

const customer = new Customer('123', 'John')
const address = new Address('123 Main St', 123, '12345', 'Anytown')
customer.changeAddress(address)
customer.activate()

const item1 = new OrderItem(1, 'Item 1', 10, 'p1', 2)
const item2 = new OrderItem(2, 'Item 2', 20, 'p2', 3)

const order = new Order('1', '123', [item1, item2])
