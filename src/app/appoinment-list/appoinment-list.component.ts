import { Component } from '@angular/core';
import { Appionment } from '../models/appionment';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.scss']
})
export class AppoinmentListComponent {

  newAppoinmentTitle: string = '';
  newAppoinmentDate: Date = new Date()


  appoionments: Appionment[] = []

  addAppoinment(){
    if (this.newAppoinmentTitle.trim().length && this.newAppoinmentDate){
      let newAppoinment : Appionment = {
        id: Date.now(),
        title: this.newAppoinmentTitle,
        date: this.newAppoinmentDate
      }
      this.appoionments.push(newAppoinment),
      this.newAppoinmentTitle = '',
      this.newAppoinmentDate = new Date()
    }
  }

  deleteAppoinment(index:number){
    this.appoionments.splice(index, 1)
  }

}
