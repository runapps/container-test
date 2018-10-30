FROM maven:3.5.0-jdk-8 AS builder

# speed up Maven JVM a bit
ENV MAVEN_OPTS="-XX:+TieredCompilation -XX:TieredStopAtLevel=1"

# make source folder
RUN mkdir -p /app
WORKDIR /app

# copy other source files (keep code snapshot in image)
COPY pom.xml /app/
COPY mvnw /app/
COPY mvnw.cmd /app/
COPY src /app/src/

# run packaging
RUN mvn package -T 1C

FROM openjdk:8u131-jdk-alpine
MAINTAINER Acornsoft

RUN mkdir -p /home/demo/ui
COPY  --from=builder /app/target/demo-0.0.1-SNAPSHOT.war /home/demo/ui/demo.war

EXPOSE 8080 443

CMD java $JAVA_OPTIONS -jar /home/demo/ui/demo.war
