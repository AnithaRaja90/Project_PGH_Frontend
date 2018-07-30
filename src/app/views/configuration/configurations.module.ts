// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ConfigurationComponent } from './configuration.component';
import { ConfigurationRoutingModule } from './configuration-routing.module';

// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';

// Import service
import { ZonalService } from '../../service/zonal.service';
import { SectorService } from '../../service/sector.service';
import { NurseryService } from '../../service/nursery.service';
import { PickListService } from '../../service/picklist.service';
import { PickListValueService } from '../../service/picklistvalue.service';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ConfigurationRoutingModule,
      ModalModule.forRoot()
    ],
    declarations: [
        ConfigurationComponent
    ],
    providers: [ZonalService,SectorService,NurseryService,PickListService,PickListValueService],
  })

export class ConfigurationsModule { }