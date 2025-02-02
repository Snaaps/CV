(()=>{"use strict";var e={1546:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ln});var i=n(6665),o=n(6627);const r=o.createGlobalStyle`
  body {
    font-family: 'MaPolicePersonnalisee', 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'MaPolicePersonnalisee', 'Roboto', sans-serif;
  }
`;var a=n(4493),s=n(3652),l=n(6835),d=n(8262),c=n(9595),u=n(157);const p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAeElEQVR42mMYBaPAWWe2uJv+vMtA/B8fbpo4lyS8lIsLL17GxXV5GTe3OAPMcvo6AOEIBpgFaU6f8OKvP36ThJ/KyuLDcEeMOmDUAaMOGHXAqANGHTDqgFEHjDpgwB1A30YpJj4Hbpa76s+7OgAOOAdqlo92jEYBABPTRkb6FjqAAAAAAElFTkSuQmCC",f=n.p+"static/media/unk.81b367bcf4e83250d2b0.png",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACDElEQVR42u2Xb0gTYRzHD+xdr5IgSOpFvYhAKIisTV0vSiTWoCBaXBlUBO3F6M+r/hErGGhLlFpUJDixepHSdLUJ0UWjpBzqUBeYBNELa7NB2ua1hfPT7mge9SIIbtube+DDPc/dA98Pv/vBPScYwxieCsHWWiHE81Bi4kq2UJ5wTUIoLNi0saQUcg2B8gtEXAIj7mUQM/3B4riJ6ZcNZEbr1PWkfzuXj+7C42xY2vNJauSLtFWZ/zf53Dz/EJh7W89z30Hutx5H8tm5sH8DboeVzpYTvOiy86jNrs77bjeRilj0FtD4ED7LwLkmElWVxOo2I6fnGJKCdHlO0t3sIDtq1rsCGrlxE1l5lqjjCLMrlvO1aiUAGTlN6ME1AHJTh/UV0MLN+Nut/JhPMfLMj3zrBvG2FpJrV/Gmej29d68AMPj4PAtjtfoLTIV2q+9YTn/n4+QwAPIdr1qJmdWVDDy8DkB/51Xeh6z6C0z02zhUs45sZp7o4BPCgXs87XDhq15D36l9SwLNTpFob6P+Ap8lM2f2bkMVeB1QqqHS4T6mXoO/eyDY7SIZrilOE471WEh9S+TDvHgvidy8KKrhzj1b8JwWyS38JDl0oChNqPHOQjZay8yrnfS0i8QCNuThehYnzMozZU+RBTRIRXb8fU9XgZKhCRhfQ0NAoNyH0unCsTxRjnAl2/gxMsYvfR1cc+DhAhUAAAAASUVORK5CYII=",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAdUlEQVR42u2XsQ2AMAwEDQwBBdRZEwqWQqJHFAgpYgIGMR9QxAZ2in/pCld3rYXjsBZEoMbE1+0k/yPyEUIwJXsZwAD/gKUSXZta76E3BV7AAAYwoISAfRRN6NmZ8nkZwIBCAiJQFyY5ZJulxXF5yJObXxH3AA5uBkPGSy9SAAAAAElFTkSuQmCC";var g=n(397);const x=o.default.div`
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
`,b=o.default.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,y=o.default.div`
  flex-grow: 1;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,j=o.default.div`
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
`,v=(0,o.default)(s.animated.div)`
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
`,w=o.default.div`
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
`,S=[{icon:a.FaUser,label:"profile.title",ref:"profileRef"},{icon:a.FaBriefcase,label:"experience.title",ref:"experienceRef"},{icon:a.FaTools,label:"skills.title",ref:"skillsRef"},{icon:a.FaGraduationCap,label:"education.title",ref:"educationRef"},{icon:a.FaMedal,label:"distinctions.title",ref:"distinctionsRef"},{icon:a.FaLanguage,label:"languages.title",ref:"languagesRef"}],k=({activePage:e,setActivePage:t,scrollToSection:n,profileRef:i,experienceRef:o,skillsRef:r,educationRef:k,distinctionsRef:A,languagesRef:P})=>{const{t:C,i18n:T}=(0,l.useTranslation)(),z={profileRef:i,experienceRef:o,skillsRef:r,educationRef:k,distinctionsRef:A,languagesRef:P},R=(0,s.useTrail)(S.length,{opacity:"cv"===e?1:0,transform:"cv"===e?"translateY(0)":"translateY(-70px)",from:{opacity:0,transform:"translateY(-70px)"},config:{mass:1,tension:280,friction:60},delay:"cv"===e?100:0}),E=e=>{T.changeLanguage(e)};return(0,g.jsxs)(x,{children:[(0,g.jsx)(b,{children:(0,g.jsx)("svg",{width:"200",height:"100",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsxs)("g",{children:[(0,g.jsx)("text",{x:"0",y:"40",fontFamily:"Arial",fontSize:"24",fill:"#2c3e50",children:"Luc-Arnaud"}),(0,g.jsx)("text",{x:"0",y:"70",fontFamily:"Arial",fontSize:"24",fill:"#6f2cf7",children:"Bonnet"})]})})}),(0,g.jsx)(y,{children:(0,g.jsxs)(c.default,{style:{width:"100%",flexGrow:1,alignSelf:"center"},children:[(0,g.jsxs)(j,{active:"cv"===e,onClick:()=>t("cv"),children:[(0,g.jsx)(a.FaFileAlt,{size:25})," ",(0,g.jsx)("span",{children:C("cv.title")})]}),"cv"===e&&R.map(((e,t)=>{const{icon:i,label:o,ref:r}=S[t];return(0,g.jsxs)(v,{style:e,onClick:()=>{z[r]&&z[r].current&&n(z[r])},children:[(0,g.jsx)(i,{size:25})," ",(0,g.jsx)("span",{children:C(o)})]},o)})),(0,g.jsxs)(j,{active:"Powens"===e,onClick:()=>t("Powens"),children:[(0,g.jsx)(a.FaMusic,{size:25})," ",(0,g.jsx)("span",{children:C("Powens.title")})]}),(0,g.jsxs)(j,{active:"Perso"===e,onClick:()=>t("Perso"),children:[(0,g.jsx)(a.FaMusic,{size:25})," ",(0,g.jsx)("span",{children:C("Perso.title")})]})]})}),(0,g.jsxs)(w,{children:[(0,g.jsx)(u.default,{style:{marginLeft:5},onPress:()=>E("fr"),children:(0,g.jsx)(d.Image,{style:{height:20,aspectRatio:16/9},source:p,contentFit:"contain"})}),(0,g.jsx)(u.default,{style:{marginLeft:5},onPress:()=>E("en"),children:(0,g.jsx)(d.Image,{style:{height:20,aspectRatio:16/9},source:f,contentFit:"contain"})}),(0,g.jsx)(u.default,{style:{marginLeft:5},onPress:()=>E("es"),children:(0,g.jsx)(d.Image,{style:{height:20,aspectRatio:16/9},source:h,contentFit:"contain"})}),(0,g.jsx)(u.default,{style:{marginLeft:5},onPress:()=>E("de"),children:(0,g.jsx)(d.Image,{style:{height:20,aspectRatio:16/9},source:m,contentFit:"contain"})})]})]})},A=o.default.div`
  width: 100%;
  background-color: #f8f9fa;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`,P=(0,o.default)(a.FaBars)`
  cursor: pointer;
  margin-right:40px;
`,C=o.default.div`
  display: ${e=>e.show?"block":"none"};
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
`,T=o.default.div`
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
`,z=((0,o.default)(d.Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
`,o.default.div`
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
`),R=({activePage:e,setActivePage:t,scrollToSection:n,profileRef:o,experienceRef:r,skillsRef:s,educationRef:c,distinctionsRef:x,languagesRef:b})=>{const{t:y,i18n:j}=(0,l.useTranslation)(),[v,w]=(0,i.useState)(!1),S=e=>{j.changeLanguage(e),w(!1)};return(0,g.jsxs)(A,{children:[(0,g.jsx)("div",{children:"Luc-Arnaud Bonnet"}),(0,g.jsx)(P,{size:25,onClick:()=>w(!v)}),(0,g.jsxs)(C,{show:v,children:[(0,g.jsxs)(T,{active:"cv"===e,onClick:()=>t("cv"),children:[(0,g.jsx)(a.FaFileAlt,{size:20})," ",(0,g.jsx)("span",{children:y("cv.title")})]}),(0,g.jsxs)(T,{active:"projet"===e,onClick:()=>{t("projet"),w(!1)},children:[(0,g.jsx)(a.FaComments,{size:20})," ",(0,g.jsx)("span",{children:y("project.title")})]}),(0,g.jsxs)(T,{active:"fifre"===e,onClick:()=>{t("fifre"),w(!1)},children:[(0,g.jsx)(a.FaMusic,{size:20})," ",(0,g.jsx)("span",{children:"Partitions Fifre"})]}),(0,g.jsxs)(T,{active:"Perso"===e,onClick:()=>{t("Perso"),w(!1)},children:[(0,g.jsx)(a.FaMusic,{size:20})," ",(0,g.jsx)("span",{children:"Perso"})]}),(0,g.jsxs)(z,{children:[(0,g.jsx)(u.default,{style:{marginLeft:5},onPress:()=>S("fr"),children:(0,g.jsx)(d.Image,{style:{height:20,aspectRatio:16/9},source:p,contentFit:"contain"})}),(0,g.jsx)(u.default,{style:{marginLeft:5},onPress:()=>S("en"),children:(0,g.jsx)(d.Image,{style:{height:20,aspectRatio:16/9},source:f,contentFit:"contain"})}),(0,g.jsx)(u.default,{style:{marginLeft:5},onPress:()=>S("es"),children:(0,g.jsx)(d.Image,{style:{height:20,aspectRatio:16/9},source:h,contentFit:"contain"})}),(0,g.jsx)(u.default,{style:{marginLeft:5},onPress:()=>S("de"),children:(0,g.jsx)(d.Image,{style:{height:20,aspectRatio:16/9},source:m,contentFit:"contain"})})]})]})]})};var E=n(4504),M=n(7019);const L=n.p+"static/media/pp.4af3ec75ba96e0f6e90c.jpg",I=n.p+"static/media/bg.686f64df7c3b3fde89de.jpg";const O=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`,B=(0,o.default)(d.Image)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,N=(0,o.default)(d.Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
`,$=o.default.div`
  padding: 20px;
`,V=o.default.h2`
  color: #6f2cf7;
`,J=o.default.div`
  display: flex;
  justify-content: center;
  position: absolute;
  flex-direction : column;
  right: 20px;
  bottom:45px;
`,D=o.default.div`
  display: flex;
  align-items:center;
  justify-content: center;
  position: absolute;
  flex-direction : row;
  right: 20px;
  top:45px;
`,U=o.default.a`
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
`,F=o.default.a`
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
`,W=o.default.span`
  font-size: 16px;
  margin-right: 10px;
  color: white;
`,q=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(O,{children:[(0,g.jsxs)(E.default,{style:{width:"100%",height:"45vh",backgroundColor:"black",justifyContent:"center",alignItems:"center",overflow:"hidden"},children:[(0,g.jsx)(B,{style:{width:"fit-content",maxWidth:"100%",height:"100%",borderRadius:"8px 8px 0 0",aspectRatio:2},source:I,transition:1e3}),(0,g.jsx)(N,{style:{width:150,height:150,borderRadius:"50%",position:"absolute",bottom:50,left:30,border:"2px solid #6f2cf7"},source:L,contentFit:"cover",transition:1e3}),(0,g.jsxs)(D,{children:[(0,g.jsx)(W,{children:e("cv.download")}),(0,g.jsx)(F,{href:"/path-to-your-cv/CV.pdf",target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)(M.default,{name:"download"})})]}),(0,g.jsxs)(J,{children:[(0,g.jsx)(U,{href:"https://www.instagram.com/p/C5kxV0tqLaf/?next=%2F",target:"_blank",children:(0,g.jsx)(M.default,{name:"instagram"})}),(0,g.jsx)(U,{href:"https://m.facebook.com/luc.bonnet1/",target:"_blank",children:(0,g.jsx)(M.default,{name:"facebook"})}),(0,g.jsx)(U,{href:"https://www.linkedin.com/in/luc-arnaud-bonnet-47b5921b8/",target:"_blank",children:(0,g.jsx)(M.default,{name:"linkedin"})}),(0,g.jsx)(U,{href:"mailto:luc.bonnet.13@gmail.com",children:(0,g.jsx)(M.default,{name:"envelope"})})]})]}),(0,g.jsxs)($,{children:[(0,g.jsx)(V,{children:e("profile.title")}),(0,g.jsx)("p",{dangerouslySetInnerHTML:{__html:e("profile.description")}})]})]})},_=o.default.div`
`,H=o.default.h2`
  color: #6f2cf7 ;
`,G=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(_,{children:[(0,g.jsx)(H,{children:e("experience.title")}),(0,g.jsxs)("ul",{children:[(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:e("experience.freelance.title")}),(0,g.jsx)("p",{children:e("experience.freelance.date")}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:e("experience.freelance.description.0")}),(0,g.jsx)("li",{children:e("experience.freelance.description.1")}),(0,g.jsx)("li",{children:e("experience.freelance.description.2")}),(0,g.jsx)("li",{children:e("experience.freelance.description.3")})]})]}),(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:e("experience.aubagne.title")}),(0,g.jsx)("p",{children:e("experience.aubagne.date")}),(0,g.jsx)("p",{children:e("experience.aubagne.description")})]})]})]})};var Y=n(9999),Q=n(5482),K=n(3761),Z=n(4075),X=n.n(Z),ee=n(1080),te=n(3349);const ne={container:{backgroundColor:"transparent",position:"relative",flex:1},wrapperIOS:{backgroundColor:"transparent"},wrapperAndroid:{backgroundColor:"transparent",flex:1},slide:{backgroundColor:"transparent"},pagination_x:{position:"absolute",bottom:25,left:0,right:0,flexDirection:"row",flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"},pagination_y:{position:"absolute",right:15,top:0,bottom:0,flexDirection:"column",flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"},title:{height:30,justifyContent:"center",position:"absolute",paddingLeft:10,bottom:-30,left:0,flexWrap:"nowrap",width:250,backgroundColor:"transparent"},buttonWrapper:{backgroundColor:"transparent",flexDirection:"row",position:"absolute",top:0,left:0,flex:1,paddingHorizontal:10,paddingVertical:10,justifyContent:"space-between",alignItems:"center"},buttonText:{fontSize:50,color:"#007aff"}};class ie extends i.Component{static propTypes={horizontal:X().bool,children:X().node.isRequired,containerStyle:X().oneOfType([X().object,X().number]),style:X().oneOfType([X().object,X().number,X().array]),scrollViewStyle:X().oneOfType([X().object,X().number]),pagingEnabled:X().bool,showsHorizontalScrollIndicator:X().bool,showsVerticalScrollIndicator:X().bool,bounces:X().bool,scrollsToTop:X().bool,removeClippedSubviews:X().bool,automaticallyAdjustContentInsets:X().bool,showsPagination:X().bool,showsButtons:X().bool,disableNextButton:X().bool,disablePrevButton:X().bool,loadMinimal:X().bool,loadMinimalSize:X().number,loadMinimalLoader:X().element,loop:X().bool,autoplay:X().bool,autoplayTimeout:X().number,autoplayDirection:X().bool,index:X().number,renderPagination:X().func,dotStyle:X().oneOfType([X().object,X().number,X().array]),activeDotStyle:X().oneOfType([X().object,X().number,X().array]),dotColor:X().string,activeDotColor:X().string,onIndexChanged:X().func};static defaultProps={horizontal:!0,pagingEnabled:!0,showsHorizontalScrollIndicator:!1,showsVerticalScrollIndicator:!1,bounces:!1,scrollsToTop:!1,removeClippedSubviews:!0,automaticallyAdjustContentInsets:!1,showsPagination:!0,showsButtons:!1,disableNextButton:!1,disablePrevButton:!1,loop:!0,loadMinimal:!1,loadMinimalSize:1,autoplay:!1,autoplayTimeout:2.5,autoplayDirection:!0,index:0,onIndexChanged:()=>null};state=this.initState(this.props);initialRender=!0;autoplayTimer=null;loopJumpTimer=null;UNSAFE_componentWillReceiveProps(e){!e.autoplay&&this.autoplayTimer&&clearTimeout(this.autoplayTimer),e.index!==this.props.index&&this.setState(this.initState(e,this.props.index!==e.index))}componentDidMount(){this.autoplay()}componentWillUnmount(){this.autoplayTimer&&clearTimeout(this.autoplayTimer),this.loopJumpTimer&&clearTimeout(this.loopJumpTimer)}UNSAFE_componentWillUpdate(e,t){this.state.index!==t.index&&this.props.onIndexChanged(t.index)}componentDidUpdate(e){this.props.autoplay&&!e.autoplay&&this.autoplay(),this.props.children!==e.children&&(this.props.loadMinimal,this.setState(this.initState(Object.assign({},this.props,{index:this.state.index}),!0)))}initState(e,t=!1){const n=this.state||{width:0,height:0,offset:{x:0,y:0}},i={autoplayEnd:!1,children:null,loopJump:!1,offset:{}};i.children=Array.isArray(e.children)?e.children.filter((e=>e)):e.children,i.total=i.children?i.children.length||1:0,n.total!==i.total||t?i.index=i.total>1?Math.min(e.index,i.total-1):0:i.index=n.index;const{width:o,height:r}=ee.default.get("window");return i.dir=!1===e.horizontal?"y":"x",i.width=e.width||this.state&&this.state.width||o,i.height=e.height||this.state&&this.state.height||r,i.offset[i.dir]="y"===i.dir?r*e.index:o*e.index,this.internals=Object.assign({},this.internals,{isScrolling:!1}),i}fullState(){return Object.assign({},this.state,this.internals)}onLayout=e=>{const{width:t,height:n}=e.nativeEvent.layout,i=this.internals.offset={},o={width:t,height:n};if(this.state.total>1){let e=this.state.index;this.props.loop&&e++,i[this.state.dir]="y"===this.state.dir?n*e:t*e}this.state.offset||(o.offset=i),this.initialRender&&this.state.total>1&&(this.scrollView.scrollTo(Object.assign({},i,{animated:!1})),this.initialRender=!1),this.setState(o)};loopJump=()=>{if(!this.state.loopJump)return;const e=this.state.index+(this.props.loop?1:0),t=this.scrollView;this.loopJumpTimer=setTimeout((()=>{t.setPageWithoutAnimation?t.setPageWithoutAnimation(e):0===this.state.index?t.scrollTo(!1===this.props.horizontal?{x:0,y:this.state.height,animated:!1}:{x:this.state.width,y:0,animated:!1}):this.state.index===this.state.total-1&&(!1===this.props.horizontal?this.scrollView.scrollTo({x:0,y:this.state.height*this.state.total,animated:!1}):this.scrollView.scrollTo({x:this.state.width*this.state.total,y:0,animated:!1}))}),t.setPageWithoutAnimation?50:300)};autoplay=()=>{Array.isArray(this.state.children)&&this.props.autoplay&&!this.internals.isScrolling&&!this.state.autoplayEnd&&(this.autoplayTimer&&clearTimeout(this.autoplayTimer),this.autoplayTimer=setTimeout((()=>{if(!this.props.loop&&(this.props.autoplayDirection?this.state.index===this.state.total-1:0===this.state.index))return this.setState({autoplayEnd:!0});this.scrollBy(this.props.autoplayDirection?1:-1)}),1e3*this.props.autoplayTimeout))};onScrollBegin=e=>{this.internals.isScrolling=!0,this.props.onScrollBeginDrag&&this.props.onScrollBeginDrag(e,this.fullState(),this)};onScrollEnd=e=>{this.internals.isScrolling=!1,e.nativeEvent.contentOffset||("x"===this.state.dir?e.nativeEvent.contentOffset={x:e.nativeEvent.position*this.state.width}:e.nativeEvent.contentOffset={y:e.nativeEvent.position*this.state.height}),this.updateIndex(e.nativeEvent.contentOffset,this.state.dir,(()=>{this.autoplay(),this.loopJump()})),this.props.onMomentumScrollEnd&&this.props.onMomentumScrollEnd(e,this.fullState(),this)};onScrollEndDrag=e=>{const{contentOffset:t}=e.nativeEvent,{horizontal:n}=this.props,{children:i,index:o}=this.state,{offset:r}=this.internals;(n?r.x:r.y)!==(n?t.x:t.y)||0!==o&&o!==i.length-1||(this.internals.isScrolling=!1)};updateIndex=(e,t,n)=>{const i=this.state;let o=i.index;this.internals.offset||(this.internals.offset={});const r=e[t]-this.internals.offset[t],a="x"===t?i.width:i.height;let s=!1;if(!r)return;o=parseInt(o+Math.round(r/a)),this.props.loop&&(o<=-1?(o=i.total-1,e[t]=a*i.total,s=!0):o>=i.total&&(o=0,e[t]=a,s=!0));const l={index:o,loopJump:s};this.internals.offset=e,s?e[t]===this.internals.offset[t]?(l.offset={x:0,y:0},l.offset[t]=e[t]+1,this.setState(l,(()=>{this.setState({offset:e},n)}))):(l.offset=e,this.setState(l,n)):this.setState(l,n)};scrollBy=(e,t=!0)=>{if(this.internals.isScrolling||this.state.total<2)return;const n=this.state,i=(this.props.loop?1:0)+e+this.state.index;let o=0,r=0;"x"===n.dir&&(o=i*n.width),"y"===n.dir&&(r=i*n.height),this.scrollView&&this.scrollView.scrollTo({x:o,y:r,animated:t}),this.internals.isScrolling=!0,this.setState({autoplayEnd:!1}),setImmediate((()=>{this.onScrollEnd({nativeEvent:{position:i}})}))};scrollTo=(e,t=!0)=>{if(this.internals.isScrolling||this.state.total<2||e===this.state.index)return;const n=this.state,i=this.state.index+(e-this.state.index);let o=0,r=0;"x"===n.dir&&(o=i*n.width),"y"===n.dir&&(r=i*n.height),this.scrollView&&this.scrollView.scrollTo({x:o,y:r,animated:t}),this.internals.isScrolling=!0,this.setState({autoplayEnd:!1}),setImmediate((()=>{this.onScrollEnd({nativeEvent:{position:i}})}))};scrollViewPropOverrides=()=>{const e=this.props;let t={};for(let n in e)if("function"===typeof e[n]&&"onMomentumScrollEnd"!==n&&"renderPagination"!==n&&"onScrollBeginDrag"!==n){let i=e[n];t[n]=e=>i(e,this.fullState(),this)}return t};renderPagination=()=>{if(this.state.total<=1)return null;let e=[];const t=this.props.activeDot||(0,g.jsx)(E.default,{style:[{backgroundColor:this.props.activeDotColor||"#007aff",width:8,height:8,borderRadius:4,marginLeft:3,marginRight:3,marginTop:3,marginBottom:3},this.props.activeDotStyle]}),n=this.props.dot||(0,g.jsx)(E.default,{style:[{backgroundColor:this.props.dotColor||"rgba(0,0,0,.2)",width:8,height:8,borderRadius:4,marginLeft:3,marginRight:3,marginTop:3,marginBottom:3},this.props.dotStyle]});for(let o=0;o<this.state.total;o++)e.push(o===this.state.index?i.cloneElement(t,{key:o}):i.cloneElement(n,{key:o}));return(0,g.jsx)(E.default,{pointerEvents:"none",style:[ne["pagination_"+this.state.dir],this.props.paginationStyle],children:e})};renderTitle=()=>{const e=this.state.children[this.state.index];return e&&e.props&&e.props.title?(0,g.jsx)(E.default,{style:ne.title,children:this.state.children[this.state.index].props.title}):null};renderNextButton=()=>{let e=null;return(this.props.loop||this.state.index!==this.state.total-1)&&(e=this.props.nextButton||(0,g.jsx)(Q.default,{style:ne.buttonText,children:"\u203a"})),(0,g.jsx)(u.default,{onPress:()=>null!==e&&this.scrollBy(1),disabled:this.props.disableNextButton,children:(0,g.jsx)(E.default,{children:e})})};renderPrevButton=()=>{let e=null;return(this.props.loop||0!==this.state.index)&&(e=this.props.prevButton||(0,g.jsx)(Q.default,{style:ne.buttonText,children:"\u2039"})),(0,g.jsx)(u.default,{onPress:()=>null!==e&&this.scrollBy(-1),disabled:this.props.disablePrevButton,children:(0,g.jsx)(E.default,{children:e})})};renderButtons=()=>(0,g.jsxs)(E.default,{pointerEvents:"box-none",style:[ne.buttonWrapper,{width:this.state.width,height:this.state.height},this.props.buttonWrapperStyle],children:[this.renderPrevButton(),this.renderNextButton()]});refScrollView=e=>{this.scrollView=e};onPageScrollStateChanged=e=>{switch(e){case"dragging":return this.onScrollBegin();case"idle":case"settling":this.props.onTouchEnd&&this.props.onTouchEnd()}};renderScrollView=e=>(0,g.jsx)(c.default,Object.assign({ref:this.refScrollView},this.props,this.scrollViewPropOverrides(),{contentContainerStyle:[ne.wrapperIOS,this.props.style],contentOffset:this.state.offset,onScrollBeginDrag:this.onScrollBegin,onMomentumScrollEnd:this.onScrollEnd,onScrollEndDrag:this.onScrollEndDrag,style:this.props.scrollViewStyle,children:e}));render(){const{index:e,total:t,width:n,height:i,children:o}=this.state,{containerStyle:r,loop:a,loadMinimal:s,loadMinimalSize:l,loadMinimalLoader:d,renderPagination:c,showsButtons:u,showsPagination:p}=this.props,f=a?1:0;let h=[];const m=[{width:n,height:i},ne.slide],x={width:n,height:i,flex:1,justifyContent:"center",alignItems:"center"};return t>1?(h=Object.keys(o),a&&(h.unshift(t-1+""),h.push("0")),h=h.map(((n,i)=>s?i>=e+f-l&&i<=e+f+l||a&&1===i||a&&i===t-1?(0,g.jsx)(E.default,{style:m,children:o[n]},i):(0,g.jsx)(E.default,{style:x,children:d||(0,g.jsx)(te.default,{})},i):(0,g.jsx)(E.default,{style:m,children:o[n]},i)))):h=(0,g.jsx)(E.default,{style:m,children:o},0),(0,g.jsxs)(E.default,{style:[ne.container,r],onLayout:this.onLayout,children:[this.renderScrollView(h),p&&(c?c(e,t,this):this.renderPagination()),this.renderTitle(),u&&this.renderButtons()]})}}var oe=n(7220);var re=n(7414);function ae({powensToken:e,setPowensToken:t}){const[n,o]=(0,i.useState)(!1);return e?(0,g.jsxs)(E.default,{style:se.section,children:[(0,g.jsx)(Q.default,{style:se.sectionTitle,children:"\xc9tape 1 : Authentification d\xe9j\xe0 effectu\xe9e"}),(0,g.jsxs)(Q.default,{style:se.info,children:["Powens Token: ",e.slice(0,15),"..."]})]}):(0,g.jsxs)(E.default,{style:se.section,children:[(0,g.jsx)(Q.default,{style:se.sectionTitle,children:"\xc9tape 1 : Auth Google + User Powens"}),(0,g.jsx)(Q.default,{style:se.paragraph,children:"Un seul bouton pour lancer Google OAuth puis cr\xe9er un user Powens."}),(0,g.jsx)(u.default,{style:[se.button,n&&{opacity:.6}],onPress:async()=>{o(!0);try{await re.openBrowserAsync("https://mon-serveur-node-143630968799.europe-west1.run.app/auth/google");const e=await fetch("https://infinite-sandbox.biapi.pro/2.0/auth/init",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({client_id:"82059527",client_secret:"4K/jbgW/Y77ml/fdnK98MNWU4wGdl_lz"})});if(!e.ok)throw new Error(`Erreur cr\xe9ation user Powens: code HTTP ${e.status}`);const n=await e.json();t(n.auth_token),console.log("Powens token =>",n.auth_token)}catch(e){console.error("Erreur handleAuthAndUserCreation:",e)}finally{o(!1)}},disabled:n,children:(0,g.jsx)(Q.default,{style:se.buttonText,children:n?"En cours...":"Se connecter Google + Cr\xe9er user Powens"})})]})}const se=Y.default.create({section:{backgroundColor:"#fff",marginVertical:10,padding:15,borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,elevation:2},sectionTitle:{fontSize:16,fontWeight:"600",marginBottom:6},paragraph:{fontSize:14,marginBottom:10,color:"#333"},button:{backgroundColor:"#2e86de",borderRadius:5,padding:10,marginVertical:5,alignItems:"center"},buttonText:{color:"#fff"},info:{marginTop:8,fontStyle:"italic",color:"#555"}});function le({powensToken:e}){return e?(0,g.jsxs)(E.default,{style:de.section,children:[(0,g.jsx)(Q.default,{style:de.sectionTitle,children:"3. Connexions bancaires"}),(0,g.jsx)(Q.default,{style:de.paragraph,children:"Ajoutez une connexion (\u201cconnect\u201d) puis activez un compte (\u201cmanage\u201d) pour r\xe9cup\xe9rer des transactions."}),(0,g.jsx)(u.default,{style:de.button,onPress:async()=>{if(e)try{const t=await fetch("https://infinite-sandbox.biapi.pro/2.0/auth/token/code?type=singleAccess",{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw new Error("Erreur r\xe9cup\xe9ration code webview");const{code:n}=await t.json(),i=`https://webview.powens.com/fr/connect?domain=infinite-sandbox.biapi.pro&client_id=82059527&code=${encodeURIComponent(n)}&redirect_uri=${encodeURIComponent("https://mon-serveur-node-143630968799.europe-west1.run.app/powens/callback")}`;await re.openBrowserAsync(i)}catch(t){console.error("Erreur openPowensConnectWebview:",t)}else console.warn("Pas de token => impossible d'ouvrir la webview connect")},children:(0,g.jsx)(Q.default,{style:de.buttonText,children:"Ajouter une connexion (Webview Connect)"})}),(0,g.jsx)(u.default,{style:de.button,onPress:async()=>{if(e)try{const t=await fetch("https://infinite-sandbox.biapi.pro/2.0/auth/token/code?type=singleAccess",{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw new Error("Erreur r\xe9cup\xe9ration code manage");const{code:n}=await t.json(),i=`https://webview.powens.com/fr/manage?domain=infinite-sandbox.biapi.pro&client_id=82059527&code=${encodeURIComponent(n)}&redirect_uri=${encodeURIComponent("https://mon-serveur-node-143630968799.europe-west1.run.app/powens/callback")}`;await re.openBrowserAsync(i)}catch(t){console.error("Erreur openPowensManageWebview:",t)}},children:(0,g.jsx)(Q.default,{style:de.buttonText,children:"G\xe9rer les comptes (Webview Manage)"})})]}):null}const de=Y.default.create({section:{backgroundColor:"#fff",marginVertical:10,padding:15,borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,elevation:2},sectionTitle:{fontSize:16,fontWeight:"600",marginBottom:6},paragraph:{fontSize:14,marginBottom:10,color:"#333"},button:{backgroundColor:"#2e86de",borderRadius:5,padding:10,marginVertical:5,alignItems:"center"},buttonText:{color:"#fff"}});function ce({userId:e,setUserId:t,linesJson:n,priceStr:i}){return(0,g.jsxs)(E.default,{style:ue.section,children:[(0,g.jsx)(Q.default,{style:ue.sectionTitle,children:"5. Lancer le script Python"}),(0,g.jsx)(u.default,{style:ue.button,onPress:async()=>{console.log("Will POST to /start_python_process with:",JSON.stringify({userId:e,lines_json_str:n,priceStr:i}));try{const t=await fetch("https://mon-serveur-node-143630968799.europe-west1.run.app/start_python_process",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e,lines_json_str:n,priceStr:i})}),o=await t.json();console.log("start_python_process =>",o)}catch(t){console.error("Erreur handleStartPython:",t)}},children:(0,g.jsx)(Q.default,{style:ue.buttonText,children:"Ex\xe9cuter le script Python"})})]})}const ue=Y.default.create({section:{backgroundColor:"#fff",marginVertical:10,padding:15,borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,elevation:2},sectionTitle:{fontSize:16,fontWeight:"600",marginBottom:6},paragraph:{fontSize:14,marginBottom:10,color:"#333"},label:{fontWeight:"bold",marginTop:8,marginBottom:4},input:{borderWidth:1,borderColor:"#bbb",padding:8,borderRadius:4,backgroundColor:"#fff"},button:{backgroundColor:"#2e86de",borderRadius:5,padding:10,marginVertical:5,alignItems:"center"},buttonText:{color:"#fff"}});var pe=n(1174);function fe({powensToken:e,transactions:t,setTransactions:n,selectedTransactionId:i,setSelectedTransactionId:o,linesJson:r,setLinesJson:a,priceStr:s,setPriceStr:l,showDropdown:d,setShowDropdown:c}){const p=()=>{if(!i)return;const e=t.find((e=>e.id===i));if(!e)return;const n=e.date;let o=n;if(n.includes("-")){const[e,t,i]=n.split("-");o=`${i}/${t}/${e}`}e.description,String(e.amount);a(JSON.stringify(e)),l(JSON.stringify(e.amount)),console.log("lineJson : "+JSON.stringify(r)),c(!1)};return e?(0,g.jsxs)(E.default,{style:he.section,children:[(0,g.jsx)(Q.default,{style:he.sectionTitle,children:"4. Transactions"}),(0,g.jsx)(u.default,{style:he.button,onPress:async()=>{if(e)try{const i=await fetch("https://infinite-sandbox.biapi.pro/2.0/users/me/transactions?limit=50",{headers:{Authorization:`Bearer ${e}`}});if(!i.ok)throw new Error(`Erreur HTTP transactions: ${i.status}`);const o=await i.json(),r=(o.transactions||[]).map((e=>({id:String(e.id),date:e.date||e.application_date||"",description:e.wording||e.simplified_wording||"N/A",amount:e.value||0})));n(r),console.log("setTransactions : "+JSON.stringify(t)),c(!0)}catch(i){console.error("Erreur load transactions:",i)}else console.warn("Pas de token => impossible de charger les transactions")},children:(0,g.jsx)(Q.default,{style:he.buttonText,children:"Charger les transactions"})}),t.length>0&&(0,g.jsxs)(E.default,{style:he.pickerContainer,children:[(0,g.jsx)(Q.default,{style:he.paragraph,children:"S\xe9lectionner une transaction :"}),(0,g.jsxs)(pe.Picker,{selectedValue:i||"",onValueChange:e=>e?o(e):void 0,style:he.picker,children:[(0,g.jsx)(pe.Picker.Item,{label:"-- S\xe9lectionnez une transaction --",value:""}),t.map((e=>(0,g.jsx)(pe.Picker.Item,{label:`${e.date} - ${e.description} (${e.amount})`,value:e.id},e.id)))]}),(0,g.jsx)(u.default,{style:[he.button,{marginTop:10}],onPress:p,disabled:!i,children:(0,g.jsx)(Q.default,{style:he.buttonText,children:"Utiliser la transaction"})})]}),d&&t.length>0&&(0,g.jsxs)(E.default,{style:he.oldDropdown,children:[(0,g.jsx)(Q.default,{style:he.oldDropdownLabel,children:"(Picker suppl\xe9mentaire, affichage conditionnel)"}),(0,g.jsxs)(pe.Picker,{selectedValue:i||"",onValueChange:e=>e?o(e):void 0,style:he.picker,children:[(0,g.jsx)(pe.Picker.Item,{label:"-- S\xe9lectionnez une transaction --",value:""}),t.map((e=>(0,g.jsx)(pe.Picker.Item,{label:`${e.date} - ${e.description} (${e.amount}\u20ac)`,value:e.id},e.id)))]}),(0,g.jsx)(u.default,{style:[he.button,{marginTop:5}],onPress:p,disabled:!i,children:(0,g.jsx)(Q.default,{style:he.buttonText,children:"Utiliser cette transaction"})})]})]}):null}const he=Y.default.create({section:{backgroundColor:"#fff",marginVertical:10,padding:15,borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,elevation:2},sectionTitle:{fontSize:16,fontWeight:"600",marginBottom:6},paragraph:{fontSize:14,marginBottom:10,color:"#333"},button:{backgroundColor:"#2e86de",borderRadius:5,padding:10,marginVertical:5,alignItems:"center"},buttonText:{color:"#fff"},pickerContainer:{marginVertical:10},picker:{backgroundColor:"#eee",marginVertical:5},oldDropdown:{marginTop:10,padding:10,backgroundColor:"#f2f2f2"},oldDropdownLabel:{fontSize:12,marginBottom:5,color:"#999"}});function me({error:e,logs:t,clearLogs:n}){const o=(0,i.useRef)(null),[r,a]=(0,i.useState)(!0);return(0,g.jsxs)(E.default,{style:ge.section,children:[(0,g.jsx)(Q.default,{style:ge.sectionTitle,children:"Logs Python (WebSocket)"}),e&&(0,g.jsxs)(Q.default,{style:ge.error,children:["Erreur WebSocket: ",e]}),(0,g.jsxs)(E.default,{style:ge.logsHeader,children:[(0,g.jsx)(Q.default,{style:ge.logsTitle,children:"Logs re\xe7us :"}),(0,g.jsx)(u.default,{style:ge.smallButton,onPress:n,children:(0,g.jsx)(Q.default,{style:ge.smallButtonText,children:"Clear logs"})})]}),(0,g.jsx)(c.default,{ref:o,onScroll:()=>{const{layoutMeasurement:e,contentOffset:t,contentSize:n}=event.nativeEvent,i=e.height+t.y>=n.height-20;a(i)},onContentSizeChange:()=>{r&&o.current&&o.current.scrollToEnd({animated:!0})},scrollEventThrottle:1,style:ge.logsContainer,children:t.map(((e,t)=>(0,g.jsx)(Q.default,{style:ge.logLine,children:e},t)))})]})}const ge=Y.default.create({section:{backgroundColor:"#fff",marginVertical:10,padding:15,borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,elevation:2},sectionTitle:{fontSize:16,fontWeight:"600",marginBottom:6},error:{color:"red",marginBottom:10},logsHeader:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:5},logsTitle:{fontWeight:"600",fontSize:15},smallButton:{backgroundColor:"#777",paddingVertical:4,paddingHorizontal:8,borderRadius:4},smallButtonText:{color:"#fff",fontSize:12},logsContainer:{maxHeight:150,borderWidth:1,borderColor:"#ccc",backgroundColor:"#fff",padding:5,marginBottom:10,borderRadius:4},logLine:{marginBottom:4,fontSize:12,color:"#444"}});var xe=n(4038);function be({payloads:e,clearPayloads:t}){const[n,o]=(0,i.useState)(!1),[r,a]=(0,i.useState)(""),[s,l]=(0,i.useState)(""),d=()=>{l(title),a(content),o(!0)},p=()=>{o(!1),a(""),l("")};return(0,g.jsxs)(E.default,{style:ye.section,children:[(0,g.jsxs)(E.default,{style:ye.logsHeader,children:[(0,g.jsx)(Q.default,{style:ye.logsTitle,children:"Payload(s) final(aux) :"}),(0,g.jsx)(u.default,{style:ye.smallButton,onPress:t,children:(0,g.jsx)(Q.default,{style:ye.smallButtonText,children:"Clear payloads"})})]}),(0,g.jsx)(c.default,{style:ye.logsContainer,children:e.length>0?e.map(((e,t)=>{const{transaction:n,best_email:i}=e;return(0,g.jsxs)(E.default,{style:ye.payloadBlock,children:[(0,g.jsxs)(Q.default,{style:ye.payloadTitle,children:["Transaction #",t+1]}),(0,g.jsxs)(E.default,{style:{marginLeft:10},children:[(0,g.jsxs)(Q.default,{children:["Date : ",n?.date||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Montant : ",n?.montant||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Libell\xe9 : ",n?.libelle||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Ligne brute : ",n?.raw_line||"N/A"]})]}),(0,g.jsx)(Q.default,{style:[ye.payloadTitle,{marginTop:5}],children:"Email associ\xe9"}),(0,g.jsxs)(E.default,{style:{marginLeft:10},children:[(0,g.jsxs)(Q.default,{children:["Sujet : ",i?.subject||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Score :"," ",void 0!==i?.score?i.score.toFixed(2):"N/A"]}),(0,g.jsxs)(Q.default,{children:["Amount dans le mail : ",i?.amount||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Exp\xe9diteur : ",i?.from||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Date : ",i?.date||"N/A"]}),(0,g.jsxs)(E.default,{style:ye.buttonRow,children:[i?.body?(0,g.jsx)(u.default,{style:ye.viewButton,onPress:()=>d(i.body),children:(0,g.jsx)(Q.default,{style:ye.viewButtonText,children:"Voir le corps complet"})}):(0,g.jsx)(Q.default,{children:"Corps complet : (aucun contenu)"}),i?.pdf_attachment?(0,g.jsx)(u.default,{style:[ye.viewButton,{backgroundColor:"#c0392b"}],onPress:()=>d(i.pdf_attachment),children:(0,g.jsx)(Q.default,{style:ye.viewButtonText,children:"Voir la facture PDF"})}):null]})]}),(0,g.jsx)(E.default,{style:ye.separator})]},t)})):(0,g.jsx)(Q.default,{style:{fontStyle:"italic"},children:"Aucun payload pour le moment."})}),(0,g.jsx)(xe.default,{animationType:"slide",transparent:!1,visible:n,onRequestClose:p,children:(0,g.jsxs)(E.default,{style:ye.modalContainer,children:[(0,g.jsx)(Q.default,{style:ye.modalTitle,children:s}),(0,g.jsx)(c.default,{style:ye.modalContent,children:(0,g.jsx)(Q.default,{style:ye.modalText,children:r})}),(0,g.jsx)(K.default,{title:"Fermer",onPress:p})]})})]})}const ye=Y.default.create({section:{backgroundColor:"#fff",marginVertical:10,padding:15,borderRadius:8,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,elevation:2},logsHeader:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:5},logsTitle:{fontWeight:"600",fontSize:15},smallButton:{backgroundColor:"#777",paddingVertical:4,paddingHorizontal:8,borderRadius:4},smallButtonText:{color:"#fff",fontSize:12},logsContainer:{maxHeight:150,borderWidth:1,borderColor:"#ccc",backgroundColor:"#fff",padding:5,marginBottom:10,borderRadius:4},payloadBlock:{marginBottom:15},payloadTitle:{fontWeight:"bold",marginVertical:3},separator:{height:1,backgroundColor:"#ccc",marginVertical:10},buttonRow:{flexDirection:"row",alignItems:"center",marginTop:5},viewButton:{backgroundColor:"#2e86de",borderRadius:5,padding:8,marginRight:10},viewButtonText:{color:"#fff",fontSize:14},modalContainer:{flex:1,padding:20,backgroundColor:"#fff"},modalTitle:{fontSize:18,fontWeight:"bold",marginBottom:10},modalContent:{flex:1,marginBottom:20},modalText:{fontSize:14,color:"#333"}});var je=n(6655);function ve({googleToken:e,setGoogleToken:t,setUserId:n}){return(0,g.jsx)(E.default,{style:we.container,children:e?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Q.default,{style:we.infoText,children:"Connect\xe9 \xe0 Google"}),(0,g.jsx)(u.default,{style:[we.button,{backgroundColor:"#c0392b"}],onPress:async()=>{try{await re.openBrowserAsync("https://mon-serveur-node-143630968799.europe-west1.run.app/auth/logout"),t(null)}catch(e){console.error(e)}},children:(0,g.jsx)(Q.default,{style:we.buttonText,children:"Se d\xe9connecter de Google"})})]}):(0,g.jsx)(u.default,{style:we.button,onPress:async()=>{try{const e=await re.openBrowserAsync("https://mon-serveur-node-143630968799.europe-west1.run.app/auth/google");if("success"===e.type&&e.url){const t=je.parse(e.url);t.queryParams&&t.queryParams.userId&&n(t.queryParams.userId)}}catch(e){console.error(e)}},children:(0,g.jsx)(Q.default,{style:we.buttonText,children:"Se connecter via Google"})})})}const we=Y.default.create({container:{marginVertical:10,alignItems:"center"},infoText:{marginBottom:10,fontSize:16},button:{backgroundColor:"#2e86de",borderRadius:5,padding:10,alignItems:"center",marginVertical:5,width:"80%"},buttonText:{color:"#fff"}});function Se(){const[e,t]=(0,i.useState)(oe.default.get("powensToken")||null),[n,o]=(0,i.useState)(oe.default.get("googleToken")||null),[r,a]=(0,i.useState)(oe.default.get("userId")||""),[s,l]=(0,i.useState)(oe.default.get("linesJson")||""),[d,c]=(0,i.useState)([]),[u,p]=(0,i.useState)(null),[f,h]=(0,i.useState)(""),[m,x]=(0,i.useState)(!1),{logs:b,payloads:y,error:j,clearLogs:v,clearPayloads:w}=function(e){const[t,n]=(0,i.useState)([]),[o,r]=(0,i.useState)([]),[a,s]=(0,i.useState)(),l=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const t=new WebSocket(e);return l.current=t,t.onopen=()=>{console.log("WebSocket connected")},t.onmessage=e=>{try{const t=JSON.parse(e.data);"PYTHON_LOG"===t.type?n((e=>[...e,t.payload])):"PYTHON_ERR"===t.type?n((e=>[...e,"ERR: "+t.payload])):"PYTHON_END"===t.type?n((e=>[...e,"Python termin\xe9, code="+t.payload])):"PYTHON_PAYLOAD"===t.type&&r((e=>[...e,...Array.isArray(t.payload)?t.payload:[t.payload]]))}catch(t){console.error("Erreur parsing message WS:",t),s("Erreur parsing WS message: "+String(t))}},t.onerror=e=>{console.error("WS error:",e),s("WS error: "+JSON.stringify(e))},t.onclose=()=>{console.log("WS ferm\xe9")},()=>{t.close()}}),[e]),{logs:t,payloads:o,error:a,clearLogs:function(){n([])},clearPayloads:function(){r([])}}}("wss://mon-serveur-node-143630968799.europe-west1.run.app");(0,i.useEffect)((()=>{e?oe.default.set("powensToken",e,{expires:7}):oe.default.remove("powensToken")}),[e]),(0,i.useEffect)((()=>{r?oe.default.set("userId",r,{expires:7}):oe.default.remove("userId")}),[r]),(0,i.useEffect)((()=>{s?oe.default.set("linesJson",s,{expires:7}):oe.default.remove("linesJson")}),[s]),(0,i.useEffect)((()=>{n?oe.default.set("googleToken",n,{expires:7}):oe.default.remove("googleToken")}),[n]);const S=(0,i.useRef)(null),k=()=>{S.current&&S.current.scrollBy(1)},A=()=>{S.current&&S.current.scrollBy(-1)};return(0,i.useEffect)((()=>{e&&setTimeout((()=>{S.current&&S.current.scrollBy(1)}),0)}),[e]),(0,g.jsx)(E.default,{style:ke.container,children:(0,g.jsxs)(ie,{ref:S,loop:!1,showsPagination:!0,style:{flex:1},scrollEnabled:!0,children:[(0,g.jsx)(E.default,{style:ke.slide,children:e?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Q.default,{style:{marginBottom:10},children:"Vous \xeates d\xe9j\xe0 authentifi\xe9 avec Powens."}),(0,g.jsx)(ve,{googleToken:n,setGoogleToken:o,setUserId:a}),(0,g.jsx)(K.default,{title:"Continuer",onPress:k})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(ae,{powensToken:e,setPowensToken:t,userId:r,setUserId:a}),(0,g.jsx)(K.default,{title:"Suivant",onPress:k})]})}),(0,g.jsxs)(E.default,{style:ke.slide,children:[(0,g.jsx)(le,{powensToken:e}),(0,g.jsxs)(E.default,{style:ke.navButtons,children:[(0,g.jsx)(K.default,{title:"Pr\xe9c\xe9dent",onPress:A}),(0,g.jsx)(K.default,{title:"Suivant",onPress:k})]})]}),(0,g.jsxs)(E.default,{style:ke.slide,children:[(0,g.jsx)(fe,{powensToken:e,transactions:d,setTransactions:c,selectedTransactionId:u,setSelectedTransactionId:p,linesJson:s,setLinesJson:l,setPriceStr:h,showDropdown:m,setShowDropdown:x}),(0,g.jsxs)(E.default,{style:ke.navButtons,children:[(0,g.jsx)(K.default,{title:"Pr\xe9c\xe9dent",onPress:A}),(0,g.jsx)(K.default,{title:"Suivant",onPress:k})]})]}),(0,g.jsxs)(E.default,{style:ke.slide,children:[(0,g.jsx)(ce,{error:j,logs:b,userId:r,linesJson:s,setUserId:a,priceStr:f,clearLogs:v}),(0,g.jsx)(me,{error:j,logs:b,clearLogs:v}),(0,g.jsx)(be,{payloads:y,clearPayloads:w}),(0,g.jsxs)(E.default,{style:ke.navButtons,children:[(0,g.jsx)(K.default,{title:"Pr\xe9c\xe9dent",onPress:A}),(0,g.jsx)(K.default,{title:"Terminer",onPress:()=>alert("Fin de l\u2019assistant !")})]})]})]})})}const ke=Y.default.create({container:{flex:1,backgroundColor:"#f9f9f9",marginTop:40},slide:{flex:1,paddingHorizontal:15,paddingTop:30,justifyContent:"flex-start"},navButtons:{flexDirection:"row",justifyContent:"space-between",marginTop:20}}),Ae=o.default.div`
  width: 100%;
  height: 100vh;
  border-radius: 20px;
  background: linear-gradient(to bottom right, #f0f2f5, #dcdcdc);
  display: flex;
  flex-direction: column;
  font-family: "Arial", sans-serif;
  color: #2c3e50;
  overflow: hidden; /* Gérer le défilement via ContentArea */
`,Pe=o.default.div`
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
`,Ce=o.default.div`
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
`,Te=o.default.div`
  flex: 1;
  overflow-y: auto; 
  padding: 40px;
  /* Retirer display: flex et les propriétés de centrage pour permettre un défilement vertical correct */
`,ze=o.default.div`
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  padding: 30px;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto; /* Centrer horizontalement */
`,Re=o.default.h2`
  color: #6f2cf7;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`,Ee=o.default.p`
  margin-bottom: 30px;
  text-align: center;
  color: #555;
`,Me=o.default.div`
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
`,Le=o.default.button`
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
`,Ie=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;var Oe=n(962);const Be=()=>{const[e,t]=(0,i.useState)(""),[n,o]=(0,i.useState)("");return(0,g.jsxs)(ze,{children:[(0,g.jsx)(Re,{children:"G\xe9n\xe9rateur de QR Code"}),(0,g.jsx)(Ee,{children:"Entrez une URL ou un texte pour g\xe9n\xe9rer et t\xe9l\xe9charger votre QR code."}),(0,g.jsxs)(Me,{children:[(0,g.jsx)("input",{type:"text",placeholder:"URL ou texte ici",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)("button",{onClick:()=>{""!==e.trim()?o(e):alert("Monsieur, veuillez entrer un texte ou une URL valide.")},children:"G\xe9n\xe9rer"})]}),n&&(0,g.jsxs)(Ie,{children:[(0,g.jsx)(Oe.QRCodeCanvas,{id:"qrCodeCanvas",value:n,size:256}),(0,g.jsx)(Le,{onClick:()=>{const e=document.getElementById("qrCodeCanvas");if(!e)return void alert("Monsieur, veuillez d\u2019abord g\xe9n\xe9rer un QR code.");const t=e.toDataURL("image/png").replace("image/png","image/octet-stream"),n=document.createElement("a");n.href=t,n.download="qrcode.png",document.body.appendChild(n),n.click(),document.body.removeChild(n)},children:"T\xe9l\xe9charger"})]})]})},Ne=()=>{const[e,t]=(0,i.useState)(""),[n,o]=(0,i.useState)("");return(0,g.jsxs)(ze,{children:[(0,g.jsx)(Re,{children:"Convertisseur JSON \u2192 CSV"}),(0,g.jsx)(Ee,{children:"Collez votre JSON ci-dessous. Assurez-vous qu'il s'agit d'un tableau d'objets. Cliquez ensuite sur \"Convertir\" pour g\xe9n\xe9rer un CSV t\xe9l\xe9chargeable."}),(0,g.jsxs)(Me,{children:[(0,g.jsx)("textarea",{placeholder:'[{"name":"Jean","age":30},{"name":"Marie","age":25}]',value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)("button",{onClick:()=>{let t;try{t=JSON.parse(e)}catch(r){return void alert("Monsieur, votre JSON est invalide. Veuillez corriger et r\xe9essayer.")}if(!Array.isArray(t)||0===t.length||"object"!==typeof t[0])return void alert("Monsieur, veuillez fournir un tableau d'objets JSON non vide.");const n=Object.keys(t[0]),i=[n.join(","),...t.map((e=>n.map((t=>void 0!==e[t]?JSON.stringify(e[t]):"")).join(",")))].join("\n");o(i)},children:"Convertir"})]}),n&&(0,g.jsx)("div",{style:{textAlign:"center"},children:(0,g.jsx)(Le,{onClick:()=>{if(!n)return void alert("Monsieur, veuillez d\u2019abord convertir du JSON en CSV.");const e=new Blob([n],{type:"text/csv;charset=utf-8;"}),t=URL.createObjectURL(e),i=document.createElement("a");i.setAttribute("href",t),i.setAttribute("download","data.csv"),document.body.appendChild(i),i.click(),document.body.removeChild(i)},children:"T\xe9l\xe9charger CSV"})})]})};var $e=n(9341);const Ve=o.keyframes`
  0% {opacity:0; transform:translateY(-10px)}
  10% {opacity:1; transform:translateY(0)}
  90% {opacity:1; transform:translateY(0)}
  100% {opacity:0; transform:translateY(-10px)}
`,Je=o.default.div`
  position: absolute;
  top: 20px;
  background: #6f2cf7;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  animation: ${Ve} 2s ease-in-out forwards;
  font-size: 14px;
`,De=o.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`,Ue=o.default.div`
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
`,Fe=o.default.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  position: relative;
  min-height: 200px;
`,We=o.default.div`
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
`,qe=()=>{const[e,t]=(0,i.useState)("#6f2cf7"),[n,o]=(0,i.useState)([]),[r,a]=(0,i.useState)("analogous"),[s,l]=(0,i.useState)(5),[d,c]=(0,i.useState)("");(0,i.useEffect)((()=>{u()}),[]);const u=()=>{let t;try{t=(0,$e.default)(e)}catch(i){return void alert("Monsieur, veuillez entrer une couleur hex valide (ex: #6f2cf7).")}let n=[];switch(r){case"analogous":n=$e.default.scale([t.brighten(1),t,t.darken(1)]).colors(s);break;case"complementary":const i=t.set("hsl.h","+180").hex();n=$e.default.scale([t.hex(),i]).colors(s);break;case"triadic":const o=t.hsl(),r=$e.default.hsl((o[0]+120)%360,o[1],o[2]).hex(),a=$e.default.hsl((o[0]+240)%360,o[1],o[2]).hex();n=$e.default.scale([t.hex(),r,a]).colors(s);break;case"tetradic":const l=t.hsl(),d=$e.default.hsl((l[0]+90)%360,l[1],l[2]).hex(),c=$e.default.hsl((l[0]+180)%360,l[1],l[2]).hex(),u=$e.default.hsl((l[0]+270)%360,l[1],l[2]).hex();n=$e.default.scale([t.hex(),d,c,u]).colors(s);break;case"monochromatic":n=$e.default.scale([t.brighten(1.5),t,t.darken(1.5)]).colors(s);break;default:n=[e]}o(n)};return(0,g.jsxs)(ze,{children:[(0,g.jsx)(Re,{children:"G\xe9n\xe9rateur de Palette de Couleurs"}),(0,g.jsx)(Ee,{children:'Entrez une couleur de base (hex) et s\xe9lectionnez un mode pour g\xe9n\xe9rer une palette harmonieuse. Ajustez le nombre de couleurs, puis cliquez sur "G\xe9n\xe9rer". Cliquez sur une couleur pour la copier.'}),(0,g.jsxs)(Me,{children:[(0,g.jsx)("input",{type:"text",placeholder:"#6f2cf7",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)("button",{onClick:u,children:"G\xe9n\xe9rer"})]}),(0,g.jsx)(De,{children:(0,g.jsxs)(Ue,{children:[(0,g.jsx)("span",{children:"Mode :"}),(0,g.jsxs)("select",{value:r,onChange:e=>a(e.target.value),children:[(0,g.jsx)("option",{value:"analogous",children:"Analogous"}),(0,g.jsx)("option",{value:"complementary",children:"Compl\xe9mentaire"}),(0,g.jsx)("option",{value:"triadic",children:"Triadique"}),(0,g.jsx)("option",{value:"tetradic",children:"T\xe9tradique"}),(0,g.jsx)("option",{value:"monochromatic",children:"Monochromatique"})]}),(0,g.jsx)("span",{children:"Couleurs :"}),(0,g.jsx)("input",{type:"number",min:"3",max:"8",value:s,onChange:e=>l(parseInt(e.target.value,10))})]})}),(0,g.jsxs)(Fe,{children:[d&&(0,g.jsx)(Je,{children:d}),n.map((e=>(0,g.jsx)(We,{style:{background:e},onClick:()=>{return t=e,void navigator.clipboard.writeText(t).then((()=>{c(`La couleur ${t.toUpperCase()} a \xe9t\xe9 copi\xe9e.`),setTimeout((()=>c("")),2e3)}),(()=>{alert("Impossible de copier la couleur.")}));var t},children:(0,g.jsx)("span",{children:e.toUpperCase()})},e)))]})]})},_e=o.default.div`
  margin-top: 20px;
  text-align: center;
`,He=o.default.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 10px;
  color: ${e=>e.$textColor};
  background: ${e=>e.$bgColor};
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
`,Ge=o.default.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`,Ye=o.default.div`
  margin-top: 20px;
  font-size: 14px;
  color: #555;
`,Qe=o.default.span`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  background: ${e=>e.$color};
  color: #fff;
`,Ke=e=>/^#([0-9A-Fa-f]{3}){1,2}$/.test(e),Ze=()=>{const[e,t]=(0,i.useState)("#000000"),[n,o]=(0,i.useState)("#ffffff"),[r,a]=(0,i.useState)(null),[s,l]=(0,i.useState)("");return(0,i.useEffect)((()=>{((e,t)=>{if(!Ke(e)||!Ke(t))return a(null),void l("");let n;try{n=$e.default.contrast(e,t)}catch(r){return a(null),void l("")}const i=n.toFixed(2);a(i);let o="";o=n>=7?"AAA":n>=4.5?"AA":n>=3?"AA (Large Text Only)":"Non conforme",l(o)})(e,n)}),[e,n]),(0,g.jsxs)(ze,{children:[(0,g.jsx)(Re,{children:"V\xe9rification d'accessibilit\xe9 des couleurs"}),(0,g.jsx)(Ee,{children:"Entrez une couleur de texte et une couleur de fond (en hex). Le contraste sera v\xe9rifi\xe9 automatiquement."}),(0,g.jsxs)(Me,{children:[(0,g.jsx)("input",{type:"text",placeholder:"#000000 (Couleur du texte)",value:e,onChange:e=>t(e.target.value)}),(0,g.jsx)("input",{type:"text",placeholder:"#ffffff (Couleur de fond)",value:n,onChange:e=>o(e.target.value)})]}),r&&(0,g.jsxs)(_e,{children:[(0,g.jsx)(He,{$textColor:e,$bgColor:n,children:"Exemple de texte sur ce fond."}),(0,g.jsxs)(Ge,{children:["Ratio : ",r," ",s&&(0,g.jsx)(Qe,{$color:"AAA"===s?"#2ecc71":"AA"===s?"#3498db":"AA (Large Text Only)"===s?"#f1c40f":"#e74c3c",children:s})]}),(0,g.jsx)(Ye,{children:(()=>{if(!r||!s)return null;if(!Ke(e)||!Ke(n))return null;try{const t=(0,$e.default)(e).luminance(),i=t>(0,$e.default)(n).luminance();if("Non conforme"===s)return i?"Le texte est plus clair que le fond, mais le contraste est insuffisant. Rendez le texte encore plus clair ou le fond plus sombre.":"Le texte est plus sombre que le fond, mais le contraste est insuffisant. Rendez le texte encore plus sombre ou le fond plus clair.";if("AA (Large Text Only)"===s)return i?"Pour atteindre le niveau AA normal, rendez le texte un peu plus clair, ou assombrissez un peu le fond.":"Pour atteindre le niveau AA normal, rendez le texte un peu plus sombre, ou \xe9claircissez un peu le fond.";if("AA"===s)return i?"Vous respectez AA, pour atteindre AAA, essayez d'\xe9claircir encore un peu le texte ou d'assombrir davantage le fond.":"Vous respectez AA, pour atteindre AAA, essayez d'assombrir encore un peu le texte ou d'\xe9claircir davantage le fond.";if("AAA"===s)return"F\xe9licitations, votre contraste est excellent (AAA) !"}catch(t){return null}return null})()})]}),!r&&Ke(e)&&Ke(n)&&(0,g.jsxs)(_e,{children:[(0,g.jsx)(He,{$textColor:e,$bgColor:n,children:"Exemple de texte sur ce fond."}),(0,g.jsx)(Ge,{children:"Les couleurs sont valides, mais le ratio n'a pas pu \xeatre calcul\xe9."})]})]})},Xe=o.default.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  margin-top: 20px;
`,et=o.default.div`
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
`,tt=o.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,nt=o.default.div`
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
`,it=o.default.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`,ot=o.default.div`
  text-align: center;
`,rt=o.default.h3`
  font-size: 16px;
  margin-bottom: 10px;
  color: #6f2cf7;
`,at=o.default.img`
  max-width: 200px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  margin-bottom: 10px;
`,st=o.default.p`
  font-size: 13px;
  color: #555;
  margin: 5px 0;
`,lt=o.default.button`
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
`,dt=()=>{const[e,t]=(0,i.useState)(null),[n,o]=(0,i.useState)(""),[r,a]=(0,i.useState)(""),[s,l]=(0,i.useState)("image/jpeg"),[d,c]=(0,i.useState)(.8),[u,p]=(0,i.useState)(800),f=(0,i.useRef)(null);(0,i.useEffect)((()=>{if(e){const t=new FileReader;t.onload=e=>{o(e.target.result)},t.readAsDataURL(e)}else o(""),a("")}),[e]),(0,i.useEffect)((()=>{n&&h()}),[n,s,d,u]);const h=()=>{const e=new Image;e.onload=()=>{const t=f.current,n=t.getContext("2d"),i=e.height/e.width,o=u>0?u:e.width,r=o*i;t.width=o,t.height=r,n.clearRect(0,0,o,r),n.drawImage(e,0,0,o,r);const l=t.toDataURL(s,d);a(l)},e.src=n},m=e=>{if(!e)return 0;const t=e.split(",")[1];return Math.round(3*t.length/4)},x=m(n),b=m(r),y=x>0&&b>0?Math.round((x-b)/x*100):0;return(0,g.jsxs)(ze,{children:[(0,g.jsx)(Re,{children:"Optimisation et Conversion d'Images"}),(0,g.jsx)(Ee,{children:"Importez une image, ajustez la taille, la qualit\xe9, le format, puis t\xe9l\xe9chargez une version optimis\xe9e."}),(0,g.jsxs)(Xe,{children:[(0,g.jsxs)(et,{children:[(0,g.jsx)(Me,{children:(0,g.jsx)("input",{type:"file",accept:"image/*",onChange:e=>{e.target.files&&e.target.files[0]&&t(e.target.files[0])}})}),n&&(0,g.jsxs)(nt,{children:[(0,g.jsxs)("div",{className:"control-group",children:[(0,g.jsx)("label",{children:"Format de sortie :"}),(0,g.jsxs)("select",{value:s,onChange:e=>l(e.target.value),children:[(0,g.jsx)("option",{value:"image/jpeg",children:"JPEG"}),(0,g.jsx)("option",{value:"image/png",children:"PNG"}),(0,g.jsx)("option",{value:"image/webp",children:"WebP"})]})]}),("image/jpeg"===s||"image/webp"===s)&&(0,g.jsxs)("div",{className:"control-group",children:[(0,g.jsx)("label",{children:"Qualit\xe9 :"}),(0,g.jsx)("input",{type:"range",min:"0",max:"1",step:"0.05",value:d,onChange:e=>c(parseFloat(e.target.value))}),(0,g.jsx)("span",{className:"quality-value",children:d})]}),(0,g.jsxs)("div",{className:"control-group",children:[(0,g.jsx)("label",{children:"Largeur cible (px) :"}),(0,g.jsx)("input",{type:"number",value:u,onChange:e=>p(parseInt(e.target.value,10)||0)})]})]})]}),(0,g.jsx)(tt,{children:(0,g.jsxs)(it,{children:[n&&(0,g.jsxs)(ot,{children:[(0,g.jsx)(rt,{children:"Originale"}),(0,g.jsx)(at,{src:n,alt:"Original"}),(0,g.jsxs)(st,{children:["Taille : ",x," octets"]})]}),r&&(0,g.jsxs)(ot,{children:[(0,g.jsx)(rt,{children:"Optimis\xe9e"}),(0,g.jsx)(at,{src:r,alt:"Optimized"}),(0,g.jsxs)(st,{children:["Taille : ",b," octets"]}),x>0&&(0,g.jsxs)(st,{children:["R\xe9duction : ",y,"%"]}),(0,g.jsx)(lt,{onClick:()=>{if(!r)return;const e=document.createElement("a");e.href=r;const t="image/jpeg"===s?"jpg":"image/webp"===s?"webp":"png";e.download=`optimized.${t}`,document.body.appendChild(e),e.click(),document.body.removeChild(e)},children:"T\xe9l\xe9charger"})]})]})})]}),(0,g.jsx)("canvas",{ref:f,style:{display:"none"}})]})},ct=[{name:"Roboto",importUrl:"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"},{name:"Open Sans",importUrl:"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"},{name:"Lato",importUrl:"https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"},{name:"Montserrat",importUrl:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"},{name:"Poppins",importUrl:"https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"},{name:"Nunito",importUrl:"https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"},{name:"Source Sans Pro",importUrl:"https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap"},{name:"Mulish",importUrl:"https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap"},{name:"Ubuntu",importUrl:"https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap"},{name:"Raleway",importUrl:"https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"},{name:"Merriweather",importUrl:"https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"},{name:"Lora",importUrl:"https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap"},{name:"Playfair Display",importUrl:"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"},{name:"PT Serif",importUrl:"https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&display=swap"},{name:"Crimson Pro",importUrl:"https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&display=swap"},{name:"IBM Plex Serif",importUrl:"https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@400;700&display=swap"},{name:"Roboto Slab",importUrl:"https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap"},{name:"Oswald",importUrl:"https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap"},{name:"Rokkitt",importUrl:"https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;700&display=swap"},{name:"Muli (Mulish)",importUrl:"https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap"},{name:"Quicksand",importUrl:"https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap"},{name:"Josefin Sans",importUrl:"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"},{name:"PT Sans",importUrl:"https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap"}],ut={Roboto:["Open Sans","Lora","Montserrat","Merriweather","Poppins","Source Sans Pro","Crimson Pro","Raleway"],"Open Sans":["Roboto","Lora","Playfair Display","Poppins","Montserrat","PT Serif","Nunito"],Lato:["Merriweather","Playfair Display","Roboto Slab","Open Sans","Montserrat","Source Sans Pro"],Montserrat:["Lora","Merriweather","Crimson Pro","Nunito","Raleway","Poppins","PT Serif"],Poppins:["Merriweather","Lora","Roboto Slab","Crimson Pro","Mulish","Ubuntu"],Nunito:["Playfair Display","Lora","Roboto","PT Serif","Raleway","Poppins"],"Source Sans Pro":["Lora","Merriweather","Crimson Pro","Open Sans","Raleway","IBM Plex Serif"],Mulish:["Lora","Merriweather","Crimson Pro","Poppins","Playfair Display","PT Serif"],Ubuntu:["Lora","Merriweather","PT Serif","Roboto Slab","Raleway","Open Sans"],Raleway:["Merriweather","Lora","Crimson Pro","Poppins","Source Sans Pro","Ubuntu"],Merriweather:["Open Sans","Lato","Montserrat","Poppins","Raleway","Josefin Sans","PT Sans"],Lora:["Montserrat","Open Sans","Merriweather","Roboto","Raleway","Ubuntu"],"Playfair Display":["Open Sans","Lato","Source Sans Pro","Nunito","Poppins","Mulish"],"PT Serif":["Open Sans","Lato","Mulish","Poppins","Nunito","Josefin Sans"],"Crimson Pro":["Roboto","Open Sans","Poppins","Raleway","Lato","Source Sans Pro"],"IBM Plex Serif":["Roboto","Open Sans","Montserrat","Lato","Nunito","Raleway"],"Roboto Slab":["Lato","Poppins","Nunito","Quicksand","Ubuntu","PT Sans"],Oswald:["Open Sans","Lora","Merriweather","Roboto","Poppins","Nunito"],Rokkitt:["Lato","Open Sans","Poppins","Raleway","Merriweather","Mulish"],Quicksand:["Merriweather","Lora","Roboto","Nunito","Mulish","PT Serif"],"Josefin Sans":["Merriweather","Crimson Pro","Poppins","Open Sans","Raleway","Lato"],"PT Sans":["Playfair Display","Merriweather","Crimson Pro","Open Sans","Poppins","Lato"]},pt=o.default.div`
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
`,ft=o.default.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  span {
    margin-right: 10px;
    font-size: 14px;
  }
`,ht=o.default.div`
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
`,mt=o.default.pre`
  background: ${e=>e.$darkMode?"#2c3e50":"#f0f2f5"};
  padding: 20px;
  border-radius: 10px;
  font-size: 13px;
  overflow-x: auto;
  margin-top: 20px;
  color: ${e=>e.$darkMode?"#ecf0f1":"#2c3e50"};
`,gt=o.default.button`
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
`,xt=()=>{const[e,t]=(0,i.useState)("Roboto"),[n,o]=(0,i.useState)("Open Sans"),[r,a]=(0,i.useState)(36),[s,l]=(0,i.useState)(24),[d,c]=(0,i.useState)(16),[u,p]=(0,i.useState)(1.5),[f,h]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const t=ct.find((t=>t.name===e)),i=ct.find((e=>e.name===n)),o=document.head;if(document.querySelectorAll("link[data-font='saas6']").forEach((e=>e.remove())),t&&t.importUrl){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",t.importUrl),e.setAttribute("data-font","saas6"),o.appendChild(e)}if(i&&i.importUrl){const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",i.importUrl),e.setAttribute("data-font","saas6"),o.appendChild(e)}}),[e,n]);const m=ut[e]||[];(0,i.useEffect)((()=>{m.includes(n)||o(m[0])}),[e]);return(0,g.jsxs)(ze,{children:[(0,g.jsx)(Re,{children:"Conseiller d'Associations de Polices"}),(0,g.jsx)(Ee,{children:"Choisissez une police principale, obtenez des suggestions de polices secondaires harmonieuses, ajustez le style et copiez le code CSS."}),(0,g.jsxs)(pt,{$darkMode:f,children:[(0,g.jsxs)(ft,{children:[(0,g.jsxs)("span",{children:["Mode ",f?"Sombre":"Clair"," :"]}),(0,g.jsx)("input",{type:"checkbox",checked:f,onChange:()=>h(!f)})]}),(0,g.jsx)("label",{children:"Police Principale :"}),(0,g.jsx)("select",{value:e,onChange:e=>t(e.target.value),children:ct.map((e=>(0,g.jsx)("option",{value:e.name,children:e.name},e.name)))}),(0,g.jsx)("label",{children:"Police Secondaire :"}),(0,g.jsx)("select",{value:n,onChange:e=>o(e.target.value),children:m.map((e=>(0,g.jsx)("option",{value:e,children:e},e)))}),(0,g.jsxs)("label",{children:["Taille du Titre (px) : ",r]}),(0,g.jsx)("input",{type:"range",min:"24",max:"72",step:"1",value:r,onChange:e=>a(parseInt(e.target.value,10))}),(0,g.jsxs)("label",{children:["Taille du Sous-titre (px) : ",s]}),(0,g.jsx)("input",{type:"range",min:"16",max:"48",step:"1",value:s,onChange:e=>l(parseInt(e.target.value,10))}),(0,g.jsxs)("label",{children:["Taille du corps (px) : ",d]}),(0,g.jsx)("input",{type:"range",min:"12",max:"24",step:"1",value:d,onChange:e=>c(parseInt(e.target.value,10))}),(0,g.jsxs)("label",{children:["Line-height : ",u]}),(0,g.jsx)("input",{type:"range",min:"1",max:"2",step:"0.1",value:u,onChange:e=>p(parseFloat(e.target.value))})]}),(0,g.jsxs)(ht,{$darkMode:f,$primaryFont:e,$secondaryFont:n,$titleSize:r,$subtitleSize:s,$bodySize:d,$lineHeight:u,children:[(0,g.jsx)("h1",{children:"Titre Principal"}),(0,g.jsx)("h2",{children:"Sous-titre d'exemple"}),(0,g.jsx)("p",{children:"Ceci est un paragraphe d'exemple pour pr\xe9visualiser la combinaison des polices. Ajustez le style, la taille, et la line-height pour obtenir le rendu d\xe9sir\xe9."})]}),(0,g.jsx)(mt,{$darkMode:f,children:`@import url('${ct.find((t=>t.name===e))?.importUrl}');\n@import url('${ct.find((e=>e.name===n))?.importUrl}');\n\nbody {\n  font-family: '${n}', sans-serif;\n  line-height: ${u};\n}\n\nh1 {\n  font-family: '${e}', sans-serif;\n  font-size: ${r}px;\n  font-weight: 700;\n}\n\nh2 {\n  font-family: '${n}', sans-serif;\n  font-size: ${s}px;\n  font-weight: 700;\n}\n\np {\n  font-family: '${n}', sans-serif;\n  font-size: ${d}px;\n  font-weight: 400;\n}`}),(0,g.jsx)(gt,{onClick:async()=>{const t=ct.find((t=>t.name===e)),i=ct.find((e=>e.name===n)),o=`\n@import url('${t?t.importUrl:""}');\n@import url('${i?i.importUrl:""}');\n\nbody {\n  font-family: '${n}', sans-serif;\n  line-height: ${u};\n}\n\nh1 {\n  font-family: '${e}', sans-serif;\n  font-size: ${r}px;\n  font-weight: 700;\n}\n\nh2 {\n  font-family: '${n}', sans-serif;\n  font-size: ${s}px;\n  font-weight: 700;\n}\n\np {\n  font-family: '${n}', sans-serif;\n  font-size: ${d}px;\n  font-weight: 400;\n}\n`.trim();try{await navigator.clipboard.writeText(o),alert("CSS copi\xe9 dans le presse-papiers !")}catch(a){alert("Impossible de copier le CSS. Veuillez le copier manuellement.")}},children:"Copier le CSS"})]})},bt=o.default.div`
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
`,yt=o.default.div`
  background: #f0f2f5;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 15px;
  font-family: "Courier New", monospace;
  font-size: 14px;
  color: #333;
  position: relative;
  word-break: break-all;
`,jt=o.default.div`
  color: #e74c3c;
  font-size: 14px;
  margin-bottom: 15px;
`,vt=o.default.div`
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
`,wt=o.default.div`
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
`,St=o.default.div`
  display: flex;
  gap: 10px;
`,kt=o.default.button`
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
`,At=((0,o.default)(kt)`
  background: #3498db;
  color: #ffffff;

  &:hover {
    background: #2980b9;
  }
`,(0,o.default)(kt)`
  background: #6f2cf7;
  color: #ffffff;

  &:hover {
    background: #5a23c4;
  }
`),Pt=(0,o.default)(kt)`
  background: #e74c3c;
  color: #ffffff;

  &:hover {
    background: #c0392b;
  }
`,Ct=[{label:"Lettres (a-z)",value:"[a-z]+"},{label:"Chiffres (0-9)",value:"\\d+"},{label:"Caract\xe8res alphanum\xe9riques",value:"[A-Za-z0-9]+"},{label:"Espace (\\s)",value:"\\s"},{label:"Caract\xe8re sp\xe9cifique",value:"."},{label:"D\xe9but de ligne (^)",value:"^"},{label:"Fin de ligne ($)",value:"$"},{label:"Groupe optionnel ( )",value:"(  )"},{label:"Quantificateur {n,m}",value:"{1,3}"},{label:"Mot complet (\\b)",value:"\\b"}],Tt=()=>{const[e,t]=(0,i.useState)(""),[n,o]=(0,i.useState)({i:!1,g:!1,m:!1}),[r,a]=(0,i.useState)(""),[s,l]=(0,i.useState)(""),[d,c]=(0,i.useState)("");(0,i.useEffect)((()=>{if(!e)return l(""),void c(r);try{const t=Object.keys(n).filter((e=>n[e])).join(""),i=new RegExp(e,t);if(l(""),r){const e=[...r.matchAll(i)];if(e.length>0){let t=0,n="";for(const i of e){const e=i.index,o=e+i[0].length;n+=r.slice(t,e),n+=`<span class="match">${r.slice(e,o)}</span>`,t=o}n+=r.slice(t),c(n)}else c(r)}else c("")}catch(t){l("Expression r\xe9guli\xe8re invalide"),c(r)}}),[e,n,r]);return(0,g.jsxs)(ze,{children:[(0,g.jsx)(Re,{children:"G\xe9n\xe9rateur et Testeur de Regex"}),(0,g.jsx)(Ee,{children:"Construisez votre regex en ajoutant des blocs, choisissez les options, puis testez-la sur un texte. Vous pouvez ensuite copier la regex finale."}),(0,g.jsxs)(bt,{children:[(0,g.jsx)("label",{children:"Construire la regex :"}),(0,g.jsxs)(yt,{children:[`/${e}/`,Object.keys(n).filter((e=>n[e])).join("")]}),s&&(0,g.jsx)(jt,{children:s}),(0,g.jsxs)("select",{onChange:e=>{var n;e.target.value&&(n=e.target.value,t((e=>e+n)))},value:"",children:[(0,g.jsx)("option",{value:"",children:"Ajouter un bloc..."}),Ct.map((e=>(0,g.jsx)("option",{value:e.value,children:e.label},e.value)))]}),(0,g.jsxs)("div",{className:"options",children:[(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",checked:n.i,onChange:()=>o((e=>Object.assign({},e,{i:!e.i})))})," i (ignore case)"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",checked:n.g,onChange:()=>o((e=>Object.assign({},e,{g:!e.g})))})," g (global)"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",checked:n.m,onChange:()=>o((e=>Object.assign({},e,{m:!e.m})))})," m (multiline)"]})]}),(0,g.jsx)("label",{children:"Regex personnalis\xe9e :"}),(0,g.jsx)("input",{type:"text",placeholder:"Tapez ou modifiez votre regex ici",value:e,onChange:e=>t(e.target.value)}),(0,g.jsxs)(St,{children:[(0,g.jsx)(At,{onClick:async()=>{const t=`/${e}/${Object.keys(n).filter((e=>n[e])).join("")}`;try{await navigator.clipboard.writeText(t),alert("Regex copi\xe9e dans le presse-papiers !")}catch(i){alert("Impossible de copier la regex. Copiez-la manuellement.")}},children:"Copier la regex"}),(0,g.jsx)(Pt,{onClick:()=>{t(""),l(""),c("")},children:"Clear"})]})]}),(0,g.jsxs)(vt,{children:[(0,g.jsx)("label",{children:"Texte de test :"}),(0,g.jsx)("textarea",{placeholder:"Collez ou tapez votre texte ici pour tester la regex.",value:r,onChange:e=>a(e.target.value)})]}),(0,g.jsx)(wt,{dangerouslySetInnerHTML:{__html:d}})]})},zt=()=>(0,g.jsxs)(ze,{children:[(0,g.jsx)(Re,{children:"SaaS 8"}),(0,g.jsx)(Ee,{children:"Contenu du Huiti\xe8me SaaS"})]});var Rt=n(3142);re.maybeCompleteAuthSession();const Et=()=>{const[e,t]=(0,i.useState)(""),[n,o]=(0,i.useState)(""),{logs:r,payloads:a,error:s,clearLogs:l,clearPayloads:d}=function(e){const[t,n]=(0,i.useState)([]),[o,r]=(0,i.useState)([]),[a,s]=(0,i.useState)(),l=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const t=new WebSocket(e);return l.current=t,t.onopen=()=>{console.log("WebSocket connected")},t.onmessage=e=>{try{const t=JSON.parse(e.data);"PYTHON_LOG"===t.type?n((e=>[...e,t.payload])):"PYTHON_ERR"===t.type?n((e=>[...e,"ERR: "+t.payload])):"PYTHON_END"===t.type?n((e=>[...e,"Python termin\xe9, code="+t.payload])):"PYTHON_PAYLOAD"===t.type&&(Array.isArray(t.payload)?r((e=>[...e,...t.payload])):r((e=>[...e,t.payload])))}catch(t){console.error("Erreur parsing message WS:",t),s("Erreur parsing WS message: "+String(t))}},t.onerror=e=>{console.error("WS error:",e),s("WS error: "+JSON.stringify(e))},t.onclose=()=>{console.log("WS ferm\xe9")},()=>{t.close()}}),[e]),{logs:t,payloads:o,error:a,clearLogs:function(){n([])},clearPayloads:function(){r([])}}}("ws://82.64.55.60:3000");return(0,g.jsxs)(ze,{children:[(0,g.jsx)(Re,{children:"Google OAuth + Logs Python en temps r\xe9el"}),(0,g.jsx)(Ee,{children:"Ici, nous allons afficher le formulaire pour lancer le script Python et la liste des logs en direct via WebSocket."}),(0,g.jsx)(E.default,{style:{marginVertical:10},children:(0,g.jsx)(K.default,{title:"Se connecter via Google",onPress:async()=>{try{await re.openBrowserAsync("http://82.64.55.60:3000/auth/google")}catch(e){console.error(e)}}})}),(0,g.jsx)(Q.default,{style:{marginTop:10,fontWeight:"bold"},children:"userId :"}),(0,g.jsx)(Rt.default,{style:{borderWidth:1,borderColor:"#aaa",padding:8,marginVertical:5},value:e,onChangeText:t,placeholder:"Saisir votre userId fourni par /callback"}),(0,g.jsx)(Q.default,{style:{marginTop:10,fontWeight:"bold"},children:"lines_json_str :"}),(0,g.jsx)(Rt.default,{style:{borderWidth:1,borderColor:"#aaa",padding:8,marginVertical:5,height:80},multiline:!0,value:n,onChangeText:o,placeholder:'Ex: [["13/01/2025","PAIEMENT","-10.00"], [...]]'}),(0,g.jsx)(K.default,{title:"Lancer Script Python",onPress:async function(){try{const t=await fetch("http://82.64.55.60:3000/start_python_process",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:e,lines_json_str:n})}),i=await t.json();console.log("start_python_process =>",i)}catch(t){console.error("Erreur handleStartPython:",t)}}}),s&&(0,g.jsxs)(Q.default,{style:{color:"red",marginTop:10},children:["Erreur WebSocket: ",s]}),(0,g.jsx)(Q.default,{style:{marginTop:20,fontWeight:"bold"},children:"Logs re\xe7us :"}),(0,g.jsx)(K.default,{title:"Clear logs",onPress:l}),(0,g.jsx)(c.default,{style:{marginTop:10,maxHeight:150,borderWidth:1,borderColor:"gray"},children:r.map(((e,t)=>(0,g.jsx)(Q.default,{style:{marginBottom:4},children:e},t)))}),(0,g.jsx)(Q.default,{style:{marginTop:20,fontWeight:"bold"},children:"Payload(s) Final(aux) :"}),(0,g.jsx)(K.default,{title:"Clear payloads",onPress:d}),(0,g.jsx)(c.default,{style:{marginVertical:10,borderWidth:1,borderColor:"gray",padding:8},children:a.length>0?a.map(((e,t)=>{const{transaction:n,best_email:i}=e;return(0,g.jsxs)(E.default,{style:{marginBottom:10},children:[(0,g.jsxs)(Q.default,{style:{fontWeight:"bold"},children:["Transaction #",t+1]}),(0,g.jsxs)(E.default,{style:{marginLeft:10},children:[(0,g.jsxs)(Q.default,{children:["Date : ",n?.date||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Montant : ",n?.montant||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Libell\xe9 : ",n?.libelle||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Ligne brute : ",n?.raw_line||"N/A"]})]}),(0,g.jsx)(Q.default,{style:{fontWeight:"bold",marginTop:5},children:"Email associ\xe9"}),(0,g.jsxs)(E.default,{style:{marginLeft:10},children:[(0,g.jsxs)(Q.default,{children:["Sujet : ",i?.subject||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Score :"," ",i?.score?i.score.toFixed(2):"N/A"]}),(0,g.jsxs)(Q.default,{children:["Exp\xe9diteur : ",i?.from||"N/A"]}),(0,g.jsxs)(Q.default,{children:["Date : ",i?.date||"N/A"]}),i?.body?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Q.default,{children:"Corps complet :"}),(0,g.jsx)(Q.default,{style:{marginLeft:10,color:"#666"},children:i.body})]}):(0,g.jsx)(Q.default,{children:"Corps complet : (aucun contenu)"})]}),(0,g.jsx)(E.default,{style:{height:1,backgroundColor:"#ccc",marginVertical:10}})]},t)})):(0,g.jsx)(Q.default,{children:"Aucun payload pour le moment."})})]})},Mt=()=>{const[e,t]=(0,i.useState)("saas1");let n;return"saas1"===e?n=(0,g.jsx)(Be,{}):"saas2"===e?n=(0,g.jsx)(Ne,{}):"saas3"===e?n=(0,g.jsx)(qe,{}):"saas4"===e?n=(0,g.jsx)(Ze,{}):"saas5"===e?n=(0,g.jsx)(dt,{}):"saas6"===e?n=(0,g.jsx)(xt,{}):"saas7"===e?n=(0,g.jsx)(Tt,{}):"saas8"===e?n=(0,g.jsx)(zt,{}):"saas9"===e&&(n=(0,g.jsx)(Et,{})),(0,g.jsxs)(Ae,{children:[(0,g.jsxs)(Pe,{children:[(0,g.jsx)(Ce,{$active:"saas1"===e,onClick:()=>t("saas1"),children:"QR Code"}),(0,g.jsx)(Ce,{$active:"saas2"===e,onClick:()=>t("saas2"),children:"JSON \u2192 CSV"}),(0,g.jsx)(Ce,{$active:"saas3"===e,onClick:()=>t("saas3"),children:"Couleur"}),(0,g.jsx)(Ce,{$active:"saas4"===e,onClick:()=>t("saas4"),children:"Couleur texte"}),(0,g.jsx)(Ce,{$active:"saas5"===e,onClick:()=>t("saas5"),children:"Opti Image"}),(0,g.jsx)(Ce,{$active:"saas6"===e,onClick:()=>t("saas6"),children:"Font"}),(0,g.jsx)(Ce,{$active:"saas7"===e,onClick:()=>t("saas7"),children:"Regex"}),(0,g.jsx)(Ce,{$active:"saas9"===e,onClick:()=>t("saas9"),children:"Factures"})]}),(0,g.jsx)(Te,{children:n})]})};var Lt=n(2342),It=n(3595);It.Chart.register(It.RadialLinearScale,It.PointElement,It.LineElement,It.Filler,It.Tooltip,It.Legend);const Ot=o.default.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Bt=o.default.div`
  flex: 1;
  min-width: 300px;
`,Nt=o.default.div`
  flex: 1;
  min-width: 300px;
  max-height: 50vh;
`,$t=o.default.h2`
  color: #6f2cf7;
`,Vt=o.default.ul`
  list-style-type: none; /* Enlever les puces si nécessaire */
  padding: 5px; /* Enlever le padding par défaut */
`,Jt=o.default.li`
  margin-bottom: 15px; /* Ajuster l'espacement entre les éléments */
  font-size: 18px; /* Optionnel: Ajuster la taille de police */
`,Dt=()=>{const{t:e}=(0,l.useTranslation)(),t={labels:["Java","Python","JS/React/Node","PHP","SQL","Firebase","GML","C"],datasets:[{label:e("skills.title"),data:[5,7,8,4,5,7,6,3],backgroundColor:"rgba(111, 44, 247, 0.2)",borderColor:"rgba(111, 44, 247, 1)",borderWidth:1}]};return(0,g.jsxs)(Ot,{children:[(0,g.jsxs)(Bt,{children:[(0,g.jsx)($t,{children:e("skills.title")}),(0,g.jsxs)(Vt,{children:[(0,g.jsxs)(Jt,{children:[" - ",e("skills.java")]}),(0,g.jsxs)(Jt,{children:[" - ",e("skills.python")]}),(0,g.jsxs)(Jt,{children:[" - ",e("skills.react")]}),(0,g.jsxs)(Jt,{children:[" - ",e("skills.php")]}),(0,g.jsxs)(Jt,{children:[" - ",e("skills.SQL")]}),(0,g.jsxs)(Jt,{children:[" - ",e("skills.firebase")]}),(0,g.jsxs)(Jt,{children:[" - ",e("skills.gml")]}),(0,g.jsxs)(Jt,{children:[" - ",e("skills.c")]})]})]}),(0,g.jsx)(Nt,{children:(0,g.jsx)(Lt.Radar,{data:t})})]})},Ut=o.default.div`
`,Ft=o.default.h2`
  color: #6f2cf7 ;
`,Wt=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(Ut,{children:[(0,g.jsx)(Ft,{children:e("education.title")}),(0,g.jsxs)("ul",{children:[(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:e("education.openClassroom.title")}),(0,g.jsx)("p",{children:e("education.openClassroom.date")})]}),(0,g.jsxs)("li",{children:[(0,g.jsx)("h3",{children:e("education.jeanPerrin.title")}),(0,g.jsx)("p",{children:e("education.jeanPerrin.date")})]})]})]})},qt=o.default.footer`
  padding: 20px;
  background: #bdc3c7;
  color: #2c3e50;
  margin-top:20px;
`;const _t=function(){return(0,g.jsx)(qt,{children:(0,g.jsx)("p",{children:"\xa9 2024 Luc-Arnaud Bonnet. Tous droits r\xe9serv\xe9s."})})},Ht=o.default.div`
`,Gt=o.default.h2`
  color: #6f2cf7 ;
`,Yt=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(Ht,{children:[(0,g.jsx)(Gt,{children:e("distinctions.title")}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:e("distinctions.music")}),(0,g.jsx)("li",{children:e("distinctions.technology")}),(0,g.jsx)("li",{children:e("distinctions.media")}),(0,g.jsx)("li",{children:e("distinctions.veille")}),(0,g.jsx)("li",{children:e("distinctions.events")})]})]})},Qt=o.default.div`
`,Kt=o.default.h2`
  color: #6f2cf7 ;
`,Zt=()=>{const{t:e}=(0,l.useTranslation)();return(0,g.jsxs)(Qt,{children:[(0,g.jsx)(Kt,{children:e("languages.title")}),(0,g.jsxs)("ul",{children:[(0,g.jsx)("li",{children:e("languages.french")}),(0,g.jsx)("li",{children:e("languages.english")})]})]})};var Xt=n(2614);const en={en:{translation:JSON.parse('{"profile":{"title":"Profile","description":"Born to a conservatory director father and an entrepreneurial mother with a taekwondo association, I learned the discipline of work and life early on.<br>By assisting with the renovation and maintenance of the family ch\xe2teau from a young age, I developed a keen sense of responsibility and teamwork.<br>At seven, my father gifted me my first computer, sparking my curiosity for technology. By nine, I had built my first tower, marking my entry into the world of hardware.<br>However, it was with the acquisition of my first Arduino board at twelve that my passion for software and automation truly emerged.<br>I then learned solid programming basics through the \\"Siteduzero\\" (now OpenClassroom) site, and started creating JAVA mods for Minecraft.<br><br>After obtaining my baccalaureate in 2016 in engineering sciences with a specialty in computer science and digital sciences, I pursued my studies in mathematics and computer science at the University of Aix-en-Provence.<br>However, eager to quickly join the professional world, I opted for a JAVA J2E Expert training, which I funded by working at the Aubagne theater.<br>There, I gained practical skills in stage assembly and dressing room management, ensuring the well-being of artists and the smooth running of productions.<br>Encouraged to become a freelancer, I then diversified my services, completing projects ranging from simple landing pages to complex booking applications, as well as automation solutions for businesses.<br><br>Despite my technical skills and achievements, I have always found it difficult to sell my services due to my reserved nature.<br>Passionate about AI and emerging technologies, I am now looking for opportunities that will allow me to leverage and expand my programming skills while collaborating with teams that share my vision and enthusiasm for technological innovation."},"experience":{"title":"Experience","freelance":{"title":"Freelance Developer","date":"January 2022 to Present","description":["Development of several websites, ranging from showcase sites to e-commerce sites.","Creation of two simple mobile applications for event booking management.","Implementation of a marketing action with an answering machine and SMS link sending for creating temporary profiles.","Development of two app concepts for start-ups, using React, firebase or SQL and Python."]},"infiniteAgency":{"title":"Infinite Agency, Marseille \u2014 Web Technical Manager","date":"September 2019 to December 2021","description":"Creation and maintenance of the company\'s website, technical management of projects related to influencers and clothing sales, assembly and configuration of professional PCs for streamers."},"aubagne":{"title":"Before my 20s - 2 years at the Aubagne town hall","date":"September 2017 to July 2019","description":"Hall keeper - Black Penitent of Aubagne then Comoedia Theater as a temporary worker (Reception, secretarial work, then dressing room manager)"}},"education":{"title":"Education","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Expert","date":"September 2018 to March 2020"},"jeanPerrin":{"title":"Math-Computer Science, Jean Perrin, Aix-en-Provence","date":"September 2016 to May 2017"}},"skills":{"title":"Skills","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Distinctions","music":"Music: 10 years of piano lessons, practice of guitar and fife.","technology":"Technologies and video games: Passionate about computers, video games, and artificial intelligence. I would like to create my own video game one day.","media":"Media: Regular consumer of YouTube content, both educational and/or entertaining.","veille":"Tech watch: I like to spend my time staying informed about IT news and applying/participating in the development of promising open-source projects.","events":"Events: I also take care of the courtesy of events and the work of my father\'s castle."},"languages":{"title":"Languages","french":"French - Native","english":"English - B2 Level"},"feedback":{"title":"Feedback","reviews":"reviews","submit":"Submit","name":"Name","surname":"Surname","comment":"Comment"},"partitionsFifre":{"title":"Fifer Sheet"},"Perso":{"title":"Perso"},"cv":{"title":"CV","download":"Printable Version"},"project":{"title":"Projects","title2":"Public Projects","view":" Go on the website"},"project1":{"title":"Project 1: Lumiscool in progress","description":"This project is an ambitious platform for booking activities..."},"project2":{"title":"Project 2: Chateau de Vins sur Caramy","description":"The website for my father\'s castle, which I need to redo."},"project3":{"title":"Project 3: L\'\xe9chap\xe9e des plaisirs","description":"Showcase site for guest rooms."},"project4":{"title":"Project 4: Amazon Scraper","description":"Scrape Amazon to sort results by price, rating, and number of reviews..."},"project5":{"title":"Project 5: Dalhae Academy","description":"The website for my mother\'s taekwondo club..."}}')},fr:{translation:JSON.parse('{"profile":{"title":"Profil","description":"N\xe9 d\'un p\xe8re directeur de conservatoire et d\'une m\xe8re entrepreneure avec une association de taekwondo, j\'ai tr\xe8s t\xf4t appris la rigueur du travail et la discipline de la vie.<br>En aidant \xe0 la r\xe9novation et \xe0 la maintenance du ch\xe2teau familial d\xe8s mon jeune \xe2ge, j\'ai d\xe9velopp\xe9 un sens aigu des responsabilit\xe9s et du travail en \xe9quipe.<br>\xc0 sept ans, mon p\xe8re m\'a offert mon premier ordinateur, \xe9veillant ma curiosit\xe9 pour la technologie. \xc0 neuf ans, j\'ai construit ma premi\xe8re tour, marquant mes d\xe9buts dans le domaine du hardware.<br>Cependant, c\'est avec l\'obtention de ma premi\xe8re carte Arduino \xe0 douze ans que ma passion pour le software et l\'automatisation s\'est r\xe9ellement r\xe9v\xe9l\xe9e.<br>J\'ai alors appris les bases solides de la programmation gr\xe2ce au site Siteduzero (aujourd\'hui OpenClassroom), et commenc\xe9 \xe0 cr\xe9er des mods en JAVA pour Minecraft.<br><br>Apr\xe8s avoir obtenu mon baccalaur\xe9at en 2016 en sciences de l\'ing\xe9nieur avec une sp\xe9cialit\xe9 en informatique et sciences du num\xe9rique, j\'ai poursuivi mes \xe9tudes en math\xe9matiques et informatique \xe0 l\'universit\xe9 d\'Aix-en-Provence.<br>Toutefois, d\xe9sireux de rapidement int\xe9grer le monde professionnel, j\'ai opt\xe9 pour une formation JAVA J2E Expert, que j\'ai financ\xe9e en travaillant au th\xe9\xe2tre d\'Aubagne.<br>L\xe0, j\'ai acquis des comp\xe9tences pratiques en montage de sc\xe8nes et gestion des loges, assurant le bien-\xeatre des artistes et la fluidit\xe9 des productions.<br><br>Encourag\xe9 \xe0 devenir auto-entrepreneur, j\'ai ensuite diversifi\xe9 mes services, r\xe9alisant des projets allant de simples landing pages \xe0 des applications de r\xe9servation complexes, en passant par des solutions d\'automatisation pour entreprises.<br><br>Malgr\xe9 mes comp\xe9tences techniques et mes r\xe9alisations, j\'ai toujours trouv\xe9 difficile de vendre mes services en raison de ma nature r\xe9serv\xe9e.<br>Passionn\xe9 par l\'IA et les technologies \xe9mergentes, je recherche d\xe9sormais des opportunit\xe9s qui me permettront d\'exploiter et d\'\xe9largir mes comp\xe9tences en programmation, tout en collaborant avec des \xe9quipes qui partagent ma vision et mon enthousiasme pour l\'innovation technologique."},"experience":{"title":"Exp\xe9rience","freelance":{"title":"Freelance D\xe9veloppeur","date":"Janvier 2022 \xe0 Aujourd\'hui","description":["D\xe9veloppement de plusieurs sites web, allant de sites vitrines \xe0 des sites de vente en ligne.","Mise en place d\'une action marketing avec r\xe9pondeur t\xe9l\xe9phonique et envoi de liens SMS pour cr\xe9ation de profils temporaires.","D\xe9veloppement de deux concepts d\'applications pour des start-ups, utilisant React/node.js firebase/SQL et Python."]},"infiniteAgency":{"title":"Infinite Agency, Marseille \u2014 Responsable Technique Web","date":"Septembre 2019 \xe0 D\xe9cembre 2021","description":"Cr\xe9ation et maintenance du site web de l\'entreprise, gestion technique des projets li\xe9s aux influenceurs et \xe0 la vente de v\xeatements, montage et param\xe9trage de PC professionnels pour les streamers."},"aubagne":{"title":"Avant mes 20 ans - 2 ans \xe0 la mairie d\'Aubagne","date":"Septembre 2017 \xe0 Juillet 2019","description":"Gardien de salle - P\xe9nitent noir d\'Aubagne puis Th\xe9\xe2tre Comoedia en tant que vacataire (Accueil, secr\xe9tariat puis responsable loge)"}},"education":{"title":"Formation","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Expert","date":"Septembre 2018 \xe0 Mars 2020"},"jeanPerrin":{"title":"Math-Informatique, Jean Perrin, Aix-en-Provence","date":"Septembre 2016 \xe0 Mai 2017"}},"skills":{"title":"Comp\xe9tences","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Distinctions","music":"Musique : 10 ans de cours de piano, pratique de la guitare et du fifre.","technology":"Technologies et jeux vid\xe9o : Passionn\xe9 d\'informatique, de jeux vid\xe9o et d\'intelligence artificielle. J\'aimerais faire un jour mon propre jeu vid\xe9o.","media":"M\xe9dias : Consommateur r\xe9gulier de contenu YouTube, \xe0 la fois \xe9ducatif et/ou divertissant.","veille":"Veille informatique : J\'aime passer mon temps \xe0 m\'informer de l\'actualit\xe9 informatique et appliquer/participer aux d\xe9veloppement de projet open-source que je trouve prometteur.","events":"\xc9v\xe9nements : Je m\'occupe \xe9galement de la biens\xe9ance des \xe9v\xe9nements et des travaux du ch\xe2teau de mon p\xe8re."},"languages":{"title":"Langues","french":"Fran\xe7ais - Langue Maternelle","english":"Anglais - Niveau B2"},"cv":{"title":"CV","download":"Version imprimable"},"partitionsFifre":{"title":"Partition de fifre"},"Perso":{"title":"Perso"},"feedback":{"title":"Avis","reviews":"avis","submit":"Soumettre","name":"Nom","surname":"Pr\xe9nom","comment":"Commentaire"},"project":{"title":"Projets","title2":"Projets publics","view":" Aller sur le site"},"project1":{"title":"Projet 1 : Lumiscool en cours","description":"Ce projet est une ambicieuse platforme de r\xe9servation d\'activit\xe9..."},"project2":{"title":"Projet 2 : Chateau de Vins sur Caramy","description":"le siteweb du chateau de mon p\xe8re, que je dois refaire."},"project3":{"title":"Projet 3 : L\'\xe9chap\xe9e des plaisirs","description":"Site vitrine de chambres d\'h\xf4te."},"project4":{"title":"Projet 4 : Scraper Amazon","description":"Scrap amazon pour trier les resultats par prix, note et nombre d\'avis..."},"project5":{"title":"Projet 5 : Dalhae Academie","description":"Le site web du club de taekwondo de ma m\xe8re, ne vous fiez pas \xe0 la pr\xe9visualisation le site fonctionne ..."},"project6":{"title":"Projet 6 : Prism gang Project","description":"Le site web de la marque d\'un ami ..."}}')},es:{translation:JSON.parse('{"profile":{"title":"Perfil","description":"Nacido de un padre director de conservatorio y una madre emprendedora con una asociaci\xf3n de taekwondo, aprend\xed muy temprano la disciplina del trabajo y la vida.<br>Ayudando en la renovaci\xf3n y el mantenimiento del castillo familiar desde una edad temprana, desarroll\xe9 un agudo sentido de responsabilidad y trabajo en equipo.<br>A los siete a\xf1os, mi padre me regal\xf3 mi primera computadora, despertando mi curiosidad por la tecnolog\xeda. A los nueve a\xf1os, hab\xeda construido mi primera torre, marcando mi entrada en el mundo del hardware.<br>Sin embargo, fue con la adquisici\xf3n de mi primera placa Arduino a los doce a\xf1os que mi pasi\xf3n por el software y la automatizaci\xf3n realmente emergi\xf3.<br>Luego aprend\xed s\xf3lidos fundamentos de programaci\xf3n a trav\xe9s del sitio \\"Siteduzero\\" (ahora OpenClassroom), y comenc\xe9 a crear mods en JAVA para Minecraft.<br><br>Despu\xe9s de obtener mi bachillerato en 2016 en ciencias de la ingenier\xeda con especialidad en inform\xe1tica y ciencias digitales, continu\xe9 mis estudios en matem\xe1ticas e inform\xe1tica en la Universidad de Aix-en-Provence.<br>Sin embargo, deseoso de unirme r\xe1pidamente al mundo profesional, opt\xe9 por una formaci\xf3n JAVA J2E Expert, que financi\xe9 trabajando en el teatro de Aubagne.<br>All\xed, adquir\xed habilidades pr\xe1cticas en montaje de escenarios y gesti\xf3n de camerinos, asegurando el bienestar de los artistas y el buen funcionamiento de las producciones.<br><br>Mi entrada en el mundo profesional estuvo marcada por una colaboraci\xf3n con un amigo que lanzaba su marca, donde cre\xe9 y gestion\xe9 su sitio de ventas en l\xednea, mont\xe9 configuraciones complejas para streamers y optimic\xe9 las conexiones en una villa dedicada.<br>Alentado a convertirme en aut\xf3nomo, luego diversifiqu\xe9 mis servicios, completando proyectos que van desde simples landing pages hasta aplicaciones de reserva complejas, as\xed como soluciones de automatizaci\xf3n para empresas.<br><br>A pesar de mis habilidades t\xe9cnicas y logros, siempre he encontrado dif\xedcil vender mis servicios debido a mi naturaleza reservada.<br>Apasionado por la IA y las tecnolog\xedas emergentes, ahora busco oportunidades que me permitan aprovechar y expandir mis habilidades de programaci\xf3n mientras colaboro con equipos que comparten mi visi\xf3n y entusiasmo por la innovaci\xf3n tecnol\xf3gica."},"experience":{"title":"Experiencia","freelance":{"title":"Desarrollador Freelance","date":"Enero 2022 hasta Presente","description":["Desarrollo de varios sitios web, desde sitios de presentaci\xf3n hasta sitios de comercio electr\xf3nico.","Creaci\xf3n de dos aplicaciones m\xf3viles sencillas para la gesti\xf3n de reservas de eventos.","Implementaci\xf3n de una acci\xf3n de marketing con contestoador autom\xe1tico y env\xedo de enlaces SMS para la creaci\xf3n de perfiles temporales.","Desarrollo de dos conceptos de aplicaciones para start-ups, utilizando React , firebase or SQL y Python."]},"infiniteAgency":{"title":"Infinite Agency, Marsella \u2014 Gerente T\xe9cnico Web","date":"Septiembre 2019 a Diciembre 2021","description":"Creaci\xf3n y mantenimiento del sitio web de la empresa, gesti\xf3n t\xe9cnica de proyectos relacionados con influencers y ventas de ropa, montaje y configuraci\xf3n de PCs profesionales para streamers."},"aubagne":{"title":"Antes de mis 20 a\xf1os - 2 a\xf1os en el ayuntamiento de Aubagne","date":"Septiembre 2017 a Julio 2019","description":"Conserje de sala - Penitente Negro de Aubagne luego Teatro Comoedia como trabajador temporal (Recepci\xf3n, secretar\xeda y luego gerente de camerinos)"}},"education":{"title":"Educaci\xf3n","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Experto","date":"Septiembre 2018 a Marzo 2020"},"jeanPerrin":{"title":"Matem\xe1ticas-Inform\xe1tica, Jean Perrin, Aix-en-Provence","date":"Septiembre 2016 a Mayo 2017"}},"skills":{"title":"Habilidades","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Distinciones","music":"M\xfasica: 10 a\xf1os de clases de piano, pr\xe1ctica de Guitarra & P\xedfano.","technology":"Tecnolog\xedas y videojuegos: Apasionado de la inform\xe1tica, los videojuegos y la inteligencia artificial. Me gustar\xeda crear mi propio videojuego alg\xfan d\xeda.","media":"Medios: Consumidor regular de contenido de YouTube, tanto educativo como/o entretenido.","veille":"Vigilancia tecnol\xf3gica: Me gusta pasar mi tiempo manteni\xe9ndome informado sobre las noticias de TI y aplicando/participando en el desarrollo de proyectos de c\xf3digo abierto prometedores.","events":"Eventos: Tambi\xe9n me encargo de la cortes\xeda de los eventos y el trabajo del castillo de mi padre."},"languages":{"title":"Idiomas","french":"Franc\xe9s - Nativo","english":"Ingl\xe9s - Nivel B2"},"feedback":{"title":"Comentarios","reviews":"comentarios","submit":"Enviar","name":"Nombre","surname":"Apellido","comment":"Comentario"},"partitionsFifre":{"title":"Catalan fifre"},"Perso":{"title":"Perso"},"cv":{"title":"CV","download":"Versi\xf3n Imprimible"},"project":{"title":"Proyectos","title2":"Proyectos P\xfablicos","view":"Visitar el sitio"},"project1":{"title":"Proyecto 1: Lumiscool en progreso","description":"Este proyecto es una plataforma ambiciosa para reservar actividades..."},"project2":{"title":"Proyecto 2: Chateau de Vins sur Caramy","description":"El sitio web del castillo de mi padre, que necesito rehacer."},"project3":{"title":"Proyecto 3: L\'\xe9chap\xe9e des plaisirs","description":"Sitio de presentaci\xf3n para habitaciones de hu\xe9spedes."},"project4":{"title":"Proyecto 4: Amazon Scraper","description":"Raspar Amazon para ordenar los resultados por precio, calificaci\xf3n y n\xfamero de rese\xf1as..."},"project5":{"title":"Proyecto 5: Academia Dalhae","description":"El sitio web del club de taekwondo de mi madre..."}}')},de:{translation:JSON.parse('{"profile":{"title":"Profil","description":"Geboren als Sohn eines Konservatoriumsdirektors und einer unternehmerischen Mutter mit einem Taekwondo-Verein, habe ich fr\xfch die Disziplin von Arbeit und Leben gelernt.<br>Durch die Unterst\xfctzung bei der Renovierung und Wartung des Familienschlosses in jungen Jahren entwickelte ich ein starkes Verantwortungsbewusstsein und Teamarbeit.<br>Mit sieben Jahren schenkte mir mein Vater meinen ersten Computer, was meine Neugier f\xfcr Technologie weckte. Mit neun baute ich meinen ersten Tower und markierte damit meinen Einstieg in die Hardware-Welt.<br>Doch mit dem Erwerb meines ersten Arduino-Boards im Alter von zw\xf6lf Jahren entdeckte ich meine Leidenschaft f\xfcr Software und Automatisierung.<br>Ich erlernte solide Programmiergrundlagen durch die Seite \\"Siteduzero\\" (heute OpenClassroom) und begann, JAVA-Mods f\xfcr Minecraft zu erstellen.<br><br>Nach dem Abitur 2016 in Ingenieurwissenschaften mit Schwerpunkt Informatik und Digitale Wissenschaften setzte ich mein Studium der Mathematik und Informatik an der Universit\xe4t Aix-en-Provence fort.<br>Doch da ich schnell in die Berufswelt eintreten wollte, entschied ich mich f\xfcr eine Ausbildung zum JAVA J2E-Experten, die ich durch meine Arbeit im Theater von Aubagne finanzierte.<br>Dort erwarb ich praktische F\xe4higkeiten im B\xfchnenaufbau und im Management der K\xfcnstlergarderoben und sorgte f\xfcr das Wohlbefinden der K\xfcnstler und den reibungslosen Ablauf der Produktionen.<br><br>Ermutigt, freiberuflich t\xe4tig zu werden, diversifizierte ich anschlie\xdfend meine Dienstleistungen und realisierte Projekte, die von einfachen Landingpages bis hin zu komplexen Buchungsanwendungen und Automatisierungsl\xf6sungen f\xfcr Unternehmen reichten.<br><br>Trotz meiner technischen F\xe4higkeiten und Erfolge fiel es mir immer schwer, meine Dienstleistungen aufgrund meiner zur\xfcckhaltenden Natur zu verkaufen.<br>Mit Leidenschaft f\xfcr KI und aufstrebende Technologien suche ich nun nach M\xf6glichkeiten, meine Programmierkenntnisse zu nutzen und zu erweitern, w\xe4hrend ich mit Teams zusammenarbeite, die meine Vision und Begeisterung f\xfcr technologische Innovation teilen."},"experience":{"title":"Erfahrung","freelance":{"title":"Freiberuflicher Entwickler","date":"Januar 2022 bis Heute","description":["Entwicklung mehrerer Websites, von Schaufensterseiten bis hin zu E-Commerce-Seiten.","Erstellung von zwei einfachen mobilen Anwendungen f\xfcr das Veranstaltungsbuchungsmanagement.","Implementierung einer Marketingaktion mit Anrufbeantworter und SMS-Link-Versand zur Erstellung tempor\xe4rer Profile.","Entwicklung von zwei App-Konzepten f\xfcr Start-ups, unter Verwendung von React, firebase or SQL und Python."]},"infiniteAgency":{"title":"Infinite Agency, Marseille \u2014 Webtechnischer Leiter","date":"September 2019 bis Dezember 2021","description":"Erstellung und Wartung der Unternehmenswebsite, technische Verwaltung von Projekten im Zusammenhang mit Influencern und Bekleidungsverk\xe4ufen, Montage und Konfiguration professioneller PCs f\xfcr Streamer."},"aubagne":{"title":"Vor meinem 20. Lebensjahr - 2 Jahre im Rathaus von Aubagne","date":"September 2017 bis Juli 2019","description":"Saaldiener - Schwarzer B\xfc\xdfer von Aubagne, dann Comoedia-Theater als Aushilfe (Empfang, Sekretariatsarbeit, dann Garderobenleiter)"}},"education":{"title":"Ausbildung","openClassroom":{"title":"OpenClassroom, Internet \u2014 JAVA J2E Experte","date":"September 2018 bis M\xe4rz 2020"},"jeanPerrin":{"title":"Mathematik-Informatik, Jean Perrin, Aix-en-Provence","date":"September 2016 bis Mai 2017"}},"skills":{"title":"F\xe4higkeiten","java":"Java: 5/10","python":"Python: 7/10","react":"JS/React/Node: 8/10","php":"PHP: 4/10","SQL":"SQL: 5/10","firebase":"Firebase: 7/10","gml":"GML: 6/10","c":"C: 3/10"},"distinctions":{"title":"Auszeichnungen","music":"Musik: 10 Jahre Klavierunterricht, Schwegel & Gitarre spielen.","technology":"Technologien und Videospiele: Leidenschaftlich f\xfcr Computer, Videospiele und k\xfcnstliche Intelligenz. Ich m\xf6chte eines Tages mein eigenes Videospiel erstellen.","media":"Medien: Regelm\xe4\xdfiger Konsument von YouTube-Inhalten, sowohl lehrreich als auch unterhaltsam.","veille":"Technologie\xfcberwachung: Ich verbringe gerne meine Zeit damit, mich \xfcber IT-Neuigkeiten zu informieren und vielversprechende Open-Source-Projekte zu entwickeln.","events":"Veranstaltungen: Ich k\xfcmmere mich auch um die H\xf6flichkeit der Veranstaltungen und die Arbeiten am Schloss meines Vaters."},"partitionsFifre":{"title":"Fifren"},"Perso":{"title":"Perso"},"languages":{"title":"Sprachen","french":"Franz\xf6sisch - Muttersprache","english":"Englisch - B2-Niveau"},"feedback":{"title":"Bewertungen","reviews":"Bewertungen","submit":"Absenden","name":"Name","surname":"Nachname","comment":"Kommentar"},"cv":{"title":"Lebenslauf","download":"Druckbare Version"},"project":{"title":"Projekte","title2":"\xd6ffentliche Projekte","view":"Zur Webseite"},"project1":{"title":"Projekt 1: Lumiscool in Arbeit","description":"Dieses Projekt ist eine ehrgeizige Plattform zur Buchung von Aktivit\xe4ten..."},"project2":{"title":"Projekt 2: Chateau de Vins sur Caramy","description":"Die Website f\xfcr das Schloss meines Vaters, die ich neu gestalten muss."},"project3":{"title":"Projekt 3: L\'\xe9chap\xe9e des plaisirs","description":"Schaufensterseite f\xfcr G\xe4stezimmer."},"project4":{"title":"Projekt 4: Amazon Scraper","description":"Amazon durchsuchen, um Ergebnisse nach Preis, Bewertung und Anzahl der Bewertungen zu sortieren..."},"project5":{"title":"Projekt 5: Dalhae Akademie","description":"Die Website f\xfcr den Taekwondo-Club meiner Mutter..."}}')}};Xt.default.use(l.initReactI18next).init({resources:en,lng:"fr",fallbackLng:"fr",interpolation:{escapeValue:!1}});Xt.default;var tn=n(5954);const nn=o.default.div`
  display: flex;
  flex-direction: column;
  width: 100vw; 
`,on=o.default.div`
  margin-left: ${e=>e.showSidebar?"250px":"0"};
  padding: 20px;
  width: auto;
  overflow-y: auto;
  background: #efefef;
  transition: margin-left 0.3s, width 0.3s;
`,rn=o.default.div`
  padding: 20px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #bdc3c7;
`,an=(0,o.default)(rn)`
  max-width: 100%;
  overflow: hidden;
`;function sn(){const[e,t]=(0,i.useState)("cv"),[n,o]=(0,i.useState)(!0),a=(0,i.useRef)(null),s=(0,i.useRef)(null),l=(0,i.useRef)(null),d=(0,i.useRef)(null),c=(0,i.useRef)(null),u=(0,i.useRef)(null);(0,i.useEffect)((()=>{if(window.location.hash.includes("/callback")){const e=window.location.hash,t=e.indexOf("?"),n=-1!==t?e.substring(t):"",i=new URLSearchParams(n),o=i.get("code");o&&(document.cookie=`google_auth_code=${o}; path=/;`);const r=i.get("userId");r&&(document.cookie=`userId=${r}; path=/;`),window.location.hash="/"}}),[]),(0,i.useEffect)((()=>{const e=()=>{o(window.innerWidth>768)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)}),[]);const p=e=>{e?.current&&e.current.scrollIntoView({behavior:"smooth"})};return(0,g.jsxs)(nn,{children:[(0,g.jsx)(r,{}),n?(0,g.jsx)(k,{activePage:e,setActivePage:t,scrollToSection:p,profileRef:a,experienceRef:s,skillsRef:l,educationRef:d,distinctionsRef:c,languagesRef:u}):(0,g.jsx)(R,{activePage:e,setActivePage:t,scrollToSection:p,profileRef:a,experienceRef:s,skillsRef:l,educationRef:d,distinctionsRef:c,languagesRef:u}),(0,g.jsxs)(on,{showSidebar:n,children:["cv"===e&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(an,{ref:a,id:"profile-section",children:(0,g.jsx)(q,{})}),(0,g.jsx)(rn,{ref:s,id:"experience-section",children:(0,g.jsx)(G,{})}),(0,g.jsx)(rn,{ref:l,id:"skills-section",children:(0,g.jsx)(Dt,{})}),(0,g.jsx)(rn,{ref:d,id:"education-section",children:(0,g.jsx)(Wt,{})}),(0,g.jsx)(rn,{ref:c,id:"distinctions-section",children:(0,g.jsx)(Yt,{})}),(0,g.jsx)(rn,{ref:u,id:"languages-section",children:(0,g.jsx)(Zt,{})})]}),"Powens"===e&&(0,g.jsx)(Se,{}),"Perso"===e&&(0,g.jsx)(Mt,{})]}),(0,g.jsx)(_t,{})]})}function ln(){return(0,g.jsx)(tn.HashRouter,{children:(0,g.jsx)(sn,{})})}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,(()=>{var e=[];n.O=(t,i,o,r)=>{if(!i){var a=1/0;for(c=0;c<e.length;c++){for(var[i,o,r]=e[c],s=!0,l=0;l<i.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((e=>n.O[e](i[l])))?i.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(c--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,o,r]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.O.j=t=>0===e[t];var t=(t,i)=>{var o,r,[a,s,l]=i,d=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var c=l(n)}for(t&&t(i);d<a.length;d++)r=a[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},i=self.webpackChunkweb=self.webpackChunkweb||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),n.nc=void 0;var i=n.O(void 0,[114],(()=>n(4352)));i=n.O(i)})();
//# sourceMappingURL=main.4f6f2e84.js.map