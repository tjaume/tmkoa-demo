import { Middleware, BaseMiddleware } from 'tmkoa';
import Koa from 'koa';

@Middleware({
    exclude: ['/hello/default'],
})
export class AuthMiddleware implements BaseMiddleware {
    use(ctx: Koa.Context, next: Function): void {
        console.log('auth success');
        return next();
    }
}
