package com.example.chatBot.controller;

import com.example.chatBot.dto.*;
import com.example.chatBot.model.Conversations.Conversation;
import com.example.chatBot.model.Conversations.Messages;
import com.example.chatBot.service.AdminChartsService;
import com.example.chatBot.service.ChatBotService;
import com.example.chatBot.service.ConversationService;
import com.example.chatBot.service.MachineLearningService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chatBots")
@RequiredArgsConstructor
public class ChatBotController {
    private final ChatBotService chatBotService;

    private final MachineLearningService machineLearningService;

    private final ConversationService conversationService;

    private final AdminChartsService adminChartsService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createChatBot(@RequestBody ChatBotRequest chatBotRequest) {
        chatBotService.createChatBot(chatBotRequest);
    }



    @PutMapping("/{id}")
    public void updateChatbot(@PathVariable String id, @RequestBody updateRequest request) {
        chatBotService.updateChatbot(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteChatBot(@PathVariable("id") String id) {
        chatBotService.deleteChatBot(id);
    }

    @GetMapping("/{id}")
    public List<ChatBotResponse> getChatbotsByUserId(@PathVariable("id") String id) {
        return chatBotService.getChatbotsByUserId(id);
    }


    @PostMapping("/amazonChatbotResponse")
    public String responseAmazon(@RequestBody String input)
    {
        return machineLearningService.response(input, "C:/Users/ASUS/OneDrive/Bureau/pfe/pfe-project2/" +
                "PorjectBackend/chatbotAlgo/amazon/amazon_qna_bot.py");
    }

    @PostMapping("/tripAdvChatbotResponse")
    public String responseTripadvi(@RequestBody String input)
    {
        return machineLearningService.response(input, "C:/Users/ASUS/OneDrive/Bureau/pfe/pfe-project2/" +
                "PorjectBackend/chatbotAlgo/TripAdvisor/tripadv_chatbot.py");
    }

    @PostMapping("/conversations")
    @ResponseStatus(HttpStatus.CREATED)
    public void createConversation(@RequestBody ConversationReq conversationReq) {
        conversationService.createConversation(conversationReq);
    }

    @PutMapping("/conversations/{id}")
    public void sendMessages(@RequestBody Messages messages, @PathVariable("id") String id) {
        conversationService.sendMessages(messages, id);
    }

    @GetMapping("/conversations/{id}")
    public List<Messages> load_Conversation(@PathVariable("id") String id){
         return conversationService.load_Conversation(id);
    }

    @GetMapping("/chartsData/chatBotsPercentageByType")
    public BotPercentageByTypeRes getBotsPercentageByType() {
        return adminChartsService.getBotsPercentageByType();
    }

    @GetMapping("/chartsData/GenderPercentages")
    public GenderPercentagesRes getGenderPercentages(){
        return adminChartsService.getGenderPercentages();
    }
    //GenderPercentagesRes

    @GetMapping("/chartsData/lastBotsInfos")
    public List<LastBotsRes> getlastBotsInfos(){
        return adminChartsService.getlastBotsInfos();
    }




}
