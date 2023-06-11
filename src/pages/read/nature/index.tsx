import { Container, Center } from "@chakra-ui/react";
import { BreadcrumbForNaturePage } from "../../../components/breadcrumb";
import NatureBooksComponent from "../../../components/nature";
import { useAppSelector } from "../../../redux/hooks";
import { RootState } from "../../../redux/store";

const Nature = () => {
    const natureBooksJSONData = useAppSelector((state : RootState) => state.natureBooks.jsonData.json);
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