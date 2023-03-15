import { Logger } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';

import { RedisModule } from '../redis.module';

const redisModule = RedisModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const logger = new Logger('Redis (redis.module.ts)');

    return {
      connectionOptions: {
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
      },
      onClientReady: (client) => {
        logger.log('REDIS client is READY');

        client.on('connect', () => {
          logger.log(
            `REDIS client is CONNECTION on HOST: ${client.options.host}, PORT: ${client.options.port}`,
          );
        });
        client.on('error', (error) => {
          logger.error(`REDIS client is ERROR: ${error}`);
        });
      },
    };
  },
  inject: [ConfigService],
});

export { redisModule };
