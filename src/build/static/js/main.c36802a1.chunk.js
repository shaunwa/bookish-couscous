(this["webpackJsonpreact-blog-fe"]=this["webpackJsonpreact-blog-fe"]||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),u=n.n(a),i=n(17),l=n.n(i),s=(n(24),n(6)),r=n(1),c=function(){return u.a.createElement("nav",null,u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(s.b,{to:"/"},"Home")),u.a.createElement("li",null,u.a.createElement(s.b,{to:"/about/"},"About")),u.a.createElement("li",null,u.a.createElement(s.b,{to:"/articles-list/"},"Articles"))))},o=function(){return u.a.createElement("h1",null,"Hi, I'm the about page")},m=n(7),d=n.n(m),p=n(9),v=n(11),g=function(e){var t=e.articleName,n=e.setArticleInfo,i=Object(a.useState)(""),l=Object(v.a)(i,2),s=l[0],r=l[1],c=Object(a.useState)(""),o=Object(v.a)(c,2),m=o[0],g=o[1],f=function(){var e=Object(p.a)(d.a.mark((function e(){var a,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({comment:{postedBy:s,text:m}}),headers:{"Content-Type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:u=e.sent,n(u),r(""),g("");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement("div",{id:"add-comment-form"},u.a.createElement("h3",null,"Add a Comment"),u.a.createElement("label",null,"Name:",u.a.createElement("input",{type:"text",value:s,onChange:function(e){return r(e.target.value)}})),u.a.createElement("label",null,"Comment:",u.a.createElement("textarea",{rows:"4",cols:"50",type:"text",value:m,onChange:function(e){return g(e.target.value)}})),u.a.createElement("button",{onClick:f},"Add Comment"))},f=function(e){var t=e.comments;return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Comments:"),t.map((function(e,t){return u.a.createElement("div",{className:"comment",key:t},u.a.createElement("h4",null,e.postedBy),u.a.createElement("p",null,e.text))})))},b=function(){return u.a.createElement("h1",null,"404: Page Not Found")},h=function(e){var t=e.upvotes,n=e.articleName,a=e.setArticleInfo,i=function(){var e=Object(p.a)(d.a.mark((function e(){var t,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(n,"/upvote"),{method:"post"});case 2:return t=e.sent,e.next=5,t.json();case 5:u=e.sent,a(u);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return u.a.createElement("div",{id:"upvotes-section"},u.a.createElement("button",{onClick:i},"Add Upvote"),u.a.createElement("p",null,"This article has ",t," upvotes"))},E=[{name:"learn-react",title:"The Fastest Way to Learn React",content:["Welcome! Today we're going to be talking about the fastest way to\n            learn React. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"learn-node",title:"How to Build a Node Server in 10 Minutes",content:["In this article, we're going to be talking looking at a very quick way\n            to set up a Node.js server. We'll be discussing some topics such as proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]},{name:"my-thoughts-on-resumes",title:"My Thoughts on Resumes",content:["Today is the day I talk about something which scares most people: resumes.\n            In reality, I'm not sure why people have such a hard time with proin congue\n            ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. \n            Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, \n            non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut \n            eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at \n            sodales purus euismod.","Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet.","Etiam nec lectus urna. Sed sodales ultrices dapibus. \n            Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan \n            nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus \n            sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor \n            interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id \n            consequat quam. Vivamus accumsan dui in facilisis aliquet."]}],q=function(){var e=Object(a.useState)({upvotes:0,comments:[]}),t=Object(v.a)(e,2),n=t[0],i=t[1],l=Object(r.f)().name;Object(a.useEffect)((function(){(function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(l));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),i(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]);var s=E.find((function(e){return e.name===l}));return s?u.a.createElement(u.a.Fragment,null,u.a.createElement(h,{upvotes:n.upvotes,articleName:l,setArticleInfo:i}),s.content.map((function(e,t){return u.a.createElement("p",{key:t},e)})),u.a.createElement(g,{articleName:l,setArticleInfo:i}),u.a.createElement(f,{comments:n.comments})):u.a.createElement(b,null)},N=function(e){var t=e.articles;return u.a.createElement(u.a.Fragment,null,t.map((function(e){return u.a.createElement(s.b,{to:"/article/".concat(e.name),className:"article-list-item",key:e.name},u.a.createElement("h3",null,e.title),u.a.createElement("p",null,e.content[0].substring(0,150),"..."))})))},y=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Articles"),u.a.createElement(N,{articles:E}))},w=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",null,"Hello, welcome to my blog!"),u.a.createElement("p",null,"Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod."),u.a.createElement("p",null,"Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"),u.a.createElement("p",null,"Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"))};n(31);var A=function(){return u.a.createElement(s.a,null,u.a.createElement("div",{className:"App"},u.a.createElement(c,null),u.a.createElement("div",{id:"page-body"},u.a.createElement(r.c,null,u.a.createElement(r.a,{path:"/",exact:!0},u.a.createElement(w,null)),u.a.createElement(r.a,{path:"/about"},u.a.createElement(o,null)),u.a.createElement(r.a,{path:"/articles-list"},u.a.createElement(y,null)),u.a.createElement(r.a,{path:"/article/:name"},u.a.createElement(q,null)),u.a.createElement(r.a,null,u.a.createElement(b,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c36802a1.chunk.js.map