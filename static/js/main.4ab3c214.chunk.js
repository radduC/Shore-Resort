(this["webpackJsonpbeach-resort"]=this["webpackJsonpbeach-resort"]||[]).push([[0],{22:function(e,a,t){e.exports=t(60)},27:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},57:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(12),o=t.n(n),s=t(2),c=t(1);t(27);function m(){var e=["Home","Rooms","Contact Us"].map((function(e,a){switch(e){case"Home":return l.a.createElement("li",{key:a},l.a.createElement(c.c,{exact:!0,activeClassName:"active",className:"nav-link",to:"/"},"Home"));case"Rooms":return l.a.createElement("li",{key:a},l.a.createElement(c.c,{exact:!0,activeClassName:"active",className:"nav-link",to:"/view-rooms"},"Rooms"));default:return l.a.createElement("li",{key:a},l.a.createElement(c.c,{exact:!0,activeClassName:"active",className:"nav-link",to:"/contact"},"Contact Us"))}}));return l.a.createElement("nav",{className:"navbar"},l.a.createElement(c.b,{to:"/"},l.a.createElement("h1",{className:"navbar-brand"},"Shore ",l.a.createElement("span",{className:"resort"},"Resort"))),l.a.createElement("ul",{className:"nav"},e))}t(32);function i(e){var a=e.background,t=void 0===a?"beach-resort.jpg":a,r=e.title,n=e.content,o=e.btnLabel,s=void 0===o?"Our Rooms":o,m=e.link,i=void 0===m?"/view-rooms":m;return l.a.createElement("section",{className:"front-section-container",style:{backgroundImage:"url(Shore-Resort/images/".concat(t,")")}},l.a.createElement("div",{className:"front-section-central"},l.a.createElement("h1",{className:"front-section-title"},r),l.a.createElement("hr",null),l.a.createElement("p",{className:"front-section-content"},n),l.a.createElement(c.b,{to:i},l.a.createElement("button",{className:"front-section-button"},s))))}t(33);function u(e){var a=e.icon,t=e.title,r=e.desc;return l.a.createElement("div",{className:"card-container"},l.a.createElement("div",{className:"card-header"},l.a.createElement("span",{className:"card-icon"},l.a.createElement("i",{className:a})),l.a.createElement("h4",{className:"card-title"},t)),l.a.createElement("p",{className:"card-description"},r))}t(34);function p(){return l.a.createElement("div",{className:"services-container"},l.a.createElement("h1",{className:"services"},"Services"),l.a.createElement("hr",{className:"services-hr"}),l.a.createElement("div",{className:"services-grid"},l.a.createElement(u,{icon:"fas fa-cocktail",title:"Free Cocktails",desc:"Enjoy great flavors or challenge the bartender!"}),l.a.createElement(u,{icon:"fas fa-shuttle-van",title:"Free Shuttle",desc:"No need to worry about transport!"}),l.a.createElement(u,{icon:"fas fa-wifi",title:"Free Wi-Fi",desc:"You will never have to worry about the connection uptime or quality!"}),l.a.createElement(u,{icon:"fas fa-dumbbell",title:"Free Gym",desc:"Being on vacation does not need to get you out of shape! Our gym has everything you need."})))}t(35);function f(e){var a=e.price,t=e.img,r=e.desc;return l.a.createElement("div",{className:"room-container"},l.a.createElement("p",{className:"room-price"},l.a.createElement("span",{className:"span-price"},"$",a)," ",l.a.createElement("span",{className:"span-night"},"per night")),l.a.createElement("div",{className:"room-img-wrapper"},l.a.createElement("img",{className:"room-image",src:t,alt:"room"})),l.a.createElement("h2",{className:"h2"},r))}var d=[{featured:!0,background:"room-8.jpeg",type:"Family Deluxe",price:599,img_url:"images/room-8.jpeg",size:"80 mp",max_capacity:"4 persons",pets_allowed:!0,free_breakfast:!1,desc:"Great for big families!",room_url:"/view-rooms/room1",details:["details-2.jpeg","details-3.jpeg","details-4.jpeg"],extras:["Plush pillows and breathable bed linens","Soft, oversized bath towels","Full-sized, pH-balanced toiletries","Complimentary refreshments","Internet","Comfortable beds"]},{featured:!0,background:"room-2.jpeg",type:"Single Room",price:299,img_url:"images/room-2.jpeg",size:"60 mp",max_capacity:"1 person",pets_allowed:!0,free_breakfast:!0,desc:"Great for get aways!",room_url:"/view-rooms/room2",details:["room-10.jpeg","room-12.jpeg","room-11.jpeg"],extras:["Plush pillows and breathable bed linens","Soft, oversized bath towels","Full-sized, pH-balanced toiletries","Complimentary refreshments","Internet","Comfortable beds"]},{featured:!0,background:"room-5.jpeg",type:"Double Room",price:399,img_url:"images/room-5.jpeg",size:"70 mp",max_capacity:"2 persons",pets_allowed:!0,free_breakfast:!1,desc:"Great for friends!",room_url:"/view-rooms/room3",details:["room-9.jpeg","room-5.jpeg","room-7.jpeg"],extras:["Plush pillows and breathable bed linens","Soft, oversized bath towels","Full-sized, pH-balanced toiletries","Complimentary refreshments","Internet","Comfortable beds"]},{background:"room-11.jpeg",type:"Single Room",price:299,img_url:"images/room-11.jpeg",size:"60 mp",max_capacity:"1 person",pets_allowed:!1,free_breakfast:!1,desc:"Great for get aways!",room_url:"/view-rooms/room4",details:["room-6.jpeg","room-8.jpeg","room-4.jpeg"],extras:["Plush pillows and breathable bed linens","Soft, oversized bath towels","Full-sized, pH-balanced toiletries","Complimentary refreshments","Internet","Comfortable beds"]},{background:"details-1.jpeg",type:"Family Deluxe",price:499,img_url:"images/details-1.jpeg",size:"80 mp",max_capacity:"4 persons",pets_allowed:!1,free_breakfast:!0,desc:"Great for big families!",room_url:"/view-rooms/room5",details:["details-2.jpeg","details-3.jpeg","details-4.jpeg"],extras:["Plush pillows and breathable bed linens","Soft, oversized bath towels","Full-sized, pH-balanced toiletries","Complimentary refreshments","Internet","Comfortable beds"]},{background:"room-6.jpeg",type:"Double Room",price:399,img_url:"images/room-6.jpeg",size:"70 mp",max_capacity:"2 persons",pets_allowed:!1,free_breakfast:!0,desc:"Great for friends!",room_url:"/view-rooms/room6",details:["room-9.jpeg","room-5.jpeg","room-7.jpeg"],extras:["Plush pillows and breathable bed linens","Soft, oversized bath towels","Full-sized, pH-balanced toiletries","Complimentary refreshments","Internet","Comfortable beds"]},{background:"room-7.jpeg",type:"Family Deluxe",price:499,img_url:"images/room-7.jpeg",size:"80 mp",max_capacity:"4 persons",pets_allowed:!0,free_breakfast:!0,desc:"Great for big families!",room_url:"/view-rooms/room5",details:["details-2.jpeg","details-3.jpeg","details-4.jpeg"],extras:["Plush pillows and breathable bed linens","Soft, oversized bath towels","Full-sized, pH-balanced toiletries","Complimentary refreshments","Internet","Comfortable beds"]}];t(36);function E(){var e=d.filter((function(e){return e.featured})).map((function(e,a){return l.a.createElement(c.b,{key:a,to:e.room_url},l.a.createElement(f,{price:e.price,desc:e.type,img:e.img_url}))}));return l.a.createElement("div",{className:"featured-rooms-container"},l.a.createElement("h1",{className:"services"},"Featured Rooms"),l.a.createElement("hr",{className:"featured-rooms-hr"}),l.a.createElement("div",{className:"featured-rooms-grid"},e))}function b(){return l.a.createElement("div",null,l.a.createElement(i,{title:"Luxurious Rooms",content:"Deluxe Rooms starting at $199"}),l.a.createElement(p,null),l.a.createElement(E,null))}var g=t(6);t(37);function h(){var e=d.sort((function(e,a){return a.price-e.price})),a=e[0].price,t=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:C,o=[];o=r?l?"all"===t?e.filter((function(e){return e.price<=a&&e.pets_allowed&&e.free_breakfast})):e.filter((function(e){return e.type.toLowerCase().includes(t.toLowerCase())&&e.price<=a&&e.pets_allowed&&e.free_breakfast})):"all"===t?e.filter((function(e){return e.price<=a&&e.pets_allowed})):e.filter((function(e){return e.type.toLowerCase().includes(t.toLowerCase())&&e.price<=a&&e.pets_allowed})):l?"all"===t?e.filter((function(e){return e.price<=a&&e.free_breakfast})):e.filter((function(e){return e.type.toLowerCase().includes(t.toLowerCase())&&e.price<=a&&e.free_breakfast})):"all"===t?e.filter((function(e){return e.price<=a})):e.filter((function(e){return e.type.toLowerCase().includes(t.toLowerCase())&&e.price<=a})),i(n(o))},n=function(e){return e.map((function(e,a){return l.a.createElement(c.b,{key:a,to:e.room_url},l.a.createElement(f,{price:e.price,desc:e.type,img:e.img_url}))}))},o=Object(r.useState)([]),s=Object(g.a)(o,2),m=s[0],i=s[1],u=Object(r.useState)(a),p=Object(g.a)(u,2),E=p[0],b=p[1],h=Object(r.useState)("all"),v=Object(g.a)(h,2),N=v[0],y=v[1],k=Object(r.useState)(!1),j=Object(g.a)(k,2),w=j[0],_=j[1],x=Object(r.useState)(!1),S=Object(g.a)(x,2),C=S[0],F=S[1];return Object(r.useEffect)(t,[]),l.a.createElement("div",{className:"featured-rooms-container"},l.a.createElement("h1",{className:"services"},"Search Rooms"),l.a.createElement("hr",{className:"featured-rooms-hr"}),l.a.createElement("div",{className:"options-container"},l.a.createElement("span",{className:"options"},l.a.createElement("p",{className:"label"},"Room Price: $",l.a.createElement("span",{id:"room-price"},E)),l.a.createElement("div",null,l.a.createElement("input",{type:"range",name:"room-price-slider",id:"room-price-slider",min:0,max:a+1,step:10,value:E,onChange:function(e){b(Number(e.target.value)),t(Number(e.target.value),N,w,C)}}))),l.a.createElement("span",{className:"options"},l.a.createElement("p",{className:"label"},"Room Type"),l.a.createElement("div",null,l.a.createElement("select",{name:"room_type",id:"room_type",onChange:function(e){y(e.target.value),t(E,e.target.value,w,C)}},l.a.createElement("option",{value:"all"},"All"),l.a.createElement("option",{value:"Family"},"Family"),l.a.createElement("option",{value:"Double"},"Double"),l.a.createElement("option",{value:"Single"},"Single")))),l.a.createElement("span",{className:"options-checkboxes"},l.a.createElement("p",{className:"checkboxes"},l.a.createElement("input",{type:"checkbox",name:"pets",id:"pets",onChange:function(){t(E,N,!w,C),_(!w)}}),l.a.createElement("label",{htmlFor:"pets",className:"label-checkbox"}," ","Pets")),l.a.createElement("p",{className:"checkboxes"},l.a.createElement("input",{type:"checkbox",name:"breakfast",id:"breakfast",onChange:function(){t(E,N,w,!C),F(!C)}}),l.a.createElement("label",{htmlFor:"breakfast",className:"label-checkbox"}," ","Breakfast")))),l.a.createElement("section",{className:"rooms-grid"},m))}function v(){return l.a.createElement(i,{title:"404",content:"Page not found",btnLabel:"Return Home",link:"/"})}t(38);function N(){var e=Object(r.useState)(""),a=Object(g.a)(e,2),t=a[0],n=a[1],o=Object(r.useState)(""),s=Object(g.a)(o,2),c=s[0],m=s[1],i=Object(r.useState)(""),u=Object(g.a)(i,2),p=u[0],f=u[1],d=Object(r.useState)(""),E=Object(g.a)(d,2),b=E[0],h=E[1],v=Object(r.useState)(""),N=Object(g.a)(v,2),y=N[0],k=N[1],j=function(e){var a=e.target.name,t=e.target.value;switch(a){case"name":n(t);break;case"email":m(t);break;case"subject":f(t);break;case"message":h(t);break;default:console.log("Unknown parameter")}};return l.a.createElement("div",{className:"form-grid"},l.a.createElement("div",{className:"form-container"},l.a.createElement("h1",null,"Contact us"),l.a.createElement("p",null,y),l.a.createElement("form",{className:"form"},l.a.createElement("div",{className:"name-email-container"},l.a.createElement("label",{htmlFor:"name",className:"form-label"},"FULL NAME"),l.a.createElement("label",{htmlFor:"email",className:"form-label"},"EMAIL ADDRESS"),l.a.createElement("div",null,l.a.createElement("input",{className:"contact-form-input",type:"text",name:"name",id:"name",placeholder:"Name",required:!0,onChange:j}),"\u200b"),l.a.createElement("div",null,l.a.createElement("input",{className:"contact-form-input",type:"email",name:"email",id:"email",placeholder:"Email",required:!0,onChange:j}),"\u200b")),l.a.createElement("label",{htmlFor:"subject",className:"form-label form-label-message"},"SUBJECT"),l.a.createElement("div",null,l.a.createElement("input",{className:"contact-form-input contact-form-subject",type:"text",name:"subject",id:"subject",placeholder:"Subject",required:!0,onChange:j}),"\u200b"),l.a.createElement("label",{htmlFor:"message",className:"form-label form-label-message"},"MESSAGE"),l.a.createElement("div",null,l.a.createElement("textarea",{className:"contact-form-input contact-form-subject",name:"message",id:"message",placeholder:"Message",rows:"10",required:!0,onChange:j}),"\u200b"),l.a.createElement("input",{onClick:function(e){e.preventDefault();var a={name:t,email:c,subject:p,message:b};fetch("http://127.0.0.1:5000/save-message",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then(document.querySelectorAll(".contact-form-input").forEach((function(e){return e.value=""}))).then((function(){return k("Thank you, your message has been sent!")})).catch((function(){return k("Error!")}))},className:"contact-form-button",type:"submit",value:"Send message"}))),l.a.createElement("img",{className:"form-img",src:"Shore-Resort/images/defaultBcg.jpeg",alt:""}))}function y(){return l.a.createElement(N,null)}t(39);function k(){return l.a.createElement("footer",{className:"footer-container"},l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-logo"},l.a.createElement("h1",null,"Shore",l.a.createElement("span",{className:"footer-resort"}," Resort")),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur sequi officiis quidem voluptatum minima ut modi excepturi reprehenderit accusantium ducimus aperiam ea quasi fuga vel, libero eaque, minus tempora."),l.a.createElement("p",{className:"socialMedia-icons"},l.a.createElement(c.b,{to:""},l.a.createElement("i",{className:"fab fa-twitter socialmedia"})),l.a.createElement(c.b,{to:""},l.a.createElement("i",{className:"fab fa-facebook socialmedia"})),l.a.createElement(c.b,{to:""},l.a.createElement("i",{className:"fab fa-instagram socialmedia"})))),l.a.createElement("ul",{className:"footer-nav"},l.a.createElement("h3",null,"Services"),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-angle-right footer-nav-icon"}),l.a.createElement(c.b,{to:"",className:"footer-link"},"All inclusive")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-angle-right footer-nav-icon"}),l.a.createElement(c.b,{to:"",className:"footer-link"},"Rooms for pets")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-angle-right footer-nav-icon"}),l.a.createElement(c.b,{to:"",className:"footer-link"},"Massage")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-angle-right footer-nav-icon"}),l.a.createElement(c.b,{to:"",className:"footer-link"},"Indoor and outdoor activities")),l.a.createElement("li",null,l.a.createElement("i",{className:"fas fa-angle-right footer-nav-icon"}),l.a.createElement(c.b,{to:"",className:"footer-link"},"Car rental"))),l.a.createElement("div",{className:"footer-contact"},l.a.createElement("h3",null,"Contact Information"),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-map-marker-alt footer-resort"})," San Francisco, California, USA"),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-phone-alt footer-resort"})," +2 392 3929 210"),l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-envelope footer-resort"})," info@yourdomain.com")),l.a.createElement("div",{className:"footer-business-hours"},l.a.createElement("h3",null,"Business Hours:"),l.a.createElement("h4",{className:"footer-h4"},"Opening Days:"),l.a.createElement("p",null,"Monday \u2013 Friday : 9 to 20 "),l.a.createElement("p",null,"Saturday : 9 to 17 "),l.a.createElement("h4",{className:"footer-h4"},"Vacations:"),l.a.createElement("p",null,"All Sunday Days / All Official Holidays"))),l.a.createElement("p",{style:{textAlign:"center",paddingBottom:"30px"}},"Copyright \xa9",(new Date).getFullYear()," All rights reserved | Radu"))}var j=t(21),w=t.n(j);t(55),t(56),t(57);function _(e){var a=e.background,t=(e.img,e.price),r=e.type,n=e.size,o=e.capacity,s=(e.desc,e.pets),c=e.breakfast,m=e.extras,u=e.details,p=m.map((function(e,a){return l.a.createElement("p",{key:a,className:"features"},l.a.createElement("i",{className:"fas fa-caret-right"})," ",e)})),f=u.map((function(e,a){return l.a.createElement("div",{key:a,className:"room-img-wrapper"},l.a.createElement("img",{src:"/images/".concat(e),alt:"room",className:"room-image"}))})),d={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,fade:!0};return l.a.createElement("div",null,l.a.createElement(i,{background:a,title:r,btnLabel:"Other rooms"}),l.a.createElement("div",{className:"carousel"},l.a.createElement(w.a,d,f)),l.a.createElement("div",{className:"room_container"},l.a.createElement("span",null,l.a.createElement("h1",null,"Details"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur sequi officiis quidem voluptatum minima ut modi excepturi reprehenderit accusantium ducimus aperiam ea quasi fuga vel, libero eaque, minus tempora. Vitae quidem totam possimus incidunt mollitia soluta voluptatem nisi blanditiis consequatur dignissimos! Explicabo repellat minus eos omnis tempora rem sit porro, vel tempore maxime velit quisquam? Numquam nostrum nisi iste.")),l.a.createElement("span",null,l.a.createElement("h1",null,"Info"),l.a.createElement("p",{className:"features"},"Price: $",t),l.a.createElement("p",{className:"features"},"Size: ",n),l.a.createElement("p",{className:"features"},"Capacity: ",o),c?l.a.createElement("p",{className:"features"},"Free breakfast"):l.a.createElement("p",{className:"features"},"Breakfast not included"),s?l.a.createElement("p",{className:"features"},"Pets allowed"):l.a.createElement("p",{className:"features"},"Pets not allowed")),l.a.createElement("span",null,l.a.createElement("h1",null,"Extras"),p)))}var x=function(){var e=d.map((function(e,a){var t=e.background,r=e.type,n=e.price,o=e.img_url,c=e.size,m=e.max_capacity,i=e.pets_allowed,u=e.free_breakfast,p=e.desc,f=e.extras,d=e.details,E=e.room_url;return l.a.createElement(s.a,{key:a,exact:!0,path:E},l.a.createElement(_,{background:t,type:r,price:n,desc:p,img:o,size:c,capacity:m,pets:i,breakfast:u,extras:f,details:d}))}));return l.a.createElement(c.a,null,l.a.createElement(m,null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/"},l.a.createElement(b,null)),l.a.createElement(s.a,{exact:!0,path:"/view-rooms"},l.a.createElement(h,null)),e,l.a.createElement(s.a,{exact:!0,path:"/book-rooms"},l.a.createElement(b,null)),l.a.createElement(s.a,{exact:!0,path:"/contact"},l.a.createElement(y,null)),l.a.createElement(s.a,null,l.a.createElement(v,null))),l.a.createElement(k,null))};t(58),t(59);o.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4ab3c214.chunk.js.map