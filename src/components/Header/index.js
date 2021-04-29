import React from 'react';
import { 
  Container,
  Flex, 
  Heading, 
  Button,
  useDisclosure, } from '@chakra-ui/react';
import AppDrawer from '../Drawer/index.jsx';

const Header = (props) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <header>
      <AppDrawer isOpen={isOpen} onClose={onClose} />
      <Container bg="purple.700" w="100%" maxWidth="100%" color="white">
        <Flex maxWidth="1140px" p={3} mx="auto" alignItems="center" justifyContent="space-between">
          <Button onClick={onOpen} variant="unstyled" _focus={{ boxShadow: 'none' }}>
            <Flex align="center" justify="center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </Flex>
          </Button>
          <Heading as="h1" size="lg">{props.title}</Heading>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-rotate-cw"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
        </Flex>
      </Container>
    </header>
  );
}

export default Header;