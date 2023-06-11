export interface BooksDataProps  {
    coverImageURL: string,
    content: content[],
    name: string,
    id: string,
    category: string,
    description: string,
    author: string
}

export type content = {
    imageURL: string,
    description: string,
}

export type BreadcrumbProps = {
    currentPage: string;
}

export interface BooksComponentProps {
    booksList: string[]
}

export interface BookContainerProps{
    content: {
        imageURL: string,
        description: string
    }[],
    title: string
}