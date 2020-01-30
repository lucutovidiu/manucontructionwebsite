import { ExceptionFilter, Catch, NotFoundException, ArgumentsHost, HttpCode, Controller, All } from '@nestjs/common';
import { HttpException } from '@nestjs/common';

@Controller()
@Catch(NotFoundException)
export class NotFoundExceptionFilter{

    @All()
    @HttpCode(404)
    catch() {
        return {error: "Page Not Found"}
    }
}