(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{111:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),i=t.n(r),c=(t(77),t(25)),s=t(18),o=(t(78),t(79),t(81),t(4)),m=t(36),u=t(9),d=t(53),p=t.n(d),h=function(){var e=Object(n.useState)(new Array(o.j.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],r=a[1],i=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",r(a)):"leave"===e.event?(a[e.icon.id]="socialicons",r(a)):void 0};return l.a.createElement("div",null,l.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},l.a.createElement("div",{id:"stars"}),l.a.createElement("div",{className:"container container-fluid text-center "},l.a.createElement("h1",{className:"display-1"},o.a+" "+o.c+" "+o.b),l.a.createElement(p.a,{className:"lead"}," ",o.f),l.a.createElement("div",{className:"p-5"},o.j.map((function(e){return l.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},l.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return i({icon:e,event:"enter"})},onMouseOut:function(){return i({icon:e,event:"leave"})}}))}))),l.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},g=t(21),b=t.n(g),f=t(31),E=t.n(f),v=t(54),w=t.n(v),N=(t(99),{display:"flex",flexDirection:"row",alignItems:"center"}),y=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=(a[0],a[1]),r=Object(n.useState)(o.p),i=Object(u.a)(r,2),c=i[0],s=i[1],m=Object(n.useState)(E.a),d=Object(u.a)(m,1)[0];Object(n.useEffect)((function(){c&&p()}),[c]);var p=function(e){b.a.get(o.k+o.m+o.l).then((function(e){return t(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return s(!1),console.error(e.message)})).finally((function(){}))};return l.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row",style:N},l.a.createElement("div",{className:"col-5 d-none d-lg-inline align-self-center"},l.a.createElement("img",{className:"border border-secondary rounded-circle",src:w.a,alt:"profilepicture",width:"375",height:"375"})),l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-5 text-center"},o.e),l.a.createElement("p",{className:"lead text-center"},o.d),l.a.createElement("br",null),d&&l.a.createElement("p",{className:"lead text-center"},l.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:E.a,target:"_blank",rel:"noreferrer noopener",role:"button"},"Resume"))))))},x=function(e){var a=e.value,t=Object(n.useState)([]),r=Object(u.a)(t,2),i=r[0],c=r[1],s=Object(n.useCallback)((function(e){b.a.get(a).then((function(e){return c(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){s()}),[s]);var o=[],m=0;for(var d in i)o.push(d),m+=i[d];return l.a.createElement("div",{className:"pb-3"},"Languages:"," ",o.map((function(e){return l.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(i[e]/m*1e3)/10," %")})))},k=function(e){var a=e.value,t=Object(n.useState)("0 mints"),r=Object(u.a)(t,2),i=r[0],c=r[1],s=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),l=Math.trunc(n/1e3/60/60);if(l<24)return c("".concat(l.toString()," hours ago"));var r=t.getDate(),i=t.getMonth(),s=t.getFullYear();return c("on ".concat(r," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ").concat(s))}),[a.pushed_at]);Object(n.useEffect)((function(){s()}),[s]);var o=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,h=a.languages_url;return l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},o," "),l.a.createElement("p",{className:"card-text"},m," "),l.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},l.a.createElement("i",{className:"fab fa-github"})," Clone Project"),l.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},l.a.createElement("i",{className:"fab fa-github"})," Repo"),l.a.createElement("hr",null),l.a.createElement(x,{value:h}),l.a.createElement("p",{className:"card-text"},l.a.createElement("span",{className:"text-dark card-link mr-4"},l.a.createElement("i",{className:"fab fa-github"})," Stars"," ",l.a.createElement("span",{className:"badge badge-dark"},p)),l.a.createElement("small",{className:"text-muted"},"Updated ",i)))))},j=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],r=a[1],i=Object(n.useCallback)((function(e){b.a.get(o.g+o.i+o.h).then((function(e){return r(e.data.slice(0,o.o))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){i()}),[i]),l.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},t.length&&l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("h1",{className:"display-4 pb-5 text-center"},o.n),l.a.createElement("div",{className:"row"},t.map((function(e){return l.a.createElement(k,{key:e.id,id:e.id,value:e})})))))},C=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=(Object(u.a)(e,1)[0],Object(n.useState)(new Array(o.j.length).fill("sociali"))),t=Object(u.a)(a,2);t[0],t[1];return l.a.createElement("div",{id:"contact",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"d-inline align-self-center"},l.a.createElement("h2",{className:"display-4 pb-3 text-center"},"Get In Touch"),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"I'm currently looking for full-time Software Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",l.a.createElement("a",{href:"mailto:ana.a.ashrafi@gmail.com"}," ","ana.a.ashrafi@gmail.com"),"."),l.a.createElement("footer",{style:{backgroundColor:"white"},className:"mt-auto py-3 text-center"},l.a.createElement("i",{className:"fas fa-code"})," with ",l.a.createElement("i",{className:"fas fa-heart"})," by"," ",l.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/anaashrafi","aria-label":"My GitHub"},"Ana Ashrafi")," ","using ",l.a.createElement("i",{className:"fab fa-react"})))))},S=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),r=t[0],i=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==r&&i(e)}))}),[r]),l.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(r?"bg-transparent":"bg-gradient"," ")},l.a.createElement("a",{className:"navbar-brand",href:"/home/#home"},"<".concat(o.a," />")),l.a.createElement("button",{className:"d-none navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},l.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#aboutme"},l.a.createElement("b",null,"About"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#experience"},l.a.createElement("b",null,"Experience"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#projects"},l.a.createElement("b",null,"Projects"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#leadership"},l.a.createElement("b",null,"Leadership"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link lead",href:"/home/#skills"},l.a.createElement("b",null,"Skills"))))))},O=t(57),q=function e(a){var t=this,r=a.title,i=a.image,c=a.description;Object(O.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(l.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(l.a.createElement(n.Fragment,{key:t.list.length},l.a.createElement("h1",{className:""},e),l.a.createElement("hr",null))),t},this.getBlog=function(){return l.a.createElement("div",{className:"container-lg"},t.list)},this.title=r,this.image=i,this.description=c},I=[],P=new q({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),A=new q({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");I.push(A),I.push(P);var M=t(15),_=t(60),L=t.n(_),T=t(61),D=t.n(T),H=t(62),J=t.n(H),z=t(63),B=t.n(z),F=t(64),Q=t.n(F),R=t(65),G=t.n(R),K=t(66),U=t.n(K),V=t(67),W=t.n(V),Y=function(){return l.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-3 text-center"},"Leadership"),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("p",{className:"lead text-left"},"Throughout my college career, I've been extremely grateful to have opportunities to lead my peers and make an impact on the Austin community. In my role as the ",l.a.createElement("b",null,"Vice President of the Student Engineering Council"),", I cultivated a culture of inclusivity, collaboration, and ambition through leading new-member recruitment and community building events. Prior to that position, I led service intiatives that contributed 28,664 meals to the Central Texas Food Bank and over $3,000 to the SAFE Alliance in my position as the ",l.a.createElement("b",null,"Service Director of the Student Engineering Council"),". Outside of these roles, I worked to level the playing field in STEM by mentoring and teaching children of lower socioeconomic status through my role as a ",l.a.createElement("b",null,"Code Orange Mentor"),".")),l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement(M.a,null,l.a.createElement(M.a.Item,null,l.a.createElement("img",{className:"rounded",src:D.a,alt:"culture",width:"615",height:"450"})),l.a.createElement(M.a.Item,null,l.a.createElement("img",{className:"rounded",src:L.a,alt:"service",width:"615",height:"450"})),l.a.createElement(M.a.Item,null,l.a.createElement("img",{className:"rounded",src:U.a,alt:"SEC",width:"615",height:"450"})),l.a.createElement(M.a.Item,null,l.a.createElement("img",{className:"rounded",src:Q.a,alt:"zilker",width:"615",height:"450"})),l.a.createElement(M.a.Item,null,l.a.createElement("img",{className:"rounded",src:W.a,alt:"custodialappreciation",width:"615",height:"450"})),l.a.createElement(M.a.Item,null,l.a.createElement("img",{className:"rounded",src:J.a,alt:"committee",width:"615",height:"450"})),l.a.createElement(M.a.Item,null,l.a.createElement("img",{className:"rounded",src:B.a,alt:"volunteer",width:"615",height:"450"})),l.a.createElement(M.a.Item,null,l.a.createElement("img",{className:"rounded",src:G.a,alt:"family",width:"615",height:"450"})))))))))},$=t(69),X=t.n($),Z=t(70),ee=t.n(Z),ae={display:"flex",flexDirection:"row",alignItems:"center"},te=function(){return l.a.createElement("div",{id:"experience",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col d-lg-inline align-self-center"},l.a.createElement("h1",{className:"display-4 mb-5 text-center"},"Experience"),l.a.createElement("div",{className:"row",style:ae},l.a.createElement("div",{className:"col text-center"},l.a.createElement("img",{src:ee.a,alt:"dell technologies logo",width:"420",height:"70"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"Software Engineer Intern",l.a.createElement("br",null),"June - July 2020")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("img",{src:X.a,alt:"boeing logo",width:"300",height:"80"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{className:"lead text-center",style:{fontSize:"22px"}},"Software Engineer Intern",l.a.createElement("br",null),"May - August 2019")))))))},ne=t(7),le=t(71),re=t(43),ie=function(){return l.a.createElement("div",{id:"skills",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"#f7f7f7"}},l.a.createElement("div",{className:"container container-fluid"},l.a.createElement("div",{className:"d-inline align-self-center"},l.a.createElement("h1",{className:"display-4 pb-5 text-center"},"Skills"),l.a.createElement(le.a,{defaultActiveKey:"home",justify:!0,variant:"tabs",transition:!1,id:"skills-tabs",style:{backgroundColor:"#f7f7f7",fontSize:"1.25rem"}},l.a.createElement(re.a,{eventKey:"home",title:"Hard Skills"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"Java",l.a.createElement(ne.a,{now:95,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"C#",l.a.createElement(ne.a,{now:80,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"C/C++",l.a.createElement(ne.a,{now:75,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Python",l.a.createElement(ne.a,{now:60,style:{width:"490px",backgroundColor:"white"}}))),l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"Javascript",l.a.createElement(ne.a,{now:90,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"HTML/CSS",l.a.createElement(ne.a,{now:90,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"SQL",l.a.createElement(ne.a,{now:80,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"React",l.a.createElement(ne.a,{now:50,style:{width:"490px",backgroundColor:"white"}}))))),l.a.createElement(re.a,{eventKey:"soft",title:"Soft Skills"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"Goal-Oriented",l.a.createElement(ne.a,{now:95,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Collaboration",l.a.createElement(ne.a,{now:92,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Positivity",l.a.createElement(ne.a,{now:90,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Adaptability",l.a.createElement(ne.a,{now:83,style:{width:"490px",backgroundColor:"white"}}))),l.a.createElement("div",{className:"col"},l.a.createElement("br",null),l.a.createElement("p",{className:"lead"},"Problem Solving",l.a.createElement(ne.a,{now:90,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Empathy",l.a.createElement(ne.a,{now:85,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Organization",l.a.createElement(ne.a,{now:85,style:{width:"490px",backgroundColor:"white"}})),l.a.createElement("p",{className:"lead"},"Creativity",l.a.createElement(ne.a,{now:70,style:{width:"490px",backgroundColor:"white"}})))))))))},ce=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(h,null),l.a.createElement(y,null),l.a.createElement(te,null),l.a.createElement(j,null),l.a.createElement(Y,null),l.a.createElement(ie,null))},se=function(){return l.a.createElement(c.a,{basename:"/home/"},o.q&&l.a.createElement(S,null),l.a.createElement(s.a,{path:"/",exact:!0,component:ce}),l.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},31:function(e,a,t){e.exports=t.p+"static/media/resume.4777d9e5.pdf"},4:function(e){e.exports=JSON.parse('{"a":"Ana","c":"","b":"Ashrafi","f":"Passionate about changing the world with technology.","j":[{"id":0,"image":"fa-github","url":"https://github.com/anaashrafi","style":"socialicons"},{"id":1,"image":"fa-facebook","url":"https://www.facebook.com/anaaashrafi","style":"socialicons"},{"id":2,"image":"fa-instagram","url":"https://www.instagram.com/ana_ashhh/","style":"socialicons"},{"id":3,"image":"fa-linkedin","url":"https://www.linkedin.com/in/ana-ashrafi","style":"socialicons"}],"e":"About Me","p":false,"k":"https://www.instagram.com/","m":"ana_ashhh","l":"/?__a=1","d":"Hello! My name is Ana and I am a Software Engineer from the University of Texas at Austin. I will be graduating with my Bachelor\'s degree in Electrical and Computer Engineering in May of 2021. The past two summers, I interned as a Software Engineer at Boeing and Dell Technologies, and I cannot wait for my next journey. I\'m most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering!","n":"Recent Projects","g":"https://api.github.com/users/","i":"anaashrafi","h":"/repos?sort=updated&direction=desc","o":2,"q":true}')},54:function(e,a,t){e.exports=t.p+"static/media/Profile.15cb58a8.jpg"},60:function(e,a,t){e.exports=t.p+"static/media/service.afb11bbb.jpg"},61:function(e,a,t){e.exports=t.p+"static/media/culture.518ff441.jpg"},62:function(e,a,t){e.exports=t.p+"static/media/committee.241c3b8e.jpg"},63:function(e,a,t){e.exports=t.p+"static/media/park.89c83c3b.jpg"},64:function(e,a,t){e.exports=t.p+"static/media/zilker.d5cfdb85.jpg"},65:function(e,a,t){e.exports=t.p+"static/media/retreat.d7e03d05.jpg"},66:function(e,a,t){e.exports=t.p+"static/media/sec.0113f82a.jpg"},67:function(e,a,t){e.exports=t.p+"static/media/custodians.2d2b2b61.jpg"},69:function(e,a,t){e.exports=t.p+"static/media/boeing.1096cc9a.jpg"},70:function(e,a,t){e.exports=t.p+"static/media/dell-logo.fad82548.jpg"},72:function(e,a,t){e.exports=t(111)},77:function(e,a,t){},81:function(e,a,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.e683d7bc.chunk.js.map