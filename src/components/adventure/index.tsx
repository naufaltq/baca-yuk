import {SimpleGrid, Heading} from "@chakra-ui/react";
import Books from '../books';
import useFetchFirebase from "../../redux/slices/fetchFirebase";

const AdventureBooksComponent = ({ firstSlice, lastSlice }: { firstSlice: number; lastSlice: number }) => {
    const {data} = useFetchFirebase("books");
    const dataSlice = data.slice(firstSlice, lastSlice);

    return (
        <div className="container">
            <Heading mt={10}>Petualangan</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="4">
                {dataSlice !== undefined && dataSlice.map((item) =>
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
        </div>
    )
}

export default AdventureBooksComponent;