import Toa from 'tmkoa';
import { AppOption } from 'tmkoa';
import path from 'path';
import { AuthMiddleware } from './middleware/auth.middleware';
import { HttpExceptionFilter } from './exception/HttpException.filter';
import { LoggingInterceptor } from './interceptor/logging.interceptor';

async function main() {
    const toa = new Toa();
    const appConfig: AppOption = {
        name: 'tmkoa-server',
        viewDir: path.resolve(__dirname, './view'),
        controllerDir: path.resolve(__dirname, './controller'),
        middlewares: [AuthMiddleware],
        catchException: HttpExceptionFilter,
        interceptor: LoggingInterceptor,
    };
    toa.run(appConfig);
}

main();
