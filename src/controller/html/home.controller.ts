import { BaseController, Controller, Get } from 'tmkoa';
import Koa from 'koa';

@Controller('home')
export default class HelloController extends BaseController {
    @Get('index')
    getIndex(ctx: Koa.Context) {
        return ctx.render('index', {
            title: 'tmkoa',
            msg: 'hello world',
        });
    }
}
