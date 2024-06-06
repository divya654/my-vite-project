import React, { useState } from 'react';
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton, Menu, MenuButton, MenuItem, MenuList, Flex } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import SaleOrderModal from './SaleOrderModal';

const ActiveSaleOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer A', price: 100, lastModified: new Date() },
    { id: 2, customerName: 'Customer B', price: 200, lastModified: new Date() },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleAddOrder = () => {
    setSelectedOrder(null);
    setIsModalOpen(true);
  };

  const handleEditOrder = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleSubmit = (data) => {
    if (selectedOrder) {
      setOrders(orders.map(order => order.id === selectedOrder.id ? { ...data, id: selectedOrder.id } : order));
    } else {
      setOrders([...orders, { ...data, id: Date.now(), lastModified: new Date() }]);
    }
    setIsModalOpen(false);
  };

  return (
    <Box>
      <Flex justifyContent="space-between" mb={4}>
        <Box>
          {/* Placeholder for space alignment */}
        </Box>
        <Button onClick={handleAddOrder} colorScheme="green">+ Sale Order</Button>
      </Flex>
      <Table variant="striped" colorScheme="green">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Last Modified</Th>
            <Th>Edit/View</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map(order => (
            <Tr key={order.id}>
              <Td>{order.id}</Td>
              <Td>{order.customerName}</Td>
              <Td>₹ {order.price}</Td>
              <Td>{new Date(order.lastModified).toLocaleString()}</Td>
              <Td>
                <Menu>
                  <MenuButton as={IconButton} icon={<EditIcon />} />
                  <MenuList>
                    <MenuItem onClick={() => handleEditOrder(order)}>Edit</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <SaleOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultValues={selectedOrder}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default ActiveSaleOrders;
