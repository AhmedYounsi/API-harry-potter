(this["webpackJsonphp-api"]=this["webpackJsonphp-api"]||[]).push([[0],{133:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(37),n=c.n(r),i=(c(50),c(12)),l=c(3),o=c(20),j=c.n(o),h=c(38),u=c(5),b=c(15),d=c.n(b),p=c(0);var m=function(e){var t=e.Error;return Object(p.jsx)("div",{children:t&&Object(p.jsxs)("div",{className:"error",children:[Object(p.jsx)("img",{src:"images/error.png",alt:"harry potter api error request"}),Object(p.jsxs)("p",{children:[" ",t," "]})]})})},x=(c(70),c(45));var O=function(e){var t=Object(s.useState)("Characters"),c=Object(u.a)(t,2),a=c[0],r=c[1],n=function(t){r(t),e.send_API_Home(t)};return Object(p.jsx)("div",{className:"HeaderApi",children:Object(p.jsxs)(x.a,{breakPoints:[{width:1,itemsToShow:1,itemsToScroll:1},{width:300,itemsToShow:2,itemsToScroll:1,pagination:!1},{width:600,itemsToShow:3,itemsToScroll:1},{width:750,itemsToShow:4,itemsToScroll:1},{width:1450,itemsToShow:5,itemsToScroll:1},{width:1750,itemsToShow:6,itemsToScroll:1}],children:[Object(p.jsxs)("div",{onClick:function(){return n("Characters")},className:"circle house ".concat("Characters"===a?"active_api":""),children:[Object(p.jsx)("img",{className:"api-img",src:"images/character_api.png",alt:"harry potter api characters"}),Object(p.jsx)("p",{children:"Characters"})]}),Object(p.jsxs)("div",{onClick:function(){return n("Houses")},className:"circle house ".concat("Houses"===a?"active_api":""),children:[Object(p.jsx)("img",{className:"api-img",src:"images/house_api.png",alt:"harry potter api characters"}),Object(p.jsx)("p",{children:"Houses"})]}),Object(p.jsxs)("div",{onClick:function(){return n("Spells")},className:"circle house ".concat("Spells"===a?"active_api":""),children:[Object(p.jsx)("img",{className:"api-img",src:"images/spell_api.png",alt:"harry potter api characters"}),Object(p.jsx)("p",{children:"Spells"})]}),Object(p.jsxs)("div",{onClick:function(){return n("Potions")},className:"circle house ".concat("Potions"===a?"active_api":""),children:[Object(p.jsx)("img",{className:"api-img",src:"images/potion_api.png",alt:"harry potter api characters"}),Object(p.jsx)("p",{children:"Potions"})]}),Object(p.jsxs)("div",{onClick:function(){return n("Horcruxes")},className:"circle house ".concat("Horcruxes"===a?"active_api":""),children:[Object(p.jsx)("img",{className:"api-img",src:"images/horcruxe.png",alt:"harry potter api characters"}),Object(p.jsx)("p",{children:"Horcruxes"})]}),Object(p.jsxs)("div",{onClick:function(){return n("Deathly")},className:"circle house ".concat("Deathly"===a?"active_api":""),children:[Object(p.jsx)("img",{className:"api-img",src:"images/deathly hallows.png",alt:"harry potter api characters"}),Object(p.jsx)("p",{className:"deathly",children:"Deathly hallows"})]})]})})};c(74);var g=function(e){return Object(p.jsxs)("div",{className:"Input-box-home",children:[Object(p.jsxs)("div",{className:"route",children:[Object(p.jsx)("p",{style:{fontFamily:"BluuNext"},children:"harrypotter-api.site"}),Object(p.jsx)("input",{value:e.InputVal,className:"Input-home",onChange:function(t){return e.send_input_val(t.target.value)},placeholder:"/Exemple1/Exemple2"})]}),Object(p.jsx)("div",{onClick:function(){return e.submit()},className:"button",children:"Send"})]})},f=c(44),v=c.n(f);c(133);var N=function(e){var t=e.Data;return Object(p.jsx)("div",{className:"Result",children:Object(p.jsx)(v.a,{labelRenderer:function(e){var t=Object(u.a)(e,1)[0];return Object(p.jsxs)("p",{style:{margin:0,fontSize:15},children:[t," : "]})},valueRenderer:function(e){return Object(p.jsx)("em",{style:{margin:0,fontSize:15},children:e})},data:t})})};var y=function(e){var t=function(){return"Characters"===e.Active?Object(p.jsx)("div",{className:"hints_and_links",children:Object(p.jsxs)("p",{style:{marginTop:20},className:"hint",children:["How To Use ? Try",Object(p.jsx)("span",{style:{marginRight:6},onClick:function(){return e.Get_Hint("characters")},children:"characters"}),"OR",Object(p.jsx)("span",{onClick:function(){return e.Get_Hint("characters/harry potter")},children:"characters/harry potter"})]})}):"Houses"===e.Active?Object(p.jsx)("div",{className:"hints_and_links",children:Object(p.jsxs)("p",{style:{marginTop:20},className:"hint",children:["How To Use ? Try",Object(p.jsx)("span",{style:{marginRight:6},onClick:function(){return e.Get_Hint("Houses")},children:"Houses"}),"OR",Object(p.jsx)("span",{onClick:function(){return e.Get_Hint("Houses/Gryffindor")},children:"Houses/Gryffindor"})]})}):"Spells"===e.Active?Object(p.jsx)("div",{className:"hints_and_links",children:Object(p.jsxs)("p",{style:{marginTop:20},className:"hint",children:["How To Use ? Try",Object(p.jsx)("span",{style:{marginRight:6},onClick:function(){return e.Get_Hint("Spells")},children:"Spells"}),"OR",Object(p.jsx)("span",{onClick:function(){return e.Get_Hint("Spells/Accio")},children:"Spells/Accio"})]})}):null};return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(t,{})})};c(134);var w=function(e){Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]);var t=Object(s.useState)(""),c=Object(u.a)(t,2),a=c[0],r=c[1],n=Object(s.useState)([]),i=Object(u.a)(n,2),l=i[0],o=i[1],b=Object(s.useState)(null),x=Object(u.a)(b,2),f=x[0],v=x[1],w=Object(s.useState)(null),S=Object(u.a)(w,2),T=S[0],H=S[1],_=Object(s.useState)("Characters"),k=Object(u.a)(_,2),C=k[0],A=k[1],I=Object(s.useState)("http://harrypotter-api.site/api"),P=Object(u.a)(I,2),R=P[0],E=(P[1],Object(s.useState)(!1)),G=Object(u.a)(E,2),U=G[0],L=G[1];Object(s.useEffect)((function(){r(""),v(null),o([]),H(null)}),[C]);var D=function(){var e=Object(h.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L(!0),o([]),d.a.get("".concat(R,"/").concat(t)).then((function(e){L(!1),H(null),o(e.data),r(t),v("".concat(R,"/").concat(t))})).catch((function(e){L(!1),H("Resource not found"),o([])}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"Home",children:[Object(p.jsxs)("div",{className:"header-home",children:[Object(p.jsx)("h1",{className:"Home-title",children:"Harry Potter API"}),Object(p.jsx)("h2",{className:"title2",children:"The RESTful Harry Potter API"}),Object(p.jsx)("div",{className:"transparent"})]}),Object(p.jsxs)("div",{className:"try-it",children:[Object(p.jsx)("img",{className:"thunder",src:"images/thunder.png",alt:"get api harry potter wand"}),Object(p.jsx)("img",{className:"star",src:"images/star.gif",alt:"harry potter api wallpaper"}),Object(p.jsxs)("h3",{style:{fontSize:40},className:"title2",children:["TRY THE M",Object(p.jsx)("img",{src:"images/A.png",alt:"harry potter api magic"}),"GIC !"]}),Object(p.jsx)(O,{send_API_Home:function(e){return A(e)}}),Object(p.jsx)(g,{InputVal:a,submit:function(){0!==a.length&&(L(!0),o([]),d.a.get("".concat(R,"/").concat(a)).then((function(e){L(!1),console.log(e.data),H(null),o(e.data),v("".concat(R,"/").concat(a))})).catch((function(e){H("Resource not found"),L(!1),o([])})))},send_input_val:function(e){return r(e)}}),Object(p.jsx)(y,{Active:C,Get_Hint:function(e){return D(e)}}),l.length>0&&Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("p",{className:"hint",children:"Direct link"}),Object(p.jsx)("span",{className:"direct_link",onClick:function(){return window.open(f,"_blank")},children:f})]}),Object(p.jsx)(m,{Error:T}),Object(p.jsx)("div",{style:{marginTop:30,width:"100%"},children:l.length>0?Object(p.jsx)(N,{Data:l}):Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"resource",children:[Object(p.jsxs)("p",{className:U?"loading":"resource-display",children:[Object(p.jsx)("img",{className:"resource-icon",src:"/images/resource.png",alt:"harry potter api resource"}),"Resources"]}),Object(p.jsxs)("p",{className:U?"resource-display":"loading",children:[Object(p.jsx)("img",{className:"loading-icon",src:"/images/loading.png",alt:"harry potter api loading"}),"Loading"]})]})})})]})]})};c(135);var S=function(){return Object(p.jsxs)("nav",{className:"Header",children:[Object(p.jsxs)(i.b,{className:"Tab active Logo",to:"/",children:[Object(p.jsx)("img",{className:"icon_logo",src:"images/logo_icon.png",alt:"Haary potter api icon"}),Object(p.jsx)("p",{children:"HP API"})]}),Object(p.jsx)(i.b,{exact:!0,activeClassName:"active",className:"Tab",to:"/",children:"Home"}),Object(p.jsx)(i.b,{activeClassName:"active",className:"Tab",to:"/About",children:"About"})]})};var T=function(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1],r=null;return Object(s.useEffect)((function(){r=setTimeout((function(){a(!1)}),2e3)}),[c]),Object(p.jsxs)("div",{className:"code",children:[Object(p.jsx)("button",{onClick:function(){return clearTimeout(r),a(!0),void navigator.clipboard.writeText("  //Import axios\n  const axios = require('axios');\n  \n  //Make a request for a Spell with a given name\n  axios.get('URL/Spells/Accio')\n  .then((response) => {\n  //you get all data of the spell Accio\n  console.log(response)\n  })\n  .catch(function (error) {\n  //catch if error\n  console.log(error);\n  })")},className:"copy",children:c?Object(p.jsx)("p",{style:{color:"grey"},children:"Copied"}):Object(p.jsx)("img",{src:"images/copy.png",alt:""})}),Object(p.jsxs)("p",{className:"comment",children:["//","Import axios"]}),Object(p.jsx)("strong",{style:{color:"#ff6666"},children:"const"})," axios ="," ",Object(p.jsx)("strong",{className:"get",children:"require"}),"('axios');",Object(p.jsx)("br",{}),Object(p.jsx)("strong",{style:{color:"#ff6666"},children:"const"})," URL ="," ",Object(p.jsx)("strong",{className:"get",children:'"harrypotter-api.site"'}),Object(p.jsxs)("p",{className:"comment",style:{marginTop:20},children:["//","Make a request for a Spell with a given name"]}),"axios.",Object(p.jsx)("strong",{className:"get",children:"get"}),"(",Object(p.jsx)("span",{className:"url",children:"'URL/api/Spells/Accio'"}),") ",Object(p.jsx)("br",{}),".then((response) => ","{"," ",Object(p.jsx)("br",{}),Object(p.jsxs)("p",{className:"comment",children:["//","you get all data of the spell Accio"]}),"console.",Object(p.jsx)("strong",{className:"get",children:"log"}),"(response)",Object(p.jsx)("br",{}),"}",")",Object(p.jsx)("br",{}),".catch(function (error)  ","{"," ",Object(p.jsx)("br",{}),Object(p.jsxs)("p",{className:"comment",children:["//","catch if error"]}),"console.log(error);",Object(p.jsx)("br",{}),"}",")"]})};c(137);var H=function(){return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(p.jsxs)("div",{className:"about",children:[Object(p.jsxs)("div",{className:"how",children:[Object(p.jsx)("img",{src:"images/how.png",alt:"harry potter api how to use"}),Object(p.jsx)("p",{children:"How To Use"})]}),Object(p.jsx)("img",{className:"star_gif",alt:"star",src:"images/star.gif"}),Object(p.jsxs)("div",{className:"api",children:[Object(p.jsx)("h3",{className:"about-title",children:"What is an API ?"}),Object(p.jsx)("p",{className:"about-text",children:"An API (Application Programming Interface) is a contract that allow developers to interact with an application through a set of interfaces. In this case, the application is a database of thousands of Harry Potter related objects, and the interfaces are URL links."})]}),Object(p.jsxs)("div",{className:"exemple api",style:{marginTop:10},children:[Object(p.jsx)("h3",{className:"about-title",children:"What is this ?"}),Object(p.jsxs)("p",{className:"about-text",children:["This web app provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to",Object(p.jsx)("span",{className:"harry_span",children:"Harry potter"})]}),Object(p.jsxs)("p",{className:"about-text",style:{marginTop:10},children:["using ",Object(p.jsx)("button",{className:"get_span",children:"GET"})," command you are able to fetch :"]}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"/Characters"}),Object(p.jsx)("li",{children:"/Houses"}),Object(p.jsx)("li",{children:"/Spells"}),Object(p.jsx)("li",{children:"/Potions"}),Object(p.jsx)("li",{children:"/Horcruxes"})]}),Object(p.jsxs)("div",{className:"exemple",children:[Object(p.jsx)("h3",{className:"about-title",children:"Exemple :"}),Object(p.jsxs)("p",{className:"about-text",style:{marginBottom:20},children:["consume this API with ",Object(p.jsx)("a",{style:{marginLeft:5},target:"true",href:"https://github.com/axios/axios",children:"axios"})]}),Object(p.jsx)(T,{})]})]})]})};var _=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(i.a,{children:[Object(p.jsx)(S,{}),Object(p.jsx)("div",{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/",children:Object(p.jsx)(w,{})}),Object(p.jsx)(l.a,{path:"/About",children:Object(p.jsx)(H,{})})]})})]})})};n.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))},50:function(e,t,c){},70:function(e,t,c){},74:function(e,t,c){}},[[138,1,2]]]);
//# sourceMappingURL=main.225f9b19.chunk.js.map