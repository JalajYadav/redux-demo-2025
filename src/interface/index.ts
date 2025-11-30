export interface User {
    id: string,
    userId: string,
    firstName: string,
    lastName: string,
    description: string
}

export interface POST {
    id: string,
    content: string,
    postedBy: string,
    likes: number,
}