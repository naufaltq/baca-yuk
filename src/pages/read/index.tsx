import { Center, Button, Heading } from '@chakra-ui/react';
import { BreadcrumbForReadPage } from '../../components/breadcrumb';
import NatureBooksComponent from '../../components/nature';
import AdventureBooksComponent from '../../components/adventure'
import { Link as ReactRouterLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const Read = () => {
    const adventureBooks = useAppSelector((state : RootState) => state.adventureBooks.jsonData.json);
    const adventureBooksWithSlice = adventureBooks.slice(0, 4);
    const natureBooks = useAppSelector((state : RootState) => state.natureBooks.jsonData.json);
    const natureBooksWithSlice = natureBooks.slice(0, 4);

    return (
        <>
            <Center mt={-10}>
                <BreadcrumbForReadPage currentPage={'Read'} />
            </Center>
            <Center>
                <Heading size='2xl' as='h1' mt={4} mb={8}>Semua Kategori</Heading>
            </Center>
            <AdventureBooksComponent booksList={adventureBooksWithSlice} />
            <Center>
                <Button
                    as={ReactRouterLink}
                    to='adventure' 
                    mt={10}
                    mb={5}
                    flex={1}
                    fontSize={'sm'}
                    rounded={'xl'}
                    bg={'gray.600'}
                    color={'white'}
                    size='lg'
                    maxW='180px'
                    variant='outline'
                    _hover={{
                        bg: '#009900',
                    }}
                    _focus={{
                        bg: '#1f8915',
                    }}>
                    Lihat Semua
                </Button>
            </Center>
            <NatureBooksComponent booksList= {natureBooksWithSlice} />
            <Center mb={10}>
                <Button
                    as={ReactRouterLink} 
                    to='nature' 
                    mt={10}
                    mb={4}
                    flex={1}
                    fontSize={'sm'}
                    rounded={'xl'}
                    bg={'gray.600'}
                    color={'white'}
                    size='lg'
                    maxW='180px'
                    _hover={{
                        bg: '#1f8915',
                    }}
                    _focus={{
                        bg: '#1f8915',
                    }}>
                    Lihat semua
                </Button>
            </Center>
        </>
    )
}

export default Read;