const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = Hapi.Server({
        port: 5100,
        host: 'localhost',
    })

    await server.start()
    console.log(`server berjalan pada ${server.info.uri}`)
}

init()