import { BaseService, Service } from 'tmkoa';

@Service()
export default class HelloService extends BaseService {
    getGreetString(name: string) {
        return `hello ${name || 'tjuame'}`;
    }
}
