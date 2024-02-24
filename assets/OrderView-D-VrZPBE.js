import{d as j,a as c,c as A,m as p,n as F,g as e,q as m,y as E,x as _,w as t,G as D,I as V,K as Q,M as Y,k,N as I,b as a,R as Z,A as f,O as H,P as J,Q as X,S as ee,T as ae,e as v,W as te,Y as se,Z as le,$ as re,a0 as ne,a1 as oe,D as L,s as de,a2 as ue,l as ie,p as ce,f as o,F as fe,t as pe,a3 as M,v as P,a4 as N}from"./index-CCVwmtVp.js";import{_ as _e,a as me,b as z,c as O,d as ye,e as q,f as ge}from"./TableCaption-CFKDS-5n.js";import{t as he,o as qe,s as b,u as be,_ as $,a as S,b as w,c as x,d as C,F as B}from"./FormDescription-Btbr19TV.js";import{_ as $e}from"./Textarea-BK5ZXLr0.js";/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=j("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=j("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=j("ChevronUpIcon",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=j("MinusCircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]),Ce={__name:"TableFooter",props:{class:{type:null,required:!1}},setup(l){const s=l;return(r,u)=>(c(),A("tfoot",{class:F(e(m)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s.class))},[p(r.$slots,"default")],2))}},Be={__name:"Select",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1},defaultValue:{type:String,required:!1},modelValue:{type:String,required:!1},dir:{type:String,required:!1},name:{type:String,required:!1},autocomplete:{type:String,required:!1},disabled:{type:Boolean,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue","update:open"],setup(l,{emit:s}){const n=E(l,s);return(i,g)=>(c(),_(e(Q),D(V(e(n))),{default:t(()=>[p(i.$slots,"default")]),_:3},16))}},ve={__name:"SelectValue",props:{placeholder:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(l){const s=l;return(r,u)=>(c(),_(e(Y),D(V(s)),{default:t(()=>[p(r.$slots,"default")]),_:3},16))}},ke={__name:"SelectTrigger",props:{disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const s=l,r=k(()=>{const{class:n,...i}=s;return i}),u=I(r);return(n,i)=>(c(),_(e(H),f(e(u),{class:e(m)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",s.class)}),{default:t(()=>[p(n.$slots,"default"),a(e(Z),{"as-child":""},{default:t(()=>[a(e(G),{class:"w-4 h-4 opacity-50"})]),_:1})]),_:3},16,["class"]))}},Pe=Object.assign({inheritAttrs:!1},{__name:"SelectContent",props:{forceMount:{type:Boolean,required:!1},position:{type:String,required:!1,default:"popper"},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},updatePositionStrategy:{type:String,required:!1},prioritizePosition:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["closeAutoFocus","escapeKeyDown","pointerDownOutside"],setup(l,{emit:s}){const r=l,u=s,n=k(()=>{const{class:g,...T}=r;return T}),i=E(n,u);return(g,T)=>(c(),_(e(ee),null,{default:t(()=>[a(e(J),f({...e(i),...g.$attrs},{class:e(m)("relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",l.position==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",r.class)}),{default:t(()=>[a(e(De)),a(e(X),{class:F(e(m)("p-1",l.position==="popper"&&"h-[--radix-select-trigger-height] w-full min-w-[--radix-select-trigger-width]"))},{default:t(()=>[p(g.$slots,"default")]),_:3},8,["class"]),a(e(Ve))]),_:3},16,["class"])]),_:3}))}}),Te={__name:"SelectGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const s=l,r=k(()=>{const{class:u,...n}=s;return n});return(u,n)=>(c(),_(e(ae),f({class:e(m)("p-1 w-full",s.class)},r.value),{default:t(()=>[p(u.$slots,"default")]),_:3},16,["class"]))}},Ne={class:"absolute right-2 flex h-3.5 w-3.5 items-center justify-center"},U={__name:"SelectItem",props:{value:{type:String,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const s=l,r=k(()=>{const{class:n,...i}=s;return i}),u=I(r);return(n,i)=>(c(),_(e(le),f(e(u),{class:e(m)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s.class)}),{default:t(()=>[v("span",Ne,[a(e(te),null,{default:t(()=>[a(e(Se),{class:"h-4 w-4"})]),_:1})]),a(e(se),null,{default:t(()=>[p(n.$slots,"default")]),_:3})]),_:3},16,["class"]))}},Oe={__name:"SelectLabel",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const s=l;return(r,u)=>(c(),_(e(re),{class:F(e(m)("py-1.5 pl-8 pr-2 text-sm font-semibold",s.class))},{default:t(()=>[p(r.$slots,"default")]),_:3},8,["class"]))}},De={__name:"SelectScrollUpButton",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const s=l,r=k(()=>{const{class:n,...i}=s;return i}),u=I(r);return(n,i)=>(c(),_(e(ne),f(e(u),{class:e(m)("flex cursor-default items-center justify-center py-1",s.class)}),{default:t(()=>[p(n.$slots,"default",{},()=>[a(e(we),{class:"h-4 w-4"})])]),_:3},16,["class"]))}},Ve={__name:"SelectScrollDownButton",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(l){const s=l,r=k(()=>{const{class:n,...i}=s;return i}),u=I(r);return(n,i)=>(c(),_(e(oe),f(e(u),{class:e(m)("flex cursor-default items-center justify-center py-1",s.class)}),{default:t(()=>[p(n.$slots,"default",{},()=>[a(e(G),{class:"h-4 w-4"})])]),_:3},16,["class"]))}},je={class:"container lg:grid lg:grid-cols-3 gap-6 py-6 lg:py-10"},Ie={class:"col-span-2"},Me={class:"text-end"},Ue={__name:"OrderView",setup(l){const{getCart:s,removeCartProduct:r,removeCartAllProduct:u}=L(),{cart:n,finalTotal:i}=de(L()),{toast:g}=ue(),T=he(qe({name:b({required_error:"必填"}).min(3,"使用者名稱至少需要 3 個字元").max(50,"使用者名稱最多 50 個字元"),tel:b({required_error:"必填"}).min(9),email:b({required_error:"必填"}).email("信箱格式不正確"),address:b({required_error:"必填"}).min(8,{message:"地址至少為 8 個字元"}),payment:b({required_error:"必填"}),message:b()})),K=be({validationSchema:T}),W=async y=>{const{data:h}=await ie.post(ce.order,y);g({title:h.message,description:`訂單金額${h.total} 謝謝您的訂購`}),s()},R=K.handleSubmit(y=>{const h={data:{user:{name:y.name,email:y.email,tel:y.tel,address:y.address},message:y.message}};g({title:"請稍等，正為您準備訂單"}),W(h)});return(y,h)=>(c(),A("section",je,[v("main",Ie,[a(e(ge),null,{default:t(()=>[a(e(_e),null,{default:t(()=>[o("請填寫訂單資料")]),_:1}),a(e(me),null,{default:t(()=>[a(e(z),null,{default:t(()=>[a(e(O),null,{default:t(()=>[o(" 商品名 ")]),_:1}),a(e(O),null,{default:t(()=>[o("單價")]),_:1}),a(e(O),null,{default:t(()=>[o("數量")]),_:1}),a(e(O),{class:"text-right"},{default:t(()=>[o(" 價格 ")]),_:1})]),_:1})]),_:1}),a(e(ye),null,{default:t(()=>[(c(!0),A(fe,null,pe(e(n),d=>(c(),_(e(z),{key:d.id},{default:t(()=>[a(e(q),{class:"font-medium flex items-center space-x-3"},{default:t(()=>[a(e(M),{variant:"ghost",class:"hover:bg-destructive",onClick:ze=>e(r)(d.id)},{default:t(()=>[a(e(xe))]),_:2},1032,["onClick"]),v("span",null,P(d.product.title),1)]),_:2},1024),a(e(q),null,{default:t(()=>[o(P(d.product.price),1)]),_:2},1024),a(e(q),null,{default:t(()=>[o("x "+P(d.qty),1)]),_:2},1024),a(e(q),{class:"text-right"},{default:t(()=>[o(" NT$"+P(d.final_total),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),a(e(Ce),null,{default:t(()=>[a(e(z),null,{default:t(()=>[a(e(q),{colspan:"3"},{default:t(()=>[o(" 總計 ")]),_:1}),a(e(q),{class:"text-right font-bold"},{default:t(()=>[o(" NT$"+P(e(i)),1)]),_:1})]),_:1})]),_:1})]),_:1}),v("div",Me,[a(e(M),{onClick:e(u),disabled:!e(n).length},{default:t(()=>[o("刪除購物車")]),_:1},8,["onClick","disabled"])])]),v("div",null,[v("form",{onSubmit:h[0]||(h[0]=(...d)=>e(R)&&e(R)(...d))},[a(e(B),{name:"name"},{default:t(({componentField:d})=>[a(e($),null,{default:t(()=>[a(e(S),null,{default:t(()=>[o("收件人姓名:")]),_:1}),a(e(w),null,{default:t(()=>[a(e(N),f({type:"text",placeholder:"請輸入帳號"},d,{autocomplete:"name"}),null,16)]),_:2},1024),a(e(x)),a(e(C))]),_:2},1024)]),_:1}),a(e(B),{name:"tel"},{default:t(({componentField:d})=>[a(e($),null,{default:t(()=>[a(e(S),null,{default:t(()=>[o("收件人電話:")]),_:1}),a(e(w),null,{default:t(()=>[a(e(N),f({type:"tel",placeholder:"請輸入電話"},d,{autocomplete:"tel"}),null,16)]),_:2},1024),a(e(x)),a(e(C))]),_:2},1024)]),_:1}),a(e(B),{name:"email"},{default:t(({componentField:d})=>[a(e($),null,{default:t(()=>[a(e(S),null,{default:t(()=>[o("收件人信箱:")]),_:1}),a(e(w),null,{default:t(()=>[a(e(N),f({type:"email",placeholder:"請輸入信箱"},d,{autocomplete:"email"}),null,16)]),_:2},1024),a(e(x)),a(e(C))]),_:2},1024)]),_:1}),a(e(B),{name:"address"},{default:t(({componentField:d})=>[a(e($),null,{default:t(()=>[a(e(S),null,{default:t(()=>[o("收件人地址:")]),_:1}),a(e(w),null,{default:t(()=>[a(e(N),f({type:"address",placeholder:"請輸入地址"},d,{autocomplete:"address"}),null,16)]),_:2},1024),a(e(x)),a(e(C))]),_:2},1024)]),_:1}),a(e(B),{name:"payment"},{default:t(({componentField:d})=>[a(e($),null,{default:t(()=>[a(e(S),null,{default:t(()=>[o("請選擇付款方式")]),_:1}),a(e(w),null,{default:t(()=>[a(e(Be),D(V(d)),{default:t(()=>[a(e(ke),null,{default:t(()=>[a(e(ve),{placeholder:"請選擇付款方式"})]),_:1}),a(e(Pe),null,{default:t(()=>[a(e(Te),null,{default:t(()=>[a(e(Oe),null,{default:t(()=>[o("付款方式")]),_:1}),a(e(U),{value:"信用卡"},{default:t(()=>[o(" 信用卡 ")]),_:1}),a(e(U),{value:"ATM"},{default:t(()=>[o(" ATM ")]),_:1})]),_:1})]),_:1})]),_:2},1040)]),_:2},1024),a(e(x)),a(e(C))]),_:2},1024)]),_:1}),a(e(B),{name:"message"},{default:t(({componentField:d})=>[a(e($),null,{default:t(()=>[a(e(S),null,{default:t(()=>[o("留言")]),_:1}),a(e(w),null,{default:t(()=>[a(e($e),D(V(d)),null,16)]),_:2},1024),a(e(x)),a(e(C))]),_:2},1024)]),_:1}),a(e(M),{type:"submit"},{default:t(()=>[o(" 送出訂單 ")]),_:1})],32)])]))}};export{Ue as default};