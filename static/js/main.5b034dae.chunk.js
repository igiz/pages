(this.webpackJsonppages=this.webpackJsonppages||[]).push([[0],{19:function(n){n.exports=JSON.parse('{"links":[{"link":"","text":"About Me \ud83d\ude1c"},{"link":"","text":"Education \ud83c\udfeb"},{"link":"","text":"Past Experience \u270f"},{"link":"","text":"Technology Stack \ud83d\udc68\u200d\ud83d\udcbb"},{"link":"","text":"Links \ud83d\udcce"},{"link":"","text":"Contact Me \ud83d\udcde"}]}')},25:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r,i,c=t(1),o=t.n(c),a=t(6),s=t.n(a),d=(t(25),t(2)),l=t(3),u=t(4),h=t(0),j=l.a.div(r||(r=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    font-size: 19pt;\n    padding: 0 1rem 0 1rem;\n"]))),p=function(){var n=Object(c.useState)(new Date),e=Object(u.a)(n,2),t=e[0],r=e[1];return Object(c.useEffect)((function(){var n=setInterval((function(){r(new Date)}),1e3);return function(){return clearInterval(n)}}),[]),Object(h.jsx)(j,{children:t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0}).toUpperCase()})},b=t.p+"static/media/plug.ccebd3d4.svg",f=t.p+"static/media/computer.d8a6fb63.svg",m=t(20);!function(n){n.Open="OpenApp",n.Close="CloseApp"}(i||(i={}));var x,g,O,w,v,k,y,C,A,I,D,S,T,M,q,E,F,L,P,z,N,J,Q,B,H,R,U,Z,K,V,W,_,G,X,Y=function(n){return{type:i.Close,payload:n}},$=function(n){return{type:i.Open,payload:n}},nn=Object(c.createContext)({}),en=function(n){var e=n.children,t=Object(c.useReducer)((function(n,e){var t={running:Object(m.a)({},n.running)};switch(e.type){case i.Open:t.running[e.payload.appId]=e.payload;break;case i.Close:delete t.running[e.payload.appId];break;default:throw new Error}return t}),{},(function(n){return{running:n}})),r=Object(u.a)(t,2),o=r[0],a=r[1];return Object(h.jsx)(nn.Provider,{value:{isOpen:function(n){return void 0!==o.running[n]},state:o,dispatch:a},children:e})},tn=l.a.div(x||(x=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    height: ",";\n    width: 100%;\n    background-color: #F5F0F0;\n    box-shadow: inset 0 0 3px #111010b0;\n"])),(function(n){return n.height})),rn=l.a.div(g||(g=Object(d.a)(["\n    display: flex;\n    width: 50%;\n"]))),cn=l.a.div(O||(O=Object(d.a)(["\n    display: flex;\n    flex-direction: row-reverse;\n    width: 50%;\n"]))),on=l.a.div(w||(w=Object(d.a)(["\n    width: 14em;\n    box-shadow: 0px 2px 5px 0px #aaa8a8 inset;\n    display: flex;\n    align-items: center;\n    padding: 0 0.5em 0 0.5em;\n    p {\n        width: auto;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n"]))),an=l.a.img(v||(v=Object(d.a)(["\n    width: 34px;\n    height: 100%;\n    padding: 0 0.5rem 0 0.5rem;\n"]))),sn=function(n){var e=n.height,t=Object(c.useContext)(nn).state;return Object(h.jsxs)(tn,{height:e,children:[Object(h.jsxs)(rn,{children:[Object(h.jsx)(an,{src:f}),Object.values(t.running).map((function(n){return Object(h.jsxs)(on,{children:[Object(h.jsx)(an,{src:n.appLogo}),Object(h.jsx)("p",{children:n.name})]})}))]}),Object(h.jsxs)(cn,{children:[Object(h.jsx)(an,{src:b}),Object(h.jsx)(p,{})]})]})},dn=t.p+"static/media/duck.e4fa0349.svg",ln=t.p+"static/media/cursor.25fe7b37.svg",un=t.p+"static/media/folder.9d5e3359.svg",hn=t.p+"static/media/computer-shiny.5aa929f3.svg",jn=t.p+"static/media/github.04be58c1.svg",pn=t.p+"static/media/console.d7e6d62d.svg",bn={appId:"cvApp",name:"CvApp - Zygimantas Raugas",appLogo:pn},fn=l.a.div(k||(k=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 1280px;\n    height: 720px;\n"]))),mn=l.a.div(y||(y=Object(d.a)(["\n    display: block;\n    width: 100%;\n    height: 100%;\n    background-color: #111010;\n    cursor: url(",") , auto;\n"])),ln),xn=l.a.div(C||(C=Object(d.a)(["\n    display: flex;\n    position: relative;\n    height: ",";\n    width: 100%;\n"])),(function(n){return n.height})),gn=l.a.p(A||(A=Object(d.a)(["\n    align-self: flex-end;\n    color: #8D8080;\n    white-space: nowrap;\n"]))),On=l.a.div(I||(I=Object(d.a)(["\n    font-size: 22pt;\n    display: flex;\n    position: absolute;\n    bottom: 0;\n    padding-bottom: 2%;\n    padding-left: 0%;\n"]))),wn=l.a.img(D||(D=Object(d.a)(["\n    width: 70%;\n    height: 70%;\n"]))),vn=l.a.p(S||(S=Object(d.a)(["\n    color: white;\n    margin: 0;\n"]))),kn=l.a.div(T||(T=Object(d.a)(["\n    position: absolute;\n    display: grid;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-content: center;\n    grid-template-columns: repeat(",", ","%);\n    grid-template-rows: repeat(",", ","%);\n    grid-auto-flow: column;\n    grid-row-gap: 2%;\n    grid-column-gap: 2%;\n"])),(function(n){return n.columns}),(function(n){return(100-2*n.columns)/n.columns}),(function(n){return n.rows}),(function(n){return(100-2*n.rows)/n.rows})),yn=l.a.a(M||(M=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: auto;\n    height: auto;\n    ","\n    ","\n    text-align: center;\n\n    :hover {\n        border: 1px dashed #3d3d3d;\n        border-radius: 0.25em;\n        cursor: pointer;\n    }\n"])),(function(n){return n.row?"grid-row: ".concat(n.row,";"):""}),(function(n){return n.column?"grid-column: ".concat(n.column,";"):""})),Cn=l.a.img(q||(q=Object(d.a)(["\n    animation: flip 10s steps(360) infinite;\n    @keyframes flip {\n        from {\n            transform: rotate3d(0, 1, 0, 0deg);\n        }\n        to {\n            transform: rotate3d(0, 1, 0, -360deg);\n        }\n    }\n"]))),An=function(n){var e=n.iconText,t=n.iconImage,r=n.row,i=n.column,c=n.link,o=n.action;return Object(h.jsxs)(yn,{href:c,onClick:o,target:"_blank",rel:"noreferrer",row:r,column:i,children:[Object(h.jsx)(wn,{src:t}),Object(h.jsx)(vn,{children:e})]})},In=function(){return Object(h.jsxs)(On,{children:[Object(h.jsx)(Cn,{src:dn,title:"Quack",alt:"Mr Duck"}),Object(h.jsx)(gn,{children:"QUACKOS 0.3"})]})},Dn=function(n){var e=n.children,t=n.dimensions,r=Object(c.useContext)(nn).dispatch;return Object(h.jsx)(fn,{children:Object(h.jsxs)(mn,{children:[Object(h.jsx)(sn,{height:"6%"}),Object(h.jsxs)(xn,{height:"94%",children:[Object(h.jsx)(In,{}),Object(h.jsxs)(kn,{rows:t.rows,columns:t.columns,children:[Object(h.jsx)(An,{iconText:"Computer",iconImage:hn}),Object(h.jsx)(An,{iconText:"Super Secret",iconImage:un}),Object(h.jsx)(An,{iconText:"CV App",iconImage:pn,action:function(){return r($(bn))}}),Object(h.jsx)(An,{iconText:"Source Code",iconImage:jn,link:"https://github.com/igiz/pages/tree/master",row:t.rows,column:t.columns})]}),e]})]})})},Sn=l.a.div(E||(E=Object(d.a)(["\n    align-content: center;\n    border-radius: 20px;\n    background-color: ",";\n    border: 20px solid ",";\n    box-shadow: 3px 4px 3px 3px ",";\n    width: 1286px;\n    height: 726px;\n"])),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.frameOutline})),Tn=l.a.div(F||(F=Object(d.a)(["\n    height: 80px;\n    width: 150px;\n    background-color: ",";\n"])),(function(n){return n.color})),Mn=l.a.div(L||(L=Object(d.a)(["\n    height: 35px;\n    width: 800px;\n    background-color: ",";\n    border-radius: 5px;\n"])),(function(n){return n.color})),qn=l.a.div(P||(P=Object(d.a)(["\n    overflow-x: hidden;\n    overflow-y: hidden;\n    border-radius: 5px;\n    border: 3px solid ",";\n"])),(function(n){return n.borderColor})),En=l.a.div(z||(z=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),Fn=function(n){var e=n.frameColor,t=n.frameOutline;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Tn,{color:e,frameOutline:t}),Object(h.jsx)(Mn,{color:e,frameOutline:t})]})},Ln=function(n){var e=n.children,t="#000000";return Object(h.jsxs)(En,{children:[Object(h.jsx)(Sn,{color:"#545564",frameOutline:t,children:Object(h.jsx)(qn,{borderColor:t,children:e})}),Object(h.jsx)(Fn,{frameColor:"#000000",frameOutline:"#ffffff"})]})},Pn=t(18),zn=t.n(Pn),Nn=l.a.div(N||(N=Object(d.a)(["\n    display: flex;\n    flex-direction: row;\n    border-bottom: 0.2rem solid #36ADAD;\n    border-left: 0.2rem solid #36ADAD;\n    border-right: 0.2rem solid #36ADAD;\n    overflow-y: scroll;\n    overflow-x: hidden;\n    background-color: #292323;\n\n    ::-webkit-scrollbar {\n        width: 0.4rem;\n    }\n\n    ::-webkit-scrollbar-track {\n        background: #363232;\n    }\n\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: #575353;\n    }\n"]))),Jn=l.a.div(J||(J=Object(d.a)(["\n    display: flex;\n    flex-direction: row-reverse;\n    background-color: #36ADAD;\n    padding: 0.2rem;\n"]))),Qn=l.a.div(Q||(Q=Object(d.a)(["\n    width: ",";\n    height: ",";\n    position: relative;\n    left: ",";\n    top: 10%;\n    transition: opacity 0.5s, left 1s;\n    opacity: ",";\n"])),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.left}),(function(n){return n.opacity})),Bn=l.a.div(B||(B=Object(d.a)(["\n    display: flex;\n    height: 1.5rem;\n    width: 1.5rem;\n    background-color: #292323;\n    border-radius: 0.3rem;\n    justify-content: center;\n    align-items: center;\n    transition: background-color 1s;\n    :hover {\n        background-color: #000000;\n        cursor: pointer;\n    }\n"]))),Hn=l.a.div(H||(H=Object(d.a)(["\n    width: 100%;\n    user-select: none;\n"]))),Rn=l.a.p(R||(R=Object(d.a)(["\n    color: #ffffff;\n    font-weight: 400;\n    margin: 0;\n    margin-left: 0.2em;\n"]))),Un=l.a.div(U||(U=Object(d.a)(["\n  width: 1rem;\n  height: 1rem;\n  background-color: #FB9632;\n  border-radius: 50%;\n  transition: background-color 1s , border-radius 1s, height 1s;\n  :hover {\n        background-color: #ff0000;\n        border-radius: 0;\n        height: 7px;\n        cursor: pointer;\n  }\n"]))),Zn=function(n){var e=n.appInfo,t=Object(c.useContext)(nn).dispatch;return Object(h.jsxs)(Jn,{className:"handle",children:[Object(h.jsx)(Bn,{onMouseDown:function(){return t(Y(e))},children:Object(h.jsx)(Un,{})}),Object(h.jsx)(Hn,{children:Object(h.jsx)(Rn,{children:e.name})})]})},Kn=function(n){var e=n.appInfo,t=n.children,r=n.dimensions,i=Object(c.useState)(0),o=Object(u.a)(i,2),a=o[0],s=o[1],d=Object(c.useState)("0%"),l=Object(u.a)(d,2),j=l[0],p=l[1];return Object(c.useEffect)((function(){setTimeout((function(){s(1),p("15%")}),50)}),[]),Object(h.jsx)(zn.a,{bounds:"parent",handle:".handle",children:Object(h.jsxs)(Qn,{height:r.height,width:r.width,opacity:a,left:j,children:[Object(h.jsx)(Zn,{appInfo:e}),Object(h.jsx)(Nn,{children:t})]})})},Vn=t(19),Wn=t.p+"static/media/profile.87bcfedc.jpg",_n=l.a.span(Z||(Z=Object(d.a)(["\n    color: ",";\n"])),(function(n){return n.color})),Gn=l.a.p(K||(K=Object(d.a)(["\n    * {\n        margin-left: 0.5em;\n    }\n"]))),Xn=l.a.span(V||(V=Object(d.a)(["\n    color: ",";\n    display: inline-flex;\n    overflow: hidden;\n    padding-right: 0.1rem;\n    border-right: 0.2rem solid #959e97;\n    white-space: nowrap;\n\n    animation:\n        typewriter 3s steps(",", end),\n        blink-caret 1s step-end infinite;\n\n    @keyframes typewriter {\n        from { width: 0 }\n        to { width: ","em } // This calculation is such a hack for now , whoops\n    }\n\n    @keyframes blink-caret {\n        from, to { border-color: transparent }\n        50% { border-color: #959e97; }\n    }\n"])),(function(n){return n.color}),(function(n){return n.charCount}),(function(n){return n.charCount/2.5})),Yn=l.a.div(W||(W=Object(d.a)(["\n    display: flex;\n    flex-direction: ",";\n    flex-basis: 100%;\n"])),(function(n){return n.direction})),$n=l.a.div(_||(_=Object(d.a)(["\n    flex: 3;\n    padding: 0.5rem 0.5rem;\n    border-left: 0.1rem dashed white;\n    border-top: 0.1rem dashed white;\n\n    p {\n        color: #A83A33\n    }\n"]))),ne=l.a.img(G||(G=Object(d.a)(["\n    width: 120px;\n    height: 100px;\n    border: 0.1rem solid white;\n    border-radius: 5px;\n    margin: 1rem;\n"]))),ee=l.a.div(X||(X=Object(d.a)(['\n    flex: 1;\n    flex-direction: column;\n    font-size: 12pt;\n\n    * {\n        margin-left: 0.5em;\n    }\n\n    a {\n        text-decoration: none;\n        color: #ffffff;\n\n        :hover {\n            color: #76C7F5;\n            text-decoration: underline;\n        }\n\n        :hover:before {\n            content: ">"\n        }\n\n        :hover:after{\n            content: "<";\n        }\n    }\n']))),te=function(n){var e=n.message;return Object(h.jsxs)(Gn,{children:[Object(h.jsx)(_n,{color:"#33A846",children:"[user@home~]"}),Object(h.jsx)(Xn,{charCount:e.length,color:"#A83A33",children:e})]})},re=function(){var n=Vn.links;return Object(h.jsxs)(Yn,{direction:"column",children:[Object(h.jsx)(te,{message:"Hello there stranger.......... My name is Ziggy"}),Object(h.jsxs)(Yn,{direction:"row",children:[Object(h.jsxs)(ee,{children:[Object(h.jsx)(_n,{color:"white",children:"What would you like to know?"}),Object(h.jsx)("table",{id:"nav",children:n.map((function(n){return Object(h.jsx)("tr",{children:Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:n.link,children:n.text})})})}))})]}),Object(h.jsx)($n,{children:Object(h.jsxs)(Yn,{direction:"row",children:[Object(h.jsx)(ne,{src:Wn}),Object(h.jsxs)(Yn,{direction:"column",children:[Object(h.jsx)(_n,{color:"white",children:"About Me"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet est vitae tortor faucibus vehicula suscipit at neque. Nulla eget efficitur leo. Pellentesque ut neque in tortor tincidunt hendrerit ut ut ante. Suspendisse sodales lectus in sodales semper. Maecenas elit orci, condimentum vitae tellus ut, malesuada feugiat arcu. Nunc euismod tempor vehicula. Duis sem felis, accumsan non elementum vitae, ornare non dolor. Proin sit amet mauris metus. Quisque sit amet accumsan diam. Aliquam rutrum justo vel risus ultrices, v el malesuada magna pretium. Etiam eget dictum ante. Aliquam lacinia, enim in luctus congue, tellus leo laoreet lacus, in volutpat justo orci ut lorem. Proin pellentesque dignissim diam, a accumsan sem suscipit volutpat."}),Object(h.jsx)("p",{children:"(This section will be filled soon , I promise)"}),Object(h.jsx)("p",{children:"\u266a\u250f(\u30fbo\uff65)\u251b\u266a\u2517 ( \uff65o\uff65) \u2513\u266a"})]})]})})]})]})},ie=function(){var n=Object(c.useContext)(nn).state,e=[];for(var t in n.running){switch(n.running[t].appId){case bn.appId:e.push(Object(h.jsx)(Kn,{appInfo:bn,dimensions:{height:"450px",width:"950px"},children:Object(h.jsx)(re,{})}))}}return Object(h.jsx)(h.Fragment,{children:e})};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(en,{children:Object(h.jsx)(Ln,{children:Object(h.jsx)(Dn,{dimensions:{rows:8,columns:9},children:Object(h.jsx)(ie,{})})})})}),document.getElementById("app"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5b034dae.chunk.js.map