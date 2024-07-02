import { Controller,Get } from "@nestjs/common";

@Controller('job-interview')
    export class JobAInterviewsController{
        @Get()
        requestHandler(){
            return'This is my job Interviews Route';
        }
}
