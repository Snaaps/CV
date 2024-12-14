(()=>{"use strict";var e={7269:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Yt});var r=i(6665),n=i(6627);const a=n.createGlobalStyle`
  body {
    font-family: 'MaPolicePersonnalisee', 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'MaPolicePersonnalisee', 'Roboto', sans-serif;
  }
`;var o=i(4493),s=i(3652),l=i(6835),c=i(8262),d=i(5014),p=i(157);const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAeElEQVR42mMYBaPAWWe2uJv+vMtA/B8fbpo4lyS8lIsLL17GxXV5GTe3OAPMcvo6AOEIBpgFaU6f8OKvP36ThJ/KyuLDcEeMOmDUAaMOGHXAqANGHTDqgFEHjDpgwB1A30YpJj4Hbpa76s+7OgAOOAdqlo92jEYBABPTRkb6FjqAAAAAAElFTkSuQmCC",f=i.p+"static/media/unk.81b367bcf4e83250d2b0.png",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACDElEQVR42u2Xb0gTYRzHD+xdr5IgSOpFvYhAKIisTV0vSiTWoCBaXBlUBO3F6M+r/hErGGhLlFpUJDixepHSdLUJ0UWjpBzqUBeYBNELa7NB2ua1hfPT7mge9SIIbtube+DDPc/dA98Pv/vBPScYwxieCsHWWiHE81Bi4kq2UJ5wTUIoLNi0saQUcg2B8gtEXAIj7mUQM/3B4riJ6ZcNZEbr1PWkfzuXj+7C42xY2vNJauSLtFWZ/zf53Dz/EJh7W89z30Hutx5H8tm5sH8DboeVzpYTvOiy86jNrs77bjeRilj0FtD4ED7LwLkmElWVxOo2I6fnGJKCdHlO0t3sIDtq1rsCGrlxE1l5lqjjCLMrlvO1aiUAGTlN6ME1AHJTh/UV0MLN+Nut/JhPMfLMj3zrBvG2FpJrV/Gmej29d68AMPj4PAtjtfoLTIV2q+9YTn/n4+QwAPIdr1qJmdWVDDy8DkB/51Xeh6z6C0z02zhUs45sZp7o4BPCgXs87XDhq15D36l9SwLNTpFob6P+Ap8lM2f2bkMVeB1QqqHS4T6mXoO/eyDY7SIZrilOE471WEh9S+TDvHgvidy8KKrhzj1b8JwWyS38JDl0oChNqPHOQjZay8yrnfS0i8QCNuThehYnzMozZU+RBTRIRXb8fU9XgZKhCRhfQ0NAoNyH0unCsTxRjnAl2/gxMsYvfR1cc+DhAhUAAAAASUVORK5CYII=",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAdUlEQVR42u2XsQ2AMAwEDQwBBdRZEwqWQqJHFAgpYgIGMR9QxAZ2in/pCld3rYXjsBZEoMbE1+0k/yPyEUIwJXsZwAD/gKUSXZta76E3BV7AAAYwoISAfRRN6NmZ8nkZwIBCAiJQFyY5ZJulxXF5yJObXxH3AA5uBkPGSy9SAAAAAElFTkSuQmCC";var g=i(397);const x=n.default.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #f8f9fa;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`,b=n.default.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=n.default.div`
  flex-grow: 1;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,j=n.default.div`
  width: 70%;
  padding: 15px;
  display: flex;
  align-items: center;
  align-self: center; 
  margin-top: 20px;
  cursor: pointer;
  background-color: ${e=>e.active?"#6f2cf7":"transparent"};
  color: ${e=>e.active?"#ffffff":"#2c3e50"};
  transition: background-color 0.3s, color 0.3s;
  border-radius: ${e=>e.active?"20px 20px 0 0":"20px"};
  border: 1px solid #6f2cf7;

  &:hover {
    background-color: #6f2cf7;
    color: #ffffff;
  }

  svg {
    margin-right: 10px;
    margin-left: 10px;
  }
`,w=(0,n.default)(s.animated.div)`
  width: 70%;
  padding: 15px;
  display: flex;
  align-items: center;
  align-self: center; 
  cursor: pointer;
  background-color: ${e=>e.active?"#6f2cf7":"transparent"};
  color: ${e=>e.active?"#ffffff":"#2c3e50"};
  transition: background-color 0.3s, color 0.3s;
  border-left: 1px solid #6f2cf7;

  &:hover {
    background-color: #6f2cf7;
    color: #ffffff;
    border: 1px solid #6f2cf7;
  }

  svg {
    margin-right: 10px;
    margin-left: 10px;
  }
`,y=n.default.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;

  img {
    width: 30px;
    height: 20px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      border-color: #6f2cf7;
    }
  }
`,k=[{icon:o.FaUser,label:"profile.title",ref:"profileRef"},{icon:o.FaBriefcase,label:"experience.title",ref:"experienceRef"},{icon:o.FaTools,label:"skills.title",ref:"skillsRef"},{icon:o.FaGraduationCap,label:"education.title",ref:"educationRef"},{icon:o.FaMedal,label:"distinctions.title",ref:"distinctionsRef"},{icon:o.FaLanguage,label:"languages.title",ref:"languagesRef"}],A=({activePage:e,setActivePage:t,scrollToSection:i,profileRef:r,experienceRef:n,skillsRef:a,educationRef:A,distinctionsRef:S,languagesRef:P})=>{const{t:C,i18n:z}=(0,l.useTranslation)(),M={profileRef:r,experienceRef:n,skillsRef:a,educationRef:A,distinctionsRef:S,languagesRef:P},R=(0,s.useTrail)(k.length,{opacity:"cv"===e?1:0,transform:"cv"===e?"translateY(0)":"translateY(-70px)",from:{opacity:0,transform:"translateY(-70px)"},config:{mass:1,tension:280,friction:60},delay:"cv"===e?100:0}),L=e=>{z.changeLanguage(e)};return(0,g.jsxs)(x,{children:[(0,g.jsx)(b,{children:(0,g.jsx)("svg",{width:"200",height:"100",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsxs)("g",{children:[(0,g.jsx)("text",{x:"0",y:"40",fontFamily:"Arial",fontSize:"24",fill:"#2c3e50",children:"Luc-Arnaud"}),(0,g.jsx)("text",{x:"0",y:"70",fontFamily:"Arial",fontSize:"24",fill:"#6f2cf7",children:"Bonnet"})]})})}),(0,g.jsx)(v,{children:(0,g.jsxs)(d.default,{style:{width:"100%",flexGrow:1,alignSelf:"center"},children:[(0,g.jsxs)(j,{active:"cv"===e,onClick:()=>t("cv"),children:[(0,g.jsx)(o.FaFileAlt,{size:25})," ",(0,g.jsx)("span",{children:C("cv.title")})]}),"cv"===e&&R.map(((e,t)=>{const{icon:r,label:n,ref:a}=k[t];return(0,g.jsxs)(w,{style:e,onClick:()=>{M[a]&&M[a].current&&i(M[a])},children:[(0,g.jsx)(r,{size:25})," ",(0,g.jsx)("span",{children:C(n)})]},n)})),(0,g.jsxs)(j,{active:"project"===e,onClick:()=>{t("project"),i(P)},children:[(0,g.jsx)(o.FaComments,{size:20})," ",(0,g.jsx)("span",{children:C("project.title")})]}),(0,g.jsxs)(j,{active:"partitionsFifre"===e,onClick:()=>t("partitionsFifre"),children:[(0,g.jsx)(o.FaMusic,{size:25})," ",(0,g.jsx)("span",{children:C("partitionsFifre.title")})]}),(0,g.jsxs)(j,{active:"Perso"===e,onClick:()=>t("Perso"),children:[(0,g.jsx)(o.FaMusic,{size:25})," ",(0,g.jsx)("span",{children:C("Perso.title")})]})]})}),(0,g.jsxs)(y,{children:[(0,g.jsx)(p.default,{style:{marginLeft:5},onPress:()=>L("fr"),children:(0,g.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:u,contentFit:"contain"})}),(0,g.jsx)(p.default,{style:{marginLeft:5},onPress:()=>L("en"),children:(0,g.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:f,contentFit:"contain"})}),(0,g.jsx)(p.default,{style:{marginLeft:5},onPress:()=>L("es"),children:(0,g.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:m,contentFit:"contain"})}),(0,g.jsx)(p.default,{style:{marginLeft:5},onPress:()=>L("de"),children:(0,g.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:h,contentFit:"contain"})})]})]})},S=n.default.div`
  width: 100%;
  background-color: #f8f9fa;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,P=(0,n.default)(o.FaBars)`
  cursor: pointer;
  margin-right:40px;
`,C=n.default.div`
  display: ${e=>e.show?"block":"none"};
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
`,z=n.default.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${e=>e.active?"#6f2cf7":"transparent"};
  color: ${e=>e.active?"#ffffff":"#2c3e50"};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #6f2cf7;
    color: #ffffff;
  }

  svg {
    margin-right: 10px;
  }
`,M=((0,n.default)(c.Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
`,n.default.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 10px 20px;

  img {
    width: 30px;
    height: 20px;
    cursor: pointer;

    &:hover {
      border-color: #6f2cf7;
    }
  }
`),R=({activePage:e,setActivePage:t,scrollToSection:i,profileRef:n,experienceRef:a,skillsRef:s,educationRef:d,distinctionsRef:x,languagesRef:b})=>{const{t:v,i18n:j}=(0,l.useTranslation)(),[w,y]=(0,r.useState)(!1),k=e=>{j.changeLanguage(e),y(!1)};return(0,g.jsxs)(S,{children:[(0,g.jsx)("div",{children:"Luc-Arnaud Bonnet"}),(0,g.jsx)(P,{size:25,onClick:()=>y(!w)}),(0,g.jsxs)(C,{show:w,children:[(0,g.jsxs)(z,{active:"cv"===e,onClick:()=>t("cv"),children:[(0,g.jsx)(o.FaFileAlt,{size:20})," ",(0,g.jsx)("span",{children:v("cv.title")})]}),(0,g.jsxs)(z,{active:"projet"===e,onClick:()=>{t("projet"),y(!1)},children:[(0,g.jsx)(o.FaComments,{size:20})," ",(0,g.jsx)("span",{children:v("project.title")})]}),(0,g.jsxs)(z,{active:"fifre"===e,onClick:()=>{t("fifre"),y(!1)},children:[(0,g.jsx)(o.FaMusic,{size:20})," ",(0,g.jsx)("span",{children:"Partitions Fifre"})]}),(0,g.jsxs)(z,{active:"Perso"===e,onClick:()=>{t("Perso"),y(!1)},children:[(0,g.jsx)(o.FaMusic,{size:20})," ",(0,g.jsx)("span",{children:"Perso"})]}),(0,g.jsxs)(M,{children:[(0,g.jsx)(p.default,{style:{marginLeft:5},onPress:()=>k("fr"),children:(0,g.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:u,contentFit:"contain"})}),(0,g.jsx)(p.default,{style:{marginLeft:5},onPress:()=>k("en"),children:(0,g.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:f,contentFit:"contain"})}),(0,g.jsx)(p.default,{style:{marginLeft:5},onPress:()=>k("es"),children:(0,g.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:m,contentFit:"contain"})}),(0,g.jsx)(p.default,{style:{marginLeft:5},onPress:()=>k("de"),children:(0,g.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:h,contentFit:"contain"})})]})]})]})};n.default.header`
`,n.default.h1`
  font-size: 2.5em;
  margin: 0;
`;var L=i(4504),O=i(4483);const E=i.p+"static/media/pp.4af3ec75ba96e0f6e90c.jpg",T=i.p+"static/media/bg.686f64df7c3b3fde89de.jpg";const $=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,I=(0,n.default)(c.Image)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,F=(0,n.default)(c.Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
`,J=n.default.div`
  padding: 20px;
`,U=n.default.h2`
  color: #6f2cf7;
`,q=n.default.div`
  display: flex;
  justify-content: center;
  position: absolute;
  flex-direction : column;
  right: 20px;
  bottom:45px;
`,D=n.default.div`
  display: flex;
  align-items:center;
  justify-content: center;
  position: absolute;
  flex-direction : row;
  right: 20px;
  top:45px;
`,V=n.default.a`
  color: white;
  margin: 0 10px;
  font-size: 24px;
  background-color: white;
  border: 1px solid white;
  border-radius:50%;
  margin:5px;
  padding:5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #6f2cf7;
  }
