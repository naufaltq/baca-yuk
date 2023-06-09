import {
    Flex,
    Box,
    Image,
    Button,
    Center,
    Link,
    Heading,
    Text
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom'

import { BooksDataProps } from '../../types/types';

const Books = ({ coverImageURL, name, id, category, description, author }: BooksDataProps) => {
    const categoryWithSlug = category.replaceAll(" ", "-")
    const linkToContent = `/read/${categoryWithSlug}/${id}`
    return (
        <Flex p={2} maxW="6xl" alignItems="center" justifyContent="center" mt={8}>
            <Box
                maxW="2xl"
                maxH="6xl"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Center>
                    <Image
                        src={coverImageURL}
                        alt={`Picture of ${name}`}
                        rounded="lg"
                        maxH='150px'
                        mt={3}
                    />
                </Center>
                <Box p="6">
                    <Center w='full'>
                        <Flex mt="1" justifyContent="space-between" flexDirection="column" alignContent="center">
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
                                <Link as={ReactRouterLink} to={linkToContent}>
                                    <Button
                                        mt={6}
                                        mb={4}
                                        flex={1}
                                        fontSize={'sm'}
                                        rounded={'full'}
                                        bg={'#009900'}
                                        color={'#fff'}
                                        size='lg'
                                        w='300px'
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
                                </Link>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
            </Box>
        </Flex>
    )
};


export default Books;