import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  
  public users : any[] = []
  constructor(private _userService : UsersService) { }

  ngOnInit(): void {
    this._userService.getAll().subscribe((resp : any) => {
      this.users = resp.data;
      console.log(this.users)
    });
  }
  

}
