(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{14:function(e,t,n){e.exports={board:"Board_board__f4OWs"}},15:function(e,t,n){e.exports=n(21)},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),l=n.n(c),u=n(2),o=n(3),i=n(6),s=n(5),b=n(12),d=n(7),f=n.n(d),m=n(9),v=n(13),k=n(14),C=n.n(k),p=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]],h=0,E=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleClick=function(){var e=Object(v.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.persist(),!a.state.x){e.next=8;break}return t.target.textContent="X",t.target.setAttribute("disabled","disabled"),e.next=6,a.setState({xRow:[].concat(Object(m.a)(a.state.xRow),[Number(t.target.value)]),x:!1});case 6:e.next=12;break;case 8:return t.target.textContent="O",t.target.setAttribute("disabled","disabled"),e.next=12,a.setState({oRow:[].concat(Object(m.a)(a.state.oRow),[Number(t.target.value)]),x:!0});case 12:a.isAWin()&&window.location.reload();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.isAWin=function(){h+=1;var e,t=Object(b.a)(p);try{for(t.s();!(e=t.n()).done;){var n=e.value,r=n.every((function(e){return a.state.xRow.includes(e)})),c=n.every((function(e){return a.state.oRow.includes(e)}));if(r)return alert("X WINS"),!0;if(c)return alert("O WINS"),!0;if(9===h)return alert("DRAW"),!0}}catch(l){t.e(l)}finally{t.f()}},a.state={x:!0,xRow:[],oRow:[]},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:C.a.board},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},value:"1"}),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},value:"2"}),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},value:"3"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},value:"4"}),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},value:"5"}),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},value:"6"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},value:"7"}),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},value:"8"}),r.a.createElement("button",{onClick:function(t){return e.handleClick(t)},value:"9"})))}}]),n}(r.a.Component),x=n(8),O=n.n(x),w=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:O.a.bar},r.a.createElement("p",{className:O.a.game},"TIC TAC TOE")),r.a.createElement(E,null))}}]),n}(r.a.Component);l.a.render(r.a.createElement(w,null),document.getElementById("root"))},8:function(e,t,n){e.exports={bar:"App_bar__QAs-B",game:"App_game__NhAjg"}}},[[15,1,2]]]);
//# sourceMappingURL=main.2c95a5f8.chunk.js.map