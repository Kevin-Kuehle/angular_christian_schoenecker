import { map, first } from 'rxjs/operators';
import { Biografie } from './../../shared/models/biografie';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private baseUrl = 'http://localhost:3000';
  // private baseUrl = 'http://192.168.178.20:3000';

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  // Old getter
  getAllNews() {
    return this.http.get(`${this.baseUrl}/news`);
  }
  getAllEvents() {
    return this.http.get(`${this.baseUrl}/events`);
  }

  getVitaData() {
    return this.http.get(`${this.baseUrl}/vita`);
  }

  getPersonData() {
    return this.http.get(`${this.baseUrl}/personData`);
  }

  getGalleryImages() {
    return this.http.get(`${this.baseUrl}/galleryImages`);
  }
  getMediaVideos() {
    return this.http.get(`${this.baseUrl}/media`);
  }

  //  Getter
  ft_getBiografie() {
    return this.firestore.collection('Biografie').snapshotChanges()
      .pipe(map(snaps => {

        return snaps.map(snap => {

          return <Biografie>{
            id: snap.payload.doc.id,
            // @ts-ignore
            ...snap.payload.doc.data()
          }
        });
      }), first())
  }

  ft_getNews() {
    return this.firestore.collection('News').snapshotChanges()
      .pipe(map(snaps => {

        return snaps.map(snap => {

          return {
            id: snap.payload.doc.id,
            // @ts-ignore
            ...snap.payload.doc.data()
          }
        });
      }))
  }

  ft_getEvents() {
    return this.firestore.collection('Events').snapshotChanges()
      .pipe(map(snaps => {

        return snaps.map(snap => {

          return {
            id: snap.payload.doc.id,
            // @ts-ignore
            ...snap.payload.doc.data()
          }
        });
      }), first())
  }

  ft_getVita() {
    return this.firestore.collection('Vitas', ref => ref.orderBy('year', 'desc')).snapshotChanges()
      .pipe(map(snaps => {
        return snaps.map(snap => {
          return {
            id: snap.payload.doc.id,
            display: false,
            // @ts-ignore
            ...snap.payload.doc.data()
          }
        });
      })
      )
  }

  ft_getPersonData() {
    return this.firestore.collection('PersonData').snapshotChanges()
      .pipe(map(snaps => {
        return this.convertMaping(snaps);
      }), first())
  }

  // Setter
  ft_addDoc(collection: String, data: Object) {
    try {
      this.firestore.collection(`${collection}`).add(data);
    } catch (error) {
      if (error) console.log(error);
    }
  }

  ft_editDoc(collection: String, id: String, data: Object) {
    try {
      this.firestore.doc(`/${collection}/${id}`).ref.update(data);
    } catch (error) {
      console.log(error);
    }
  }

  ft_delete_document(col: String, id: String) {
    try {
      if (id === '') {
        console.log('Dokument nicht gefunden!');
        return;
      }
      this.firestore.doc(`/${col}/${id}`).ref.delete();
    } catch (error) {
      console.log(error);
    }
  }


  convertMaping(snaps) {
    return snaps.map(snap => {
      return {
        id: snap.payload.doc.id,
        display: false,
        // @ts-ignore
        ...snap.payload.doc.data()
      }
    });
  }
}
