"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[645],{5645:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(885),a=n(2791),i=n(501),s=n(6871),c=n(5245),o=n(719),u="MovieDetails_backBtn__rLQ3F",l="MovieDetails_iconBtn__7SUMK",d="MovieDetails_backLink__dzd-p",p="MovieDetails_movieDescription__Gu3H0",f="MovieDetails_originalTitle__B5z98",v="MovieDetails_userScore__mU7Se",m="MovieDetails_detailsTitle__aL4kz",h="MovieDetails_detailsText__Wpt3d",_="MovieDetails_detailsLink__DSsAQ",x="MovieDetails_detailsItem__zRuv1",j="MovieDetails_detailsDescription__LA3m1",k="MovieDetails_detailsList__c-mmj",w=n(184),N=function(){var e,t,n=(0,a.useState)([]),N=(0,r.Z)(n,2),b=N[0],D=N[1],M=(0,s.TH)(),y=(0,s.UO)().movieId,g=b.original_title,U=b.genres,L=b.overview,S=b.poster_path,Z=b.release_date,z=b.vote_average;return(0,a.useEffect)((function(){(0,c.$)(y).then((function(e){return D(e)}))}),[y]),(0,w.jsxs)("div",{children:[(0,w.jsx)(i.rU,{className:d,to:null!==(e=null===M||void 0===M||null===(t=M.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,w.jsxs)("button",{className:u,type:"button",children:["  ",(0,w.jsx)("span",{className:l,children:(0,w.jsx)(o.YiX,{})}),"GO BACK"]})}),(0,w.jsxs)("div",{className:p,children:[(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(S),alt:g}),(0,w.jsxs)("h1",{className:f,children:[g," (",null===Z||void 0===Z?void 0:Z.slice(0,4),")"]}),(0,w.jsxs)("p",{className:v,children:["User Score: ",Math.round(10*z),"%"]}),(0,w.jsx)("h2",{className:m,children:"Overview"}),(0,w.jsx)("p",{className:h,children:L}),(0,w.jsx)("h2",{className:m,children:"Genres"}),(0,w.jsx)("p",{className:h,children:null===U||void 0===U?void 0:U.map((function(e){return e.name})).join("/")})]}),(0,w.jsxs)("div",{className:j,children:[(0,w.jsx)("h2",{className:m,children:"Additional information"}),(0,w.jsxs)("ul",{className:k,children:[(0,w.jsx)("li",{className:x,children:(0,w.jsx)(i.rU,{className:_,to:"cast",state:{from:M.state?M.state.from:"/"},children:"Cast"})}),(0,w.jsx)("li",{className:x,children:(0,w.jsx)(i.rU,{className:_,to:"reviews",state:{from:M.state?M.state.from:"/"},children:"Reviews"})})]}),(0,w.jsx)(s.j3,{})]})]})}},5245:function(e,t,n){n.d(t,{$:function(){return p},I$:function(){return v},kJ:function(){return l},nQ:function(){return f},tj:function(){return d}});var r=n(5861),a=n(7757),i=n.n(a),s=n(4569),c=n.n(s),o="b732e1e1afcd10d94706b0318ae2f23c",u="https://api.themoviedb.org/3",l=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c()("".concat(u,"/trending/movie/day?api_key=").concat(o)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c()("".concat(u,"/search/movie?api_key=").concat(o,"&page=1&query=").concat(t)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c()("".concat(u,"/movie/").concat(t,"?api_key=").concat(o)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c()("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(o)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c()("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(o)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=645.d17c8663.chunk.js.map