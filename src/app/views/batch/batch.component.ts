import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Import Models
import { Zonal } from '../../models/zonal.model';
import { Sector } from '../../models/sector.model';
import { Nursery } from '../../models/nursery.model';
import { PickList } from '../../models/picklist.model';
import { PickListValue } from '../../models/picklistvalue.model';
import { Batch } from '../../models/batch.model';
import { Damage } from '../../models/damage.model';
import { ShadeArea } from '../../models/shade-area.model';

// Import Service
import { ZonalService } from '../../service/zonal.service';
import { NurseryService } from '../../service/nursery.service';
import { PickListService } from '../../service/picklist.service';
import { PickListValueService } from '../../service/picklistvalue.service';
import { BatchService } from '../../service/batch.service';
import { DamageService } from '../../service/damage.service';
import { ShadeAreaService } from '../../service/shade-area.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  // Create object of each model for create form
  batch: Batch = new Batch();
  updateBatchValue: Batch = new Batch();
  damage: Damage = new Damage();
  shadeArea: ShadeArea = new ShadeArea();

  // create empty array for each service
  zonals: Zonal[];
  sectors: Sector[];
  nurserys: Nursery[];
  zonalSectors: Sector[];
  sectorNurserys: Nursery[];
  pickLists: PickList[];
  variety: PickListValue[];
  categorys: PickListValue[];
  batchs: Batch[];
  shadeAreas: ShadeArea[];
  damages: Damage[];

  @ViewChild('closeBatchModal') public closeBatchModal: ModalDirective;
  @ViewChild('damageModal') public damageModal: ModalDirective;
  @ViewChild('shiftBatchModal') public shiftBatchModal: ModalDirective;

  constructor(
    private router: Router, private zonalService: ZonalService, 
    private nurseryService: NurseryService,private pickListService: PickListService, 
    private pickListValueService: PickListValueService, private batchService: BatchService,
    private damageService: DamageService, private shadeAreaService: ShadeAreaService
  ) { }

  ngOnInit() {
    // console.log("Inside Batch Component");
    // Get the list of zone
    this.zonalService.getZonal().subscribe(
      data => {
        this.zonals = data;
      }
    );

    // Get the list of picklist
    this.pickListService.getPickList().subscribe(
      data => {
        this.pickLists = data;
      }
    );

    // Get the list of batch
    this.getBatchList();
  }

  getBatchList(): void {
    // Get the list of batch
    this.batchService.getBatch().subscribe(
      data => {
        this.batchs = data;
      }
    );
  }

  getShadeAreaList(): void {
    // console.log("Indide getShadeAreaList");
    // Get the list of shade area
    this.shadeAreaService.getAllRecord().subscribe(
      data => {
        this.shadeAreas = data;
      }
    );
  }

  getDamageList(): void {
    // console.log("Indide getDamageList");
    // Get the list of damage
    this.damageService.getDamage().subscribe(
      data => {
        this.damages = data;
      }
    );
  }

  // Get the sector value based on zonal id
  getSector(zoneId): void {
    // console.log(zoneId);
    this.nurseryService.getSector(zoneId)
    .subscribe( data => {
      this.zonalSectors = data;
    });
  }

  getNursery(sectorId): void {
    this.nurseryService.getSectorNursery(sectorId)
    .subscribe( data => {
      this.sectorNurserys = data;
    });
  }

  getVariety(id): void {
    this.pickListValueService.getParentList(id)
    .subscribe( data => {
      this.variety = data;
    });
  }

  getCategory(id): void {
    this.pickListValueService.getChildList(id)
    .subscribe( data => {
      this.categorys = data;
    });
  }

  // Create new Batch
  createBatch(): void {
    // console.log("Create batch function call");
    // console.log(this.batch);
    this.batchService.createBatch(this.batch)
    .subscribe( data => {
      alert("Batch Created Successfully.");
      this.batch = new Batch();
      this.getBatchList();
    });
  };

  // Delete the batch
  deleteBatch(batch: Batch): void {
    this.batchService.deleteBatch(batch)
      .subscribe( data => {
        this.batchs = this.batchs.filter(u => u !== batch);
      })
  };

  // show model popup to close the batch
  updateBatch(value: Batch): void {
    this.closeBatchModal.show();
    this.updateBatchValue = value;
  }

  // show model popup to close the batch
  updateDamage(value: Batch): void {
    // console.log(value);
    this.damageModal.show();
    this.updateBatchValue = value;
  }

  // show model popup to close the batch
  updateShift(value: Batch): void {
    // console.log(value);
    this.shiftBatchModal.show();
    this.updateBatchValue = value;
  }

  closeBatch(batch: Batch): void {
    this.batch = batch;
    this.batch.status = -1;
    this.batchService.updateBatch(this.batch)
    .subscribe( data => {
      alert("Bacth Closed Successfully.");
    });
    this.closeBatchModal.hide();
  }

  createDamage(value: Damage): void {
    // this.damage = value;
    // console.log(value);
    this.damage.batchId = value.id;
    this.damage.noOfQuantity = value.noOfQuantity;
    this.damage.date = value.date;
    this.damage.description = value.description;
    // console.log(this.damage);
    this.damageService.createDamage(this.damage)
    .subscribe( data => {
      alert("Damage Created Successfully.");
    });
    this.damageModal.hide();
  }

  createShadeArea(value: ShadeArea): void {
    // this.shadeArea = value;
    // console.log(value);
    this.shadeArea.batchId = value.id;
    this.shadeArea.noOfSeedlings = value.noOfSeedlings;
    this.shadeArea.date = value.date;
    // console.log(this.shadeArea);
    this.shadeAreaService.create(this.shadeArea)
    .subscribe( data => {
      alert("Successfully Moved to Shade Area.");
    });
    this.shiftBatchModal.hide();
  }
}