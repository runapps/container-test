package com.example.doosan.demo.controller;

import com.example.doosan.demo.service.DoosanDemoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/view")
public class DoosanDemoController {

    @Autowired
    private DoosanDemoService doosanDemoService;

    @GetMapping("/hello")
    public String hello(Model model, @RequestParam(value="name", required=false, defaultValue="World") String name) {
        model.addAttribute("name", name);
        return "hello";
    }

    @GetMapping("/demo")
    public String dooit(Model model) {
        List<Map<String, Object>> devices = doosanDemoService.getDevices();
        model.addAttribute("devices", devices);
        return "demo";
    }
}