import React from 'react';
import { Card } from '../ui/card';

interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface OrderDetailsProps {
  orderNumber: string;
  orderDate: string;
  customerName: string;
  items: OrderItem[];
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderNumber, orderDate, customerName, items }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Card className="w-full  p-6">
      <h1 className="text-2xl font-bold mb-6">Order Details</h1>
      <div className="mb-4">
        <p><strong>Order ID:</strong> {orderNumber}</p>
        <p><strong>Order Date:</strong> {orderDate}</p>
        <p><strong>Customer Name:</strong> {customerName}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Items</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map(item => (
                <tr key={item.id}>
                  <td className="px-4 py-2 whitespace-nowrap">{item.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{item.quantity}</td>
                  <td className="px-4 py-2 whitespace-nowrap">${item.price.toFixed(2)}</td>
                  <td className="px-4 py-2 whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end">
        <p className="text-xl font-semibold">Total: ${calculateTotal()}</p>
      </div>
    </Card>
  );
};

export default OrderDetails;