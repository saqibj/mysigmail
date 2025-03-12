import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { AppError } from '../utils/error-handler'

export class StorageService {
  private s3Client: S3Client

  constructor() {
    this.validateConfig()
    this.initializeClient()
  }

  private validateConfig() {
    const required = ['VUE_APP_AWS_S3_REGION', 'VUE_APP_AWS_S3_ID', 'VUE_APP_AWS_S3_KEY', 'VUE_APP_AWS_S3_BASKET']
    const missing = required.filter(key => !process.env[key])
    
    if (missing.length) {
      throw new AppError(`Missing required AWS configuration: ${missing.join(', ')}`, 'CONFIG_ERROR')
    }
  }

  private initializeClient() {
    this.s3Client = new S3Client({
      region: process.env.VUE_APP_AWS_S3_REGION,
      credentials: {
        accessKeyId: process.env.VUE_APP_AWS_S3_ID,
        secretAccessKey: process.env.VUE_APP_AWS_S3_KEY
      }
    })
  }

  async uploadFile(file: Blob, key: string): Promise<string> {
    try {
      await this.s3Client.send(new PutObjectCommand({
        Bucket: process.env.VUE_APP_AWS_S3_BASKET,
        Key: key,
        Body: file,
        ContentType: file.type
      }))
      
      return `${process.env.VUE_APP_AWS_S3_URL}/${key}`
    } catch (error) {
      throw new AppError(`Failed to upload file: ${error.message}`, 'UPLOAD_ERROR')
    }
  }
}

export const storageService = new StorageService() 