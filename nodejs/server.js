const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)
const debug = require('debug')
// const io = require('socket.io')(server)
const bodyParser = require('body-parser')
const log = debug('app:server')
debug.enable('app:*')

const config = {
    server: {
        hostname: '0.0.0.0',
        port: 3000
    },
    redis: {
        hostname: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
}

const CODE200 = { code: 200, status: 'ok' }
const CODE500 = { code: 500, status: 'error' }

let redis

app.use(bodyParser.json({ limit: '50mb' }))

app.get('/api/redis/connect', (req, res) => {
    redis = require('redis').createClient(config.redis.port, config.redis.hostname)
    redis.on('connect', () => {
    log(`${config.redis.hostname}:${config.redis.port} redis connected...`)
res.status(200).json(CODE200)
})

redis.on('error', (err) => {
    if (err) {
        log('error connecting redis for recommendations: ', err)
        // handleRedisDisconnect
    } else {
        throw err
    }
})
redis.on('reconnecting', () => {
    log('redis reconnecting...')
})
})

app.get('/api/redis/disconnect', (req, res) => {
    redis.quit(() => {
    log(`${config.redis.hostname}:${config.redis.port} redis disconnected...`)
res.status(200).json(CODE200)
})
})

app.get('/api/check/liveness', (req, res) => {
    res.status(200).json(CODE200)
})
app.get('/api/check/readiness', (req, res) => {
    res.status(200).json(CODE200)
})

app.use((req, res, next) => {
    req.socket.on('error', () => {
})
res.socket.on('error', () => {
})
next()
})

server.listen(config.server.port, config.server.hostname, () => {
    log(`Server is now running at http://${config.server.hostname}:${config.server.port}.`)
})

process.on('unhandledRejection', up => { throw up })
process.on('uncaughtException', (err) => {
    log(err)
})

module.exports = app
