(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(1234)}])},4772:function(e,s,n){"use strict";n.d(s,{Z:function(){return g}});var i=n(5893),a=n(5338),_=n(7294),l=n(1664),t=n.n(l),r=n(526),c=n.n(r);function o(){let[e,s]=(0,_.useState)(!1);function n(){s(!e)}(0,_.useRef)(null);let l=(0,a.QS)({onSwipedLeft:e=>n()});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:c().header_navigation,children:[(0,i.jsx)("div",{className:c().header_navigation_bar_mobile}),(0,i.jsx)("img",{src:"./graphics/wavy.svg",alt:"",className:"header-navigation-img-mobile"}),(0,i.jsx)("button",{onClick:n,children:(0,i.jsx)("img",{src:"./graphics/bars-solid.svg",className:c().header_navigation_bar,alt:""})})]}),(0,i.jsx)("nav",{className:"".concat(c().side_nav," ").concat(e?c().show:""),...l,children:(0,i.jsxs)("div",{className:c().side_nav_sticky,children:[(0,i.jsx)("button",{onClick:n,children:(0,i.jsx)("img",{src:"./graphics/xmark-solid.svg",alt:"cross mark",className:c().close_side_nav_btn})}),(0,i.jsx)("img",{src:"./graphics/side-nav-bg.svg",className:c().side_nav_bg,alt:""}),(0,i.jsxs)("ul",{className:c().side_nav_items,children:[(0,i.jsx)(t(),{href:"/",style:{color:"black"},onClick:n,children:(0,i.jsx)("li",{children:"Home"})}),(0,i.jsx)(t(),{href:"/skills",style:{color:"black"},onClick:n,children:(0,i.jsx)("li",{children:"Skills"})}),(0,i.jsx)(t(),{href:"/projects",style:{color:"black"},onClick:n,children:(0,i.jsx)("li",{children:"Projects"})}),(0,i.jsx)(t(),{href:"/blog",style:{color:"black"},onClick:n,children:(0,i.jsx)("li",{children:"Blog"})}),(0,i.jsx)("li",{children:"More Info"})]})]})})]})}var d=n(4355),v=n.n(d);function m(){return(0,i.jsxs)("nav",{className:v().desk_nav,children:[(0,i.jsx)("img",{src:"./graphics/nav.svg",className:v().nav_svg,alt:""}),(0,i.jsx)("div",{className:v().nav_items_wrapper,children:(0,i.jsxs)("div",{className:v().nav_items,children:[(0,i.jsx)(t(),{href:"/",className:v().nav_item_link,children:(0,i.jsx)("div",{className:v().nav_item,children:"Home"})}),(0,i.jsx)(t(),{href:"/skills",className:v().nav_item_link,children:(0,i.jsx)("div",{className:v().nav_item,children:"Skills"})}),(0,i.jsx)(t(),{href:"/projects",className:v().nav_item_link,children:(0,i.jsx)("div",{className:v().nav_item,children:"Projects"})}),(0,i.jsx)(t(),{href:"/blog",className:v().nav_item_link,children:(0,i.jsx)("div",{className:v().nav_item,children:"Blog"})})]})})]})}function h(){let{innerWidth:e,innerHeight:s}=window;return{width:e,height:s}}function g(){let{width:e}=function(){let[e,s]=(0,_.useState)({width:0,height:0});return(0,_.useEffect)(()=>{function e(){s(h)}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e}();return e>600?(0,i.jsx)(m,{}):(0,i.jsx)(o,{})}},1234:function(e,s,n){"use strict";n.r(s),n.d(s,{__N_SSG:function(){return h},default:function(){return g}});var i=n(5893),a=n(4772),_=n(8417),l=n.n(_),t=n(7294),r=n(1851),c=n.n(r),o=n(1664),d=n.n(o);function v(e){let{post:s}=e,{title:n,date:a,tags:_,description:l,cover_image:t}=s.frontmatter;return(0,i.jsx)(d(),{href:"blog/".concat(s.slug),children:(0,i.jsxs)("div",{className:c().blog_post,children:[(0,i.jsx)("img",{src:t,alt:"",className:c().post_image}),(0,i.jsxs)("div",{className:c().blog_info,children:[(0,i.jsx)("div",{className:c().title,children:n}),(0,i.jsx)("div",{className:c().date,children:a}),(0,i.jsx)("div",{className:c().tags,children:_.map((e,s)=>(0,i.jsxs)("span",{children:[" ",e," "]},s))}),(0,i.jsx)("div",{className:c().description,children:l})]})]})})}function m(e){let{posts:s}=e,n=(0,t.useRef)(null);return(0,i.jsxs)("section",{className:l().search,children:[(0,i.jsxs)("div",{className:l().search_bar,children:[(0,i.jsx)("form",{action:"",onClick:function(){var e;null===(e=n.current)||void 0===e||e.focus()},children:(0,i.jsx)("input",{ref:n,type:"text",placeholder:"Search blog"})}),(0,i.jsx)("button",{children:(0,i.jsx)("img",{src:"./graphics/search_icon.svg",alt:"seach icon"})})]}),(0,i.jsx)("div",{className:l().blog_list,children:s.map((e,s)=>(0,i.jsx)(v,{post:e},s))})]})}var h=!0;function g(e){let{posts:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)(m,{posts:s})]})}},8417:function(e){e.exports={search_bar:"blog-list_search_bar__9umQJ",blog_list:"blog-list_blog_list__mdLei"}},1851:function(e){e.exports={blog_post:"blog-post_blog_post__XYDb9",post_image:"blog-post_post_image__j_Mlb",blog_info:"blog-post_blog_info__3TPGI",title:"blog-post_title__bF40J",date:"blog-post_date__fUZn3",tags:"blog-post_tags__mFiyQ",description:"blog-post_description__Gk5rH"}},4355:function(e){e.exports={desk_nav:"desk-nav_desk_nav__De9bi",nav_heading:"desk-nav_nav_heading__I1BYn",nav_svg:"desk-nav_nav_svg__RX_wS",nav_items_wrapper:"desk-nav_nav_items_wrapper__9HGWe",nav_items:"desk-nav_nav_items__bj7lh",nav_item_link:"desk-nav_nav_item_link__0oA48",nav_item:"desk-nav_nav_item__1g_5F"}},526:function(e){e.exports={header_navigation:"mobile-nav_header_navigation__r7i8i",header_navigation_bar:"mobile-nav_header_navigation_bar__dTWkE",header_navigation_bar_mobile:"mobile-nav_header_navigation_bar_mobile__qDVSZ",side_nav:"mobile-nav_side_nav__GVzIn",side_nav_sticky:"mobile-nav_side_nav_sticky__I2287",close_side_nav_btn:"mobile-nav_close_side_nav_btn__6FTJB",show:"mobile-nav_show__9Z3kY",side_nav_bg:"mobile-nav_side_nav_bg__ov2pK",side_nav_items:"mobile-nav_side_nav_items__WCZ_R"}}},function(e){e.O(0,[216,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);