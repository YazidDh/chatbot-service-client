package com.example.chatBot.dto;


import com.example.chatBot.model.Chatbot.SiteInfo;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatBotRequest {
    private String title;
    private SiteInfo siteInfo;
    private String userId;
}
