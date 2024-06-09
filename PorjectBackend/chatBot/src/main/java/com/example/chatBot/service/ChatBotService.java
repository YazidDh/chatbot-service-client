package com.example.chatBot.service;


import com.example.chatBot.dto.ChatBotRequest;
import com.example.chatBot.dto.ChatBotResponse;
import com.example.chatBot.dto.updateRequest;
import com.example.chatBot.model.Chatbot.ChatBot;
import com.example.chatBot.repo.ChatBotRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class ChatBotService {
    private final ChatBotRepository chatBotRepository;

    public void createChatBot(ChatBotRequest chatBotRequest) {
        ChatBot chatBot = ChatBot.builder()
                .title(chatBotRequest.getTitle())
                .siteInfo(chatBotRequest.getSiteInfo())
                .userId(chatBotRequest.getUserId())
                .build();
        chatBotRepository.save(chatBot);
    }


    public void updateChatbot(String id, updateRequest request) {
        ChatBot chatbot = chatBotRepository.findById(id).orElseThrow();
        chatbot.setTitle(request.getTitle());

        chatBotRepository.save(chatbot);
    }

    public void deleteChatBot(String id) {
        chatBotRepository.deleteById(id);
    }

    public List<ChatBotResponse> getChatbotsByUserId(String id) {
        return chatBotRepository.findByUserId(id);
    }





}
