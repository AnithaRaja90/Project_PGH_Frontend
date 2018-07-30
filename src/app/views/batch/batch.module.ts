// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { BatchComponent } from './batch.component';
import { BatchRoutingModule } from './batch-routing.module';

// Module Component
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

// Import service

import { ZonalService } from '../../service/zonal.service';
import { SectorService } from '../../service/sector.service';
import { NurseryService } from '../../service/nursery.service';
import { PickListService } from '../../service/picklist.service';
import { PickListValueService } from '../../service/picklistvalue.service';
import { BatchService } from '../../service/batch.service';
import { DamageService } from '../../service/damage.service';
import { ShadeAreaService } from '../../service/shade-area.service';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      BatchRoutingModule,
      ModalModule.forRoot(),
      TabsModule.forRoot(),
    ],
    declarations: [
        BatchComponent
    ],
    providers: [ZonalService,SectorService,NurseryService,PickListService,PickListValueService,BatchService, DamageService, ShadeAreaService],
  })

export class BatchsModule { }