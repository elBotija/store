(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e){e.exports=[{id:0,nombre:"HTML5",precio:25,imagen:"camisa_1",descripcion:"Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."},{id:1,nombre:"CSS3",precio:25,imagen:"camisa_2",descripcion:"Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."},{id:2,nombre:"NodeJS",precio:30,imagen:"camisa_3",descripcion:"Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."},{id:3,nombre:"JavaScript",precio:25,imagen:"camisa_4",descripcion:"Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."},{id:4,nombre:"Angular",precio:20,imagen:"camisa_5",descripcion:"Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."},{id:5,nombre:"Github",precio:20,imagen:"camisa_6",descripcion:"Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."},{id:6,nombre:"WordPress",precio:25,imagen:"camisa_7",descripcion:"Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."},{id:7,nombre:"React",precio:20,imagen:"camisa_8",descripcion:"Mauris eu mi vitae dui imperdiet finibus id id orci. Morbi iaculis blandit augue rutrum laoreet. Etiam maximus bibendum nisi id tincidunt. Donec laoreet purus eleifend, semper urna quis, auctor felis. Etiam ultricies quis urna sed porttitor. Praesent sit amet dolor orci. Nam lacus purus, varius sit amet enim vitae, lobortis auctor diam. Morbi in tempor arcu. Aliquam efficitur lacus in ante viverra dapibus."}]},24:function(e,t,i){e.exports=i(44)},29:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){"use strict";i.r(t);var a=i(0),r=i.n(a),n=i(19),u=i.n(n),o=(i(29),i(2)),c=i(3),s=i(5),l=i(4),m=i(6),d=i(23),p=i(10),b=i(11),f=function(e){var t=e.info,i=t.imagen,a=t.nombre,n=t.precio,u=t.id;return r.a.createElement("li",null,r.a.createElement("img",{src:"/img/".concat(i,".png"),alt:a}),r.a.createElement("p",null,a," ",r.a.createElement("span",null,"$ ",n)),r.a.createElement(p.b,{to:"/producto/".concat(u)},"Mas info"))},v=(i(38),i(39),function(e){function t(){var e,i;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(i=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).leerDatos=function(e){var t=e.target.value;i.props.busqueda(t)},i}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"buscador"},r.a.createElement("input",{type:"text",placeholder:"Busqueda",onChange:this.leerDatos}))}}]),t}(a.Component)),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"productos"},r.a.createElement("h2",null,"Nuestros Productos"),r.a.createElement(v,{busqueda:this.props.busquedaProducto}),r.a.createElement("ul",{className:"lista-productos"},this.props.productos.map(function(e,t){return r.a.createElement(f,{info:e,key:t})})))}}]),t}(a.Component),h=(i(40),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contenedor-nosotros"},r.a.createElement("div",{className:"imagen"},r.a.createElement("img",{src:"/img/camisa_1.png",alt:"imagen nosotros"})),r.a.createElement("div",{className:"contenido"},r.a.createElement("h2",null,"Sobre nosotros"),r.a.createElement("p",null,"What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))}}]),t}(a.Component)),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Pagina no disponible")}}]),t}(a.Component),y=i(22),q=function(){return r.a.createElement("header",null,r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:"/img/logo.png",alt:"logo"})))},j=(i(41),function(){return r.a.createElement("nav",{className:"navegacion"},r.a.createElement(p.c,{to:"/nosotros",activeClassName:"activo"},"Nosotros"),r.a.createElement(p.c,{to:"/productos",activeClassName:"activo"},"Productos"),r.a.createElement(p.c,{to:"/contacto",activeClassName:"activo"},"Contacto"))}),N=(i(42),function(){return r.a.createElement("form",null,r.a.createElement("legend",null,"Formulario de contacto"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Nombre:"),r.a.createElement("input",{type:"text",placeholder:"Tu Nombre"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",placeholder:"Tu Email"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",null,"Mensaje:"),r.a.createElement("textarea",null)),r.a.createElement("div",{className:"input-field enviar"},r.a.createElement("input",{type:"submit",value:"Enviar"})))}),O=(i(43),function(e){if(!e.producto)return null;var t=e.producto,i=t.imagen,a=t.nombre,n=t.precio,u=t.descripcion;return r.a.createElement("div",{className:"info-producto"},r.a.createElement("div",{className:"imagen"},r.a.createElement("img",{src:"../img/".concat(i,".png"),alt:a})),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,a),r.a.createElement("p",{className:"precio"},"$ ",n),r.a.createElement("p",null,u)))}),M=function(e){function t(){var e,i;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(i=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={productos:[],query:""},i.busquedaProducto=function(e){e.length>3?i.setState({query:e}):i.setState({query:""})},i}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.setState({productos:y})}},{key:"render",value:function(){var e=this,t=Object(d.a)(this.state.productos),i=this.state.query;new RegExp(i.toLowerCase(),"i");return t=i?t.filter(function(e){return e.nombre.toLowerCase().indexOf(i.toLowerCase())>-1}):t,r.a.createElement(p.a,null,r.a.createElement(q,null),r.a.createElement(j,null),r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:["/","/productos"],render:function(){return r.a.createElement(E,{productos:t,busquedaProducto:e.busquedaProducto})}}),r.a.createElement(b.a,{exact:!0,path:"/producto/:productoId",render:function(t){var i=t.match.params.productoId;return r.a.createElement(O,{producto:e.state.productos[i]})}}),r.a.createElement(b.a,{exact:!0,path:"/nosotros",component:h}),r.a.createElement(b.a,{exact:!0,path:"/contacto",component:N}),r.a.createElement(b.a,{component:g})))}}]),t}(a.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contenedor"},r.a.createElement(M,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.1f9d5f5a.chunk.js.map