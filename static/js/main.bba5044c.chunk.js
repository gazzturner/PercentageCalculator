(this["webpackJsonppercentage-calculator"]=this["webpackJsonppercentage-calculator"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(6),r=n.n(o),i=(n(12),n(1)),c=n(2),u=n(4),s=n(3),m=(n(13),function(e){return l.a.createElement("div",null,"Amount for client: \xa3",e.finalAmount)}),d=function(e){return l.a.createElement("div",null,"\xa3",e.additionalPayment)},h=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).setTotal=function(e){a.setState({total:e.target.value})},a.setPercentage=function(e){a.setState({percentageTaken:e.target.value})},a.generatePercentage=function(){var e=a.state.total/100*a.state.percentageTaken,t=0;a.state.additionalPayments.forEach((function(e){t+=parseFloat(e)})),e+=parseFloat(t),a.setState({amountForClient:a.state.total-e})},a.setAdditionalPayment=function(e){a.setState({newAdditionalPayment:e.target.value})},a.addAdditionalPayment=function(){var e=a.state.additionalPayments;e.push(a.state.newAdditionalPayment),a.setState({newAdditionalPayment:null}),a.setState({additionalPayments:e})},a.resetForm=function(){window.location.reload()},a.state={total:null,percentageTaken:null,additionalPayments:[],amountForClient:null,newAdditionalPayment:null},a}return Object(c.a)(n,[{key:"render",value:function(){var e;return e=this.state.additionalPayments.map((function(e,t){return l.a.createElement(d,{additionalPayment:e})})),l.a.createElement("div",null,"Enter Total Damages: \xa3",l.a.createElement("input",{value:this.state.total,onChange:this.setTotal}),l.a.createElement("br",null),"Enter Percentage Taken: ",l.a.createElement("input",{value:this.state.percentageTaken,onChange:this.setPercentage}),"%",l.a.createElement("br",null),"Add An Additional Payment: ",l.a.createElement("input",{value:this.state.newAdditionalPayment,onChange:this.setAdditionalPayment})," ",l.a.createElement("button",{onClick:this.addAdditionalPayment},"+"),l.a.createElement("br",null),"Additional Payments: ",e,l.a.createElement("br",null),l.a.createElement("button",{onClick:this.generatePercentage},"Generate"),l.a.createElement("br",null),l.a.createElement(m,{finalAmount:this.state.amountForClient}),l.a.createElement("button",{onClick:this.resetForm},"Reset Form"))}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"This is for my own purposes and should not be used for actual cases"),l.a.createElement(h,null))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.bba5044c.chunk.js.map