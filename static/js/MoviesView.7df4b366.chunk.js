"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[564],{714:function(e,t,n){n.d(t,{Z:function(){return c}});var r="Button_button__JBBzO",a=n(184),c=function(e){var t=e.name,n=e.onClick,c=e.children;return(0,a.jsx)("button",{className:r,type:"button",name:t,onClick:n,children:c})}},335:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(501),a=n(871),c="CardOfMovie_item__y-dZW",i="CardOfMovie_ratingWrap__2qhHX",o="CardOfMovie_rating__71dn8",s="CardOfMovie_textWrap__G3y47",u="CardOfMovie_title__w6JCQ",l="CardOfMovie_date__78QyJ",f="CardOfMovie_poster__dhiI3",p=n(184),d=function(e){var t=e.id,n=e.title,d=e.vote_average,_=e.poster_path,m=e.release_date,v=(0,a.TH)();return(0,p.jsx)("div",{className:c,children:(0,p.jsxs)(r.rU,{to:"/movies/".concat(t),state:{from:v},children:[(0,p.jsx)("div",{className:i,children:(0,p.jsx)("span",{className:o,children:d})}),(0,p.jsx)("img",{src:_?"https://image.tmdb.org/t/p/w500".concat(_):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW08SIItZE3jSbsda_zoxn1T3jQpelOe4tQ&usqp=CAU",alt:n,className:f}),(0,p.jsxs)("div",{className:s,children:[(0,p.jsx)("p",{className:u,children:n}),(0,p.jsxs)("p",{className:l,children:["(",m,")"]})]})]})})}},104:function(e,t,n){n.d(t,{Z:function(){return c}});var r="CardsOfMovies_list__leT9K",a=n(184),c=function(e){var t=e.children;return(0,a.jsx)("ul",{className:r,children:t})}},635:function(e,t,n){n.d(t,{Bt:function(){return _},LI:function(){return p},d5:function(){return d},l7:function(){return f},wr:function(){return l}});var r=n(861),a=n(757),c=n.n(a),i="https://api.themoviedb.org/3",o="33bcb89e36b34d36b896a35a11214f25";function s(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(n=e.sent).ok){e.next=9;break}return e.next=6,n.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error(n.status));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return s("".concat(i,"/trending/movie/week?api_key=").concat(o,"&page=").concat(e))}function f(e){return s("".concat(i,"/movie/").concat(e,"?api_key=").concat(o))}function p(e,t){return s("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=").concat(t))}function d(e){return s("".concat(i,"/movie/").concat(e,"/credits?api_key=").concat(o))}function _(e){return s("".concat(i,"/movie/").concat(e,"/reviews?api_key=").concat(o))}},632:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.r(t),n.d(t,{default:function(){return b}});var i=n(885),o=n(791),s=n(501),u=n(635),l=n(104),f=n(335),p=n(714),d="MoviesView_form__cbBrz",_="MoviesView_input__oa+eT",m="MoviesView_button__I5T7o",v="MoviesView_wrapButton__VP0YK",h=n(184),b=function(){var e=(0,o.useState)(null),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,s.lr)(),b=(0,i.Z)(a,2),j=b[0],g=b[1],x=j.get("query")||"",y=Number(j.get("page"))||1,O={query:x,page:y};(0,o.useEffect)((function(){x&&(0,u.LI)(x,y).then((function(e){var t=e.results;return r(t)}))}),[x,y]);var w=function(e){switch(e.target.name){case"increment":g(c(c({},O),{},{page:y+1}));break;case"decrement":g(c(c({},O),{},{page:y-1||1}))}};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("form",{className:d,onSubmit:function(e){e.preventDefault();var t=e.currentTarget;t.search.value&&(g(c(c({},O),{},{query:t.search.value})),t.reset())},children:[(0,h.jsx)("input",{className:_,name:"search",type:"text",autoComplete:"off"}),(0,h.jsx)("button",{className:m,type:"submit",children:"Search"})]}),n&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)(p.Z,{name:"decrement",onClick:w,children:"Previous Page"}),(0,h.jsx)(p.Z,{name:"increment",onClick:w,children:"Next Page"})]}),(0,h.jsx)(l.Z,{children:n.map((function(e){var t=e.id,n=e.title,r=e.vote_average,a=e.poster_path,c=e.release_date;return(0,h.jsx)("li",{children:(0,h.jsx)(f.Z,{id:t,title:n,vote_average:r,poster_path:a,release_date:c})},t)}))})]})]})}}}]);
//# sourceMappingURL=MoviesView.7df4b366.chunk.js.map