(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{568:function(e,t,a){"use strict";var l=a(12),n=a(15),r=a(0),c=a.n(r),s=a(4),m=a.n(s),o=a(14),i=a.n(o),d=a(6),u={tag:d.p,className:m.a.string,cssModule:m.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),m=Object(d.l)(i()(t,"card-header"),a);return c.a.createElement(r,Object(l.a)({},s,{className:m}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b},583:function(e,t,a){"use strict";var l=a(12),n=a(15),r=a(0),c=a.n(r),s=a(4),m=a.n(s),o=a(14),i=a.n(o),d=a(6),u={tag:d.p,className:m.a.string,cssModule:m.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.tag,s=Object(n.a)(e,["className","cssModule","tag"]),m=Object(d.l)(i()(t,"card-footer"),a);return c.a.createElement(r,Object(l.a)({},s,{className:m}))};b.propTypes=u,b.defaultProps={tag:"div"},t.a=b},597:function(e,t,a){"use strict";var l=a(12),n=a(15),r=a(0),c=a.n(r),s=a(4),m=a.n(s),o=a(14),i=a.n(o),d=a(6),u={className:m.a.string,cssModule:m.a.object,size:m.a.string,bordered:m.a.bool,borderless:m.a.bool,striped:m.a.bool,dark:m.a.bool,hover:m.a.bool,responsive:m.a.oneOfType([m.a.bool,m.a.string]),tag:d.p,responsiveTag:d.p,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])},b=function(e){var t=e.className,a=e.cssModule,r=e.size,s=e.bordered,m=e.borderless,o=e.striped,u=e.dark,b=e.hover,E=e.responsive,p=e.tag,f=e.responsiveTag,N=e.innerRef,h=Object(n.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),g=Object(d.l)(i()(t,"table",!!r&&"table-"+r,!!s&&"table-bordered",!!m&&"table-borderless",!!o&&"table-striped",!!u&&"table-dark",!!b&&"table-hover"),a),v=c.a.createElement(p,Object(l.a)({},h,{ref:N,className:g}));if(E){var x=Object(d.l)(!0===E?"table-responsive":"table-responsive-"+E,a);return c.a.createElement(f,{className:x},v)}return v};b.propTypes=u,b.defaultProps={tag:"table",responsiveTag:"div"},t.a=b},633:function(e,t,a){"use strict";a.d(t,"b",function(){return m}),a.d(t,"a",function(){return o});var l=a(5),n=a(658),r=a.n(n),c=(a(632),a(23)),s=a(18),m=function(e,t){var a=new r.a("l","pt"),n={fillColor:[41,128,186],textColor:[255,255,255],fontStyle:"bold"},s=a.internal.pageSize,m=s.width?s.width:s.getWidth();a.text("Billing Invoice",m/2,30,"center"),a.autoTable({html:"#".concat(e),startY:55,didParseCell:function(e){0===e.row.index&&(e.cell.styles=Object(l.a)({},e.cell.styles,n))}}),a.autoTable({html:"#".concat(t),didParseCell:function(e){1===e.row.index&&(e.cell.styles=Object(l.a)({},e.cell.styles,n))}}),a.save("invoice_".concat(String(c().valueOf()),".pdf"))},o=function(e,t,a,n){var m=Object(s.x)(e.provider),o=c(e.bookings&&e.bookings[0].createdAt).startOf("week"),i=c(e.bookings&&e.bookings[0].createdAt).endOf("week"),d=new r.a("l","pt"),u={fillColor:[227,136,91],textColor:[255,255,255],fontStyle:"bold"},b={textColor:[245,54,92]},E=d.internal.pageSize,p=E.width?E.width:E.getWidth(),f="Invoice ".concat(e.invoiceNumber),N=m,h="".concat(Object(s.g)(o)," - ").concat(Object(s.g)(i)),g="TOTAL AMOUNT DUE: "+String(t)+"$";d.text("EtheraPay",p/2,30,"center"),d.text(f,p/2,55,"center"),d.text(N,p/2,80,"center"),d.text(h,p/2,105,"center"),d.autoTable({html:"#".concat(a),startY:120,didParseCell:function(e){var t=e.table.body;e.row.index===t.length-1&&(e.cell.styles=Object(l.a)({},e.cell.styles,u)),"body"===e.section&&e.row.raw.className&&e.row.raw.className.includes("custom-row__cancellation")&&(e.cell.styles=Object(l.a)({},e.cell.styles,b))}}),d.text(g,p/2,d.autoTable.previous.finalY+30,"center"),d.autoTable({html:"#".concat(n),startY:d.autoTable.previous.finalY+50,pageBreak:"always",didParseCell:function(e){var t=e.table.body;e.row.index===t.length-1&&(e.cell.styles=Object(l.a)({},e.cell.styles,u))}}),d.save("Ethera-Pay_".concat(String(c().valueOf()),".pdf"))}},744:function(e,t,a){"use strict";var l=a(12),n=a(15),r=a(0),c=a.n(r),s=a(4),m=a.n(s),o=a(14),i=a.n(o),d=a(6),u={color:m.a.string,pill:m.a.bool,tag:d.p,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),children:m.a.node,className:m.a.string,cssModule:m.a.object},b=function(e){var t=e.className,a=e.cssModule,r=e.color,s=e.innerRef,m=e.pill,o=e.tag,u=Object(n.a)(e,["className","cssModule","color","innerRef","pill","tag"]),b=Object(d.l)(i()(t,"badge","badge-"+r,!!m&&"badge-pill"),a);return u.href&&"span"===o&&(o="a"),c.a.createElement(o,Object(l.a)({},u,{className:b,ref:s}))};b.propTypes=u,b.defaultProps={color:"secondary",pill:!1,tag:"span"},t.a=b},973:function(e,t,a){},974:function(e,t,a){},975:function(e,t,a){},997:function(e,t,a){"use strict";a.r(t);var l=a(76),n=a(0),r=a.n(n),c=a(45),s=a(536),m=a(554),o=a(568),i=a(560),d=a(538),u=a(539),b=a(597),E=a(744),p=a(266),f=a(545),N=a(124),h=a(205),g=a(18),v=(a(973),a(44)),x=a.n(v),O=a(564),j=a(583),y=a(633),S=a(50),C=a(22);a(974);function w(e){var t=e.invoiceId,a=e.isOpen,c=e.toggle,m=Object(n.useState)(""),o=Object(l.a)(m,2),i=o[0],d=o[1],u=Object(n.useState)(0),E=Object(l.a)(u,2),f=E[0],N=E[1],h=Object(n.useState)(""),v=Object(l.a)(h,2),w=v[0],k=v[1],T=Object(n.useState)(""),I=Object(l.a)(T,2),P=I[0],A=I[1],D=Object(n.useState)({}),M=Object(l.a)(D,2),R=M[0],z=M[1],Y=Object(n.useState)({}),U=Object(l.a)(Y,2),_=U[0],$=U[1];Object(n.useEffect)(function(){t&&S.a.invoiceDetail(t).then(function(e){d(e.status),N(e.servicePrice),k(e.createdAt),A(e.invoiceNumber),z(e.appointment),$(e.provider)}).catch(function(e){console.log(e)})},[]);var V=function(e){if(e)return{phoneNumber:e.phoneNumber,email:e.email,address:e.address};return{phoneNumber:"Unknown",email:"Unknown",address:"Unknown"}},B=Object(g.s)(C.c.INVOICE_STATUS_INFO,i),F=Object(g.x)(R.client),W=Object(g.x)(_),J=R.serviceType||"N/A",q=x.a.isNull(R)&&x.a.isNull(R.client)?"":V(R.client),H=x.a.isNull(_)?"":V(_);return r.a.createElement(O.a,{size:"lg",isOpen:a,toggle:c},r.a.createElement(s.a,{className:"invoice-detail"},r.a.createElement("div",{className:"text-right"},r.a.createElement(p.a,{color:"link",onClick:c},r.a.createElement("i",{className:"fas fa-times fa-lg"}))),r.a.createElement(b.a,{className:"align-items-start table-sort mt-3",id:"invoice-table",responsive:!0},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"text-center",colSpan:"5"},r.a.createElement("h1",{className:"text-center text-primary"},"INVOICE")),r.a.createElement("td",{className:"text-left"})),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-muted"},"From:")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},W)),r.a.createElement("td",{className:"text-left"}),r.a.createElement("td",{className:"text-right"},r.a.createElement("h4",{className:"text-md-right"},"Status")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"".concat(B.textColor)},B.status)),r.a.createElement("td",{className:"text-right"})),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-muted"},"To:")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},F)),r.a.createElement("td",{className:"text-left"}),r.a.createElement("td",{className:"text-right border-right"},r.a.createElement("h4",{className:"text-md-right"},"Invoice")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},"#",P))),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left"}),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},q.address||"")),r.a.createElement("td",{className:"text-left"}),r.a.createElement("td",{className:"text-right border-right"},r.a.createElement("h4",{className:"text-md-right"},"Issue Date")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},Object(g.g)(w)))),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:6})),r.a.createElement("tr",null,r.a.createElement("td",{colSpan:6})),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left border-right"},r.a.createElement("h4",{className:"text-md-right"},"Client")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},F)),r.a.createElement("td",{className:"text-left"}),r.a.createElement("td",{className:"text-right border-right"},r.a.createElement("h4",{className:"text-md-right"},"Provider")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},W))),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left border-right"},r.a.createElement("h4",{className:"text-md-right"},"Phone")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},q.phoneNumber)),r.a.createElement("td",{className:"text-left"}),r.a.createElement("td",{className:"text-right border-right"},r.a.createElement("h4",{className:"text-md-right"},"Email")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},H.email))),r.a.createElement("tr",null,r.a.createElement("td",{className:"text-left border-right"},r.a.createElement("h4",{className:"text-md-right"},"Email")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},q.email)),r.a.createElement("td",{className:"text-left"}),r.a.createElement("td",{className:"text-right border-right"},r.a.createElement("h4",{className:"text-md-right"},"Phone")),r.a.createElement("td",{className:"text-left"},r.a.createElement("h4",{className:"text-primary"},H.phoneNumber))))),r.a.createElement(j.a,null,r.a.createElement(b.a,{className:"table-sort align-items-center",id:"total-invoice-table",responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",{style:{backgroundColor:"bisque"}},r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Description"),r.a.createElement("th",{className:"text-right"},"Amount"))),r.a.createElement("tbody",null,r.a.createElement("tr",{style:{backgroundColor:"aliceblue"}},r.a.createElement("td",null,Object(g.g)(w)),r.a.createElement("td",null,r.a.createElement("h4",null,J)),r.a.createElement("td",{className:"text-right"},r.a.createElement("b",null,"$",f)))))),r.a.createElement("div",{className:"text-center mb-3"},r.a.createElement(p.a,{color:"info",onClick:function(){Object(y.b)("invoice-table","total-invoice-table")}},r.a.createElement("i",{className:"fas fa-download fa-lg"})," Download PDF"))))}var k=a(30),T=a(31),I=a(33),P=a(32),A=a(34),D=a(208),M=a(2),R=a.n(M),z=a(7),Y=a(10),U={add:function(){var e=Object(z.a)(R.a.mark(function e(t,a){var l,n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l="".concat("/client-invoices","/").concat(a,"/charge-by-stripe"),e.next=3,Y.a.post(l,{token:t});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()},_=a(8),$=(a(975),function(e,t){return{style:{base:{fontSize:e,color:"#424770",letterSpacing:"0.025em",fontFamily:"Source Code Pro, monospace","::placeholder":{color:"#aab7c4"}},invalid:{color:"#9e2146"}}}}),V=function(e){function t(){var e,a;Object(k.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(I.a)(this,(e=Object(P.a)(t)).call.apply(e,[this].concat(n)))).handleSubmit=function(e){e.preventDefault();var t=a.props.invoiceId;a.props.stripe?a.props.stripe.createToken().then(function(e){if(e.error)_.b.error(e.error.message);else{var l=e.token.id;U.add(l,t).then(function(){_.b.success("Add Payment success !"),a.props.reloadData(t),a.props.toggle()}).catch(function(e){_.b.error(e.message)})}}):console.log("Stripe.js hasn't loaded yet.")},a}return Object(A.a)(t,e),Object(T.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(i.a,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("b",null,"Card number"),r.a.createElement(D.CardNumberElement,$(this.props.fontSize))),r.a.createElement("div",null,r.a.createElement("b",null,"Expiration date"),r.a.createElement(D.CardExpiryElement,$(this.props.fontSize))),r.a.createElement("div",null,r.a.createElement("b",null,"CVC"),r.a.createElement(D.CardCVCElement,$(this.props.fontSize))),r.a.createElement("div",{className:"text-right"},r.a.createElement(p.a,{color:"success"},"Add")))))}}]),t}(n.Component),B=Object(D.injectStripe)(V),F={reloadData:h.c},W=Object(c.b)(null,F)(function(e){var t=e.isOpen,a=e.toggle,l=e.data,n=window.innerWidth<450?"14px":"18px";return r.a.createElement(O.a,{className:"modal-dialog-centered payment-modal",isOpen:t,toggle:a},r.a.createElement("div",{className:"modal-header text-center"},r.a.createElement("h6",{className:"modal-title",id:"modal-title-default"},"Payment Modal"),r.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:a},r.a.createElement("span",{"aria-hidden":!0},"\xd7"))),r.a.createElement("div",{className:"modal-body text-center"},r.a.createElement("div",null,r.a.createElement("b",null,"Charge: $",l.priceRemain)),r.a.createElement("div",null,r.a.createElement("b",null,"Invoice Number: #",l.invoiceNumber))),r.a.createElement(D.Elements,null,r.a.createElement(B,{fontSize:n,invoiceId:l.id,reloadData:e.reloadData,toggle:a})))});t.default=function(e){var t=Object(c.c)(),a=Object(c.d)(function(e){return e.clientInvoice.data}),v=Object(c.d)(function(e){return e.clientInvoice.loading}),x=e.invoiceDetail,O=a.result,j=Object(n.useState)(!0),y=Object(l.a)(j,2),S=y[0],C=y[1],k=function(){C(!S)},T=Object(n.useState)(!1),I=Object(l.a)(T,2),P=I[0],A=I[1],D=Object(n.useState)(!1),M=Object(l.a)(D,2),R=M[0],z=M[1],Y=Object(n.useState)(""),U=Object(l.a)(Y,2),_=U[0],$=U[1],V=Object(n.useState)({}),B=Object(l.a)(V,2),F=B[0],J=B[1],q=Object(n.useState)("updated_at"),H=Object(l.a)(q,1)[0],L=Object(n.useState)(!1),G=Object(l.a)(L,1)[0];Object(n.useEffect)(function(){t(Object(h.a)({ordering:H,desc:G}))},[H,G]);var K=function(e){A(!P),$(e)},Q=function(e){z(!R),J(e)},X=function(e){if(e&&e.length>0){var t=e.map(function(e){return Number(e.priceRemain)});return t&&t.reduce(function(e,t){return e+t})}return 0}(O);return r.a.createElement(s.a,{fluid:!0,className:"client-billing"},P&&r.a.createElement(w,{size:"lg",isOpen:P,toggle:K,invoice:x,invoiceId:_}),R&&r.a.createElement(W,{className:"modal-dialog-centered",isOpen:R,toggle:Q,data:F}),r.a.createElement(m.a,{className:"mx-auto"},r.a.createElement(o.a,{className:"text-center border-bottom mt-2"},r.a.createElement("h2",{className:"mb-3 text-uppercase"},"Billing")),r.a.createElement(i.a,null,r.a.createElement(d.a,null,r.a.createElement(u.a,{md:12,className:"ml-3 mr-3 mb-5 border-right"},r.a.createElement(d.a,null,r.a.createElement("h3",{className:"text-primary"},"CURRENT INVOICES")),r.a.createElement(d.a,{className:"border-bottom"},r.a.createElement(b.a,{className:"current-invoices",responsive:!0},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null)),r.a.createElement("tbody",null,O&&O.map(function(e){var t=Object(g.g)(e.createdAt);return r.a.createElement("tr",{key:e.id,className:"".concat(Number(e.priceRemain)>0?"":"d-none")},r.a.createElement("td",null,r.a.createElement(E.a,{color:"info",pill:!0},r.a.createElement("span",{className:"status"},"DUE"))),r.a.createElement("td",null," ",t," "),r.a.createElement("td",{className:"cursor-pointer"},r.a.createElement(p.a,{color:"primary",onClick:function(){return Q(e)}},"Pay Now")),r.a.createElement("td",{className:"text-center"},"$",Object(g.b)(e.priceRemain)))})))))),r.a.createElement(d.a,null,r.a.createElement(u.a,{md:12,className:"ml-3 mr-3 border-right"},r.a.createElement(d.a,null,r.a.createElement("h3",{className:"text-primary"},"ACCOUNT HISTORY")),r.a.createElement(d.a,{onClick:k,className:"cursor-pointer"},r.a.createElement("div",null,r.a.createElement(p.a,{color:"link"},S?r.a.createElement("i",{className:"fas fa-chevron-up fa-1x"}):r.a.createElement("i",{className:"fas fa-chevron-down fa-1x"}))),r.a.createElement(u.a,null,r.a.createElement("h3",{className:"mt-2 text-info",onClick:k},"ACCOUNT ACTIVITY")),r.a.createElement(u.a,{className:"text-right"},r.a.createElement("i",{className:"far fa-calendar-alt ml-2"}))),r.a.createElement(d.a,{className:"d-block mr-0"},r.a.createElement(f.a,{isOpen:S},v&&r.a.createElement(N.a,null),r.a.createElement(b.a,{className:"account-history",responsive:!0},r.a.createElement("thead",{className:"thead-light"},r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"}),r.a.createElement("th",null," Payments "),r.a.createElement("th",{colSpan:"2"}," Download "))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",{colSpan:"5"},"Balance")),O&&O.map(function(e){var t=Object(g.g)(e.createdAt,"MM/DD/YYYY"),a=Object(g.g)(e.createdAt),l=e.servicePrice,n=e.priceRemain,c=Number(l)-Number(n);return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,t),r.a.createElement("td",{colSpan:"2"},r.a.createElement("div",null,"Invoice #",e.invoiceNumber),r.a.createElement("div",{className:"client-billing__limit-div"},"-",a," ",e.appointment.serviceType," $",Object(g.b)(e.appointment.servicePrice))),r.a.createElement("td",{colSpan:"2"},"$",Object(g.b)(c)),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-link download-invoice",onClick:function(){return K(e.id)}},r.a.createElement("span",{className:"fas fa-download cursor-pointer"}))))}),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",{colSpan:"3"},"Ending Balance"),r.a.createElement("td",{colSpan:"2"},"$",Object(g.b)(X))))))))))))}}}]);
//# sourceMappingURL=20.90b02a5a.chunk.js.map