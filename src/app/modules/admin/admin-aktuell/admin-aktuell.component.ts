import { async } from '@angular/core/testing';
import { DatabaseService } from '@actor/core/services/database.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as dateformater from 'date-format';

@Component({
  selector: 'ac-admin-aktuell',
  templateUrl: './admin-aktuell.component.html',
  styleUrls: ['./admin-aktuell.component.scss']
})
export class AdminAktuellComponent implements OnInit {

  news$;

  dialogData = { id: '', title: '', releaseDate: '', text: '', showPost: '' }
  dialogDataEdit = { id: '', title: '', releaseDate: new Date(''), text: '', showPost: '' }
  showDialogEdit = false;
  showDialogAdd = false;

  formAdd = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(40)]],
    releaseDate: ['', [Validators.required]],
    text: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(950)]],
    showPost: 'true'
  });

  formEdit = this.fb.group({
    title: this.dialogDataEdit.title,
    releaseDate: this.dialogDataEdit.releaseDate,
    text: this.dialogDataEdit.text,
    id: this.dialogDataEdit.id,
    showPost: this.dialogDataEdit.showPost
  });

  constructor(private db: DatabaseService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.db.ft_getNews().subscribe(news => {
      this.news$ = news
    });
  }

  addNews() {

    if (!this.formAdd.valid) {
      return;
    }


    const data = {
      title: this.formAdd.get('title').value,
      releaseDate: new Date(this.formAdd.get('releaseDate').value),
      text: this.formAdd.get('text').value,
      showPost: this.formEdit.get('showPost').value === 'true' ? true : false,
    }

    this.db.ft_addDoc('News', data);
    this.formAdd.reset();
  }
  changeNews() {
    const data = {
      title: this.formEdit.get('title').value,
      releaseDate: new Date(this.formEdit.get('releaseDate').value),
      text: this.formEdit.get('text').value,
      showPost: this.formEdit.get('showPost').value === 'true' ? true : false
    }
    this.db.ft_editDoc('News', this.dialogDataEdit.id, data);
    this.showDialogEdit = false;
  }
  deleteNews(id: String) {

    if (!confirm('Möchten Sie wirklich Löschen?')) {
      return;
    }

    this.db.ft_delete_document('News', id);
  }

  openAddWindow() {
    this.showDialogAdd = true;
  }
  openEditWindow(id: String) {
    // @ts-ignore
    this.dialogDataEdit = Object.values(this.news$).filter(ele => ele.id == id);

    // todo hier mit auf einen Promise warten damit die daten beim clicken vorhanden sind.

    this.dialogDataEdit = this.dialogDataEdit[0];

    // @ts-ignore
    const date = new Date(this.dialogDataEdit.releaseDate.seconds * 1000);
    const newDateString = date.toISOString().substr(0, 10).toString();

    this.formEdit.patchValue({
      title: this.dialogDataEdit.title,
      // @ts-ignore
      releaseDate: newDateString,
      text: this.dialogDataEdit.text,
      id: this.dialogDataEdit.id,
      showPost: this.dialogDataEdit.showPost
    });

    this.showDialogEdit = true;
  }
}
