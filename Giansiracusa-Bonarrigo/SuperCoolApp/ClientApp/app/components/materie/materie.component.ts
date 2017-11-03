import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Student } from "../students/Student";
import 'rxjs/add/operator/switchMap';
import { Course } from './Course';
@Component({
    selector: 'materie',
    templateUrl: './materie.component.html'
 
})



export class MaterieComponent{
    private selectedStudent: Student;
    private selectedCourse: Course;
    public courses: Course[];
    public coursesPrenotati: Course[];
    id: string = '';
    facolta: string = '';

   

    constructor(private route: ActivatedRoute,http: Http, @Inject('BASE_URL') baseUrl: string) {

        this.route.params.subscribe(params => { this.id = params['id'], this.facolta = params['facolta']});
 
        http.get(baseUrl + 'api/coursesAvailable?idStudent='+this.id+'&facolta='+this.facolta).subscribe(result => {
            this.courses= result.json() as Course[];
        }, error => console.error(error));

        http.get(baseUrl + 'api/reservedCourses?idStudent=' + this.id).subscribe(result => {
            this.coursesPrenotati = result.json() as Course[];
        }, error => console.error(error));

       

     
    }
    
            

    }

      
      

   
        
    
        
        
        

    


    



/*
interface Course {
    

}
*/


