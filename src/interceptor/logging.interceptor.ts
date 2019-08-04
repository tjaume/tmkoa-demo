import { Interceptor, ToaInterceptor } from 'tmkoa';
import Koa from 'koa';

@Interceptor()
export class LoggingInterceptor implements ToaInterceptor {
    request(ctx: Koa.Context): void {
        console.log(`before begin...`);
    }
    response(ctx: import('koa').Context): void {
        console.log(`after end...`);
    }
}
