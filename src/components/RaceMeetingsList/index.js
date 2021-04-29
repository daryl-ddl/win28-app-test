import { useEffect } from 'react';
import { Stack, StackDivider, Skeleton } from '@chakra-ui/react';
import RaceMeetingsListItem from './RaceMeetingsListItem/index';

const RaceMeetingsList = ({ setPageTitle, raceMeetingsList }) => {
  useEffect(() => {
    setPageTitle('Race Meetings');
    document.title = 'Race Meetings';
  }, [setPageTitle]);

  const raceMeetingsListItems = raceMeetingsList.raceMeetings.map((raceMeeting) => {
    return <RaceMeetingsListItem key={raceMeeting.id} raceMeeting={raceMeeting} />;
  });

  return (
    <Skeleton height="60%" isLoaded={raceMeetingsList.isLoaded}>
      <Stack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={1}>
        {raceMeetingsListItems}
      </Stack>
    </Skeleton>
  );
}

export default RaceMeetingsList;