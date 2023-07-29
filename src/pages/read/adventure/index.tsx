import { useEffect } from "react";
import { Container, Center } from "@chakra-ui/react";
import AdventureBooksComponent from "../../../components/adventure";
import { BreadcrumbForAdventurePage } from "../../../components/breadcrumb";

const Adventure = () => {
    useEffect(() => {
        document.title = 'Read Petualangan - Baca Yuk'
        // eslint-disable-next-line 
    }, [])

    return (
        <div>
            <Center mt={-10}>
                <BreadcrumbForAdventurePage currentPage={'Petualangan'} />
            </Center>
            <AdventureBooksComponent firstSlice={0} lastSlice={8}/>
        </div>
    )
}

export default Adventure;
