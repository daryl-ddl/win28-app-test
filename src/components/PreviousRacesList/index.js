import { useEffect } from 'react';
import { Stack, StackDivider, Skeleton } from '@chakra-ui/react';
import PreviousRacesListItem from './PreviousRacesListItem/index';

const PreviousRacesList = ({ setPageTitle, raceMeetingsList }) => {
  useEffect(() => {
    setPageTitle('Previous Races');
    document.title = 'Previous Races';
  }, [setPageTitle]);

  const previousRacesListItems = raceMeetingsList.raceMeetings.map((raceMeeting) => {
    return <PreviousRacesListItem key={raceMeeting.id} raceMeeting={raceMeeting} />;
  });

  return (
    <Skeleton height="60%" isLoaded={raceMeetingsList.isLoaded}>
      <Stack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={1}>
        {previousRacesListItems}
      </Stack>
    </Skeleton>
  );
}

export default PreviousRacesList;