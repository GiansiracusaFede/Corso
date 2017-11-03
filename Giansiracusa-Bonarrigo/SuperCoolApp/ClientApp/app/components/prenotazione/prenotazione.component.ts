import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Course } from "../materie/Course";
import { ActivatedRoute } from '@angular/router';
import { Reservation } from "./Reservation";


@Component({

    selector: 'prenotazione',
    templateUrl: './prenotazione.component.html',
})

export class PrenotazioneComponent {
    headers: any;

    private course: Course[];
    selectedCourse: Course;
    private reservation: Reservation;
    idCourse: number;
    id: number;
    
    constructor(private route: ActivatedRoute,http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.reservation = new Reservation();
        
        this.route.params.subscribe(params => { this.reservation.IdCouse = params['idCouse'], this.reservation.IdStudent = params['id'] });
        let body = JSON.stringify(this.reservation);
        console.log(body);
        http.put(baseUrl + 'api/reservations', body, 'x-www-form-urlencoded').subscribe(result => {
        }, error => console.error(error)); 
        

    }

}


