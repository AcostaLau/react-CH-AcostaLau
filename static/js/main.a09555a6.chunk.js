(this["webpackJsonpla-app"]=this["webpackJsonpla-app"]||[]).push([[0],{62:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c(24),n=c.n(s),r=c(15),i=c(13),o=(c(55),c(4)),l=c(12),j=c(30),d=(c(61),j.a.initializeApp({apiKey:"AIzaSyBGTRXDdqvgTHbpx6shEVjDHeOmuvoKUVA",authDomain:"banapple-7665d.firebaseapp.com",projectId:"banapple-7665d",storageBucket:"banapple-7665d.appspot.com",messagingSenderId:"383954937603",appId:"1:383954937603:web:265da599f934fa7a5a2b36"}));function b(){return j.a.firestore(d)}var h=c(81),u=(c(62),c(2)),x=function(e){var t=e.data;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(h.a,{style:{width:"33rem"},children:[Object(u.jsx)(h.a.Img,{variant:"top",src:t.imagen}),Object(u.jsxs)(h.a.Body,{children:[Object(u.jsx)(h.a.Title,{children:t.nombre}),Object(u.jsx)("div",{className:"contenedorBotonesItem",children:Object(u.jsx)(r.b,{to:"/detalle/".concat(t.id),children:Object(u.jsx)("button",{className:"botonVerMas",children:"Ver mas"})})})]})]})})},O=(c(68),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.f)().idProducto;return Object(a.useEffect)((function(){var e=b();(n?e.collection("Items").where("categoria","==",n).get():e.collection("Items").get()).then((function(e){return s(e.docs.map((function(e){return Object(o.a)({id:e.id},e.data())})))}))}),[n]),c.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(x,{data:e},e.id)})}))}),m=(c(69),c(70),function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{className:"filtrosUl",children:[Object(u.jsx)("li",{className:"filtrosLi",children:Object(u.jsx)(r.b,{to:"/",children:Object(u.jsx)("button",{className:"botonFiltro",children:" Todas las Marcas"})})}),Object(u.jsx)("li",{className:"filtrosLi",children:Object(u.jsx)(r.b,{to:"/producto/adidas",children:Object(u.jsx)("button",{className:"botonFiltro",children:" adidas"})})}),Object(u.jsx)("li",{className:"filtrosLi",children:Object(u.jsx)(r.b,{to:"/producto/nike",children:Object(u.jsx)("button",{className:"botonFiltro",children:" nike"})})}),Object(u.jsx)("li",{className:"filtrosLi",children:Object(u.jsx)(r.b,{to:"/producto/jordan",children:Object(u.jsx)("button",{className:"botonFiltro",children:"jordan"})})})]})})}),p=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"h1",children:"Nuestros productos"}),Object(u.jsx)(m,{}),Object(u.jsx)("div",{className:"containerItemList",children:Object(u.jsx)(O,{})})]})},f=(c(71),c(72),function(e){var t=e.valorInicial,c=e.stock,s=e.funcion,n=Object(a.useState)(t),i=Object(l.a)(n,2),o=i[0],j=i[1],d=Object(a.useState)(!1),b=Object(l.a)(d,2),h=b[0],x=b[1];return Object(u.jsx)("div",{children:h?Object(u.jsxs)("div",{className:"separoBotones",children:[Object(u.jsxs)(r.b,{to:"/cart",class:"fancy",href:"#",children:[Object(u.jsx)("span",{class:"top-key"}),Object(u.jsx)("span",{class:"text",children:"Terminar compra"}),Object(u.jsx)("span",{class:"bottom-key-1"}),Object(u.jsx)("span",{class:"bottom-key-2"})]}),Object(u.jsxs)(r.b,{to:"/",class:"fancy",href:"#",children:[Object(u.jsx)("span",{class:"top-key"}),Object(u.jsx)("span",{class:"text",children:"Seguir comprando"}),Object(u.jsx)("span",{class:"bottom-key-1"}),Object(u.jsx)("span",{class:"bottom-key-2"})]})]}):Object(u.jsxs)("div",{className:"contenedorBoton",children:[Object(u.jsx)("button",{onClick:function(){if(o===c)return o;j(o+1)},className:"sumaYResta",children:"+"}),Object(u.jsx)("p",{children:o}),Object(u.jsx)("button",{onClick:function(){if(1===o)return o;j(o-1)},className:"sumaYResta",children:"-"}),Object(u.jsxs)("button",{class:"cta",children:[Object(u.jsx)("span",{class:"hover-underline-animation",onClick:function(){x(!0),s(o)},children:" Agregar al carrito "}),Object(u.jsx)("svg",{id:"arrow-horizontal",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"10",viewBox:"0 0 46 16",children:Object(u.jsx)("path",{id:"Path_10","data-name":"Path 10",d:"M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z",transform:"translate(30)"})})]})]})})}),v=(c(73),c(33)),g=Object(a.createContext)(),N=function(e){var t=e.children,c=Object(a.useState)([]),s=Object(l.a)(c,2),n=s[0],r=s[1];return Object(u.jsx)(g.Provider,{value:{cartList:n,sumaTotal:function(){return n.reduce((function(e,t){return e+t.producto.precio*t.cantidad}),0)},agregarItem:function(e){var t=n.find((function(t){return t.producto.id===e.producto.id}));t?(t.cantidad=t.cantidad+e.cantidad,r(n)):r((function(t){return[].concat(Object(v.a)(t),[e])}))},removerItem:function(e){r(n.filter((function(t){return t.producto.id!==e})))},limpiarCarrito:function(){r([])}},children:t})},w=function(e){var t=e.producto,c=Object(a.useContext)(g),s=c.cartList,n=c.agregarItem,r=Object(a.useState)(1),i=Object(l.a)(r,2),o=i[0],j=i[1];return console.log("hola",s),Object(u.jsx)("div",{className:"contenedorDetalle",children:Object(u.jsxs)(h.a,{className:"cardDetail",children:[Object(u.jsx)("div",{children:Object(u.jsx)(h.a.Img,{className:"imgDetalle",variant:"top",src:t.imagen})}),Object(u.jsxs)(h.a.Body,{children:[Object(u.jsx)("div",{className:"contenedorTitulo",children:Object(u.jsx)(h.a.Title,{className:"nombreDetalle",children:t.nombre})}),Object(u.jsx)(h.a.Text,{className:"cardText",children:"sizes 8-10"}),Object(u.jsxs)(h.a.Text,{className:"cardText",children:["Coste: $",t.precio]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(f,{valorInicial:o,stock:10,funcion:function(e){j(e),n({producto:t,cantidad:e})}}),"'"]})]})]})})},y=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.f)().idProducto;return Object(a.useEffect)((function(){b().collection("Items").doc(n).get().then((function(e){return s(Object(o.a)({id:e.id},e.data()))})).catch((function(e){return alert("error ".concat(e))}))}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(w,{producto:c})})},C=c.p+"static/media/logo.a2a9d614.png",I=c(39),T=(c(74),function(){var e=Object(a.useContext)(g).cartList;return Object(u.jsx)("div",{children:e.length?Object(u.jsx)("div",{children:Object(u.jsxs)(r.b,{to:"/cart",className:"containerCartWidget",children:[Object(u.jsx)(I.a,{className:"cartWidget"}),Object(u.jsx)("p",{className:"cantidad",children:e.length})]})}):Object(u.jsx)(r.b,{to:"/cart",className:"containerCartWidget",children:Object(u.jsx)(I.a,{className:"cartWidget"})})})}),k=(c(75),function(){return Object(u.jsxs)("ul",{className:"listaUl",children:[Object(u.jsx)("li",{className:"padreLogo",children:Object(u.jsx)("img",{className:"logoImagen",src:C,alt:"logo"})}),Object(u.jsxs)("div",{className:"divContainer",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"tama\xf1oTexto",to:"/",children:"Inicio"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{className:"tama\xf1oWidget",to:"/carrito",children:Object(u.jsx)(T,{})})})]})]})}),B=c(19),S=c(80),F=c(79),D=(c(76),c(38)),L=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],n=function(){return s(!1)},i=Object(a.useState)(""),d=Object(l.a)(i,2),x=d[0],O=d[1],m=Object(a.useState)({name:"",phone:"",email:""}),p=Object(l.a)(m,2),f=p[0],v=p[1],N=Object(a.useContext)(g),w=N.cartList,y=N.limpiarCarrito,C=N.removerItem,I=N.sumaTotal,T=function(){n(),y(),function(){var e={};e.date=j.a.firestore.Timestamp.fromDate(new Date),e.buyer=f,e.total=I(),e.items=w.map((function(e){return{id:e.producto.id,nombre:e.producto.nombre,precio:e.producto.precio*e.cantidad}})),b().collection("orders").add(e).then((function(e){return O(e.id)})).catch((function(e){return alert("Error:",e)})).finally((function(){return y()}))}()};return Object(u.jsxs)("div",{className:"containerCart",children:[Object(u.jsx)("h1",{children:"Carrito"}),w.length?Object(u.jsxs)("div",{className:"containerFinalizarCompra",children:[Object(u.jsxs)("button",{className:"removerItems",onClick:function(){return s(!0)},children:[Object(u.jsx)("span",{class:"shadow"}),Object(u.jsx)("span",{class:"edge"}),Object(u.jsx)("span",{class:"front text",children:" Terminar compra"})]}),Object(u.jsxs)("h3",{children:["Monto total : ",I()]})]}):""===x?Object(u.jsxs)("div",{className:"cartVacio",children:[Object(u.jsx)("p",{className:"empty-cart",children:"El carrito est\xe1 vac\xedo"}),Object(u.jsx)(r.b,{className:"go-to-home",to:"/",children:" Ir al inicio"})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{className:"empty-cart compraFinalizada",children:"\xa1Gracias por tu compra!"}),Object(u.jsxs)("p",{className:"order-id",children:["Tu c\xf3digo de operaci\xf3n es: ",x]}),Object(u.jsx)(r.b,{className:"go-to-home",to:"/",children:" Ir al inicio"})]}),w.map((function(e){return Object(u.jsx)("div",{className:"containerCartBody",children:Object(u.jsxs)(h.a,{className:"cardDetailCart",children:[Object(u.jsx)(h.a.Img,{className:"imgDetalle",variant:"top",src:e.producto.imagen}),Object(u.jsxs)(h.a.Body,{className:"containerBody",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"contenedorTitulo",children:Object(u.jsx)(h.a.Title,{className:"nombreDetalle",children:e.producto.nombre})}),Object(u.jsxs)(h.a.Text,{className:"cardText",children:["cantidad : ",e.cantidad]}),Object(u.jsxs)(S.a.Select,{"aria-label":"Default select example",className:"talles",children:[Object(u.jsx)("option",{children:"Selecciona el talle"}),Object(u.jsx)("option",{value:"1",children:"8"}),Object(u.jsx)("option",{value:"2",children:"9"}),Object(u.jsx)("option",{value:"3",children:"10"})]}),Object(u.jsxs)(h.a.Text,{className:"cardText",children:["Coste : ",e.cantidad*e.producto.precio]})]}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{class:"noselect removerItem",onClick:function(){return C(e.producto.id)},children:[Object(u.jsx)("span",{class:"text",children:"Eliminar"}),Object(u.jsx)("span",{class:"icon",children:Object(u.jsx)("svg",{viewBox:"0 0 24 24",height:"24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:Object(u.jsx)("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})})})]})})]})]})},e.producto.id)})),Object(u.jsxs)(F.a,{show:c,onHide:n,children:[Object(u.jsx)(F.a.Header,{closeButton:!0,children:Object(u.jsx)(F.a.Title,{className:"titleForm",children:"Completar datos para finalizar la compra "})}),Object(u.jsx)(F.a.Body,{children:Object(u.jsxs)("form",{className:"cartForm",onChange:function(e){v(Object(o.a)(Object(o.a)({},f),{},Object(B.a)({},e.target.name,e.target.value)))},children:[Object(u.jsx)("input",{type:"text",name:"name",placeholder:"Nombre",value:f.name,required:!0}),Object(u.jsx)("input",{type:"text",name:"phone",placeholder:"Telefono",value:f.phone,required:!0}),Object(u.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:f.email,required:!0})]})}),Object(u.jsxs)(F.a.Footer,{className:"modalFooter",children:[Object(u.jsxs)(D.a,{variant:"secondary",onClick:n,className:"closeForm",children:[Object(u.jsx)("svg",{height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 1024 1024",children:Object(u.jsx)("path",{d:"M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"})}),Object(u.jsx)("span",{children:"Back"})]}),Object(u.jsxs)(D.a,{variant:"primary",onClick:function(){if(!(f.length=!0))return alert("completar fomulario");T()},className:"closeButton",children:[Object(u.jsx)("div",{class:"svg-wrapper-1",children:Object(u.jsx)("div",{class:"svg-wrapper",children:Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:[Object(u.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(u.jsx)("path",{fill:"currentColor",d:"M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"})]})})}),Object(u.jsx)("span",{children:"Send"})]})]})]})]})};function z(){return Object(u.jsx)(N,{children:Object(u.jsx)(r.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)(k,{})}),Object(u.jsx)("body",{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",component:p}),Object(u.jsx)(i.a,{exact:!0,path:"/producto/:idProducto",component:p})," ",Object(u.jsx)(i.a,{exact:!0,path:"/detalle/:idProducto",component:y}),Object(u.jsx)(i.a,{exact:!0,path:"/cart",component:L})]})})]})})})}n.a.render(Object(u.jsx)(z,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.a09555a6.chunk.js.map