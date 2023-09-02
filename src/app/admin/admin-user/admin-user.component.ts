import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserInterface } from 'src/app/models/user-interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [NgFor],
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {

  public connectedUser!: UserInterface
  public users!: UserInterface[];

  constructor(
    private userService:UserService,
    private router: Router,
    private toastr: ToastrService
    ){}

  ngOnInit(): void {
    this.connectedUser=this.userService.retrieveUserData();
    if (!this.connectedUser){
      this.router.navigate(['']);
    }
    this.getUsers();
  }

  getUsers():void{
    this.userService.getUsers().subscribe(users =>{
      this.users = users['hydra:member']
      console.log('Attention :', users)
      console.log('user :', this.users)
    })
  }

  displayPopup(event: MouseEvent){
    const button = event.target as HTMLElement;
    const id :number =Number(button.id);
    const popup:HTMLDivElement|null=document.querySelector(`#popup${id}`);
    popup!.classList.toggle('hidden');
    const body = document.querySelector('body');
    body!.style.overflowY ="hidden"
  }

  displayNonePopup(event: MouseEvent){
    const button = event.target as HTMLElement;
    const parentNode :any=button.parentNode!.parentNode;
    console.log(parentNode);
    parentNode!.classList.toggle('hidden');
    const body = document.querySelector('body');
    body!.style.overflowY ="visible"
  }

  deleteUserAndUpdateUserList(id: number) {
    this.userService.dropNft(id).subscribe(
      () => {
        this.users = this.users.filter(nft => nft.id !== id);
        this.toastr.success("Utilisateur supprimé");
      },
      (error) => {
        this.toastr.error("Echec de la suppression de l'utilisateur");
      }
    );
    const body = document.querySelector('body');
    body!.style.overflowY = "visible";
  }
}
