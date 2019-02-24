(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(52)},23:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),c=a.n(o),l=a(5),s=a(6),i=a(8),u=a(7),m=a(9),h=(a(23),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.handleChange=function(e){a.setState({term:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.handleSearch(a.state.term)},a.handleClear=function(){a.setState({term:""})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-box"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"search",name:"book",onChange:this.handleChange,value:this.state.term||"",className:"search-bar",placeholder:"Search by book title or author..."}),r.a.createElement("input",{className:"search-btn",type:"submit",value:"Search"})))}}]),t}(n.Component)),b=a(15),d=a(1),f=a(16);function p(){var e=Object(b.a)(["\n    display: block;\n    margin: 0 auto;\n"]);return p=function(){return e},e}var g=Object(d.css)(p()),E=function(e){var t=e.books,a=e.loading;return t?a?r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(f.GridLoader,{css:g,sizeUnit:"px",size:15,color:"#CD637E",loading:a})):t&&!a&&t.length>0?r.a.createElement("div",{className:"book-container"},function(e){return console.log(e),e.map(function(e){var t=e.volumeInfo;return r.a.createElement("div",{key:e.id,className:"each-book"},t.imageLinks?r.a.createElement("img",{src:t.imageLinks.thumbnail,alt:t.title}):r.a.createElement("img",{src:"https://images.unsplash.com/photo-1537495329792-41ae41ad3bf0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:"no cover book",className:"dif-img"}),r.a.createElement("div",{className:"info-box"},r.a.createElement("h2",null,t.title),t.authors?t.authors.map(function(e){return r.a.createElement("p",{key:e},"By: ",e)}):r.a.createElement("p",null,"By: No authors"),r.a.createElement("p",null,"Published By: ",t.publisher),r.a.createElement("a",{className:"link-btn",href:t.infoLink,target:"_blank",rel:"noopener noreferrer"},"See this Book")))})}(t)):r.a.createElement("div",{className:"no-show"},"Nothing here yet - Try searching for a book!"):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"empty-term"},"Error: Please provide a search query first!"),r.a.createElement("div",{className:"no-show"},"Nothing here yet. Try searching for a book"))},k="AIzaSyDZxzQuy1uILwjT2gmtt9ltmZjR7sCla8Q",v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],loading:null},a.handleSearch=function(e){""===e?a.setState({books:null,loading:!1}):(a.setState({books:[],loading:!0}),setTimeout(function(){return fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(e,"&maxResults=20&key=").concat(k)).then(function(e){return e.json()}).then(function(e){return a.setState({books:e.items,loading:!1})}).catch(function(e){return console.log(e)})},1e3))},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"BOOK FINDER"),r.a.createElement(h,{handleSearch:this.handleSearch}),r.a.createElement(E,{books:this.state.books,loading:this.state.loading}))}}]),t}(n.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.594b158d.chunk.js.map