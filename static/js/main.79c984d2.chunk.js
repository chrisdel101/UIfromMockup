(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),c=a.n(i),o=(a(88),a(28)),s=a(29),l=a(35),u=a(30),m=a(34),d=a(33),p=(a(89),a(14));var v=function(e){var t=Object(n.useState)({0:null,1:null,2:null,3:null}),a=Object(d.a)(t,2),i=a[0],c=a[1];function o(e){var t=Object(p.cloneDeep)(i);t=Object(p.mapValues)(t,function(){return null}),c(t)}return r.a.createElement(r.a.Fragment,null,function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mid-navbar"},e.links.map(function(e,t){return r.a.createElement("div",{className:"midnav-link-container ".concat(i[t.toString()]?"midnav-active":""),key:t},r.a.createElement("nav",{key:t,className:"mid-navbar-link",onMouseOver:function(e){return function(e,t){var a=Object(p.cloneDeep)(i);(a=Object(p.mapValues)(a,function(){return null}))[t.toString()]="midnav-active",c(a)}(0,t)},onMouseLeave:o},r.a.createElement("a",{href:"/".concat(e)},r.a.createElement("span",{className:"mid-nav-number"},"0",t+1)," ",e)))})))}(e))},h=a(39);var k=function(e){return r.a.createElement("div",{className:"icon-container-".concat(e.i," icon-container")},r.a.createElement("i",{className:"fa fa-".concat(e.type," icon"),"aria-hidden":"true"}))},f=a(162),b=a(163),E=(a(91),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={navVisible:null,links:{About:"active",Service:null,Work:null,Blog:null,Contact:null}},a.handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){this.setState(function(e){return{navVisible:!e.navVisible}})}},{key:"renderLinkType",value:function(e,t){var a=this;return"link"===e.type?r.a.createElement(f.a.Link,{className:"".concat(this.addUnderline(e)?"topnav-active":""),key:t,href:"/".concat(e.text),onMouseOver:function(e){return a.moveUnderLine(e)}},e.text):"icon"===e.type?r.a.createElement(f.a.Link,{className:"".concat(this.addUnderline(e)?"active":""),key:t,href:"/".concat(e.text),onMouseOver:function(e){return a.moveUnderLine(e)}},r.a.createElement(k,{type:e.iconName})):void 0}},{key:"addUnderline",value:function(e){if(e&&e.text&&this.state.links&&this.state.links[e.text])return!0}},{key:"handleSize",value:function(e){return!(window.innerWidth<=e)}},{key:"componentDidMount",value:function(){this.setState({navVisible:this.handleSize(769)});var e=this;window.addEventListener("resize",function(t){e.setState({navVisible:e.handleSize(768)})})}},{key:"moveUnderLine",value:function(e){var t=Object(p.cloneDeep)(this.state.links);(t=Object(p.mapValues)(t,function(){return!1}))[e.target.innerHTML]="active",this.setState({links:t})}},{key:"renderNavMarkup",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{className:"top-navbar",expand:"md",variant:"dark",expanded:"true",onToggle:this.handleClick},r.a.createElement(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(b.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(f.a,{className:"mr-auto ".concat(this.state.navVisible?"":"nav-invisible")},this.props.links.map(function(t,a){return e.renderLinkType(t,a)})),r.a.createElement(f.a,null))))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.renderNavMarkup())}}]),t}(r.a.Component)),g=a(155);a(105);var y=function(e){return r.a.createElement(g.a,{variant:e.variant,className:e.className},e.text)};a(106);var w=function(e){return r.a.createElement("div",{className:"logo"},e.text)};a(107),a(108);var x=function(e){return r.a.createElement("div",{className:"block-text-header"},r.a.createElement("div",{className:"cursive-text"},e.cursive),r.a.createElement("div",{className:"block-text"},e.block))};a(109);var N=function(e){return r.a.createElement("div",{className:"dash"})};var O=function(e){var t=e.headerBlocks.header;return r.a.createElement("header",{className:"header"},r.a.createElement(w,{text:"MoGo"}),r.a.createElement(E,{numOfLinks:5,instance:"top-nav",links:e.topNavlinks}),r.a.createElement(x,{cursive:t.cursive,block:t.block}),r.a.createElement(N,null),r.a.createElement(y,{variant:"outline-secondary",text:"Learn More",className:"header-btn"}),r.a.createElement(v,{links:e.midNavLinks}))};a(110);var j=function(e){return r.a.createElement("div",{className:"info-text"},r.a.createElement("p",null,e.text))},L=a(156);var S=function(e){return r.a.createElement("div",{className:"image-container",id:e.id?e.id:""},function(e){return"fluid"===e.type?r.a.createElement(L.a,{style:e.style,src:e.src,alt:e.alt,fluid:!0}):r.a.createElement("img",{style:e.style,src:e.src,alt:e.alt})}(e))},C=a(68),B=a.n(C),M=(a(112),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={reached:!1},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({numberLine:this.props.numberLine,counterDuration:this.props.counterDuration})}},{key:"renderCountJSMarkUp",value:function(e,t){var a=this;return r.a.createElement("div",{className:"counter count-up",key:t},r.a.createElement(B.a,{className:"numberbar-number",end:e.end,duration:this.state.counterDuration,onEnd:function(){a.setState({reached:!0}),a.createCustomCounters()}})," ",r.a.createElement("br",null),r.a.createElement("span",{className:"numberbar-text"},e.text))}},{key:"createCustomCounters",value:function(){var e=this;function t(t){var a=Object(p.cloneDeep)(e.state.numberLine),n=e.state.numberLine[t].end;n++,a[t].end=n,e.setState({numberLine:a})}Object.keys(this.state.numberLine).map(function(e,a){return setInterval(t,1e3,e)})}},{key:"renderCustomMarkUp",value:function(e,t){return r.a.createElement("div",{className:"counter custome-counter",key:t},r.a.createElement("span",{className:"numberbar-number"},e.end),r.a.createElement("br",null),r.a.createElement("span",{className:"numberbar-text"},e.text))}},{key:"renderProperMarkup",value:function(e,t){return this.state.reached?this.state.reached?this.renderCustomMarkUp(e,t):void 0:this.renderCountJSMarkUp(e,t)}},{key:"renderCount",value:function(){var e=this;if(this.state&&this.state.numberLine)return Object.values(this.state.numberLine).map(function(t,a){return e.renderProperMarkup(t,a)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"number-bar"},this.renderCount())}}]),t}(n.Component));a(113);var D=function(e){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-firstblock"},r.a.createElement(x,{cursive:"What we do",block:"story about us"}),r.a.createElement(N,null),r.a.createElement(j,{text:"loremConsetetur ut ea no ut labore at sadipscing dolor amet sit, ipsum at rebum et stet justo. Amet sit sit. "}),r.a.createElement("div",{className:"hero-image-container"},e.imgSources.map(function(e,t){return r.a.createElement(S,{src:e,alt:"A puppy",key:t})}))),r.a.createElement(M,{numberLine:e.numberLine,counterDuration:e.counterDuration}))},H=a(157),V=a(164),I=a(160),U=a(161),W=a(159),F=a(78),T=a.n(F),A=(a(114),Object(H.a)(function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}}));var J=function(e){var t=A(),a=r.a.useState("panel1"),n=Object(d.a)(a,2),i=n[0],c=n[1];return r.a.createElement("div",{className:"".concat(t.root," accordion")},Object.values(e.drawers).map(function(e,a){return r.a.createElement(V.a,Object.assign({key:a},[{expanded:"panel1"===i},{expanded:"panel2"===i},{expanded:"panel3"===i}][a],{onChange:(n="panel".concat(a+1),function(e,t){c(!!t&&n)}),className:"expansion-panel"}),r.a.createElement(U.a,{className:"expansion-panel-inner",expandIcon:r.a.createElement(T.a,null),"aria-controls":"panel".concat(a+1,"bh-content"),id:"panel".concat(a+1,"bh-header")},r.a.createElement(k,{type:e.icon,i:a}),r.a.createElement(W.a,{className:"".concat(t.heading," panel-heading")}," ",e.heading),r.a.createElement(W.a,{className:t.secondaryHeading})),r.a.createElement(I.a,null,r.a.createElement(W.a,null,e.text)));var n}))},z=a(165);a(131);var q=function(e){return r.a.createElement("div",{className:"review"},r.a.createElement(S,{src:e.src}),r.a.createElement("div",{className:"review-text"},r.a.createElement(j,{text:'"'.concat(e.text,'"')}),r.a.createElement("div",{className:"review-name-conatiner"},r.a.createElement(N,null),r.a.createElement("span",{className:"review-name"}," ",e.name))))};a(132);var R=function(e){if(e.instance)return r.a.createElement(z.a,{interval:5e3,className:"work"},"reviews"===e.instance?function(e){return e.reviews.map(function(e,t){return r.a.createElement(z.a.Item,{key:t},r.a.createElement(q,{src:e.src,name:e.name,text:e.text,key:t}))})}(e):function(e){return e.works.map(function(e,t){return r.a.createElement(z.a.Item,{key:t},r.a.createElement(S,{src:e.src}))})}(e))};a(133);var P=function(e){var t=e.headerBlocks,a=t.mainFirstBlock,i=t.mainSecondBlock,c=t.mainFourthBlock,o=Object(n.useState)({height:"0"}),s=Object(d.a)(o,2),l=s[0],u=s[1];return Object(n.useEffect)(function(){var e=document.querySelector(".main-accordion-container").getBoundingClientRect().height;u({height:e})},[]),r.a.createElement("main",{className:"main"},r.a.createElement("section",{className:"main-firstblock"},r.a.createElement(x,{cursive:a.cursive,block:a.block}),r.a.createElement(N,null),r.a.createElement(S,{id:"stacked-image1",src:"http://place-puppy.com/",alt:"a puppy"})),r.a.createElement("section",{className:"main-secondblock"},r.a.createElement(x,{cursive:i.cursive,block:i.block}),r.a.createElement(N,null),r.a.createElement(j,{text:"Diam justo dolor elitr sadipscing sanctus duo erat, amet lorem ut sed sed sanctus labore. Vero amet ipsum sit dolor.."}),r.a.createElement("div",{className:"main-accordion-container"},r.a.createElement(S,{style:{height:l.height.toString()+"px"},src:"http://place-puppy.com/".concat(l.height.toString(),"x").concat(l.height.toString()),alt:"a puppy"}),r.a.createElement(J,{drawers:e.services}))),r.a.createElement("section",{className:"main-thirdblock"},r.a.createElement(R,{reviews:e.reviews,instance:"reviews"})),r.a.createElement("section",{className:"main-fourthblock"},r.a.createElement(x,{cursive:c.cursive,block:c.block}),r.a.createElement(N,null),r.a.createElement(j,{text:"Diam justo dolor elitr sadipscing sanctus duo erat, amet lorem ut sed sed sanctus labore. Vero amet ipsum sit dolor.."}),function(e){return r.a.createElement("div",{className:"work"},r.a.createElement("div",{className:"work-expanded"},e.works.map(function(e,t){return r.a.createElement(S,{src:e.src,alt:e.name,key:t})})),r.a.createElement("div",{className:"work-carousel"},r.a.createElement(R,{works:e.works,instance:"works"})))}(e)))},G=(a(134),a(23)),$=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={reviews:G.reviews,services:G.services,works:G.works,headerBlocks:G.headerBlocks,topNavlinks:G.topNavlinks,midNavLinks:G.midNavLinks,numberLineItems:G.numberLineItems,counterDuration:5},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement(O,{headerBlocks:this.state.headerBlocks,topNavlinks:this.state.topNavlinks,midNavLinks:this.state.midNavLinks}),r.a.createElement(D,{imgSources:["http://place-puppy.com/200x201","http://place-puppy.com/200x201","http://place-puppy.com/200x201"],headerBlocks:this.state.headerBlocks,numberLine:this.state.numberLineItems,counterDuration:this.state.counterDuration}),r.a.createElement(P,{headerBlocks:this.state.headerBlocks,services:this.state.services,reviews:this.state.reviews,works:this.state.works,numberLine:this.state.numberLine}))}}]),t}(r.a.Component);var K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},23:function(e){e.exports={reviews:[{icon:"icon",src:"http://place-puppy.com/101x101",name:"Joe",text:"Justo voluptua gubergren duo eos sadipscing amet et rebum dolores ut, ut ea sadipscing et tempor lorem lorem diam, dolore."},{icon:"icon",src:"http://place-puppy.com/101x102",name:"Sam",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nihil nisi. Molestias ab facilis esse voluptatibus vero excepturi optio laborum, rem, modi nihil expedita. Omnis necessitatibus dignissimos qui minus mollitia?"},{icon:"icon",src:"http://place-puppy.com/102x101",name:"Sara",text:"Justo voluptua gubergren duo eos sadipscing amet et rebum dolores ut, ut ea sadipscing et tempor lorem lorem diam, dolore."}],services:{1:{icon:"picture-o",heading:"photography",text:"Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide. Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide.fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide."},2:{icon:"sliders",heading:"creativity",text:"Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide."},3:{icon:"bullseye",heading:"web design",text:"Nor whom love fountain seemed ive chaste did. Heal dote into take their native begun. Of he can way loved cared him had to dear, from him parting flaunting noontide."}},works:[{name:"work 1",src:"http://place-puppy.com/250x250"},{name:"work 2",src:"http://place-puppy.com/250x250"},{name:"work 3",src:"http://place-puppy.com/250x250"},{name:"work 4",src:"http://place-puppy.com/250x500"},{name:"work 5",src:"http://place-puppy.com/250x250"},{name:"work 6",src:"http://place-puppy.com/250x250"},{name:"work 7",src:"http://place-puppy.com/250x250"}],headerBlocks:{header:{cursive:"Creative Template",block:"welcome to mogo"},hero:{cursive:"What we do",block:"story about us"},mainFirstBlock:{cursive:"For all devices",block:"unique design"},mainSecondBlock:{cursive:"Service",block:"What we do"},mainFourthBlock:{cursive:"What we do",block:"some of our work"}},topNavlinks:[{type:"link",text:"About"},{type:"link",text:"Service"},{type:"link",text:"Work"},{type:"link",text:"Blog"},{type:"link",text:"Contact"},{type:"icon",iconName:"shopping-cart"},{type:"icon",iconName:"search"}],midNavLinks:["Intro","Work","About","Contacts"],numberLineItems:{1:{end:42,text:"web desgin projects"},2:{end:123,text:"happy clients"},3:{end:15,text:"award winners"},4:{end:99,text:"cups of coffee"},5:{end:24,text:"members"}}}},83:function(e,t,a){e.exports=a(135)},88:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){}},[[83,1,2]]]);
//# sourceMappingURL=main.79c984d2.chunk.js.map