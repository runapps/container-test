package com.example.doosan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableAsync;

@Configuration
@ComponentScan(basePackages = { "com.example.doosan" })
@EnableAsync(proxyTargetClass=true)
@SpringBootApplication
public class DoosanDemoApplication extends SpringBootServletInitializer {

//	@Bean
//	public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurerAdapter() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/**")
//						.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
//			}
//		};
//	}

//	public static void main(String[] args) {
////		SpringApplication.run(DoosanDemoApplication.class, args);
//	}
//
//	@Override
//	public void run(ApplicationArguments applicationArguments) throws Exception {
//
//	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(DoosanDemoApplication.class);
	}
	public static void main(String[] args) throws Exception {
		SpringApplication.run(DoosanDemoApplication.class, args);
	}
}
