import { Container, Center } from "@chakra-ui/react";
import AdventureBooksComponent from "../../../components/adventure";
import { BreadcrumbForAdventurePage } from "../../../components/breadcrumb";

const Adventure = () => {
    const adventureBooks = ['/data/book/A001.json', '/data/book/A002.json', '/data/book/A003.json', '/data/book/A004.json', '/data/book/A005.json', '/data/book/A006.json', '/data/book/A007.json'];
    return (
        <Container maxW='6xl' mb={10}>
            <Center>
                <BreadcrumbForAdventurePage currentPage={'Petualangan'} />
            </Center>
            <AdventureBooksComponent booksList={adventureBooks} />
        </Container>
    )
}

export default Adventure;
