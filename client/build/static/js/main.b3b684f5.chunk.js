(window["webpackJsonpgoogle-books"]=window["webpackJsonpgoogle-books"]||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},23:function(e,t,n){},24:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(12),l=n.n(r);n(23),n(24);var c=function(e){return o.a.createElement("div",{className:"container"},e.children)};var s=function(){return o.a.createElement("div",{className:"jumbotron"},o.a.createElement("h1",{className:"display-4"},"Google Books Search!"),o.a.createElement("p",{className:"lead"},"Search for a book using the Google Books search API!."),o.a.createElement("hr",{className:"my-4"}),o.a.createElement("p",null,"It's fun and easy to use!"),o.a.createElement("button",{class:"btn btn-danger"},"See Saved Books"))},u=n(13),i=n(14),m=n(16),h=n(15),f=n(17),p=n(2),v=n.n(p),b="https://www.googleapis.com/books/v1/volumes?q=",g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",results:[]},n.handleInputChange=function(){n.setState({query:n.search.value})},n.getInfo=function(){v.a.get("".concat(b).concat(n.state.query)).then((function(e){var t=e.data.items;n.setState({results:t})}))},n.handleSubmit=function(e){e.preventDefault()},n}return Object(f.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://www.googleapis.com/books/v1/volumes?q=Harry%20Potter").then((function(t){console.log(t.data.items);var n=t.data.items;e.setState({results:n})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{placeholder:"Search for a book!",ref:function(t){return e.search=t},onChange:this.handleInputChange}),o.a.createElement("p",null,this.state.query),o.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.getInfo},"Search"),o.a.createElement("ul",{onChange:this.getInfo},this.state.results.map((function(e){return o.a.createElement("div",null,o.a.createElement("li",null,"Title: ",e.volumeInfo.title)," ",o.a.createElement("button",{type:"button",className:"btn btn-primary"},"Save Book!"),o.a.createElement("p",null,"Author('s): ",e.volumeInfo.authors[0]),o.a.createElement("p",null,"Description: ",e.volumeInfo.description),o.a.createElement("a",{href:e.volumeInfo.infoLink},"Check this book out on the google store!"),o.a.createElement("br",null),o.a.createElement("img",{src:e.volumeInfo.imageLinks.smallThumbnail}))}))))}}]),t}(o.a.Component);var d=function(){return o.a.createElement(c,null,o.a.createElement(s,null),o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b3b684f5.chunk.js.map