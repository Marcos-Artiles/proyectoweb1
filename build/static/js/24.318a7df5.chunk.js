"use strict";(self.webpackChunkgestion_parqueadero=self.webpackChunkgestion_parqueadero||[]).push([[24],{6024:(e,s,a)=>{a.r(s),a.d(s,{default:()=>n});var r=a(5043),t=a(7762),o=a(579);const n=()=>{const[e,s]=(0,r.useState)(0),[a,n]=(0,r.useState)(0),[c,i]=(0,r.useState)(0);(0,r.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("usuarios")||"[]"),a=JSON.parse(localStorage.getItem("parkingSpots")||"{}");s(e.length);let r=0,t=0;Object.values(a).forEach((e=>{"Disponible"===e?r++:"Ocupado"===e&&t++})),n(r),i(t)}),[]);return(0,o.jsxs)("div",{className:"GenerateReportsPage",children:[(0,o.jsx)("header",{children:(0,o.jsx)("nav",{children:(0,o.jsx)("ul",{children:(0,o.jsx)("button",{children:(0,o.jsx)("a",{href:"/AdministratorPage",children:"Regresar"})})})})}),(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{children:"Generar Reportes"}),(0,o.jsxs)("p",{children:["Usuarios Registrados: ",e]}),(0,o.jsxs)("p",{children:["Plazas Disponibles: ",a]}),(0,o.jsxs)("p",{children:["Plazas Ocupadas: ",c]}),(0,o.jsx)("button",{onClick:()=>{const s=new t.Ay;s.text("Reporte de Parqueo",10,10),s.text("Usuarios Registrados: ".concat(e),10,20),s.text("Plazas Disponibles: ".concat(a),10,30),s.text("Plazas Ocupadas: ".concat(c),10,40),s.save("reporte_de_parqueo.pdf")},children:"Generar PDF"})]}),(0,o.jsx)("footer",{children:(0,o.jsx)("p",{children:"\xa9 2024 Artiles Enriquez Marcos Javier. Todos los derechos reservados."})})]})}}}]);
//# sourceMappingURL=24.318a7df5.chunk.js.map