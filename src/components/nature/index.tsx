import { Container, SimpleGrid, Heading, Link, Box } from "@chakra-ui/react";
import { Link as ReactRouterLink } from 'react-router-dom'
import { useEffect } from 'react'
import Books from '../books';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { setNatureBooksData } from "../../redux/slices/natureBooksSlice";
import { fetcherBooksData } from "../../api-call/fetchJSONData";
import { BooksComponentProps } from "../../types/types";

const NatureBooksComponent = ({booksList}: BooksComponentProps) => {
    const natureBooksData = useAppSelector((state: RootState) => state.natureBooks.value)
    const dispatch = useAppDispatch();

    useEffect(() => {
        natureBooksData !== undefined && setFunFactsDataToState();
    }, [])

    const setFunFactsDataToState = async () => {
        booksList !== undefined && Promise.all(fetcherBooksData(booksList)).then((item) => {
            dispatch(setNatureBooksData(item));
        })
    }

    return (
        <Container maxW='6xl'>
            <Heading mt={14}>Alam</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
                {natureBooksData !== undefined && natureBooksData.map((item) => {
                    return (
                        <Books
                            coverImageURL={item.coverImageURL}
                            content={item.content}
                            name={item.name}
                            id={item.id}
                            category={item.category}
                            description={item.description}
                            author={item.author} />
                    )
                })}
            </SimpleGrid>
        </Container>

    )
}

export default NatureBooksComponent;