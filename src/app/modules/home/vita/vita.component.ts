import { MobileHandlerService } from '../../../core/services/mobile-handler.service';
import { DatabaseService } from '../../../core/services/database.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ac-vita',
  templateUrl: './vita.component.html',
  styleUrls: ['./vita.component.scss']
})
export class VitaComponent implements OnInit {

  public vitas;
  public showBoxIndex = [];
  public isMobile;
  public vitaRows = 3;



  constructor(private database: DatabaseService, private mobileHandler: MobileHandlerService) { }

  ngOnInit(): void {

    this.database.getVitaData().subscribe((data) => {

      this.vitas = data;
      for (const e of this.vitas) {

        const object = {
          id: e.id,
          display: false
        };

        this.showBoxIndex.push(object);
      }
    });


    this.mobileHandler.isMobile.subscribe(data => {
      this.isMobile = data;

      if (this.isMobile === true) {
        this.vitaRows = 3;
      } else {
        this.vitaRows = 6;
      }
    });

  }

  showDialog(index) {
    this.showBoxIndex[index].display = true;
  }
}
