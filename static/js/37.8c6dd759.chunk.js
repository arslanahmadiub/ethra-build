(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1015:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(53),l=a(7),c=a(5),i=a(30),o=a(31),d=a(33),m=a(32),u=a(34),f=a(0),g=a.n(f),p=a(23),h=a.n(p),N=a(45),b=a(148),S=a.n(b),v=a(569),E=a.n(v),_=a(539),x=a(554),C=a(568),k=a(538),D=a(266),O=a(560),w=a(597),I=a(555),L=a(563),j=a(18),y=a(192),M=a(629),P=a(574),F=a(124),A=a(22),V=a(48),Y=a(744),B=function(e){var t=e.item,a=Object(j.C)(t.comment),n=Object(j.s)(A.c.BILLING_STATUS_INFO,t.status);return g.a.createElement("tr",{className:"invoice"},g.a.createElement("td",{className:"text-center"},Object(j.h)(t.createdAt,"MM/DD/YYYY HH:mm:a")),g.a.createElement("td",{className:"text-center"},g.a.createElement(V.b,{to:"/provider/billings/manual-invoice/detail/".concat(t.id)},"#",t.invoiceNumber)),g.a.createElement("td",{className:"text-center"},a),g.a.createElement("td",{className:"text-center"},g.a.createElement(Y.a,{color:n?n.color:"danger",className:"badge-dot mr-4"},g.a.createElement("i",{className:"bg-".concat(n?n.color:"danger")}),g.a.createElement("span",{className:"status"},n?n.status:"Unknown"))),g.a.createElement("td",{className:"table-actions text-center"},Object(j.b)(t.amount)))},R=(a(779),function(){return{dropdownStatusName:"Status",status:"",isLoading:!0,isOpenSideBar:!1,dropdownStatusOpen:!1,checkVoidStatus:!1,start_date:"",end_date:""}}),T=function(){return{limit:10,offset:0,selected:0,desc:!1,status:"",ordering:"create_at"}},U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChangeFilterStatus=function(e,t){var n=e.target,s=n.value,r=n.name;"status"===r&&(Number(s)===A.c.BILLING_STATUS.VOID?a.setState({checkVoidStatus:!0}):a.setState({checkVoidStatus:!1})),a.setState({dropdownStatusName:t}),a.filters[r]=s,a.resetFilterData(),a.props.getManualInvoiceList(a.filters)},a.handleFilterVoidBilling=function(e){var t=e.target.checked;t?(a.filters.status=A.c.BILLING_STATUS.VOID,a.setState({dropdownStatusName:"Void created"})):(a.filters.status="",a.setState({dropdownStatusName:"All Status"})),a.setState({checkVoidStatus:t}),a.resetFilterData(),a.props.getManualInvoiceList(a.filters)},a.handleSendInvoice=function(e){alert("send Invoices to: ".concat(e))},a.handleUpdateStatus=function(e,t){var n=e;a.props.updateStatus(n,t)},a.filter=function(){var e=a.state,t=e.start_date,n=e.end_date;a.filters=Object(c.a)({},a.filters,{start_date:t?Object(j.f)(t._d):"",end_date:n?Object(j.f)(n._d):""}),a.resetFilterData(),a.props.getManualInvoiceList(a.filters)},a.sort=function(e){var t=e.target.attributes.name.value;t&&t===a.filters.ordering?a.filters.desc=!a.filters.desc:(a.filters.ordering=t,a.filters.desc=!0),a.resetFilterData(),a.props.getManualInvoiceList(a.filters)},a.handleReactDatetimeChange=function(){var e=Object(l.a)(s.a.mark(function e(t,n){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.state.start_date&&"end_date"===t&&new Date(a.state.start_date._d+"")>new Date(n._d+""))){e.next=6;break}return e.next=3,a.setState({start_date:n,end_date:n});case 3:a.filter(),e.next=15;break;case 6:if(!(a.state.end_date&&"start_date"===t&&new Date(a.state.end_date._d+"")<new Date(n._d+""))){e.next=12;break}return e.next=9,a.setState({start_date:n,end_date:n});case 9:a.filter(),e.next=15;break;case 12:return e.next=14,a.setState(Object(r.a)({},t,n));case 14:a.filter();case 15:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.getClassNameReactDatetimeDays=function(e){if(a.state.start_date&&a.state.end_date,a.state.start_date&&a.state.end_date&&a.state.start_date._d+""!==a.state.end_date._d+""){if(new Date(a.state.end_date._d+"")>new Date(e._d+"")&&new Date(a.state.start_date._d+"")<new Date(e._d+""))return" middle-date";if(a.state.end_date._d+""===e._d+"")return" end-date";if(a.state.start_date._d+""===e._d+"")return" start-date"}return""},a.selectPageSize=function(e){var t=e.target.value;t&&(a.resetFilterData(),a.setState({isOpenSideBar:!1,tickCheckAll:!1}),a.filters.limit=t,a.props.getManualInvoiceList(a.filters))},a.selectPage=function(e){var t=e.selected;a.filters.selected=t||0,a.filters.offset=Math.ceil(t*a.filters.limit),a.setState({isOpenSideBar:!1,tickCheckAll:!1}),a.props.getManualInvoiceList(a.filters)},a.resetFilterData=function(){a.filters.offset=0,a.filters.selected=0},a.clearFilterData=function(){a.filters=T(),a.setState(R()),a.props.getManualInvoiceList(a.filters)},a.toggleSelectStatus=function(){a.setState({dropdownStatusOpen:!a.state.dropdownStatusOpen})},a.exportCSV=Object(l.a)(s.a.mark(function e(){var t,n,r,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=a.props.ManualInvoiceData.result,n=Object(j.k)(t,A.c.BILLING_EXPORT_CSV_CODE.PROVIDER_MANUAL_INVOICE),r=String(h()().valueOf()),l={filename:r,fieldSeparator:",",quoteStrings:'"',decimalSeparator:".",showLabels:!0,showTitle:!1,useTextFile:!1,useBom:!0,useKeysAsHeaders:!0},new M.ExportToCsv(l).generateCsv(n);case 6:case"end":return e.stop()}},e)})),a.state=R(),a.filters=T(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.getManualInvoiceList(this.filters)}},{key:"render",value:function(){var e=this,t=this.state,a=(t.dropdownStatusName,t.dropdownStatusOpen,this.props),n=a.ManualInvoiceData,s=a.loading,r=n.result,l=this.filters,c=l.limit,i=l.selected,o=Math.ceil(n.count/c)||0,d=((i+1)*c<n.count||n.count,n.count,{totalPage:o,selected:this.filters.selected}),m={title:this.filters.ordering,value:this.filters.desc,get:function(e){return this.title===e?"sort ".concat(this.value?"sort-desc":"sort-asc"):"sort"}};return g.a.createElement(g.a.Fragment,null,g.a.createElement(_.a,{className:"list-invoice"},g.a.createElement(x.a,{className:"mt-3"},s&&g.a.createElement(F.a,null),g.a.createElement(C.a,{className:"bg-transparent border-0"},g.a.createElement(k.a,{className:"d-flex justify-content-between align-items-center"},g.a.createElement(_.a,{className:"d-flex justify-content-center justify-content-lg-start",xl:10,lg:10,xs:12},g.a.createElement(k.a,{className:"align-items-center"},g.a.createElement(_.a,{xs:12,sm:5},g.a.createElement(E.a,{className:"custom-date-input",inputProps:{placeholder:"-- start date --"},closeOnSelect:!0,value:this.state.start_date,timeFormat:!1,dateFormat:"MM/DD/YYYY",onChange:function(t){return e.handleReactDatetimeChange("start_date",t)},renderDay:function(t,a,n){var s=t.className;return s+=e.getClassNameReactDatetimeDays(a),g.a.createElement("td",Object.assign({},t,{className:s}),a.date())}})),g.a.createElement("b",{className:"d-sm-block d-none"},"-"),g.a.createElement(_.a,{xs:12,sm:5},g.a.createElement(E.a,{className:"custom-date-input",inputProps:{placeholder:"-- end date --"},closeOnSelect:!0,value:this.state.end_date,timeFormat:!1,dateFormat:"MM/DD/YYYY",onChange:function(t){return e.handleReactDatetimeChange("end_date",t)},renderDay:function(t,a,n){var s=t.className;return s+=e.getClassNameReactDatetimeDays(a),g.a.createElement("td",Object.assign({},t,{className:s}),a.date())}})),g.a.createElement(_.a,{sm:1,className:"d-sm-block d-none"},g.a.createElement("i",{className:"fas fa-calendar-alt"})))),g.a.createElement(_.a,{className:"d-flex justify-content-center justify-content-xl-end mt-lg-3 mt-xl-0",xl:2,lg:2,xs:12},g.a.createElement(k.a,{className:"align-items-center"},g.a.createElement(D.a,{className:"mr-lg-3",color:"primary",size:"sm",onClick:this.exportCSV,disabled:r&&0===r.length},g.a.createElement("span",{className:"btn-inner--text"},"Export"))))))),g.a.createElement(x.a,null,g.a.createElement(O.a,{className:"container-table-billing"},g.a.createElement(w.a,{className:"align-items-center table-sort",responsive:!0},g.a.createElement("thead",{className:"thead-light"},g.a.createElement("tr",null,g.a.createElement("th",{className:"text-center ".concat(m.get("created_at")),name:"created_at",onClick:this.sort}," ","Date Created"," "),g.a.createElement("th",{className:"text-center"}," Invoice number "),g.a.createElement("th",{className:S()("text-center",m.get("comment")),name:"comment",onClick:this.sort}," ","Comment"," "),g.a.createElement("th",{className:"table__header__w-170 text-center ".concat(m.get("status")),name:"status",onClick:this.sort}," ","Status"," "),g.a.createElement("th",{className:S()("text-center",m.get("amount")),name:"amount",onClick:this.sort}," ","Amount"," "))),g.a.createElement("tbody",{className:"client"},r&&r.map(function(t,a){return g.a.createElement(B,{key:a,check:e.handleCheckbox,openSideBar:e.toggleSideBar,item:t,setStatus:e.getProviderUpdateStatus,handleUpdateStatus:e.handleUpdateStatus,handleSendInvoice:e.handleSendInvoice,toggleAction:e.toggleAction})})))),r&&r.length>0&&g.a.createElement(k.a,{className:"d-flex justify-content-md-between justify-content-sm-start mb-3 mx-0"},g.a.createElement(_.a,{className:"d-flex justify-content-center"},o>1&&g.a.createElement(P.a,{setting:d,handleClick:this.selectPage})),g.a.createElement(_.a,{className:"d-flex align-items-baseline mb-md-0 mb-2",xs:"auto"},g.a.createElement(I.a,{onChange:this.selectPageSize,value:c,bsSize:"md",type:"select",name:"selectPageSize",id:"selectPageSize"},g.a.createElement("option",{value:"5"},"5"),g.a.createElement("option",{value:"10"},"10"),g.a.createElement("option",{value:"20"},"20"),g.a.createElement("option",{value:"50"},"50")),g.a.createElement(L.a,{className:"ml-1 text-nowrap"},g.a.createElement("small",null,"Page ","".concat(i+1)," of ","".concat(o))))))))}}]),t}(f.Component),z={getManualInvoiceList:y.f,updateStatus:y.i};t.default=Object(N.b)(function(e){return{ManualInvoiceData:e.billing.manualInvoiceList,loading:e.billing.loading}},z)(U)},574:function(e,t,a){"use strict";var n=a(0),s=a.n(n),r=a(589),l=a.n(r);a(575);t.a=function(e){var t=e.setting,a=e.handleClick;return s.a.createElement(l.a,{previousLabel:s.a.createElement("i",{className:"fas fa-angle-left"}),nextLabel:s.a.createElement("i",{className:"fas fa-angle-right"}),breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",pageCount:t.totalPage,forcePage:t.selected,marginPagesDisplayed:t.marginPages||1,pageRangeDisplayed:t.pageRange||1,onPageChange:a,containerClassName:"pagination pagination-md",subContainerClassName:"page-item",activeClassName:"active",pageLinkClassName:"page-link",pageClassName:"page-item",previousClassName:"page-item",nextClassName:"page-item",previousLinkClassName:"page-link",nextLinkClassName:"page-link",disabledClassName:"disabled"})}},575:function(e,t,a){},779:function(e,t,a){}}]);
//# sourceMappingURL=37.8c6dd759.chunk.js.map