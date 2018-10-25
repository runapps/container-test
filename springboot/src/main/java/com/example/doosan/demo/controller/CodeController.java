package com.example.doosan.demo.controller;

import com.example.doosan.demo.service.CodeService;
import com.example.doosan.demo.vo.CodeVO;
import com.example.doosan.demo.vo.SubCodeVO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping(value = "/api/code")
public class CodeController {

    @Autowired
    private CodeService codeService;

    @GetMapping("/{groupId}")
    public List<CodeVO> getCodes(@PathVariable String groupId) throws Exception {
    	log.debug("[BEGIN] getCodes");

        List<CodeVO> result = codeService.getCodes(groupId);
    	
        log.debug("[END  ] getCodes");
        return result;
    }
    
    @GetMapping("/{groupId}/{subGroupId}")
    public List<SubCodeVO> getSubCodes(@PathVariable String groupId, @PathVariable String subGroupId) throws Exception {
    	log.debug("[BEGIN] getSubCodes");

        List<SubCodeVO> result = codeService.getSubCodes(groupId, subGroupId);
    	
        log.debug("[END  ] getSubCodes");
        return result;
    }
}
