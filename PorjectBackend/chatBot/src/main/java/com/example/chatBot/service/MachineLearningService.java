package com.example.chatBot.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
@Slf4j
public class MachineLearningService {
    public String response(String input, String scriptPath) {
        String output = "";
        try {
            ProcessBuilder pb = new ProcessBuilder("C:/Users/ASUS/anaconda3/python.exe", scriptPath, input);
            Process process = pb.start();

            BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            output = reader.lines().collect(Collectors.joining());
            process.waitFor();


        } catch (Exception e) {
            output = "Error invoking Python script: " + e.getMessage();
        }
        return  output;

    }




}
