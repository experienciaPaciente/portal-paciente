"use strict";(self.webpackChunkportal_paciente=self.webpackChunkportal_paciente||[]).push([[556],{6556:(O,d,s)=>{s.r(d),s.d(d,{default:()=>k});var r=s(177),l=s(5379),h=s(4908),m=s(467),e=s(3953),u=s(1827),f=s(8010),g=s(1229),p=s(6335),b=s(5023),M=s(7587);function _(i,a){if(1&i&&e.nrm(0,"img",8),2&i){const t=e.XpG();e.FS9("src",t.brandDesktop,e.B4B)}}function v(i,a){if(1&i&&e.nrm(0,"img",9),2&i){const t=e.XpG();e.FS9("src",t.brandMobile,e.B4B)}}function C(i,a){if(1&i&&e.nrm(0,"app-label",5),2&i){const t=e.XpG();e.FS9("subtitle",t.email),e.Y8G("icon",t.isMobile?"":"user")}}function w(i,a){if(1&i){const t=e.RV6();e.j41(0,"app-modal",10),e.bIt("closeModal",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.isModalOpen=!1)}),e.j41(1,"app-button",11),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.isModalOpen=!1)}),e.k0s(),e.j41(2,"app-button",12),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.onConfirm())}),e.k0s()()}2&i&&e.Y8G("prefix","Cerrar sesi\xf3n")("title","Modal Title")("subtitle","Modal Subtitle")("img","./assets/img/login__bg--desktop.jpg")("caption","This is the image caption.")("closeable",!0)}let x=(()=>{class i{constructor(){this.brandDesktop="",this.brandMobile="./assets/img/ep__marca--sqr.png",this.isMobile=!1,this.loggedUser=!0,this.email=null,this.name=null,this.isModalOpen=!1,this.auth=(0,e.WQX)(p.Nj),this.authState$=(0,p.wh)(this.auth),this._router=(0,e.WQX)(l.Ix),this.authservice=(0,e.WQX)(f.u),this.dropdownPosition={top:"45px",left:"-165px"}}getMenuItems(t){return[{label:"Mi cuenta",icon:"user",path:"/auth/sign-in",disabled:!1},{label:"Nuevo registro",icon:"user",path:"/registrar",disabled:!1},{label:"Gestionar permisos",icon:"user",path:"/",disabled:!0},{label:"Delegar cuenta",icon:"user",path:"/",disabled:!0},{label:"Cerrar sesi\xf3n",icon:"user",disabled:!1,callback:()=>this.openModal()}]}onResize(t){this.checkIfMobile(t.target.innerWidth)}ngOnInit(){this.authState$.subscribe(t=>{t?(this.email=t.email,this.name=t.displayName):(this.email=null,this.name="Usuario")}),this.checkIfMobile(window.innerWidth)}checkIfMobile(t){this.isMobile=t<980}openModal(){this.isModalOpen=!this.isModalOpen}onConfirm(){this.isModalOpen=!1,this.logOut()}logOut(){var t=this;return(0,m.A)(function*(){try{yield t.authservice.logOut(),t._router.navigateByUrl("/auth/sign-in")}catch(o){console.log(o)}})()}static#e=this.\u0275fac=function(o){return new(o||i)};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-header"]],hostBindings:function(o,n){1&o&&e.bIt("resize",function(c){return n.onResize(c)},!1,e.tSv)},inputs:{brandDesktop:"brandDesktop",brandMobile:"brandMobile"},standalone:!0,features:[e.aNF],decls:8,vars:6,consts:[["id","main"],[1,"flex--row"],["alt","","width","234","height","37",3,"src",4,"ngIf"],["alt","","width","45","height","45",3,"src",4,"ngIf"],[1,"header__wrapper--right"],["iconLabel","user","label","JS","direction","row","size","xxs",3,"icon","subtitle"],["buttonLabel","","buttonIcon","bars",3,"items","position"],["icon","info-circle",3,"prefix","title","subtitle","img","caption","closeable"],["alt","","width","234","height","37",3,"src"],["alt","","width","45","height","45",3,"src"],["icon","info-circle",3,"closeModal","prefix","title","subtitle","img","caption","closeable"],["direction","none","size","sm","label","Cancel","variant","outline","severity","danger",3,"click"],["direction","none","size","sm","label","Confirm","variant","fill","severity","success",3,"click"]],template:function(o,n){1&o&&(e.j41(0,"header",0)(1,"section",1),e.DNE(2,_,1,1,"img",2)(3,v,1,1,"img",3),e.k0s(),e.j41(4,"section",4),e.DNE(5,C,1,2,"app-label",5),e.nrm(6,"app-dropdown",6),e.k0s()(),e.DNE(7,w,3,6,"app-modal",7)),2&o&&(e.R7$(2),e.Y8G("ngIf",!n.isMobile),e.R7$(),e.Y8G("ngIf",n.isMobile),e.R7$(2),e.vxM(n.loggedUser&&!n.isMobile?5:-1),e.R7$(),e.Y8G("items",n.getMenuItems())("position",n.dropdownPosition),e.R7$(),e.vxM(n.isModalOpen?7:-1))},dependencies:[g.Q,u.U,r.MD,r.bT,b.P,M.z],styles:["header#main[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;background-color:#fff;padding:var(--header__padding--vertical) var(--header__padding--row);height:var(--header__height);width:100vw;box-sizing:border-box;box-shadow:var(--shadow)}header#main[_ngcontent-%COMP%] > section[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]:hover{filter:brightness(110%);cursor:pointer}header#main[_ngcontent-%COMP%]   nav#header__menu--main[_ngcontent-%COMP%]{display:none}header#main[_ngcontent-%COMP%]   .header__wrapper--right[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;width:-moz-fit-content;width:fit-content;gap:.5rem}"]})}return i})();function I(i,a){1&i&&(e.j41(0,"aside",6),e.nrm(1,"app-list",7),e.k0s()),2&i&&(e.R7$(),e.Y8G("type","flex")("direction","horizontal"))}function H(i,a){1&i&&(e.j41(0,"main",8),e.nrm(1,"router-outlet"),e.k0s())}let k=(()=>{class i{constructor(t){this.router=t,this.title="portal-paciente",this.imgSrc="./assets/img/ep__marca--row.svg",this.isMobile=!1,this.currentView="list"}onResize(t){this.checkIfMobile(t.target.innerWidth)}ngOnInit(){this.router.events.subscribe(t=>{t instanceof l.wF&&this.determineCurrentView(t.url)}),this.checkIfMobile(window.innerWidth)}checkIfMobile(t){this.isMobile=t<980}determineCurrentView(t){this.currentView=t.includes("/item/")?"detail":t.includes("/registrar")?"registrar":t.includes("/scan")?"scan":"list"}shouldShowPanel(t){return!this.isMobile||this.currentView===t}shouldShowMainPanel(){return!this.isMobile||"list"!==this.currentView}static#e=this.\u0275fac=function(o){return new(o||i)(e.rXU(l.Ix))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-home"]],hostBindings:function(o,n){1&o&&e.bIt("resize",function(c){return n.onResize(c)},!1,e.tSv)},standalone:!0,features:[e.aNF],decls:6,vars:3,consts:[[1,"page"],[1,"page__navbar"],[3,"brandDesktop"],[1,"page__body"],["type","flex","class","page__panel--sidebar",4,"ngIf"],["class","page__panel--main",4,"ngIf"],["type","flex",1,"page__panel--sidebar"],[3,"type","direction"],[1,"page__panel--main"]],template:function(o,n){1&o&&(e.j41(0,"div",0)(1,"nav",1),e.nrm(2,"app-header",2),e.k0s(),e.j41(3,"div",3),e.DNE(4,I,2,2,"aside",4)(5,H,2,0,"main",5),e.k0s()()),2&o&&(e.R7$(2),e.FS9("brandDesktop",n.imgSrc),e.R7$(2),e.Y8G("ngIf",n.shouldShowPanel("list")),e.R7$(),e.Y8G("ngIf",n.shouldShowMainPanel()))},dependencies:[h.s,l.n3,x,r.MD,r.bT]})}return i})()}}]);