import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'dummy' && password === 'password') {
      localStorage.setItem('authenticated', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <Box minH="100vh" display="flex" alignItems="center" justifyContent="center" bg="gray.800" color="white">
      <Box p={6} boxShadow="lg" borderRadius="md" bg="gray.700">
        <form onSubmit={handleLogin}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" name="username" required />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" required />
            </FormControl>
            <Button type="submit" colorScheme="blue">Login</Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
