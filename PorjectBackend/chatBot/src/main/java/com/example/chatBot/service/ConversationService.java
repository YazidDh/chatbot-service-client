package com.example.chatBot.service;

import com.example.chatBot.dto.ConversationReq;
import com.example.chatBot.model.Conversations.Conversation;
import com.example.chatBot.model.Conversations.Messages;
import com.example.chatBot.repo.ConversationsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ConversationService {
    private final ConversationsRepository repository;

    public void createConversation(ConversationReq conversationReq) {
        Conversation conv = Conversation.builder()
                .participants(conversationReq.getParticipants())
                .messages(List.of(conversationReq.getMessages()))
                .build();
        repository.save(conv);
    }

    public void sendMessages(Messages messagesReq, String id) {
        Conversation conv = repository.findConvByParticipants_ChatbotId(id);
        List<Messages> messages = conv.getMessages();
        messages.add(messagesReq);
        conv.setMessages(messages);

        repository.save(conv);
    }

    public List<Messages> load_Conversation(String id) {

        Conversation conv =repository.findConvByParticipants_ChatbotId(id);
        return conv.getMessages();
    }

}
