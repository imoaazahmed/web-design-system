import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from './tabs';

export default {
  title: 'CHAKRA/Tabs',
};

export const TabExample = () => (
  <Tabs>
    <TabList>
      <Tab>Company Overview</Tab>
      <Tab>Video and Photos</Tab>
      <Tab>Product Capacity</Tab>
      <Tab>Trade Capacity</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>Panel 1</TabPanel>
      <TabPanel>Panel 2</TabPanel>
      <TabPanel>Panel 3</TabPanel>
      <TabPanel>Panel 4</TabPanel>
    </TabPanels>
  </Tabs>
);

export const TabExampleEnclosed = () => (
  <Tabs variant="enclosed">
    <TabList>
      <Tab>Product Overview</Tab>
      <Tab>Shipping & Stock Details</Tab>
    </TabList>
    <TabPanels padding="md">
      <TabPanel>Panel 1</TabPanel>
      <TabPanel>Panel 2</TabPanel>
    </TabPanels>
  </Tabs>
);
