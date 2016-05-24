import {Component} from 'angular2/core'
import {CourseService} from './course.service';
import {AutoGrowthDirective} from './auto-growth.directive';

@Component({
    selector: "courses",
    template : `
    <h2>Courses</h2>
    {{title}}
    <input type="text" autoGrowth/>
    <ul>
        <li *ngFor="#course of courses">
            {{course}}
        </li>
        
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowthDirective]
    
})
export class CoursesComponent{
    title = "The title of course page";
    courses;
    
    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}