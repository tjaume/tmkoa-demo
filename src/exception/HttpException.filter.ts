import { Catch, ExceptionFilter, HttpStatus, HttpException } from 'tmkoa';
import Koa from 'koa';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, ctx: Koa.Context): void {
        if (exception.code === HttpStatus.FORBIDDEN) {
            ctx.body = {
                code: exception.code,
                message: 'FORBIDEN',
                data: null,
            };
        } else {
            ctx.body = {
                code: exception.code,
                message: exception.msg,
                data: null,
            };
        }
    }
}
