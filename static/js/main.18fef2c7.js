(()=>{"use strict";var e={7119:(e,i,t)=>{t.r(i),t.d(i,{default:()=>Ue});var n=t(6665),r=t(6627);const a=r.createGlobalStyle`
  body {
    font-family: 'MaPolicePersonnalisee', 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'MaPolicePersonnalisee', 'Roboto', sans-serif;
  }
`;var o=t(4493),s=t(3652),l=t(6835),c=t(8262),d=t(157);const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAeElEQVR42mMYBaPAWWe2uJv+vMtA/B8fbpo4lyS8lIsLL17GxXV5GTe3OAPMcvo6AOEIBpgFaU6f8OKvP36ThJ/KyuLDcEeMOmDUAaMOGHXAqANGHTDqgFEHjDpgwB1A30YpJj4Hbpa76s+7OgAOOAdqlo92jEYBABPTRkb6FjqAAAAAAElFTkSuQmCC",p=t.p+"static/media/unk.81b367bcf4e83250d2b0.png",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACDElEQVR42u2Xb0gTYRzHD+xdr5IgSOpFvYhAKIisTV0vSiTWoCBaXBlUBO3F6M+r/hErGGhLlFpUJDixepHSdLUJ0UWjpBzqUBeYBNELa7NB2ua1hfPT7mge9SIIbtube+DDPc/dA98Pv/vBPScYwxieCsHWWiHE81Bi4kq2UJ5wTUIoLNi0saQUcg2B8gtEXAIj7mUQM/3B4riJ6ZcNZEbr1PWkfzuXj+7C42xY2vNJauSLtFWZ/zf53Dz/EJh7W89z30Hutx5H8tm5sH8DboeVzpYTvOiy86jNrs77bjeRilj0FtD4ED7LwLkmElWVxOo2I6fnGJKCdHlO0t3sIDtq1rsCGrlxE1l5lqjjCLMrlvO1aiUAGTlN6ME1AHJTh/UV0MLN+Nut/JhPMfLMj3zrBvG2FpJrV/Gmej29d68AMPj4PAtjtfoLTIV2q+9YTn/n4+QwAPIdr1qJmdWVDDy8DkB/51Xeh6z6C0z02zhUs45sZp7o4BPCgXs87XDhq15D36l9SwLNTpFob6P+Ap8lM2f2bkMVeB1QqqHS4T6mXoO/eyDY7SIZrilOE471WEh9S+TDvHgvidy8KKrhzj1b8JwWyS38JDl0oChNqPHOQjZay8yrnfS0i8QCNuThehYnzMozZU+RBTRIRXb8fU9XgZKhCRhfQ0NAoNyH0unCsTxRjnAl2/gxMsYvfR1cc+DhAhUAAAAASUVORK5CYII=",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAdUlEQVR42u2XsQ2AMAwEDQwBBdRZEwqWQqJHFAgpYgIGMR9QxAZ2in/pCld3rYXjsBZEoMbE1+0k/yPyEUIwJXsZwAD/gKUSXZta76E3BV7AAAYwoISAfRRN6NmZ8nkZwIBCAiJQFyY5ZJulxXF5yJObXxH3AA5uBkPGSy9SAAAAAElFTkSuQmCC";var h=t(397);const g=r.default.div`
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
`,b=r.default.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,x=r.default.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,v=r.default.div`
  width: 70%;
  padding: 15px;
  display: flex;
  align-items: center;
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
`,j=(0,r.default)(s.animated.div)`
  width: 70%;
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${e=>e.active?"#6f2cf7":"transparent"};
  color: ${e=>e.active?"#ffffff":"#2c3e50"};
  transition: background-color 0.3s, color 0.3s;
  border-left: 1px solid #6f2cf7;

  &:hover {
    background-color: #6f2cf7;
    color: #ffffff;
    border : 1px solid #6f2cf7;
  }

  svg {
    margin-right: 10px;
    margin-left: 10px;
  }
`,w=r.default.div`
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
`,y=[{icon:o.FaUser,label:"profile.title",ref:"profileRef"},{icon:o.FaBriefcase,label:"experience.title",ref:"experienceRef"},{icon:o.FaTools,label:"skills.title",ref:"skillsRef"},{icon:o.FaGraduationCap,label:"education.title",ref:"educationRef"},{icon:o.FaMedal,label:"distinctions.title",ref:"distinctionsRef"},{icon:o.FaLanguage,label:"languages.title",ref:"languagesRef"}],A=({activePage:e,setActivePage:i,scrollToSection:t,profileRef:n,experienceRef:r,skillsRef:a,educationRef:A,distinctionsRef:k,languagesRef:P})=>{const{t:S,i18n:C}=(0,l.useTranslation)(),R={profileRef:n,experienceRef:r,skillsRef:a,educationRef:A,distinctionsRef:k,languagesRef:P},z=(0,s.useTrail)(y.length,{opacity:"cv"===e?1:0,transform:"cv"===e?"translateY(0)":"translateY(-70px)",from:{opacity:0,transform:"translateY(-70px)"},config:{mass:1,tension:280,friction:60},delay:"cv"===e?100:0}),I=e=>{C.changeLanguage(e)};return(0,h.jsxs)(g,{children:[(0,h.jsx)(b,{children:(0,h.jsx)("svg",{width:"200",height:"100",xmlns:"http://www.w3.org/2000/svg",children:(0,h.jsxs)("g",{children:[(0,h.jsx)("text",{x:"0",y:"40",fontFamily:"Arial",fontSize:"24",fill:"#2c3e50",children:"Luc-Arnaud"}),(0,h.jsx)("text",{x:"0",y:"70",fontFamily:"Arial",fontSize:"24",fill:"#6f2cf7",children:"Bonnet"})]})})}),(0,h.jsxs)(x,{children:[(0,h.jsxs)(v,{active:"cv"===e,onClick:()=>i("cv"),children:[(0,h.jsx)(o.FaFileAlt,{size:25})," ",(0,h.jsx)("span",{children:S("cv.title")})]}),"cv"===e&&z.map(((e,i)=>{const{icon:n,label:r,ref:a}=y[i];return(0,h.jsxs)(j,{style:e,onClick:()=>{console.log("SubNavItem clicked:",r,R[a]),R[a]&&R[a].current?(console.log("Scrolling to:",R[a].current),t(R[a])):console.log("Invalid ref:",R[a])},children:[(0,h.jsx)(n,{size:25})," ",(0,h.jsx)("span",{children:S(r)})]},r)})),(0,h.jsxs)(v,{active:"project"===e,onClick:()=>{i("project"),t(P)},children:[(0,h.jsx)(o.FaComments,{size:20})," ",(0,h.jsx)("span",{children:S("project.title")})]}),(0,h.jsxs)(v,{active:"avis"===e,onClick:()=>i("avis"),children:[(0,h.jsx)(o.FaComments,{size:25})," ",(0,h.jsx)("span",{children:S("feedback.title")})]})]}),(0,h.jsxs)(w,{children:[(0,h.jsx)(d.default,{style:{marginLeft:5},onPress:()=>I("fr"),children:(0,h.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:u,contentFit:"contain"})}),(0,h.jsx)(d.default,{style:{marginLeft:5},onPress:()=>I("en"),children:(0,h.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:p,contentFit:"contain"})}),(0,h.jsx)(d.default,{style:{marginLeft:5},onPress:()=>I("es"),children:(0,h.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:m,contentFit:"contain"})}),(0,h.jsx)(d.default,{style:{marginLeft:5},onPress:()=>I("de"),children:(0,h.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:f,contentFit:"contain"})})]})]})},k=r.default.div`
  width: 100%;
  background-color: #f8f9fa;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,P=(0,r.default)(o.FaBars)`
  cursor: pointer;
  margin-right:40px;
`,S=r.default.div`
  display: ${e=>e.show?"block":"none"};
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
`,C=r.default.div`
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
`,R=((0,r.default)(c.Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
`,r.default.div`
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
`),z=({activePage:e,setActivePage:i,scrollToSection:t,profileRef:r,experienceRef:a,skillsRef:s,educationRef:g,distinctionsRef:b,languagesRef:x})=>{const{t:v,i18n:j}=(0,l.useTranslation)(),[w,y]=(0,n.useState)(!1),A=e=>{j.changeLanguage(e),y(!1)};return(0,h.jsxs)(k,{children:[(0,h.jsx)("div",{children:"Luc-Arnaud Bonnet"}),(0,h.jsx)(P,{size:25,onClick:()=>y(!w)}),(0,h.jsxs)(S,{show:w,children:[(0,h.jsxs)(C,{active:"cv"===e,onClick:()=>i("cv"),children:[(0,h.jsx)(o.FaFileAlt,{size:20})," ",(0,h.jsx)("span",{children:v("cv.title")})]}),(0,h.jsxs)(C,{active:"avis"===e,onClick:()=>{i("avis"),y(!1)},children:[(0,h.jsx)(o.FaComments,{size:20})," ",(0,h.jsx)("span",{children:v("feedback.title")})]}),(0,h.jsxs)(C,{active:"projet"===e,onClick:()=>{i("projet"),y(!1)},children:[(0,h.jsx)(o.FaComments,{size:20})," ",(0,h.jsx)("span",{children:v("project.title")})]}),(0,h.jsxs)(R,{children:[(0,h.jsx)(d.default,{style:{marginLeft:5},onPress:()=>A("fr"),children:(0,h.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:u,contentFit:"contain"})}),(0,h.jsx)(d.default,{style:{marginLeft:5},onPress:()=>A("en"),children:(0,h.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:p,contentFit:"contain"})}),(0,h.jsx)(d.default,{style:{marginLeft:5},onPress:()=>A("es"),children:(0,h.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:m,contentFit:"contain"})}),(0,h.jsx)(d.default,{style:{marginLeft:5},onPress:()=>A("de"),children:(0,h.jsx)(c.Image,{style:{height:20,aspectRatio:16/9},source:f,contentFit:"contain"})})]})]})]})};r.default.header`
`,r.default.h1`
  font-size: 2.5em;
  margin: 0;
`;var I=t(4504),E=t(4483);const M=t.p+"static/media/pp.4af3ec75ba96e0f6e90c.jpg",T=t.p+"static/media/bg.686f64df7c3b3fde89de.jpg";const L=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,J=(0,r.default)(c.Image)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,V=(0,r.default)(c.Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
`,q=r.default.div`
  padding: 20px;
`,F=r.default.h2`
  color: #6f2cf7;
`,D=r.default.div`
  display: flex;
  justify-content: center;
  position: absolute;
  flex-direction : column;
  right: 20px;
  bottom:45px;
`,B=r.default.div`
  display: flex;
  align-items:center;
  justify-content: center;
  position: absolute;
  flex-direction : row;
  right: 20px;
  top:45px;
`,O=r.default.a`
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
`,N=r.default.a`
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
`,U=r.default.span`
  font-size: 16px;
  margin-right: 10px;
  color: white;
`,G=()=>{const{t:e}=(0,l.useTranslation)();return(0,h.jsxs)(L,{children:[(0,h.jsxs)(I.default,{style:{width:"100%",height:"45vh",backgroundColor:"black",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:[(0,h.jsx)(J,{style:{width:"fit-content",maxWidth:"100%",height:"100%",borderRadius:"8px 8px 0 0",aspectRatio:2},source:T,transition:1e3}),(0,h.jsx)(V,{style:{width:150,height:150,borderRadius:"50%",position:"absolute",bottom:50,left:30,border:"2px solid #6f2cf7"},source:M,contentFit:"cover",transition:1e3}),(0,h.jsxs)(B,{children:[(0,h.jsx)(U,{children:e("cv.download")}),(0,h.jsx)(N,{href:"/path-to-your-cv/CV.pdf",target:"_blank",rel:"noopener noreferrer",children:(0,h.jsx)(E.default,{name:"download"})})]}),(0,h.jsxs)(D,{children:[(0,h.jsx)(O,{href:"https://www.instagram.com/p/C5kxV0tqLaf/?next=%2F",target:"_blank",children:(0,h.jsx)(E.default,{name:"instagram"})}),(0,h.jsx)(O,{href:"https://m.facebook.com/luc.bonnet1/",target:"_blank",children:(0,h.jsx)(E.default,{name:"facebook"})}),(0,h.jsx)(O,{href:"https://www.linkedin.com/in/luc-arnaud-bonnet-47b5921b8/",target:"_blank",children:(0,h.jsx)(E.default,{name:"linkedin"})}),(0,h.jsx)(O,{href:"mailto:luc.bonnet.13@gmail.com",children:(0,h.jsx)(E.default,{name:"envelope"})})]})]}),(0,h.jsxs)(q,{children:[(0,h.jsx)(F,{children:e("profile.title")}),(0,h.jsx)("p",{dangerouslySetInnerHTML:{__html:e("profile.description")}})]})]})},H=r.default.div`
`,Q=r.default.h2`
  color: #6f2cf7 ;
`,W=()=>{const{t:e}=(0,l.useTranslation)();return(0,h.jsxs)(H,{children:[(0,h.jsx)(Q,{children:e("experience.title")}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:e("experience.freelance.title")}),(0,h.jsx)("p",{children:e("experience.freelance.date")}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:e("experience.freelance.description.0")}),(0,h.jsx)("li",{children:e("experience.freelance.description.1")}),(0,h.jsx)("li",{children:e("experience.freelance.description.2")}),(0,h.jsx)("li",{children:e("experience.freelance.description.3")})]})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:e("experience.infiniteAgency.title")}),(0,h.jsx)("p",{children:e("experience.infiniteAgency.date")}),(0,h.jsx)("p",{children:e("experience.infiniteAgency.description")})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:e("experience.aubagne.title")}),(0,h.jsx)("p",{children:e("experience.aubagne.date")}),(0,h.jsx)("p",{children:e("experience.aubagne.description")})]})]})]})};var Y=t(2342),K=t(3595);K.Chart.register(K.RadialLinearScale,K.PointElement,K.LineElement,K.Filler,K.Tooltip,K.Legend);const Z=r.default.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,X=r.default.div`
  flex: 1;
  min-width: 300px;
`,_=r.default.div`
  flex: 1;
  min-width: 300px;
  max-height: 50vh;
`,$=r.default.h2`
  color: #6f2cf7;
`,ee=r.default.ul`
  list-style-type: none; /* Enlever les puces si nécessaire */
  padding: 5px; /* Enlever le padding par défaut */
`,ie=r.default.li`
  margin-bottom: 15px; /* Ajuster l'espacement entre les éléments */
  font-size: 18px; /* Optionnel: Ajuster la taille de police */
`,te=()=>{const{t:e}=(0,l.useTranslation)(),i={labels:["Java","Python","JS/React/Node","PHP","SQL","Firebase","GML","C"],datasets:[{label:e("skills.title"),data:[5,7,8,4,5,7,6,3],backgroundColor:"rgba(111, 44, 247, 0.2)",borderColor:"rgba(111, 44, 247, 1)",borderWidth:1}]};return(0,h.jsxs)(Z,{children:[(0,h.jsxs)(X,{children:[(0,h.jsx)($,{children:e("skills.title")}),(0,h.jsxs)(ee,{children:[(0,h.jsxs)(ie,{children:[" - ",e("skills.java")]}),(0,h.jsxs)(ie,{children:[" - ",e("skills.python")]}),(0,h.jsxs)(ie,{children:[" - ",e("skills.react")]}),(0,h.jsxs)(ie,{children:[" - ",e("skills.php")]}),(0,h.jsxs)(ie,{children:[" - ",e("skills.SQL")]}),(0,h.jsxs)(ie,{children:[" - ",e("skills.firebase")]}),(0,h.jsxs)(ie,{children:[" - ",e("skills.gml")]}),(0,h.jsxs)(ie,{children:[" - ",e("skills.c")]})]})]}),(0,h.jsx)(_,{children:(0,h.jsx)(Y.Radar,{data:i})})]})},ne=r.default.div`
`,re=r.default.h2`
  color: #6f2cf7 ;
`,ae=()=>{const{t:e}=(0,l.useTranslation)();return(0,h.jsxs)(ne,{children:[(0,h.jsx)(re,{children:e("education.title")}),(0,h.jsxs)("ul",{children:[(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:e("education.openClassroom.title")}),(0,h.jsx)("p",{children:e("education.openClassroom.date")})]}),(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:e("education.jeanPerrin.title")}),(0,h.jsx)("p",{children:e("education.jeanPerrin.date")})]})]})]})},oe=r.default.footer`
  padding: 20px;
  background: #bdc3c7;
  color: #2c3e50;
  margin-top:20px;
`;const se=function(){return(0,h.jsx)(oe,{children:(0,h.jsx)("p",{children:"\xa9 2024 Luc-Arnaud Bonnet. Tous droits r\xe9serv\xe9s."})})};var le=t(8683);const ce=r.default.div`
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  width:auto;
  min-width:70vw;
`,de=r.default.h2`
  color: #6f2cf7 ;
`,ue=r.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`,pe=r.default.div`
  display: flex;
  align-items: center;
`,me=r.default.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`,fe=r.default.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`,he=r.default.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 4px;
`,ge=r.default.button`
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`,be=(0,r.default)(c.Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
  margin-right: 50px;
`,xe=r.default.div`
  display: flex;
  flex-direction: column;
`,ve=r.default.div`
  background: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  border: 1px solid #bdc3c7;
`,je=()=>{const{t:e}=(0,l.useTranslation)(),[i,t]=(0,n.useState)(0),[r,a]=(0,n.useState)(0),[o,s]=(0,n.useState)([]),[c,d]=(0,n.useState)(""),[u,p]=(0,n.useState)(""),[m,f]=(0,n.useState)(0),[g,b]=(0,n.useState)("");(0,n.useEffect)((()=>{x(),v()}),[]);const x=async()=>{const e=await fetch("https://us-central1-mycv-e4c70.cloudfunctions.net/getGlobalRating",{method:"POST",headers:{"Content-Type":"application/json"}}),i=await e.json();t(i.globalRating),a(i.reviewCount)},v=async()=>{const e=await fetch("https://us-central1-mycv-e4c70.cloudfunctions.net/getReviews",{method:"POST",headers:{"Content-Type":"application/json"}}),i=await e.json();s(i.reviews)};return(0,h.jsxs)(ce,{children:[(0,h.jsx)(de,{children:e("feedback.title")}),(0,h.jsxs)(ue,{children:[(0,h.jsx)(be,{style:{width:150,height:150,borderRadius:"50%",marginRight:30,border:"2px solid #6f2cf7"},source:M,contentFit:"cover",transition:1e3}),(0,h.jsxs)("div",{children:[(0,h.jsx)(pe,{children:[...Array(5)].map(((e,t)=>(0,h.jsx)(E.default,{name:t<Math.round(i)?"star":"star-o",size:24,color:"#f39c12"},t)))}),(0,h.jsxs)("p",{children:[r," ",e("feedback.reviews")]})]})]}),(0,h.jsxs)(me,{onSubmit:async e=>{e.preventDefault();const i=(0,le.default)();await fetch("https://us-central1-mycv-e4c70.cloudfunctions.net/submitReview",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i,name:c,surname:u,rating:m,comment:g})}),x(),v(),d(""),p(""),f(0),b("")},children:[(0,h.jsx)(fe,{type:"text",placeholder:e("feedback.name"),value:c,onChange:e=>d(e.target.value),required:!0}),(0,h.jsx)(fe,{type:"text",placeholder:e("feedback.surname"),value:u,onChange:e=>p(e.target.value),required:!0}),(0,h.jsx)(pe,{children:[...Array(5)].map(((e,i)=>(0,h.jsx)(E.default,{name:i<m?"star":"star-o",size:24,color:"#f39c12",onClick:()=>f(i+1),style:{cursor:"pointer"}},i)))}),(0,h.jsx)(he,{placeholder:e("feedback.comment"),value:g,onChange:e=>b(e.target.value),required:!0}),(0,h.jsx)(ge,{type:"submit",children:e("feedback.submit")})]}),(0,h.jsx)(xe,{children:o.map((e=>{return(0,h.jsxs)(ve,{children:[(0,h.jsxs)(I.default,{style:{flexDirection:"row",alignItems:"center"},children:[(0,h.jsxs)("h4",{children:[e.name," ",e.surname,"  "]}),(0,h.jsx)(I.default,{style:{width:10}}),(0,h.jsxs)("p",{children:["  ",(i=e.timestamp,new Date(i).toLocaleDateString())]})]}),(0,h.jsx)(pe,{children:[...Array(5)].map(((i,t)=>(0,h.jsx)(E.default,{name:t<e.rating?"star":"star-o",size:16,color:"#f39c12"},t)))}),(0,h.jsx)("p",{children:e.comment})]},e.id);var i}))})]})},we=r.default.div`
`,ye=r.default.h2`
  color: #6f2cf7 ;
`,Ae=()=>{const{t:e}=(0,l.useTranslation)();return(0,h.jsxs)(we,{children:[(0,h.jsx)(ye,{children:e("distinctions.title")}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:e("distinctions.music")}),(0,h.jsx)("li",{children:e("distinctions.technology")}),(0,h.jsx)("li",{children:e("distinctions.media")}),(0,h.jsx)("li",{children:e("distinctions.veille")}),(0,h.jsx)("li",{children:e("distinctions.events")})]})]})},ke=r.default.div`
`,Pe=r.default.h2`
  color: #6f2cf7 ;
`,Se=()=>{const{t:e}=(0,l.useTranslation)();return(0,h.jsxs)(ke,{children:[(0,h.jsx)(Pe,{children:e("languages.title")}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:e("languages.french")}),(0,h.jsx)("li",{children:e("languages.english")})]})]})},Ce=r.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #ecf0f1;
  border-radius: 8px;
  border: 1px solid #bdc3c7;
