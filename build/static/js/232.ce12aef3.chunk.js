"use strict";(self.webpackChunkhospito=self.webpackChunkhospito||[]).push([[232],{1232:function(s,l,e){e.r(l);var i=e(7313),a=e(4631),d=e(4145),t=e(9019),n=e(1113),r=e(1095),o=e(9088),m=e(6694),c=(e(3635),e(3497)),u=e(1834),x=e(5554),h=e(9066),v=e(2192),j=e(854),f=e(6011),Z=e(6417);const P=(0,m.Z)(a.Z)({"& .MuiInputBase-input.Mui-disabled":{opacity:1,WebkitTextFillColor:"#121926",color:"#121926",fontSize:"1.2rem"}});function N(s){let l=0;for(let i=0;i<s.length;i+=1)l=s.charCodeAt(i)+((l<<5)-l);let e="#";for(let i=0;i<3;i+=1){e+=`00${(l>>8*i&255).toString(16)}`.slice(-2)}return e}function p(s){return s?s.charAt(0).toUpperCase()+s.slice(1):""}function T(s){const l=s.split(" ").map((s=>p(s)[0])).join("");return{sx:{bgcolor:N(s)},children:l}}l.default=function(){var s,l,e,a,m,N,b,g;const[C,W]=(0,i.useState)(!1),[y,I]=(0,i.useState)(null),[k,D]=(0,i.useState)(""),S=s=>{W(!1),"editform"===s&&setPage(1)},A=localStorage.getItem("user"),M=null===(s=JSON.parse(A))||void 0===s||null===(l=s.user)||void 0===l?void 0:l._id,U=(0,x.I0)(),$=(0,x.v9)((s=>s.login.user)),F=(0,x.v9)((s=>{var l,e;return(null===(l=s.profile)||void 0===l||null===(e=l.profile)||void 0===e?void 0:e.profByIdData)||""})),w=(B=F,0===Object.keys(B).length&&B.constructor===Object);var B;return(0,i.useEffect)((()=>{U((0,f.Tl)(M)),U((0,j.n$)())}),[U]),(0,Z.jsxs)(Z.Fragment,{children:[C&&(0,Z.jsx)(h.Z,{open:C,handleClose:()=>W(!1),component:y,mdlHeading:k}),(0,Z.jsx)(c.Z,{className:"ProMainCard",children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsxs)(t.ZP,{container:!0,children:[(0,Z.jsx)(t.ZP,{item:!0,xs:12,sm:6,md:6,children:(0,Z.jsxs)(n.Z,{variant:"h4",className:"Title",children:[(0,Z.jsx)(u.f7T,{className:"IconTitle"})," Update Profile"]})}),(0,Z.jsx)(t.ZP,{item:!0,xs:12,sm:6,md:6,className:"TitleButton",children:(0,Z.jsx)(r.Z,{variant:"outlined",onClick:()=>((s,l)=>{let e;W(!0),"editform"===s?(D("Update Profile"),e=(0,Z.jsx)(v.Z,{userId:M,formtype:"editform",data:l,handleClose:S,UserDetailse:F})):(D("Add Profile"),e=(0,Z.jsx)(v.Z,{userId:M,formtype:"addForm",data:l,handleClose:S}));I(e)})(!0===w?"addForm":"editform"),children:"Edit Profile"})})]}),(0,Z.jsxs)(t.ZP,{container:!0,children:[(0,Z.jsx)(t.ZP,{item:!0,xs:12,sm:6,md:3,className:"MainProPhoto",children:(0,Z.jsx)(o.Z,{className:"ProPhoto",children:(null===F||void 0===F||null===(e=F.imgUrl)||void 0===e?void 0:e.length)>0?(0,Z.jsx)("img",{src:F.imgUrl,alt:`${null===(a=F.userId)||void 0===a?void 0:a.name} ${null===(m=F.userId)||void 0===m?void 0:m.lname}`,style:{width:"100%",height:"auto"}}):T(`${null===$||void 0===$?void 0:$.fName} ${null===$||void 0===$?void 0:$.lName}`).children})}),(0,Z.jsx)(t.ZP,{item:!0,xs:12,sm:6,md:9,children:(0,Z.jsxs)(t.ZP,{container:!0,children:[(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,className:"Details",children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"First Name"}),(0,Z.jsx)(P,{fullWidth:!0,value:p((null===$||void 0===$?void 0:$.name)||""),variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,className:"Details",children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"Last Name"}),(0,Z.jsx)(P,{fullWidth:!0,value:p((null===$||void 0===$?void 0:$.lname)||""),variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,className:"Details",children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"Contact No"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===$||void 0===$?void 0:$.phone)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,className:"Details",children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"Email"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===$||void 0===$?void 0:$.email)||"",variant:"standard",disabled:!0})]})]})})]})]})}),(0,Z.jsx)(c.Z,{className:"ProMainCard",children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(t.ZP,{container:!0,children:(0,Z.jsx)(t.ZP,{item:!0,xs:12,children:(0,Z.jsxs)(n.Z,{variant:"h4",className:"Title",children:[(0,Z.jsx)(u.tMq,{className:"IconTitle"})," Contact Details"]})})}),(0,Z.jsxs)(t.ZP,{container:!0,spacing:2,className:"Details",children:[(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"WhatsApp"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F?void 0:F.phone)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"Country"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F||null===(N=F.country)||void 0===N?void 0:N.name)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"State"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F||null===(b=F.state)||void 0===b?void 0:b.name)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"District"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F||null===(g=F.district)||void 0===g?void 0:g.name)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"City"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F?void 0:F.city)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"Region"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F?void 0:F.region)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"Landmark"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F?void 0:F.landmark)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"Address line 1"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F?void 0:F.addr1)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"Address line 2"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F?void 0:F.addr2)||"",variant:"standard",disabled:!0})]}),(0,Z.jsxs)(t.ZP,{item:!0,xs:12,sm:6,md:4,children:[(0,Z.jsx)(n.Z,{className:"formTitle",children:"Postal Code"}),(0,Z.jsx)(P,{fullWidth:!0,value:(null===F||void 0===F?void 0:F.postalCode)||"",variant:"standard",disabled:!0})]})]})]})})]})}}}]);