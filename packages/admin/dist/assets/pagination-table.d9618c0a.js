import{W as e,h as t,t as a,s as i,b as n}from"./vendor.e2d9dc7f.js";import"./index.25b4fa96.js";import"./index.1e20a542.js";import"./index.esm.92cb8bbc.js";import"./index.esm.51ecdf0a.js";var s=Object.defineProperty,d=Object.getOwnPropertyDescriptor;let r=class extends e{constructor(){super(...arguments),this.dataSource=[{id:1,name:"xwang",age:18,address:"Tencent"},{id:2,name:"dntzhang",age:12,address:"Tencent",$config:{bgColor:"rgb(247 176 176 / 32%)"}},{id:3,name:"lucy",age:12,address:"Tencent"},{id:4,name:"john",age:12,address:"Tencent",$config:{bgColor:"rgb(230 162 60 / 34%)"}},{id:5,name:"tim",age:12,address:"Tencent"},{id:6,name:"tim",age:12,address:"Tencent"},{id:7,name:"tim",age:12,address:"Tencent"},{id:8,name:"tim",age:12,address:"Tencent"},{id:9,name:"xwang",age:18,address:"Tencent"},{id:10,name:"dntzhang",age:12,address:"Tencent",$config:{bgColor:"rgb(247 176 176 / 32%)"}},{id:11,name:"lucy",age:12,address:"Tencent"},{id:12,name:"john",age:12,address:"Tencent",$config:{bgColor:"rgb(230 162 60 / 34%)"}},{id:13,name:"tim",age:12,address:"Tencent"},{id:14,name:"tim",age:12,address:"Tencent"},{id:15,name:"tim",age:12,address:"Tencent"},{id:16,name:"tim",age:12,address:"Tencent"}],this.columns=[{title:"ID",render:e=>t("strong",null,e.id)},{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"},{title:"操作",align:"right",render:e=>t("o-tooltip",{content:"删除"+e.name},t("o-icon-delete",{"data-item-id":e.id,onClick:this.onClick,style:"cursor:pointer;font-size:20px;"}))}],this.paging=!0,this.pageSize=5,this.pageIndex=0,this.filterData=[],this.change=e=>{this.pageIndex=e.detail,this.renderTable()},this.onClick=e=>{this.table.deleteRowById(e.currentTarget.dataset.itemId)}}renderTable(){this.filterData=this.dataSource.slice(this.pageIndex*this.pageSize,this.pageIndex*this.pageSize+this.pageSize),this.update()}installed(){this.renderTable()}deleteItemById(e){const t=this.dataSource.indexOf(this.dataSource.find((t=>t.id===e)));-1!==t&&this.dataSource.splice(t,1),this.update()}render(){return t("div",{class:a`pl-0.5`},t("div",{class:a`px-2`},t("o-table",{ref:e=>this.table=e,checkbox:!1,stripe:!1,border:!1,compact:!1,columns:this.columns,dataSource:this.filterData}),t("div",{class:a`mt-3 text-right`},t("o-pagination",{total:this.dataSource.length,"current-page":this.pageIndex,"page-size":this.pageSize,onchange:this.change}))))}};r.css=i.target,r=((e,t,a,i)=>{for(var n,r=i>1?void 0:i?d(t,a):t,c=e.length-1;c>=0;c--)(n=e[c])&&(r=(i?n(t,a,r):n(r))||r);return i&&r&&s(t,a,r),r})([n("pagination-table")],r);export{r as default};
