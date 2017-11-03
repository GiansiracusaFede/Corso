import { Component, Inject, OnInit } from '@angular/core';
import { Course } from '../materie/Course';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'listamaterie',
    templateUrl: './listamaterie.component.html',
})

export class ListamaterieComponent {
    private courses: Course[];
    public selectedCou: Course | undefined;

    course: Course;
    courseSelected: Course;
    router: Router;
    baseAddress:string = "http://localhost:56600/"
    

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        this.refreshData();
    }
    refreshData(){
        this.http.get(this.baseUrl + 'api/courses').subscribe(result => {
            this.courses = result.json() as Course[];
        }, error => console.error(error));
    }
    EditCourse(){
        let course = new Course();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        var nome = (<HTMLInputElement>document.getElementById("new_name")).value;
        var facolta = (<HTMLInputElement>document.getElementById("new_facolta")).value;
        var crediti = (<HTMLInputElement>document.getElementById("new_credit")).value;
        let serverCalls = [];
        course.name = nome;
        course.faculty = facolta;
        course.credits = crediti;
        console.log("valore" + course.credits);
        let body = JSON.stringify(course.toJSON());
        console.log(body);
        let call = this.http.put(this.baseUrl + 'api/courses', body, {headers:headers});
        serverCalls.push(call);
        Observable.forkJoin(serverCalls)
            .subscribe(data => {
                this.refreshData()
            }, error => console.error(error));

        

    }
    DeleteCourse() {
        var id = (<HTMLInputElement>document.getElementById("id")).value;
        this.http.delete(this.baseUrl + 'api/courses?id=' + id).subscribe(result => {
            this.refreshData()
        }, error => console.error(error));

    }

    }



