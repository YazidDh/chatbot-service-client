package com.example.chatBot.dto;

import com.example.chatBot.model.Conversations.Messages;
import com.example.chatBot.model.Conversations.Participants;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ConversationReq {
    private Participants participants;
    private Messages[] messages;
}
