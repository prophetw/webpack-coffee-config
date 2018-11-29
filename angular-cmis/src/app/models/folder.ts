import { CmisObj } from './cmis-obj'
import {CmisService} from "../services/cmis.service";


export class Folder extends CmisObj{
  children: string[];

  constructor(
    obj:any
  ) {
    super(obj);
  }
  init(){

  }
  getChildren(){
    // cmisService.getChildren(this).subscribe({
    //   next:(value) => {console.log(value)}
    // })
  }
}
