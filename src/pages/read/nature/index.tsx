import { Container, Center } from "@chakra-ui/react";
import { BreadcrumbForNaturePage } from "../../../components/breadcrumb";
import NatureBooksComponent from "../../../components/nature";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

const Nature = () => {
    const natureBooksJSONData = useAppSelector((state : RootState) => state.natureBooks.jsonData.json);
    return (
        <Container minH='90vh' maxW='7xl' mb={10} mr='113px' p={3}>
            <Center mt={-10}>
                <BreadcrumbForNaturePage currentPage={'Alam'} />
            </Center>
            <NatureBooksComponent booksList={natureBooksJSONData} />
        </Container>
    )
}

export default Nature;