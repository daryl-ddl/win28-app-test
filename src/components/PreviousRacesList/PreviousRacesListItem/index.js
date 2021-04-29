import {
  Flex,
  Box,
  Text,
  Center,
  LinkBox,
  LinkOverlay,
  useDisclosure
} from '@chakra-ui/react';
import { format } from 'date-fns';
import ReactCountryFlag from 'react-country-flag';
import RaceMeetingModal from '../../RaceMeetingModal/index';

const PreviousRacesListItem = ({ raceMeeting }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const raceDate = new Date(raceMeeting.race_date);

  let countryName = 'Singapore';
  let venueName = '';
  if (raceMeeting.country_code === 'MY') {
    countryName = 'Malaysia';
  } else if (raceMeeting.country_code === 'HK') {
    countryName = 'Hong Kong'
  }
  if (raceMeeting.venue_code === 'SL') {
    venueName = 'Selangor';
  } else if (raceMeeting.venue_code === 'HV') {
    venueName = 'Happy Valley';
  }

  raceMeeting.country_name = countryName;
  raceMeeting.venue_name = venueName;

  return (
    <LinkBox>
      <LinkOverlay href="#/previous-races" onClick={onOpen}>
        <Flex>
          <Box pr={3} minW="90px">
            <Center>
              <Text fontSize="2xl"><strong>{format(raceDate, 'dd')}</strong></Text>
            </Center>
            <Center>
              <Text align="center" lineHeight={1.2} fontSize="sm">
                {format(raceDate, 'MMM yyyy')}<br />
                {format(raceDate, 'EEEE')}
              </Text>
            </Center>
            <RaceMeetingModal raceMeeting={raceMeeting} isOpen={isOpen} onClose={onClose} />
          </Box>
          <Flex>
            <Flex align="center" mr={1} mt={2} border="1px" borderColor="gray.200" w="28px" h="22px">
              <ReactCountryFlag svg countryCode={raceMeeting.country_code} style={{ width: "28px", height: "28px" }} />
            </Flex>
            <Box>
              <Text d="inline-block" fontSize="2xl">
                <strong>{countryName}</strong>
              </Text>
              <Text>{venueName}</Text>
            </Box>
          </Flex>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
};

export default PreviousRacesListItem;