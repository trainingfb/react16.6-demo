(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{39:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(9),r=a(11),c=a(10),u=a(12),o=a(1),s=a.n(o),i=function(e){return s.a.createElement("h1",null,"Value: ",e.val)},m=i,v=s.a.memo(i),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,u=new Array(l),o=0;o<l;o++)u[o]=arguments[o];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(u)))).state={value:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){e.setState({value:"hello"})},1e3)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h3",null,this.state.value),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col"},s.a.createElement("pre",null,"Render always"),s.a.createElement(m,{val:this.state.value})),s.a.createElement("div",{className:"col"},s.a.createElement("pre",null,"Render when necessary (memo)"),s.a.createElement(v,{val:this.state.value}))),s.a.createElement("pre",null,"Open React Dev Tools to check renders"))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}}]),t}(o.Component);t.default=h}}]);
//# sourceMappingURL=2.46a6f66c.chunk.js.map