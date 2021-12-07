(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={Form:"ContactForm_Form__Vd_-O",List:"ContactForm_List__hqbbw",Item:"ContactForm_Item__zMuUx",Label:"ContactForm_Label___hNWO",Input:"ContactForm_Input__HKadG",Btn:"ContactForm_Btn__3lgVJ"}},function(t,e,n){t.exports={List:"ContactsList_List__3AaLz",Item:"ContactsList_Item__13f8s",Name:"ContactsList_Name__1RHl5",Number:"ContactsList_Number__sOUGO",Btn:"ContactsList_Btn__1VkBI"}},,,,,,,function(t){t.exports=JSON.parse('[{"type":"text","name":"name","pattern":"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([\' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","title":"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan"},{"type":"tel","name":"number","pattern":"\\\\+?\\\\d{1,4}?[-.\\\\s]?\\\\(?\\\\d{1,3}?\\\\)?[-.\\\\s]?\\\\d{1,4}[-.\\\\s]?\\\\d{1,4}[-.\\\\s]?\\\\d{1,9}","title":"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}]')},function(t,e,n){t.exports={Label:"Filter_Label__3FoRN",Input:"Filter_Input__20k7U"}},,function(t,e,n){t.exports={Container:"Container_Container__3tQ9A"}},function(t,e,n){t.exports={Section:"Section_Section__LqS2d"}},,function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,,function(t,e,n){},function(t,e,n){},,,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),i=(n(23),n(17)),o=n(5),l=n(6),u=n(8),m=n(7),d=n(18),b=(n(24),n(13)),h=n.n(b),j=n(0),p=function(t){var e=t.children;return Object(j.jsx)("div",{className:h.a.Container,children:e})},f=n(14),_=n.n(f),C=function(t){var e=t.children;return Object(j.jsx)("section",{className:_.a.Section,children:e})},O=n(3),x=n.n(O),N=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:x.a.List,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:x.a.Item,children:[Object(j.jsxs)("p",{className:x.a.Name,children:[a,":"]}),Object(j.jsx)("p",{className:x.a.Number,children:c}),Object(j.jsx)("button",{className:x.a.Btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},v=n(15),L=n(4),y=n.n(L),g=n(10),F=n(2),S=n.n(F),I=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(v.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:S.a.Form,children:[Object(j.jsx)("ul",{className:S.a.List,children:g.map((function(e){var n=e.type,a=e.name,c=e.pattern,r=e.title;return Object(j.jsx)("li",{className:S.a.Item,children:Object(j.jsxs)("label",{className:S.a.Label,children:[a,Object(j.jsx)("input",{className:S.a.Input,type:n,name:a,pattern:c,title:r,value:t.state[a],onChange:t.handleChange,required:!0})]})},a)}))}),Object(j.jsx)("button",{type:"submit",className:S.a.Btn,children:"add contact"})]})}}]),n}(a.Component);g.PropTypes={type:y.a.string.isRequired,name:y.a.string.isRequired,pattern:y.a.string.isRequired,title:y.a.string.isRequired};var A=n(11),B=n.n(A),k=function(t){var e=t.contactName,n=t.onFindContact;return Object(j.jsxs)("label",{className:B.a.Label,htmlFor:"",children:["Find contacts by name",Object(j.jsx)("input",{className:B.a.Input,type:"text",value:e,onChange:n})]})},w=n(16),q=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:w,filter:""},t.addContact=function(e){var n=e.name,a=e.number;t.state.contacts.some((function(t){return n===t.name}))?alert("".concat(n," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[].concat(Object(i.a)(e),[{name:n,number:a,id:Object(d.a)()}])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.findContactsByName=function(e){t.setState({filter:e.currentTarget.value})},t.filterContactList=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.addContact,n=this.findContactsByName,a=this.filterContactList,c=this.deleteContact;return Object(j.jsx)("main",{className:"App",children:Object(j.jsxs)(p,{children:[Object(j.jsxs)(C,{children:[Object(j.jsx)("h1",{className:"Title",children:"Phonebook"}),Object(j.jsx)(I,{onAddContact:e})]}),Object(j.jsxs)(C,{children:[Object(j.jsx)("h2",{className:"Title",children:"Contacts"}),Object(j.jsx)(k,{contactName:t,onFindContact:n}),Object(j.jsx)(N,{contacts:a(),onDeleteContact:c})]})]})})}}]),n}(a.Component),R=q;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.0a64bba4.chunk.js.map