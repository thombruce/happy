(window.webpackJsonp=window.webpackJsonp||[]).push([[20,4,5,6,7,21],{4389:function(t,e,r){var content=r(4394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(51).default)("e9e3c2f2",content,!0,{sourceMap:!1})},4390:function(t,e,r){"use strict";r.r(e);var n={props:["toc"]},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"list-disc"},t._l(t.toc,(function(link){return r("li",{key:link.id,class:{toc2:2===link.depth,toc3:3===link.depth}},[r("NuxtLink",{attrs:{to:"#"+link.id}},[t._v(t._s(link.text))])],1)})),0)}),[],!1,null,null,null);e.default=component.exports},4391:function(t,e,r){"use strict";var n=r(3),l=r(4392),c=r(34),o=r(26),d=r(61),f=r(126);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=o(e.length),n=f(e,0);return n.length=l(n,e,e,r,0,void 0===t?1:d(t)),n}})},4392:function(t,e,r){"use strict";var n=r(92),l=r(26),c=r(70),o=function(t,e,source,r,d,f,h,_){for(var element,m=d,v=0,C=!!h&&c(h,_,3);v<r;){if(v in source){if(element=C?C(source[v],v,e):source[v],f>0&&n(element))m=o(t,e,element,l(element.length),m,f-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[m]=element}m++}v++}return m};t.exports=o},4393:function(t,e,r){"use strict";r(4389)},4394:function(t,e,r){var n=r(50)((function(i){return i[1]}));n.push([t.i,'dl.authors dd[data-v-e8b6eb42]:first-of-type:before{\n  content:"by "\n}\ndl.authors dd[data-v-e8b6eb42]:not(:last-child):after{\n  content:", "\n}\ndl.authors dd[data-v-e8b6eb42]:nth-last-child(2):after{\n  content:" and "\n}',""]),n.locals={},t.exports=n},4396:function(t,e,r){"use strict";r.r(e);r(12),r(4391);var n=r(93),l={props:["article"],computed:{categories:function(){return(this.article.categories||[this.article.category]).flat().filter(Boolean)},series:function(){return[this.article.series].flat().filter(Boolean)},tags:function(){return[this.article.tags].flat().filter(Boolean)},authors:function(){return(this.article.authors||[this.article.author]).flat().filter(Boolean)}},methods:{parameterize:function(t){return Object(n.kebabCase)(t)}}},c=(r(4393),r(8)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"py-4"},[t.categories.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Categories")]),t._l(t.categories,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/blog/categories/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/blog/categories/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),t.series.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Series")]),t._l(t.series,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/blog/series/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/blog/series/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),r("h1",[t._v(t._s(t.article.title))]),t.authors.length?r("address",[r("dl",{staticClass:"authors"},[r("dt",{staticClass:"sr-only"},[t._v("Authors")]),t._l(t.authors,(function(e){return r("dd",{staticClass:"inline"},[t.$router.match("/blog/authors/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/blog/authors/"+t.parameterize(e),rel:"author"}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2)]):t._e(),t.tags.length?r("dl",{staticClass:"inline-block mr-1"},[r("dt",{staticClass:"sr-only"},[t._v("Tags")]),t._l(t.tags,(function(e){return r("dd",{staticClass:"inline-block mr-2"},[t.$router.match("/blog/tags/"+t.parameterize(e)).matched.length?[r("NuxtLink",{attrs:{to:"/blog/tags/"+t.parameterize(e)}},[t._v(t._s(e))])]:[t._v(t._s(e))]],2)}))],2):t._e(),r("time",{staticClass:"block",attrs:{pubdate:"",datetime:t.article.createdAt}},[t._v(t._s(t.article.createdAt))]),t.article.image?r("NuxtImg",{attrs:{src:t.article.image,sizes:"xs:320px sm:640px md:768px"}}):t._e()],1)}),[],!1,null,"e8b6eb42",null);e.default=component.exports},4397:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",[r("h2",{staticClass:"mb-2"},[t._v("Table of Contents")]),r("TntUITableOfContents",{attrs:{toc:t.article.toc}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntUITableOfContents:r(4390).default})},4398:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtContent",{attrs:{document:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports},4399:function(t,e,r){"use strict";r.r(e);var n={props:["article"]},l=r(8),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("TntContentHeader",{attrs:{article:t.article}}),t.article.toc&&t.article.toc.length?[r("TntContentToC",{attrs:{article:t.article}}),r("hr",{staticClass:"my-3"})]:t._e(),r("TntContentBody",{attrs:{article:t.article}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntContentHeader:r(4396).default,TntContentToC:r(4397).default,TntContentBody:r(4398).default})},4437:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(33),{props:["section"],data:function(){return{slug:null,article:null}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.slug=t.$route.params.slug,e.next=3,t.$content(t.section,t.slug).fetch();case 3:t.article=e.sent;case 4:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.article.title}}}),c=r(8),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$fetchState.pending?t._e():r("div",[r("TntContent",{attrs:{article:t.article}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TntContent:r(4399).default})}}]);