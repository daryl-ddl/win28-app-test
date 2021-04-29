import React from 'react';
import { HashRouter, NavLink } from "react-router-dom";
import {
  Stack,
  Text,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';


const AppDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      placement="left"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader bg="purple.700" p={0}>
            <Flex h="64px" align="center" justify="flex-end">
              <DrawerCloseButton color="white" position="relative" top="0" _focus={{ boxShadow: 'none' }}/>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Text align="center">Welcome, Guest</Text>
            <HashRouter>
              <Stack>
                <NavLink 
                  onClick={onClose} 
                  to="/" 
                  exact={true}
                  activeStyle={{
                    fontWeight: "bold",
                    color: "purple"
                  }}
                >Race Meetings</NavLink>
                <NavLink 
                  onClick={onClose} 
                  to="/previous-races" 
                  activeStyle={{
                    fontWeight: "bold",
                    color: "purple"
                  }}
                >Previous Races</NavLink>
                <NavLink 
                  onClick={onClose} 
                  to="/subscribe" 
                  activeStyle={{
                    fontWeight: "bold",
                    color: "purple"
                  }}
                >Subscribe</NavLink>
              </Stack>
            </HashRouter>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default AppDrawer;