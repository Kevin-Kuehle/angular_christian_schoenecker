import { first, map } from 'rxjs/operators';
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '@actor/core/services/database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-admin-vita',
  templateUrl: './admin-vita.component.html',
  styleUrls: ['./admin-vita.component.scss']
})
export class AdminVitaComponent implements OnInit {

  vitas$;

  showDialogEdit = false;
  showDialogAdd = false;

  addForm = this.fb.group({
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(800)]],
    jobStart: ['', [Validators.required,]],
    jobEnd: ['', [Validators.required]],
    jobTitle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    additive: [''],
    place: ['', [Validators.required, Validators.maxLength(30)]],
    year: ['', [Validators.required]],
  });

  editForm = this.fb.group({
    id: [''],
    description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(800)]],
    jobStart: ['', [Validators.required,]],
    jobEnd: ['', [Validators.required]],
    jobTitle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    additive: [''],
    place: ['', [Validators.required, Validators.maxLength(30)]],
    year: ['', [Validators.required]],
  });

  additive
  constructor(
    private db: DatabaseService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.db.ft_getVita().subscribe(vitas => {
      this.vitas$ = vitas;

    });
  }

  addVita() {
    if (this.addForm.invalid) {
      confirm('Das Formular wurde nicht richtig ausgefüllt.');
      return
    }

    let data = {
      description: this.addForm.get('description').value,
      jobStart: this.addForm.get('jobStart').value,
      jobEnd: this.addForm.get('jobEnd').value,
      jobTitle: this.addForm.get('jobTitle').value,
      additive: this.addForm.get('additive').value,
      place: this.addForm.get('place').value,
      year: this.addForm.get('year').value,
    }

    this.db.ft_addDoc('Vitas', data);
    this.addForm.reset();
    this.showDialogAdd = !this.showDialogAdd;
  }

  changeVita() {

    if (this.editForm.valid) {

      let data = {
        description: this.editForm.get('description').value,
        jobStart: this.editForm.get('jobStart').value,
        jobEnd: this.editForm.get('jobEnd').value,
        jobTitle: this.editForm.get('jobTitle').value,
        additive: this.editForm.get('additive').value,
        place: this.editForm.get('place').value,
        year: this.editForm.get('year').value
      }

      this.db.ft_editDoc('Vitas', this.editForm.get('id').value, data);
      this.editForm.reset();
      this.showDialogEdit = !this.showDialogEdit;
    }
  }

  deleteVita(id: String) {

    if (id === null || id === undefined || id === '') {
      return;
    }

    this.db.ft_delete_document('Vitas', id);
  }

  openDialogBoxEdit(id: String) {

    let getVita = this.vitas$.find(i => i.id === id);

    if (getVita !== null || getVita !== undefined) {
      this.editForm.patchValue({
        id: id,
        description: getVita.description,
        jobStart: new Date(getVita.jobStart.seconds * 1000),
        jobEnd: new Date(getVita.jobEnd.seconds * 1000),
        jobTitle: getVita.jobTitle,
        additive: getVita.additive,
        place: getVita.place,
        year: getVita.year
      });
      this.showDialogEdit = !this.showDialogEdit;
    }
  }
}
