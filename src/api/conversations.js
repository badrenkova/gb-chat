import { child, get, ref, set, remove } from "firebase/database"
import { database } from "./firebase"

export const getConversationsApi = () => {
    return get(child(ref(database), 'conversations'))
}

export const createConversationApi = (conversation) => {
    return set(child(ref(database), `conversations/${conversation}`), conversation)
}

export const removeConversationApi = (conversation) => {
    return (
        remove(child(ref(database), `conversations/${conversation}`)),
        remove(child(ref(database), `messages/${conversation}`))
    )
}