import moongose from 'mongoose'

const conectar = async() => {
    try {
        const connection = await moongose.connect(
            process.env.MONGODB_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(`Database in: ${url} `)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default conectar