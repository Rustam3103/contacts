import { Component, OnInit } from '@angular/core';
import { faEdit, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ContactsComponent implements OnInit {
  public faEdit = faEdit;
  public faDeleteLeft = faDeleteLeft;

  constructor(config: NgbModalConfig,private modalService: NgbModal) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
  }

  openEditContact() {
    const modalRef = this.modalService.open(EditContactComponent, { size: 'xl' });
    modalRef.componentInstance.name = 'World';
  }

  deleteContact(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