`,N=n.default.a`
  color: white;
  font-size: 24px;
  background-color: white;
  border: 1px solid white;
  border-radius:50%;
  margin:5px;
  padding:5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #6f2cf7;
  }
`,B=n.default.span`
  font-size: 16px;
  margin-right: 10px;
  color: white;
`,G=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)($,{children:[(0,g.jsxs)(L.default,{style:{width:"100%",height:"45vh",backgroundColor:"black",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:[(0,g.jsx)(I,{style:{width:"fit-content",maxWidth:"100%",height:"100%",borderRadius:"8px 8px 0 0",aspectRatio:2},source:T,transition:1e3}),(0,g.jsx)(F,{style:{width:150,height:150,borderRadius:"50%",position:"absolute",bottom:50,left:30,border:"2px solid #6f2cf7"},source:E,contentFit:"cover",transition:1e3}),(0,g.jsxs)(D,{children:[(0,g.jsx)(B,{children:e("cv.download")}),(0,g.jsx)(N,{href:"/path-to-your-cv/CV.pdf",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(O.default,{name:"download"})})]}),(0,g.jsxs)(q,{children:[(0,g.jsx)(V,{href:"https://www.instagram.com/p/C5kxV0tqLaf/?next=%2F",target:"_blank",children:(0,g.jsx)(O.default,{name:"instagram"})}),(0,g.jsx)(V,{href:"https://m.facebook.com/luc.bonnet1/",target:"_blank",children:(0,g.jsx)(O.default,{name:"facebook"})}),(0,g.jsx)(V,{href:"https://www.linkedin.com/in/luc-arnaud-bonnet-47b5921b8/",target:"_blank",children:(0,g.jsx)(O.default,{name:"linkedin"})}),(0,g.jsx)(V,{href:"mailto:luc.bonnet.13@gmail.com",children:(0,g.jsx)(O.default,{name:"envelope"})})]})]}),(0,g.jsxs)(J,{children:[(0,g.jsx)(U,{children:e("profile.title")}),(0,g.jsx)("p",{dangerouslySetInnerHTML:{__html:e("profile.description")}})]})]})},Q=n.default.div`
`,H=n.default.h2`
  color: #6f2cf7 ;
`,Y=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(Q,{children:[(0,g.jsx)(H,{children:e("experience.title")}),(0,g.jsxs)("ul",{children:[(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:e("experience.freelance.title")}),(0,g.jsx)("p",{children:e("experience.freelance.date")}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:e("experience.freelance.description.0")}),(0,g.jsx)("li",{children:e("experience.freelance.description.1")}),(0,g.jsx)("li",{children:e("experience.freelance.description.2")}),(0,g.jsx)("li",{children:e("experience.freelance.description.3")})]})]}),(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:e("experience.infiniteAgency.title")}),(0,g.jsx)("p",{children:e("experience.infiniteAgency.date")}),(0,g.jsx)("p",{children:e("experience.infiniteAgency.description")})]}),(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:e("experience.aubagne.title")}),(0,g.jsx)("p",{children:e("experience.aubagne.date")}),(0,g.jsx)("p",{children:e("experience.aubagne.description")})]})]})]})};var W=i(4705),K=i(7180);function Z(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}const X=n.default.div`
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  width: auto;
  min-width: 70vw;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
`,_=n.default.h2`
  color: #6f2cf7;
