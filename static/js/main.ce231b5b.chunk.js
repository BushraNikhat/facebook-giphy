(this["webpackJsonpfacebook-giphy"]=this["webpackJsonpfacebook-giphy"]||[]).push([[0],{51:function(e,t,s){},77:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(36),i=s.n(n),r=(s(50),s(51),s(90)),l=s(92),j=s(93),o=s(94),d=s(91),b=s(106),m=s(0),x=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"topbar_container shadow",children:Object(m.jsxs)("div",{className:"row topbar_content flex-grow-1 d-flex align-items-center mx-4",children:[Object(m.jsx)("div",{className:"col-sm-3 col-4 topbar_left  p-0 ",children:Object(m.jsx)("span",{children:"Facebook"})}),Object(m.jsx)("div",{className:" col-sm-6 col-10 topbar_center ",children:Object(m.jsxs)("div",{className:"searchBar d-flex justify-content-center align-items-center",children:[Object(m.jsx)(r.a,{className:"searchIcon"}),Object(m.jsx)("input",{placeholder:"Search for friend or post",className:"searchInput"})]})}),Object(m.jsxs)("div",{className:"col-sm-3 col-2 topbar_right  d-flex align-items-center  p-0 justify-content-between ",children:[Object(m.jsxs)("div",{className:"topbarIcons d-flex align-items-center justify-content-around  flex-grow-1",children:[Object(m.jsx)(d.a,{badgeContent:2,color:"secondary",children:Object(m.jsx)(l.a,{})}),Object(m.jsx)(d.a,{badgeContent:4,color:"secondary",children:Object(m.jsx)(j.a,{})}),Object(m.jsx)(d.a,{badgeContent:3,color:"secondary",children:Object(m.jsx)(o.a,{})})]}),Object(m.jsx)("div",{className:" flex-grow-2 d-flex justify-content-end",children:Object(m.jsx)(b.a,{alt:"profile",src:"/favicon.png"})})]})]})})})},h=s(8),O=s(99),u=s(100),f=s(101),p=s(21),g=s(16),N=s(96),v=s(97),y=s(98),_=s(27),w=s.n(_),k=s(42),C=s(95),F=s(43),I=s.n(F),S=function(e){var t=e.gify,s=e.closeGif,a=e.clickedGiphy,n=Object(c.useState)(""),i=Object(h.a)(n,2),r=i[0],l=i[1],j=Object(c.useState)([]),o=Object(h.a)(j,2),d=o[0],b=o[1],x=function(){var e=Object(k.a)(w.a.mark((function e(t){var s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(t.target.value),e.prev=1,e.next=4,I.a.get("https://api.giphy.com/v1/gifs/search?&api_key=qevXuSL6fLpYUcjKY0bIrm80jGiZdl3P&q=".concat(r));case 4:s=e.sent,b(s.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),O=function(e){a(e.target.src),s(!1),l("")};return Object(m.jsx)(m.Fragment,{children:t&&Object(m.jsxs)("div",{className:"giphy_container shadow p-2",children:[Object(m.jsx)("div",{onClick:function(){return s(!1)},children:Object(m.jsx)(C.a,{className:"giphy_icon mb-2"})}),Object(m.jsx)("input",{type:"search",placeholder:"Search GIF across apps shadow",className:" px-3 py-2 ",onChange:x,name:"text",value:r}),Object(m.jsx)("div",{className:"gif_container",children:d.map((function(e){return Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-sm-10 col-12",children:Object(m.jsx)("img",{src:e.images.fixed_height.url,alt:"",onClick:O})})},e.images.fixed_height.url)}))})]})})},G=s(44),P=function(e,t){switch(t.type){case"post":return[].concat(Object(G.a)(e),[t.payload]);default:return e}},B=[],M=Object(c.createContext)(B),L=function(e){var t=e.children,s=Object(c.useReducer)(P,B),a=Object(h.a)(s,2),n=a[0],i=a[1];return Object(m.jsx)(M.Provider,{value:{state:n,dispatch:i},children:t})},q=function(e){var t=e.modals,s=e.closeModal,a=Object(c.useState)(!1),n=Object(h.a)(a,2),i=n[0],r=n[1],l=Object(c.useContext)(M).dispatch,j=Object(c.useState)({text:"",gify:""}),o=Object(h.a)(j,2),d=o[0],x=o[1];return Object(m.jsxs)(m.Fragment,{children:[t&&Object(m.jsx)("div",{className:"share-modal shadow p-2",id:"myModal",children:Object(m.jsx)("div",{className:"share-modal-dialog",role:"document",children:Object(m.jsxs)("div",{className:"share-modal-content",children:[Object(m.jsxs)("div",{className:"share-modal-header d-flex align-items-center",children:[Object(m.jsx)("h4",{className:"share-modal-title mx-auto fw-bold",children:"Create Post"}),Object(m.jsx)("button",{type:"button","aria-label":"Close",className:"share-modal_close",onClick:function(){return s(!1)},children:Object(m.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(m.jsxs)("div",{className:"share-modal-body ",children:[Object(m.jsxs)("div",{className:"body_top d-flex align-items-center mb-3",children:[Object(m.jsx)(b.a,{alt:"profile",src:"/images/profile.jpg"}),Object(m.jsx)("input",{placeholder:"What's on your mind, Bushra?",className:"shareInput ms-2 px-3 py-2 flex-grow-1",name:"text",value:d.text,onChange:function(e){var t=e.target,s=t.name,c=t.value;x((function(e){return Object(g.a)(Object(g.a)({},e),{},Object(p.a)({},s,c))}))}})]}),Object(m.jsxs)("div",{className:"body_bottom d-flex align-items-center justify-content-between",children:[Object(m.jsxs)("button",{className:"modal_icon_container d-flex align-items-center",onClick:function(){return r(!0)},children:[Object(m.jsx)(N.a,{className:"text-secondary"}),Object(m.jsx)("span",{className:"ms-1",children:"GIF"})]}),Object(m.jsxs)("button",{className:"modal_icon_container d-flex align-items-center",children:[Object(m.jsx)(v.a,{className:"text-secondary"}),Object(m.jsx)("span",{className:"ms-1",children:"Tag Friends"})]})]})]}),Object(m.jsxs)("div",{className:"share-modal-footer d-flex align-items-center justify-content-end my-2",children:[Object(m.jsxs)("button",{type:"button",className:"btn btn-secondary d-flex align-items-center modal_buttons",children:[Object(m.jsx)(y.a,{}),Object(m.jsx)("span",{children:"Only Me"})]}),d.text||d.gify?Object(m.jsx)("button",{type:"submit",className:"btn btn-primary modal_buttons",onClick:function(e){e.preventDefault(),l({type:"post",payload:d}),s(!1),x({text:"",gify:""})},children:"Post"}):Object(m.jsx)("button",{type:"text",className:"btn btn-disable modal_buttons",children:"Post"})]})]})})}),Object(m.jsx)(S,{gify:i,closeGif:function(e){r(e)},clickedGiphy:function(e){x((function(t){return Object(g.a)(Object(g.a)({},t),{},{gify:e})}))}})]})},J=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),s=t[0],a=t[1];return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"share_wrapper ",children:[Object(m.jsxs)("div",{className:"share_top d-flex align-items-center justify-content-center",children:[Object(m.jsx)(b.a,{alt:"profile",src:"/images/profile.jpg"}),Object(m.jsx)("input",{placeholder:"What's on your mind, Bushra?",className:"shareInput ms-2 px-3 py-2 flex-grow-1",onClick:function(){return a(!0)}})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"share_bottom  d-flex align-items-center justify-content-around",children:[Object(m.jsxs)("div",{className:"share_icon_container d-flex align-items-center",children:[Object(m.jsx)(O.a,{className:"text-danger"}),Object(m.jsx)("span",{className:"ms-1",children:"Live video"})]}),Object(m.jsxs)("div",{className:"share_icon_container d-flex align-items-center",children:[Object(m.jsx)(u.a,{className:"text-success"}),Object(m.jsx)("span",{className:"ms-1",children:"Photo/Video"})]}),Object(m.jsxs)("div",{className:"share_icon_container d-flex align-items-center",children:[Object(m.jsx)(f.a,{className:"text-warning"}),Object(m.jsx)("span",{className:"ms-1",children:"Feelings"})]})]})]}),Object(m.jsx)(q,{modals:s,closeModal:function(e){a(e)}})]})},W=s(102),Y=s(103),D=s(104),E=s(105),K=function(e){var t=e.text,s=e.gify;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"feeds_wrapper p-3 mb-4",children:[Object(m.jsxs)("div",{className:"feeds_top d-flex align-items-center justify-content-between mb-2",children:[Object(m.jsxs)("div",{className:"feeds_top_left d-flex align-items-center",children:[Object(m.jsx)(b.a,{alt:"profile",src:"/images/profile.jpg"}),Object(m.jsxs)("div",{className:"feed_info ms-3",children:[Object(m.jsx)("p",{className:"mb-0",children:"Bushra Nikhat"}),Object(m.jsx)("p",{className:"mb-0",children:"5 hours ago"})]})]}),Object(m.jsx)("div",{className:"feeds_top_right p-2",children:Object(m.jsx)(W.a,{})})]}),Object(m.jsxs)("div",{className:"feed_center d-flex flex-column",children:[Object(m.jsx)("span",{className:"feed_text mb-2",children:t}),s&&Object(m.jsx)("img",{src:s,alt:"postImage",className:"feed_img"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"feed_bottom  d-flex align-items-center justify-content-around",children:[Object(m.jsxs)("div",{className:"feed_icon_container d-flex align-items-center",children:[Object(m.jsx)(Y.a,{className:"text-danger"}),Object(m.jsx)("span",{className:"ms-1",children:"Like"})]}),Object(m.jsxs)("div",{className:"feed_icon_container d-flex align-items-center",children:[Object(m.jsx)(D.a,{className:"text-success"}),Object(m.jsx)("span",{className:"ms-1",children:"Comment"})]}),Object(m.jsxs)("div",{className:"feed_icon_container d-flex align-items-center",children:[Object(m.jsx)(E.a,{className:"text-warning"}),Object(m.jsx)("span",{className:"ms-1",children:"Share"})]})]})]})})},R=function(){var e=Object(c.useContext)(M).state;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"center_container ",children:Object(m.jsxs)("div",{className:"row d-flex justify-content-center pt-5",children:[Object(m.jsx)("div",{className:"col-lg-8 col-12 share_container p-3  mb-5  shadow",children:Object(m.jsx)(J,{})}),Object(m.jsx)("div",{className:"col-sm-8 col-10 ",children:e.slice(0).reverse().map((function(e,t){return Object(m.jsx)(K,{text:e.text,gify:e.gify},t)}))})]})})})},T=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(L,{children:[Object(m.jsx)(x,{}),Object(m.jsx)(R,{})]})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.ce231b5b.chunk.js.map