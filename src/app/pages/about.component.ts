
import {Component} from '@angular/core'; 

@Component({
    moduleId: module.id, 
    selector: 'about-page', 
    templateUrl: './about.component.html'
})
export class AboutComponent{
    intro: string = 'Welcome to the About page'; 
}