"use strict";(self.webpackChunksarga=self.webpackChunksarga||[]).push([[127],{1622:function(e,t,n){n.d(t,{Z:function(){return s}});n(7313);var i=n.p+"static/media/logo.f5ffc920021d3143f618218af5a642d8.svg",r=n(6417);var s=()=>(0,r.jsx)("img",{src:i,alt:"Logo",style:{width:"55px",height:"55px"}})},2605:function(e,t,n){var i=n(7313),r=n(551),s=n(1730),o=n(6417);const a=(0,i.forwardRef)(((e,t)=>{var n,i;let a,c,{children:l,type:d,direction:u,offset:h,scale:p}=e;switch(u){case"up":case"left":a=h,c=0;break;default:a=0,c=h}const[m,x]=(0,r.n)(a,c),[f,g]=(0,r.n)(a,c);switch(d){case"rotate":return(0,o.jsx)(s.E.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:l});case"slide":return"up"===u||"down"===u?(0,o.jsx)(s.E.div,{ref:t,animate:{y:void 0!==f?f:""},onHoverEnd:()=>g(),onHoverStart:()=>g(),children:l}):(0,o.jsx)(s.E.div,{ref:t,animate:{x:void 0!==m?m:""},onHoverEnd:()=>x(),onHoverStart:()=>x(),children:l});default:return"number"===typeof p&&(p={hover:p,tap:p}),(0,o.jsx)(s.E.div,{ref:t,whileHover:{scale:null===(n=p)||void 0===n?void 0:n.hover},whileTap:{scale:null===(i=p)||void 0===i?void 0:i.tap},children:l})}}));a.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.Z=a},5602:function(e,t,n){var i=n(4145),r=n(3497),s=n(6417);t.Z=e=>{let{children:t,...n}=e;return(0,s.jsx)(r.Z,{sx:{maxWidth:{xs:390,lg:395},margin:{xs:2.5,m:3},display:"flex",alignItem:"center",justifyItems:"center","& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...n,children:(0,s.jsx)(i.Z,{sx:{p:{xs:2,sm:3,xl:5},display:"flex",justifyContent:"center",alignItems:"center"},children:t})})}},1103:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(7592);n(7313);var r=n.p+"static/media/wave.cc01b3ec66f47900586b73a905b4fdc7.svg";var s=(0,i.ZP)("div")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.light,minHeight:"100vh",objectFit:"cover",backgroundImage:`url(${r})`,backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"100%"}}))},7127:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var i=n(9466),r=n(9860),s=n(5300),o=n(9019),a=n(1999),c=n(1113),l=n(1103),d=n(5602),u=n(7313),h=n(5554),p=n(7890),m=n(1550),x=n(4145),f=n(5480),g=n(1095),j=n(3463),v=n(9429),b=n(2605),Z=n(4692),y=n(6287),P=n(6417);var $=e=>{let{...t}=e;const n=(0,h.I0)(),i=(0,p.s0)(),r=(0,h.v9)((e=>e.otp.sendUesrIdData));return console.log("2",Z.SA),(0,u.useEffect)((()=>(r.emailData||i("/login"),()=>{})),[]),(0,P.jsx)(v.J9,{initialValues:{otp1:"",otp2:"",otp3:"",otp4:"",otp5:"",otp6:""},validationSchema:j.Ry().shape({otp1:j.Z_().matches(/^\d+$/,"Must be a digit").required("Required OTP"),otp2:j.Z_().matches(/^\d+$/,"Must be a digit").required("Required"),otp3:j.Z_().matches(/^\d+$/,"Must be a digit").required("Required"),otp4:j.Z_().matches(/^\d+$/,"Must be a digit").required("Required"),otp5:j.Z_().matches(/^\d+$/,"Must be a digit").required("Required"),otp6:j.Z_().matches(/^\d+$/,"Must be a digit").required("Required")}),onSubmit:async(e,t)=>{let{setErrors:s,setStatus:o,setSubmitting:a}=t;try{const t=`${e.otp1}${e.otp2}${e.otp3}${e.otp4}${e.otp5}${e.otp6}`;o({success:!0}),a(!1);const c=await fetch(`${y.Z.Ip}/otp`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:r.emailData,otp:t})}),l=await c.json();if(!c.ok)return s({submit:l.error||"Something went wrong"}),void a(!1);n((0,Z.Mi)({otp:t,values:e})),n((0,Z.SA)({...r,otp:t})),i("/NewPassword")}catch(c){console.error(c),o({success:!1}),s({submit:c.message}),a(!1)}},children:e=>{let{errors:n,handleBlur:i,handleSubmit:r,isSubmitting:s,touched:a,values:c,setFieldValue:l}=e;return(0,P.jsxs)("form",{noValidate:!0,onSubmit:r,...t,children:[(0,P.jsx)(o.ZP,{container:!0,spacing:2,children:[1,2,3,4,5,6].map((e=>(0,P.jsx)(o.ZP,{item:!0,xs:2,children:(0,P.jsx)(m.Z,{fullWidth:!0,error:Boolean(a[`otp${e}`]&&n[`otp${e}`]),children:(0,P.jsx)("input",{type:"text",name:`otp${e}`,value:c[`otp${e}`],onChange:t=>{l(`otp${e}`,t.target.value),1===t.target.value.length&&e<6&&document.getElementsByName(`otp${e+1}`)[0].focus()},onBlur:i,maxLength:1,style:{textAlign:"center",fontSize:24,borderRadius:8,padding:"12px 16px",border:"1px solid #ccc",outline:"none"}})})},e)))}),Object.keys(a).length>0&&Object.keys(n).length>0&&(0,P.jsx)(x.Z,{sx:{mt:3},children:(0,P.jsx)(f.Z,{error:!0,children:Object.values(n)[0]})}),(0,P.jsx)(x.Z,{sx:{mt:2},children:(0,P.jsx)(b.Z,{children:(0,P.jsx)(g.Z,{disableElevation:!0,disabled:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Submit"})})})]})}})},w=n(1622);var S=()=>{const e=(0,r.Z)(),t=(0,s.Z)(e.breakpoints.down("md"));return(0,P.jsx)(l.Z,{children:(0,P.jsx)(o.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"80vh"},children:(0,P.jsx)(o.ZP,{item:!0,xs:12,children:(0,P.jsx)(o.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:(0,P.jsx)(o.ZP,{item:!0,children:(0,P.jsx)(d.Z,{children:(0,P.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,P.jsx)(o.ZP,{item:!0,sx:{mb:1},children:(0,P.jsx)(i.rU,{to:"#",children:(0,P.jsx)(w.Z,{})})}),(0,P.jsx)(o.ZP,{item:!0,xs:12,children:(0,P.jsx)(o.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,P.jsx)(o.ZP,{item:!0,children:(0,P.jsxs)(a.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,P.jsx)(c.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Enter OTP"}),(0,P.jsx)(c.Z,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter the OTP sent to your Mobile Number"})]})})})}),(0,P.jsx)(o.ZP,{item:!0,xs:12,children:(0,P.jsx)($,{})})]})})})})})})})}}}]);