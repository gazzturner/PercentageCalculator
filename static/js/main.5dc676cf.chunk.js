(this["webpackJsonppercentage-calculator"]=this["webpackJsonppercentage-calculator"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),l=n.n(a),o=n(6),r=n.n(o),i=(n(12),n(1)),c=n(2),s=n(4),u=n(3),m=(n(13),n(14),function(t){var e=null!=t.finalAmount?t.finalAmount:0,n=parseFloat(e).toFixed(2);return l.a.createElement("div",{className:"resultFormatting"},"Amount for client: \xa3",n)}),d=function(t){return l.a.createElement("div",null,"\xa3",t.additionalPayment)},h=(n(15),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).setTotal=function(t){a.setState({total:t.target.value})},a.setPercentage=function(t){a.setState({percentageTaken:t.target.value})},a.generatePercentage=function(){var t=a.state.total/100*a.state.percentageTaken,e=0;a.state.additionalPayments.forEach((function(t){e+=parseFloat(t)})),t+=parseFloat(e),a.setState({amountForClient:a.state.total-t})},a.setAdditionalPayment=function(t){a.setState({newAdditionalPayment:t.target.value})},a.addAdditionalPayment=function(){var t=a.state.additionalPayments;t.push(a.state.newAdditionalPayment),a.setState({newAdditionalPayment:null}),a.setState({additionalPayments:t})},a.resetForm=function(){window.location.reload()},a.state={total:null,percentageTaken:null,additionalPayments:[],amountForClient:null,newAdditionalPayment:null},a}return Object(c.a)(n,[{key:"render",value:function(){var t;return t=this.state.additionalPayments.map((function(t,e){return l.a.createElement(d,{additionalPayment:t})})),l.a.createElement("div",null,"Enter Total Damages: \xa3",l.a.createElement("input",{value:this.state.total,onChange:this.setTotal,type:"number"}),l.a.createElement("br",null),"Enter Percentage Taken: ",l.a.createElement("input",{value:this.state.percentageTaken,onChange:this.setPercentage,type:"number",min:"0",max:"100"}),"%",l.a.createElement("br",null),"Add An Additional Payment: ",l.a.createElement("input",{value:this.state.newAdditionalPayment,onChange:this.setAdditionalPayment,type:"number"}),l.a.createElement("button",{onClick:this.addAdditionalPayment,className:"button"},"+"),l.a.createElement("br",null),"Additional Payments: ",t,l.a.createElement("br",null),l.a.createElement("button",{onClick:this.generatePercentage,className:"button"},"Generate"),l.a.createElement("br",null),l.a.createElement(m,{finalAmount:this.state.amountForClient}),l.a.createElement("button",{className:"resetButton",onClick:this.resetForm},"Reset Form"))}}]),n}(a.Component)),f=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"This is for my own purposes and should not be used for actual cases"),l.a.createElement(h,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5dc676cf.chunk.js.map