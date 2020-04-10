(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2VYM":function(l,n){l.exports="import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'ngx-bootstrap';\n\n@Component({\n  selector: 'demo-tabs-manual-selection',\n  templateUrl: './manual-selection.html'\n})\nexport class DemoTabsManualSelectionComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;\n\n  selectTab(tabId: number) {\n    this.staticTabs.tabs[tabId].active = true;\n  }\n}\n"},"2nD4":function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-custom-template',\n  templateUrl: './custom-template.html'\n})\nexport class DemoTabsCustomComponent {}\n"},"4IJK":function(l,n){l.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-dynamic',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: './dynamic.html'\n})\nexport class DemoTabsDynamicComponent {\n  tabs: any[] = [\n    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },\n    { title: 'Dynamic Title 2', content: 'Dynamic content 2' },\n    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }\n  ];\n\n  addNewTab(): void {\n    const newTabIndex = this.tabs.length + 1;\n    this.tabs.push({\n      title: `Dynamic Title ${newTabIndex}`,\n      content: `Dynamic content ${newTabIndex}`,\n      disabled: false,\n      removable: true\n    });\n  }\n\n  removeTabHandler(tab: any): void {\n    this.tabs.splice(this.tabs.indexOf(tab), 1);\n    console.log('Remove Tab handler');\n  }\n}\n"},"8liW":function(l,n){l.exports='<tabset [vertical]="true" type="pills">\n  <tab heading="Vertical 1">Vertical content 1</tab>\n  <tab heading="Vertical 2">Vertical content 2</tab>\n</tabset>\n'},DcZo:function(l,n){l.exports='<tabset>\n  <tab heading="Config 1">Config content 1</tab>\n  <tab heading="Config 2">Config content 2</tab>\n</tabset>\n'},Fxi4:function(l,n){l.exports='<tabset type="pills">\n  <tab heading="Pills 1">Pills content 1</tab>\n  <tab heading="Pills 2">Pills content 2</tab>\n</tabset>\n'},HDuy:function(l,n){l.exports='<div>\n  <tabset>\n    <tab heading="Static">\n      Tab 1\n    </tab>\n    <tab>\n      <ng-template tabHeading>\n        <span class="badge badge-secondary">Heading</span>\n      </ng-template>\n      I\'ve got an HTML heading. Pretty cool!\n    </tab>\n    <tab>\n      <ng-template tabHeading>\n        <i><b>Tab 3</b></i>\n      </ng-template>\n      Tab with html tags in heading\n    </tab>\n  </tabset>\n</div>\n'},IRXU:function(l,n){l.exports='<div>\n  <p>You can select tabs directly from component</p>\n  <p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(1)">Select second tab</button>\n    <button type="button" class="btn btn-primary btn-sm" (click)="selectTab(2)">Select third tab</button>\n  </p>\n  <hr/>\n  <tabset #staticTabs>\n    <tab heading="Static title">Static content</tab>\n    <tab heading="Static Title 1">Static content 1</tab>\n    <tab heading="Static Title 2">Static content 2</tab>\n    <tab heading="Static Title 3">Static content 3</tab>\n  </tabset>\n</div>\n\n'},Lngv:function(l,n){l.exports='<div class="mb-3">\n  <pre class="card card-block card-header" *ngIf="value">Event select is fired. The heading of the selected tab is: {{value}}</pre>\n</div>\n<tabset>\n  <tab heading="First tab" class="mt-2" (selectTab)="onSelect($event)">\n    <h4>Title</h4>\n    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n      Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n  </tab>\n  <tab heading="Second tab" class="mt-2" (selectTab)="onSelect($event)">\n    <h4>Title 2</h4>\n    <p>It has survived not only five centuries, but also the leap into electronic typesetting,\n      remaining essentially unchanged. It was popularised in the 1960s with the release of\n      Letraset sheets containing Lorem Ipsum passages</p>\n  </tab>\n</tabset>\n'},PMXT:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-pills',\n  templateUrl: './pills.html'\n})\nexport class DemoTabsPillsComponent {}\n"},WKcI:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-vertical-pills',\n  templateUrl: './vertical-pills.html'\n})\nexport class DemoTabsVerticalPillsComponent {}\n"},Ynb5:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoTabsBasicComponent {}\n"},cJyM:function(l,n){l.exports='<tabset [justified]="true">\n  <tab heading="Justified">Justified content</tab>\n  <tab heading="SJ">Short Labeled Justified content</tab>\n  <tab heading="Long Justified">Long Labeled Justified content</tab>\n</tabset>\n'},dVlq:function(l,n){l.exports="import { Component } from '@angular/core';\nimport { TabsetConfig } from 'ngx-bootstrap/tabs';\n\n// such override allows to keep some initial values\n\nexport function getTabsetConfig(): TabsetConfig {\n  return Object.assign(new TabsetConfig(), { type: 'pills' });\n}\n\n@Component({\n  selector: 'demo-tabs-config',\n  templateUrl: './config.html',\n  providers: [{ provide: TabsetConfig, useFactory: getTabsetConfig }]\n})\nexport class DemoTabsConfigComponent {}\n"},gFwQ:function(l,n){l.exports="// RECOMMENDED\nimport { TabsModule } from 'ngx-bootstrap/tabs';\n// or\nimport { TabsModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [TabsModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},"je+T":function(l,n){l.exports="import { Component, ViewChild } from '@angular/core';\nimport { TabsetComponent } from 'ngx-bootstrap';\n\n@Component({\n  selector: 'demo-tabs-disabled',\n  templateUrl: './disabled.html'\n})\nexport class DemoTabsDisabledComponent {\n  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;\n\n  disableEnable() {\n    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;\n  }\n}\n"},ku7f:function(l,n){l.exports='<div (click)="$event.preventDefault()">\n    <p>Change quantity of tabs by manipulating tabs array</p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="addNewTab()">\n      Add new tab\n    </button>\n    <button type="button" class="btn btn-primary btn-sm" (click)="tabs = []"  *ngIf="tabs.length">\n      Remove all tabs\n    </button>\n  <hr/>\n  <tabset>\n    <tab heading="Static title">Static content</tab>\n    <tab *ngFor="let tabz of tabs"\n         [heading]="tabz.title"\n         [active]="tabz.active"\n         (selectTab)="tabz.active = true"\n         (deselect)="tabz.active = false"\n         [disabled]="tabz.disabled"\n         [removable]="tabz.removable"\n         (removed)="removeTabHandler(tabz)"\n         [customClass]="tabz.customClass">\n      {{tabz?.content}}\n    </tab>\n  </tabset>\n</div>\n'},nTNe:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-justified',\n  templateUrl: './justified.html'\n})\nexport class DemoTabsJustifiedComponent {}\n"},ogN3:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-tabs-custom-class',\n  templateUrl: './custom-class.html'\n})\nexport class DemoTabsCustomClassComponent {\n  tabs: any[] = [\n    {\n      title: 'Dynamic Title 1',\n      content: 'Dynamic content 1',\n      customClass: 'customClass'\n    },\n    {\n      title: 'Dynamic Title 2',\n      content: 'Dynamic content 2',\n      customClass: 'customClass'\n    }\n  ];\n}\n"},opDV:function(l,n){l.exports='<div>\n  <tabset>\n    <tab heading="Basic title" id="tab1">Basic content</tab>\n    <tab heading="Basic Title 1">Basic content 1</tab>\n    <tab heading="Basic Title 2">Basic content 2</tab>\n  </tabset>\n</div>\n\n'},rJje:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),a=function(){return function(){}}(),u=t("pMnS"),i=t("+R8e"),b=t("R23a"),o=t("7ctM"),c=t("A8CJ"),s=t("qzmI"),r=t("BFzJ"),d=t("/jpH"),p=t("ybC4"),m=t("+6bh"),h=t("oxqd"),g=function(){return function(){}}(),f=function(){function l(){}return l.prototype.selectTab=function(l){this.staticTabs.tabs[l].active=!0},l}(),v=function(){function l(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1"},{title:"Dynamic Title 2",content:"Dynamic content 2"},{title:"Dynamic Title 3",content:"Dynamic content 3",removable:!0}]}return l.prototype.addNewTab=function(){var l=this.tabs.length+1;this.tabs.push({title:"Dynamic Title "+l,content:"Dynamic content "+l,disabled:!1,removable:!0})},l.prototype.removeTabHandler=function(l){this.tabs.splice(this.tabs.indexOf(l),1),console.log("Remove Tab handler")},l}(),y=function(){return function(){}}(),T=function(){return function(){}}(),C=function(){return function(){}}(),I=function(){return function(){this.tabs=[{title:"Dynamic Title 1",content:"Dynamic content 1",customClass:"customClass"},{title:"Dynamic Title 2",content:"Dynamic content 2",customClass:"customClass"}]}}(),q=t("YAQW");function A(){return Object.assign(new q.f,{type:"pills"})}var x=function(){return function(){}}(),S=function(){function l(){}return l.prototype.disableEnable=function(){this.staticTabs.tabs[2].disabled=!this.staticTabs.tabs[2].disabled},l}(),k=function(){return function(){}}(),D=function(){function l(){}return l.prototype.onSelect=function(l){this.value=l.heading},l}(),F=function(){return function(){}}(),w=t("ClAA"),z=t("y20O"),K=t("nk7K"),J=t("l3GJ"),P=[{name:"Usage",anchor:"usage",outlet:w.a,content:{doc:t("gFwQ")}},{name:"Examples",anchor:"examples",outlet:z.a,content:[{title:"Basic",anchor:"basic",component:t("Ynb5"),html:t("opDV"),outlet:g},{title:"Manual selection",anchor:"tabs-manual-select",component:t("2VYM"),html:t("IRXU"),outlet:f},{title:"Disabled tabs",anchor:"disabled",component:t("je+T"),html:t("z9kr"),outlet:S},{title:"Dynamic tabs",anchor:"tabs-dynamic",component:t("4IJK"),html:t("ku7f"),outlet:v},{title:"Pills",anchor:"tabs-Pills",component:t("PMXT"),html:t("Fxi4"),outlet:y},{title:"Vertical Pills",anchor:"tabs-vertical-pills",component:t("WKcI"),html:t("8liW"),outlet:T},{title:"Justified",anchor:"tabs-justified",component:t("nTNe"),html:t("cJyM"),description:"<p><i>Bootstrap 4 doesn't have justified classes</i></p>",outlet:C},{title:"Custom class",anchor:"tabs-custom-class",component:t("ogN3"),html:t("xGKq"),outlet:I},{title:"Select event",anchor:"select-event",component:t("uWlo"),html:t("Lngv"),description:"<p>You can subscribe to tab's <code>select</code> event</p>",outlet:D},{title:"Configuring defaults",anchor:"tabs-config-defaults",component:t("dVlq"),html:t("DcZo"),outlet:x},{title:"Custom template",anchor:"tabs-custom-template",component:t("2nD4"),html:t("HDuy"),outlet:k},{title:"Accessibility",anchor:"accessibility",outlet:F}]},{name:"API Reference",anchor:"api-reference",outlet:K.a,content:[{title:"TabsetComponent",anchor:"tabset-component",outlet:J.b},{title:"TabDirective",anchor:"tab-directive",outlet:J.b},{title:"TabHeadingDirective",anchor:"tab-heading-directive",outlet:J.b},{title:"TabsetConfig",anchor:"tabset-config",outlet:J.c}]}],V=function(){return function(){this.name="Tabs",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/tabs",this.componentContent=P}}(),L=e.ob({encapsulation:2,styles:[],data:{}});function M(l){return e.Kb(2,[(l()(),e.qb(0,0,null,null,19,"demo-section",[],null,null,null,d.b,d.a)),e.pb(1,49152,null,0,p.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(l()(),e.qb(2,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus. "])),(l()(),e.qb(4,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Nested tabs are not supported."])),(l()(),e.qb(6,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["The easiest way to add the tabs component to your app (will be added to the root module)"])),(l()(),e.qb(8,0,null,0,9,"pre",[["class","prettyprint lang-bash prettyprinted"]],null,null,null,null,null)),(l()(),e.qb(9,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ng add ngx"])),(l()(),e.qb(11,0,null,null,1,"span",[["class","pun"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["-"])),(l()(),e.qb(13,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["bootstrap "])),(l()(),e.Ib(-1,null,[" --component "])),(l()(),e.qb(16,0,null,null,1,"span",[["class","pln"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["tabs"])),(l()(),e.qb(18,0,null,0,1,"docs-section",[],null,null,null,m.b,m.a)),e.pb(19,49152,null,0,h.a,[e.q],{content:[0,"content"]},null)],function(l,n){var t=n.component;l(n,1,0,t.name,t.src,t.componentContent),l(n,19,0,t.componentContent)},null)}function B(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"tabs-section",[],null,null,null,M,L)),e.pb(1,49152,null,0,V,[],null,null)],null,null)}var N=e.mb("tabs-section",V,B,{},{},[]),$=t("pKUh"),j=e.ob({encapsulation:2,styles:[],data:{}});function H(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,10,"tabset",[],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(2,180224,null,0,q.e,[q.f,e.F],null,null),(l()(),e.qb(3,0,null,0,2,"tab",[["heading","Basic title"],["id","tab1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(4,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"],id:[1,"id"]},null),(l()(),e.Ib(-1,null,["Basic content"])),(l()(),e.qb(6,0,null,0,2,"tab",[["heading","Basic Title 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(7,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Basic content 1"])),(l()(),e.qb(9,0,null,0,2,"tab",[["heading","Basic Title 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(10,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Basic content 2"]))],function(l,n){l(n,4,0,"Basic title","tab1"),l(n,7,0,"Basic Title 1"),l(n,10,0,"Basic Title 2")},function(l,n){l(n,1,0,e.Ab(n,2).clazz),l(n,3,0,e.Ab(n,4).id,e.Ab(n,4).active,e.Ab(n,4).addClass),l(n,6,0,e.Ab(n,7).id,e.Ab(n,7).active,e.Ab(n,7).addClass),l(n,9,0,e.Ab(n,10).id,e.Ab(n,10).active,e.Ab(n,10).addClass)})}function R(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-basic",[],null,null,null,H,j)),e.pb(1,49152,null,0,g,[],null,null)],null,null)}var U=e.mb("demo-tabs-basic",g,R,{},{},[]),E=e.ob({encapsulation:2,styles:[],data:{}});function O(l){return e.Kb(0,[e.Gb(671088640,1,{staticTabs:0}),(l()(),e.qb(1,0,null,null,22,"div",[],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["You can select tabs directly from component"])),(l()(),e.qb(4,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectTab(1)&&e),e},null,null)),(l()(),e.Ib(-1,null,["Select second tab"])),(l()(),e.qb(7,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectTab(2)&&e),e},null,null)),(l()(),e.Ib(-1,null,["Select third tab"])),(l()(),e.qb(9,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(10,0,null,null,13,"tabset",[],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(11,180224,[[1,4],["staticTabs",4]],0,q.e,[q.f,e.F],null,null),(l()(),e.qb(12,0,null,0,2,"tab",[["heading","Static title"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(13,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Static content"])),(l()(),e.qb(15,0,null,0,2,"tab",[["heading","Static Title 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(16,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Static content 1"])),(l()(),e.qb(18,0,null,0,2,"tab",[["heading","Static Title 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(19,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Static content 2"])),(l()(),e.qb(21,0,null,0,2,"tab",[["heading","Static Title 3"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(22,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Static content 3"]))],function(l,n){l(n,13,0,"Static title"),l(n,16,0,"Static Title 1"),l(n,19,0,"Static Title 2"),l(n,22,0,"Static Title 3")},function(l,n){l(n,10,0,e.Ab(n,11).clazz),l(n,12,0,e.Ab(n,13).id,e.Ab(n,13).active,e.Ab(n,13).addClass),l(n,15,0,e.Ab(n,16).id,e.Ab(n,16).active,e.Ab(n,16).addClass),l(n,18,0,e.Ab(n,19).id,e.Ab(n,19).active,e.Ab(n,19).addClass),l(n,21,0,e.Ab(n,22).id,e.Ab(n,22).active,e.Ab(n,22).addClass)})}function Y(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-manual-selection",[],null,null,null,O,E)),e.pb(1,49152,null,0,f,[],null,null)],null,null)}var W=e.mb("demo-tabs-manual-selection",f,Y,{},{},[]),Q=e.ob({encapsulation:2,styles:[],data:{}});function G(l){return e.Kb(0,[e.Gb(671088640,1,{staticTabs:0}),(l()(),e.qb(1,0,null,null,23,"div",[],null,null,null,null,null)),(l()(),e.qb(2,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Tabs can be enabled or disabled by changing "])),(l()(),e.qb(4,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["disabled"])),(l()(),e.Ib(-1,null,[" input property"])),(l()(),e.qb(7,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.disableEnable()&&e),e},null,null)),(l()(),e.Ib(-1,null,[" Enable / Disable third tab "])),(l()(),e.qb(10,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(11,0,null,null,13,"tabset",[],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(12,180224,[[1,4],["staticTabs",4]],0,q.e,[q.f,e.F],null,null),(l()(),e.qb(13,0,null,0,2,"tab",[["heading","Static title"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(14,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Static content"])),(l()(),e.qb(16,0,null,0,2,"tab",[["heading","Static Title 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(17,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Static content 1"])),(l()(),e.qb(19,0,null,0,2,"tab",[["heading","Static Title 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(20,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Static content 2"])),(l()(),e.qb(22,0,null,0,2,"tab",[["heading","Static Title 3"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(23,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Static content 3"]))],function(l,n){l(n,14,0,"Static title"),l(n,17,0,"Static Title 1"),l(n,20,0,"Static Title 2"),l(n,23,0,"Static Title 3")},function(l,n){l(n,11,0,e.Ab(n,12).clazz),l(n,13,0,e.Ab(n,14).id,e.Ab(n,14).active,e.Ab(n,14).addClass),l(n,16,0,e.Ab(n,17).id,e.Ab(n,17).active,e.Ab(n,17).addClass),l(n,19,0,e.Ab(n,20).id,e.Ab(n,20).active,e.Ab(n,20).addClass),l(n,22,0,e.Ab(n,23).id,e.Ab(n,23).active,e.Ab(n,23).addClass)})}function X(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-disabled",[],null,null,null,G,Q)),e.pb(1,49152,null,0,S,[],null,null)],null,null)}var Z=e.mb("demo-tabs-disabled",S,X,{},{},[]),_=t("Ip0R"),ll=e.ob({encapsulation:2,styles:[],data:{}});function nl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==(l.component.tabs=[])&&e),e},null,null)),(l()(),e.Ib(-1,null,[" Remove all tabs "]))],null,null)}function tl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,2,"tab",[],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],[[null,"selectTab"],[null,"deselect"],[null,"removed"]],function(l,n,t){var e=!0,a=l.component;return"selectTab"===n&&(e=0!=(l.context.$implicit.active=!0)&&e),"deselect"===n&&(e=0!=(l.context.$implicit.active=!1)&&e),"removed"===n&&(e=!1!==a.removeTabHandler(l.context.$implicit)&&e),e},null,null)),e.pb(1,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"],disabled:[1,"disabled"],removable:[2,"removable"],customClass:[3,"customClass"],active:[4,"active"]},{selectTab:"selectTab",deselect:"deselect",removed:"removed"}),(l()(),e.Ib(2,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.title,n.context.$implicit.disabled,n.context.$implicit.removable,n.context.$implicit.customClass,n.context.$implicit.active)},function(l,n){l(n,0,0,e.Ab(n,1).id,e.Ab(n,1).active,e.Ab(n,1).addClass),l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.content)})}function el(l){return e.Kb(2,[(l()(),e.qb(0,0,null,null,14,"div",[],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==t.preventDefault()&&e),e},null,null)),(l()(),e.qb(1,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Change quantity of tabs by manipulating tabs array"])),(l()(),e.qb(3,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["type","button"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addNewTab()&&e),e},null,null)),(l()(),e.Ib(-1,null,[" Add new tab "])),(l()(),e.gb(16777216,null,null,1,null,nl)),e.pb(6,16384,null,0,_.n,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(7,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e.qb(8,0,null,null,6,"tabset",[],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(9,180224,null,0,q.e,[q.f,e.F],null,null),(l()(),e.qb(10,0,null,0,2,"tab",[["heading","Static title"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(11,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Static content"])),(l()(),e.gb(16777216,null,0,1,null,tl)),e.pb(14,278528,null,0,_.m,[e.Q,e.N,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,6,0,t.tabs.length),l(n,11,0,"Static title"),l(n,14,0,t.tabs)},function(l,n){l(n,8,0,e.Ab(n,9).clazz),l(n,10,0,e.Ab(n,11).id,e.Ab(n,11).active,e.Ab(n,11).addClass)})}function al(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-dynamic",[],null,null,null,el,ll)),e.pb(1,49152,null,0,v,[],null,null)],null,null)}var ul=e.mb("demo-tabs-dynamic",v,al,{},{},[]),il=e.ob({encapsulation:2,styles:[],data:{}});function bl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,2,"tab",[],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(1,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"],customClass:[1,"customClass"]},null),(l()(),e.Ib(2,null,[" "," "]))],function(l,n){l(n,1,0,n.context.$implicit.title,n.context.$implicit.customClass)},function(l,n){l(n,0,0,e.Ab(n,1).id,e.Ab(n,1).active,e.Ab(n,1).addClass),l(n,2,0,null==n.context.$implicit?null:n.context.$implicit.content)})}function ol(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,6,"tabset",[],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(1,180224,null,0,q.e,[q.f,e.F],null,null),(l()(),e.qb(2,0,null,0,2,"tab",[["customClass","customClass"],["heading","Static title"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(3,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"],customClass:[1,"customClass"]},null),(l()(),e.Ib(-1,null,["Static content"])),(l()(),e.gb(16777216,null,0,1,null,bl)),e.pb(6,278528,null,0,_.m,[e.Q,e.N,e.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,3,0,"Static title","customClass"),l(n,6,0,t.tabs)},function(l,n){l(n,0,0,e.Ab(n,1).clazz),l(n,2,0,e.Ab(n,3).id,e.Ab(n,3).active,e.Ab(n,3).addClass)})}function cl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-custom-class",[],null,null,null,ol,il)),e.pb(1,49152,null,0,I,[],null,null)],null,null)}var sl=e.mb("demo-tabs-custom-class",I,cl,{},{},[]),rl=e.ob({encapsulation:2,styles:[],data:{}});function dl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,7,"tabset",[["type","pills"]],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(1,180224,null,0,q.e,[q.f,e.F],{type:[0,"type"]},null),(l()(),e.qb(2,0,null,0,2,"tab",[["heading","Pills 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(3,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Pills content 1"])),(l()(),e.qb(5,0,null,0,2,"tab",[["heading","Pills 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(6,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Pills content 2"]))],function(l,n){l(n,1,0,"pills"),l(n,3,0,"Pills 1"),l(n,6,0,"Pills 2")},function(l,n){l(n,0,0,e.Ab(n,1).clazz),l(n,2,0,e.Ab(n,3).id,e.Ab(n,3).active,e.Ab(n,3).addClass),l(n,5,0,e.Ab(n,6).id,e.Ab(n,6).active,e.Ab(n,6).addClass)})}function pl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-pills",[],null,null,null,dl,rl)),e.pb(1,49152,null,0,y,[],null,null)],null,null)}var ml=e.mb("demo-tabs-pills",y,pl,{},{},[]),hl=e.ob({encapsulation:2,styles:[],data:{}});function gl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,7,"tabset",[["type","pills"]],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(1,180224,null,0,q.e,[q.f,e.F],{vertical:[0,"vertical"],type:[1,"type"]},null),(l()(),e.qb(2,0,null,0,2,"tab",[["heading","Vertical 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(3,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Vertical content 1"])),(l()(),e.qb(5,0,null,0,2,"tab",[["heading","Vertical 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(6,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Vertical content 2"]))],function(l,n){l(n,1,0,!0,"pills"),l(n,3,0,"Vertical 1"),l(n,6,0,"Vertical 2")},function(l,n){l(n,0,0,e.Ab(n,1).clazz),l(n,2,0,e.Ab(n,3).id,e.Ab(n,3).active,e.Ab(n,3).addClass),l(n,5,0,e.Ab(n,6).id,e.Ab(n,6).active,e.Ab(n,6).addClass)})}function fl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-vertical-pills",[],null,null,null,gl,hl)),e.pb(1,49152,null,0,T,[],null,null)],null,null)}var vl=e.mb("demo-tabs-vertical-pills",T,fl,{},{},[]),yl=e.ob({encapsulation:2,styles:[],data:{}});function Tl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,10,"tabset",[],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(1,180224,null,0,q.e,[q.f,e.F],{justified:[0,"justified"]},null),(l()(),e.qb(2,0,null,0,2,"tab",[["heading","Justified"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(3,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Justified content"])),(l()(),e.qb(5,0,null,0,2,"tab",[["heading","SJ"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(6,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Short Labeled Justified content"])),(l()(),e.qb(8,0,null,0,2,"tab",[["heading","Long Justified"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(9,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Long Labeled Justified content"]))],function(l,n){l(n,1,0,!0),l(n,3,0,"Justified"),l(n,6,0,"SJ"),l(n,9,0,"Long Justified")},function(l,n){l(n,0,0,e.Ab(n,1).clazz),l(n,2,0,e.Ab(n,3).id,e.Ab(n,3).active,e.Ab(n,3).addClass),l(n,5,0,e.Ab(n,6).id,e.Ab(n,6).active,e.Ab(n,6).addClass),l(n,8,0,e.Ab(n,9).id,e.Ab(n,9).active,e.Ab(n,9).addClass)})}function Cl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-justified",[],null,null,null,Tl,yl)),e.pb(1,49152,null,0,C,[],null,null)],null,null)}var Il=e.mb("demo-tabs-justified",C,Cl,{},{},[]),ql=e.ob({encapsulation:2,styles:[],data:{}});function Al(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,7,"tabset",[],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(1,180224,null,0,q.e,[q.f,e.F],null,null),(l()(),e.qb(2,0,null,0,2,"tab",[["heading","Config 1"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(3,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Config content 1"])),(l()(),e.qb(5,0,null,0,2,"tab",[["heading","Config 2"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(6,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,["Config content 2"]))],function(l,n){l(n,3,0,"Config 1"),l(n,6,0,"Config 2")},function(l,n){l(n,0,0,e.Ab(n,1).clazz),l(n,2,0,e.Ab(n,3).id,e.Ab(n,3).active,e.Ab(n,3).addClass),l(n,5,0,e.Ab(n,6).id,e.Ab(n,6).active,e.Ab(n,6).addClass)})}function xl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,2,"demo-tabs-config",[],null,null,null,Al,ql)),e.Fb(5120,null,q.f,A,[]),e.pb(2,49152,null,0,x,[],null,null)],null,null)}var Sl=e.mb("demo-tabs-config",x,xl,{},{},[]),kl=e.ob({encapsulation:2,styles:[],data:{}});function Dl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"span",[["class","badge badge-secondary"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Heading"]))],null,null)}function Fl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,2,"i",[],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Tab 3"]))],null,null)}function wl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,14,"tabset",[],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(2,180224,null,0,q.e,[q.f,e.F],null,null),(l()(),e.qb(3,0,null,0,2,"tab",[["heading","Static"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(4,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},null),(l()(),e.Ib(-1,null,[" Tab 1 "])),(l()(),e.qb(6,0,null,0,4,"tab",[],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(7,212992,null,0,q.b,[q.e,e.k,e.F],null,null),(l()(),e.gb(0,null,null,1,null,Dl)),e.pb(9,16384,null,0,q.c,[e.N,q.b],null,null),(l()(),e.Ib(-1,null,[" I've got an HTML heading. Pretty cool! "])),(l()(),e.qb(11,0,null,0,4,"tab",[],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],null,null,null,null)),e.pb(12,212992,null,0,q.b,[q.e,e.k,e.F],null,null),(l()(),e.gb(0,null,null,1,null,Fl)),e.pb(14,16384,null,0,q.c,[e.N,q.b],null,null),(l()(),e.Ib(-1,null,[" Tab with html tags in heading "]))],function(l,n){l(n,4,0,"Static"),l(n,7,0),l(n,12,0)},function(l,n){l(n,1,0,e.Ab(n,2).clazz),l(n,3,0,e.Ab(n,4).id,e.Ab(n,4).active,e.Ab(n,4).addClass),l(n,6,0,e.Ab(n,7).id,e.Ab(n,7).active,e.Ab(n,7).addClass),l(n,11,0,e.Ab(n,12).id,e.Ab(n,12).active,e.Ab(n,12).addClass)})}function zl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-custom-template",[],null,null,null,wl,kl)),e.pb(1,49152,null,0,k,[],null,null)],null,null)}var Kl=e.mb("demo-tabs-custom-template",k,zl,{},{},[]),Jl=e.ob({encapsulation:2,styles:[],data:{}});function Pl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"pre",[["class","card card-block card-header"]],null,null,null,null,null)),(l()(),e.Ib(1,null,["Event select is fired. The heading of the selected tab is: ",""]))],null,function(l,n){l(n,1,0,n.component.value)})}function Vl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,2,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),e.gb(16777216,null,null,1,null,Pl)),e.pb(2,16384,null,0,_.n,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.qb(3,0,null,null,13,"tabset",[],[[2,"tab-container",null]],null,null,$.b,$.a)),e.pb(4,180224,null,0,q.e,[q.f,e.F],null,null),(l()(),e.qb(5,0,null,0,5,"tab",[["class","mt-2"],["heading","First tab"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],[[null,"selectTab"]],function(l,n,t){var e=!0;return"selectTab"===n&&(e=!1!==l.component.onSelect(t)&&e),e},null,null)),e.pb(6,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},{selectTab:"selectTab"}),(l()(),e.qb(7,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Title"])),(l()(),e.qb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."])),(l()(),e.qb(11,0,null,0,5,"tab",[["class","mt-2"],["heading","Second tab"]],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],[[null,"selectTab"]],function(l,n,t){var e=!0;return"selectTab"===n&&(e=!1!==l.component.onSelect(t)&&e),e},null,null)),e.pb(12,212992,null,0,q.b,[q.e,e.k,e.F],{heading:[0,"heading"]},{selectTab:"selectTab"}),(l()(),e.qb(13,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Title 2"])),(l()(),e.qb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages"]))],function(l,n){l(n,2,0,n.component.value),l(n,6,0,"First tab"),l(n,12,0,"Second tab")},function(l,n){l(n,3,0,e.Ab(n,4).clazz),l(n,5,0,e.Ab(n,6).id,e.Ab(n,6).active,e.Ab(n,6).addClass),l(n,11,0,e.Ab(n,12).id,e.Ab(n,12).active,e.Ab(n,12).addClass)})}function Ll(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-tabs-select-event",[],null,null,null,Vl,Jl)),e.pb(1,49152,null,0,D,[],null,null)],null,null)}var Ml=e.mb("demo-tabs-select-event",D,Ll,{},{},[]),Bl=e.ob({encapsulation:2,styles:[],data:{}});function Nl(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,17,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["Note that tabs can be given "])),(l()(),e.qb(2,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,['role="tablist"'])),(l()(),e.Ib(-1,null,[", "])),(l()(),e.qb(5,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,['role="tab"'])),(l()(),e.Ib(-1,null,[" and "])),(l()(),e.qb(8,0,null,null,1,"code",[["class","highlighter-rouge"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,['role="tabpanel"'])),(l()(),e.Ib(-1,null,[" attributes. These are appropriate for tabbed interfaces, as described in the "])),(l()(),e.qb(11,0,null,null,5,"a",[["href","https://www.w3.org/TR/wai-aria-practices/#tabpanel"]],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,1,"abbr",[["title","Web Accessibility Initiative"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["WAI"])),(l()(),e.qb(14,0,null,null,1,"abbr",[["title","Accessible Rich Internet Applications"]],null,null,null,null,null)),(l()(),e.Ib(-1,null,["ARIA"])),(l()(),e.Ib(-1,null,[" Authoring Practices"])),(l()(),e.Ib(-1,null,["."])),(l()(),e.qb(18,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["If your control element is targeting a single collapsible element - you should add the "])),(l()(),e.qb(20,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["aria-controls"])),(l()(),e.Ib(-1,null,[" attribute to the control element, containing the "])),(l()(),e.qb(23,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["id"])),(l()(),e.Ib(-1,null,[" of the collapsible element."])),(l()(),e.qb(26,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["To confirm the tab content opening you should use "])),(l()(),e.qb(28,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["aria-selected"])),(l()(),e.Ib(-1,null,[" property. If "])),(l()(),e.qb(31,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,['aria-selected="true"'])),(l()(),e.Ib(-1,null,[" it indicates the tab control is activated and its associated panel is displayed."])),(l()(),e.qb(34,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["If you use a visible text element on the page as a label for a focusable element - you should add "])),(l()(),e.qb(36,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Ib(-1,null,["aria-labelledby"])),(l()(),e.Ib(-1,null,[". It refers to the tab element that controls the panel."]))],null,null)}function $l(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"demo-accessibility",[],null,null,null,Nl,Bl)),e.pb(1,49152,null,0,F,[],null,null)],null,null)}var jl=e.mb("demo-accessibility",F,$l,{},{},[]),Hl=t("gIcY"),Rl=t("vSOO"),Ul=t("ZYCi"),El=t("xkPD"),Ol=t("1H/a"),Yl=t("57AX"),Wl=t("k3/p");t.d(n,"DemoTabsModuleNgFactory",function(){return Ql});var Ql=e.nb(a,[],function(l){return e.xb([e.yb(512,e.j,e.bb,[[8,[u.a,i.a,b.a,o.a,c.a,s.a,r.a,N,U,W,Z,ul,sl,ml,vl,Il,Sl,Kl,Ml,jl]],[3,e.j],e.x]),e.yb(4608,_.p,_.o,[e.u,[2,_.F]]),e.yb(4608,Hl.y,Hl.y,[]),e.yb(4608,Rl.a,Rl.a,[_.i,Ul.n]),e.yb(4608,El.c,El.c,[El.a]),e.yb(4608,q.f,q.f,[]),e.yb(4608,Ol.a,Ol.a,[]),e.yb(1073742336,_.c,_.c,[]),e.yb(1073742336,Hl.x,Hl.x,[]),e.yb(1073742336,Hl.k,Hl.k,[]),e.yb(1073742336,q.d,q.d,[]),e.yb(1073742336,J.d,J.d,[]),e.yb(1073742336,Ul.r,Ul.r,[[2,Ul.w],[2,Ul.n]]),e.yb(1073742336,z.b,z.b,[]),e.yb(1073742336,K.b,K.b,[]),e.yb(1073742336,w.b,w.b,[]),e.yb(1073742336,El.b,El.b,[]),e.yb(1073742336,Yl.a,Yl.a,[]),e.yb(1073742336,Wl.a,Wl.a,[]),e.yb(1073742336,a,a,[]),e.yb(256,El.a,{},[]),e.yb(1024,Ul.l,function(){return[[{path:"",component:V}]]},[])])})},uWlo:function(l,n){l.exports="import { Component } from '@angular/core';\nimport { TabDirective } from 'ngx-bootstrap/tabs';\n\n@Component({\n  selector: 'demo-tabs-select-event',\n  templateUrl: './select-event.html'\n})\nexport class DemoTabsSelectEventComponent {\n  value: string;\n  onSelect(data: TabDirective): void {\n    this.value = data.heading;\n  }\n}\n"},xGKq:function(l,n){l.exports='<tabset>\n  <tab heading="Static title" customClass="customClass">Static content</tab>\n  <tab *ngFor="let tabz of tabs"\n       [heading]="tabz.title"\n       [customClass]="tabz.customClass">\n    {{tabz?.content}}\n  </tab>\n</tabset>\n'},z9kr:function(l,n){l.exports='<div>\n  <p>Tabs can be enabled or disabled by changing <code>disabled</code> input property</p>\n  <p>\n    <button type="button" class="btn btn-primary btn-sm" (click)="disableEnable()">\n      Enable / Disable third tab\n    </button>\n  </p>\n  <hr/>\n  <tabset #staticTabs>\n    <tab heading="Static title">Static content</tab>\n    <tab heading="Static Title 1">Static content 1</tab>\n    <tab heading="Static Title 2">Static content 2</tab>\n    <tab heading="Static Title 3">Static content 3</tab>\n  </tabset>\n</div>\n'}}]);