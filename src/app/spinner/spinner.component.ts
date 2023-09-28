import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-guide',
  templateUrl: './user-guide.component.html',
  styleUrls: ['./user-guide.component.css']
})

export class UserGuideComponent implements OnInit{

  

  ganttData: any[]= []


  selectedEnvironment: string ='1'; // Variable to store the selected environment
  showData: boolean = false; // Variable to control chart visibility

  
  ngOnInit() { 
    this.updateChart();
  }

  // Method to update chart data based on the selected environment
  updateChart() {
    
    if (this.selectedEnvironment === '1') {
      this.ganttData = [
        { task: 'Cloning', start: new Date(2023, 1, 21), end: new Date(2023, 6, 10), color: 'green' },
        { task: 'Patching', start: new Date(2023, 2, 15), end: new Date(2023, 7, 5), color: 'red' },
        { task: 'Task 3', start: new Date(2023, 2, 1), end: new Date(2023, 3, 20), color: 'grey' },
        { task: 'Task 4', start: new Date(2023, 5, 1), end: new Date(2023, 7, 31), color: 'purple' },
        // Add more tasks with their start and end dates
      ];
    } else if (this.selectedEnvironment === '2') {
      this.ganttData =[
        { task: 'Cloning', start: new Date(2023, 0, 1), end: new Date(2023, 4, 10), color: 'green' },
        { task: 'Patching', start: new Date(2023, 6, 1), end: new Date(2023, 7, 20), color: 'red' },
        { task: 'Task 3', start: new Date(2023, 6, 1), end: new Date(2023, 10, 20), color: 'grey' },
        { task: 'Task 4', start: new Date(2023, 0, 1), end: new Date(2023, 11, 25), color: 'purple' },
        // Add more tasks with their start and end dates
      ];
    }

    // Set showData to true to display the chart
    this.showData = true;
  }

  

  // calculateGanttStyle(task: any) {
    
  //   // console.log(startDate,"------",endDate)
  //   const myDate=new Date(2023,0,1);
  //   const startMonth = task.start.getMonth()+1 ;
  // const endMonth = task.end.getMonth()+1 ;
  // const gridColumnStart = startMonth;
  // const gridColumnEnd = endMonth+1 ;
  // const startDate = ((task.start.getTime()-myDate.getTime())/86400000)+1;
  // const endDate = ((task.end.getTime()-myDate.getTime())/86400000)+1;
  // const daysDifference = Math.ceil((endDate - startDate));
  // // const  actualdiff= (daysDifference/366)*100;
  //   console.log(startDate)
  
  //   return {
  //     'grid-column-start': gridColumnStart ,
  //     'grid-column-end': gridColumnEnd ,
  //     // 'width': `${daysDifference}`,
  //     'background-color': task.color
  //   };
  // }

  calculateGanttStyle(task: any) {
    const startDate = task.start;
    const endDate = task.end;
      const startMonth = task.start.getMonth()+1 ;
  const endMonth = task.end.getMonth()+1 ;
  const gridColumnStart = startMonth;
  const gridColumnEnd = endMonth+1 ;
  const myDate=new Date(2023,0,1);
  const start= Math.ceil((startDate.getTime() - myDate.getTime()) / (1000 * 60 * 60 * 24));
  console.log(start)
  
    // Calculate the width based on the number of days
    const daysDifference = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  
  
    return {
      'margin-left': `${(start/30)*100 }%` ,
      // 'grid-column-end': `${gridColumnEnd }` ,
      'width': `${((daysDifference/30))*100}%`, // Set the width in pixels based on the date difference
      'background-color': task.color
    };
  }


}
