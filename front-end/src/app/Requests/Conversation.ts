export interface conversation {
    id?: string,
    participants: Participants,
    messages: Messages[]
}

export interface Participants{
    userId: string,
    chatbotId: string
}

export interface Messages  {
    user: string,
    bot: string
}