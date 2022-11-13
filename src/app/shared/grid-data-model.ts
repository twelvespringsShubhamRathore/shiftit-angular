export interface gridColumn{
  columnkey:string;
  columnType:string;
  value:any;
}

export interface gridRow {
  columns:gridColumn[];
  isViewEnable:boolean;
  isEditable: boolean;
  isDuplicatable:boolean;
  isDeletable: boolean;
  rowId: number;
}
