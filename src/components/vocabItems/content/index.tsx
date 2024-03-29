import { Center, Image, Box, IconButton, useBreakpointValue, Text, Stack, Container } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai';
import axios from 'axios';
import { VocabsDataProps } from '../../../types/types';
import { BreadcrumbForVocabContent } from '../../breadcrumb';
import { Wrap, WrapItem } from '@chakra-ui/react';


const VocabContent = () => {
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [slider, setSlider] = useState<Slider | null>(null);
    const params = useParams();
    const vocabID = params?.id;
    const [data, setData] = useState<VocabsDataProps>();
    const vocabsDaily = ['V001', 'V002', 'V003'];

    useEffect(() => {
        vocabsDaily.includes(vocabID!) && getVocabContentFromID().then((res) => setData(res));
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        data !== undefined && (document.title = data?.name + ' - Learn Baca Yuk')
        // eslint-disable-next-line 
    }, [data])

    const getVocabContentFromID = async (): Promise<VocabsDataProps> => {
        const data: any =
            await axios
                .get(`/data/vocab/${vocabID}.json`)
                .catch(err => console.log(err));
        return data.data;
    }

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '10px' });

    return (
        <Container minH='90vh' maxW='100vh' mb={10}>
            <Center>
                {data !== undefined && data.category === 'vocabs' &&
                    <BreadcrumbForVocabContent
                        currentPage={data.name} />}
                {data !== undefined && data.category === 'funfact' &&
                    <BreadcrumbForVocabContent
                        currentPage={data.name} />}
            </Center>
            <Center mt={8}>
                <Stack direction='column'>
                    <Center >
                        <Text fontSize='3xl' as='h2' mb={8}>{data?.name}</Text>
                    </Center>
                    <Box
                        position={'relative'}
                        height={'full'}
                        width={'800px'}
                        overflow={'hidden'}>
                        {/* CSS files for react-slick */}
                        <link
                            rel="stylesheet"
                            type="text/css"
                            charSet="UTF-8"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                        />
                        <link
                            rel="stylesheet"
                            type="text/css"
                            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                        />
                        {/* Left Icon */}
                        <IconButton
                            aria-label="left-arrow"
                            bg={'#009900'}
                            _hover={{ 
                                bg: 'green',
                             }}
                            colorScheme="teal"
                            borderRadius="full"
                            position="absolute"
                            left={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickPrev()}>
                            <AiOutlineDoubleLeft />
                        </IconButton>
                        {/* Right Icon */}
                        <IconButton data-testid="button-slider"
                            aria-label="right-arrow"
                            bg={'#009900'}
                            _hover={{ 
                                bg: 'green',
                             }}
                            colorScheme="teal"
                            borderRadius="full"
                            position="absolute"
                            right={side}
                            top={top}
                            transform={'translate(0%, -50%)'}
                            zIndex={2}
                            onClick={() => slider?.slickNext()}>
                            <AiOutlineDoubleRight />
                        </IconButton>
                        {/* Slider */}
                        <Slider {...settings} ref={(slider) => setSlider(slider)}>
                            {data?.content.map(({ imageURL }, index) => (
                                <Wrap spacing='30px' justify='center' className="vocab" key={index}>
                                    <WrapItem>
                                        <Center>
                                            <Image src={imageURL} alt={imageURL} mb={4} borderRadius='xl' width="300px" />
                                        </Center>
                                    </WrapItem>
                                </Wrap>
                            ))}
                        </Slider>
                    </Box>
                </Stack>
            </Center>
        </Container>
    );

}

export default VocabContent;