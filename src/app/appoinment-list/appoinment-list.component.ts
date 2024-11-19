import { Component, OnInit } from '@angular/core';
import { Appionment } from '../models/appionment';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.scss']
})
export class AppoinmentListComponent implements OnInit {
  
  newAppoinmentTitle: string = '';
  newAppoinmentDate: Date = new Date()
  
  
  appoionments: Appionment[] = []
  
  ngOnInit(): void {
let savedAppoinment = localStorage.getItem('appoinment')
    this.appoionments = savedAppoinment ? JSON.parse(savedAppoinment) : []
  }
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
      localStorage.setItem("appoinment", JSON.stringify(this.appoionments))
    }
  }

  deleteAppoinment(index:number){
    this.appoionments.splice(index, 1)
    localStorage.setItem("appoinment", JSON.stringify(this.appoionments))

  }

}
