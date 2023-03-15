import { ModuleMetadata, FactoryProvider } from '@nestjs/common';
import { RedisOptions, Redis } from 'ioredis';

interface RedisModuleOptions {
  connectionOptions: RedisOptions;
  onClientReady?: (client: Redis) => void;
}

interface RedisAsyncModuleOptions
  extends Pick<ModuleMetadata, 'imports'>,
    Pick<FactoryProvider, 'inject'> {
  useFactory: (
    ...args: unknown[]
  ) => Promise<RedisModuleOptions> | RedisModuleOptions;
}

export { RedisModuleOptions, RedisAsyncModuleOptions };
