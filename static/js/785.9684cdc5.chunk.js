"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[785],{635:function(t,n,e){e.d(n,{Bt:function(){return m},LI:function(){return p},d5:function(){return l},l7:function(){return _},wr:function(){return f}});var c=e(861),a=e(757),r=e.n(a),s="https://api.themoviedb.org/3",i="33bcb89e36b34d36b896a35a11214f25";function o(t){return u.apply(this,arguments)}function u(){return(u=(0,c.Z)(r().mark((function t(n){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:if(!(e=t.sent).ok){t.next=9;break}return t.next=6,e.json();case 6:t.t0=t.sent,t.next=10;break;case 9:t.t0=Promise.reject(new Error(e.status));case 10:return t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return o("".concat(s,"/trending/movie/week?api_key=").concat(i,"&page=").concat(t))}function _(t){return o("".concat(s,"/movie/").concat(t,"?api_key=").concat(i))}function p(t,n){return o("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&page=").concat(n))}function l(t){return o("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(i))}function m(t){return o("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(i))}},785:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var c=e(885),a=e(791),r=e(871),s=e(635),i="Cast_wrapList__Bf0aW",o="Cast_list__eALS7",u="Cast_listItem__X2bKc",f="Cast_img__9+Dsf",_="Cast_name__r4LsE",p="Cast_character__Sig32",l=e(184),m=function(){var t=(0,a.useState)(null),n=(0,c.Z)(t,2),e=n[0],m=n[1],h=(0,r.bx)();return(0,a.useEffect)((function(){(0,s.d5)(h).then((function(t){var n=t.cast;return m(n)}))}),[h]),e&&(0,l.jsx)("div",{className:i,children:(0,l.jsx)("ul",{className:o,children:e.map((function(t){var n=t.cast_id,e=t.character,c=t.name,a=t.profile_path;return a&&(0,l.jsxs)("li",{className:u,children:[(0,l.jsx)("img",{className:f,src:"https://image.tmdb.org/t/p/w200".concat(a),alt:c}),(0,l.jsxs)("span",{className:_,children:[c," - "]}),(0,l.jsxs)("span",{className:p,children:["(",e,")"]})]},n)}))})})}}}]);
//# sourceMappingURL=785.9684cdc5.chunk.js.map