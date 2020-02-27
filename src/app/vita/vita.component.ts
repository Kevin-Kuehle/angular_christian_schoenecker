import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ac-vita',
  templateUrl: './vita.component.html',
  styleUrls: ['./vita.component.scss']
})
export class VitaComponent implements OnInit {

  public vitas;
  public display = false;
  public myIndex = [];
  public counter = 1;


  constructor(private database: DatabaseService) { }

  ngOnInit(): void {

    this.database.getVitaData().subscribe((data) => {
      this.vitas = data;

      for (const e of this.vitas) {

        const object = {
          index: this.counter,
          display: false
        };
        this.myIndex.push(object);
        this.counter++;
      }
      console.log(this.myIndex);

    });

  }

  showDialog(index) {
    console.log(index);
    this.myIndex[index].display = true;
    console.log(this.myIndex);

  }
}
