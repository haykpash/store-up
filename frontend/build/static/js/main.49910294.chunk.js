(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{55:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(0),r=a(18),n=a.n(r),j=(a(55),a(14)),i=a(6),l=a(86),d=a(30),o=a(91),b=a(92),x=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)(o.a,{collapseOnSelect:!0,bg:"primary",expand:"lg",variant:"dark",children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(d.LinkContainer,{to:"/",children:Object(c.jsx)(o.a.Brand,{children:"Store Up"})}),Object(c.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(o.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(b.a,{className:"ml-auto",children:[Object(c.jsx)(d.LinkContainer,{to:"/cart",children:Object(c.jsxs)(b.a.Link,{children:[Object(c.jsx)("i",{className:"fas fa-shopping-cart px-1"}),"Cart"]})}),Object(c.jsx)(d.LinkContainer,{to:"/signin",children:Object(c.jsxs)(b.a.Link,{children:[Object(c.jsx)("i",{className:"fas fa-user px-1"}),"SignIn"]})})]})})]})})})},O=a(87),h=a(88),f=function(){return Object(c.jsx)("footer",{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(O.a,{children:Object(c.jsx)(h.a,{className:"text-center py-4",children:"Copyright \xa9 2020 Store Up"})})})})},u=a(19),p=a.n(u),m=a(25),v=a(27),g=a(93),N=function(e){var t=e.value,a=e.text,s=e.color;return Object(c.jsxs)("div",{className:"ratingStars",children:[Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:s},className:t>=1?"fas fa-star":t>=.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:s},className:t>=2?"fas fa-star":t>=1.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:s},className:t>=3?"fas fa-star":t>=2.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:s},className:t>=4?"fas fa-star":t>=3.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{children:Object(c.jsx)("i",{style:{color:s},className:t>=5?"fas fa-star":t>=4.5?"fas fa-star-half-alt":"far fa-star"})}),Object(c.jsx)("span",{className:"review",children:a&&a})]})};N.defaultProps={color:"#FDCC0D"};var k=N,y=function(e){var t=e.product;return Object(c.jsxs)(g.a,{className:"my-4 p-1",children:[Object(c.jsx)(j.NavLink,{to:"/product/".concat(t.id),children:Object(c.jsx)(g.a.Img,{src:t.image,variant:"top"})}),Object(c.jsxs)(g.a.Body,{children:[Object(c.jsx)(j.NavLink,{className:"links",to:"/product/".concat(t.id),children:Object(c.jsx)(g.a.Title,{as:"h5",children:Object(c.jsx)("strong",{children:t.name})})}),Object(c.jsx)(g.a.Text,{as:"div",children:Object(c.jsx)(k,{value:t.ratingStars,text:"".concat(t.reviewCount," review")})}),Object(c.jsxs)(g.a.Text,{as:"h4",children:["$ ",t.price]})]})]})},w=a(26),S=a.n(w),C=function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/api/products");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(O.a,{children:a.map((function(e){return Object(c.jsx)(h.a,{sm:12,md:6,lg:4,xl:3,children:Object(c.jsx)(y,{product:e})},e.id)}))})})},I=a(89),L=a(90),B=a(94),T=function(e){var t=e.match,a=Object(s.useState)({}),r=Object(v.a)(a,2),n=r[0],i=r[1];return Object(s.useEffect)((function(){(function(){var e=Object(m.a)(p.a.mark((function e(){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("/api/products/".concat(t.params.id));case 2:a=e.sent,c=a.data,i(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(j.NavLink,{to:"/",children:Object(c.jsxs)(I.a,{className:"mb-4",variant:"outline-dark",children:[Object(c.jsx)("i",{className:"fas fa-arrow-left px-1"})," Go Back"]})}),Object(c.jsxs)(O.a,{children:[Object(c.jsx)(h.a,{md:7,lg:5,children:Object(c.jsx)(L.a,{src:n.image,alt:n.name,fluid:!0})}),Object(c.jsx)(h.a,{md:5,lg:4,children:Object(c.jsxs)(B.a,{variant:"flush",children:[Object(c.jsx)(B.a.Item,{children:Object(c.jsx)("h2",{children:n.name})}),Object(c.jsx)(B.a.Item,{children:Object(c.jsx)(k,{value:n.ratingStars,text:"".concat(n.reviewCount," review")})}),Object(c.jsxs)(B.a.Item,{children:[Object(c.jsx)("span",{className:"mr-3",children:"Price:"}),"$ ",n.price]}),Object(c.jsxs)(B.a.Item,{children:["Description: ",n.description]})]})}),Object(c.jsx)(h.a,{sm:12,lg:3,className:"mt-5",children:Object(c.jsx)(g.a,{children:Object(c.jsxs)(B.a,{variant:"flush",children:[Object(c.jsx)(B.a.Item,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(h.a,{children:"Price:"}),Object(c.jsxs)(h.a,{children:["$",n.price]})]})}),Object(c.jsx)(B.a.Item,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(h.a,{children:"Status:"}),Object(c.jsx)(h.a,{children:n.inStock>0?"in stock":"out of stock"})]})}),Object(c.jsx)(B.a.Item,{children:Object(c.jsx)(I.a,{className:"btn-block",variant:"warning",type:"butten",disabled:0===n.inStock,children:"Add to list"})})]})})})]})]})},D=function(){return Object(c.jsxs)(j.BrowserRouter,{children:[Object(c.jsx)(x,{}),Object(c.jsx)("main",{className:"py-4",children:Object(c.jsxs)(l.a,{children:[Object(c.jsx)(i.d,{path:"/",component:C,exact:!0}),Object(c.jsx)(i.d,{path:"/product/:id",component:T})]})}),Object(c.jsx)(f,{})]})};a(83);n.a.render(Object(c.jsx)(D,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.49910294.chunk.js.map