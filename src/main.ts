import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'

const { version } = require('../package.json')

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  const options = new DocumentBuilder()
    .setTitle('Nest cqrs')
    .setDescription('Playing with nestjs cqrs')
    .setVersion(version)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  await app.listen(3000)
}
bootstrap()
