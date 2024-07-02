import { Controller,Get } from "@nestjs/common";

@Controller('job')
    export class JobController{
        @Get()
        requestHandler(){
            return'This is my job Route';
        }
}
