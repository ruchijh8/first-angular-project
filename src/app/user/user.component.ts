import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OutletContext } from '@angular/router';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Input({required: true}) id!: string;

  @Output() select = new EventEmitter<string>();


  get imagePath(){
    return 'assets/users/' +this.avatar;
  }


  onSelectUser(){
    this.select.emit(this.id);
  }

}
