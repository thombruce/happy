(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{4408:function(t,e,r){"use strict";r.r(e);var n=r(4),c=r(2),o=(r(33),r(94),{data:function(){return{term:null,articles:null}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$route.params.taxonomy,e.next=3,t.$taxonomies(r,"blog").find(t.$route.params.term);case 3:return t.term=e.sent,e.next=6,t.$content("blog").where({$or:[Object(n.a)({},r,{$contains:t.term.title}),Object(n.a)({},r,{$eq:t.term.title})]}).sortBy("createdAt","desc").fetch();case 6:t.articles=e.sent;case 7:case"end":return e.stop()}}),e)})))()}}),l=r(8),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$fetchState.pending?t._e():r("article",[r("header",[r("h1",[t._v(t._s(t.term.title))])]),r("div",t._l(t.articles,(function(article){return r("article",[r("header",[r("h2",[r("NuxtLink",{attrs:{to:article}},[t._v(t._s(article.title))])],1),r("time",{attrs:{datetime:article.createdAt}},[t._v(t._s(article.createdAt))])]),r("div",[r("p",[t._v(t._s(article.description))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);