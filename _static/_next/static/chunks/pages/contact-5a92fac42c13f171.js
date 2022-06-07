(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3269:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return l(4762)}])},738:function(e,t,l){"use strict";var s=l(5893),a=l(5675),r=l.n(a),n=l(1664),i=l.n(n),c=l(9667);t.Z=function(e){var t=e.title,l=e.url,a=e.headerUrl;return(0,s.jsxs)("section",{className:"relative",children:[(0,s.jsx)("div",{className:"image-container-header",children:(0,s.jsx)(r(),{className:"image",priority:!0,alt:a,src:l,layout:"fill"})}),(0,s.jsx)("div",{className:"absolute top-10 lg:top-20 left-0 h-full flex items-center justify-center lg:px-[15px]",children:(0,s.jsxs)("div",{className:"mx-5 lg:mx-10 text-white max-w-[825px] h-auto w-full lg:mt-0",children:[(0,s.jsx)("div",{className:"text-center lg:text-left mx-auto mt-6 font-light",children:(0,s.jsxs)("div",{className:"inline-flex",children:[(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)("a",{className:"mr-1 font-extralight",children:"Homepage"})}),"/ ",(0,s.jsx)("span",{className:"font-semibold ml-1",children:a})]})}),(0,s.jsx)(c.pT,{children:(0,s.jsx)("h1",{className:"mt-4 lg:text-left text-3xl lg:text-5xl text-center text-white font-light lg:font-light",children:t})})]})})]})}},5229:function(e,t,l){"use strict";var s=l(5893);t.Z=function(e){var t=e.title,l=e.sub;return(0,s.jsxs)("section",{children:[(0,s.jsx)("hr",{className:"opacity-100"}),(0,s.jsx)("div",{className:"mx-auto px-6 lg:px-20 w-full",children:(0,s.jsxs)("div",{className:"my-8 lg:my-14",children:[(0,s.jsx)("h1",{className:"text-center text-3xl lg-text-left lg:text-3xl text-black font-light pt-2 lg:pt-0",children:t}),l?(0,s.jsx)("p",{className:"text-center lg:text-left text-black text-lg lg:text-xl font-extralight pt-8",children:l}):null]})})]})}},4762:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return g}});var s=l(5893),a=l(5229),r=l(738),n=l(4051),i=l.n(n),c=l(7294),x=l(7536),o=l(1163);function m(e,t,l,s,a,r,n){try{var i=e[r](n),c=i.value}catch(x){return void l(x)}i.done?t(c):Promise.resolve(c).then(s,a)}function u(e){return function(){var t=this,l=arguments;return new Promise((function(s,a){var r=e.apply(t,l);function n(e){m(r,s,a,n,i,"next",e)}function i(e){m(r,s,a,n,i,"throw",e)}n(void 0)}))}}function h(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function d(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{},s=Object.keys(l);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(l).filter((function(e){return Object.getOwnPropertyDescriptor(l,e).enumerable})))),s.forEach((function(t){h(e,t,l[t])}))}return e}var A=function(){var e=(0,c.useState)(!1),t=e[0],l=e[1],a=(0,o.useRouter)(),r=(0,x.cI)({mode:"onChange"}),n=r.register,m=r.formState.errors,h=r.handleSubmit;function A(){return(A=u(i().mark((function e(t,s){var r,n,c,x,o,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),console.log("Sending"),r=t.firstName,n=t.lastName,c=t.phone,x=t.email,o=t.enquiry,m={firstname:r,lastname:n,phone:c,email:x,enquiry:o},e.next=10,fetch("/api/contact",{method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(m)}).then((function(e){console.log("Response received"),200===e.status&&(console.log("Response succeeded!"),l(!0),setTimeout((function(){a.push("/")}),3e3))}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,s.jsx)("section",{children:(0,s.jsx)("div",{className:"px-6 lg:px-20 w-full",children:(0,s.jsxs)("div",{className:"my-8 lg:my-14",children:[(0,s.jsx)("h1",{className:"text-center lg:text-left text-3xl lg-text-left lg:text-3xl text-black font-light mb-0 lg:mb-4",children:"Contact Form"}),(0,s.jsxs)("form",{onSubmit:h((function(e,t){return A.apply(this,arguments)})),children:[(0,s.jsxs)("div",{className:"flex flex-wrap w-full",children:[(0,s.jsxs)("div",{className:"w-full lg:w-1/2 px-0 lg:px-6",children:[(0,s.jsxs)("div",{className:"font-light h-6 mt-3 text-black text-sm leading-8 uppercase",children:[(0,s.jsx)("span",{className:"text-blue-400 mr-1",children:"*"})," Enter your First name:"]}),(0,s.jsx)("div",{className:"my-2 bg-white p-1 flex border border-gray-400",children:(0,s.jsx)("input",d({placeholder:"First Name*",type:"text",autoComplete:"name"},n("firstName",{minLength:{value:2,message:"First name must be at least 2 characters"},required:"Your first name is required"}),{className:"p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800"}))}),m.firstName&&(0,s.jsx)("p",{className:"text-red-500 text-xs ml-2",children:m.firstName.message})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 px-0 lg:px-6",children:[(0,s.jsxs)("div",{className:"font-light h-6 mt-3 text-black text-sm leading-8 uppercase",children:[(0,s.jsx)("span",{className:"text-blue-400 mr-1",children:"*"})," Enter your Last name:"]}),(0,s.jsx)("div",{className:"my-2 bg-white p-1 flex border border-gray-400",children:(0,s.jsx)("input",d({placeholder:"Last Name*",type:"text",autoComplete:"name"},n("lastName",{minLength:{value:2,message:"Last name must be at least 2 characters"},required:"Your last name is required"}),{className:"p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800"}))}),m.lastName&&(0,s.jsx)("p",{className:"text-red-500 text-xs ml-2",children:m.lastName.message})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 px-0 lg:px-6",children:[(0,s.jsxs)("div",{className:"font-light h-6 mt-3 text-black text-sm leading-8 uppercase",children:[(0,s.jsx)("span",{className:"text-blue-400 mr-1",children:"*"})," Enter your phone number:"]}),(0,s.jsx)("div",{className:"my-2 bg-white p-1 flex border border-gray-400",children:(0,s.jsx)("input",d({placeholder:"Phone number*",type:"text",autoComplete:"tel"},n("phone",{minLength:{value:8,message:"Number must be at least 8 characters"},required:"Your phone number is required"}),{className:"p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800"}))}),m.phone&&(0,s.jsx)("p",{className:"text-red-500 text-xs ml-2",children:m.phone.message})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 px-0 lg:px-6",children:[(0,s.jsxs)("div",{className:"font-light h-6 mt-3 text-black text-sm leading-8 uppercase",children:[(0,s.jsx)("span",{className:"text-blue-400 mr-1",children:"*"})," Enter your Email:"]}),(0,s.jsx)("div",{className:"my-2 bg-white p-1 flex border border-gray-400",children:(0,s.jsx)("input",d({placeholder:"Email*",type:"email",autoComplete:"email"},n("email",{required:{value:!0,message:"A valid email is required"},pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Please enter a valid Email"}}),{className:"p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800"}))}),m.email&&(0,s.jsx)("p",{className:"text-red-500 text-xs ml-2",children:m.email.message})]}),(0,s.jsxs)("div",{className:"w-full lg:w-full px-0 lg:px-6",children:[(0,s.jsxs)("div",{className:"font-light h-6 mt-3 text-black text-sm leading-8 uppercase",children:[(0,s.jsx)("span",{className:"text-blue-400 mr-1",children:"*"})," Your Enquiry:"]}),(0,s.jsx)("div",{className:"my-2 bg-white p-1 flex border border-gray-400",children:(0,s.jsx)("textarea",d({placeholder:"What's your enquiry?*",type:"text",style:{height:150}},n("enquiry",{minLength:{value:10,message:"Enquiry must be at least 10 characters"},required:"Your enquiry is required"}),{className:"p-1 px-2 text-sm appearance-none outline-none w-full text-gray-800"}))}),m.enquiry&&(0,s.jsx)("p",{className:"text-red-500 text-xs ml-2",children:m.enquiry.message})]})]}),(0,s.jsxs)("div",{className:"mt-6 text-center lg:text-left",children:[(0,s.jsxs)("button",{className:"text-lg lg-text-left lg:text-xl text-black font-light mb-2 inline-flex",children:[t?(0,s.jsx)("p",{children:"Thank you!"}):(0,s.jsx)("p",{children:"Submit Form"}),(0,s.jsx)("svg",{"aria-hidden":"true",width:"11",height:"10",fill:"none",className:"flex-none ml-3 mt-2.5 text-black",children:(0,s.jsx)("path",{d:"M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z",fill:"currentColor"})})]}),(0,s.jsx)("div",{className:"hidden lg:flex w-1/6 border-t border-black"})]})]})]})})})};var p={headerTitle:"Get in touch",imageUrl:{src:"/_next/static/media/contact-us-header.3838f816.jpg",height:1281,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAJsGv//EAB0QAAIBBAMAAAAAAAAAAAAAAAECAwAEBRESFDL/2gAIAQEAAT8AePs4db923LC4RQQCOPnRr//EABYRAAMAAAAAAAAAAAAAAAAAAAABQf/aAAgBAgEBPwBU/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/AMG//9k="},headerUrl:"Contact"},g=function(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{title:p.headerTitle,url:p.imageUrl,headerUrl:p.headerUrl}),(0,s.jsx)(a.Z,{title:"We'd love to hear from you.",sub:"Please contact us via email or the contact form below to discuss new business or other queries."}),(0,s.jsx)("div",{className:"mx-auto px-6 lg:px-20 w-full",children:(0,s.jsx)("div",{className:"my-4 lg:my-8",children:(0,s.jsxs)("p",{className:"text-center lg:text-left text-black text-lg lg:text-xl font-extralight",children:["Email: ",(0,s.jsxs)("span",{children:[" ",(0,s.jsx)("a",{href:"mailto:info@aptrasco.com",className:"font-light hover:text-blue-400",children:"info@aptrasco.com"})]})]})})}),(0,s.jsx)(A,{})]})}}},function(e){e.O(0,[667,536,774,888,179],(function(){return t=3269,e(e.s=t);var t}));var t=e.O();_N_E=t}]);