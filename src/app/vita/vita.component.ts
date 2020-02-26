import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ac-vita',
  templateUrl: './vita.component.html',
  styleUrls: ['./vita.component.scss']
})
export class VitaComponent implements OnInit {

  public vitas;
  display: boolean = false;


  constructor(private database: DatabaseService) { }

  ngOnInit(): void {

    this.database.getVitaData().subscribe((data) => {
      this.vitas = data; console.log(this.vitas);
    });

  }

  showDialog() {
    this.display = true;
  }
}
