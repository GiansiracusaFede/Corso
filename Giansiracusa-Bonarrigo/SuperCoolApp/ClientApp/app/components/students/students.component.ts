import { Component, Inject, OnInit } from '@angular/core';
import { Http, Headers, } from '@angular/http';
import { Student } from "./Student";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/forkJoin';

@Component({
    selector: 'students',
    templateUrl: './students.component.html',
})

export class StudentsComponent {
    
    private students: Student[];
    selectedStudent: Student;
    router: Router;
    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        this.refreshData();
    }


    async refreshData(){
        this.http.get(this.baseUrl + 'api/students').subscribe(result => {
            this.students = result.json() as Student[];
        }, error => console.error(error));
    }

    EditStudent() {
        let student = new Student();
        let headers = new Headers({ 'Content-Type': 'application/json' });
        var nome = (<HTMLInputElement>document.getElementById("new_name")).value;
        var facolta = (<HTMLInputElement>document.getElementById("new_facolta")).value;
        var dateOfBirth = (<HTMLInputElement>document.getElementById("new_date")).valueAsDate;

        let serverCalls = [];
        student.name = nome;
        student.faculty = facolta;
        student.dateOfBirth = dateOfBirth;
        console.log("valore" + student.name);
        let body = JSON.stringify(student.toJSON());
        console.log(body);
        let call = this.http.put(this.baseUrl + 'api/students', body, { headers: headers });
        serverCalls.push(call);
        Observable.forkJoin(serverCalls)
            .subscribe(data => {
                this.refreshData()
            }, error => console.error(error));



    }
    DeleteStudent() {
        var id = (<HTMLInputElement>document.getElementById("id")).value;
        this.http.delete(this.baseUrl + 'api/students?id=' + id).subscribe(result => {
            this.refreshData()
        }, error => console.error(error));

    }

}



    
    
    
    


/*
interface Student {
    Id: number;
    name: string;
    dateOfBirth: Date;
    faculty: string;
}
*/

