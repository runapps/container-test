# 주석은 이렇게 작성합니다.
FROM node:8-alpine as base

# WORKDIR은 경로를 설정한 경로로 고정시켜줍니다.
WORKDIR /usr/src/app

# package.json을 프로젝트 디렉토리로 복사
COPY package.json /usr/src/app

# 필요한 모듈을 인스톨해줍니다.
RUN yarn install

# 이제 src 폴더 아래의 코드를 복사해줍니다.
COPY server.js /usr/src/app/
ENV REDIS_HOST redis
ENV REDIS_PORT 6379

# CMD는 명령어를 배열 형태로 배치해야하며
# 실제로 앱을 실행시키는 커맨드가 들어갑니다.
CMD ["yarn", "start"]