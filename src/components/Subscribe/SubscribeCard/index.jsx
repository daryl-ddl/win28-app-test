import React from 'react';
import { NavLink } from "react-router-dom";
import { Center, LinkBox, LinkOverlay } from '@chakra-ui/react';

const SubscribeCard = (props) => {
  const subscribeProduct = props.subscribeProduct;
  let price = parseFloat(subscribeProduct.price).toFixed(2);

  return (
    <LinkBox border="1px" borderColor="gray.200" borderRadius="5px" p={4}>
      <LinkOverlay as={NavLink} to="/checkout" exact={true}>
        <Center>{subscribeProduct.name}</Center>
      </LinkOverlay>
      <Center mt="20px"><strong>RM{price}</strong></Center>
    </LinkBox>
  );
};

export default SubscribeCard;