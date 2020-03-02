import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ac-vita',
  templateUrl: './vita.component.html',
  styleUrls: ['./vita.component.scss']
})
export class VitaComponent implements OnInit {

  public vitas;
  public showBoxIndex = [];


  constructor(private database: DatabaseService) { }

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

  }

  showDialog(index) {
    this.showBoxIndex[index].display = true;
  }
}
