package com.example.chatBot.service;

import com.example.chatBot.dto.BotPercentageByTypeRes;
import com.example.chatBot.dto.Gender;
import com.example.chatBot.dto.GenderPercentagesRes;
import com.example.chatBot.dto.LastBotsRes;
import com.example.chatBot.model.Chatbot.ChatBot;
import com.example.chatBot.repo.ChatBotRepository;
import com.example.loginAndRegistre.user.User;
import com.example.loginAndRegistre.user.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdminChartsService {
    private final ChatBotRepository chatBotRepository;
    private final UserRepository userRepository;

    public List<Long> botTypeCount() {
        List<Long> botCounts = new ArrayList<>();
        List<User> users = userRepository.findAllByRole("USER");
        long amazon_count = 0;
        for (User user:users) {
            long count = chatBotRepository.countBySiteInfo_SiteNameAndUserId("Amazon",user.getId());
            amazon_count += count;
        }
        long tripAdv_count = 0;
        for (User user:users) {
            long count = chatBotRepository.countBySiteInfo_SiteNameAndUserId("TripAdvisor",user.getId());
            tripAdv_count += count;
        }
        botCounts.add(amazon_count);
        botCounts.add(tripAdv_count);
        return botCounts;

    }
    public BotPercentageByTypeRes getBotsPercentageByType() {
        //List<User> users = userRepository.findAllByRole("USER");
        long amazon_count = botTypeCount().get(0);
        long tripAdv_count = botTypeCount().get(1);
        long totalBots_count = amazon_count + tripAdv_count;
        return BotPercentageByTypeRes.builder()
                .amazon((float) amazon_count/totalBots_count)
                .tripAdvisor((float) tripAdv_count / totalBots_count)
                .build();

    }
//GenderPercentagesRes
    public GenderPercentagesRes  getGenderPercentages() {
        String role = "USER";

        long male_count = userRepository.countByGenderAndRole("Male",role);
        long female_count = userRepository.countByGenderAndRole("Female",role);
        long totalUsers_count = male_count + female_count;
        List<ChatBot> UserIdsByAmazon = chatBotRepository.findUserIdBySiteInfo_SiteName("Amazon");
        long maleByAmazon = 0;
        long femaleByAmazon = 0;
        for (ChatBot chatBot : UserIdsByAmazon) {
            long amazon_male = userRepository.countByGenderAndIdInAndRole("Male", chatBot.getUserId(), role);
            maleByAmazon += amazon_male;
            long amazon_female = userRepository.countByGenderAndIdInAndRole("Female", chatBot.getUserId(), role);
            femaleByAmazon += amazon_female;
        }



        List<ChatBot> UserIdsByTripAdvisor = chatBotRepository.findUserIdBySiteInfo_SiteName("TripAdvisor");

        long maleByTripAdvisor = 0;
        long femaleByTripAdvisor = 0;
        for (ChatBot chatBot : UserIdsByTripAdvisor) {
            long tripAdvisor_male = userRepository.countByGenderAndIdInAndRole("Male", chatBot.getUserId(),
                    role);
            maleByTripAdvisor += tripAdvisor_male;
            long tripAdvisor_female = userRepository.countByGenderAndIdInAndRole("Female", chatBot.getUserId(),
                    role);
            femaleByTripAdvisor += tripAdvisor_female;
        }


        System.out.println(maleByAmazon +" --- "+ maleByTripAdvisor);

        System.out.println(femaleByAmazon +" --- "+ femaleByTripAdvisor);

        long amazon_count = femaleByAmazon + maleByAmazon;
        long tripAdv_count = femaleByTripAdvisor + maleByTripAdvisor;
        return GenderPercentagesRes.builder()
                .general(
                        Gender.builder()
                                .male((float) male_count / totalUsers_count)
                                .female((float) female_count / totalUsers_count)
                                .build()
                )
                .amazon(Gender.builder()
                        .male((float) maleByAmazon / amazon_count)
                        .female((float) femaleByAmazon / amazon_count)
                        .build())
                .tripAdvisor(Gender.builder()
                        .male((float) maleByTripAdvisor / tripAdv_count)
                        .female((float) femaleByTripAdvisor / tripAdv_count)
                        .build())
                .build();



    }


    public List<LastBotsRes> getlastBotsInfos() {
        List<ChatBot> chatBots = chatBotRepository.findFirst10ByOrderByIdDesc();
        List<LastBotsRes> LastBots = new ArrayList<LastBotsRes>();
        for (ChatBot chatBot : chatBots) {
            String title = chatBot.getTitle();
            String siteName = chatBot.getSiteInfo().getSiteName();
            String userId = chatBot.getUserId();
            User user = userRepository.findById(userId);
            String userName = user.getFullname();
            String userEmail = user.getEmail();
            LastBotsRes res = LastBotsRes.builder()
                    .botTitle(title)
                    .email(userEmail)
                    .SiteName(siteName)
                    .fullname(userName)
                    .build();

            LastBots.add(res);

        }
        return LastBots;
    }




}
