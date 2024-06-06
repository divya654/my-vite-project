import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, FormControl, FormLabel, Input, Select, NumberInput, NumberInputField } from '@chakra-ui/react';

const SaleOrderModal = ({ isOpen, onClose, defaultValues, onSubmit }) => {
  const [customerName, setCustomerName] = useState(defaultValues?.customerName || '');
  const [price, setPrice] = useState(defaultValues?.price || 0);
  const [products, setProducts] = useState([
    { id: 209, display_id: 8, owner: 1079, name: 'New Product', category: 'The god of War', characteristics: 'New Product Characteristics', features: '', brand: 'New Product Brand', sku: [{ id: 248, selling_price: 54, max_retail_price: 44 }] },
    { id: 210, display_id: 9, owner: 1080, name: 'Another Product', category: 'Category A', characteristics: 'Characteristics A', features: 'Feature A', brand: 'Brand A', sku: [{ id: 249, selling_price: 60, max_retail_price: 50 }] },
  ]);
  const [selectedProducts, setSelectedProducts] = useState(defaultValues?.products || []);

  const handleProductChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedProducts(selectedOptions);
  };

  const handleSubmit = () => {
    const formData = {
      customerName,
      price,
      products: selectedProducts,
      lastModified: new Date(),
    };
    onSubmit(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{defaultValues ? 'Edit Sale Order' : 'Add Sale Order'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Customer Name</FormLabel>
            <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <NumberInput value={price} onChange={(value) => setPrice(parseFloat(value))}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Products</FormLabel>
            <Select multiple={true} value={selectedProducts} onChange={handleProductChange}>
              {products.map(product => (
                <option key={product.id} value={product.id}>{product.name}</option>
              ))}
            </Select>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderModal;
