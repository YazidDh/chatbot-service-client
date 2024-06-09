package com.example.chatBot.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LastBotsRes {
    private String fullname;
    private String email;
    private String botTitle;
    private String SiteName;
}
