import { Component, OnInit } from '@angular/core';
import { AppFetchDataTsService } from './../app.fetch-data.ts.service';
import jsonData from './../../assets/content/content.json';


interface DataEntry {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})

export class CourseDetailsComponent {
  dataEntry: DataEntry | undefined;

  ngOnInit() {
    const id = '2';
    this.dataEntry = this.findDataEntryById(jsonData.entries, id);
  }

  private findDataEntryById(data: Record<string, DataEntry>, id: string): DataEntry | undefined {
    return data[id];
  }
}
function showEntryById(data: Record<string, DataEntry>, id: string) {
  const entries = Object.entries(data['entries']);
  for (const [entryId, entryData] of entries) {
    if (entryId === id) {
      // Create and append DOM elements for the entry data
      const entryTitle = document.createElement('h2');
      entryTitle.textContent = entryData.title;

      const entryContent = document.createElement('p');
      entryContent.textContent = entryData.content;

      const container = document.createElement('div');
      container.appendChild(entryTitle);
      container.appendChild(entryContent);

      document.body.appendChild(container);
      break;
    }
  }
}
