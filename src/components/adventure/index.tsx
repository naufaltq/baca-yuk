import { Container, SimpleGrid, Heading} from "@chakra-ui/react";
import Books from '../books';
import { useEffect,  } from "react";
import { fetcherBooksData } from "../../api-call/fetchJSONData";
import { BooksComponentProps } from "../../types/types";
import { setAdventureBooksData } from "../../redux/slices/adventureBooksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const AdventureBooksComponent = ({booksList}: BooksComponentProps) => {
    const adventureBookData = useAppSelector((state: RootState) => state.adventureBooks.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const setAdventureBooksDataToState = async () => {
            booksList!== undefined && Promise.all(fetcherBooksData(booksList)).then((item) => {
                dispatch(setAdventureBooksData(item));
            })
        }
        
        adventureBookData !== undefined && setAdventureBooksDataToState();
    }, [])


    return (
        <Container maxW='7xl' mr='100px'>
            <Heading mt={10} ml='1'>Petualangan</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="4">
                {adventureBookData !== undefined && adventureBookData.map((item) =>
                    <Books
                        coverImageURL={item.coverImageURL}
                        name={item.name}
                        id={item.id}
                        key={item.id}
                        description={item.description}
                        category={item.category}
                        content={item.content}
                        author={item.author}
                    />
                )}
            </SimpleGrid>
        </Container>
    )
}

export default AdventureBooksComponent;