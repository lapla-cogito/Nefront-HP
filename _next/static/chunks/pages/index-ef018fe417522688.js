(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2603)}])},6647:function(e,s,t){"use strict";t.d(s,{G:function(){return c},P:function(){return x}});var n=t(5893),i=t(7747),r=t(6725),a=t(4e3),l=t(917);let c=e=>{let{children:s,title:t,nefposition:l,thumbnail:c}=e;return(0,n.jsx)(i.xu,{w:"100%",children:(0,n.jsxs)(r.f,{children:[(0,n.jsx)("img",{src:c,alt:t,className:"grid-item-thumbnail",align:"center"}),(0,n.jsx)(a.x,{fontSize:25,textAlign:"center",children:t}),(0,n.jsx)(a.x,{fontSize:18,textAlign:"center",color:"gray",children:l}),(0,n.jsx)(a.x,{fontSize:14,children:s})]})})},x=()=>(0,n.jsx)(l.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 50%;\n        width:  180px;\n        height: 180px;\n        margin:auto;\n        display:flex;\n      }\n    "})},7080:function(e,s,t){"use strict";var n=t(5893),i=t(7745),r=t(9008),a=t.n(r);t(7294);var l=t(6647);let c={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};s.Z=e=>{let{children:s,title:t}=e,r="".concat(t," - Nefront Inc.");return(0,n.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{name:"twitter:title",content:r}),(0,n.jsx)("meta",{property:"og:title",content:r})]}),s,(0,n.jsx)(l.P,{})]})})}},8770:function(e,s,t){"use strict";var n=t(5893);t(7294),s.Z=e=>{let{title:s,date:t,link:i}=e;return(0,n.jsx)("li",{className:"news_list_item",children:(0,n.jsxs)("a",{href:i,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)("div",{className:"news_list_date",children:(0,n.jsx)("p",{className:"news_item",children:(0,n.jsx)("time",{children:t})})}),(0,n.jsx)("p",{children:s}),(0,n.jsx)("span",{className:"arrow"})]})})}},6105:function(e,s,t){"use strict";var n=t(2729),i=t(6829);function r(){let e=(0,n._)(["\n    text-align: justify;\n    // text-indent: 1em;\n    hyphens: auto;\n    margin: 10px;\n"]);return r=function(){return e},e}let a=i.Z.p(r());s.Z=a},4909:function(e,s,t){"use strict";t.d(s,{Z:function(){return l}});var n=t(5893),i=t(1664),r=t.n(i),a=t(7294),l=e=>{let{isHome:s,post:t}=e,[i,l]=(0,a.useState)(10),[c,x]=(0,a.useState)(!1),[d,o]=(0,a.useState)(t.postArray);return(0,a.useEffect)(()=>{!s&&t.postArray.length<=10?x(!0):!s&&t.postArray.length>10&&o(t.postArray.slice(0,i-1))},[]),(0,n.jsx)("section",{children:(0,n.jsxs)("div",{children:[d.map(e=>{let{date:s,title:t,slug:i}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("li",{className:"news_list_item",children:(0,n.jsxs)(r(),{as:"/news/".concat(i),href:"/news/[...slug]",scroll:!1,children:[(0,n.jsx)("div",{className:"news_list_date",children:(0,n.jsx)("p",{className:"news_item",children:(0,n.jsx)("time",{children:s})})}),(0,n.jsx)("p",{children:t}),(0,n.jsx)("span",{className:"arrow"})]})})},i)}),s?(0,n.jsx)(n.Fragment,{children:t.postsLength>5&&(0,n.jsx)("div",{className:"mt-10",children:(0,n.jsx)(r(),{href:"/news",className:"curp",scroll:!1,children:"More"})})}):(0,n.jsx)(n.Fragment,{children:!c&&(0,n.jsx)("button",{onClick:()=>{i+5>=t.postArray.length?(x(!0),o(t.postArray)):(l(i+5),o(t.postArray.slice(0,i-1)))},className:"curp",children:"もっとみる"})})]})})}},9336:function(e,s,t){"use strict";var n=t(5893),i=t(7745);t(7294);var r=t(9653),a=t(9777);let l=(0,r.m)(i.E.div,{shouldForwardProp:e=>(0,a.x)(e)||"transition"===e});s.Z=e=>{let{children:s,delay:t=0}=e;return(0,n.jsx)(l,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:t},mb:6,children:s})}},2468:function(e,s,t){"use strict";var n=t(2729),i=t(6829);function r(){let e=(0,n._)(["\n    display: block;\n    text-align: center;\n    hyphens: auto;\n    font-size: 25px;\n"]);return r=function(){return e},e}let a=i.Z.span(r());s.Z=a},2552:function(e,s,t){"use strict";var n=t(5893);t(7294);var i=t(5459),r=t.n(i),a=t(7747),l=t(7239);s.Z=function(){return(0,n.jsx)(a.xu,{w:"100%",className:"typeclass",children:(0,n.jsx)(l.M,{h:"100%",children:(0,n.jsxs)(a.xu,{alignItems:"center",fontSize:60,children:[" ",(0,n.jsx)(r(),{onInit:e=>{e.typeString("<span style='color:#3054D6;'>Ne</span><span style='color:#FFFFFF;'>w</span>").pauseFor(500).deleteChars(1).typeString("<span style='color:#FFFFFF;'>xt</span>").pauseFor(500).deleteChars(2).typeString("<span style='color:#FFFFFF;'>twork</span>").pauseFor(500).deleteChars(5).pauseFor(500).typeString("<span style='color:#3054D6;'>front</span><span style='color:#FFFFFF;'>end</span>").pauseFor(500).deleteChars(3).pauseFor(500).typeString("<span style='color:#FFFFFF;'>ier</span>").pauseFor(500).deleteChars(3).start()}})]})})})}},2603:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return F}});var n=t(2729),i=t(5893),r=t(5152),a=t.n(r);t(7294);var l=t(9089),c=t(2338),x=t(2757),d=t(2177),o=t(7747),h=t(6829),j=t(6647),p=t(7080),m=t(8770),u=t(6105),g=t(4909),f=t(9336),v=t(2468),b=t(2552);function y(){let e=(0,n._)(["\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    padding: 50px 0;\n"]);return y=function(){return e},e}l.ZP.initialize("G-FBQ0WYNGEZ"),l.ZP.send("pageview");let w=a()(()=>t.e(73).then(t.bind(t,9073)),{loadableGenerated:{webpack:()=>[9073]},ssr:!1}),N=h.Z.ul(y());var F=!0;s.default=e=>{let{newPosts:s}=e;return(0,i.jsx)(p.Z,{children:(0,i.jsxs)(c.W,{maxW:"99999999px",children:[(0,i.jsx)("div",{id:"top"}),(0,i.jsxs)("div",{id:"parent",children:[(0,i.jsx)(w,{}),(0,i.jsx)(b.Z,{})]}),(0,i.jsx)("div",{style:{width:"100%",height:"60px"}}),(0,i.jsx)("div",{id:"about"}),(0,i.jsx)("div",{style:{width:"100%",height:"60px"}}),(0,i.jsxs)(f.Z,{delay:.1,children:[(0,i.jsx)(x.X,{as:"h1",variant:"section-title",children:"About"}),(0,i.jsx)(u.Z,{children:(0,i.jsx)("span",{className:"exagsentence",children:"現実空間に情報を重ね合わせる拡張現実（AR）のアプリケーションを、今までにない場所や使い方で提供できるソリューションを開発しています。"})})]}),(0,i.jsx)("div",{id:"product"}),(0,i.jsx)("div",{style:{width:"100%",height:"60px"}}),(0,i.jsxs)(f.Z,{delay:.2,children:[(0,i.jsx)(x.X,{as:"h1",variant:"section-title",children:"Product"}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("span",{className:"exagsentence",style:{margin:"0 0 20px 0"},children:"- 屋内ARクラウドサービス IndooAR -"}),(0,i.jsx)("span",{className:"exagsentence",children:"屋内空間に情報を紐づけて、誘導アプリケーションやARコンテンツを提供します。"})]}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("div",{className:"flexdiv",children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("img",{src:"images/vps.svg",style:{display:"block",margin:"auto"},alt:"VPS",className:"svgs"}),(0,i.jsx)(v.Z,{children:"屋内での位置特定"}),(0,i.jsx)("br",{}),"スマートフォンのみでGPSの使えない屋内空間での位置特定を行うVPS（画像位置認識システム）を提供します。"]})}),(0,i.jsx)("div",{className:"flexdiv",children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("img",{src:"images/reg.svg",style:{display:"block",margin:"auto"},alt:"Register items",className:"svgs"}),(0,i.jsx)(v.Z,{children:"アイテム位置情報の登録や連携"}),(0,i.jsx)("br",{}),"屋内空間に商品やARコンテンツの位置を設定できます。API連携により、リアルタイムの更新も可能です。"]})}),(0,i.jsx)("div",{className:"flexdiv",children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("img",{src:"images/navigate.svg",style:{display:"block",margin:"auto"},alt:"Navigation",className:"svgs"}),(0,i.jsx)(v.Z,{children:"誘導やARコンテンツの表示"}),(0,i.jsx)("br",{}),"特定した位置やアイテムの登録位置に基づき誘導を行います。また、ARコンテンツの表示も行えます。"]})})]})]}),(0,i.jsx)("div",{id:"usecase"}),(0,i.jsx)("div",{style:{width:"100%",height:"60px"}}),(0,i.jsxs)(f.Z,{delay:.3,children:[(0,i.jsx)(x.X,{as:"h1",variant:"section-title",children:"Usecase"}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("div",{className:"flexdiv",children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("img",{src:"https://www.nefront.com/images/super.jpg",alt:"小売店",className:"imgs"}),(0,i.jsx)(v.Z,{children:"小売店"}),(0,i.jsx)("br",{}),"欲しい商品への誘導や売り場に合わせたARプロモーションを表示。キャラクターと買い物も！？",(0,i.jsx)("br",{})]})}),(0,i.jsx)("div",{className:"flexdiv",children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("img",{src:"https://www.nefront.com/images/underground.jpg",alt:"都市施設",className:"imgs"}),(0,i.jsx)(v.Z,{children:"都市施設"}),(0,i.jsx)("br",{}),"施設内の誘導やおすすめ情報の提示が可能です。ショップやレストランのクーポン、ARコンテンツによる体験型展示も！",(0,i.jsx)("br",{})]})}),(0,i.jsx)("div",{className:"flexdiv",children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("img",{src:"https://www.nefront.com/images/repos.jpg",alt:"倉庫",className:"imgs"}),(0,i.jsx)(v.Z,{children:"倉庫"}),(0,i.jsx)("br",{}),"商品や部品の棚入れ、ピッキングを効率化できます。初心者でも作業にかかる時間やミスを削減へ！",(0,i.jsx)("br",{})]})}),(0,i.jsx)("div",{className:"flexdiv",children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("img",{src:"https://www.nefront.com/images/exhibi.jpg",alt:"展示会",className:"imgs"}),(0,i.jsx)(v.Z,{children:"展示会"}),(0,i.jsx)("br",{}),"たくさんのブースがあって迷いがちな展示会会場。今いる場所を特定し、目的地までのスムーズな案内を実現します！",(0,i.jsx)("br",{})]})})]})]}),(0,i.jsx)("div",{id:"news"}),(0,i.jsx)("div",{style:{width:"100%",height:"60px"}}),(0,i.jsxs)(f.Z,{delay:.4,children:[(0,i.jsx)(x.X,{as:"h1",variant:"section-title",children:"News"}),(0,i.jsxs)(N,{children:[(0,i.jsx)(g.Z,{isHome:!0,post:s}),(0,i.jsx)(m.Z,{title:"茨城県学生ビジネスプランコンテスト 2022 でサザコーヒー賞と常陽銀行賞を受賞しました",date:"2022/11/27",link:"https://www.scc.ibaraki.ac.jp/contest2022final/"}),(0,i.jsx)(m.Z,{title:"技育展 2022 に登壇しました",date:"2022/9/10",link:"https://talent.supporterz.jp/geekten/2022/exhibition.html#theme4"})]})]}),(0,i.jsx)("div",{id:"members"}),(0,i.jsx)("div",{style:{width:"100%",height:"60px"}}),(0,i.jsxs)(f.Z,{delay:.5,children:[(0,i.jsx)(x.X,{as:"h1",variant:"section-title",children:"Members"}),(0,i.jsxs)(d.M,{columns:1,gap:6,children:[(0,i.jsxs)(j.G,{title:"今村翔太",nefposition:"代表取締役 CEO",thumbnail:"https://www.nefront.com/images/imamura.jpg",children:[(0,i.jsx)("br",{}),"筑波大学情報科学類卒業後、東京大学大学院へ進学。",(0,i.jsx)("br",{}),"屋内ARクラウドの開発・事業化の他、AR/VRヘッドマウントディスプレイ向け視線インタフェースの研究も行っている。",(0,i.jsx)("br",{}),"じげんグループの長期インターンにて、PMとして新規事業の立ち上げ等を担った後、イベント募集を起点としたSNSの開発・運営を経て、Nefrontの立ち上げへ。",(0,i.jsx)("br",{})]}),(0,i.jsxs)(j.G,{title:"逸見一喜",nefposition:"執行役員 COO",thumbnail:"https://www.nefront.com/images/hemmi.jpg",children:[(0,i.jsx)("br",{}),"国立東京高専情報工学科卒業後、同専攻科に進学。",(0,i.jsx)("br",{}),"その後は筑波大学大学院で経営工学を専攻しつつ、産業技術総合研究所人工知能研究センターのリサーチアシスタントとしてAutoML（機械学習の自動化）を研究している。",(0,i.jsx)("br",{}),"新しい技術を触るのがとにかく大好きな生粋のアイデアマン。",(0,i.jsx)("br",{}),"個人サイト："," ",(0,i.jsx)("a",{href:"https://itigo11111.com/",target:"_blank",rel:"noopener noreferrer",className:"sim",children:"itigo11111.com"}),(0,i.jsx)("br",{})]}),(0,i.jsxs)(j.G,{title:"秋山馨",nefposition:"執行役員 CTO",thumbnail:"https://www.nefront.com/images/akiyama.jpg",children:[(0,i.jsx)("br",{}),"私立海城高等学校在学中に競技プログラミングに出会いプログラミングの道に入る。",(0,i.jsx)("br",{}),"その後、筑波大学情報科学類へ進学し、株式会社AVILENの業務委託ソフトウェアエンジニアとしてAI系の事業やAutoMLツールのバックエンド実装に関わったり、個人で文章を打ち込むとそれに合わせた効果音を生成するモデルの研究開発も行っていた。現在、株式会社クックパッドでSRE業務をしている。",(0,i.jsx)("br",{}),"OSからWebフロントエンドまで、何でも書く。",(0,i.jsx)("br",{}),"個人サイト："," ",(0,i.jsx)("a",{href:"https://lapla.dev/",target:"_blank",rel:"noopener noreferrer",className:"sim",children:"lapla.dev"}),(0,i.jsx)("br",{})]}),(0,i.jsxs)(j.G,{title:"渡邉蒼太",nefposition:"執行役員 VP of Engineering",thumbnail:"https://www.nefront.com/images/watanabe.jpg",children:[(0,i.jsx)("br",{}),"静岡県立富士高校在学中に電子工作を趣味で行いはじめる。",(0,i.jsx)("br",{}),"その後、筑波大学情報科学類へ進学し、スマートフォンアプリのフロントエンド開発やロボットコンテストでソフトウェア開発を担当。",(0,i.jsx)("br",{}),"株式会社Techouseの開発インターンでRailsでのバックエンド開発も務める。",(0,i.jsx)("br",{})]})]})]}),(0,i.jsx)("div",{id:"company"}),(0,i.jsx)("div",{style:{width:"100%",height:"60px"}}),(0,i.jsxs)(f.Z,{delay:.6,children:[(0,i.jsx)(x.X,{as:"h1",variant:"section-title",children:"Company"}),(0,i.jsxs)(o.xu,{className:"table",children:[(0,i.jsx)("br",{}),"・会社名：株式会社Nefront",(0,i.jsx)("br",{}),"・住所： 東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C",(0,i.jsx)("br",{}),"・代表者氏名：今村翔太",(0,i.jsx)("br",{}),"・資本金：81万円（資本準備金を含む）",(0,i.jsx)("br",{}),"・設立年月：2021年6月",(0,i.jsx)("br",{})]})]}),(0,i.jsx)("div",{id:"contact"}),(0,i.jsx)("div",{style:{width:"100%",height:"60px"}}),(0,i.jsxs)(f.Z,{delay:.7,children:[(0,i.jsx)(x.X,{as:"h1",variant:"section-title",children:"Contact"}),(0,i.jsx)(o.xu,{className:"table",children:(0,i.jsx)("a",{className:"contactform",href:"https://forms.gle/HJXsrsk5myVrmEqC6",target:"_blank",rel:"noreferrer noopener",children:"お問い合わせはこちら"})})]})]})})}}},function(e){e.O(0,[266,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);