import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDirective } from 'ngx-bootstrap/modal';

// Import Models
import { Zonal } from '../../models/zonal.model';
import { Sector } from '../../models/sector.model';
import { Nursery } from '../../models/nursery.model';
import { PickList } from '../../models/picklist.model';
import { PickListValue } from '../../models/picklistvalue.model';

// Import Service
import { ZonalService } from '../../service/zonal.service';
import { SectorService } from '../../service/sector.service';
import { NurseryService } from '../../service/nursery.service';
import { PickListService } from '../../service/picklist.service';
import { PickListValueService } from '../../service/picklistvalue.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})

export class ConfigurationComponent implements OnInit {

  // Create object of each model for create form
  zonal: Zonal = new Zonal();
  sector: Sector = new Sector();
  nursery: Nursery = new Nursery();
  pickList: PickList = new PickList();
  pickListValue: PickListValue = new PickListValue();

  // Create object of each model for update form
  updateZonal: Zonal = new Zonal();
  updateSector: Sector = new Sector();
  updateNursery: Nursery = new Nursery();
  updatePickList: PickList = new PickList();
  updatePickListValue: PickListValue = new PickListValue();

  @ViewChild('zoneUpdateModal') public zoneUpdateModal: ModalDirective;
  @ViewChild('sectorUpdateModal') public sectorUpdateModal: ModalDirective;
  @ViewChild('nurseryUpdateModal') public nurseryUpdateModal: ModalDirective;
  @ViewChild('pickListUpdateModal') public pickListUpdateModal: ModalDirective;
  @ViewChild('pickListValueUpdateModal') public pickListValueUpdateModal: ModalDirective;
  @ViewChild('subPickListModal') public subPickListModal: ModalDirective;

  // create empty array for each service
  zonals: Zonal[];
  sectors: Sector[];
  nurserys: Nursery[];
  zonalSectors: Sector[];
  pickLists: PickList[];
  pickListValues: PickListValue[];

  constructor(
    private router: Router, private zonalService: ZonalService, 
    private sectorService: SectorService, private nurseryService: NurseryService,
    private pickListService: PickListService, private pickListValueService: PickListValueService
  ) { }

  ngOnInit() {
    // console.log("Inside ngOnInit function");
    this.getZoneList();

    // Get the list of sector
    this.getSectorList();

    // Get the list of nursery
    this.getNurseryList();

    // Get the list of picklist
    this.getPickList();

    // Get the list of pickListValue
    this.getAllPickListValue();
  }

  getZoneList(): void {
    // Get the list of zone
    this.zonalService.getZonal().subscribe(
      data => {
        this.zonals = data;
      }
    );
  }

  getSectorList(): void {
    // Get the list of sector
    this.sectorService.getSector().subscribe(
      data => {
        this.sectors = data;
      }
    );
  }

  getNurseryList(): void {
    // Get the list of nursery
    this.nurseryService.getNursery().subscribe(
      data => {
        this.nurserys = data;
      }
    );
  }

  getPickList(): void {
    // Get the list of picklist
    this.pickListService.getPickList().subscribe(
      data => {
        this.pickLists = data;
      }
    );
  }

  getAllPickListValue(): void {
    // Get the list of pickListValue
    this.pickListValueService.getPickListValue().subscribe(
      data => {
        this.pickListValues = data;
      }
    );
  }

  // Create new zone
  createZone(): void {
    // console.log("Create zone function call");
    // console.log(this.zonal);
    this.zonalService.createZone(this.zonal)
    .subscribe( data => {
      alert("Zone Created Successfully.");
      this.zonal = new Zonal();
      this.getZoneList();
    });
  };

  // delete zone value
  deleteZonal(zonal: Zonal): void {
    this.zonalService.deleteZone(zonal)
      .subscribe( data => {
        this.zonals = this.zonals.filter(u => u !== zonal);
      })
  };

  // show model popup to update zone value
  getZoneValue(value: Zonal): void {
    this.zoneUpdateModal.show();
    this.updateZonal = value;
  }

  // update zone value 
  updateZone(value: Zonal) : void {
    this.zonalService.updateZone(value)
    .subscribe( data => {
      alert("Zone Updated Successfully.");
    });
    this.zoneUpdateModal.hide();
  }

  // Create new sector
  createSector(): void {
    // console.log("Create sector function call");
    // console.log(this.sector);
    this.sectorService.createSector(this.sector)
    .subscribe( data => {
      alert("Sector Created Successfully.");
      this.sector = new Sector();
      this.getSectorList();
    });
  };

