!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.holyEditorPluginCards=n():e.holyEditorPluginCards=n()}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/static/",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"setSelection",function(){return a});var r=t(1),o=t.n(r),i=function(){var e=window.getSelection();if(e.rangeCount>0){return e.getRangeAt(0)}return null},a=function(e){var n=window.getSelection();return n.removeAllRanges(),n.addRange(e),n},c={tooltip:"卡片"},l=function(e){return function(n){function t(e){d.close(),document.execCommand("insertHTML",!1,'<iframe src="'+e+'" width="100%"/>')}var r=(n.el,n.widget),o=n.__S_,l=n.$selector,u=n.util,s=Object.assign({},c,e),d=new r.Modal(l,{panel:dekuElement.create("div",{class:o["cards-panel"]},dekuElement.create("div",{class:o["cards-panel__search"]},dekuElement.create("select",null,dekuElement.create("option",null,"文章"),dekuElement.create("option",null,"用户")),dekuElement.create("input",null)),dekuElement.create("ul",{class:o["cards-panel__list"]},dekuElement.create("li",null,dekuElement.create("a",{href:"javascript:;",class:o["cards-panel__insert"],onClick:function(){return t("https://www.jiqizhixin.com/categories/shen-du")}},"报名 | 百度AI开发者实战营重回广东，AI旋风即将席卷「羊城」")),dekuElement.create("li",null,dekuElement.create("a",{href:"javascript:;",class:o["cards-panel__insert"],onClick:function(){return t("https://www.jiqizhixin.com/categories/shen-du")}},"文章标题...")),dekuElement.create("li",null,dekuElement.create("a",{href:"javascript:;",class:o["cards-panel__insert"],onClick:function(){return t("https://www.jiqizhixin.com/categories/shen-du")}},"报名 | 百度AI开发者实战营重回广东，AI旋风即将席卷「羊城」")),dekuElement.create("li",null,dekuElement.create("a",{href:"javascript:;",class:o["cards-panel__insert"],onClick:function(){return t("https://www.jiqizhixin.com/categories/shen-du")}},"文章标题..."))))}),p=new r.Menu(l,{icon:"cards",tooltip:s.tooltip,onMouseDown:function(){d.open()}}),f={cacheRange:null};d.on("open:before",function(){var e=i();null!==e&&(f.cacheRange=e)}),d.on("close:before",function(){a(f.cacheRange)}),u.addSelectionChangeEvent(function(e){e?u.toEnable(function(){return p.enable()}):u.toDisable(function(){return p.disable()})})}},u={name:"cards",run:l,style:o.a};n.default=u},function(e,n,t){var r=t(2);e.exports="string"==typeof r?r:r.toString()},function(e,n,t){n=e.exports=t(3)(void 0),n.push([e.i,'.tool--cards{display:inline-block;vertical-align:top}.tool--cards .icon-cards{position:relative}.tool--cards .icon-cards:after{content:"";position:absolute;top:0;left:0;display:inline-block;width:30px;height:30px;background-image:url('+t(4)+");background-size:65%;background-position:50%;background-repeat:no-repeat}.cards-panel{display:inline-block;width:100%;padding:20px}.cards-panel__search{padding-bottom:10px;border-bottom:1px solid #eee;margin-bottom:20px}.cards-panel select{padding:2px 6px;margin-right:10px}.cards-panel input{padding:3px 10px}.cards-panel ul{line-height:1.5}.cards-panel a:hover{color:red}",""])},function(e,n){function t(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var i=r(o);return[t].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[t].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var r=t(n,e);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){e.exports=t.p+"79f59c64b29f761666f4439751259d2e.svg"}]).default});
//# sourceMappingURL=holy-editor-plugin-cards.js.map