import { CmisObj } from './cmis-obj'
import {CmisService} from "../services/cmis.service";
import {Document} from "./document";


export class Folder extends CmisObj{
  children: any=[];
  hasMoreItems: boolean;
  skipCount: number;
  constructor(
    obj:any
  ) {
    super(obj);
    this.children=[];
    this.init();
  }
  init(){
    this.skipCount=this.children && this.children.length;
  }
  setChildren(data){
    this.hasMoreItems=data.hasMoreItems;
    if(data && data.objects && data.objects.length>0){
      data.objects.map((item)=>{
        let document;
        console.log(item)
        console.log(this.children)
        if(item && item.object && item.object['succinctProperties'] && item.object['succinctProperties']['cmis:baseTypeId'] && item.object['succinctProperties']['cmis:baseTypeId'] ==='cmis:folder'){
          document=new Folder(item.object);
        }else{
          document=new Document(item.object);
        }
        return this.children.push(document);
      })
    }
  }
  getChildren(){
    // cmisService.getChildren(this).subscribe({
    //   next:(value) => {console.log(value)}
    // })
    console.log('==== folder get children ');
    console.log(this);
    this.cmisService.getChildren(this).subscribe({
      next:value => {
        this.setChildren(value);
        console.log(value)
      }
    })
  }
  getFolderTree(){
    this.cmisService.getFolderTree(this).subscribe({
      next:value => {
        this.setChildren(value);
        console.log(value)
      }
    })
  }
}
