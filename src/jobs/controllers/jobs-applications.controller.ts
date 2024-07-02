import { Controller,Get } from "@nestjs/common";

@Controller('job-application')
    export class JobApplicationsController{
        @Get()
        requestHandler(){
            return'This is my job application Route';
        }
}