`,ee=n.default.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
  width: 100%;
`,te=n.default.div`
  display: flex;
  flex-direction: column;
`,ie=n.default.a`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #bdc3c7;
  color: #2c3e50;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`,re=()=>{const[e,t]=(0,r.useState)(""),[i,n]=(0,r.useState)([]),[a,o]=(0,r.useState)([]);return(0,r.useEffect)((()=>{(async()=>{const e=(0,K.getFirestore)(),t=await(0,K.getDocs)((0,K.collection)(e,"partitions")),i=[];t.forEach((e=>{i.push(function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(i),!0).forEach((function(t){(0,W.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Z(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({id:e.id},e.data()))})),n(i),o(i)})()}),[]),(0,r.useEffect)((()=>{const t=i.filter((t=>t.title.toLowerCase().includes(e.toLowerCase())));o(t)}),[e,i]),(0,g.jsxs)(X,{children:[(0,g.jsx)(_,{children:"R\xe9pertoire des Partitions de Fifre"}),(0,g.jsx)(ee,{type:"text",placeholder:"Rechercher une partition...",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)(te,{children:a.map((e=>(0,g.jsxs)(ie,{href:`partition.html?id=${e.id}`,target:"_blank",rel:"noopener noreferrer",children:[(0,g.jsx)("h3",{children:e.title}),(0,g.jsxs)("p",{children:["Origine: ",e.origine]})]},e.id)))})]})},ne=n.default.div`
  width: 100%;
  height: 100vh;
  border-radius: 20px;
  background: linear-gradient(to bottom right, #f0f2f5, #dcdcdc);
  display: flex;
  flex-direction: column;
  font-family: "Arial", sans-serif;
  color: #2c3e50;
  overflow: hidden; /* Gérer le défilement via ContentArea */
`,ae=n.default.div`
  display: flex;
  background: #ffffff;
  border-radius: 20px;
  border-bottom: 1px solid #bdc3c7;
  padding: 10px 20px;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  
  scrollbar-width: thin;
  scrollbar-color: #bdc3c7 transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #bdc3c7;
    border-radius: 3px;
  }
`,oe=n.default.div`
  margin: 0 15px;
  padding: 10px 20px;
  display: inline-block;
  cursor: pointer;
  border-radius: 20px;
  background: ${e=>e.$active?"#6f2cf7":"transparent"};
  color: ${e=>e.$active?"#ffffff":"#2c3e50"};
  transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  font-weight: bold;
  white-space: nowrap;
  
  &:hover {
    background-color: #6f2cf7;
    color: #ffffff;
    box-shadow: 0px 4px 10px rgba(111, 44, 247, 0.3);
  }
`,se=n.default.div`
  flex: 1;
  overflow-y: auto; 
  padding: 40px;
  /* Retirer display: flex et les propriétés de centrage pour permettre un défilement vertical correct */
`,le=n.default.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  padding: 30px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto; /* Centrer horizontalement */
`,ce=n.default.h2`
  color: #6f2cf7;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`,de=n.default.p`
  margin-bottom: 30px;
  text-align: center;
  color: #555;
`,pe=n.default.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  textarea {
    width: 100%;
    min-height: 150px;
    padding: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    resize: vertical;
    margin-bottom: 20px;
    font-size: 14px;
    font-family: "Courier New", monospace;
  }

  input {
    flex: 1;
    padding: 10px 15px;
    margin-right: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  button {
    padding: 10px 20px;
    background: #6f2cf7;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    align-self: flex-start;
    transition: background 0.3s;

    &:hover {
      background: #5a23c4;
    }
  }
`,ue=n.default.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #6f2cf7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #5a23c4;
  }
`,fe=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;var me=i(962);const he=()=>{const[e,t]=(0,r.useState)(""),[i,n]=(0,r.useState)("");return(0,g.jsxs)(le,{children:[(0,g.jsx)(ce,{children:"G\xe9n\xe9rateur de QR Code"}),(0,g.jsx)(de,{children:"Entrez une URL ou un texte pour g\xe9n\xe9rer et t\xe9l\xe9charger votre QR code."}),(0,g.jsxs)(pe,{children:[(0,g.jsx)("input",{type:"text",placeholder:"URL ou texte ici",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)("button",{onClick:()=>{""!==e.trim()?n(e):alert("Monsieur, veuillez entrer un texte ou une URL valide.")},children:"G\xe9n\xe9rer"})]}),i&&(0,g.jsxs)(fe,{children:[(0,g.jsx)(me.QRCodeCanvas,{id:"qrCodeCanvas",value:i,size:256}),(0,g.jsx)(ue,{onClick:()=>{const e=document.getElementById("qrCodeCanvas");if(!e)return void alert("Monsieur, veuillez d\u2019abord g\xe9n\xe9rer un QR code.");const t=e.toDataURL("image/png").replace("image/png","image/octet-stream"),i=document.createElement("a");i.href=t,i.download="qrcode.png",document.body.appendChild(i),i.click(),document.body.removeChild(i)},children:"T\xe9l\xe9charger"})]})]})},ge=()=>{const[e,t]=(0,r.useState)(""),[i,n]=(0,r.useState)("");return(0,g.jsxs)(le,{children:[(0,g.jsx)(ce,{children:"Convertisseur JSON \u2192 CSV"}),(0,g.jsx)(de,{children:"Collez votre JSON ci-dessous. Assurez-vous qu'il s'agit d'un tableau d'objets. Cliquez ensuite sur \"Convertir\" pour g\xe9n\xe9rer un CSV t\xe9l\xe9chargeable."}),(0,g.jsxs)(pe,{children:[(0,g.jsx)("textarea",{placeholder:'[{"name":"Jean","age":30},{"name":"Marie","age":25}]',value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)("button",{onClick:()=>{let t;try{t=JSON.parse(e)}catch(a){return void alert("Monsieur, votre JSON est invalide. Veuillez corriger et r\xe9essayer.")}if(!Array.isArray(t)||0===t.length||"object"!==typeof t[0])return void alert("Monsieur, veuillez fournir un tableau d'objets JSON non vide.");const i=Object.keys(t[0]),r=[i.join(","),...t.map((e=>i.map((t=>void 0!==e[t]?JSON.stringify(e[t]):"")).join(",")))].join("\n");n(r)},children:"Convertir"})]}),i&&(0,g.jsx)("div",{style:{textAlign:"center"},children:(0,g.jsx)(ue,{onClick:()=>{if(!i)return void alert("Monsieur, veuillez d\u2019abord convertir du JSON en CSV.");const e=new Blob([i],{type:"text/csv;charset=utf-8;"}),t=URL.createObjectURL(e),r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("download","data.csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)},children:"T\xe9l\xe9charger CSV"})})]})};var xe=i(9341);const be=n.keyframes`
  0% {opacity:0; transform:translateY(-10px)}
  10% {opacity:1; transform:translateY(0)}
  90% {opacity:1; transform:translateY(0)}
  100% {opacity:0; transform:translateY(-10px)}
`,ve=n.default.div`
  position: absolute;
  top: 20px;
  background: #6f2cf7;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  animation: ${be} 2s ease-in-out forwards;
  font-size: 14px;
`,je=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`,we=n.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;

  select, input[type="number"] {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
  }
`,ye=n.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  min-height: 200px;
`,ke=n.default.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  position: relative;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 12px rgba(0,0,0,0.2);
  }

  &:active {
    transform: scale(0.98);
  }

  span {
    background: rgba(0,0,0,0.4);
    border-radius: 4px;
    padding: 2px 4px;
    margin-bottom: 5px;
    opacity: 0.8;
  }
`,Ae=()=>{const[e,t]=(0,r.useState)("#6f2cf7"),[i,n]=(0,r.useState)([]),[a,o]=(0,r.useState)("analogous"),[s,l]=(0,r.useState)(5),[c,d]=(0,r.useState)("");(0,r.useEffect)((()=>{p()}),[]);const p=()=>{let t;try{t=(0,xe.default)(e)}catch(r){return void alert("Monsieur, veuillez entrer une couleur hex valide (ex: #6f2cf7).")}let i=[];switch(a){case"analogous":i=xe.default.scale([t.brighten(1),t,t.darken(1)]).colors(s);break;case"complementary":const r=t.set("hsl.h","+180").hex();i=xe.default.scale([t.hex(),r]).colors(s);break;case"triadic":const n=t.hsl(),a=xe.default.hsl((n[0]+120)%360,n[1],n[2]).hex(),o=xe.default.hsl((n[0]+240)%360,n[1],n[2]).hex();i=xe.default.scale([t.hex(),a,o]).colors(s);break;case"tetradic":const l=t.hsl(),c=xe.default.hsl((l[0]+90)%360,l[1],l[2]).hex(),d=xe.default.hsl((l[0]+180)%360,l[1],l[2]).hex(),p=xe.default.hsl((l[0]+270)%360,l[1],l[2]).hex();i=xe.default.scale([t.hex(),c,d,p]).colors(s);break;case"monochromatic":i=xe.default.scale([t.brighten(1.5),t,t.darken(1.5)]).colors(s);break;default:i=[e]}n(i)};return(0,g.jsxs)(le,{children:[(0,g.jsx)(ce,{children:"G\xe9n\xe9rateur de Palette de Couleurs"}),(0,g.jsx)(de,{children:'Entrez une couleur de base (hex) et s\xe9lectionnez un mode pour g\xe9n\xe9rer une palette harmonieuse. Ajustez le nombre de couleurs, puis cliquez sur "G\xe9n\xe9rer". Cliquez sur une couleur pour la copier.'}),(0,g.jsxs)(pe,{children:[(0,g.jsx)("input",{type:"text",placeholder:"#6f2cf7",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)("button",{onClick:p,children:"G\xe9n\xe9rer"})]}),(0,g.jsx)(je,{children:(0,g.jsxs)(we,{children:[(0,g.jsx)("span",{children:"Mode :"}),(0,g.jsxs)("select",{value:a,onChange:e=>o(e.target.value),children:[(0,g.jsx)("option",{value:"analogous",children:"Analogous"}),(0,g.jsx)("option",{value:"complementary",children:"Compl\xe9mentaire"}),(0,g.jsx)("option",{value:"triadic",children:"Triadique"}),(0,g.jsx)("option",{value:"tetradic",children:"T\xe9tradique"}),(0,g.jsx)("option",{value:"monochromatic",children:"Monochromatique"})]}),(0,g.jsx)("span",{children:"Couleurs :"}),(0,g.jsx)("input",{type:"number",min:"3",max:"8",value:s,onChange:e=>l(parseInt(e.target.value,10))})]})}),(0,g.jsxs)(ye,{children:[c&&(0,g.jsx)(ve,{children:c}),i.map((e=>(0,g.jsx)(ke,{style:{background:e},onClick:()=>{return t=e,void navigator.clipboard.writeText(t).then((()=>{d(`La couleur ${t.toUpperCase()} a \xe9t\xe9 copi\xe9e.`),setTimeout((()=>d("")),2e3)}),(()=>{alert("Impossible de copier la couleur.")}));var t},children:(0,g.jsx)("span",{children:e.toUpperCase()})},e)))]})]})},Se=n.default.div`
  margin-top: 20px;
  text-align: center;
`,Pe=n.default.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  color: ${e=>e.$textColor};
  background: ${e=>e.$bgColor};
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
`,Ce=n.default.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`,ze=n.default.div`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`,Me=n.default.span`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  background: ${e=>e.$color};
  color: #fff;
`,Re=e=>/^#([0-9A-Fa-f]{3}){1,2}$/.test(e),Le=()=>{const[e,t]=(0,r.useState)("#000000"),[i,n]=(0,r.useState)("#ffffff"),[a,o]=(0,r.useState)(null),[s,l]=(0,r.useState)("");return(0,r.useEffect)((()=>{((e,t)=>{if(!Re(e)||!Re(t))return o(null),void l("");let i;try{i=xe.default.contrast(e,t)}catch(a){return o(null),void l("")}const r=i.toFixed(2);o(r);let n="";n=i>=7?"AAA":i>=4.5?"AA":i>=3?"AA (Large Text Only)":"Non conforme",l(n)})(e,i)}),[e,i]),(0,g.jsxs)(le,{children:[(0,g.jsx)(ce,{children:"V\xe9rification d'accessibilit\xe9 des couleurs"}),(0,g.jsx)(de,{children:"Entrez une couleur de texte et une couleur de fond (en hex). Le contraste sera v\xe9rifi\xe9 automatiquement."}),(0,g.jsxs)(pe,{children:[(0,g.jsx)("input",{type:"text",placeholder:"#000000 (Couleur du texte)",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)("input",{type:"text",placeholder:"#ffffff (Couleur de fond)",value:i,onChange:e=>n(e.target.value)})]}),a&&(0,g.jsxs)(Se,{children:[(0,g.jsx)(Pe,{$textColor:e,$bgColor:i,children:"Exemple de texte sur ce fond."}),(0,g.jsxs)(Ce,{children:["Ratio : ",a," ",s&&(0,g.jsx)(Me,{$color:"AAA"===s?"#2ecc71":"AA"===s?"#3498db":"AA (Large Text Only)"===s?"#f1c40f":"#e74c3c",children:s})]}),(0,g.jsx)(ze,{children:(()=>{if(!a||!s)return null;if(!Re(e)||!Re(i))return null;try{const t=(0,xe.default)(e).luminance(),r=t>(0,xe.default)(i).luminance();if("Non conforme"===s)return r?"Le texte est plus clair que le fond, mais le contraste est insuffisant. Rendez le texte encore plus clair ou le fond plus sombre.":"Le texte est plus sombre que le fond, mais le contraste est insuffisant. Rendez le texte encore plus sombre ou le fond plus clair.";if("AA (Large Text Only)"===s)return r?"Pour atteindre le niveau AA normal, rendez le texte un peu plus clair, ou assombrissez un peu le fond.":"Pour atteindre le niveau AA normal, rendez le texte un peu plus sombre, ou \xe9claircissez un peu le fond.";if("AA"===s)return r?"Vous respectez AA, pour atteindre AAA, essayez d'\xe9claircir encore un peu le texte ou d'assombrir davantage le fond.":"Vous respectez AA, pour atteindre AAA, essayez d'assombrir encore un peu le texte ou d'\xe9claircir davantage le fond.";if("AAA"===s)return"F\xe9licitations, votre contraste est excellent (AAA) !"}catch(t){return null}return null})()})]}),!a&&Re(e)&&Re(i)&&(0,g.jsxs)(Se,{children:[(0,g.jsx)(Pe,{$textColor:e,$bgColor:i,children:"Exemple de texte sur ce fond."}),(0,g.jsx)(Ce,{children:"Les couleurs sont valides, mais le ratio n'a pas pu \xeatre calcul\xe9."})]})]})},Oe=n.default.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 20px;
`,Ee=n.default.div`
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
`,Te=n.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,$e=n.default.div`
  margin-top: 20px;
  background: #fff;
  border: 1px solid #bdc3c7;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.05);

  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
    display: block;
  }

  input[type="range"] {
    width: 100%;
    margin-bottom: 15px;
  }

  select, input[type="number"] {
    margin-bottom: 15px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    width: 100%;
  }

  .control-group {
    margin-bottom: 20px;
  }

  .quality-value {
    font-weight: bold;
    margin-left: 5px;
  }
`,Ie=n.default.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`,Fe=n.default.div`
  text-align: center;
`,Je=n.default.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: #6f2cf7;
`,Ue=n.default.img`
  max-width: 200px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  margin-bottom: 10px;
`,qe=n.default.p`
  font-size: 13px;
  color: #555;
  margin: 5px 0;
`,De=n.default.button`
  margin-top: 15px;
  padding: 8px 15px;
  background: #6f2cf7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #5a23c4;
  }
`,Ve=()=>{const[e,t]=(0,r.useState)(null),[i,n]=(0,r.useState)(""),[a,o]=(0,r.useState)(""),[s,l]=(0,r.useState)("image/jpeg"),[c,d]=(0,r.useState)(.8),[p,u]=(0,r.useState)(800),f=(0,r.useRef)(null);(0,r.useEffect)((()=>{if(e){const t=new FileReader;t.onload=e=>{n(e.target.result)},t.readAsDataURL(e)}else n(""),o("")}),[e]),(0,r.useEffect)((()=>{i&&m()}),[i,s,c,p]);const m=()=>{const e=new Image;e.onload=()=>{const t=f.current,i=t.getContext("2d"),r=e.height/e.width,n=p>0?p:e.width,a=n*r;t.width=n,t.height=a,i.clearRect(0,0,n,a),i.drawImage(e,0,0,n,a);const l=t.toDataURL(s,c);o(l)},e.src=i},h=e=>{if(!e)return 0;const t=e.split(",")[1];return Math.round(3*t.length/4)},x=h(i),b=h(a),v=x>0&&b>0?Math.round((x-b)/x*100):0;return(0,g.jsxs)(le,{children:[(0,g.jsx)(ce,{children:"Optimisation et Conversion d'Images"}),(0,g.jsx)(de,{children:"Importez une image, ajustez la taille, la qualit\xe9, le format, puis t\xe9l\xe9chargez une version optimis\xe9e."}),(0,g.jsxs)(Oe,{children:[(0,g.jsxs)(Ee,{children:[(0,g.jsx)(pe,{children:(0,g.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files[0]&&t(e.target.files[0])}})}),i&&(0,g.jsxs)($e,{children:[(0,g.jsxs)("div",{className:"control-group",children:[(0,g.jsx)("label",{children:"Format de sortie :"}),(0,g.jsxs)("select",{value:s,onChange:e=>l(e.target.value),children:[(0,g.jsx)("option",{value:"image/jpeg",children:"JPEG"}),(0,g.jsx)("option",{value:"image/png",children:"PNG"}),(0,g.jsx)("option",{value:"image/webp",children:"WebP"})]})]}),("image/jpeg"===s||"image/webp"===s)&&(0,g.jsxs)("div",{className:"control-group",children:[(0,g.jsx)("label",{children:"Qualit\xe9 :"}),(0,g.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:c,onChange:e=>d(parseFloat(e.target.value))}),(0,g.jsx)("span",{className:"quality-value",children:c})]}),(0,g.jsxs)("div",{className:"control-group",children:[(0,g.jsx)("label",{children:"Largeur cible (px) :"}),(0,g.jsx)("input",{type:"number",value:p,onChange:e=>u(parseInt(e.target.value,10)||0)})]})]})]}),(0,g.jsx)(Te,{children:(0,g.jsxs)(Ie,{children:[i&&(0,g.jsxs)(Fe,{children:[(0,g.jsx)(Je,{children:"Originale"}),(0,g.jsx)(Ue,{src:i,alt:"Original"}),(0,g.jsxs)(qe,{children:["Taille : ",x," octets"]})]}),a&&(0,g.jsxs)(Fe,{children:[(0,g.jsx)(Je,{children:"Optimis\xe9e"}),(0,g.jsx)(Ue,{src:a,alt:"Optimized"}),(0,g.jsxs)(qe,{children:["Taille : ",b," octets"]}),x>0&&(0,g.jsxs)(qe,{children:["R\xe9duction : ",v,"%"]}),(0,g.jsx)(De,{onClick:()=>{if(!a)return;const e=document.createElement("a");e.href=a;const t="image/jpeg"===s?"jpg":"image/webp"===s?"webp":"png";e.download=`optimized.${t}`,document.body.appendChild(e),e.click(),document.body.removeChild(e)},children:"T\xe9l\xe9charger"})]})]})})]}),(0,g.jsx)("canvas",{ref:f,style:{display:"none"}})]})},Ne=[{name:"Roboto",importUrl:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"},{name:"Open Sans",importUrl:"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"},{name:"Lato",importUrl:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"},{name:"Montserrat",importUrl:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"},{name:"Poppins",importUrl:"https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"},{name:"Nunito",importUrl:"https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"},{name:"Source Sans Pro",importUrl:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"},{name:"Mulish",importUrl:"https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap"},{name:"Ubuntu",importUrl:"https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"},{name:"Raleway",importUrl:"https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"},{name:"Merriweather",importUrl:"https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"},{name:"Lora",importUrl:"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"},{name:"Playfair Display",importUrl:"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"},{name:"PT Serif",importUrl:"https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap"},{name:"Crimson Pro",importUrl:"https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&display=swap"},{name:"IBM Plex Serif",importUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;700&display=swap"},{name:"Roboto Slab",importUrl:"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"},{name:"Oswald",importUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"},{name:"Rokkitt",importUrl:"https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;700&display=swap"},{name:"Muli (Mulish)",importUrl:"https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap"},{name:"Quicksand",importUrl:"https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"},{name:"Josefin Sans",importUrl:"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"},{name:"PT Sans",importUrl:"https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"}],Be={Roboto:["Open Sans","Lora","Montserrat","Merriweather","Poppins","Source Sans Pro","Crimson Pro","Raleway"],"Open Sans":["Roboto","Lora","Playfair Display","Poppins","Montserrat","PT Serif","Nunito"],Lato:["Merriweather","Playfair Display","Roboto Slab","Open Sans","Montserrat","Source Sans Pro"],Montserrat:["Lora","Merriweather","Crimson Pro","Nunito","Raleway","Poppins","PT Serif"],Poppins:["Merriweather","Lora","Roboto Slab","Crimson Pro","Mulish","Ubuntu"],Nunito:["Playfair Display","Lora","Roboto","PT Serif","Raleway","Poppins"],"Source Sans Pro":["Lora","Merriweather","Crimson Pro","Open Sans","Raleway","IBM Plex Serif"],Mulish:["Lora","Merriweather","Crimson Pro","Poppins","Playfair Display","PT Serif"],Ubuntu:["Lora","Merriweather","PT Serif","Roboto Slab","Raleway","Open Sans"],Raleway:["Merriweather","Lora","Crimson Pro","Poppins","Source Sans Pro","Ubuntu"],Merriweather:["Open Sans","Lato","Montserrat","Poppins","Raleway","Josefin Sans","PT Sans"],Lora:["Montserrat","Open Sans","Merriweather","Roboto","Raleway","Ubuntu"],"Playfair Display":["Open Sans","Lato","Source Sans Pro","Nunito","Poppins","Mulish"],"PT Serif":["Open Sans","Lato","Mulish","Poppins","Nunito","Josefin Sans"],"Crimson Pro":["Roboto","Open Sans","Poppins","Raleway","Lato","Source Sans Pro"],"IBM Plex Serif":["Roboto","Open Sans","Montserrat","Lato","Nunito","Raleway"],"Roboto Slab":["Lato","Poppins","Nunito","Quicksand","Ubuntu","PT Sans"],Oswald:["Open Sans","Lora","Merriweather","Roboto","Poppins","Nunito"],Rokkitt:["Lato","Open Sans","Poppins","Raleway","Merriweather","Mulish"],Quicksand:["Merriweather","Lora","Roboto","Nunito","Mulish","PT Serif"],"Josefin Sans":["Merriweather","Crimson Pro","Poppins","Open Sans","Raleway","Lato"],"PT Sans":["Playfair Display","Merriweather","Crimson Pro","Open Sans","Poppins","Lato"]},Ge=n.default.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background: ${e=>e.$darkMode?"#2c3e50":"#ffffff"};
  color: ${e=>e.$darkMode?"#ecf0f1":"#2c3e50"};
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;

  label {
    font-size: 14px;
    margin-bottom: 5px;
    display: block;
  }

  select, input[type="number"], button {
    margin-bottom: 15px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    padding: 5px;
    font-size: 14px;
    background: ${e=>e.$darkMode?"#34495e":"#ffffff"};
    color: ${e=>e.$darkMode?"#ecf0f1":"#2c3e50"};
  }

  input[type="range"] {
    width: 100%;
    margin-bottom: 15px;
  }
