(self.webpackChunksarga=self.webpackChunksarga||[]).push([[125],{1622:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});r(7313);var n=r.p+"static/media/logo.f5ffc920021d3143f618218af5a642d8.svg",i=r(6417);var s=()=>(0,i.jsx)("img",{src:n,alt:"Logo",style:{width:"55px",height:"55px"}})},5184:function(){},2605:function(e,t,r){"use strict";var n=r(7313),i=r(551),s=r(1730),a=r(6417);const l=(0,n.forwardRef)(((e,t)=>{var r,n;let l,o,{children:c,type:d,direction:x,offset:u,scale:h}=e;switch(x){case"up":case"left":l=u,o=0;break;default:l=0,o=u}const[m,p]=(0,i.n)(l,o),[g,j]=(0,i.n)(l,o);switch(d){case"rotate":return(0,a.jsx)(s.E.div,{ref:t,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:c});case"slide":return"up"===x||"down"===x?(0,a.jsx)(s.E.div,{ref:t,animate:{y:void 0!==g?g:""},onHoverEnd:()=>j(),onHoverStart:()=>j(),children:c}):(0,a.jsx)(s.E.div,{ref:t,animate:{x:void 0!==m?m:""},onHoverEnd:()=>p(),onHoverStart:()=>p(),children:c});default:return"number"===typeof h&&(h={hover:h,tap:h}),(0,a.jsx)(s.E.div,{ref:t,whileHover:{scale:null===(r=h)||void 0===r?void 0:r.hover},whileTap:{scale:null===(n=h)||void 0===n?void 0:n.tap},children:c})}}));l.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}},t.Z=l},5602:function(e,t,r){"use strict";var n=r(4145),i=r(3497),s=r(6417);t.Z=e=>{let{children:t,...r}=e;return(0,s.jsx)(i.Z,{sx:{maxWidth:{xs:390,lg:395},margin:{xs:2.5,m:3},display:"flex",alignItem:"center",justifyItems:"center","& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...r,children:(0,s.jsx)(n.Z,{sx:{p:{xs:2,sm:3,xl:5},display:"flex",justifyContent:"center",alignItems:"center"},children:t})})}},1103:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7592);r(7313);var i=r.p+"static/media/wave.cc01b3ec66f47900586b73a905b4fdc7.svg";var s=(0,n.ZP)("div")((e=>{let{theme:t}=e;return{backgroundColor:t.palette.primary.light,minHeight:"100vh",objectFit:"cover",backgroundImage:`url(${i})`,backgroundPosition:"bottom",backgroundRepeat:"no-repeat",backgroundSize:"100%"}}))},6125:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var n=r(9466),i=r(9860),s=r(5300),a=r(9019),l=r(1999),o=r(1113),c=r(9536),d=r(1103),x=r(5602),u=r(1622),h=r(7313),m=r(5554),p=r(1095),g=r(4145),j=r(4631),Z=r(1550),f=r(5103),v=r(9914),b=r(5480),y=r(1727),w=r(7131),P=r(3929),C=r(6330),k=r(3463),S=r(9429);var E=r.p+"static/media/social-google.a57081bd95c2519caad91216a8dba3ad.svg",I=r(2605),R=r(715);const z=e=>{let t=0;return e.length>5&&(t+=1),e.length>7&&(t+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(t+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(t+=1),t};var W=r(237),H=r(2611),B=r(6417);var A=e=>{let{...t}=e;const r=(0,i.Z)(),l=useScriptRef(),d=(0,s.Z)(r.breakpoints.down("md")),x=(0,m.v9)((e=>e.customization)),[u,A]=(0,h.useState)(!1),[D,M]=(0,h.useState)(!0),[F,G]=(0,h.useState)(0),[$,q]=(0,h.useState)(),U=()=>{A(!u)},V=e=>{e.preventDefault()},N=e=>{const t=z(e);var r;G(t),q((r=t)<2?{label:"Poor",color:R.Z.errorMain}:r<3?{label:"Weak",color:R.Z.warningDark}:r<4?{label:"Normal",color:R.Z.orangeMain}:r<5?{label:"Good",color:R.Z.successMain}:r<6?{label:"Strong",color:R.Z.successDark}:{label:"Poor",color:R.Z.errorMain})};return(0,h.useEffect)((()=>{N("123456")}),[]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(I.Z,{children:(0,B.jsxs)(p.Z,{variant:"outlined",fullWidth:!0,onClick:async()=>{console.error("Register")},size:"large",sx:{color:"grey.700",backgroundColor:r.palette.grey[50],borderColor:r.palette.grey[100]},children:[(0,B.jsx)(g.Z,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,B.jsx)("img",{src:E,alt:"google",width:16,height:16,style:{marginRight:d?8:16}})}),"Sign up with Google"]})})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsxs)(g.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,B.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,B.jsx)(p.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:`${r.palette.grey[100]} !important`,color:`${r.palette.grey[900]}!important`,fontWeight:500,borderRadius:`${x.borderRadius}px`},disableRipple:!0,disabled:!0,children:"OR"}),(0,B.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,B.jsx)(g.Z,{sx:{mb:2},children:(0,B.jsx)(o.Z,{variant:"subtitle1",children:"Sign up with Email address"})})})]}),(0,B.jsx)(S.J9,{initialValues:{email:"",password:"",submit:null},validationSchema:k.Ry().shape({email:k.Z_().email("Must be a valid email").max(255).required("Email is required"),password:k.Z_().max(255).required("Password is required")}),onSubmit:async(e,t)=>{let{setErrors:r,setStatus:n,setSubmitting:i}=t;try{l.current&&(n({success:!0}),i(!1))}catch(s){console.error(s),l.current&&(n({success:!1}),r({submit:s.message}),i(!1))}},children:e=>{let{errors:i,handleBlur:s,handleChange:l,handleSubmit:c,isSubmitting:x,touched:h,values:m}=e;return(0,B.jsxs)("form",{noValidate:!0,onSubmit:c,...t,children:[(0,B.jsxs)(a.ZP,{container:!0,spacing:d?0:2,children:[(0,B.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,B.jsx)(j.Z,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"",sx:{...r.typography.customInput}})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,sm:6,children:(0,B.jsx)(j.Z,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"",sx:{...r.typography.customInput}})})]}),(0,B.jsxs)(Z.Z,{fullWidth:!0,error:Boolean(h.email&&i.email),sx:{...r.typography.customInput},children:[(0,B.jsx)(f.Z,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,B.jsx)(v.Z,{id:"outlined-adornment-email-register",type:"email",value:m.email,name:"email",onBlur:s,onChange:l,inputProps:{}}),h.email&&i.email&&(0,B.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text--register",children:i.email})]}),(0,B.jsxs)(Z.Z,{fullWidth:!0,error:Boolean(h.password&&i.password),sx:{...r.typography.customInput},children:[(0,B.jsx)(f.Z,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,B.jsx)(v.Z,{id:"outlined-adornment-password-register",type:u?"text":"password",value:m.password,name:"password",label:"Password",onBlur:s,onChange:e=>{l(e),N(e.target.value)},endAdornment:(0,B.jsx)(y.Z,{position:"end",children:(0,B.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:U,onMouseDown:V,edge:"end",size:"large",children:u?(0,B.jsx)(W.Z,{}):(0,B.jsx)(H.Z,{})})}),inputProps:{}}),h.password&&i.password&&(0,B.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-password-register",children:i.password})]}),0!==F&&(0,B.jsx)(Z.Z,{fullWidth:!0,children:(0,B.jsx)(g.Z,{sx:{mb:2},children:(0,B.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",children:[(0,B.jsx)(a.ZP,{item:!0,children:(0,B.jsx)(g.Z,{style:{backgroundColor:null===$||void 0===$?void 0:$.color},sx:{width:85,height:8,borderRadius:"7px"}})}),(0,B.jsx)(a.ZP,{item:!0,children:(0,B.jsx)(o.Z,{variant:"subtitle1",fontSize:"0.75rem",children:null===$||void 0===$?void 0:$.label})})]})})}),(0,B.jsx)(a.ZP,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,B.jsx)(a.ZP,{item:!0,children:(0,B.jsx)(P.Z,{control:(0,B.jsx)(C.Z,{checked:D,onChange:e=>M(e.target.checked),name:"checked",color:"primary"}),label:(0,B.jsxs)(o.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,B.jsx)(o.Z,{variant:"subtitle1",component:n.rU,to:"#",children:"Terms & Condition."})]})})})}),i.submit&&(0,B.jsx)(g.Z,{sx:{mt:3},children:(0,B.jsx)(b.Z,{error:!0,children:i.submit})}),(0,B.jsx)(g.Z,{sx:{mt:2},children:(0,B.jsx)(I.Z,{children:(0,B.jsx)(p.Z,{disableElevation:!0,disabled:x,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign up"})})})]})}})]})},D=r(5184),M=r.n(D);var F=()=>{const e=(0,i.Z)(),t=(0,s.Z)(e.breakpoints.down("md"));return(0,B.jsx)(d.Z,{children:(0,B.jsxs)(a.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(a.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,B.jsx)(a.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,B.jsx)(x.Z,{children:(0,B.jsxs)(a.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,B.jsx)(a.ZP,{item:!0,sx:{mb:3},children:(0,B.jsx)(n.rU,{to:"#",children:(0,B.jsx)(u.Z,{})})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(a.ZP,{container:!0,direction:t?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,B.jsx)(a.ZP,{item:!0,children:(0,B.jsxs)(l.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,B.jsx)(o.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:t?"h3":"h2",children:"Sign up"}),(0,B.jsx)(o.Z,{variant:"caption",fontSize:"16px",textAlign:t?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(A,{})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(c.Z,{})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,children:(0,B.jsx)(a.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,B.jsx)(o.Z,{component:n.rU,to:"/login",variant:"subtitle1",sx:{textDecoration:"none"},children:"Already have an account?"})})})]})})})})}),(0,B.jsx)(a.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,B.jsx)(M(),{})})]})})}}}]);