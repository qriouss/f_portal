import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.css']
})

export class UserGuideComponent {

  ganttData = [
    { task: 'Task 1', start: new Date(2023, 1, 1), end: new Date(2023, 5, 15), color: 'green' },
    { task: 'Task 2', start: new Date(2023, 6, 1), end: new Date(2023, 7, 20), color: 'red' },
    { task: 'Task 3', start: new Date(2023, 6, 1), end: new Date(2023, 10, 20), color: 'grey' },
    { task: 'Task 4', start: new Date(2023, 4, 1), end: new Date(2023, 7, 20), color: 'purple' },
    // Add more tasks with their start and end dates
  ];

  calculateGanttStyle(task: any) {
    
    // console.log(startDate,"------",endDate)

    const startMonth = task.start.getMonth() ;
  const endMonth = task.end.getMonth() ;
  const gridColumnStart = startMonth;
  const gridColumnEnd = endMonth + 1;

    // Calculate the percentage of completion based on the current date
   
      
    // Ensure progress is between 0 and 1
    // const clampedProgress = Math.max(0, Math.min(1, progress));
    
    // Calculate the width of the task bar based on progress
    // const width = progress * 100;
    // console.log(progress)
    return {
      'grid-column-start': gridColumnStart ,
      'grid-column-end': gridColumnEnd,
      'background-color': task.color
    };
  }
}
