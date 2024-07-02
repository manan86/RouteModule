import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { JobsModule } from './jobs/controllers/jobs.module';
//import { JobsModule } from '.jobs.module';


@Module({
  imports: [JobsModule,RouterModule.register([{path:"jobs", module: JobsModule}])],
  controllers: [],
  providers: [],
})
export class AppModule {}
