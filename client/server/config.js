import {config} from 'dotenv'

config()

console.log(process.env.HELLO)

export default {
    BucketName: process.env.BUCKET_NAME || "",
    Endpoint: process.env.ENDPOINT || "",
  };
  