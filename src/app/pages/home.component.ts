import {Component} from '@angular/core'; 

@Component({
    moduleId: module.id, 
    selector: 'home-page', 
    templateUrl: './home.component.html'
})
export class HomeComponent{
    intro: string = 'Welcome to the home page'; 
}