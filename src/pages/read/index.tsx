import { useEffect } from 'react';
import { Center, Button, Heading } from '@chakra-ui/react';
import { BreadcrumbForReadPage } from '../../components/breadcrumb';
import NatureBooksComponent from '../../components/nature';
import AdventureBooksComponent from '../../components/adventure'
import { Link as ReactRouterLink } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import useFetchFirebase from '../../redux/slices/fetchFirebase';

const Read = () => {
    const {data, loading} = useFetchFirebase("books");
    const adventureBooks = useAppSelector((state : RootState) => state.adventureBooks.jsonData.json);
    const natureBooks = useAppSelector((state : RootState) => state.natureBooks.jsonData.json);
    const natureBooksWithSlice = natureBooks.slice(0, 4);

    useEffect(() => {
        document.title = 'Read - Baca Yuk'
        // eslint-disable-next-line 
    }, [])

    return (
        <>
            <Center mt={-10}>
                <BreadcrumbForReadPage currentPage={'Read'} />
            </Center>
            <Center>
                <Heading size='2xl' as='h1' mt={4} mb={8}>Semua Kategori</Heading>
            </Center>
            <AdventureBooksComponent firstSlice={0} lastSlice={4}/>
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
            <NatureBooksComponent firstSlice={8} lastSlice={12}/>
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