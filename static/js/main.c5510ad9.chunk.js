(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],Array(21).concat([function(e,t,a){var n={"./css3.svg":40,"./dash.svg":41,"./flask.svg":42,"./github.svg":43,"./heroku.svg":44,"./html5.svg":45,"./java.svg":46,"./javascript.svg":47,"./linux.svg":48,"./mac.svg":49,"./mysql.svg":50,"./netbeans.svg":51,"./pycharm.svg":52,"./python.svg":53,"./react.svg":54,"./vscode.svg":55,"./windows.svg":56};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=21},function(e,t,a){var n={"./appt-app.png":57,"./delivery-app.png":58,"./inventory-app.png":59,"./news-analyzer-app.png":60,"./react-app.png":61};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=22},,function(e,t,a){e.exports=a.p+"static/media/jeremy_final_dialogs_circle.2692441b.png"},,function(e,t,a){e.exports=a(66)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/css3.7685cf84.svg"},function(e,t,a){e.exports=a.p+"static/media/dash.10fd71c3.svg"},function(e,t,a){e.exports=a.p+"static/media/flask.eb1e38d3.svg"},function(e,t,a){e.exports=a.p+"static/media/github.ab1dea8d.svg"},function(e,t,a){e.exports=a.p+"static/media/heroku.0d9b5b26.svg"},function(e,t,a){e.exports=a.p+"static/media/html5.b7b69ef0.svg"},function(e,t,a){e.exports=a.p+"static/media/java.c995cc35.svg"},function(e,t,a){e.exports=a.p+"static/media/javascript.1732674d.svg"},function(e,t,a){e.exports=a.p+"static/media/linux.bad696d7.svg"},function(e,t,a){e.exports=a.p+"static/media/mac.851971b6.svg"},function(e,t,a){e.exports=a.p+"static/media/mysql.80cfd368.svg"},function(e,t,a){e.exports=a.p+"static/media/netbeans.6af68515.svg"},function(e,t,a){e.exports=a.p+"static/media/pycharm.82e3bbb5.svg"},function(e,t,a){e.exports=a.p+"static/media/python.c095cd03.svg"},function(e,t,a){e.exports=a.p+"static/media/react.d01d0f47.svg"},function(e,t,a){e.exports=a.p+"static/media/vscode.9c93c19b.svg"},function(e,t,a){e.exports=a.p+"static/media/windows.27f529ca.svg"},function(e,t,a){e.exports=a.p+"static/media/appt-app.964b9e83.png"},function(e,t,a){e.exports=a.p+"static/media/delivery-app.ebbcc072.png"},function(e,t,a){e.exports=a.p+"static/media/inventory-app.021a0978.png"},function(e,t,a){e.exports=a.p+"static/media/news-analyzer-app.335ecef2.png"},function(e,t,a){e.exports=a.p+"static/media/react-app.d69817cf.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return J}));var n=a(9),r=a(10),i=a(12),s=a(11),o=a(0),c=a.n(o),l=a(13),m=a.n(l),u=a(14),d=a(2),p=a(69),h=a(68),f=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:e.hRef,className:"ext-link",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:e.iconName})))},v=(a(31),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).showHideSmallNavbar=function(){if(window.innerWidth<=678){var e=r.state.navbarNavShowHide?"":"navbar-nav-active",t=r.state.spinChevron?"":"collapse-icon-spin",a=r.state.fadeNavLinks?"":"navbar-link-show";r.setState({navbarNavShowHide:e,spinChevron:t}),setTimeout((function(){r.setState({fadeNavLinks:a})}),500)}},r.state={navbarNavShowHide:"",spinChevron:"",fadeNavLinks:""},r}return Object(r.a)(a,[{key:"createNav",value:function(e,t){var a="navbar-link "+this.state.fadeNavLinks,n=e.href?this.extLink(e):this.navLink(e);return c.a.createElement("li",{key:e+t,className:a,name:e.title},n)}},{key:"navLink",value:function(e){return c.a.createElement(u.b,{onClick:this.showHideSmallNavbar,to:e.path},e.title)}},{key:"extLink",value:function(e){return c.a.createElement(f,{onClick:this.showHideSmallNavbar,hRef:e.href,iconName:e.icon})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"navbar"},c.a.createElement(u.b,{className:"navbar-brand",to:this.props.routeNames[0].path,name:this.props.routeNames[0].title},this.props.navBrand),c.a.createElement("ul",{className:"navbar-nav "+this.state.navbarNavShowHide},this.props.routeNames.map((function(e,t){return t>0?this.createNav(e,t):null}),this),this.props.extLinks.map((function(t,a){return e.createNav(t,a)}))),c.a.createElement("div",{className:"navbar-collapse"},c.a.createElement("i",{onClick:this.showHideSmallNavbar,className:"fa fa-chevron-left fa-lg collapse-icon "+this.state.spinChevron,"aria-hidden":"true"})))}}]),a}(c.a.Component)),g=(a(37),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"createFooterLinks",value:function(e,t){var a=e.title,n=e.href,r=e.icon;return c.a.createElement("li",{key:t,className:"footer-link",name:a},c.a.createElement(f,{hRef:n,iconName:r+" fa-2x"}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"footer"},c.a.createElement("ul",{className:"footer-list"},this.props.extLinks.map((function(t,a){return e.createFooterLinks(t,a)}))),c.a.createElement("div",{className:"footer-copyright"},c.a.createElement("h4",{className:"copyright-text"},"Copyright \xa9 Jeremy Bergevin 2020")))}}]),a}(c.a.Component)),b=a(7),y=(a(38),a(24)),w=a.n(y),k="I am a software engineer. I sincerely care about the craft of system and user interface\n  design. A well made piece of software offers future adaptability and\n  modifiability. My hope is to produce tools for users which decrease\n  unnecessary friction that can arise as humans interact more\n  and more with digital technology.",N=function(e){return c.a.createElement("div",{className:e.className+" home-body"},c.a.createElement("div",{className:"portrait-container"},c.a.createElement("div",null,c.a.createElement("img",{src:w.a,className:"portrait",alt:"My Portrait"}))),c.a.createElement("div",{className:"bio-container"},c.a.createElement("h1",{className:"bio-header"},"Hi, I'm Jeremy"),c.a.createElement("p",{className:"bio-body"},"\u2003",k)))},E=(a(39),function(e){var t=Object(o.useState)(!0),n=Object(b.a)(t,2),r=n[0],i=n[1],s=Object(o.useState)(!0),l=Object(b.a)(s,2),m=l[0],u=l[1],d=a(22)("./".concat(e.path));return c.a.createElement("div",{className:"modal-wrapper"},c.a.createElement("div",{className:"modal-backdrop ".concat(r?"fade-in":"fade-out")}),c.a.createElement("div",{className:"modal-box ".concat(m?"slide-in":"slide-out")},c.a.createElement("button",{className:"modal-close",onClick:function(){i(!1),u(!1),setTimeout((function(){e.onClose()}),1e3)}},c.a.createElement("i",{className:"fa fa-times fa-2x","aria-hidden":"true"})),c.a.createElement("div",{className:"modal-img"},c.a.createElement("img",{className:"project-img",src:d,alt:e.title}),c.a.createElement("ul",{className:"modal-tech"},e.tech.map((function(e,t){return function(e,t){return c.a.createElement("li",{key:e+t,className:"tech-item "},c.a.createElement("img",{src:a(21)("./".concat(e.toLowerCase(),".svg")),alt:e,title:e}))}(e,t)}))),c.a.createElement("button",{onClick:function(){return function(e){if(e.startsWith("http"))return window.open(e,"_blank"),null;alert(e)}(e.url)},className:"modal-btn"},"Tutorial")),c.a.createElement("div",{className:"modal-details-wrapper "},c.a.createElement("div",{className:"modal-body "},c.a.createElement("h1",{className:"modal-body-title "},e.title),c.a.createElement("hr",null),c.a.createElement("p",{className:"modal-body-desc modal-text"},"\u2003",e.desc),c.a.createElement("h3",{className:"modal-body-dev "},"Development"),c.a.createElement("hr",null),c.a.createElement("p",{className:"modal-body-dev-desc modal-text"},"\u2003",e.dev)))))}),j=(a(62),[{path:"news-analyzer-app.png",title:"News Analyzer",desc:"This app was my capstone project for my Computer Science degree. \n    It is a machine learning app that attempts to determine the veracity of a news article. \n    The app presents the user with 6 different articles to read and run through the prediction model.\n    There is also a dashboard of various plots to show ways in which the data was wrangled to train the model.",dev:"The dataset for this project was sourced from kaggle.com and then cleaned and processed inside a jupyter notebook. \n    Once the data had been prepared I utilized a voting classifier model which combined a logistic regression model and a \n    random forest classifier model. The web interface backend utilized Python and the Flask framework and was hosted on Heroku.\n    The frontend was handled with Flask templating, HTML5, CSS3. The dashboard was implemented using the Dash library.",id:3,tech:["Flask","Python","Dash","HTML5","CSS3","VSCode","Heroku"],url:"https://youtu.be/34VcKqU2wms"},{path:"appt-app.png",title:"Consultant Portal",desc:"This app was for my Software 2 course. It is a consultant's portal for a consulting firm. It allows users\n    who are registered in the database to sign-in and view their daily schedule. Users can also add new clients to \n    their roster and create appointments with those clients. Furhter, users can view reports of their appointment types on a monthly basis.",dev:"The consultant portal was developed with Java and the GUI constructed with JavaFX and includes a database connection supported \n    by MySQL. All of the data is loaded into the application on a per consultant basis. The application also supports localization based \n    upon the login in location of the consultant. Appointment times are reflected in the local time and saved in UTC per the same. \n    A variety of input validation is implemented including disallowing overlapping schedule times between multiple consultant appointments.",id:0,tech:["Java","MySQL","Netbeans"],url:"https://youtu.be/wXKDcukQzGQ"},{path:"inventory-app.png",title:"Inventory Management",desc:"This app was for my Software 1 course. It is a commercial inventory app for an parts manufacture. It allows the manufacture to \n    create and save a variety of parts and products to their shop inventory. The products are constructed of parts and both inventories are \n    searchable with plain text.",dev:"The inventory management app was programmed in Java and the GUI constructed with JavaFX. The data is local and temporarily stored. \n    Input validation is included in all the forms based on data type.",id:2,tech:["Java","Netbeans"],url:"https://youtu.be/8p2Ug1-gKPk"},{path:"react-app.png",title:"Portfolio Website",desc:"Wait!..What? How did this get here? Well, after graduating I wanted to learn React.js\n    and what better way to learn a new technology than by refurbishing an old project for the purpose. So\n    here we are. It was a really fun process and I may have the previous site link around here somewhere...\n    for comparisons-sake, of course.",dev:"This project was developed using React, HTML5, CSS3, and JavaScript. The routing and transitions are\n    implemented with React-Router. No other outside frameworks or libraries were used. Everything from the \n    layout and design, to the responsiveness was tuned specifically by yours truly.",id:4,tech:["React","Javascript","HTML5","CSS3","VSCode"],url:"That's this site, silly!"},{path:"delivery-app.png",title:"Traveling Salesman",desc:"This project was created for my Data Structures & Algorithms 2 course. It is my take on the\n    traveling salesman problem. The program is a basic console-based application which utilizes manual\n    programmatic partitioning and the K-Nearest Neighbors algorithm to load a set of three trucks with\n    packages and deliver those packages in the least number of miles possible. Within the console the\n    user can advance the time in the day and see the status of any package in the itinerary at a particular\n    time. Once complete the program outputs the final mileage accumulated by all of the trucks.",dev:"The traveling salesman app was programmed with Python in the Pycharm IDE. It implements an event \n    loop system which increments forward by 1 minute, though the user may advance time in greater increments.\n    Each truck object is allowed to add a package delivery event to the event loop and with each tick, the loop\n    checks if there are any events to fire. This progresses until a statically set time at which point the program\n    terminates.",id:1,tech:["Python","Pycharm"],url:"https://youtu.be/V0tcwRDLX6w"}]),x=function(e){var t=c.a.useState(null),n=Object(b.a)(t,2),r=n[0],i=n[1],s=function(){i(null)},o=function(e){var t=a(22)("./".concat(e.path)),n=r===e.id?m.a.createPortal(c.a.createElement(E,Object.assign({},e,{onClose:s})),document.getElementById("modal-root")):null;return c.a.createElement("div",{key:e.id+e.title,className:"gallery-item"},c.a.createElement("img",{src:t,alt:e.title,onClick:function(t){!function(e,t){e.preventDefault(),i(t)}(t,e.id)}}),n)};return c.a.createElement("div",{className:"".concat(e.className," ")},c.a.createElement("div",{className:"projects-gallery"},j.map((function(e){return o(e)}))))},S=(a(63),["css3","dash","flask","heroku","html5","java","javascript","mysql","netbeans","pycharm","python","react","vscode","github","linux","mac","windows"]),C=[{title:"professional",one:"In June 2020, I graduated with a Bachelors degree in Computer Science. I came to software engineering \n    via the electrical trade. Since beginning programming I've learned a wide variety of languages, libraries,\n    frameworks and love learning how new tools can be adapted to solve problems in creative ways.",two:"I am currently most proficient in Python & Javascript, but I really enjoy working with statically-typed, \n    object-oriented languages like C++ and Java. To that end, I'm currently learning C#. I am also trying to \n    improve my skills with graphic and user interface design while working on a variety of projects."},{title:"personal",one:"In my free time I play video games, tinker with electronics, and read. I am currently reteaching myself to play \n    the guitar after 15 years of dilly-dallying. Though I am a bit of introvert and enjoy being inside, it can be hard to \n    resist the wonderful outdoors here in the Pacific Northwest especially during the summer, whether that be hiking, swimming, \n    or just relaxing on the beach.",two:""}],O=function(e){var t=Object(o.useState)(C[0].title),n=Object(b.a)(t,2),r=n[0],i=n[1],s=function(e){i(e)};return c.a.createElement("div",{className:"".concat(e.className," about-me-body")},c.a.createElement("div",{className:"interests-container"},c.a.createElement("h1",{className:"interests-header"},"About Me"),c.a.createElement("div",{className:"interests-btns"},C.map((function(e,t){return function(e,t,a){var n=e.charAt(0).toUpperCase()+e.slice(1);return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{key:e+t,onClick:function(){return a(e)},className:"interest-btn-".concat(e)},n))}(e.title,t,s)}))),C.map((function(e,t){return c.a.createElement("div",{key:e.title+t,className:"interests-body ".concat(e.title,"-body ").concat(r===e.title?"visible-interest":"invisible-interest")},function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"\u2003",e.one),c.a.createElement("p",null,"\u2003",e.two))}(e))}))),c.a.createElement("div",{className:"skills-container"},c.a.createElement("h2",{className:"skills-header"},"Skills"),c.a.createElement("ul",{className:"skill-gallery"},S.map((function(e,t){return function(e,t){return c.a.createElement("li",{key:e+t,className:"skill-item"},c.a.createElement("img",{className:"skill-icon",src:a(21)("./".concat(e.toLowerCase(),".svg")),alt:e,title:e}))}(e,t)})))))},T=function(e){return c.a.createElement("div",{className:e.className},c.a.createElement("h1",null,"Contact Page"))},I=function(e){var t=Object(d.f)();return c.a.createElement("div",{className:"btn-container page-btn-"+e.direction},c.a.createElement("i",{className:"section-btn section-btn-"+e.direction+" fa fa-chevron-"+e.direction+" fa-lg",onClick:function(){t.push(e.toSection)}}))},L=(a(64),{Home:N,Projects:x,About:O,Contact:T}),P=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={},r}return Object(r.a)(a,[{key:"createPage",value:function(){var e=this.createSections(),t=Object(b.a)(e,2),a=t[0],n=t[1],r=L[this.props.pageTitle];return c.a.createElement(c.a.Fragment,null,a,c.a.createElement(r,{className:"page-body"}),n)}},{key:"createSections",value:function(){var e,t,a=this.props.routePos,n=this.props.routeArr;return a!==n.length-1?(e=0!==a?this.createBtn("up",n[a-1].path):this.createDeadBlock(),t=this.createBtn("down",n[a+1].path)):(e=this.createBtn("up",n[a-1].path),t=this.createDeadBlock()),[e,t]}},{key:"createBtn",value:function(e,t){return c.a.createElement(I,{direction:e,toSection:t})}},{key:"createDeadBlock",value:function(){return c.a.createElement("div",{className:"dead-block"},"\xa0")}},{key:"render",value:function(){var e=this.props.pageTitle.toLowerCase();return c.a.createElement("div",{className:e+"-page page-wrapper"},this.createPage())}}]),a}(c.a.Component),H=function(e){var t=Object(d.g)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(v,{navBrand:e.title,routeNames:e.header,extLinks:e.externalLinks}),c.a.createElement(p.a,null,c.a.createElement(h.a,{key:t.key,timeout:1e3,classNames:"fade"},c.a.createElement(d.c,{location:t},e.header.map((function(e,t,a){return c.a.createElement(d.a,{key:t,exact:!0,path:e.path,render:function(){return c.a.createElement(P,{routePos:t,routeArr:a,pageTitle:e.title})}})}))))),c.a.createElement(g,{extLinks:e.externalLinks}))},J=(a(65),function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={currentPath:"/",name:"Jeremy Bergevin",title:"jeremy.bergevin()",header:[{path:"/",title:"Home"},{path:"/about",title:"About"},{path:"/projects",title:"Projects"}],externalLinks:[{title:"Linkedin",href:"https://www.linkedin.com/in/bergevinjd/",icon:"fa fa-linkedin-square"},{title:"Github",href:"https://github.com/rufusgerm",icon:"fa fa-github-square"},{title:"Mail",href:"mailto:bergevinjd@gmail.com",icon:"fa fa-envelope-square"}]},r}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(d.a,{path:"*"},c.a.createElement(H,this.state)))}}]),a}(c.a.Component));m.a.render(c.a.createElement(J,null),document.querySelector("#main"))}]),[[26,1,2]]]);
//# sourceMappingURL=main.c5510ad9.chunk.js.map