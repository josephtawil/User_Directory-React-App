(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,function(e,a,n){e.exports=n(11)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(2),c=n.n(l),o=(n(9),r.a.createContext({name:{value:"",onChange:function(){}},image:{value:"",onChange:function(){}},email:{value:"",onChange:function(){}}})),m=function(){var e=Object(t.useContext)(o);return r.a.createElement("div",null,r.a.createElement("h1",null,"Enter name"),r.a.createElement("form",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",Object.assign({className:"form-control",name:"name",placeholder:"Enter employee name"},e.name))))},i=(n(10),n(3)),u=function(){var e=Object(t.useState)(""),a=Object(i.a)(e,2),n=a[0],r=a[1];return{error:""===n?"Please enter a name value":"",name:{value:n,onChange:function(e){return r(e.target.value)}}}},s=function(){var e=Object(t.useContext)(o);console.log(e.name);["man1.jpg","MyImage.png"].map((function(e){return"../images/"+e}));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},["Joseph","John","Jack","Jacob","Josh"].filter((function(a){return a.includes(e.name.value)})).map((function(e,a){return r.a.createElement("div",{className:"card",style:{margin:"1em"}},r.a.createElement("img",{src:"../images/man1.jpeg",style:{height:"550px"},className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{style:{listStyleType:"none"},key:a},e),r.a.createElement("p",null,"Phone Number: 415-609-6690"),r.a.createElement("p",null,"Email: jtawil2015@gmail.com")))}))))};var g=function(){var e=u();return r.a.createElement("div",{className:"App"},r.a.createElement(o.Provider,{value:e},r.a.createElement(m,null),r.a.createElement(s,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.8705ca45.chunk.js.map