(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(6),s=i.n(a),n=(i(14),i(8)),c=i(2),r=i(1),l=(i(15),i(9)),o=(i(16),i(17),i(0)),m=function(e){var t=e.title,i=e.description,a=e.imgUrl,s=e.imdbUrl;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{src:a,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8",children:t})})]}),Object(o.jsxs)("div",{className:"content",children:[i,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:s,children:"IMDB"})]})]})]})},d=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(m,Object(l.a)({},e),e.imdbId)}))})},j=(i(19),function(e){var t=e.addMovie,i=Object(r.useState)(""),a=Object(c.a)(i,2),s=a[0],n=a[1],l=Object(r.useState)(""),m=Object(c.a)(l,2),d=m[0],j=m[1],b=Object(r.useState)(""),u=Object(c.a)(b,2),h=u[0],p=u[1],g=Object(r.useState)(""),O=Object(c.a)(g,2),f=O[0],v=O[1],M=Object(r.useState)(""),x=Object(c.a)(M,2),w=x[0],N=x[1];return Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t({title:s,description:d,imgUrl:h,imdbUrl:f,imdbId:w}),n(""),j(""),p(""),v(""),N("")},children:[Object(o.jsx)("input",{"data-cy":"form-title",className:"input is-small",name:"title",value:s,type:"text",placeholder:"Title",onChange:function(e){return n(e.target.value)},required:!0}),Object(o.jsx)("textarea",{"data-cy":"form-description",className:"textarea is-small",name:"description",value:d,placeholder:"Description",onChange:function(e){return j(e.target.value)}}),Object(o.jsx)("input",{"data-cy":"form-imgUrl",className:"input is-small",name:"imgUrl",value:h,type:"text",placeholder:"imgUrl",onChange:function(e){return p(e.target.value)},required:!0}),Object(o.jsx)("input",{"data-cy":"form-imdbUrl",className:"input is-small",name:"imdbUrl",value:f,type:"text",placeholder:"imdbUrl",onChange:function(e){return v(e.target.value)},required:!0}),Object(o.jsx)("input",{"data-cy":"form-imdbId",className:"input is-small",name:"imdbId",value:w,type:"text",placeholder:"imdbId",onChange:function(e){return N(e.target.value)},required:!0}),Object(o.jsx)("button",{"data-cy":"form-submit-button",className:"button is-link",type:"submit",children:"Add"})]})}),b=i(7),u=function(){var e=Object(r.useState)(b),t=Object(c.a)(e,2),i=t[0],a=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(d,{movies:i})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(j,{addMovie:function(e){a((function(t){return[].concat(Object(n.a)(t),[e])}))}})})]})};s.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.c5627094.chunk.js.map