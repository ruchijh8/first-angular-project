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

  @Input() user!: {
    avatar : string;
    name: string;
    id: string;
  };

  @Output() select = new EventEmitter<string>();


  get imagePath(){
    return 'assets/users/' +this.user.avatar;
  }


  onSelectUser(){
    this.select.emit(this.user.id);
  }

}
