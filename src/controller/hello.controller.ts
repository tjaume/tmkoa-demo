import {
    BaseController,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Post,
} from 'tmkoa';
import HelloService from '../service/hello.service';
import Koa from 'koa';

@Controller('hello')
export default class HelloController extends BaseController {
    constructor(protected helloService: HelloService) {
        super();
    }
    @Get('default')
    getDefault() {
        return {
            code: 200,
            msg: 'hello world',
            data: true,
        };
    }

    @Get('ask')
    getAsk() {
        return {
            code: 200,
            msg: 'ask a question',
            data: true,
        };
    }

    @Post('/greet')
    getGreetString(ctx: Koa.Context) {
        const { name } = ctx.query;
        return {
            code: 200,
            msg: this.helloService.getGreetString(name),
            data: true,
        };
    }

    @Get('/error')
    getError() {
        throw new HttpException('test error', HttpStatus.FORBIDDEN);
    }
}
