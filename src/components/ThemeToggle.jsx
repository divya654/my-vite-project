// src/components/ThemeToggle.jsx
import React from 'react';
import { useColorMode, Switch, Flex, Text } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  React.useEffect(() => {
    localStorage.setItem('theme', colorMode);
  }, [colorMode]);

  React.useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== colorMode) {
      toggleColorMode();
    }
  }, []);

  return (
    <Flex align="center">
      <Text mr="2">Dark Mode</Text>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </Flex>
  );
};

export default ThemeToggle;
