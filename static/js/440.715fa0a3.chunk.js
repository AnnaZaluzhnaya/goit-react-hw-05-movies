"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[440],{2440:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(885),c=n(2791),a=n(6871),u=n(5245),i={reviewsList:"Reviews_reviewsList__hDAQA",reviewsName:"Reviews_reviewsName__Dzz-A",reviewsText:"Reviews_reviewsText__pIre-"},o=n(184),s=function(){var e=(0,c.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,u.I$)(f).then(s)}),[f]),n&&0===n.total_results?(0,o.jsx)("p",{children:"Sorry,there are no reviews for this movie, your review will be the first "}):(0,o.jsx)("ul",{className:i.reviewsList,children:n&&n.results.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,o.jsxs)("li",{className:i.reviewsItem,children:[(0,o.jsx)("h4",{className:i.reviewsName,children:n}),(0,o.jsx)("p",{className:i.reviewsText,children:r})]},t)}))})}},5245:function(e,t,n){n.d(t,{$:function(){return v},I$:function(){return w},kJ:function(){return f},nQ:function(){return h},tj:function(){return p}});var r=n(5861),c=n(7757),a=n.n(c),u=n(4569),i=n.n(u),o="b732e1e1afcd10d94706b0318ae2f23c",s="https://api.themoviedb.org/3",f=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i()("".concat(s,"/trending/movie/day?api_key=").concat(o)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i()("".concat(s,"/search/movie?api_key=").concat(o,"&page=1&query=").concat(t)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i()("".concat(s,"/movie/").concat(t,"?api_key=").concat(o)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i()("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i()("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o)).then((function(e){return e.data})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=440.715fa0a3.chunk.js.map