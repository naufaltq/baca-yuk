import Vocab from '../../components/vocab';
import { Center, Container } from '@chakra-ui/react';
import { BreadcrumbForLearnPage } from '../../components/breadcrumb';
import { useEffect } from 'react';

const Learn = () => {

  useEffect(() => {
    document.title = 'Learn - Baca Yuk'
  }, [])

  return (
    <>
      <Center>
        <BreadcrumbForLearnPage
          currentPage={'Learn'} />
      </Center>
      <Container minH='90vh' maxW='6xl'>
        <Vocab />
      </Container>
    </>
  )
}

export default Learn;
