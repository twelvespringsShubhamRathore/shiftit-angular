import { Component, OnInit } from '@angular/core';
import { gridRow } from 'src/app/shared/grid-data-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  username='Shubham'
  columns:string[] = []
  gridData:gridRow[] = [];


  IsActionEnable = true

  constructor() {
    this.columns = ['Job#','Facility Name','Facility Type','Department','Start Date','End Date','Rate','Status']
  this.gridData = [
    {
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'string',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'string',
          value: 'Jan 21 2023'
        },
        {
          columnkey:'End Date',
          columnType:'string',
          value: 'March 21 2023'
        },
        {
          columnkey:'Rate',
          columnType:'string',
          value: '23$'
        },
        {
          columnkey:'Status',
          columnType:'string',
          value: 'Pending'
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    },{
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'string',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'string',
          value: 'Jan 21 2023'
        },
        {
          columnkey:'End Date',
          columnType:'string',
          value: 'March 21 2023'
        },
        {
          columnkey:'Rate',
          columnType:'string',
          value: '23$'
        },
        {
          columnkey:'Status',
          columnType:'string',
          value: 'Pending'
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    },
    {
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'string',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'string',
          value: 'Jan 21 2023'
        },
        {
          columnkey:'End Date',
          columnType:'string',
          value: 'March 21 2023'
        },
        {
          columnkey:'Rate',
          columnType:'string',
          value: '23$'
        },
        {
          columnkey:'Status',
          columnType:'string',
          value: 'Pending'
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    },{
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'string',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'string',
          value: 'Jan 21 2023'
        },
        {
          columnkey:'End Date',
          columnType:'string',
          value: 'March 21 2023'
        },
        {
          columnkey:'Rate',
          columnType:'string',
          value: '23$'
        },
        {
          columnkey:'Status',
          columnType:'string',
          value: 'Pending'
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    },{
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'string',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'string',
          value: 'Jan 21 2023'
        },
        {
          columnkey:'End Date',
          columnType:'string',
          value: 'March 21 2023'
        },
        {
          columnkey:'Rate',
          columnType:'string',
          value: '23$'
        },
        {
          columnkey:'Status',
          columnType:'string',
          value: 'Pending'
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    },{
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'string',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'string',
          value: 'Jan 21 2023'
        },
        {
          columnkey:'End Date',
          columnType:'string',
          value: 'March 21 2023'
        },
        {
          columnkey:'Rate',
          columnType:'string',
          value: '23$'
        },
        {
          columnkey:'Status',
          columnType:'string',
          value: 'Pending'
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    },{
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'string',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'string',
          value: 'Jan 21 2023'
        },
        {
          columnkey:'End Date',
          columnType:'string',
          value: 'March 21 2023'
        },
        {
          columnkey:'Rate',
          columnType:'string',
          value: '23$'
        },
        {
          columnkey:'Status',
          columnType:'string',
          value: 'Pending'
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    },{
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'string',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'string',
          value: 'Jan 21 2023'
        },
        {
          columnkey:'End Date',
          columnType:'string',
          value: 'March 21 2023'
        },
        {
          columnkey:'Rate',
          columnType:'string',
          value: '23$'
        },
        {
          columnkey:'Status',
          columnType:'string',
          value: 'Pending'
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    },{
      columns:[
        {
          columnkey:'Job#',
          columnType:'number',
          value: 1
        },
        {
          columnkey:'Facility Name',
          columnType:'number',
          value: 'Bhagwati Hospital'
        },
        {
          columnkey:'Facility Type',
          columnType:'string',
          value: 'Hospital'
        },
        {
          columnkey:'Department',
          columnType:'string',
          value: 'Sergery'
        },
        {
          columnkey:'Start Date',
          columnType:'string',
          value: 'Jan 21 2023'
        },
        {
          columnkey:'End Date',
          columnType:'string',
          value: 'March 21 2023'
        },
        {
          columnkey:'Rate',
          columnType:'string',
          value: '23$'
        },
        {
          columnkey:'Status',
          columnType:'string',
          value: 'Pending'
        }
      ],
      isDeletable: true,
      isDuplicatable: true,
      isEditable: true,
      isViewEnable: true,
      rowId: 1
    }
  ];
  }

  ngOnInit(): void {
  }

}
