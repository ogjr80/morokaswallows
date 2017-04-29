import {Component} from '@angular/core';

@Component({
    moduleId: module.id, 
    selector: 'footer', 
    templateUrl: './footer.component.html'
})
export class FooterComponent{
    footerText: string = "Place sticky footer content here"; 

}