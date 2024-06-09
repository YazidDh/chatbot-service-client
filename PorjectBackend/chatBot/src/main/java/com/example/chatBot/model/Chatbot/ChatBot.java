package com.example.chatBot.model.Chatbot;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(value = "chatbots")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatBot {
    @Id
    private String id;
    private String title;
    private SiteInfo siteInfo;
    private String userId;

}
