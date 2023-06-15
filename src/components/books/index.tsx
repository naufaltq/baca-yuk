import {
    Flex,
    Box,
    Image,
    Button,
    Center,
    Heading,
    Text
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'

import { BooksDataProps } from '../../types/types';

const Books = ({ coverImageURL, name, id, category, description, author }: BooksDataProps) => {
    const linkToContent = `/read/${id}`
    return (
        <Flex maxW="6xl" alignItems="center" justifyContent="center" mt={8}>
            <Box
                maxW="2xl"
                maxH="6xl"
                borderWidth="1px"
                rounded="lg"
                p={3}
                shadow="lg"
                position="relative">
                <Center>
                    <Image
                        src={coverImageURL}
                        alt={`Picture of ${name}`}
                        rounded="lg"
                        maxH='165px'
                    />
                </Center>
                <Box p="2" mt='2'>
                    <Center w='full'>
                        <Flex mt="15px" justifyContent="space-between" flexDirection="column" alignContent="center">
                            <Box
                                fontSize="xl"
                                fontWeight="semibold"
                                lineHeight="tight"
                            >
                                <Heading size='md'>{name}</Heading>
                                <Text color='gray.500' fontSize='sm' mt={1}>{author}</Text>
                                <Text fontSize='xs' mt={2} noOfLines={[1, 2]}>{description}</Text>
                            </Box>
                            <Center>
                                    <Button
                                        as={ReactRouterLink} 
                                        to={linkToContent}
                                        mt={6}
                                        mb={4}
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        bg={'#009900'}
                                        color={'#fff'}
                                        size='lg'
                                        w='80%'
                                        boxShadow={
                                            '0 12px 24px rgba(31,137,21,.24),0 2px 6px rgba(31,137,21,.16),0 0 1px rgba(0,0,0,.08)!important;'
                                        }
                                        _hover={{
                                            bg: 'green',
                                        }}
                                        _focus={{
                                            bg: 'green',
                                        }}>
                                        Baca
                                    </Button>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
            </Box>
        </Flex>
    )
};


export default Books;