  // delete sector value
  deleteSector(sector: Sector): void {
    this.sectorService.deleteSector(sector)
      .subscribe( data => {
        this.sectors = this.sectors.filter(u => u !== sector);
      })
  };

  // show model popup to update sector value
  getSectorValue(value: Sector): void {
    this.sectorUpdateModal.show();
    this.updateSector = value;
  }

  // update sector value 
  updateSectorValue(value: Sector) : void {
    this.sectorService.updateSector(value)
    .subscribe( data => {
      alert("Sector Updated Successfully.");
    });
    this.sectorUpdateModal.hide();
  }

  // Create new nursery
  createNursery(): void {
    // console.log("Create nursery function call");
    // console.log(this.nursery);
    this.nurseryService.createNursery(this.nursery)
    .subscribe( data => {
      alert("Nursery Created Successfully.");
      this.nursery = new Nursery();
      this.getNurseryList();
    });
  }

  // Get the sector value based on zonal id
  getSector(zoneId): void {
    // console.log(zoneId);
    this.nurseryService.getSector(zoneId)
    .subscribe( data => {
      this.zonalSectors = data;
    });
  }

  // delete sector value
  deleteNursery(nursery: Nursery): void {
    this.nurseryService.deleteNursery(nursery)
      .subscribe( data => {
        this.nurserys = this.nurserys.filter(u => u !== nursery);
      })
  };

  // show model popup to update nursery value
  getNurseryValue(value: Nursery): void {
    this.nurseryUpdateModal.show();
    this.updateNursery = value;
  }

  // update sector value 
  updateNurseryValue(value: Nursery) : void {
    this.nurseryService.updateNursery(value)
    .subscribe( data => {
      alert("Nursery Updated Successfully.");
    });
    this.nurseryUpdateModal.hide();
  }

  // Create new Pick List
  createPickList(): void {
    // console.log("Create PickList function call");
    // console.log(this.pickList);
    this.pickListService.createPickList(this.pickList)
    .subscribe( data => {
      alert("PickList Created Successfully.");
      this.pickList = new PickList();
      this.getPickList();
    });
  };

  // delete picklist value
  deletePickList(value: PickList): void {
    this.pickListService.deletePickList(value)
      .subscribe( data => {
        this.pickLists = this.pickLists.filter(u => u !== value);
      })
  };

  // show model popup to update zone value
  getPickListValue(value: PickList): void {
    this.pickListUpdateModal.show();
    this.updatePickList = value;
  }

  // update pick list value 
  updatePick(value: PickList) : void {
    this.pickListService.updatePickList(value)
    .subscribe( data => {
      alert("PickList Updated Successfully.");
    });
    this.pickListUpdateModal.hide();
  }

  // Create new Pick List Value
  createPickListValue(): void {
    // console.log("Create PickListValue function call");
    // console.log(this.pickListValue);
    this.pickListValueService.createPickListValue(this.pickListValue)
    .subscribe( data => {
      alert("PickListValue Created Successfully.");
      this.pickListValue = new PickListValue();
      this.getAllPickListValue();
    });
  };

  // delete picklist value
  deletePickListValue(value: PickListValue): void {
    this.pickListValueService.deletePickListValue(value)
      .subscribe( data => {
        this.pickListValues = this.pickListValues.filter(u => u !== value);
      })
  };

  // show model popup to update zone value
  getPickValue(value: PickListValue): void {
    this.pickListValueUpdateModal.show();
    this.updatePickListValue = value;
  }

  // update pick list value 
  updatePickValue(value: PickListValue) : void {
    this.pickListValueService.updatePickListValue(value)
    .subscribe( data => {
      alert("PickListValue Updated Successfully.");
    });
    this.pickListValueUpdateModal.hide();
  }

  openChildModel(value: PickListValue) : void {
    this.subPickListModal.show();
    // console.log(value);
    this.updatePickListValue = value;
  }

  // Add sub pick list value
  addChild(val: PickListValue) : void {
    this.pickListValue.selfId = val.id;
    this.pickListValue.pickListValue = val.subChildValue;
    // console.log(this.pickListValue);
    this.pickListValueService.createPickListValue(this.pickListValue)
    .subscribe( data => {
      alert("Sub PickListValue Created Successfully.");
      this.pickListValue = new PickListValue();
      this.getAllPickListValue();
    });
    this.subPickListModal.hide();
  }
  
}
