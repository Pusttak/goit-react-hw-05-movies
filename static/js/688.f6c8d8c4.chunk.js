"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[688],{635:function(e,t,i){i.d(t,{Bt:function(){return p},LI:function(){return v},d5:function(){return d},l7:function(){return _},wr:function(){return u}});var n=i(861),a=i(757),s=i.n(a),c="https://api.themoviedb.org/3",r="33bcb89e36b34d36b896a35a11214f25";function o(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(i=e.sent).ok){e.next=9;break}return e.next=6,i.json();case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0=Promise.reject(new Error(i.status));case 10:return e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return o("".concat(c,"/trending/movie/week?api_key=").concat(r,"&page=").concat(e))}function _(e){return o("".concat(c,"/movie/").concat(e,"?api_key=").concat(r))}function v(e,t){return o("".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(e,"&page=").concat(t))}function d(e){return o("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(r))}function p(e){return o("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(r))}},688:function(e,t,i){i.r(t),i.d(t,{default:function(){return M}});var n=i(885),a=i(791),s=i(501),c=i(871),r=i(355),o=i(71),l=i(635),u=i(118),_="MovieDetailsView_wrapItem__ZpS6H",v="MovieDetailsView_button__9+a3-",d="MovieDetailsView_image__+4PhW",p="MovieDetailsView_wrapText__eY3L1",m="MovieDetailsView_title__iKoIj",f="MovieDetailsView_wrapRating__IwCUL",h="MovieDetailsView_genre__VpEAx",w="MovieDetailsView_description__PcDA+",j="MovieDetailsView_rating__HeKWY",x="MovieDetailsView_icon__zKMtG",k="MovieDetailsView_subtitle__WmR8c",b="MovieDetailsView_wrapInformation__LUFkX",g="MovieDetailsView_link__8aj5k",N="MovieDetailsView_activeLink__5ZKwf MovieDetailsView_link__8aj5k",D=i(184),M=function(){var e,t,i=(0,a.useState)(null),M=(0,n.Z)(i,2),V=M[0],y=M[1],I=(0,c.UO)().movieId,L=(0,c.TH)(),A=(0,c.s0)();(0,a.useEffect)((function(){(0,l.l7)(I).then(y)}),[I]);return V&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)("button",{type:"button",onClick:function(){var e;A((null===L||void 0===L||null===(e=L.state)||void 0===e?void 0:e.from)||"/")},className:v,children:[(0,D.jsx)(o.vLQ,{className:x}),"Back"]}),(0,D.jsxs)("div",{className:_,children:[(0,D.jsx)("img",{className:d,src:V.poster_path?"https://image.tmdb.org/t/p/w500".concat(V.poster_path):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNW08SIItZE3jSbsda_zoxn1T3jQpelOe4tQ&usqp=CAU",alt:V.title}),(0,D.jsxs)("div",{className:p,children:[(0,D.jsx)("span",{className:m,children:V.title}),(0,D.jsxs)("div",{className:f,children:[(0,D.jsx)("span",{className:h,children:V.genres.map((function(e){return e.name})).join(", ")}),(0,D.jsxs)("span",{className:j,children:[(0,D.jsx)(r.QJe,{className:x}),V.vote_average]})]}),(0,D.jsx)("p",{className:w,children:V.overview})]})]}),(0,D.jsxs)("div",{children:[(0,D.jsx)("div",{className:k,children:"Additional information"}),(0,D.jsxs)("ul",{className:b,children:[(0,D.jsx)("li",{children:(0,D.jsx)(s.OL,{to:"cast",state:{from:null===L||void 0===L||null===(e=L.state)||void 0===e?void 0:e.from},className:function(e){var t=e.isActive;return"".concat(t?N:g)},children:(0,D.jsx)("span",{children:"Cast"})})}),(0,D.jsx)("li",{children:(0,D.jsx)(s.OL,{to:"reviews",state:{from:null===L||void 0===L||null===(t=L.state)||void 0===t?void 0:t.from},className:function(e){var t=e.isActive;return"".concat(t?N:g)},children:(0,D.jsx)("span",{children:"Reviews"})})})]}),(0,D.jsx)(a.Suspense,{fallback:(0,D.jsx)(u.Z,{}),children:(0,D.jsx)(c.j3,{context:I})})]})]})}}}]);
//# sourceMappingURL=688.f6c8d8c4.chunk.js.map