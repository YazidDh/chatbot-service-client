package com.example.chatBot.repo;

import com.example.chatBot.dto.ChatBotResponse;
import com.example.chatBot.model.Chatbot.ChatBot;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ChatBotRepository extends MongoRepository<ChatBot, String> {
    public List<ChatBotResponse> findByUserId(String id);
    long countBySiteInfo_SiteNameAndUserId(String name, String userId);
    List<ChatBot> findUserIdBySiteInfo_SiteName(String siteName);
    List<ChatBot> findFirst10ByOrderByIdDesc();
}
