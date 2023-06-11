import { Container, Center } from "@chakra-ui/react";
import AdventureBooksComponent from "../../../components/adventure";
import { BreadcrumbForAdventurePage } from "../../../components/breadcrumb";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

const Adventure = () => {
    const adventureBooksJSONData = useAppSelector((state : RootState) => state.adventureBooks.jsonData.json)
    return (
        <Container minH='90vh' maxW='6xl' mb={10}>
            <Center>
                <BreadcrumbForAdventurePage currentPage={'Petualangan'} />
            </Center>
            <AdventureBooksComponent booksList={adventureBooksJSONData} />
        </Container>
    )
}

export default Adventure;
