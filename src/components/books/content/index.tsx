import { Center, Text, Stack, Container, Flex, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BreadcrumbForAdventureBookContent, BreadcrumbForNatureBookContent } from '../../breadcrumb';
import { fetchBookContentFromID } from '../../../api-call/fetchJSONData';
import BookContainer from '../container';
import useFetchFirebase from '../../../redux/slices/fetchFirebase';
import { DocumentData } from 'firebase/firestore';

const BookContent = () => {
  const params = useParams();
  const bookID = params?.id;

  const [contentData, setContentData] = useState<DocumentData | undefined>();
  const { data, loading } = useFetchFirebase("books");

  useEffect(() => {
    const adventureBooksDataIDNew = data?.map((book) => {
      return book.id
    });
    const adventureBooksDataNew = data?.map((book) => {
      return book
    });
    const getBookContentFromID = () => {
      const filteredContentData = adventureBooksDataNew?.filter(content => content.id === bookID);
      if (filteredContentData?.length !== 0) {
        setContentData(filteredContentData[0]);
      } else {
        if (adventureBooksDataIDNew?.includes(bookID!)) {
          fetchBookContentFromID(bookID).then(res => setContentData(res));
        } else {
          return (
            <Center mt={24}><Text size='xl'>Konten Tidak Ditemukan</Text></Center>
          );
        }
      }
    }
    adventureBooksDataNew !== undefined && getBookContentFromID();
    // eslint-disable-next-line 
  }, [bookID, data])

  useEffect(() => {
    contentData !== undefined && (document.title = contentData?.name + ' - Read Baca Yuk')
    // eslint-disable-next-line 
}, [contentData, bookID])

  if (loading) {
    return (
      <Container minH='90vh' maxW='6xl' mb={10}>
        <Center>Loading...</Center>
      </Container>
    );
  }

  return (
    <Container minH='90vh' maxW='6xl' mb={10}>
      {contentData !== undefined &&
        <>
          <Center>
            {contentData.category === 'adventure' && <BreadcrumbForAdventureBookContent currentPage={contentData.name} />}
            {contentData.category === 'nature' && <BreadcrumbForNatureBookContent currentPage={contentData.name} />}
          </Center>
          <Center mt={8}>
            <Stack direction='column'>
              <Flex direction='column' mb={6}>
                <Center>
                  <Heading fontSize='3xl' as='h2' mb={1}>{contentData?.name}</Heading>
                </Center>
                <Center>
                  <Text color='gray.600'>Karya {contentData?.author}</Text>
                </Center>
              </Flex>
            </Stack>
          </Center>
          <BookContainer content={contentData.content} title={contentData.name} />
        </>
      }
    </Container>
  );
}

export default BookContent;
