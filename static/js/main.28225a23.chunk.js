(this["webpackJsonpreact-userlistapp"]=this["webpackJsonpreact-userlistapp"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(8),a=n.n(r),i=(n(14),n(9)),j=n(2),u=n(3),d=n(4),b=n(0),l=function(e){var t={id:null,name:"",username:""},n=Object(c.useState)(t),s=Object(j.a)(n,2),r=s[0],a=s[1],i=function(e){var t=e.target,n=t.name,c=t.value;a(Object(d.a)(Object(d.a)({},r),{},Object(u.a)({},n,c)))};return Object(b.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r.name&&r.username&&(e.addUser(r),a(t))},children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",value:r.name,onChange:i}),Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",name:"username",value:r.username,onChange:i}),Object(b.jsx)("button",{className:"btn btn-primary",children:"Add new user"})]})},O=function(e){var t=Object(c.useState)(e.currentUser),n=Object(j.a)(t,2),s=n[0],r=n[1];Object(c.useEffect)((function(){r(e.currentUser)}),[e]);var a=function(e){var t=e.target,n=t.name,c=t.value;r(Object(d.a)(Object(d.a)({},s),{},Object(u.a)({},n,c)))};return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.updateUser(s.id,s)},children:[Object(b.jsx)("label",{children:"Name"}),Object(b.jsx)("input",{type:"text",name:"name",value:s.name,onChange:a}),Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",name:"username",value:s.username,onChange:a}),Object(b.jsx)("button",{className:"btn btn-success",children:"Update user"}),Object(b.jsx)("button",{onClick:function(){return e.setEditing(!1)},className:"btn btn-warning",children:"Cancel"})]})},m=function(e){return Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Username"}),Object(b.jsx)("th",{children:"Modification"})]})}),Object(b.jsx)("tbody",{children:e.users.length>0?e.users.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.username}),Object(b.jsxs)("td",{children:[Object(b.jsx)("button",{onClick:function(){e.editRow(t)},className:"btn btn-outline-secondary",children:" Edit "}),Object(b.jsx)("button",{onClick:function(){return e.deleteUser(t.id)},className:"btn btn-outline-secondary",children:" Delete "})]})]},t.id)})):Object(b.jsx)("tr",{children:Object(b.jsx)("td",{colSpan:3,children:"There are no users "})})})]})},o=function(){var e=Object(c.useState)([{id:1,name:"Attila",username:"atikis87"},{id:2,name:"David",username:"DavidFrequentis"},{id:3,name:"Sophie",username:"SophieDev"}]),t=Object(j.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)({id:null,name:"",username:""}),a=Object(j.a)(r,2),u=a[0],d=a[1],o=Object(c.useState)(!1),h=Object(j.a)(o,2),x=h[0],f=h[1];return Object(b.jsxs)("div",{className:"my-container",children:[Object(b.jsx)("h1",{children:"UserList Application with CRUD"}),Object(b.jsxs)("div",{className:"my-row",children:[Object(b.jsx)("div",{className:"flex",children:x?Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("h2",{children:"Edit This User"}),Object(b.jsx)(O,{editing:x,setEditing:f,currentUser:u,updateUser:function(e,t){f(!1),s(n.map((function(n){return n.id===e?t:n})))}})]}):Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("h2",{children:"Add New User"}),Object(b.jsx)(l,{addUser:function(e){e.id=n.length+1,s([].concat(Object(i.a)(n),[e]))}})]})}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)("h2",{children:"View users"}),Object(b.jsx)(m,{users:n,editRow:function(e){f(!0),d({id:e.id,name:e.name,username:e.username})},deleteUser:function(e){f(!1),s(n.filter((function(t){return t.id!==e})))}})]})]})]})};a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(o,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.28225a23.chunk.js.map