import {SimpleGrid, Heading} from "@chakra-ui/react";
import Books from '../books';
import useFetchFirebase from "../../redux/slices/fetchFirebase";

const NatureBooksComponent = ({ firstSlice, lastSlice }: { firstSlice: number; lastSlice: number }) => {
    const {data} = useFetchFirebase("books");
    const dataSlice = data.slice(firstSlice, lastSlice);

    return (
        <div className="container">
            <Heading mt={10}>Alam</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="4">
                {dataSlice !== undefined && dataSlice.map((item) => {
                    return (
                        <Books
                            coverImageURL={item.coverImageURL}
                            content={item.content}
                            name={item.name}
                            id={item.id}
                            key={item.id}
                            category={item.category}
                            description={item.description}
                            author={item.author} />
                    )
                })}
            </SimpleGrid>
        </div>

    )
}

export default NatureBooksComponent;