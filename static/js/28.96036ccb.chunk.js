(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{568:function(e,a,t){"use strict";var n=t(12),c=t(15),l=t(0),s=t.n(l),r=t(4),m=t.n(r),o=t(14),u=t.n(o),d=t(6),i={tag:d.p,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),m=Object(d.l)(u()(a,"card-header"),t);return s.a.createElement(l,Object(n.a)({},r,{className:m}))};p.propTypes=i,p.defaultProps={tag:"div"},a.a=p},583:function(e,a,t){"use strict";var n=t(12),c=t(15),l=t(0),s=t.n(l),r=t(4),m=t.n(r),o=t(14),u=t.n(o),d=t(6),i={tag:d.p,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),m=Object(d.l)(u()(a,"card-footer"),t);return s.a.createElement(l,Object(n.a)({},r,{className:m}))};p.propTypes=i,p.defaultProps={tag:"div"},a.a=p},596:function(e,a,t){"use strict";var n=t(12),c=t(15),l=t(0),s=t.n(l),r=t(4),m=t.n(r),o=t(14),u=t.n(o),d=t(6),i={tag:d.p,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=Object(c.a)(e,["className","cssModule","tag"]),m=Object(d.l)(u()(a,"input-group-text"),t);return s.a.createElement(l,Object(n.a)({},r,{className:m}))};p.propTypes=i,p.defaultProps={tag:"span"},a.a=p},625:function(e,a,t){"use strict";var n=t(12),c=t(15),l=t(0),s=t.n(l),r=t(4),m=t.n(r),o=t(14),u=t.n(o),d=t(6),i={tag:d.p,size:m.a.string,className:m.a.string,cssModule:m.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=e.size,m=Object(c.a)(e,["className","cssModule","tag","size"]),o=Object(d.l)(u()(a,"input-group",r?"input-group-"+r:null),t);return s.a.createElement(l,Object(n.a)({},m,{className:o}))};p.propTypes=i,p.defaultProps={tag:"div"},a.a=p},651:function(e,a,t){"use strict";var n=t(12),c=t(15),l=t(0),s=t.n(l),r=t(4),m=t.n(r),o=t(14),u=t.n(o),d=t(6),i=t(596),p={tag:d.p,addonType:m.a.oneOf(["prepend","append"]).isRequired,children:m.a.node,className:m.a.string,cssModule:m.a.object},E=function(e){var a=e.className,t=e.cssModule,l=e.tag,r=e.addonType,m=e.children,o=Object(c.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(d.l)(u()(a,"input-group-"+r),t);return"string"===typeof m?s.a.createElement(l,Object(n.a)({},o,{className:p}),s.a.createElement(i.a,{children:m})):s.a.createElement(l,Object(n.a)({},o,{className:p,children:m}))};E.propTypes=p,E.defaultProps={tag:"div"},a.a=E},854:function(e,a,t){},980:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return x});var n=t(0),c=t.n(n),l=t(23),s=t.n(l),r=t(45),m=t(569),o=t.n(m),u=t(536),d=t(554),i=t(568),p=t(538),E=t(539),b=t(555),N=t(560),g=t(625),f=t(651),j=t(596),O=t(583),v=t(266),y=t(124),h=t(18),M=t(192);t(854);function x(e){var a=Object(r.c)(),t=e.match.params.id,l=Object(r.d)(function(e){return e.billing.data}),m=Object(r.d)(function(e){return e.billing.loading});Object(n.useEffect)(function(){a(Object(M.e)(t))},[]);var x=l.invoiceNumber,T=l.provider,w=l.date,P=l.comment,k=l.amount,D=Object(h.x)(T);return c.a.createElement(u.a,{className:"create-invoice"},m&&c.a.createElement(y.a,null),c.a.createElement(d.a,null,c.a.createElement(i.a,null,c.a.createElement(p.a,{className:"d-flex"},c.a.createElement(E.a,{md:6,xs:12,className:"d-flex flex-column align-items-center"},c.a.createElement("h2",null,c.a.createElement("b",{className:"text-primary"},"EtheraPay")),c.a.createElement("small",null,"Invoice: #",x)),c.a.createElement(E.a,{md:6,xs:12,className:"mt-3 mt-md-0"},c.a.createElement(p.a,{className:"d-flex align-items-center justify-content-center"},c.a.createElement("b",{className:"text-primary mr-3"},"Provider:"),c.a.createElement("div",{className:"width-200"},c.a.createElement(b.a,{value:D,name:"provider",readOnly:!0})))))),c.a.createElement(N.a,null,c.a.createElement(p.a,{className:"tb-custom"},c.a.createElement(E.a,{md:4,lg:3},c.a.createElement(p.a,{className:"header"},c.a.createElement("b",null,"Date")),c.a.createElement(p.a,{className:"body"},c.a.createElement(o.a,{className:"rdt",id:"date",value:s()(w),inputProps:{placeholder:"MM/DD/YYYY"},closeOnSelect:!0,dateFormat:!0,timeFormat:!1,readOnly:!0}))),c.a.createElement(E.a,{md:6,lg:7},c.a.createElement(p.a,{className:"header"},c.a.createElement("b",null,"Comment")),c.a.createElement(p.a,{className:"body"},c.a.createElement(b.a,{name:"comment",defaultValue:P,placeholder:"Type comment...",readOnly:!0}))),c.a.createElement(E.a,{md:2,lg:2},c.a.createElement(p.a,{className:"header"},c.a.createElement("b",null,"Amount")),c.a.createElement(p.a,{className:"body"},c.a.createElement(g.a,null,c.a.createElement(b.a,{step:"0.01",name:"amount",defaultValue:k,placeholder:"Type amount...",min:"0",readOnly:!0}),c.a.createElement(f.a,{addonType:"append"},c.a.createElement(j.a,null,c.a.createElement("i",{className:"fas fa-dollar-sign"})))))))),c.a.createElement(O.a,null,c.a.createElement(E.a,{sm:12,className:"text-center"},c.a.createElement("span",{className:"font-weight-bold"},"Total Amount Due: $",Object(h.b)(k))),c.a.createElement(p.a,{className:"mt-3"},c.a.createElement(E.a,{className:"text-center"},c.a.createElement(v.a,{color:"secondary",onClick:function(){return e.history.goBack()}},"Go Back"))))))}}}]);
//# sourceMappingURL=28.96036ccb.chunk.js.map