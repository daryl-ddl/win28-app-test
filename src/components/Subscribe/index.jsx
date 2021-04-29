import React, { useEffect } from 'react';
import SubscribeCard from './SubscribeCard/index.jsx';
import SubscribeTable from './SubscribeTable/index.jsx';
import { SimpleGrid, Skeleton } from '@chakra-ui/react';

const Subscribe = ({ setPageTitle, subscribe }) => {
  useEffect(() => {
    setPageTitle('Subscribe');
    document.title = 'Subscribe';
  }, [setPageTitle]);

  const subscribeCards = subscribe.products.map((subscribeProduct) => {
    return <SubscribeCard key={subscribeProduct.id} subscribeProduct={subscribeProduct} />
  });

  return (
    <>
      <Skeleton height="100px" my="20px" isLoaded={subscribe.isLoaded}>
        <SimpleGrid minChildWidth="250px" spacing="20px">
          {subscribeCards}
        </SimpleGrid>
      </Skeleton>
      <SubscribeTable />
    </>
  );
}

export default Subscribe;