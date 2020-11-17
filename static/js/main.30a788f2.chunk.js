(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{32:function(e,a,t){e.exports=t(66)},37:function(e,a,t){},38:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),s=t.n(i),o=(t(37),t(8)),c=t(1);t(38);var m=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/",className:"nav__item"},"Home"),r.a.createElement(o.b,{to:"/about",className:"nav__item"},"About"))},l=t(17),u=t.n(l),d=t(30),g=t(10),v=t(11),h=t(13),p=t(12),y=t(31),b=t.n(y),E=(t(62),t(4)),f=t.n(E);t(63);function _(e){var a=e.id,t=e.year,n=e.genres,i=e.title,s=e.summary,c=e.coverImg,m=e.bgImg;return r.a.createElement(o.b,{to:{pathname:"/movie/".concat(a),state:{year:t,title:i,summary:s,genres:n,coverImg:c,bgImg:m}},className:"movie"},r.a.createElement("img",{src:c,alt:i,title:i}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h1",{className:"movie__title"},i),r.a.createElement("div",{className:"movie__year"},t),r.a.createElement("p",null,s.length<280?s:s.slice(0,280)+"..."),r.a.createElement("ul",{className:"movie__genres"},n.map((function(e,a){return r.a.createElement("li",{key:a,className:"movie___genre"},e)})))))}_.propType={id:f.a.number.isRequired,year:f.a.number.isRequired,genres:f.a.array.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,coverImg:f.a.string.isRequired,bgImg:f.a.string.isRequired};var N=_,w=function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(g.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e}return Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"getMovies",value:function(){var e=Object(d.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://yts.mx/api/v2/list_movies.json");case 2:a=e.sent,t=a.data.data.movies,this.setState({movies:t,isLoading:!1});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(N,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,genres:e.genres,coverImg:e.medium_cover_image,bgImg:e.background_image_original})}))))}}]),t}(r.a.Component),k=(t(64),function(e){Object(h.a)(t,e);var a=Object(p.a)(t);function t(e){var n;Object(g.a)(this,t);var r=(n=a.call(this,e)).props,i=r.location;r.history;return i.state,n}return Object(v.a)(t,[{key:"render",value:function(){var e=this.props.location;return e.state||(e.state={year:1999,title:"Instinct",summary:"Nearly two years after having gone amiss in Africa, renowned anthropologist Dr. Ethan Powell (Sir Anthony Hopkins) is caught committing a crime and subsequently imprisoned in a Florida mental institution, where aspiring psychiatrist Dr. Theo Caulder (Cuba Gooding, Jr.) takes over his important case. Dr. Powell, who has been with a group of gorillas during all that time, is not talking at all, and seems to be living in a dreamworld. Very slowly, Dr. Caulder manages to reach Ethan and starts finding out why he killed two of the poachers. Yet, Theo's case is not just about why the murders have happened, but also about how Dr. Powell became the being he is in the first place. With Ethan's silence broken, Theo is introduced into a world beyond common human comprehension: The true nature of being. He learns that mankind's control of everything is a mere illusion and that the true values of existence can't be found so easily. Ethan changes Theo's view of things forever.",genres:["Drama","Thriller"],coverImg:"https://yts.mx/assets/images/movies/instinct_1999/medium-cover.jpg",bgImg:"https://yts.mx/assets/images/movies/instinct_1999/background.jpg"}),console.log(e),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"detail-wrapper"},r.a.createElement("div",{className:"detail"},r.a.createElement("img",{className:"detail__cover",src:e.state.coverImg}),r.a.createElement("div",{className:"detail__data"},r.a.createElement("h1",{className:"detail__title"},e.state.title),r.a.createElement("div",{className:"detail__year"},e.state.year),r.a.createElement("div",{className:"detail__genres"},e.state.genres),r.a.createElement("p",{className:"detail__summary"},e.state.summary))),r.a.createElement("img",{className:"bg",src:e.state.bgImg})))}}]),t}(r.a.Component));t(65);var j=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"loader"},"React.js \ud559\uc2b5\uc744 \uc704\ud55c \uc601\ud654 \uc571"))};var I=function(){return r.a.createElement(o.a,null,r.a.createElement(m,null),r.a.createElement(c.a,{path:"/",exact:!0,component:w}),r.a.createElement(c.a,{path:"/about",exact:!0,component:j}),r.a.createElement(c.a,{path:"/movie/:id",exact:!0,component:k}))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.30a788f2.chunk.js.map