`,Qe=n.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  span {
    margin-right: 10px;
    font-size: 14px;
  }
`,He=n.default.div`
  flex: 1;
  background: ${e=>e.$darkMode?"#34495e":"#ffffff"};
  color: ${e=>e.$darkMode?"#ecf0f1":"#2c3e50"};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
  font-family: ${e=>e.$primaryFont}, ${e=>e.$secondaryFont}, sans-serif;
  line-height: ${e=>e.$lineHeight};

  h1, h2, p {
    margin-bottom: 20px;
  }

  h1 {
    font-family: ${e=>e.$primaryFont}, sans-serif;
    font-size: ${e=>e.$titleSize}px;
    font-weight: 700;
  }

  h2 {
    font-family: ${e=>e.$secondaryFont}, sans-serif;
    font-size: ${e=>e.$subtitleSize}px;
    font-weight: 700;
  }

  p {
    font-family: ${e=>e.$secondaryFont}, sans-serif;
    font-size: ${e=>e.$bodySize}px;
    font-weight: 400;
  }
`,Ye=n.default.pre`
  background: ${e=>e.$darkMode?"#2c3e50":"#f0f2f5"};
  padding: 20px;
  border-radius: 10px;
  font-size: 13px;
  overflow-x: auto;
  margin-top: 20px;
  color: ${e=>e.$darkMode?"#ecf0f1":"#2c3e50"};
`,We=n.default.button`
  margin-top: 10px;
  padding: 8px 15px;
  background: #6f2cf7;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #5a23c4;
  }
`,Ke=()=>{const[e,t]=(0,r.useState)("Roboto"),[i,n]=(0,r.useState)("Open Sans"),[a,o]=(0,r.useState)(36),[s,l]=(0,r.useState)(24),[c,d]=(0,r.useState)(16),[p,u]=(0,r.useState)(1.5),[f,m]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const t=Ne.find((t=>t.name===e)),r=Ne.find((e=>e.name===i)),n=document.head;if(document.querySelectorAll("link[data-font='saas6']").forEach((e=>e.remove())),t&&t.importUrl){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",t.importUrl),e.setAttribute("data-font","saas6"),n.appendChild(e)}if(r&&r.importUrl){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",r.importUrl),e.setAttribute("data-font","saas6"),n.appendChild(e)}}),[e,i]);const h=Be[e]||[];(0,r.useEffect)((()=>{h.includes(i)||n(h[0])}),[e]);return(0,g.jsxs)(le,{children:[(0,g.jsx)(ce,{children:"Conseiller d'Associations de Polices"}),(0,g.jsx)(de,{children:"Choisissez une police principale, obtenez des suggestions de polices secondaires harmonieuses, ajustez le style et copiez le code CSS."}),(0,g.jsxs)(Ge,{$darkMode:f,children:[(0,g.jsxs)(Qe,{children:[(0,g.jsxs)("span",{children:["Mode ",f?"Sombre":"Clair"," :"]}),(0,g.jsx)("input",{type:"checkbox",checked:f,onChange:()=>m(!f)})]}),(0,g.jsx)("label",{children:"Police Principale :"}),(0,g.jsx)("select",{value:e,onChange:e=>t(e.target.value),children:Ne.map((e=>(0,g.jsx)("option",{value:e.name,children:e.name},e.name)))}),(0,g.jsx)("label",{children:"Police Secondaire :"}),(0,g.jsx)("select",{value:i,onChange:e=>n(e.target.value),children:h.map((e=>(0,g.jsx)("option",{value:e,children:e},e)))}),(0,g.jsxs)("label",{children:["Taille du Titre (px) : ",a]}),(0,g.jsx)("input",{type:"range",min:"24",max:"72",step:"1",value:a,onChange:e=>o(parseInt(e.target.value,10))}),(0,g.jsxs)("label",{children:["Taille du Sous-titre (px) : ",s]}),(0,g.jsx)("input",{type:"range",min:"16",max:"48",step:"1",value:s,onChange:e=>l(parseInt(e.target.value,10))}),(0,g.jsxs)("label",{children:["Taille du corps (px) : ",c]}),(0,g.jsx)("input",{type:"range",min:"12",max:"24",step:"1",value:c,onChange:e=>d(parseInt(e.target.value,10))}),(0,g.jsxs)("label",{children:["Line-height : ",p]}),(0,g.jsx)("input",{type:"range",min:"1",max:"2",step:"0.1",value:p,onChange:e=>u(parseFloat(e.target.value))})]}),(0,g.jsxs)(He,{$darkMode:f,$primaryFont:e,$secondaryFont:i,$titleSize:a,$subtitleSize:s,$bodySize:c,$lineHeight:p,children:[(0,g.jsx)("h1",{children:"Titre Principal"}),(0,g.jsx)("h2",{children:"Sous-titre d'exemple"}),(0,g.jsx)("p",{children:"Ceci est un paragraphe d'exemple pour pr\xe9visualiser la combinaison des polices. Ajustez le style, la taille, et la line-height pour obtenir le rendu d\xe9sir\xe9."})]}),(0,g.jsx)(Ye,{$darkMode:f,children:`@import url('${Ne.find((t=>t.name===e))?.importUrl}');\n@import url('${Ne.find((e=>e.name===i))?.importUrl}');\n\nbody {\n  font-family: '${i}', sans-serif;\n  line-height: ${p};\n}\n\nh1 {\n  font-family: '${e}', sans-serif;\n  font-size: ${a}px;\n  font-weight: 700;\n}\n\nh2 {\n  font-family: '${i}', sans-serif;\n  font-size: ${s}px;\n  font-weight: 700;\n}\n\np {\n  font-family: '${i}', sans-serif;\n  font-size: ${c}px;\n  font-weight: 400;\n}`}),(0,g.jsx)(We,{onClick:async()=>{const t=Ne.find((t=>t.name===e)),r=Ne.find((e=>e.name===i)),n=`\n@import url('${t?t.importUrl:""}');\n@import url('${r?r.importUrl:""}');\n\nbody {\n  font-family: '${i}', sans-serif;\n  line-height: ${p};\n}\n\nh1 {\n  font-family: '${e}', sans-serif;\n  font-size: ${a}px;\n  font-weight: 700;\n}\n\nh2 {\n  font-family: '${i}', sans-serif;\n  font-size: ${s}px;\n  font-weight: 700;\n}\n\np {\n  font-family: '${i}', sans-serif;\n  font-size: ${c}px;\n  font-weight: 400;\n}\n`.trim();try{await navigator.clipboard.writeText(n),alert("CSS copi\xe9 dans le presse-papiers !")}catch(o){alert("Impossible de copier le CSS. Veuillez le copier manuellement.")}},children:"Copier le CSS"})]})};function Ze(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function Xe(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(i),!0).forEach((function(t){(0,W.default)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):Ze(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}const _e=n.default.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
  }

  select, input[type="text"] {
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 15px;
    width: 100%;
  }

  .options {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;

    label {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      margin: 0;
    }
  }
`,et=n.default.div`
  background: #f0f2f5;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  color: #333;
  position: relative;
  word-break: break-all;
`,tt=n.default.div`
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 15px;
`,it=n.default.div`
  margin-top: 20px;
  label {
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
    display: block;
  }

  textarea {
    width: 100%;
    min-height: 100px;
    padding: 8px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    margin-bottom: 15px;
    font-size: 14px;
    resize: vertical;
  }
`,rt=n.default.div`
  margin-top: 10px;
  background: #ffffff;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
  padding: 10px;
  min-height: 50px;
  white-space: pre-wrap;
  font-family: "Courier New", monospace;
  font-size: 14px;
  color: #333;

  .match {
    background: #6f2cf7;
    color: #fff;
    border-radius: 3px;
    padding: 0 2px;
  }
`,nt=n.default.div`
  display: flex;
  gap: 10px;
`,at=n.default.button`
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 14px;

  &:hover {
    opacity: 0.9;
  }
`,ot=((0,n.default)(at)`
  background: #3498db;
  color: #ffffff;

  &:hover {
    background: #2980b9;
  }
`,(0,n.default)(at)`
  background: #6f2cf7;
  color: #ffffff;

  &:hover {
    background: #5a23c4;
  }
`),st=(0,n.default)(at)`
  background: #e74c3c;
  color: #ffffff;

  &:hover {
    background: #c0392b;
  }
`,lt=[{label:"Lettres (a-z)",value:"[a-z]+"},{label:"Chiffres (0-9)",value:"\\d+"},{label:"Caract\xe8res alphanum\xe9riques",value:"[A-Za-z0-9]+"},{label:"Espace (\\s)",value:"\\s"},{label:"Caract\xe8re sp\xe9cifique",value:"."},{label:"D\xe9but de ligne (^)",value:"^"},{label:"Fin de ligne ($)",value:"$"},{label:"Groupe optionnel ( )",value:"(  )"},{label:"Quantificateur {n,m}",value:"{1,3}"},{label:"Mot complet (\\b)",value:"\\b"}],ct=()=>{const[e,t]=(0,r.useState)(""),[i,n]=(0,r.useState)({i:!1,g:!1,m:!1}),[a,o]=(0,r.useState)(""),[s,l]=(0,r.useState)(""),[c,d]=(0,r.useState)("");(0,r.useEffect)((()=>{if(!e)return l(""),void d(a);try{const t=Object.keys(i).filter((e=>i[e])).join(""),r=new RegExp(e,t);if(l(""),a){const e=[...a.matchAll(r)];if(e.length>0){let t=0,i="";for(const r of e){const e=r.index,n=e+r[0].length;i+=a.slice(t,e),i+=`<span class="match">${a.slice(e,n)}</span>`,t=n}i+=a.slice(t),d(i)}else d(a)}else d("")}catch(t){l("Expression r\xe9guli\xe8re invalide"),d(a)}}),[e,i,a]);return(0,g.jsxs)(le,{children:[(0,g.jsx)(ce,{children:"G\xe9n\xe9rateur et Testeur de Regex"}),(0,g.jsx)(de,{children:"Construisez votre regex en ajoutant des blocs, choisissez les options, puis testez-la sur un texte. Vous pouvez ensuite copier la regex finale."}),(0,g.jsxs)(_e,{children:[(0,g.jsx)("label",{children:"Construire la regex :"}),(0,g.jsxs)(et,{children:[`/${e}/`,Object.keys(i).filter((e=>i[e])).join("")]}),s&&(0,g.jsx)(tt,{children:s}),(0,g.jsxs)("select",{onChange:e=>{var i;e.target.value&&(i=e.target.value,t((e=>e+i)))},value:"",children:[(0,g.jsx)("option",{value:"",children:"Ajouter un bloc..."}),lt.map((e=>(0,g.jsx)("option",{value:e.value,children:e.label},e.value)))]}),(0,g.jsxs)("div",{className:"options",children:[(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",checked:i.i,onChange:()=>n((e=>Xe(Xe({},e),{},{i:!e.i})))})," i (ignore case)"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",checked:i.g,onChange:()=>n((e=>Xe(Xe({},e),{},{g:!e.g})))})," g (global)"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",checked:i.m,onChange:()=>n((e=>Xe(Xe({},e),{},{m:!e.m})))})," m (multiline)"]})]}),(0,g.jsx)("label",{children:"Regex personnalis\xe9e :"}),(0,g.jsx)("input",{type:"text",placeholder:"Tapez ou modifiez votre regex ici",value:e,onChange:e=>t(e.target.value)}),(0,g.jsxs)(nt,{children:[(0,g.jsx)(ot,{onClick:async()=>{const t=`/${e}/${Object.keys(i).filter((e=>i[e])).join("")}`;try{await navigator.clipboard.writeText(t),alert("Regex copi\xe9e dans le presse-papiers !")}catch(r){alert("Impossible de copier la regex. Copiez-la manuellement.")}},children:"Copier la regex"}),(0,g.jsx)(st,{onClick:()=>{t(""),l(""),d("")},children:"Clear"})]})]}),(0,g.jsxs)(it,{children:[(0,g.jsx)("label",{children:"Texte de test :"}),(0,g.jsx)("textarea",{placeholder:"Collez ou tapez votre texte ici pour tester la regex.",value:a,onChange:e=>o(e.target.value)})]}),(0,g.jsx)(rt,{dangerouslySetInnerHTML:{__html:c}})]})},dt=()=>(0,g.jsxs)(le,{children:[(0,g.jsx)(ce,{children:"SaaS 8"}),(0,g.jsx)(de,{children:"Contenu du Huiti\xe8me SaaS"})]}),pt=()=>{const[e,t]=(0,r.useState)("saas1");let i;return"saas1"===e?i=(0,g.jsx)(he,{}):"saas2"===e?i=(0,g.jsx)(ge,{}):"saas3"===e?i=(0,g.jsx)(Ae,{}):"saas4"===e?i=(0,g.jsx)(Le,{}):"saas5"===e?i=(0,g.jsx)(Ve,{}):"saas6"===e?i=(0,g.jsx)(Ke,{}):"saas7"===e?i=(0,g.jsx)(ct,{}):"saas8"===e&&(i=(0,g.jsx)(dt,{})),(0,g.jsxs)(ne,{children:[(0,g.jsxs)(ae,{children:[(0,g.jsx)(oe,{$active:"saas1"===e,onClick:()=>t("saas1"),children:"QR Code"}),(0,g.jsx)(oe,{$active:"saas2"===e,onClick:()=>t("saas2"),children:"JSON \u2192 CSV"}),(0,g.jsx)(oe,{$active:"saas3"===e,onClick:()=>t("saas3"),children:"Couleur"}),(0,g.jsx)(oe,{$active:"saas4"===e,onClick:()=>t("saas4"),children:"Couleur texte"}),(0,g.jsx)(oe,{$active:"saas5"===e,onClick:()=>t("saas5"),children:"Opti Image"}),(0,g.jsx)(oe,{$active:"saas6"===e,onClick:()=>t("saas6"),children:"Font"}),(0,g.jsx)(oe,{$active:"saas7"===e,onClick:()=>t("saas7"),children:"Regex"})]}),(0,g.jsx)(se,{children:i})]})};n.default.div`
  padding: 20px;
  background: #ecf0f1;
  min-height: 100vh;
  border: 1px solid #bdc3c7;
  position: relative;
  display: flex;
  flex-direction: column;
`,n.default.a`
  color: #6f2cf7;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,n.default.h2`
  color: #6f2cf7;
  margin-top: 0;
`,n.default.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  margin-bottom: 20px;
`,n.default.button`
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c0392b;
  }
`,n.default.audio`
  width: 100%;
  margin-top: 20px;
`,n.default.iframe`
  width: 100%;
  height: 500px;
  border: none;
  margin-top: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`,n.default.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: ${e=>e.show?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 9999;
`,n.default.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  padding: 20px;
  width: 300px;
  text-align: center;
`,n.default.h3`
  margin-top: 0;
  color: #6f2cf7;
  margin-bottom: 15px;
`,n.default.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #bdc3c7;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 10px;
`,n.default.div`
  display: flex;
  justify-content: space-between;
`,n.default.button`
  flex: 1;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: ${e=>e.noMargin?"0px":"10px"};

  &:hover {
    background-color: #2980b9;
  }
`,n.default.button`
  flex: 1;
  padding: 10px;
  background-color: #95a5a6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #7f8c8d;
  }
`,n.default.div`
  text-align: center;
  margin-top: 100px;
  font-size: 18px;
  color: #34495e;
`,n.default.p`
  margin: 0;
`;var ut=i(2342),ft=i(3595);ft.Chart.register(ft.RadialLinearScale,ft.PointElement,ft.LineElement,ft.Filler,ft.Tooltip,ft.Legend);const mt=n.default.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,ht=n.default.div`
  flex: 1;
  min-width: 300px;
`,gt=n.default.div`
  flex: 1;
  min-width: 300px;
  max-height: 50vh;
`,xt=n.default.h2`
  color: #6f2cf7;
`,bt=n.default.ul`
  list-style-type: none; /* Enlever les puces si nécessaire */
  padding: 5px; /* Enlever le padding par défaut */
`,vt=n.default.li`
  margin-bottom: 15px; /* Ajuster l'espacement entre les éléments */
  font-size: 18px; /* Optionnel: Ajuster la taille de police */
`,jt=()=>{const{t:e}=(0,l.useTranslation)(),t={labels:["Java","Python","JS/React/Node","PHP","SQL","Firebase","GML","C"],datasets:[{label:e("skills.title"),data:[5,7,8,4,5,7,6,3],backgroundColor:"rgba(111, 44, 247, 0.2)",borderColor:"rgba(111, 44, 247, 1)",borderWidth:1}]};return(0,g.jsxs)(mt,{children:[(0,g.jsxs)(ht,{children:[(0,g.jsx)(xt,{children:e("skills.title")}),(0,g.jsxs)(bt,{children:[(0,g.jsxs)(vt,{children:[" - ",e("skills.java")]}),(0,g.jsxs)(vt,{children:[" - ",e("skills.python")]}),(0,g.jsxs)(vt,{children:[" - ",e("skills.react")]}),(0,g.jsxs)(vt,{children:[" - ",e("skills.php")]}),(0,g.jsxs)(vt,{children:[" - ",e("skills.SQL")]}),(0,g.jsxs)(vt,{children:[" - ",e("skills.firebase")]}),(0,g.jsxs)(vt,{children:[" - ",e("skills.gml")]}),(0,g.jsxs)(vt,{children:[" - ",e("skills.c")]})]})]}),(0,g.jsx)(gt,{children:(0,g.jsx)(ut.Radar,{data:t})})]})},wt=n.default.div`
`,yt=n.default.h2`
  color: #6f2cf7 ;
`,kt=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(wt,{children:[(0,g.jsx)(yt,{children:e("education.title")}),(0,g.jsxs)("ul",{children:[(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:e("education.openClassroom.title")}),(0,g.jsx)("p",{children:e("education.openClassroom.date")})]}),(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:e("education.jeanPerrin.title")}),(0,g.jsx)("p",{children:e("education.jeanPerrin.date")})]})]})]})},At=n.default.footer`
  padding: 20px;
  background: #bdc3c7;
  color: #2c3e50;
  margin-top:20px;
`;const St=function(){return(0,g.jsx)(At,{children:(0,g.jsx)("p",{children:"\xa9 2024 Luc-Arnaud Bonnet. Tous droits r\xe9serv\xe9s."})})},Pt=n.default.div`
`,Ct=n.default.h2`
  color: #6f2cf7 ;
`,zt=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(Pt,{children:[(0,g.jsx)(Ct,{children:e("distinctions.title")}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:e("distinctions.music")}),(0,g.jsx)("li",{children:e("distinctions.technology")}),(0,g.jsx)("li",{children:e("distinctions.media")}),(0,g.jsx)("li",{children:e("distinctions.veille")}),(0,g.jsx)("li",{children:e("distinctions.events")})]})]})},Mt=n.default.div`
`,Rt=n.default.h2`
  color: #6f2cf7 ;
`,Lt=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(Mt,{children:[(0,g.jsx)(Rt,{children:e("languages.title")}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:e("languages.french")}),(0,g.jsx)("li",{children:e("languages.english")})]})]})},Ot=n.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
`,Et=n.default.h2`
  color: #6f2cf7;
`,Tt=n.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60vw, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`,$t=n.default.div`
  background: #fff;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,It=n.default.iframe`
  width: 100%;
  height: 500px;
  border: none;
`,Ft=n.default.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,Jt=n.default.h3`
  color: #6f2cf7;
  margin-bottom: 10px;
`,Ut=n.default.p`
  flex-grow: 1;
`,qt=n.default.a`
  margin-top: 15px;
  padding: 10px;
  background-color: #3498db;
  color: white;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;

  &:hover {
    background-color: #2980b9;
  }
`,Dt=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(Ot,{children:[(0,g.jsx)(Et,{children:e("project.title2")}),(0,g.jsx)(Tt,{children:[{title:"project1.title",description:"project1.description",previewUrl:"http://snaaps.duckdns.org:19006/",link:"http://snaaps.duckdns.org:19006/"},{title:"project2.title",description:"project2.description",previewUrl:"https://www.chateaudevins.fr/",link:"https://www.chateaudevins.fr/"},{title:"project3.title",description:"project3.description",previewUrl:"https://www.lechappeedesplaisirs.fr/",link:"https://www.lechappeedesplaisirs.fr/"},{title:"project4.title",description:"project4.description",previewUrl:"http://snaaps.duckdns.org:8082/",link:"http://snaaps.duckdns.org:8082/"},{title:"project5.title",description:"project5.description",previewUrl:"https://www.dalhae-academie.com/",link:"https://www.dalhae-academie.com/"},{title:"project6.title",description:"project6.description",previewUrl:"https://www.prismgangproject.com/",link:"https://www.prismgangproject.com/"}].map(((t,i)=>(0,g.jsxs)($t,{children:[(0,g.jsx)(It,{src:t.previewUrl,title:e(t.title)}),(0,g.jsxs)(Ft,{children:[(0,g.jsx)(Jt,{children:e(t.title)}),(0,g.jsx)(Ut,{children:e(t.description)}),(0,g.jsx)(qt,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:e("project.view")})]})]},i)))})]})};var Vt=i(2614);const Nt={en:{translation:JSON.parse('{"profile":{"title":"Profile","description":"Born to a conservatory director father and an entrepreneurial mother with a taekwondo association, I learned the discipline of work and life early on.<br>By assisting with the renovation and maintenance of the family ch\xe2teau from a young age, I developed a keen sense of responsibility and teamwork.<br>At seven, my father gifted me my first computer, sparking my curiosity for technology. By nine, I had built my first tower, marking my entry into the world of hardware.<br>However, it was with the acquisition of my first Arduino board at twelve that my passion for software and automation truly emerged.<br>I then learned solid programming basics through the \\"Siteduzero\\" (now OpenClassroom) site, and started creating JAVA mods for Minecraft.<br><br>After obtaining my baccalaureate in 2016 in engineering sciences with a specialty in computer science and digital sciences, I pursued my studies in mathematics and computer science at the University of Aix-en-Provence.<br>However, eager to quickly join the professional world, I opted for a JAVA J2E Expert training, which I funded by working at the Aubagne theater.<br>There, I gained practical skills in stage assembly and dressing room management, ensuring the well-being of artists and the smooth running of productions.<br><br>My entry into the professional world was marked by a collaboration with a friend launching his brand, where I created and managed their online sales site, set up complex setups for streamers, and optimized connections in a dedicated villa.<br>Encouraged to become a freelancer, I then diversified my services, completing projects ranging from simple landing pages to complex booking applications, as well as automation solutions for businesses.<br><br>Despite my technical skills and achievements, I have always found it difficult to sell my services due to my reserved nature.<br>Passionate about AI and emerging technologies, I am now looking for opportunities that will allow me to leverage and expand my programming skills while collaborating with teams that share my vision and enthusiasm for technological innovation."},"experience":{"title":"Experience","freelance":{"title":"Freelance Developer","date":"January 2022 to Present","description":["Development of several websites, ranging from showcase sites to e-commerce sites.","Creation of two simple mobile applications for event booking management.","Implementation of a marketing action with an answering machine and SMS link sending for creating temporary profiles.","Development of two app concepts for start-ups, using React, firebase or SQL and Python."]},"infiniteAgency":{"title":"Infinite Agency, Marseille \u2014 Web Technical Manager","date":"September 2019 to December 2021","description":"Creation and maintenance of the company\'s website, technical management of projects related to influencers and clothing sales, assembly and configuration of professional PCs for streamers."},"aubagne":{"title":"Before my 20s - 2 years at the Aubagne town hall","date":"September 2017 to July 2019","description":"Hall keeper - Black Penitent of Aubagne then Comoedia Theater as a temporary worker (Reception, secretarial work, then dressing room manager)"}},"education":{"title":"Education","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Expert","date":"September 2018 to March 2020"},"jeanPerrin":{"title":"Math-Computer Science, Jean Perrin, Aix-en-Provence","date":"September 2016 to May 2017"}},"skills":{"title":"Skills","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Distinctions","music":"Music: 10 years of piano lessons, practice of guitar and fife.","technology":"Technologies and video games: Passionate about computers, video games, and artificial intelligence. I would like to create my own video game one day.","media":"Media: Regular consumer of YouTube content, both educational and/or entertaining.","veille":"Tech watch: I like to spend my time staying informed about IT news and applying/participating in the development of promising open-source projects.","events":"Events: I also take care of the courtesy of events and the work of my father\'s castle."},"languages":{"title":"Languages","french":"French - Native","english":"English - B2 Level"},"feedback":{"title":"Feedback","reviews":"reviews","submit":"Submit","name":"Name","surname":"Surname","comment":"Comment"},"partitionsFifre":{"title":"Fifer Sheet"},"Perso":{"title":"Perso"},"cv":{"title":"CV","download":"Printable Version"},"project":{"title":"Projects","title2":"Public Projects","view":" Go on the website"},"project1":{"title":"Project 1: Lumiscool in progress","description":"This project is an ambitious platform for booking activities..."},"project2":{"title":"Project 2: Chateau de Vins sur Caramy","description":"The website for my father\'s castle, which I need to redo."},"project3":{"title":"Project 3: L\'\xe9chap\xe9e des plaisirs","description":"Showcase site for guest rooms."},"project4":{"title":"Project 4: Amazon Scraper","description":"Scrape Amazon to sort results by price, rating, and number of reviews..."},"project5":{"title":"Project 5: Dalhae Academy","description":"The website for my mother\'s taekwondo club..."}}')},fr:{translation:JSON.parse('{"profile":{"title":"Profil","description":"N\xe9 d\'un p\xe8re directeur de conservatoire et d\'une m\xe8re entrepreneure avec une association de taekwondo, j\'ai tr\xe8s t\xf4t appris la rigueur du travail et la discipline de la vie.<br>En aidant \xe0 la r\xe9novation et \xe0 la maintenance du ch\xe2teau familial d\xe8s mon jeune \xe2ge, j\'ai d\xe9velopp\xe9 un sens aigu des responsabilit\xe9s et du travail en \xe9quipe.<br>\xc0 sept ans, mon p\xe8re m\'a offert mon premier ordinateur, \xe9veillant ma curiosit\xe9 pour la technologie. \xc0 neuf ans, j\'ai construit ma premi\xe8re tour, marquant mes d\xe9buts dans le domaine du hardware.<br>Cependant, c\'est avec l\'obtention de ma premi\xe8re carte Arduino \xe0 douze ans que ma passion pour le software et l\'automatisation s\'est r\xe9ellement r\xe9v\xe9l\xe9e.<br>J\'ai alors appris les bases solides de la programmation gr\xe2ce au site Siteduzero (aujourd\'hui OpenClassroom), et commenc\xe9 \xe0 cr\xe9er des mods en JAVA pour Minecraft.<br><br>Apr\xe8s avoir obtenu mon baccalaur\xe9at en 2016 en sciences de l\'ing\xe9nieur avec une sp\xe9cialit\xe9 en informatique et sciences du num\xe9rique, j\'ai poursuivi mes \xe9tudes en math\xe9matiques et informatique \xe0 l\'universit\xe9 d\'Aix-en-Provence.<br>Toutefois, d\xe9sireux de rapidement int\xe9grer le monde professionnel, j\'ai opt\xe9 pour une formation JAVA J2E Expert, que j\'ai financ\xe9e en travaillant au th\xe9\xe2tre d\'Aubagne.<br>L\xe0, j\'ai acquis des comp\xe9tences pratiques en montage de sc\xe8nes et gestion des loges, assurant le bien-\xeatre des artistes et la fluidit\xe9 des productions.<br><br>Mon entr\xe9e dans le monde professionnel a \xe9t\xe9 marqu\xe9e par la collaboration avec un ami lan\xe7ant sa marque, o\xf9 j\'ai cr\xe9\xe9 et g\xe9r\xe9 leur site de vente en ligne, mont\xe9 des setups complexes pour les streamers, et optimis\xe9 les connexions dans une villa d\xe9di\xe9e.<br>Encourag\xe9 \xe0 devenir auto-entrepreneur, j\'ai ensuite diversifi\xe9 mes services, r\xe9alisant des projets allant de simples landing pages \xe0 des applications de r\xe9servation complexes, en passant par des solutions d\'automatisation pour entreprises.<br><br>Malgr\xe9 mes comp\xe9tences techniques et mes r\xe9alisations, j\'ai toujours trouv\xe9 difficile de vendre mes services en raison de ma nature r\xe9serv\xe9e.<br>Passionn\xe9 par l\'IA et les technologies \xe9mergentes, je recherche d\xe9sormais des opportunit\xe9s qui me permettront d\'exploiter et d\'\xe9largir mes comp\xe9tences en programmation, tout en collaborant avec des \xe9quipes qui partagent ma vision et mon enthousiasme pour l\'innovation technologique."},"experience":{"title":"Exp\xe9rience","freelance":{"title":"Freelance D\xe9veloppeur","date":"Janvier 2022 \xe0 Aujourd\'hui","description":["D\xe9veloppement de plusieurs sites web, allant de sites vitrines \xe0 des sites de vente en ligne.","Cr\xe9ation de deux applications mobiles simples pour la gestion de r\xe9servations d\'\xe9v\xe9nements.","Mise en place d\'une action marketing avec r\xe9pondeur t\xe9l\xe9phonique et envoi de liens SMS pour cr\xe9ation de profils temporaires.","D\xe9veloppement de deux concepts d\'applications pour des start-ups, utilisant React/node.js firebase/SQL et Python."]},"infiniteAgency":{"title":"Infinite Agency, Marseille \u2014 Responsable Technique Web","date":"Septembre 2019 \xe0 D\xe9cembre 2021","description":"Cr\xe9ation et maintenance du site web de l\'entreprise, gestion technique des projets li\xe9s aux influenceurs et \xe0 la vente de v\xeatements, montage et param\xe9trage de PC professionnels pour les streamers."},"aubagne":{"title":"Avant mes 20 ans - 2 ans \xe0 la mairie d\'Aubagne","date":"Septembre 2017 \xe0 Juillet 2019","description":"Gardien de salle - P\xe9nitent noir d\'Aubagne puis Th\xe9\xe2tre Comoedia en tant que vacataire (Accueil, secr\xe9tariat puis responsable loge)"}},"education":{"title":"Formation","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Expert","date":"Septembre 2018 \xe0 Mars 2020"},"jeanPerrin":{"title":"Math-Informatique, Jean Perrin, Aix-en-Provence","date":"Septembre 2016 \xe0 Mai 2017"}},"skills":{"title":"Comp\xe9tences","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Distinctions","music":"Musique : 10 ans de cours de piano, pratique de la guitare et du fifre.","technology":"Technologies et jeux vid\xe9o : Passionn\xe9 d\'informatique, de jeux vid\xe9o et d\'intelligence artificielle. J\'aimerais faire un jour mon propre jeu vid\xe9o.","media":"M\xe9dias : Consommateur r\xe9gulier de contenu YouTube, \xe0 la fois \xe9ducatif et/ou divertissant.","veille":"Veille informatique : J\'aime passer mon temps \xe0 m\'informer de l\'actualit\xe9 informatique et appliquer/participer aux d\xe9veloppement de projet open-source que je trouve prometteur.","events":"\xc9v\xe9nements : Je m\'occupe \xe9galement de la biens\xe9ance des \xe9v\xe9nements et des travaux du ch\xe2teau de mon p\xe8re."},"languages":{"title":"Langues","french":"Fran\xe7ais - Langue Maternelle","english":"Anglais - Niveau B2"},"cv":{"title":"CV","download":"Version imprimable"},"partitionsFifre":{"title":"Partition de fifre"},"Perso":{"title":"Perso"},"feedback":{"title":"Avis","reviews":"avis","submit":"Soumettre","name":"Nom","surname":"Pr\xe9nom","comment":"Commentaire"},"project":{"title":"Projets","title2":"Projets publics","view":" Aller sur le site"},"project1":{"title":"Projet 1 : Lumiscool en cours","description":"Ce projet est une ambicieuse platforme de r\xe9servation d\'activit\xe9..."},"project2":{"title":"Projet 2 : Chateau de Vins sur Caramy","description":"le siteweb du chateau de mon p\xe8re, que je dois refaire."},"project3":{"title":"Projet 3 : L\'\xe9chap\xe9e des plaisirs","description":"Site vitrine de chambres d\'h\xf4te."},"project4":{"title":"Projet 4 : Scraper Amazon","description":"Scrap amazon pour trier les resultats par prix, note et nombre d\'avis..."},"project5":{"title":"Projet 5 : Dalhae Academie","description":"Le site web du club de taekwondo de ma m\xe8re, ne vous fiez pas \xe0 la pr\xe9visualisation le site fonctionne ..."},"project6":{"title":"Projet 6 : Prism gang Project","description":"Le site web de la marque d\'un ami ..."}}')},es:{translation:JSON.parse('{"profile":{"title":"Perfil","description":"Nacido de un padre director de conservatorio y una madre emprendedora con una asociaci\xf3n de taekwondo, aprend\xed muy temprano la disciplina del trabajo y la vida.<br>Ayudando en la renovaci\xf3n y el mantenimiento del castillo familiar desde una edad temprana, desarroll\xe9 un agudo sentido de responsabilidad y trabajo en equipo.<br>A los siete a\xf1os, mi padre me regal\xf3 mi primera computadora, despertando mi curiosidad por la tecnolog\xeda. A los nueve a\xf1os, hab\xeda construido mi primera torre, marcando mi entrada en el mundo del hardware.<br>Sin embargo, fue con la adquisici\xf3n de mi primera placa Arduino a los doce a\xf1os que mi pasi\xf3n por el software y la automatizaci\xf3n realmente emergi\xf3.<br>Luego aprend\xed s\xf3lidos fundamentos de programaci\xf3n a trav\xe9s del sitio \\"Siteduzero\\" (ahora OpenClassroom), y comenc\xe9 a crear mods en JAVA para Minecraft.<br><br>Despu\xe9s de obtener mi bachillerato en 2016 en ciencias de la ingenier\xeda con especialidad en inform\xe1tica y ciencias digitales, continu\xe9 mis estudios en matem\xe1ticas e inform\xe1tica en la Universidad de Aix-en-Provence.<br>Sin embargo, deseoso de unirme r\xe1pidamente al mundo profesional, opt\xe9 por una formaci\xf3n JAVA J2E Expert, que financi\xe9 trabajando en el teatro de Aubagne.<br>All\xed, adquir\xed habilidades pr\xe1cticas en montaje de escenarios y gesti\xf3n de camerinos, asegurando el bienestar de los artistas y el buen funcionamiento de las producciones.<br><br>Mi entrada en el mundo profesional estuvo marcada por una colaboraci\xf3n con un amigo que lanzaba su marca, donde cre\xe9 y gestion\xe9 su sitio de ventas en l\xednea, mont\xe9 configuraciones complejas para streamers y optimic\xe9 las conexiones en una villa dedicada.<br>Alentado a convertirme en aut\xf3nomo, luego diversifiqu\xe9 mis servicios, completando proyectos que van desde simples landing pages hasta aplicaciones de reserva complejas, as\xed como soluciones de automatizaci\xf3n para empresas.<br><br>A pesar de mis habilidades t\xe9cnicas y logros, siempre he encontrado dif\xedcil vender mis servicios debido a mi naturaleza reservada.<br>Apasionado por la IA y las tecnolog\xedas emergentes, ahora busco oportunidades que me permitan aprovechar y expandir mis habilidades de programaci\xf3n mientras colaboro con equipos que comparten mi visi\xf3n y entusiasmo por la innovaci\xf3n tecnol\xf3gica."},"experience":{"title":"Experiencia","freelance":{"title":"Desarrollador Freelance","date":"Enero 2022 hasta Presente","description":["Desarrollo de varios sitios web, desde sitios de presentaci\xf3n hasta sitios de comercio electr\xf3nico.","Creaci\xf3n de dos aplicaciones m\xf3viles sencillas para la gesti\xf3n de reservas de eventos.","Implementaci\xf3n de una acci\xf3n de marketing con contestoador autom\xe1tico y env\xedo de enlaces SMS para la creaci\xf3n de perfiles temporales.","Desarrollo de dos conceptos de aplicaciones para start-ups, utilizando React , firebase or SQL y Python."]},"infiniteAgency":{"title":"Infinite Agency, Marsella \u2014 Gerente T\xe9cnico Web","date":"Septiembre 2019 a Diciembre 2021","description":"Creaci\xf3n y mantenimiento del sitio web de la empresa, gesti\xf3n t\xe9cnica de proyectos relacionados con influencers y ventas de ropa, montaje y configuraci\xf3n de PCs profesionales para streamers."},"aubagne":{"title":"Antes de mis 20 a\xf1os - 2 a\xf1os en el ayuntamiento de Aubagne","date":"Septiembre 2017 a Julio 2019","description":"Conserje de sala - Penitente Negro de Aubagne luego Teatro Comoedia como trabajador temporal (Recepci\xf3n, secretar\xeda y luego gerente de camerinos)"}},"education":{"title":"Educaci\xf3n","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Experto","date":"Septiembre 2018 a Marzo 2020"},"jeanPerrin":{"title":"Matem\xe1ticas-Inform\xe1tica, Jean Perrin, Aix-en-Provence","date":"Septiembre 2016 a Mayo 2017"}},"skills":{"title":"Habilidades","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Distinciones","music":"M\xfasica: 10 a\xf1os de clases de piano, pr\xe1ctica de Guitarra & P\xedfano.","technology":"Tecnolog\xedas y videojuegos: Apasionado de la inform\xe1tica, los videojuegos y la inteligencia artificial. Me gustar\xeda crear mi propio videojuego alg\xfan d\xeda.","media":"Medios: Consumidor regular de contenido de YouTube, tanto educativo como/o entretenido.","veille":"Vigilancia tecnol\xf3gica: Me gusta pasar mi tiempo manteni\xe9ndome informado sobre las noticias de TI y aplicando/participando en el desarrollo de proyectos de c\xf3digo abierto prometedores.","events":"Eventos: Tambi\xe9n me encargo de la cortes\xeda de los eventos y el trabajo del castillo de mi padre."},"languages":{"title":"Idiomas","french":"Franc\xe9s - Nativo","english":"Ingl\xe9s - Nivel B2"},"feedback":{"title":"Comentarios","reviews":"comentarios","submit":"Enviar","name":"Nombre","surname":"Apellido","comment":"Comentario"},"partitionsFifre":{"title":"Catalan fifre"},"Perso":{"title":"Perso"},"cv":{"title":"CV","download":"Versi\xf3n Imprimible"},"project":{"title":"Proyectos","title2":"Proyectos P\xfablicos","view":"Visitar el sitio"},"project1":{"title":"Proyecto 1: Lumiscool en progreso","description":"Este proyecto es una plataforma ambiciosa para reservar actividades..."},"project2":{"title":"Proyecto 2: Chateau de Vins sur Caramy","description":"El sitio web del castillo de mi padre, que necesito rehacer."},"project3":{"title":"Proyecto 3: L\'\xe9chap\xe9e des plaisirs","description":"Sitio de presentaci\xf3n para habitaciones de hu\xe9spedes."},"project4":{"title":"Proyecto 4: Amazon Scraper","description":"Raspar Amazon para ordenar los resultados por precio, calificaci\xf3n y n\xfamero de rese\xf1as..."},"project5":{"title":"Proyecto 5: Academia Dalhae","description":"El sitio web del club de taekwondo de mi madre..."}}')},de:{translation:JSON.parse('{"profile":{"title":"Profil","description":"Geboren als Sohn eines Konservatoriumsdirektors und einer unternehmerischen Mutter mit einem Taekwondo-Verein, habe ich fr\xfch die Disziplin von Arbeit und Leben gelernt.<br>Durch die Unterst\xfctzung bei der Renovierung und Wartung des Familienschlosses in jungen Jahren entwickelte ich ein starkes Verantwortungsbewusstsein und Teamarbeit.<br>Mit sieben Jahren schenkte mir mein Vater meinen ersten Computer, was meine Neugier f\xfcr Technologie weckte. Mit neun baute ich meinen ersten Tower und markierte damit meinen Einstieg in die Hardware-Welt.<br>Doch mit dem Erwerb meines ersten Arduino-Boards im Alter von zw\xf6lf Jahren entdeckte ich meine Leidenschaft f\xfcr Software und Automatisierung.<br>Ich erlernte solide Programmiergrundlagen durch die Seite \\"Siteduzero\\" (heute OpenClassroom) und begann, JAVA-Mods f\xfcr Minecraft zu erstellen.<br><br>Nach dem Abitur 2016 in Ingenieurwissenschaften mit Schwerpunkt Informatik und Digitale Wissenschaften setzte ich mein Studium der Mathematik und Informatik an der Universit\xe4t Aix-en-Provence fort.<br>Doch da ich schnell in die Berufswelt eintreten wollte, entschied ich mich f\xfcr eine Ausbildung zum JAVA J2E-Experten, die ich durch meine Arbeit im Theater von Aubagne finanzierte.<br>Dort erwarb ich praktische F\xe4higkeiten im B\xfchnenaufbau und im Management der K\xfcnstlergarderoben und sorgte f\xfcr das Wohlbefinden der K\xfcnstler und den reibungslosen Ablauf der Produktionen.<br><br>Mein Einstieg in die Berufswelt wurde durch die Zusammenarbeit mit einem Freund gepr\xe4gt, der seine Marke gr\xfcndete, wo ich ihre Online-Verkaufsseite erstellte und verwaltete, komplexe Setups f\xfcr Streamer aufbaute und die Verbindungen in einer speziellen Villa optimierte.<br>Ermutigt, freiberuflich t\xe4tig zu werden, diversifizierte ich anschlie\xdfend meine Dienstleistungen und realisierte Projekte, die von einfachen Landingpages bis hin zu komplexen Buchungsanwendungen und Automatisierungsl\xf6sungen f\xfcr Unternehmen reichten.<br><br>Trotz meiner technischen F\xe4higkeiten und Erfolge fiel es mir immer schwer, meine Dienstleistungen aufgrund meiner zur\xfcckhaltenden Natur zu verkaufen.<br>Mit Leidenschaft f\xfcr KI und aufstrebende Technologien suche ich nun nach M\xf6glichkeiten, meine Programmierkenntnisse zu nutzen und zu erweitern, w\xe4hrend ich mit Teams zusammenarbeite, die meine Vision und Begeisterung f\xfcr technologische Innovation teilen."},"experience":{"title":"Erfahrung","freelance":{"title":"Freiberuflicher Entwickler","date":"Januar 2022 bis Heute","description":["Entwicklung mehrerer Websites, von Schaufensterseiten bis hin zu E-Commerce-Seiten.","Erstellung von zwei einfachen mobilen Anwendungen f\xfcr das Veranstaltungsbuchungsmanagement.","Implementierung einer Marketingaktion mit Anrufbeantworter und SMS-Link-Versand zur Erstellung tempor\xe4rer Profile.","Entwicklung von zwei App-Konzepten f\xfcr Start-ups, unter Verwendung von React, firebase or SQL und Python."]},"infiniteAgency":{"title":"Infinite Agency, Marseille \u2014 Webtechnischer Leiter","date":"September 2019 bis Dezember 2021","description":"Erstellung und Wartung der Unternehmenswebsite, technische Verwaltung von Projekten im Zusammenhang mit Influencern und Bekleidungsverk\xe4ufen, Montage und Konfiguration professioneller PCs f\xfcr Streamer."},"aubagne":{"title":"Vor meinem 20. Lebensjahr - 2 Jahre im Rathaus von Aubagne","date":"September 2017 bis Juli 2019","description":"Saaldiener - Schwarzer B\xfc\xdfer von Aubagne, dann Comoedia-Theater als Aushilfe (Empfang, Sekretariatsarbeit, dann Garderobenleiter)"}},"education":{"title":"Ausbildung","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Experte","date":"September 2018 bis M\xe4rz 2020"},"jeanPerrin":{"title":"Mathematik-Informatik, Jean Perrin, Aix-en-Provence","date":"September 2016 bis Mai 2017"}},"skills":{"title":"F\xe4higkeiten","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Auszeichnungen","music":"Musik: 10 Jahre Klavierunterricht, Schwegel & Gitarre spielen.","technology":"Technologien und Videospiele: Leidenschaftlich f\xfcr Computer, Videospiele und k\xfcnstliche Intelligenz. Ich m\xf6chte eines Tages mein eigenes Videospiel erstellen.","media":"Medien: Regelm\xe4\xdfiger Konsument von YouTube-Inhalten, sowohl lehrreich als auch unterhaltsam.","veille":"Technologie\xfcberwachung: Ich verbringe gerne meine Zeit damit, mich \xfcber IT-Neuigkeiten zu informieren und vielversprechende Open-Source-Projekte zu entwickeln.","events":"Veranstaltungen: Ich k\xfcmmere mich auch um die H\xf6flichkeit der Veranstaltungen und die Arbeiten am Schloss meines Vaters."},"partitionsFifre":{"title":"Fifren"},"Perso":{"title":"Perso"},"languages":{"title":"Sprachen","french":"Franz\xf6sisch - Muttersprache","english":"Englisch - B2-Niveau"},"feedback":{"title":"Bewertungen","reviews":"Bewertungen","submit":"Absenden","name":"Name","surname":"Nachname","comment":"Kommentar"},"cv":{"title":"Lebenslauf","download":"Druckbare Version"},"project":{"title":"Projekte","title2":"\xd6ffentliche Projekte","view":"Zur Webseite"},"project1":{"title":"Projekt 1: Lumiscool in Arbeit","description":"Dieses Projekt ist eine ehrgeizige Plattform zur Buchung von Aktivit\xe4ten..."},"project2":{"title":"Projekt 2: Chateau de Vins sur Caramy","description":"Die Website f\xfcr das Schloss meines Vaters, die ich neu gestalten muss."},"project3":{"title":"Projekt 3: L\'\xe9chap\xe9e des plaisirs","description":"Schaufensterseite f\xfcr G\xe4stezimmer."},"project4":{"title":"Projekt 4: Amazon Scraper","description":"Amazon durchsuchen, um Ergebnisse nach Preis, Bewertung und Anzahl der Bewertungen zu sortieren..."},"project5":{"title":"Projekt 5: Dalhae Akademie","description":"Die Website f\xfcr den Taekwondo-Club meiner Mutter..."}}')}};Vt.default.use(l.initReactI18next).init({resources:Nt,lng:"fr",fallbackLng:"fr",interpolation:{escapeValue:!1}});Vt.default;const Bt=n.default.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`,Gt=n.default.div`
  margin-left: ${e=>e.showSidebar?"250px":"0"};
  padding: 20px;
  width: auto;
  overflow-y: auto;
  background: #efefef;
  transition: margin-left 0.3s, width 0.3s;
`,Qt=n.default.div`
  padding: 20px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  border: 1px solid #bdc3c7;
`,Ht=n.default.div`
  margin-bottom: 20px;
  background: #ffffff;
  max-width: 100%;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  overflow: hidden;
`,Yt=()=>{const[e,t]=(0,r.useState)("cv"),[i,n]=(0,r.useState)(!0),o=(0,r.useRef)(null),s=(0,r.useRef)(null),l=(0,r.useRef)(null),c=(0,r.useRef)(null),d=(0,r.useRef)(null),p=(0,r.useRef)(null),u=()=>{window.innerWidth<=768?n(!1):n(!0)};(0,r.useEffect)((()=>(window.addEventListener("resize",u),u(),()=>window.removeEventListener("resize",u))),[]);const f=e=>{console.log("scrollToSection called with:",e),e&&e.current?(console.log("Scrolling to:",e.current),e.current.scrollIntoView({behavior:"smooth"})):console.log("Invalid sectionRef:",e)};return(0,g.jsxs)(Bt,{children:[(0,g.jsx)(a,{})," ",i?(0,g.jsx)(A,{activePage:e,setActivePage:t,scrollToSection:f,profileRef:o,experienceRef:s,skillsRef:l,educationRef:c,distinctionsRef:d,languagesRef:p}):(0,g.jsx)(R,{activePage:e,setActivePage:t,scrollToSection:f,profileRef:o,experienceRef:s,skillsRef:l,educationRef:c,distinctionsRef:d,languagesRef:p}),(0,g.jsxs)(Gt,{showSidebar:i,children:["cv"===e&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Ht,{ref:o,id:"profile-section",children:(0,g.jsx)(G,{})}),(0,g.jsx)(Qt,{ref:s,id:"experience-section",children:(0,g.jsx)(Y,{})}),(0,g.jsx)(Qt,{ref:l,id:"skills-section",children:(0,g.jsx)(jt,{})}),(0,g.jsx)(Qt,{ref:c,id:"education-section",children:(0,g.jsx)(kt,{})}),(0,g.jsx)(Qt,{ref:d,id:"distinctions-section",children:(0,g.jsx)(zt,{})}),(0,g.jsx)(Qt,{ref:p,id:"languages-section",children:(0,g.jsx)(Lt,{})})]}),"project"===e&&(0,g.jsx)(Dt,{}),"partitionsFifre"===e&&(0,g.jsx)(re,{}),"Perso"===e&&(0,g.jsx)(pt,{}),(0,g.jsx)(St,{})]})]})}}},t={};function i(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,i),a.exports}i.m=e,(()=>{var e=[];i.O=(t,r,n,a)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,n,a]=e[d],s=!0,l=0;l<r.length;l++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,n,a]}})(),i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="/",(()=>{var e={792:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[o,s,l]=r,c=0;if(o.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var d=l(i)}for(t&&t(r);c<o.length;c++)a=o[c],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(d)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.nc=void 0;var r=i.O(void 0,[600],(()=>i(4352)));r=i.O(r)})();
//# sourceMappingURL=main.be40fcda.js.map