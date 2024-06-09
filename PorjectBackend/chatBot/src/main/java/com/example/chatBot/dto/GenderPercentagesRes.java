package com.example.chatBot.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class GenderPercentagesRes {
    private Gender general;
    private Gender amazon;
    private Gender tripAdvisor;

}

