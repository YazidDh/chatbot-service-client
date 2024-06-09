package com.example.chatBot.model.Conversations;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Participants {
    private String userId;
    private String chatbotId;
}
