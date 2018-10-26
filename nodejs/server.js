const http = require('http')
const express = require('express')
const cors = require('cors')
const app = express()
const server = http.createServer(app)
const debug = require('debug')
// const io = require('socket.io')(server)
const bodyParser = require('body-parser')
const log = debug('app:server')
debug.enable('app:*')
app.use(cors())

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

const handleRedisConnect = (res) => {
    redis = require('redis').createClient(config.redis.port, config.redis.hostname)
    redis.on('connect', () => {
        log(`${config.redis.hostname}:${config.redis.port} redis connected...`)
        if (res) {
            res.status(200).json(CODE200)
        }
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
}
handleRedisConnect()

app.all('/api/redis/connect', (req, res) => {
    handleRedisConnect(res)
})

app.get('/api/redis/disconnect', (req, res) => {
    try {
        redis.quit((err) => {
            if (redis.connected) {
                log(`${config.redis.hostname}:${config.redis.port} redis disconnected...`)
                res.status(200).json(CODE200)
            } else {
                res.status(500).json(CODE500)
            }
        })
    } catch (e) {
        res.status(500).json(CODE500)
    }


    // redis.on('end', () => {
    //   log(`${config.redis.hostname}:${config.redis.port} redis disconnected...`)
    //   res.status(200).json(CODE200)
    // })
    // res.status(500).json(CODE500)
})

app.get('/api/check/liveness', (req, res) => {
    res.status(200).json(CODE200)
})
app.get('/api/check/readiness', (req, res) => {
    if (redis && redis.connected) {
        res.status(200).json(CODE200)
    } else {
        res.status(500).json(CODE500)
    }
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
