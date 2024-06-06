import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Button } from '@chakra-ui/react';
import ThemeToggle from './ThemeToggle';
import ActiveSaleOrders from './ActiveSaleOrders';
import CompletedSaleOrders from './CompletedSaleOrders';

const Dashboard = () => {
  return (
    <Box p={4} bg="gray.800" minH="100vh" color="white">
      <ThemeToggle />
      <Tabs variant="soft-rounded" colorScheme="green" mt={4}>
        <TabList>
          <Tab>Active Sale Orders</Tab>
          <Tab>Completed Sale Orders</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ActiveSaleOrders />
          </TabPanel>
          <TabPanel>
            <CompletedSaleOrders />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Dashboard;
