import {
  TabProps,
  Tab as ChakraTab,
  TabList as ChakraTabList,
  TabListProps,
  TabPanels as ChakraTabPanels,
  TabPanelsProps,
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
} from '@chakra-ui/react';
import React, {
  createContext,
  ForwardedRef,
  forwardRef,
  useContext,
} from 'react';
import tabs from '../../theme/components/tabs';

const contextDefaultValues = {
  variant: 'unstyled',
};

const TabsContext = createContext(contextDefaultValues);

const useTabContext = () => useContext(TabsContext);

type TabsProps = Omit<ChakraTabsProps, 'variant'> & {
  variant?: 'unstyled' | 'enclosed';
};

export const Tabs = (props: TabsProps) => {
  const { variant = 'unstyled' } = props;
  return (
    <TabsContext.Provider value={{ variant }}>
      <ChakraTabs {...props} variant={variant} />
    </TabsContext.Provider>
  );
};

export const Tab = forwardRef(
  (props: TabProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const { variant } = useTabContext();
    const styles = tabs.variants[variant]?.tab;
    return <ChakraTab ref={ref} {...styles} {...props} />;
  }
);

export const TabPanels = (props: TabPanelsProps) => {
  const { variant } = useTabContext();

  const styles = {
    border: variant === 'enclosed' ? '1px solid' : '0',
    borderColor: 'gray.200',
  };

  return <ChakraTabPanels {...styles} {...props} />;
};

export const TabList = (props: TabListProps) => {
  const { variant } = useTabContext();
  const styles = tabs.variants[variant]?.tabList;
  return <ChakraTabList {...styles} {...props} />;
};

export {
  TabPanel,
  TabIndicator,
  TabsProvider,
  useTab,
  useTabIndicator,
  useTabList,
  useTabPanel,
  useTabPanels,
  useTabs,
} from '@chakra-ui/react';

export type {
  TabIndicatorProps,
  TabProps,
  TabPanelProps,
  UseTabListProps,
  UseTabOptions,
  UseTabPanelsProps,
  UseTabsProps,
  TabListProps,
  TabPanelsProps,
  TabsProps,
} from '@chakra-ui/react';
