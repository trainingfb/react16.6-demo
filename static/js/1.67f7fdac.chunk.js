(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{38:function(e,t,n){"use strict";n.r(t);var a=n(8),l=n(9),r=n(11),i=n(10),c=n(12),u=n(1),o=n.n(u);n.d(t,"default",function(){return b});var s=o.a.lazy(function(){return n.e(7).then(n.bind(null,31))}),m=o.a.lazy(function(){return n.e(8).then(n.bind(null,32))}),b=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(r.a)(this,Object(i.a)(t).call(this))).state={one:!1,two:!1},e}return Object(c.a)(t,e),Object(l.a)(t,[{key:"toggleVisibility",value:function(e){this.setState(function(t){return n={},a=e,l=!t[e],a in n?Object.defineProperty(n,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[a]=l,n;var n,a,l})}},{key:"render",value:function(){var e=this,t=this.state,n=t.one,a=t.two;return o.a.createElement("div",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"}),o.a.createElement("div",{className:"col"},o.a.createElement("h1",null,"Lazy / Suspense (load components)"),o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){return e.toggleVisibility("one")}},"Load 1"),o.a.createElement("button",{className:"btn btn-outline-primary",onClick:function(){return e.toggleVisibility("two")}},"Load 2")),o.a.createElement("hr",null),o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",null,"Loading")},n?o.a.createElement(s,null):null),o.a.createElement(u.Suspense,{fallback:o.a.createElement("div",null,"Loading")},a?o.a.createElement(m,null):null)),o.a.createElement("div",{className:"col"})))}}]),t}(u.Component)}}]);
//# sourceMappingURL=1.67f7fdac.chunk.js.map