(this.webpackJsonppages=this.webpackJsonppages||[]).push([[0],{28:function(n){n.exports=JSON.parse('{"links":[{"link":"/about","text":"About Me \ud83d\ude1c"},{"link":"/education","text":"Education \ud83c\udfeb"},{"link":"/experience","text":"Past Experience \u270f"},{"link":"/tech","text":"Technology Stack \ud83d\udc68\u200d\ud83d\udcbb"},{"link":"/links","text":"Links \ud83d\udcce"},{"link":"/contact","text":"Contact Me \ud83d\udcde"}]}')},35:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var r,i,o=t(1),c=t.n(o),a=t(15),s=t.n(a),d=(t(35),t(2)),l=t(3),u=t(9),j=t(0),h=l.a.div(r||(r=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    font-size: 19pt;\n    padding: 0 1rem 0 1rem;\n"]))),b=function(){var n=Object(o.useState)(new Date),e=Object(u.a)(n,2),t=e[0],r=e[1];return Object(o.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(n)}}),[]),Object(j.jsx)(h,{children:t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).toUpperCase()})},p=t.p+"static/media/plug.ccebd3d4.svg",f=t.p+"static/media/computer.d8a6fb63.svg",x=t(30);!function(n){n.Open="OpenApp",n.Close="CloseApp",n.Focus="Focus"}(i||(i={}));var O,g,m,w,v,k,y,C,I,S,A,F,E,D,M,T,B,L,z,U,N,R,W,P,G,H,J,Q,K,Y,Z,V,_,q,X,$,nn,en,tn,rn=function(n){return{type:i.Close,payload:n}},on=function(n){return{type:i.Open,payload:n}},cn=function(n){return{type:i.Focus,payload:n}},an=Object(o.createContext)({}),sn=function(n){var e=n.children,t=Object(o.useReducer)((function(n,e){var t,r,o={running:Object(x.a)({},n.running),focused:n.focused},c=e.payload.appId;switch(e.type){case i.Open:o.running[c]=e.payload,o.focused=c;break;case i.Close:delete o.running[e.payload.appId],o.focused=null!==(t=null===(r=o.running[Object.keys(o.running)[0]])||void 0===r?void 0:r.appId)&&void 0!==t?t:void 0;break;case i.Focus:o.focused=c;break;default:throw new Error}return o}),{},(function(n){return{running:n,focused:void 0}})),r=Object(u.a)(t,2),c=r[0],a=r[1],s=Object(o.useState)(window.location.origin),d=Object(u.a)(s,1)[0];return console.log("Base url is ".concat(d)),Object(j.jsx)(an.Provider,{value:{baseUrl:d,isOpen:function(n){return void 0!==c.running[n]},state:c,dispatch:a},children:e})},dn=l.a.div(O||(O=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    height: ",";\n    width: 100%;\n    background-color: #F5F0F0;\n    box-shadow: inset 0 0 3px #111010b0;\n"])),(function(n){return n.height})),ln=l.a.div(g||(g=Object(d.a)(["\n    display: flex;\n    width: 50%;\n    div {\n        border-left: 1px solid black;\n    }\n"]))),un=l.a.div(m||(m=Object(d.a)(["\n    display: flex;\n    flex-direction: row-reverse;\n    width: 50%;\n"]))),jn=l.a.div(w||(w=Object(d.a)(["\n    cursor: pointer;\n    user-select: none;\n    width: 14em;\n    box-shadow: 0px 2px 5px 0px #aaa8a8 inset;\n    ",";\n    display: flex;\n    align-items: center;\n    padding: 0 0.5em 0 0.5em;\n    p {\n        width: auto;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n"])),(function(n){return n.selected?"background: #9693933a":""})),hn=l.a.img(v||(v=Object(d.a)(["\n    width: 34px;\n    height: 100%;\n    padding: 0 0.5rem 0 0.5rem;\n"]))),bn=function(n){var e=n.height,t=Object(o.useContext)(an),r=t.state,i=t.dispatch,c=r.focused;return Object(j.jsxs)(dn,{height:e,children:[Object(j.jsxs)(ln,{children:[Object(j.jsx)(hn,{src:f}),Object.values(r.running).map((function(n){return Object(j.jsxs)(jn,{onMouseDown:function(){return i(cn(n))},selected:n.appId===c,children:[Object(j.jsx)(hn,{src:n.appLogo}),Object(j.jsx)("p",{children:n.name})]})}))]}),Object(j.jsxs)(un,{children:[Object(j.jsx)(hn,{src:p}),Object(j.jsx)(b,{})]})]})},pn=t.p+"static/media/duck.e4fa0349.svg",fn=t.p+"static/media/cursor.25fe7b37.svg",xn=t.p+"static/media/folder.9d5e3359.svg",On=t.p+"static/media/computer-shiny.5aa929f3.svg",gn=t.p+"static/media/github.04be58c1.svg",mn=t.p+"static/media/console.d7e6d62d.svg",wn={appId:"cvApp",name:"CvApp - Zygimantas Raugas",appLogo:mn},vn=l.a.div(k||(k=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 1280px;\n    height: 720px;\n"]))),kn=l.a.div(y||(y=Object(d.a)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #111010;\n    cursor: url(",") , auto;\n"])),fn),yn=l.a.div(C||(C=Object(d.a)(["\n    display: flex;\n    position: relative;\n    height: ",";\n    width: 100%;\n"])),(function(n){return n.height})),Cn=l.a.p(I||(I=Object(d.a)(["\n    align-self: flex-end;\n    color: #8D8080;\n    white-space: nowrap;\n"]))),In=l.a.div(S||(S=Object(d.a)(["\n    font-size: 22pt;\n    display: flex;\n    position: absolute;\n    bottom: 0;\n    padding-bottom: 2%;\n    padding-left: 0%;\n"]))),Sn=l.a.img(A||(A=Object(d.a)(["\n    width: 70%;\n    height: 70%;\n"]))),An=l.a.p(F||(F=Object(d.a)(["\n    color: white;\n    margin: 0;\n"]))),Fn=l.a.div(E||(E=Object(d.a)(["\n    position: absolute;\n    display: grid;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-content: center;\n    grid-template-columns: repeat(",", ","%);\n    grid-template-rows: repeat(",", ","%);\n    grid-auto-flow: column;\n    grid-row-gap: 2%;\n    grid-column-gap: 2%;\n"])),(function(n){return n.columns}),(function(n){return(100-2*n.columns)/n.columns}),(function(n){return n.rows}),(function(n){return(100-2*n.rows)/n.rows})),En=l.a.a(D||(D=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: auto;\n    ","\n    ","\n    text-align: center;\n    user-select: none;\n\n    :hover {\n        border: 1px dashed #3d3d3d;\n        border-radius: 0.25em;\n        cursor: pointer;\n    }\n"])),(function(n){return n.row?"grid-row: ".concat(n.row,";"):""}),(function(n){return n.column?"grid-column: ".concat(n.column,";"):""})),Dn=l.a.img(M||(M=Object(d.a)(["\n    filter: drop-shadow(5px 2.5px 1px);\n    animation: flip 10s steps(360) infinite;\n    @keyframes flip {\n        from {\n            transform: rotate3d(0, 1, 0, 0deg);\n        }\n        to {\n            transform: rotate3d(0, 1, 0, -360deg);\n        }\n    }\n"]))),Mn=function(n){var e=n.iconText,t=n.iconImage,r=n.row,i=n.column,o=n.link,c=n.action;return Object(j.jsxs)(En,{href:o,onClick:c,target:"_blank",rel:"noreferrer",row:r,column:i,children:[Object(j.jsx)(Sn,{src:t}),Object(j.jsx)(An,{children:e})]})},Tn=function(){return Object(j.jsxs)(In,{children:[Object(j.jsx)(Dn,{src:pn,title:"Quack",alt:"Mr Duck"}),Object(j.jsx)(Cn,{children:"QUACKOS 0.3"})]})},Bn=l.a.div(T||(T=Object(d.a)(["\n    width: 100%;\n    height: 100%;\n    display: list-item;\n"]))),Ln=function(n){var e=n.children,t=n.dimensions,r=Object(o.useContext)(an).dispatch;return Object(j.jsx)(vn,{children:Object(j.jsxs)(kn,{children:[Object(j.jsx)(bn,{height:"6%"}),Object(j.jsxs)(yn,{height:"94%",children:[Object(j.jsx)(Tn,{}),Object(j.jsxs)(Fn,{rows:t.rows,columns:t.columns,children:[Object(j.jsx)(Mn,{iconText:"Computer",iconImage:On}),Object(j.jsx)(Mn,{iconText:"Super Secret",iconImage:xn,action:function(){return r(on({appId:"Folder:".concat(n="Super Secret"),name:n,appLogo:xn}));var n}}),Object(j.jsx)(Mn,{iconText:"CV App",iconImage:mn,action:function(){return r(on(wn))}}),Object(j.jsx)(Mn,{iconText:"Source Code",iconImage:gn,link:"https://github.com/igiz/pages/tree/master",row:t.rows,column:t.columns})]}),Object(j.jsx)(Bn,{children:e})]})]})})},zn=l.a.div(B||(B=Object(d.a)(["\n    align-content: center;\n    border-radius: 20px;\n    background-color: ",";\n    border: 20px solid ",";\n    box-shadow: 3px 4px 3px 3px ",";\n    width: 1286px;\n    height: 726px;\n"])),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.frameOutline})),Un=l.a.div(L||(L=Object(d.a)(["\n    height: 80px;\n    width: 150px;\n    background-color: ",";\n    box-shadow: 4px 5px 3px #000000;\n"])),(function(n){return n.color})),Nn=l.a.div(z||(z=Object(d.a)(["\n    height: 35px;\n    width: 800px;\n    background-color: ",";\n    border-radius: 5px;\n    box-shadow: 4px 5px 3px #000000;\n"])),(function(n){return n.color})),Rn=l.a.div(U||(U=Object(d.a)(["\n    overflow-x: hidden;\n    overflow-y: hidden;\n    border-radius: 5px;\n    border: 3px solid ",";\n"])),(function(n){return n.borderColor})),Wn=l.a.div(N||(N=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),Pn=function(n){var e=n.frameColor,t=n.frameOutline;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(Un,{color:e,frameOutline:t}),Object(j.jsx)(Nn,{color:e,frameOutline:t})]})},Gn=function(n){var e=n.children,t="#000000";return Object(j.jsxs)(Wn,{children:[Object(j.jsx)(zn,{color:"#545564",frameOutline:t,children:Object(j.jsx)(Rn,{borderColor:t,children:e})}),Object(j.jsx)(Pn,{frameColor:"#000000",frameOutline:"#ffffff"})]})},Hn=t(27),Jn=t.n(Hn),Qn=l.a.div(R||(R=Object(d.a)(["\n    display: flex;\n    max-height: 95%;\n    min-height: 95%;\n    flex-direction: row;\n    border-bottom: 5px solid ",";\n    border-left: 5px solid ",";\n    border-right: 5px solid ",";\n    overflow-wrap: break-word;\n    overflow-y: scroll;\n    background-color: #292323;\n\n    ::-webkit-scrollbar {\n        width: 0.4rem;\n    }\n\n    ::-webkit-scrollbar-track {\n        background: #363232;\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: #575353;\n    }\n"])),(function(n){return n.borderColor}),(function(n){return n.borderColor}),(function(n){return n.borderColor})),Kn=l.a.div(W||(W=Object(d.a)(["\n    display: flex;\n    height: auto;\n    flex-direction: row-reverse;\n    background-color: ",";\n    padding-right: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n"])),(function(n){return n.borderColor})),Yn=l.a.div(P||(P=Object(d.a)(["\n    width: ",";\n    height: ",";\n    position: absolute;\n    left: ",";\n    transition: opacity 0.5s, left 1s;\n    opacity: ",";\n    top: 10%;\n"])),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.left}),(function(n){return n.opacity})),Zn=l.a.div(G||(G=Object(d.a)(["\n    display: flex;\n    height: 1.5rem;\n    width: 1.5rem;\n    background-color: #292323;\n    border-radius: 0.3rem;\n    justify-content: center;\n    align-items: center;\n    transition: background-color 1s;\n    :hover {\n        background-color: #000000;\n        cursor: pointer;\n    }\n"]))),Vn=l.a.div(H||(H=Object(d.a)(["\n    width: 100%;\n    user-select: none;\n"]))),_n=l.a.p(J||(J=Object(d.a)(["\n    color: #ffffff;\n    font-weight: 400;\n    margin: 0;\n    margin-left: 0.2em;\n"]))),qn=l.a.div(Q||(Q=Object(d.a)(["\n  width: 0.8rem;\n  height: 0.8rem;\n  background-color: #FB9632;\n  border-radius: 50%;\n  transition: background-color 0.2s , border-radius 0.2s, height 0.2s;\n  :hover {\n        background-color: #ff0000;\n        border-radius: 0;\n        height: 7px;\n        cursor: pointer;\n  }\n"]))),Xn=function(n){var e=n.appInfo,t=n.borderColor,r=n.onFocus,i=Object(o.useContext)(an).dispatch;return Object(j.jsxs)(Kn,{className:"handle",borderColor:t,children:[Object(j.jsx)(Zn,{onMouseDown:function(n){i(rn(e)),n.preventDefault()},children:Object(j.jsx)(qn,{})}),Object(j.jsx)(Vn,{children:Object(j.jsx)(_n,{onMouseDown:r,children:e.name})})]})},$n=Object(o.forwardRef)((function(n,e){var t=n.appInfo,r=n.dimensions,i=n.onFocus,c=n.children,a=Object(o.useContext)(an).state,s=Object(o.useState)(0),d=Object(u.a)(s,2),l=d[0],h=d[1],b=Object(o.useState)("0%"),p=Object(u.a)(b,2),f=p[0],x=p[1],O=a.focused===t.appId?"#36ADAD":"#235f5f";return Object(o.useEffect)((function(){setTimeout((function(){h(1),x("15%")}),50)}),[]),Object(j.jsx)(Jn.a,{bounds:"parent",handle:".handle",children:Object(j.jsxs)(Yn,{height:r.height,width:r.width,opacity:l,left:f,ref:e,children:[Object(j.jsx)(Xn,{appInfo:t,onFocus:i,borderColor:O}),Object(j.jsx)(Qn,{onMouseDown:i,borderColor:O,children:c})]})})})),ne=t(19),ee=t(4),te=t(28),re=l.a.img(K||(K=Object(d.a)(["\n    width: 120px;\n    height: 100px;\n    border: 0.1rem solid white;\n    border-radius: 5px;\n    margin: 1rem;\n"]))),ie=l.a.div(Y||(Y=Object(d.a)(["\n    display: flex;\n    flex-direction: ",";\n    flex-basis: 100%;\n"])),(function(n){return n.direction})),oe=l.a.span(Z||(Z=Object(d.a)(["\n    color: ",";\n"])),(function(n){return n.color})),ce=t.p+"static/media/profile.87bcfedc.jpg",ae=Object(l.a)(ie)(V||(V=Object(d.a)(["\n    img {\n        margin-top: 40px;\n    }\n"]))),se=function(){return Object(j.jsxs)(ae,{direction:"row",children:[Object(j.jsx)(re,{src:ce}),Object(j.jsxs)(ie,{direction:"column",children:[Object(j.jsx)(oe,{color:"white",children:"About Me"}),Object(j.jsx)("p",{children:"Software Engineer based in London with over 8 years\u2019 experience in the software development industry. Over this period, I have worked in various teams and gathered knowledge in various technologies to implement and maintain applications for financial reporting, budgeting, analytics and BIM data on both web and desktop applications. I enjoy taking on technical tasks of any complexity. I am passionate and always seek to learn new technologies and tools to widen my skill set. I also have extensive experience working with customers and troubleshooting technical issues live on calls."}),Object(j.jsx)("p",{children:"\u266a\u250f(\u30fbo\uff65)\u251b\u266a\u2517 ( \uff65o\uff65) \u2513\u266a"})]})]})},de=l.a.table(_||(_=Object(d.a)(["\n    width: 100%;\n    text-align: left;\n    border: solid black 2px;\n    border-radius:6px;\n\n\n    th {\n        background-color: white;\n        text-align: center;\n    }\n    tr {\n        p {\n            padding-left: 10px;\n        }\n        text-align: left;\n        td {\n            padding-left: 10px;\n            color: white;\n            :nth-child(1) {\n                width: 70%;\n            }\n            :nth-child(2) {\n                text-align: center;\n                vertical-align: top;\n                width: 30%;\n            }\n\n            span {\n                color: #ffffff5e;\n                * {\n                    padding-left: 10px;\n                }\n            }\n        }\n        background-color: #000000;\n    }\n"]))),le=function(){return Object(j.jsx)(ie,{direction:"column",children:Object(j.jsxs)(de,{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"What"}),Object(j.jsx)("th",{children:"When"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:["Bachelor in Business Computing, 1st Westfield Trust Prize",Object(j.jsx)("p",{children:"Queen Mary University of London"}),Object(j.jsx)("p",{children:Object(j.jsxs)("span",{children:["Extracurricular Activities:",Object(j.jsx)("li",{children:"PASS Mentor"}),Object(j.jsx)("li",{children:"Teaching Assistant"})]})})]}),Object(j.jsx)("td",{children:"2011 \u2013 2013"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsxs)("td",{children:["A Levels in Geography, ICT & Business",Object(j.jsx)("p",{children:"Bishop Douglass RC School"})]}),Object(j.jsx)("td",{children:"2009 \u2013 2011"})]})]})})},ue=function(){return Object(j.jsx)("p",{children:"(COMING SOONG)"})},je=l.a.p(q||(q=Object(d.a)(["\n    * {\n        margin-left: 0.5em;\n    }\n"]))),he=l.a.span(X||(X=Object(d.a)(["\n    color: ",";\n    display: inline-flex;\n    overflow: hidden;\n    padding-right: 0.1rem;\n    border-right: 0.2rem solid #959e97;\n    white-space: nowrap;\n\n    animation:\n        typewriter 3s steps(",", end),\n        blink-caret 1s step-end infinite;\n\n    @keyframes typewriter {\n        from { width: 0 }\n        to { width: ","em } // This calculation is such a hack for now , whoops\n    }\n\n    @keyframes blink-caret {\n        from, to { border-color: transparent }\n        50% { border-color: #959e97; }\n    }\n"])),(function(n){return n.color}),(function(n){return n.charCount}),(function(n){return n.charCount/2.5})),be=l.a.div($||($=Object(d.a)(["\n    flex: 3;\n    padding: 0.5rem 0.5rem;\n    border-left: 0.1rem dashed white;\n    border-top: 0.1rem dashed white;\n\n    p {\n        color: #A83A33\n    }\n"]))),pe=l.a.div(nn||(nn=Object(d.a)(['\n    position: sticky;\n    top: 0;\n    flex: 1;\n    flex-direction: column;\n    font-size: 12pt;\n\n    * {\n        margin-left: 0.5em;\n    }\n\n    a {\n        text-decoration: none;\n        color: #ffffff;\n\n        :hover {\n            color: #76C7F5;\n            text-decoration: underline;\n        }\n\n        :hover:before {\n            content: ">"\n        }\n\n        :hover:after{\n            content: "<";\n        }\n    }\n']))),fe=function(n){var e=n.message;return Object(j.jsxs)(je,{children:[Object(j.jsx)(oe,{color:"#33A846",children:"[user@home~]"}),Object(j.jsx)(he,{charCount:e.length,color:"#A83A33",children:e})]})},xe=function(){var n=Object(o.useContext)(an).baseUrl,e=te.links;return Object(j.jsx)(ne.a,{basename:n,children:Object(j.jsxs)(ie,{direction:"column",children:[Object(j.jsx)(fe,{message:"Hello there stranger.......... My name is Ziggy"}),Object(j.jsxs)(ie,{direction:"row",children:[Object(j.jsxs)(pe,{children:[Object(j.jsx)(oe,{color:"white",children:"What would you like to know?"}),Object(j.jsx)("table",{id:"nav",children:e.map((function(n){return Object(j.jsx)("tr",{children:Object(j.jsx)("td",{children:Object(j.jsx)(ne.b,{to:n.link,children:n.text})})})}))})]}),Object(j.jsx)(be,{children:Object(j.jsx)(ie,{direction:"row",children:Object(j.jsxs)(ee.c,{children:[Object(j.jsx)(ee.a,{path:"/about",children:Object(j.jsx)(se,{})}),Object(j.jsx)(ee.a,{path:"/education",children:Object(j.jsx)(le,{})}),Object(j.jsx)(ee.a,{path:["/experience","/tech","/links","/contact"],children:Object(j.jsx)(ue,{})}),Object(j.jsx)(ee.a,{path:"/",children:Object(j.jsx)(se,{})})]})})})]})]})})},Oe=l.a.div(en||(en=Object(d.a)(["\n    height: 100%;\n    width: 100%;\n    text-align: center;\n"]))),ge=l.a.h1(tn||(tn=Object(d.a)(["\n    color: red;\n"]))),me=function(n){n.children;return Object(j.jsx)(Oe,{children:Object(j.jsx)(ge,{children:"ACCESS DENIED: CHEEKY YOU!"})})},we=function(){var n=Object(o.useContext)(an),e=n.state,t=n.dispatch,r=Object(o.useState)({}),i=Object(u.a)(r,2),a=i[0],s=i[1],d=Object(o.useState)({}),l=Object(u.a)(d,2),h=l[0],b=l[1],p=e.focused;return Object(o.useEffect)((function(){if(void 0!==p&&h[p]){var n=h[p];n.current&&(n.current.style.zIndex="1")}Object.keys(h).filter((function(n){return n!==p})).forEach((function(n){var e=h[n];e.current&&(e.current.style.zIndex="0")}))}),[p,h]),Object(o.useEffect)((function(){var n={},r={},i=function(){var i=e.running[o],a=c.a.createRef();i.appId===wn.appId?n[i.appId]=Object(j.jsx)($n,{appInfo:i,dimensions:{height:"450px",width:"950px"},onFocus:function(){return t(cn(i))},ref:a,children:Object(j.jsx)(xe,{})}):i.appId.startsWith("Folder:")&&(n[i.appId]=Object(j.jsx)($n,{appInfo:i,dimensions:{height:"135px",width:"500px"},onFocus:function(){return t(cn(i))},ref:a,children:Object(j.jsx)(me,{})})),r[i.appId]=a};for(var o in e.running)i();b(r),s(n)}),[e,t]),Object(j.jsx)(j.Fragment,{children:Object.keys(a).map((function(n){return a[n]}))})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(sn,{children:Object(j.jsx)(Gn,{children:Object(j.jsx)(Ln,{dimensions:{rows:8,columns:9},children:Object(j.jsx)(we,{})})})})}),document.getElementById("app"))}},[[47,1,2]]]);
//# sourceMappingURL=main.c0536c1a.chunk.js.map