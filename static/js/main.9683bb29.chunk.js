(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n.n(c),r=n(21),i=n.n(r),o=n(22),l=n(8),j=n(9),d=n(12),b=n(11),h=(n(52),n(4)),u=n(23),m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={data:[],menu:!1},a.toggleMenu=a.toggleMenu.bind(Object(u.a)(a)),a}return Object(j.a)(n,[{key:"toggleMenu",value:function(){this.setState({menu:!this.state.menu})}},{key:"render",value:function(){window.onscroll=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("progressBar").style.width=e+"%"};var e=this.state.menu?"show":"";return Object(a.jsxs)("main",{className:"sticky-top",children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark ps-4",children:[Object(a.jsx)(o.b,{className:"navbar-brand",to:"/react-app/home",children:"Home"}),Object(a.jsx)("button",{className:"btn navbar-toggler",type:"button",onClick:this.toggleMenu,children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse "+e,children:Object(a.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(a.jsx)("li",{className:"nav-item ms-4",children:Object(a.jsx)(o.b,{className:"nav-link",to:"/react-app/comments",children:"Comments"})}),Object(a.jsx)("li",{className:"nav-item ms-4",children:Object(a.jsx)(o.b,{className:"nav-link",to:"/react-app/about",children:"About"})}),Object(a.jsx)("li",{className:"nav-item ms-4",children:Object(a.jsx)(o.b,{className:"nav-link",to:"/react-app/events",children:"Events"})})]})})]}),Object(a.jsx)("div",{className:"progress-container",children:Object(a.jsx)("div",{id:"progressBar"})})]})}}]),n}(s.a.Component),O=n(24),p=n.n(O),x=n(18),v=n(110),f=n(111),y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={mainComment:(new k).state.toLoadData},a}return Object(j.a)(n,[{key:"changeOfValue",value:function(e,t){switch(t){case"postId":this.setState((function(t){return{mainComment:Object(x.a)(Object(x.a)({},t.mainComment),{},{postId:e})}}));break;case"id":this.setState((function(t){return{mainComment:Object(x.a)(Object(x.a)({},t.mainComment),{},{id:e})}}));break;case"name":this.setState((function(t){return{mainComment:Object(x.a)(Object(x.a)({},t.mainComment),{},{name:e})}}));break;case"email":this.setState((function(t){return{mainComment:Object(x.a)(Object(x.a)({},t.mainComment),{},{email:e})}}));break;case"body":this.setState((function(t){return{mainComment:Object(x.a)(Object(x.a)({},t.mainComment),{},{body:e})}}))}}},{key:"render",value:function(){return Object(a.jsx)(v.a,{show:this.props.show,onHide:this.props.onClose,children:Object(a.jsxs)(v.a.Dialog,{children:[Object(a.jsx)(v.a.Header,{children:Object(a.jsx)(v.a.Title,{children:"Modal title"})}),Object(a.jsx)(v.a.Body,{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Post Id: "}),this.props.data.postId]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Id: "}),this.props.data.id]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Name: "}),this.props.data.name]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("b",{children:"Email: "}),this.props.data.email]})]})}),Object(a.jsx)(v.a.Footer,{children:Object(a.jsx)(f.a,{variant:"secondary",onClick:this.props.onClose,children:"Close"})})]})})}}]),n}(s.a.Component),g=function(){function e(){Object(l.a)(this,e)}return Object(j.a)(e,null,[{key:"model",value:function(){return{postId:0,id:0,name:"",email:"",body:""}}}]),e}(),k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={data:[],err:[],toLoadData:g.model(),show:!1},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://jsonplaceholder.typicode.com/comments").then((function(t){e.setState({data:t.data})})).catch((function(t){e.setState({err:t})}))}},{key:"openModal",value:function(e){this.setState({toLoadData:e}),this.setState({show:!0})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("main",{children:[Object(a.jsx)(y,{onClose:function(){return e.setState({show:!1})},show:this.state.show,data:this.state.toLoadData}),Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("table",{className:"table table-responsive",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Post Id"}),Object(a.jsx)("th",{children:"Id"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Email"}),Object(a.jsx)("th",{})]})}),Object(a.jsx)("tbody",{children:this.state.data.map((function(t,n){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.postId}),Object(a.jsx)("td",{children:t.id}),Object(a.jsx)("td",{children:t.name}),Object(a.jsx)("td",{children:t.email}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{className:"btn btn-success",onClick:function(){return e.openModal(t)},children:"Open"})})]},n)}))})]})})]})}}]),n}(s.a.Component),C=n(32),N=n.n(C),w=n(45),S=n(109),D=n(26),I=n.n(D),E=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={eventData:[],filterName:"",filterArea:""},a}return Object(j.a)(n,[{key:"getEvent",value:function(){var e=Object(w.a)(N.a.mark((function e(t,n){var a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("http://localhost:5000/event");case 3:return a=e.sent,e.abrupt("return",a.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.getEvent("","").then((function(t){return e.setState({eventData:t})}))}},{key:"render",value:function(){var e=this,t=this.state.eventData.filter((function(t){var n=e.state.filterArea?t[e.state.filterArea].toString():t.file_name;return e.state.filterArea&&console.log(t[e.state.filterArea]),n.toLowerCase().includes(e.state.filterName.toLowerCase())})),n=this.state.eventData;return I.a.locale("hu"),Object(a.jsxs)("main",{children:[Object(a.jsxs)(S.a,{children:[Object(a.jsx)("select",{name:"filterArea",id:"filterArea",onChange:function(t){return e.setState({filterArea:t.target.value})},children:n[0]?Object.keys(n[0]).map((function(e,t){return Object(a.jsx)("option",{value:e,children:e},t)})):null}),Object(a.jsx)("input",{type:"text",name:"filter",id:"filter",placeholder:"filter goes here...",onChange:function(t){e.setState({filterName:t.target.value})}})]}),Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("table",{className:"table table-responsive",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Id"}),Object(a.jsx)("th",{children:"File Name"}),Object(a.jsx)("th",{children:"Name"}),Object(a.jsx)("th",{children:"Created at"}),Object(a.jsx)("th",{children:"Event"})]})}),Object(a.jsx)("tbody",{children:t.map((function(e,t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.id}),Object(a.jsx)("td",{children:e.file_name}),Object(a.jsx)("td",{children:e.login_name}),Object(a.jsxs)("td",{children:[I()(e.timestamp).format("yyyy-MM-DD"),Object(a.jsx)("br",{}),I()(e.timestamp).format("hh:mm:ss")]}),Object(a.jsx)("td",{children:e.event})]},t)}))})]})})]})}}]),n}(s.a.Component),M=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("main",{children:Object(a.jsx)("h1",{children:"This is the home page!"})})}}]),n}(s.a.Component),A=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("main",{children:Object(a.jsx)("h2",{children:"This is a sample about page"})})}}]),n}(s.a.Component),L=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("main",{children:[Object(a.jsx)(m,{}),Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{path:"/react-app/comments",component:k}),Object(a.jsx)(h.a,{path:"/react-app/events",component:E}),Object(a.jsx)(h.a,{path:"/react-app/about",component:A}),Object(a.jsx)(h.a,{path:"/react-app/home",component:M})]})]})}}]),n}(s.a.Component);n(81),n(82);i.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(L,{})}),document.getElementById("root"))},52:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.9683bb29.chunk.js.map