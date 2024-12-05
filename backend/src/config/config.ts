
import { config as conf }  from "dotenv"
conf()

const _config = {
    dburl: process.env.MONGO_CONNECTION_STRING
}

export const  config = Object.freeze(_config)