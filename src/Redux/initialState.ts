import type { POST, USER } from "../interface"

export const usersInitialState: USER[] = [{
    id: 'abcd-efgh-ijkl-890734912',
    userId: 'agnostic12',
    firstName: 'John',
    lastName: 'Connor',
    description: 'This is the Admin USER'
}]

export const postsInitialState: POST[] = [{
    id: 'abaa-vber-vwea-23498722',
    content: 'This is the initial post made by John Connor. Evidently the first post.',
    postedBy: 'abcd-efgh-ijkl-890734912',
    likes: 10
}]

