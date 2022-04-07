"use strict";(self["webpackChunkweek7_vue_project"]=self["webpackChunkweek7_vue_project"]||[]).push([[664],{5664:function(e,t,l){l.r(t),l.d(t,{default:function(){return J}});var s=l(6252),a=l(3577);const o={class:"container py-18"},c=(0,s.uE)('<div class="row mb-6"><div class="col-12 col-lg-7"><div class="row g-0 | timeline"><div class="col-3"><div class="timeline-pointer"><h6 class="fw-light mt-5">確認訂單</h6></div></div><div class="col-3"><div class="timeline-pointer"><h6 class="fw-bold mt-5">填寫訂購資訊</h6></div></div><div class="col-3"><div class="timeline-pointer-undone"><h6 class="fw-light mt-5">填寫付款資訊</h6></div></div><div class="col-3"><div class="timeline-pointer-undone"><h6 class="fw-light mt-5">完成訂購</h6></div></div></div></div></div>',1),i={class:"row flex-column-reverse flex-md-row"},r={class:"col-12 col-lg-7"},d={class:"table table-hover"},n=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{scope:"col",width:"20%"}),(0,s._)("th",{scope:"col",class:"text-center"},"品名"),(0,s._)("th",{scope:"col",width:"10%",class:"text-center"},"單價"),(0,s._)("th",{scope:"col",width:"20%",class:"text-center"},"數量"),(0,s._)("th",{scope:"col",width:"8%",class:"text-end"})])],-1),m=["src","alt"],u={class:"fw-bold me-6"},h={class:"d-flex justify-content-center align-items-center"},p={class:"fw-bold text-black text-center"},f=(0,s._)("td",null,null,-1),v={class:"col-12 offset-lg-1 col-lg-4 | mb-16 mb-md-0"},_=(0,s._)("h5",null,"訂購人資訊",-1),w={class:"mb-10"},b={class:"mt-5"},g=(0,s._)("span",{class:"mb-2"},"Email",-1),x={class:"mt-5"},y=(0,s._)("span",{class:"mb-2"},"收件人姓名",-1),$={class:"mt-5"},k=(0,s._)("span",{class:"mb-2"},"收件人電話",-1),D={class:"mt-5"},V=(0,s._)("span",{class:"mb-2"},"收件人地址",-1),C={class:"mt-5"},W=(0,s._)("span",{class:"mb-4"},"留言",-1),j=(0,s._)("br",null,null,-1),z={class:"bg-light p-5 mt-5"},T={class:"d-flex justify-content-between | mb-6"},q=(0,s._)("p",{class:"fw-500"},"小計",-1),U={class:"fw-light"},B={class:"d-flex justify-content-between | mb-6"},E=(0,s._)("p",{class:"fw-500"},"折扣",-1),N={class:"fw-light"},F={class:"d-flex justify-content-between"},O=(0,s._)("p",{class:"fz-5"},"總金額",-1),L={class:"fz-5 fw-bold"},S={class:"row d-flex justify-content-end | my-8 my-md-4"},H={class:"col-6"},I=(0,s._)("button",{class:"btn btn-outline-primary w-100"}," 返回 ",-1),K={class:"col-6"},M=["disabled"];function Y(e,t,l,Y,Z,A){const G=(0,s.up)("VField"),J=(0,s.up)("ErrorMessage"),P=(0,s.up)("router-link"),Q=(0,s.up)("VForm");return(0,s.wg)(),(0,s.iD)("div",o,[c,(0,s._)("div",i,[(0,s._)("div",r,[(0,s._)("table",d,[n,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Z.carts.carts,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id,class:"align-middle"},[(0,s._)("td",null,[(0,s._)("img",{src:e.product.imageUrl,alt:e.product.title,class:"img-cover w-100 h-100"},null,8,m)]),(0,s._)("td",null,[(0,s._)("p",null,(0,a.zw)(e.product.title),1)]),(0,s._)("td",null,[(0,s._)("p",u,"NT$"+(0,a.zw)(e.product.price),1)]),(0,s._)("td",null,[(0,s._)("div",h,[(0,s._)("p",p,(0,a.zw)(e.qty),1)])]),f])))),128))])])]),(0,s._)("div",v,[_,(0,s._)("div",w,[(0,s.Wm)(Q,{ref:"form",onSubmit:A.submitOrder},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",b,[g,(0,s.Wm)(G,{rules:"email|required",class:"form-control",modelValue:Z.formData.user.email,"onUpdate:modelValue":t[0]||(t[0]=e=>Z.formData.user.email=e),id:"femail",name:"E-mail",type:"email",placeholder:"example@gmail.com"},null,8,["modelValue"]),(0,s.Wm)(J,{name:"E-mail",class:"d-block text-end invalid-feedback"})]),(0,s._)("div",x,[y,(0,s.Wm)(G,{rules:"required",class:"form-control",modelValue:Z.formData.user.name,"onUpdate:modelValue":t[1]||(t[1]=e=>Z.formData.user.name=e),type:"text",id:"fname",name:"收件人姓名",placeholder:"請輸入姓名"},null,8,["modelValue"]),(0,s.Wm)(J,{name:"收件人姓名",class:"d-block text-end invalid-feedback"})]),(0,s._)("div",$,[k,(0,s.Wm)(G,{rules:"required|min:8|max:10",class:"form-control",modelValue:Z.formData.user.tel,"onUpdate:modelValue":t[2]||(t[2]=e=>Z.formData.user.tel=e),type:"tel",id:"fphone",name:"收件人電話",placeholder:"請輸入電話"},null,8,["modelValue"]),(0,s.Wm)(J,{name:"收件人電話",class:"d-block text-end invalid-feedback"})]),(0,s._)("div",D,[V,(0,s.Wm)(G,{rules:"required",class:"form-control",modelValue:Z.formData.user.address,"onUpdate:modelValue":t[3]||(t[3]=e=>Z.formData.user.address=e),type:"text",id:"faddress",name:"收件人地址",placeholder:"請輸入地址"},null,8,["modelValue"]),(0,s.Wm)(J,{name:"收件人地址",class:"d-block text-end invalid-feedback"})]),(0,s._)("div",C,[W,j,(0,s.Wm)(G,{as:"textarea",modelValue:Z.formData.message,"onUpdate:modelValue":t[4]||(t[4]=e=>Z.formData.message=e),class:"form-control",cols:"10",rows:"5",type:"text",id:"fmsg",name:"留言",placeholder:"請輸入留言",value:""},null,8,["modelValue"])]),(0,s._)("div",z,[(0,s._)("div",T,[q,(0,s._)("p",U,"NT$ "+(0,a.zw)(Z.carts.total)+" 元",1)]),(0,s._)("div",B,[E,(0,s._)("p",N," NT$ "+(0,a.zw)(Z.carts.total-Z.carts.final_total)+" 元 ",1)]),(0,s._)("div",F,[O,(0,s._)("p",L,"NT$ "+(0,a.zw)(Z.carts.final_total)+" 元",1)])]),(0,s._)("div",S,[(0,s._)("div",H,[(0,s.Wm)(P,{to:{name:"checkoutCart"}},{default:(0,s.w5)((()=>[I])),_:1})]),(0,s._)("div",K,[(0,s._)("button",{type:"submit",disabled:Object.keys(e).length>0||0===Z.carts.carts?.length||!Z.formData.user.name||!Z.formData.user.email||!Z.formData.user.tel||!Z.formData.user.address,class:"btn btn-danger w-100"}," 送出訂單 ",8,M)])])])),_:1},8,["onSubmit"])])])])])}var Z={data(){return{carts:[],formData:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCart(){this.$http.get("https://vue3-course-api.hexschool.io/v2/api/sylviah/cart").then((e=>{this.carts=e.data.data})).catch((e=>{console.log(e.response)}))},editCart(e,t){const l={product_id:e,qty:t};this.$http.put(`https://vue3-course-api.hexschool.io/v2/api/sylviah/cart/${e}`,{data:l}).then((e=>{console.log(e.data),this.getCart()})).catch((e=>{console.log(e.response)}))},delCart(e,t){const l=`https://vue3-course-api.hexschool.io/v2/api/sylviah/cart/${e}`;this.$swal.fire({title:`確定要將${t}刪除嗎？`,text:"商品刪除後將無法恢復。",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"確定刪除！",cancelButtonText:"取消"}).then((e=>{e.isConfirmed&&this.$http.delete(l).then((()=>{this.$swal.fire({icon:"success",title:"成功！",text:`您已將${t}刪除了！`}),this.getCart()})).catch((()=>{this.$swal.fire({icon:"error",title:"失敗！",text:"請再試一次"})}))}))},submitOrder(){const e=this.formData;this.$http.post("https://vue3-course-api.hexschool.io/v2/api/sylviah/order",{data:e}).then((e=>{this.$refs.form.resetForm(),this.$swal.fire("成功！",`已送出訂單！總金額 NT$ ${e.data.total} 元`,{icon:"success"}).then((t=>{t&&this.$router.push(`./payment/${e.data.orderId}`)}))})).catch((e=>{console.log(e.response),this.$swal.fire("失敗！","送出訂單失敗，請再試一次！",{icon:"error"})}))},showLoading(){const e=this.$loading.show();setTimeout((()=>{e.hide()}),300)}},mounted(){this.getCart(),this.showLoading()}},A=l(3744);const G=(0,A.Z)(Z,[["render",Y]]);var J=G}}]);
//# sourceMappingURL=664.ab3ffcfd.js.map