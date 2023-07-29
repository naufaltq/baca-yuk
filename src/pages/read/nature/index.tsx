import { useEffect } from "react";
import { Container, Center } from "@chakra-ui/react";
import { BreadcrumbForNaturePage } from "../../../components/breadcrumb";
import NatureBooksComponent from "../../../components/nature";

const Nature = () => {

    useEffect(() => {
        document.title = 'Read Alam - Baca Yuk'
        // eslint-disable-next-line 
    }, [])

    return (
        <div>
            <Center mt={-10}>
                <BreadcrumbForNaturePage currentPage={'Alam'} />
            </Center>
            <NatureBooksComponent firstSlice={8} lastSlice={17}/>
        </div>
    )
}

export default Nature;