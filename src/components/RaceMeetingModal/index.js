import {
  VStack,
  StackDivider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import RaceMeetingModalListItem from './RaceMeetingModalListItem/index';

const RaceMeetingModal = ({ isOpen, onClose, raceMeeting }) => {
  const raceMeetingModalList = raceMeeting.race_list.map((raceCard) => {
    return <RaceMeetingModalListItem key={raceCard.id} raceCard={raceCard} />;
  });

  let modalTitle = raceMeeting.country_name;
  if (raceMeeting.venue_name) {
    modalTitle += ', ' + raceMeeting.venue_name;
  }
  modalTitle += ' - ' + format(new Date(raceMeeting.race_date), 'd MMM');

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} size="xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack divider={<StackDivider borderColor="gray.200" />}>
            {raceMeetingModalList}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default RaceMeetingModal;