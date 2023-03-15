import Redis from 'ioredis';
import { Module, DynamicModule } from '@nestjs/common';

import { RedisAsyncModuleOptions } from './@types/redis.types';

const IO_REDIS_KEY = 'IORedis';

@Module({})
class RedisModule {
  static async registerAsync({
    useFactory,
    imports,
    inject,
  }: RedisAsyncModuleOptions): Promise<DynamicModule> {
    const redisProvider = {
      provide: IO_REDIS_KEY,
      useFactory: async (...args) => {
        const { connectionOptions, onClientReady } = await useFactory(...args);

        const client = await new Redis(connectionOptions);

        onClientReady(client);

        return client;
      },
      inject,
    };

    return {
      module: RedisModule,
      imports,
      providers: [redisProvider],
      exports: [redisProvider],
    };
  }
}
export { RedisModule };
