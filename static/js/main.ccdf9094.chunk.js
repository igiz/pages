(this.webpackJsonppages=this.webpackJsonppages||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"links":[{"link":"","text":"About Me \ud83d\ude1c"},{"link":"","text":"Education \ud83c\udfeb"},{"link":"","text":"Past Experience \u270f"},{"link":"","text":"Technology Stack \ud83d\udc68\u200d\ud83d\udcbb"},{"link":"","text":"Links \ud83d\udcce"},{"link":"","text":"Contact Me \ud83d\udcde"}]}')},25:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var i,r,c=t(1),o=t.n(c),a=t(6),s=t.n(a),u=(t(25),t(2)),l=t(3),d=t(4),p=t(0),m=l.a.div(i||(i=Object(u.a)(["\n    display: flex;\n    align-items: center;\n    font-size: 19pt;\n    padding: 0 1rem 0 1rem;\n"]))),j=function(){var e=Object(c.useState)(new Date),n=Object(d.a)(e,2),t=n[0],i=n[1];return Object(c.useEffect)((function(){var e=setInterval((function(){i(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),Object(p.jsx)(m,{children:t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).toUpperCase()})},h=t.p+"static/media/plug.ccebd3d4.svg",b=t.p+"static/media/computer.d8a6fb63.svg",f=t(20);!function(e){e.Open="OpenApp",e.Close="CloseApp"}(r||(r={}));var x,g,O,v,w,k,y,I,A,q,C,D,S,E,M,F,P,N,T,z,L,Q,R,H,J,U,B,K,W,Y,Z,V,_,G,X,$,ee,ne=function(e){return{type:r.Close,payload:e}},te=function(e){return{type:r.Open,payload:e}},ie=Object(c.createContext)({}),re=function(e){var n=e.children,t=Object(c.useReducer)((function(e,n){var t={running:Object(f.a)({},e.running)};switch(n.type){case r.Open:t.running[n.payload.appId]=n.payload;break;case r.Close:delete t.running[n.payload.appId];break;default:throw new Error}return t}),{},(function(e){return{running:e}})),i=Object(d.a)(t,2),o=i[0],a=i[1],s=Object(c.useState)(),u=Object(d.a)(s,2),l=u[0],m=u[1];return Object(p.jsx)(ie.Provider,{value:{isOpen:function(e){return void 0!==o.running[e]},state:o,focused:l,dispatch:a,setFocused:m},children:n})},ce=l.a.div(x||(x=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    height: ",";\n    width: 100%;\n    background-color: #F5F0F0;\n    box-shadow: inset 0 0 3px #111010b0;\n"])),(function(e){return e.height})),oe=l.a.div(g||(g=Object(u.a)(["\n    display: flex;\n    width: 50%;\n    div {\n        border-left: 1px solid black;\n    }\n"]))),ae=l.a.div(O||(O=Object(u.a)(["\n    display: flex;\n    flex-direction: row-reverse;\n    width: 50%;\n"]))),se=l.a.div(v||(v=Object(u.a)(["\n    cursor: pointer;\n    user-select: none;\n    width: 14em;\n    box-shadow: 0px 2px 5px 0px #aaa8a8 inset;\n    ",";\n    display: flex;\n    align-items: center;\n    padding: 0 0.5em 0 0.5em;\n    p {\n        width: auto;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n"])),(function(e){return e.selected?"background: #9693933a":""})),ue=l.a.img(w||(w=Object(u.a)(["\n    width: 34px;\n    height: 100%;\n    padding: 0 0.5rem 0 0.5rem;\n"]))),le=function(e){var n=e.height,t=Object(c.useContext)(ie),i=t.state,r=t.focused,o=t.setFocused;return Object(p.jsxs)(ce,{height:n,children:[Object(p.jsxs)(oe,{children:[Object(p.jsx)(ue,{src:b}),Object.values(i.running).map((function(e){return Object(p.jsxs)(se,{onMouseDown:function(){return o(e.appId)},selected:e.appId===r,children:[Object(p.jsx)(ue,{src:e.appLogo}),Object(p.jsx)("p",{children:e.name})]})}))]}),Object(p.jsxs)(ae,{children:[Object(p.jsx)(ue,{src:h}),Object(p.jsx)(j,{})]})]})},de=t.p+"static/media/duck.e4fa0349.svg",pe=t.p+"static/media/cursor.25fe7b37.svg",me=t.p+"static/media/folder.9d5e3359.svg",je=t.p+"static/media/computer-shiny.5aa929f3.svg",he=t.p+"static/media/github.04be58c1.svg",be=t.p+"static/media/console.d7e6d62d.svg",fe={appId:"cvApp",name:"CvApp - Zygimantas Raugas",appLogo:be},xe=l.a.div(k||(k=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 1280px;\n    height: 720px;\n"]))),ge=l.a.div(y||(y=Object(u.a)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #111010;\n    cursor: url(",") , auto;\n"])),pe),Oe=l.a.div(I||(I=Object(u.a)(["\n    display: flex;\n    position: relative;\n    height: ",";\n    width: 100%;\n"])),(function(e){return e.height})),ve=l.a.p(A||(A=Object(u.a)(["\n    align-self: flex-end;\n    color: #8D8080;\n    white-space: nowrap;\n"]))),we=l.a.div(q||(q=Object(u.a)(["\n    font-size: 22pt;\n    display: flex;\n    position: absolute;\n    bottom: 0;\n    padding-bottom: 2%;\n    padding-left: 0%;\n"]))),ke=l.a.img(C||(C=Object(u.a)(["\n    width: 70%;\n    height: 70%;\n"]))),ye=l.a.p(D||(D=Object(u.a)(["\n    color: white;\n    margin: 0;\n"]))),Ie=l.a.div(S||(S=Object(u.a)(["\n    position: absolute;\n    display: grid;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-content: center;\n    grid-template-columns: repeat(",", ","%);\n    grid-template-rows: repeat(",", ","%);\n    grid-auto-flow: column;\n    grid-row-gap: 2%;\n    grid-column-gap: 2%;\n"])),(function(e){return e.columns}),(function(e){return(100-2*e.columns)/e.columns}),(function(e){return e.rows}),(function(e){return(100-2*e.rows)/e.rows})),Ae=l.a.a(E||(E=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: auto;\n    ","\n    ","\n    text-align: center;\n    user-select: none;\n\n    :hover {\n        border: 1px dashed #3d3d3d;\n        border-radius: 0.25em;\n        cursor: pointer;\n    }\n"])),(function(e){return e.row?"grid-row: ".concat(e.row,";"):""}),(function(e){return e.column?"grid-column: ".concat(e.column,";"):""})),qe=l.a.img(M||(M=Object(u.a)(["\n    animation: flip 10s steps(360) infinite;\n    @keyframes flip {\n        from {\n            transform: rotate3d(0, 1, 0, 0deg);\n        }\n        to {\n            transform: rotate3d(0, 1, 0, -360deg);\n        }\n    }\n"]))),Ce=function(e){var n=e.iconText,t=e.iconImage,i=e.row,r=e.column,c=e.link,o=e.action;return Object(p.jsxs)(Ae,{href:c,onClick:o,target:"_blank",rel:"noreferrer",row:i,column:r,children:[Object(p.jsx)(ke,{src:t}),Object(p.jsx)(ye,{children:n})]})},De=function(){return Object(p.jsxs)(we,{children:[Object(p.jsx)(qe,{src:de,title:"Quack",alt:"Mr Duck"}),Object(p.jsx)(ve,{children:"QUACKOS 0.3"})]})},Se=l.a.div(F||(F=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    display: list-item;\n"]))),Ee=function(e){var n=e.children,t=e.dimensions,i=Object(c.useContext)(ie).dispatch;return Object(p.jsx)(xe,{children:Object(p.jsxs)(ge,{children:[Object(p.jsx)(le,{height:"6%"}),Object(p.jsxs)(Oe,{height:"94%",children:[Object(p.jsx)(De,{}),Object(p.jsxs)(Ie,{rows:t.rows,columns:t.columns,children:[Object(p.jsx)(Ce,{iconText:"Computer",iconImage:je}),Object(p.jsx)(Ce,{iconText:"Super Secret",iconImage:me,action:function(){return i(te({appId:"Folder:".concat(e="Super Secret"),name:e,appLogo:me}));var e}}),Object(p.jsx)(Ce,{iconText:"CV App",iconImage:be,action:function(){return i(te(fe))}}),Object(p.jsx)(Ce,{iconText:"Source Code",iconImage:he,link:"https://github.com/igiz/pages/tree/master",row:t.rows,column:t.columns})]}),Object(p.jsx)(Se,{children:n})]})]})})},Me=l.a.div(P||(P=Object(u.a)(["\n    align-content: center;\n    border-radius: 20px;\n    background-color: ",";\n    border: 20px solid ",";\n    box-shadow: 3px 4px 3px 3px ",";\n    width: 1286px;\n    height: 726px;\n"])),(function(e){return e.color}),(function(e){return e.color}),(function(e){return e.frameOutline})),Fe=l.a.div(N||(N=Object(u.a)(["\n    height: 80px;\n    width: 150px;\n    background-color: ",";\n"])),(function(e){return e.color})),Pe=l.a.div(T||(T=Object(u.a)(["\n    height: 35px;\n    width: 800px;\n    background-color: ",";\n    border-radius: 5px;\n"])),(function(e){return e.color})),Ne=l.a.div(z||(z=Object(u.a)(["\n    overflow-x: hidden;\n    overflow-y: hidden;\n    border-radius: 5px;\n    border: 3px solid ",";\n"])),(function(e){return e.borderColor})),Te=l.a.div(L||(L=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),ze=function(e){var n=e.frameColor,t=e.frameOutline;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Fe,{color:n,frameOutline:t}),Object(p.jsx)(Pe,{color:n,frameOutline:t})]})},Le=function(e){var n=e.children,t="#000000";return Object(p.jsxs)(Te,{children:[Object(p.jsx)(Me,{color:"#545564",frameOutline:t,children:Object(p.jsx)(Ne,{borderColor:t,children:n})}),Object(p.jsx)(ze,{frameColor:"#000000",frameOutline:"#ffffff"})]})},Qe=t(18),Re=t.n(Qe),He=l.a.div(Q||(Q=Object(u.a)(["\n    display: flex;\n    max-height: 95%;\n    flex-direction: row;\n    border-bottom: 5px solid #36ADAD;\n    border-left: 5px solid #36ADAD;\n    border-right: 5px solid #36ADAD;\n    overflow-wrap: break-word;\n    overflow-y: scroll;\n    background-color: #292323;\n\n    ::-webkit-scrollbar {\n        width: 0.4rem;\n    }\n\n    ::-webkit-scrollbar-track {\n        background: #363232;\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: #575353;\n    }\n"]))),Je=l.a.div(R||(R=Object(u.a)(["\n    display: flex;\n    height: auto;\n    flex-direction: row-reverse;\n    background-color: #36ADAD;\n    padding-right: 5px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n"]))),Ue=l.a.div(H||(H=Object(u.a)(["\n    width: ",";\n    height: ",";\n    position: absolute;\n    left: ",";\n    transition: opacity 0.5s, left 1s;\n    opacity: ",";\n    top: 10%;\n"])),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.left}),(function(e){return e.opacity})),Be=l.a.div(J||(J=Object(u.a)(["\n    display: flex;\n    height: 1.5rem;\n    width: 1.5rem;\n    background-color: #292323;\n    border-radius: 0.3rem;\n    justify-content: center;\n    align-items: center;\n    transition: background-color 1s;\n    :hover {\n        background-color: #000000;\n        cursor: pointer;\n    }\n"]))),Ke=l.a.div(U||(U=Object(u.a)(["\n    width: 100%;\n    user-select: none;\n"]))),We=l.a.p(B||(B=Object(u.a)(["\n    color: #ffffff;\n    font-weight: 400;\n    margin: 0;\n    margin-left: 0.2em;\n"]))),Ye=l.a.div(K||(K=Object(u.a)(["\n  width: 0.8rem;\n  height: 0.8rem;\n  background-color: #FB9632;\n  border-radius: 50%;\n  transition: background-color 0.2s , border-radius 0.2s, height 0.2s;\n  :hover {\n        background-color: #ff0000;\n        border-radius: 0;\n        height: 7px;\n        cursor: pointer;\n  }\n"]))),Ze=function(e){var n=e.appInfo,t=e.onFocus,i=Object(c.useContext)(ie).dispatch;return Object(p.jsxs)(Je,{className:"handle",children:[Object(p.jsx)(Be,{onMouseDown:function(){return i(ne(n))},children:Object(p.jsx)(Ye,{})}),Object(p.jsx)(Ke,{children:Object(p.jsx)(We,{onMouseDown:t,children:n.name})})]})},Ve=Object(c.forwardRef)((function(e,n){var t=e.appInfo,i=e.dimensions,r=e.onFocus,o=e.children,a=Object(c.useState)(0),s=Object(d.a)(a,2),u=s[0],l=s[1],m=Object(c.useState)("0%"),j=Object(d.a)(m,2),h=j[0],b=j[1];return Object(c.useEffect)((function(){setTimeout((function(){l(1),b("15%")}),50)}),[]),Object(p.jsx)(Re.a,{bounds:"parent",handle:".handle",children:Object(p.jsxs)(Ue,{height:i.height,width:i.width,opacity:u,left:h,ref:n,children:[Object(p.jsx)(Ze,{appInfo:t,onFocus:r}),Object(p.jsx)(He,{onMouseDown:r,children:o})]})})})),_e=t(19),Ge=t.p+"static/media/profile.87bcfedc.jpg",Xe=l.a.span(W||(W=Object(u.a)(["\n    color: ",";\n"])),(function(e){return e.color})),$e=l.a.p(Y||(Y=Object(u.a)(["\n    * {\n        margin-left: 0.5em;\n    }\n"]))),en=l.a.span(Z||(Z=Object(u.a)(["\n    color: ",";\n    display: inline-flex;\n    overflow: hidden;\n    padding-right: 0.1rem;\n    border-right: 0.2rem solid #959e97;\n    white-space: nowrap;\n\n    animation:\n        typewriter 3s steps(",", end),\n        blink-caret 1s step-end infinite;\n\n    @keyframes typewriter {\n        from { width: 0 }\n        to { width: ","em } // This calculation is such a hack for now , whoops\n    }\n\n    @keyframes blink-caret {\n        from, to { border-color: transparent }\n        50% { border-color: #959e97; }\n    }\n"])),(function(e){return e.color}),(function(e){return e.charCount}),(function(e){return e.charCount/2.5})),nn=l.a.div(V||(V=Object(u.a)(["\n    display: flex;\n    flex-direction: ",";\n    flex-basis: 100%;\n"])),(function(e){return e.direction})),tn=l.a.div(_||(_=Object(u.a)(["\n    flex: 3;\n    padding: 0.5rem 0.5rem;\n    border-left: 0.1rem dashed white;\n    border-top: 0.1rem dashed white;\n\n    p {\n        color: #A83A33\n    }\n"]))),rn=l.a.img(G||(G=Object(u.a)(["\n    width: 120px;\n    height: 100px;\n    border: 0.1rem solid white;\n    border-radius: 5px;\n    margin: 1rem;\n"]))),cn=l.a.div(X||(X=Object(u.a)(['\n    flex: 1;\n    flex-direction: column;\n    font-size: 12pt;\n\n    * {\n        margin-left: 0.5em;\n    }\n\n    a {\n        text-decoration: none;\n        color: #ffffff;\n\n        :hover {\n            color: #76C7F5;\n            text-decoration: underline;\n        }\n\n        :hover:before {\n            content: ">"\n        }\n\n        :hover:after{\n            content: "<";\n        }\n    }\n']))),on=function(e){var n=e.message;return Object(p.jsxs)($e,{children:[Object(p.jsx)(Xe,{color:"#33A846",children:"[user@home~]"}),Object(p.jsx)(en,{charCount:n.length,color:"#A83A33",children:n})]})},an=function(){var e=_e.links;return Object(p.jsxs)(nn,{direction:"column",children:[Object(p.jsx)(on,{message:"Hello there stranger.......... My name is Ziggy"}),Object(p.jsxs)(nn,{direction:"row",children:[Object(p.jsxs)(cn,{children:[Object(p.jsx)(Xe,{color:"white",children:"What would you like to know?"}),Object(p.jsx)("table",{id:"nav",children:e.map((function(e){return Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsx)("a",{href:e.link,children:e.text})})})}))})]}),Object(p.jsx)(tn,{children:Object(p.jsxs)(nn,{direction:"row",children:[Object(p.jsx)(rn,{src:Ge}),Object(p.jsxs)(nn,{direction:"column",children:[Object(p.jsx)(Xe,{color:"white",children:"About Me"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet est vitae tortor faucibus vehicula suscipit at neque. Nulla eget efficitur leo. Pellentesque ut neque in tortor tincidunt hendrerit ut ut ante. Suspendisse sodales lectus in sodales semper. Maecenas elit orci, condimentum vitae tellus ut, malesuada feugiat arcu. Nunc euismod tempor vehicula. Duis sem felis, accumsan non elementum vitae, ornare non dolor. Proin sit amet mauris metus. Quisque sit amet accumsan diam. Aliquam rutrum justo vel risus ultrices, v el malesuada magna pretium. Etiam eget dictum ante. Aliquam lacinia, enim in luctus congue, tellus leo laoreet lacus, in volutpat justo orci ut lorem. Proin pellentesque dignissim diam, a accumsan sem suscipit volutpat.                            Maecenas sit amet est vitae tortor faucibus vehicula suscipit at neque. Nulla eget efficitur leo. Pellentesque ut neque in tortor tincidunt hendrerit ut ut ante. Suspendisse sodales lectus in sodales semper. Maecenas elit orci, condimentum vitae tellus ut, malesuada feugiat arcu. Nunc euismod tempor vehicula. Duis sem felis, accumsan non elementum vitae, ornare non dolor. Proin sit amet mauris metus. Quisque sit amet accumsan diam. Aliquam rutrum justo vel risus ultrices, v el malesuada magna pretium. Etiam eget dictum ante. Aliquam lacinia, enim in luctus congue, tellus leo laoreet lacus, in volutpat justo orci ut lorem. Proin pellentesque dignissim diam, a accumsan sem suscipit volutpat.                            Maecenas sit amet est vitae tortor faucibus vehicula suscipit at neque. Nulla eget efficitur leo. Pellentesque ut neque in tortor tincidunt hendrerit ut ut ante. Suspendisse sodales lectus in sodales semper. Maecenas elit orci, condimentum vitae tellus ut, malesuada feugiat arcu. Nunc euismod tempor vehicula. Duis sem felis, accumsan non elementum vitae, ornare non dolor. Proin sit amet mauris metus. Quisque sit amet accumsan diam. Aliquam rutrum justo vel risus ultrices, v el malesuada magna pretium. Etiam eget dictum ante. Aliquam lacinia, enim in luctus congue, tellus leo laoreet lacus, in volutpat justo orci ut lorem. Proin pellentesque dignissim diam, a accumsan sem suscipit volutpat.                            Maecenas sit amet est vitae tortor faucibus vehicula suscipit at neque. Nulla eget efficitur leo. Pellentesque ut neque in tortor tincidunt hendrerit ut ut ante. Suspendisse sodales lectus in sodales semper. Maecenas elit orci, condimentum vitae tellus ut, malesuada feugiat arcu. Nunc euismod tempor vehicula. Duis sem felis, accumsan non elementum vitae, ornare non dolor. Proin sit amet mauris metus. Quisque sit amet accumsan diam. Aliquam rutrum justo vel risus ultrices, v el malesuada magna pretium. Etiam eget dictum ante. Aliquam lacinia, enim in luctus congue, tellus leo laoreet lacus, in volutpat justo orci ut lorem. Proin pellentesque dignissim diam, a accumsan sem suscipit volutpat."}),Object(p.jsx)("p",{children:"(This section will be filled soon , I promise)"}),Object(p.jsx)("p",{children:"\u266a\u250f(\u30fbo\uff65)\u251b\u266a\u2517 ( \uff65o\uff65) \u2513\u266a"})]})]})})]})]})},sn=l.a.div($||($=Object(u.a)(["\n    height: 100%;\n    width: 100%;\n    text-align: center;\n"]))),un=l.a.h1(ee||(ee=Object(u.a)(["\n    color: red;\n"]))),ln=function(e){e.children;return Object(p.jsx)(sn,{children:Object(p.jsx)(un,{children:"ACCESS DENIED: CHEEKY YOU!"})})},dn=function(){var e=Object(c.useContext)(ie),n=e.state,t=e.focused,i=e.setFocused,r=Object(c.useState)({}),a=Object(d.a)(r,2),s=a[0],u=a[1],l=Object(c.useState)({}),m=Object(d.a)(l,2),j=m[0],h=m[1];return Object(c.useEffect)((function(){if(void 0!==t&&j[t]){var e=j[t];e.current&&(e.current.style.zIndex="1")}Object.keys(j).filter((function(e){return e!==t})).forEach((function(e){var n=j[e];n.current&&(n.current.style.zIndex="0")}))}),[t,j]),Object(c.useEffect)((function(){var e={},t={},r=function(){var r=n.running[c],a=o.a.createRef();r.appId===fe.appId?e[r.appId]=Object(p.jsx)(Ve,{appInfo:r,dimensions:{height:"450px",width:"950px"},onFocus:function(){return i(r.appId)},ref:a,children:Object(p.jsx)(an,{})}):r.appId.startsWith("Folder:")&&(e[r.appId]=Object(p.jsx)(Ve,{appInfo:r,dimensions:{height:"135px",width:"500px"},onFocus:function(){return i(r.appId)},ref:a,children:Object(p.jsx)(ln,{})})),t[r.appId]=a};for(var c in n.running)r();h(t),u(e)}),[n,i]),Object(p.jsx)(p.Fragment,{children:Object.keys(s).map((function(e){return s[e]}))})};s.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(re,{children:Object(p.jsx)(Le,{children:Object(p.jsx)(Ee,{dimensions:{rows:8,columns:9},children:Object(p.jsx)(dn,{})})})})}),document.getElementById("app"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ccdf9094.chunk.js.map