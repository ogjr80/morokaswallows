import {Component} from '@angular/core'; 


@Component({
    moduleId: module.id, 
    selector: 'jumbotron', 
    templateUrl: './jumbotron.component.html', 
})
export class JumbotronComponent{
    jumbotronHeading: string = 'Crowd Funding - Moroka Swallows'; 
    jumbotronBody : string =    `The club was founded in the 1940s by a trio of soccer lovers, Ishmael Lesolang, Strike Makgatha and Johnny Kubheka.[2]
                                They originally named the side Congregated Rovers after the firm in which most of the players and officials worked, later changing it to Moroka Rovers.[3]
                                But then, on 10 October 1947, the trio decided to change the name again to Moroka Swallows, `; 
    jumbotronBtnText : string = 'Read More...'; 
    jumbotronBtnUrl : string = 'http://morokaswallows.co.za'; 

    constructor(){

    }
}