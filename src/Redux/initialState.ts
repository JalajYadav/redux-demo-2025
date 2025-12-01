import type { POST, USER } from "../interface"

export const usersInitialState: USER[] = [{
    id: 'abcd-big-random-890734912',
    userId: 'agnostic12',
    firstName: 'John',
    lastName: 'Smith',
    description: 'This is the Admin USER'
}]

export const postsInitialState: POST[] = [{
    id: crypto.randomUUID(),
    content: 'This is the initial post made by John Smith. Evidently the first post.',
    postedBy: 'abcd-big-random-890734912',
    likes: 10
}]

