(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["search"],{"2d3b":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container my-3"},[e.posts?n("div",{staticClass:"row"},e._l(e.posts,(function(e){return n("div",{key:e.id,staticClass:"col-12"},[n("Post",{attrs:{post:e}})],1)})),0):n("div",[e.loading?e._e():n("h3",[e._v("Your search doesnt match any records !")])]),e.loading?n("h2",[e._v("Loading ....")]):e._e()])},s=[],a=(n("96cf"),n("1da1")),o=n("e4fd"),c=n("62d3"),u={components:{Post:c["a"]},setup:function(e,t){var n=t.root,r=n.$store,s=n.$route;console.log(s.params.query);var c=Object(o["ref"])(null),u=Object(o["ref"])(!1);return Object(o["onMounted"])(Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return u.value=!0,e.next=3,r.dispatch("postsModule/getFromSearch",s.params.query);case 3:c.value=e.sent,u.value=!1;case 5:case"end":return e.stop()}}),e)})))),{posts:c,loading:u}}},i=u,l=n("2877"),d=Object(l["a"])(i,r,s,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=search.7169a4b7.js.map