`,Re=r.default.h2`
  color: #6f2cf7;
`,ze=r.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(60vw, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`,Ie=r.default.div`
  background: #fff;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,Ee=r.default.iframe`
  width: 100%;
  height: 500px;
  border: none;
`,Me=r.default.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,Te=r.default.h3`
  color: #6f2cf7;
  margin-bottom: 10px;
`,Le=r.default.p`
  flex-grow: 1;
`,Je=r.default.a`
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
`,Ve=()=>{const{t:e}=(0,l.useTranslation)();return(0,h.jsxs)(Ce,{children:[(0,h.jsx)(Re,{children:e("project.title2")}),(0,h.jsx)(ze,{children:[{title:"project1.title",description:"project1.description",previewUrl:"http://snaaps.duckdns.org:19006/",link:"http://snaaps.duckdns.org:19006/"},{title:"project2.title",description:"project2.description",previewUrl:"https://www.chateaudevins.fr/",link:"https://www.chateaudevins.fr/"},{title:"project3.title",description:"project3.description",previewUrl:"https://www.lechappeedesplaisirs.fr/",link:"https://www.lechappeedesplaisirs.fr/"},{title:"project4.title",description:"project4.description",previewUrl:"http://snaaps.duckdns.org:8082/",link:"http://snaaps.duckdns.org:8082/"},{title:"project5.title",description:"project5.description",previewUrl:"https://dalhae-academie.webflow.io/",link:"https://www.dalhae-academie.com/"},{title:"project6.title",description:"project6.description",previewUrl:"https://www.prismgangproject.com/",link:"https://www.prismgangproject.com/"}].map(((i,t)=>(0,h.jsxs)(Ie,{children:[(0,h.jsx)(Ee,{src:i.previewUrl,title:e(i.title)}),(0,h.jsxs)(Me,{children:[(0,h.jsx)(Te,{children:e(i.title)}),(0,h.jsx)(Le,{children:e(i.description)}),(0,h.jsx)(Je,{href:i.link,target:"_blank",rel:"noopener noreferrer",children:e("project.view")})]})]},t)))})]})};var qe=t(2614);const Fe={en:{translation:JSON.parse('{"profile":{"title":"Profile","description":"Born to a conservatory director father and an entrepreneurial mother with a taekwondo association, I learned the discipline of work and life early on.<br>By assisting with the renovation and maintenance of the family ch\xe2teau from a young age, I developed a keen sense of responsibility and teamwork.<br>At seven, my father gifted me my first computer, sparking my curiosity for technology. By nine, I had built my first tower, marking my entry into the world of hardware.<br>However, it was with the acquisition of my first Arduino board at twelve that my passion for software and automation truly emerged.<br>I then learned solid programming basics through the \\"Siteduzero\\" (now OpenClassroom) site, and started creating JAVA mods for Minecraft.<br><br>After obtaining my baccalaureate in 2016 in engineering sciences with a specialty in computer science and digital sciences, I pursued my studies in mathematics and computer science at the University of Aix-en-Provence.<br>However, eager to quickly join the professional world, I opted for a JAVA J2E Expert training, which I funded by working at the Aubagne theater.<br>There, I gained practical skills in stage assembly and dressing room management, ensuring the well-being of artists and the smooth running of productions.<br><br>My entry into the professional world was marked by a collaboration with a friend launching his brand, where I created and managed their online sales site, set up complex setups for streamers, and optimized connections in a dedicated villa.<br>Encouraged to become a freelancer, I then diversified my services, completing projects ranging from simple landing pages to complex booking applications, as well as automation solutions for businesses.<br><br>Despite my technical skills and achievements, I have always found it difficult to sell my services due to my reserved nature.<br>Passionate about AI and emerging technologies, I am now looking for opportunities that will allow me to leverage and expand my programming skills while collaborating with teams that share my vision and enthusiasm for technological innovation."},"experience":{"title":"Experience","freelance":{"title":"Freelance Developer","date":"January 2022 to Present","description":["Development of several websites, ranging from showcase sites to e-commerce sites.","Creation of two simple mobile applications for event booking management.","Implementation of a marketing action with an answering machine and SMS link sending for creating temporary profiles.","Development of two app concepts for start-ups, using React, firebase or SQL and Python."]},"infiniteAgency":{"title":"Infinite Agency, Marseille \u2014 Web Technical Manager","date":"September 2019 to December 2021","description":"Creation and maintenance of the company\'s website, technical management of projects related to influencers and clothing sales, assembly and configuration of professional PCs for streamers."},"aubagne":{"title":"Before my 20s - 2 years at the Aubagne town hall","date":"September 2017 to July 2019","description":"Hall keeper - Black Penitent of Aubagne then Comoedia Theater as a temporary worker (Reception, secretarial work, then dressing room manager)"}},"education":{"title":"Education","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Expert","date":"September 2018 to March 2020"},"jeanPerrin":{"title":"Math-Computer Science, Jean Perrin, Aix-en-Provence","date":"September 2016 to May 2017"}},"skills":{"title":"Skills","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Distinctions","music":"Music: 10 years of piano lessons, practice of guitar and fife.","technology":"Technologies and video games: Passionate about computers, video games, and artificial intelligence. I would like to create my own video game one day.","media":"Media: Regular consumer of YouTube content, both educational and/or entertaining.","veille":"Tech watch: I like to spend my time staying informed about IT news and applying/participating in the development of promising open-source projects.","events":"Events: I also take care of the courtesy of events and the work of my father\'s castle."},"languages":{"title":"Languages","french":"French - Native","english":"English - B2 Level"},"feedback":{"title":"Feedback","reviews":"reviews","submit":"Submit","name":"Name","surname":"Surname","comment":"Comment"},"cv":{"title":"CV","download":"Printable Version"},"project":{"title":"Projects","title2":"Public Projects","view":" Go on the website"},"project1":{"title":"Project 1: Lumiscool in progress","description":"This project is an ambitious platform for booking activities..."},"project2":{"title":"Project 2: Chateau de Vins sur Caramy","description":"The website for my father\'s castle, which I need to redo."},"project3":{"title":"Project 3: L\'\xe9chap\xe9e des plaisirs","description":"Showcase site for guest rooms."},"project4":{"title":"Project 4: Amazon Scraper","description":"Scrape Amazon to sort results by price, rating, and number of reviews..."},"project5":{"title":"Project 5: Dalhae Academy","description":"The website for my mother\'s taekwondo club..."}}')},fr:{translation:JSON.parse('{"profile":{"title":"Profil","description":"N\xe9 d\'un p\xe8re directeur de conservatoire et d\'une m\xe8re entrepreneure avec une association de taekwondo, j\'ai tr\xe8s t\xf4t appris la rigueur du travail et la discipline de la vie.<br>En aidant \xe0 la r\xe9novation et \xe0 la maintenance du ch\xe2teau familial d\xe8s mon jeune \xe2ge, j\'ai d\xe9velopp\xe9 un sens aigu des responsabilit\xe9s et du travail en \xe9quipe.<br>\xc0 sept ans, mon p\xe8re m\'a offert mon premier ordinateur, \xe9veillant ma curiosit\xe9 pour la technologie. \xc0 neuf ans, j\'ai construit ma premi\xe8re tour, marquant mes d\xe9buts dans le domaine du hardware.<br>Cependant, c\'est avec l\'obtention de ma premi\xe8re carte Arduino \xe0 douze ans que ma passion pour le software et l\'automatisation s\'est r\xe9ellement r\xe9v\xe9l\xe9e.<br>J\'ai alors appris les bases solides de la programmation gr\xe2ce au site Siteduzero (aujourd\'hui OpenClassroom), et commenc\xe9 \xe0 cr\xe9er des mods en JAVA pour Minecraft.<br><br>Apr\xe8s avoir obtenu mon baccalaur\xe9at en 2016 en sciences de l\'ing\xe9nieur avec une sp\xe9cialit\xe9 en informatique et sciences du num\xe9rique, j\'ai poursuivi mes \xe9tudes en math\xe9matiques et informatique \xe0 l\'universit\xe9 d\'Aix-en-Provence.<br>Toutefois, d\xe9sireux de rapidement int\xe9grer le monde professionnel, j\'ai opt\xe9 pour une formation JAVA J2E Expert, que j\'ai financ\xe9e en travaillant au th\xe9\xe2tre d\'Aubagne.<br>L\xe0, j\'ai acquis des comp\xe9tences pratiques en montage de sc\xe8nes et gestion des loges, assurant le bien-\xeatre des artistes et la fluidit\xe9 des productions.<br><br>Mon entr\xe9e dans le monde professionnel a \xe9t\xe9 marqu\xe9e par la collaboration avec un ami lan\xe7ant sa marque, o\xf9 j\'ai cr\xe9\xe9 et g\xe9r\xe9 leur site de vente en ligne, mont\xe9 des setups complexes pour les streamers, et optimis\xe9 les connexions dans une villa d\xe9di\xe9e.<br>Encourag\xe9 \xe0 devenir auto-entrepreneur, j\'ai ensuite diversifi\xe9 mes services, r\xe9alisant des projets allant de simples landing pages \xe0 des applications de r\xe9servation complexes, en passant par des solutions d\'automatisation pour entreprises.<br><br>Malgr\xe9 mes comp\xe9tences techniques et mes r\xe9alisations, j\'ai toujours trouv\xe9 difficile de vendre mes services en raison de ma nature r\xe9serv\xe9e.<br>Passionn\xe9 par l\'IA et les technologies \xe9mergentes, je recherche d\xe9sormais des opportunit\xe9s qui me permettront d\'exploiter et d\'\xe9largir mes comp\xe9tences en programmation, tout en collaborant avec des \xe9quipes qui partagent ma vision et mon enthousiasme pour l\'innovation technologique."},"experience":{"title":"Exp\xe9rience","freelance":{"title":"Freelance D\xe9veloppeur","date":"Janvier 2022 \xe0 Aujourd\'hui","description":["D\xe9veloppement de plusieurs sites web, allant de sites vitrines \xe0 des sites de vente en ligne.","Cr\xe9ation de deux applications mobiles simples pour la gestion de r\xe9servations d\'\xe9v\xe9nements.","Mise en place d\'une action marketing avec r\xe9pondeur t\xe9l\xe9phonique et envoi de liens SMS pour cr\xe9ation de profils temporaires.","D\xe9veloppement de deux concepts d\'applications pour des start-ups, utilisant React/node.js firebase/SQL et Python."]},"infiniteAgency":{"title":"Infinite Agency, Marseille \u2014 Responsable Technique Web","date":"Septembre 2019 \xe0 D\xe9cembre 2021","description":"Cr\xe9ation et maintenance du site web de l\'entreprise, gestion technique des projets li\xe9s aux influenceurs et \xe0 la vente de v\xeatements, montage et param\xe9trage de PC professionnels pour les streamers."},"aubagne":{"title":"Avant mes 20 ans - 2 ans \xe0 la mairie d\'Aubagne","date":"Septembre 2017 \xe0 Juillet 2019","description":"Gardien de salle - P\xe9nitent noir d\'Aubagne puis Th\xe9\xe2tre Comoedia en tant que vacataire (Accueil, secr\xe9tariat puis responsable loge)"}},"education":{"title":"Formation","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Expert","date":"Septembre 2018 \xe0 Mars 2020"},"jeanPerrin":{"title":"Math-Informatique, Jean Perrin, Aix-en-Provence","date":"Septembre 2016 \xe0 Mai 2017"}},"skills":{"title":"Comp\xe9tences","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Distinctions","music":"Musique : 10 ans de cours de piano, pratique de la guitare et du fifre.","technology":"Technologies et jeux vid\xe9o : Passionn\xe9 d\'informatique, de jeux vid\xe9o et d\'intelligence artificielle. J\'aimerais faire un jour mon propre jeu vid\xe9o.","media":"M\xe9dias : Consommateur r\xe9gulier de contenu YouTube, \xe0 la fois \xe9ducatif et/ou divertissant.","veille":"Veille informatique : J\'aime passer mon temps \xe0 m\'informer de l\'actualit\xe9 informatique et appliquer/participer aux d\xe9veloppement de projet open-source que je trouve prometteur.","events":"\xc9v\xe9nements : Je m\'occupe \xe9galement de la biens\xe9ance des \xe9v\xe9nements et des travaux du ch\xe2teau de mon p\xe8re."},"languages":{"title":"Langues","french":"Fran\xe7ais - Langue Maternelle","english":"Anglais - Niveau B2"},"cv":{"title":"CV","download":"Version imprimable"},"feedback":{"title":"Avis","reviews":"avis","submit":"Soumettre","name":"Nom","surname":"Pr\xe9nom","comment":"Commentaire"},"project":{"title":"Projets","title2":"Projets publics","view":" Aller sur le site"},"project1":{"title":"Projet 1 : Lumiscool en cours","description":"Ce projet est une ambicieuse platforme de r\xe9servation d\'activit\xe9..."},"project2":{"title":"Projet 2 : Chateau de Vins sur Caramy","description":"le siteweb du chateau de mon p\xe8re, que je dois refaire."},"project3":{"title":"Projet 3 : L\'\xe9chap\xe9e des plaisirs","description":"Site vitrine de chambres d\'h\xf4te."},"project4":{"title":"Projet 4 : Scraper Amazon","description":"Scrap amazon pour trier les resultats par prix, note et nombre d\'avis..."},"project5":{"title":"Projet 5 : Dalhae Academie","description":"Le site web du club de taekwondo de ma m\xe8re, ne vous fiez pas \xe0 la pr\xe9visualisation le site fonctionne ..."},"project6":{"title":"Projet 6 : Prism gang Project","description":"Le site web de la marque d\'un ami ..."}}')},es:{translation:JSON.parse('{"profile":{"title":"Perfil","description":"Nacido de un padre director de conservatorio y una madre emprendedora con una asociaci\xf3n de taekwondo, aprend\xed muy temprano la disciplina del trabajo y la vida.<br>Ayudando en la renovaci\xf3n y el mantenimiento del castillo familiar desde una edad temprana, desarroll\xe9 un agudo sentido de responsabilidad y trabajo en equipo.<br>A los siete a\xf1os, mi padre me regal\xf3 mi primera computadora, despertando mi curiosidad por la tecnolog\xeda. A los nueve a\xf1os, hab\xeda construido mi primera torre, marcando mi entrada en el mundo del hardware.<br>Sin embargo, fue con la adquisici\xf3n de mi primera placa Arduino a los doce a\xf1os que mi pasi\xf3n por el software y la automatizaci\xf3n realmente emergi\xf3.<br>Luego aprend\xed s\xf3lidos fundamentos de programaci\xf3n a trav\xe9s del sitio \\"Siteduzero\\" (ahora OpenClassroom), y comenc\xe9 a crear mods en JAVA para Minecraft.<br><br>Despu\xe9s de obtener mi bachillerato en 2016 en ciencias de la ingenier\xeda con especialidad en inform\xe1tica y ciencias digitales, continu\xe9 mis estudios en matem\xe1ticas e inform\xe1tica en la Universidad de Aix-en-Provence.<br>Sin embargo, deseoso de unirme r\xe1pidamente al mundo profesional, opt\xe9 por una formaci\xf3n JAVA J2E Expert, que financi\xe9 trabajando en el teatro de Aubagne.<br>All\xed, adquir\xed habilidades pr\xe1cticas en montaje de escenarios y gesti\xf3n de camerinos, asegurando el bienestar de los artistas y el buen funcionamiento de las producciones.<br><br>Mi entrada en el mundo profesional estuvo marcada por una colaboraci\xf3n con un amigo que lanzaba su marca, donde cre\xe9 y gestion\xe9 su sitio de ventas en l\xednea, mont\xe9 configuraciones complejas para streamers y optimic\xe9 las conexiones en una villa dedicada.<br>Alentado a convertirme en aut\xf3nomo, luego diversifiqu\xe9 mis servicios, completando proyectos que van desde simples landing pages hasta aplicaciones de reserva complejas, as\xed como soluciones de automatizaci\xf3n para empresas.<br><br>A pesar de mis habilidades t\xe9cnicas y logros, siempre he encontrado dif\xedcil vender mis servicios debido a mi naturaleza reservada.<br>Apasionado por la IA y las tecnolog\xedas emergentes, ahora busco oportunidades que me permitan aprovechar y expandir mis habilidades de programaci\xf3n mientras colaboro con equipos que comparten mi visi\xf3n y entusiasmo por la innovaci\xf3n tecnol\xf3gica."},"experience":{"title":"Experiencia","freelance":{"title":"Desarrollador Freelance","date":"Enero 2022 hasta Presente","description":["Desarrollo de varios sitios web, desde sitios de presentaci\xf3n hasta sitios de comercio electr\xf3nico.","Creaci\xf3n de dos aplicaciones m\xf3viles sencillas para la gesti\xf3n de reservas de eventos.","Implementaci\xf3n de una acci\xf3n de marketing con contestador autom\xe1tico y env\xedo de enlaces SMS para la creaci\xf3n de perfiles temporales.","Desarrollo de dos conceptos de aplicaciones para start-ups, utilizando React , firebase or SQL y Python."]},"infiniteAgency":{"title":"Infinite Agency, Marsella \u2014 Gerente T\xe9cnico Web","date":"Septiembre 2019 a Diciembre 2021","description":"Creaci\xf3n y mantenimiento del sitio web de la empresa, gesti\xf3n t\xe9cnica de proyectos relacionados con influencers y ventas de ropa, montaje y configuraci\xf3n de PCs profesionales para streamers."},"aubagne":{"title":"Antes de mis 20 a\xf1os - 2 a\xf1os en el ayuntamiento de Aubagne","date":"Septiembre 2017 a Julio 2019","description":"Conserje de sala - Penitente Negro de Aubagne luego Teatro Comoedia como trabajador temporal (Recepci\xf3n, secretar\xeda y luego gerente de camerinos)"}},"education":{"title":"Educaci\xf3n","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Experto","date":"Septiembre 2018 a Marzo 2020"},"jeanPerrin":{"title":"Matem\xe1ticas-Inform\xe1tica, Jean Perrin, Aix-en-Provence","date":"Septiembre 2016 a Mayo 2017"}},"skills":{"title":"Habilidades","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Distinciones","music":"M\xfasica: 10 a\xf1os de clases de piano, pr\xe1ctica de Guitarra & P\xedfano.","technology":"Tecnolog\xedas y videojuegos: Apasionado de la inform\xe1tica, los videojuegos y la inteligencia artificial. Me gustar\xeda crear mi propio videojuego alg\xfan d\xeda.","media":"Medios: Consumidor regular de contenido de YouTube, tanto educativo como/o entretenido.","veille":"Vigilancia tecnol\xf3gica: Me gusta pasar mi tiempo manteni\xe9ndome informado sobre las noticias de TI y aplicando/participando en el desarrollo de proyectos de c\xf3digo abierto prometedores.","events":"Eventos: Tambi\xe9n me encargo de la cortes\xeda de los eventos y el trabajo del castillo de mi padre."},"languages":{"title":"Idiomas","french":"Franc\xe9s - Nativo","english":"Ingl\xe9s - Nivel B2"},"feedback":{"title":"Comentarios","reviews":"comentarios","submit":"Enviar","name":"Nombre","surname":"Apellido","comment":"Comentario"},"cv":{"title":"CV","download":"Versi\xf3n Imprimible"},"project":{"title":"Proyectos","title2":"Proyectos P\xfablicos","view":"Visitar el sitio"},"project1":{"title":"Proyecto 1: Lumiscool en progreso","description":"Este proyecto es una plataforma ambiciosa para reservar actividades..."},"project2":{"title":"Proyecto 2: Chateau de Vins sur Caramy","description":"El sitio web del castillo de mi padre, que necesito rehacer."},"project3":{"title":"Proyecto 3: L\'\xe9chap\xe9e des plaisirs","description":"Sitio de presentaci\xf3n para habitaciones de hu\xe9spedes."},"project4":{"title":"Proyecto 4: Amazon Scraper","description":"Raspar Amazon para ordenar los resultados por precio, calificaci\xf3n y n\xfamero de rese\xf1as..."},"project5":{"title":"Proyecto 5: Academia Dalhae","description":"El sitio web del club de taekwondo de mi madre..."}}')},de:{translation:JSON.parse('{"profile":{"title":"Profil","description":"Geboren als Sohn eines Konservatoriumsdirektors und einer unternehmerischen Mutter mit einem Taekwondo-Verein, habe ich fr\xfch die Disziplin von Arbeit und Leben gelernt.<br>Durch die Unterst\xfctzung bei der Renovierung und Wartung des Familienschlosses in jungen Jahren entwickelte ich ein starkes Verantwortungsbewusstsein und Teamarbeit.<br>Mit sieben Jahren schenkte mir mein Vater meinen ersten Computer, was meine Neugier f\xfcr Technologie weckte. Mit neun baute ich meinen ersten Tower und markierte damit meinen Einstieg in die Hardware-Welt.<br>Doch mit dem Erwerb meines ersten Arduino-Boards im Alter von zw\xf6lf Jahren entdeckte ich meine Leidenschaft f\xfcr Software und Automatisierung.<br>Ich erlernte solide Programmiergrundlagen durch die Seite \\"Siteduzero\\" (heute OpenClassroom) und begann, JAVA-Mods f\xfcr Minecraft zu erstellen.<br><br>Nach dem Abitur 2016 in Ingenieurwissenschaften mit Schwerpunkt Informatik und Digitale Wissenschaften setzte ich mein Studium der Mathematik und Informatik an der Universit\xe4t Aix-en-Provence fort.<br>Doch da ich schnell in die Berufswelt eintreten wollte, entschied ich mich f\xfcr eine Ausbildung zum JAVA J2E-Experten, die ich durch meine Arbeit im Theater von Aubagne finanzierte.<br>Dort erwarb ich praktische F\xe4higkeiten im B\xfchnenaufbau und im Management der K\xfcnstlergarderoben und sorgte f\xfcr das Wohlbefinden der K\xfcnstler und den reibungslosen Ablauf der Produktionen.<br><br>Mein Einstieg in die Berufswelt wurde durch die Zusammenarbeit mit einem Freund gepr\xe4gt, der seine Marke gr\xfcndete, wo ich ihre Online-Verkaufsseite erstellte und verwaltete, komplexe Setups f\xfcr Streamer aufbaute und die Verbindungen in einer speziellen Villa optimierte.<br>Ermutigt, freiberuflich t\xe4tig zu werden, diversifizierte ich anschlie\xdfend meine Dienstleistungen und realisierte Projekte, die von einfachen Landingpages bis hin zu komplexen Buchungsanwendungen und Automatisierungsl\xf6sungen f\xfcr Unternehmen reichten.<br><br>Trotz meiner technischen F\xe4higkeiten und Erfolge fiel es mir immer schwer, meine Dienstleistungen aufgrund meiner zur\xfcckhaltenden Natur zu verkaufen.<br>Mit Leidenschaft f\xfcr KI und aufstrebende Technologien suche ich nun nach M\xf6glichkeiten, meine Programmierkenntnisse zu nutzen und zu erweitern, w\xe4hrend ich mit Teams zusammenarbeite, die meine Vision und Begeisterung f\xfcr technologische Innovation teilen."},"experience":{"title":"Erfahrung","freelance":{"title":"Freiberuflicher Entwickler","date":"Januar 2022 bis Heute","description":["Entwicklung mehrerer Websites, von Schaufensterseiten bis hin zu E-Commerce-Seiten.","Erstellung von zwei einfachen mobilen Anwendungen f\xfcr das Veranstaltungsbuchungsmanagement.","Implementierung einer Marketingaktion mit Anrufbeantworter und SMS-Link-Versand zur Erstellung tempor\xe4rer Profile.","Entwicklung von zwei App-Konzepten f\xfcr Start-ups, unter Verwendung von React, firebase or SQL und Python."]},"infiniteAgency":{"title":"Infinite Agency, Marseille \u2014 Webtechnischer Leiter","date":"September 2019 bis Dezember 2021","description":"Erstellung und Wartung der Unternehmenswebsite, technische Verwaltung von Projekten im Zusammenhang mit Influencern und Bekleidungsverk\xe4ufen, Montage und Konfiguration professioneller PCs f\xfcr Streamer."},"aubagne":{"title":"Vor meinem 20. Lebensjahr - 2 Jahre im Rathaus von Aubagne","date":"September 2017 bis Juli 2019","description":"Saaldiener - Schwarzer B\xfc\xdfer von Aubagne, dann Comoedia-Theater als Aushilfe (Empfang, Sekretariatsarbeit, dann Garderobenleiter)"}},"education":{"title":"Ausbildung","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Experte","date":"September 2018 bis M\xe4rz 2020"},"jeanPerrin":{"title":"Mathematik-Informatik, Jean Perrin, Aix-en-Provence","date":"September 2016 bis Mai 2017"}},"skills":{"title":"F\xe4higkeiten","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Auszeichnungen","music":"Musik: 10 Jahre Klavierunterricht, Schwegel & Gitarre spielen.","technology":"Technologien und Videospiele: Leidenschaftlich f\xfcr Computer, Videospiele und k\xfcnstliche Intelligenz. Ich m\xf6chte eines Tages mein eigenes Videospiel erstellen.","media":"Medien: Regelm\xe4\xdfiger Konsument von YouTube-Inhalten, sowohl lehrreich als auch unterhaltsam.","veille":"Technologie\xfcberwachung: Ich verbringe gerne meine Zeit damit, mich \xfcber IT-Neuigkeiten zu informieren und vielversprechende Open-Source-Projekte zu entwickeln.","events":"Veranstaltungen: Ich k\xfcmmere mich auch um die H\xf6flichkeit der Veranstaltungen und die Arbeiten am Schloss meines Vaters."},"languages":{"title":"Sprachen","french":"Franz\xf6sisch - Muttersprache","english":"Englisch - B2-Niveau"},"feedback":{"title":"Bewertungen","reviews":"Bewertungen","submit":"Absenden","name":"Name","surname":"Nachname","comment":"Kommentar"},"cv":{"title":"Lebenslauf","download":"Druckbare Version"},"project":{"title":"Projekte","title2":"\xd6ffentliche Projekte","view":"Zur Webseite"},"project1":{"title":"Projekt 1: Lumiscool in Arbeit","description":"Dieses Projekt ist eine ehrgeizige Plattform zur Buchung von Aktivit\xe4ten..."},"project2":{"title":"Projekt 2: Chateau de Vins sur Caramy","description":"Die Website f\xfcr das Schloss meines Vaters, die ich neu gestalten muss."},"project3":{"title":"Projekt 3: L\'\xe9chap\xe9e des plaisirs","description":"Schaufensterseite f\xfcr G\xe4stezimmer."},"project4":{"title":"Projekt 4: Amazon Scraper","description":"Amazon durchsuchen, um Ergebnisse nach Preis, Bewertung und Anzahl der Bewertungen zu sortieren..."},"project5":{"title":"Projekt 5: Dalhae Akademie","description":"Die Website f\xfcr den Taekwondo-Club meiner Mutter..."}}')}};qe.default.use(l.initReactI18next).init({resources:Fe,lng:"fr",fallbackLng:"fr",interpolation:{escapeValue:!1}});qe.default;const De=r.default.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`,Be=r.default.div`
  margin-left: ${e=>e.showSidebar?"250px":"0"};
  padding: 20px;
  width: auto;
  overflow-y: auto;
  background: #efefef;
  transition: margin-left 0.3s, width 0.3s;
`,Oe=r.default.div`
  padding: 20px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  border: 1px solid #bdc3c7;
`,Ne=r.default.div`
  margin-bottom: 20px;
  background: #ffffff;
  max-width: 100%;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  overflow: hidden;
`,Ue=()=>{const[e,i]=(0,n.useState)("cv"),[t,r]=(0,n.useState)(!0),o=(0,n.useRef)(null),s=(0,n.useRef)(null),l=(0,n.useRef)(null),c=(0,n.useRef)(null),d=(0,n.useRef)(null),u=(0,n.useRef)(null),p=()=>{window.innerWidth<=768?r(!1):r(!0)};(0,n.useEffect)((()=>(window.addEventListener("resize",p),p(),()=>window.removeEventListener("resize",p))),[]);const m=e=>{console.log("scrollToSection called with:",e),e&&e.current?(console.log("Scrolling to:",e.current),e.current.scrollIntoView({behavior:"smooth"})):console.log("Invalid sectionRef:",e)};return(0,h.jsxs)(De,{children:[(0,h.jsx)(a,{})," ",t?(0,h.jsx)(A,{activePage:e,setActivePage:i,scrollToSection:m,profileRef:o,experienceRef:s,skillsRef:l,educationRef:c,distinctionsRef:d,languagesRef:u}):(0,h.jsx)(z,{activePage:e,setActivePage:i,scrollToSection:m,profileRef:o,experienceRef:s,skillsRef:l,educationRef:c,distinctionsRef:d,languagesRef:u}),(0,h.jsxs)(Be,{showSidebar:t,children:["cv"===e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(Ne,{ref:o,id:"profile-section",children:(0,h.jsx)(G,{})}),(0,h.jsx)(Oe,{ref:s,id:"experience-section",children:(0,h.jsx)(W,{})}),(0,h.jsx)(Oe,{ref:l,id:"skills-section",children:(0,h.jsx)(te,{})}),(0,h.jsx)(Oe,{ref:c,id:"education-section",children:(0,h.jsx)(ae,{})}),(0,h.jsx)(Oe,{ref:d,id:"distinctions-section",children:(0,h.jsx)(Ae,{})}),(0,h.jsx)(Oe,{ref:u,id:"languages-section",children:(0,h.jsx)(Se,{})})]}),"avis"===e&&(0,h.jsx)(je,{}),"project"===e&&(0,h.jsx)(Ve,{}),(0,h.jsx)(se,{})]})]})}}},i={};function t(n){var r=i[n];if(void 0!==r)return r.exports;var a=i[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(i,n,r,a)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,r,a]=e[d],s=!0,l=0;l<n.length;l++)(!1&a||o>=a)&&Object.keys(t.O).every((e=>t.O[e](n[l])))?n.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(d--,1);var c=r();void 0!==c&&(i=c)}}return i}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,r,a]}})(),t.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},t.d=(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},t.o=(e,i)=>Object.prototype.hasOwnProperty.call(e,i),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.p="/CV/",(()=>{var e={792:0};t.O.j=i=>0===e[i];var i=(i,n)=>{var r,a,[o,s,l]=n,c=0;if(o.some((i=>0!==e[i]))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(l)var d=l(t)}for(i&&i(n);c<o.length;c++)a=o[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(d)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))})(),t.nc=void 0;var n=t.O(void 0,[433],(()=>t(4352)));n=t.O(n)})();
//# sourceMappingURL=main.18fef2c7.js.map