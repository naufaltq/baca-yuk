import { Container, Center } from "@chakra-ui/react";
import { BreadcrumbForNaturePage } from "../../../components/breadcrumb";
import NatureBooksComponent from "../../../components/nature";

const Nature = () => {
    const natureBooksJSONData = ['/data/book/N001.json', '/data/book/N002.json', '/data/book/N003.json'];
    return (
        <Container maxW='6xl' mb={10}>
            <Center>
                <BreadcrumbForNaturePage currentPage={'Alam'} />
            </Center>
            <NatureBooksComponent booksList={natureBooksJSONData} />
        </Container>
    )
}

export default Nature;