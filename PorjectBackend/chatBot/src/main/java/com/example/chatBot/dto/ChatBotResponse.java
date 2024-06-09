package com.example.chatBot.dto;

import com.example.chatBot.model.Chatbot.SiteInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ChatBotResponse {
    private String id;
    private String title;
    private SiteInfo siteInfo;
    private String userId;
}
