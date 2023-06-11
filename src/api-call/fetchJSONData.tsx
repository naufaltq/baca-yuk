import { BooksDataProps } from "../types/types";
import axios from "axios";


const fetchBooksData = async (pathURL: string): Promise<BooksDataProps> => {
    const data: any =
        await axios
            .get(pathURL)
            .catch(err => console.log(err));
    return data.data;
}

export const fetcherBooksData = (booksData: string[]) => booksData.map(book => fetchBooksData(book));

export const fetchBookContentFromID = async (bookID: string | undefined) : Promise<BooksDataProps> => { //will run this if there is no data in redux state
    const data: any =
        await axios
            .get(`/data/book/${bookID}.json`)
            .catch(err => console.log(err));
    return data.data;
} 