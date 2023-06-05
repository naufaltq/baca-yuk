import { Center } from '@chakra-ui/react';
import { BreadcrumbForReadPage } from '../../components/breadcrumb';
import NatureBooksComponent from '../../components/nature';
import AdventureBooksComponent from '../../components/adventure'

const Read = () => {
    return (
        <div>
            <Center>
                <BreadcrumbForReadPage
                    currentPage={'Read'} />
            </Center>
            <AdventureBooksComponent />
            <NatureBooksComponent />
        </div>

    )
}

export default Read;