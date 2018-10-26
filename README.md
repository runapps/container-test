# sample 소스

## build cmd
docker build -t image .

### docker run nginx
docker run -d --name web-server -p 80:80 빌드이미지 이름
### docker run nodejs
docker run -d --name auth-server -p 3000:3000 -e REDIS_HOST=xxx 빌드이미지 이름

### docker run redis
docker run --name session-db -d -p 6379:6379 redis

### docker run springboot
docker run -d --name tomcat -p 8080:8080 빌드이미지 이름


https://github.com/runapps/container-test.git