import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Carousel = () => {
  
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Ikan Tipis',
      text:
        "Ikan tipis lalu dijemur. “Kapan ikan tipis ini kering, Tante?” tanya Yamad. Tante Nuy tertawa, “Kamu sudah tidak sabar, ya?” Yamad tidak sabar menunggku ikannya kering, Yamad ingin segera memasak ikannya",
      image:
        'images/ikan-tipis.jpg',
    },
    {
      title: 'Enggang yang Istimewa',
      text:
        "Dalam perjalanan pulang Kuleh dan Inai kembali bersenandung. Kuleh sekarang paham arti lagu itu. Enggang memang berjasa.",
      image:
        'images/enggang.jpg',
    },
    {
      title: 'Kepiting untuk Makan Malam',
      text:
        "Begitu sampai di dermaga, Apuy segera berlari. 'Aku antar kepiting dulu ke rumah!' ujarnya. “Apuy! Kamu lupa mengikat perahumu!” panggil Sahran.",
      image:
        'images/kepiting.jpg',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'500px'}
      width={'full'}
      overflow={'hidden'}>
      
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
      
      <IconButton
        aria-label="left-arrow"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      
      <IconButton
        aria-label="right-arrow"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'1xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            
            <Container size="container.lg" height="500px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading color= "Ivory" fontSize={{ base: '3xl', md: '1xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="Ivory">
                  {card.text}
                </Text>
                <div>
                  <Link to="/read">
                      <Button 
                          flex={1}
                          fontSize={'md'}
                          rounded={'xl'}
                          bg={'#009900'}
                          color={'white'}
                          size='lg'
                          w='180px'
                          _hover={{
                              bg: 'green',
                          }}
                          _focus={{
                              bg: '#1f8915',
                          }}>
                          Baca
                      </Button>
                  </Link>
                </div>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default Carousel;