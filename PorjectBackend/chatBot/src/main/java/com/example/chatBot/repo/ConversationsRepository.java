package com.example.chatBot.repo;

import com.example.chatBot.dto.ChatBotResponse;
import com.example.chatBot.model.Conversations.Conversation;
import com.example.chatBot.model.Conversations.Messages;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ConversationsRepository extends MongoRepository<Conversation, String> {
    Conversation findConvByParticipants_ChatbotId(String chatbotId);
}
