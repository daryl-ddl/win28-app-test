import React from 'react';
import {
  Tr,
  Td,
} from "@chakra-ui/react";

const SubscribeTableRow = (props) => {
  return (
    <Tr>
      <Td>{props.cell1}</Td>
      <Td>{props.cell2}</Td>
      <Td>{props.cell3}</Td>
    </Tr>
  );
}

export default SubscribeTableRow;