import React, { useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import SaleOrderModal from './SaleOrderModal';

const CompletedSaleOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  return (
    <Box>
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
                  <MenuButton as={IconButton} icon={<ViewIcon />} />
                  <MenuList>
                    <MenuItem onClick={() => handleViewOrder(order)}>View</MenuItem>
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
        readOnly={true}
      />
    </Box>
  );
};

export default CompletedSaleOrders;
