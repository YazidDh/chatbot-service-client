package com.example.chatBot.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BotPercentageByTypeRes {
    private float amazon;
    private float tripAdvisor;
}
