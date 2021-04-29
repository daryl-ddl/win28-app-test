import { Flex, Stack, Text } from "@chakra-ui/react";
import { format } from "date-fns";

const RaceMeetingModalListItem = ({ raceCard }) => {
  const raceDateTime = new Date(raceCard.race_date + ' ' + raceCard.race_time);

  return (
    <Flex w="100%">
      <Stack px={1} spacing="0" my="auto">
        <Text fontSize="2xl" align="center" lineHeight="1.2"><strong>{'R' + raceCard.race_no}</strong></Text>
        <Text align="center">{format(raceDateTime, 'h:mmaaa')}</Text>
      </Stack>
      <Stack px={1} flex="1" spacing="0" justify="space-between">
        <Text fontSize="xl" lineHeight="1.2"><strong>{raceCard.race_class_div + ' ' + raceCard.race_name}</strong></Text>
        <Text>{raceCard.race_distance + ' ' + raceCard.race_stake}</Text>
      </Stack>
    </Flex>
  );
}

export default RaceMeetingModalListItem;