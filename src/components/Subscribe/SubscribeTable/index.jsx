import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption
} from "@chakra-ui/react"
import SubscribeTableRow from './row.jsx';

const SubscribeTable = () => {
  let checkSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38A169" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>;
  let xSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E53E3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;

  return (
    <Table variant="striped">
      <TableCaption textAlign="left">* Video subject to availability</TableCaption>
      <Thead>
        <Tr>
          <Th></Th>
          <Th>SUBSCRIBER</Th>
          <Th>MEMBER</Th>
        </Tr>
      </Thead>
      <Tbody>
        <SubscribeTableRow cell1="IFORMRATE" cell2={checkSvg} cell3="Race 1 of each meeting" />
        <SubscribeTableRow cell1="* RACE VIDEOS (DELAYED)" cell2={checkSvg} cell3="Race 1 of each meeting" />
        <SubscribeTableRow cell1="SELECTIONS" cell2={checkSvg} cell3="Race 1 of each meeting" />
        <SubscribeTableRow cell1="HORSE'S RECENT RUNS" cell2={checkSvg} cell3="Race 1 of each meeting" />
        <SubscribeTableRow cell1="RACE RESULTS" cell2={checkSvg} cell3="Race 1 of each meeting" />
        <SubscribeTableRow cell1="HORSE'S PERFORMANCE" cell2={checkSvg} cell3={xSvg} />
        <SubscribeTableRow cell1="JOCKEY'S PERFORMANCE" cell2={checkSvg} cell3={xSvg} />
        <SubscribeTableRow cell1="TRAINER'S PERFORMANCE" cell2={checkSvg} cell3={xSvg} />
      </Tbody>
    </Table>
  );
}

export default SubscribeTable;