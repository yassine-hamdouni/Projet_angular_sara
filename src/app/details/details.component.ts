import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
id!:number
constructor(private act: ActivatedRoute){ }

ngOnInit():void{
  this.id=this.act.snapshot.params['id'];
}
}
