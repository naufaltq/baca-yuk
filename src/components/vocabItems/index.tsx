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
import { VocabsDataProps } from '../../types/types';

const Vocabs = ({ coverImageURL, name, id, category, description }: VocabsDataProps) => {
    const linkToDescription = `/learn/${category}/${id}`
    return (
        <Flex p={2} maxW="6xl" alignItems="center" justifyContent="center" mt={8}>
            <Box
                maxW="2xl"
                maxH='6xl'
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                <Center>
                    <Image
                        src={coverImageURL}
                        alt={`Picture of ${name}`}
                        rounded="lg"
                        maxH='250px'
                        mt={4}
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
                                <Heading as='h3' size='md' textAlign='center'>{name}</Heading>
                                <Text fontSize='xs' textAlign='center' mt={2}>{description}</Text>
                            </Box>
                            <Center>
                                <Button
                                    as={ReactRouterLink}
                                    to={linkToDescription}
                                    mt={6}
                                    mb={4}
                                    flex={1}
                                    fontSize={'sm'}
                                    rounded={'full'}
                                    bg={'#009900'}
                                    color={'white'}
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
                                    Learn
                                </Button>
                            </Center>
                        </Flex>
                    </Center>
                </Box>
            </Box>
        </Flex>
    )
};


export default Vocabs;