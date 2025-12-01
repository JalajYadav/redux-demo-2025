export interface USER {
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

export interface ReduxState {
    posts: POST[],
    users: USER[]
}