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
  public isMobile;
  public vitaRows = 3;

  constructor(private database: DatabaseService, private mobileHandler: MobileHandlerService) { }

  ngOnInit(): void {

    this.database.ft_getVita()
      .subscribe(vitas => {

        console.log(vitas);
        this.vitas = vitas;

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

  showDialog(id) {
    // @ts-ignore
    const target: Object = Object.values(this.vitas).filter(vita => vita.id === id);
    target[0].display = true;

    console.log(target);
  }
}
