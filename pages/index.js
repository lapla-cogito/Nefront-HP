import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  LinkOverlay,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from "react-icons/io5";
import Layout from "../components/layouts/article";
import { GridItem } from "../components/grid-item";
import Section from "../components/section";
import Subsection from "../components/subsection";
import Paragraph from "../components/paragraph";
import News from "../components/news";
import NewsHeading from "../components/newsheading";
import TypeNefront from "../components/typeNefront";
import Image from "next/image";
import dynamic from "next/dynamic";
import ReactGA from "react-ga4";

import Particles from "react-particles-js";

const imamuu = "https://www.nefront.com/images/imamura.jpg";
const hemmi = "https://www.nefront.com/images/hemmi.jpg";
const lapla = "https://www.nefront.com/images/akiyama.jpg";
const asuto = "https://www.nefront.com/images/watanabe.jpg";

const dir = "/Nefront-HP";

ReactGA.initialize("G-FBQ0WYNGEZ");
ReactGA.send("pageview");

const Home = () => (
  <Layout>
    <Container maxW="99999999px">
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            color: "#000000",
            line_linked: {
              color: "#FFF",
              shadow: {
                enable: false,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div
        id="hoge"
        style={{
          width: "100%",
          height: "60px",
        }}
      ></div>

      <TypeNefront />

      <div id="about"></div>
      <div
        style={{
          width: "100%",
          height: "60px",
        }}
      ></div>
      <Section delay={0.1}>
        <Heading as="h1" variant="section-title">
          About
        </Heading>
        <Paragraph>
          現実空間に情報を重ね合わせる拡張現実（AR）のアプリケーションを、今までにない場所や使い方で提供できるソリューションを開発しています。
        </Paragraph>
      </Section>
      <div id="product"></div>
      <div
        style={{
          width: "100%",
          height: "60px",
        }}
      ></div>
      <Section delay={0.2}>
        <Heading as="h1" variant="section-title">
          Product
        </Heading>
        <Paragraph>
          屋内空間に情報を紐づけて、誘導アプリケーションやARコンテンツを提供します。
        </Paragraph>
        <Paragraph>
          <Subsection>屋内での位置特定</Subsection>
          <img
            src="images/vps.svg"
            style={{ display: "block", margin: "auto" }}
            alt="VPS"
            width="150"
          />
          スマートフォンのみでGPSの使えない屋内空間での位置特定を行うVPS（画像位置認識システム）を提供します。
        </Paragraph>
        <Paragraph>
          <Subsection>アイテム位置情報の登録や連携</Subsection>
          <img
            src="images/reg.svg"
            style={{ display: "block", margin: "auto" }}
            alt="Register items"
            width="150"
          />
          屋内空間に商品やARコンテンツの位置を設定できます。API連携でリアルタイムの更新も可能です。
        </Paragraph>
        <Paragraph>
          <Subsection>誘導やARコンテンツの表示</Subsection>
          <img
            src="images/navigate.svg"
            style={{ display: "block", margin: "auto" }}
            alt="Navigation"
            width="150"
          />
          特定した位置やアイテムの登録位置に基づき誘導を行います。また、ARコンテンツの表示も行えます。
        </Paragraph>
      </Section>
      <div id="usecase"></div>
      <div
        style={{
          width: "100%",
          height: "60px",
        }}
      ></div>
      <Section delay={0.3}>
        <Heading as="h1" variant="section-title">
          Usecase
        </Heading>
        <Paragraph>
          <Subsection>小売店</Subsection>
          <img
            src="https://laplaciancpp.github.io/images/super.jpg"
            alt="小売店"
            align="center"
            className="usecases"
            height="300"
            width="auto"
          />
          <br />
          欲しい商品への誘導や売り場に合わせたARプロモーションを表示。キャラクターと買い物も！？
          <br />
        </Paragraph>
        <div
          style={{
            width: "100%",
            height: "60px",
          }}
        ></div>
        <Paragraph>
          <Subsection>都市施設</Subsection>
          <img
            src="https://laplaciancpp.github.io/images/underground.jpg"
            alt="都市施設"
            align="center"
            className="usecases"
            height="300"
            width="auto"
          />
          <br />
          施設内の誘導やおすすめ情報の提示が可能です。ショップやレストランのクーポン、ARコンテンツによる体験型展示も！
          <br />
        </Paragraph>
        <div
          style={{
            width: "100%",
            height: "60px",
          }}
        ></div>
        <Paragraph>
          <Subsection>倉庫</Subsection>
          <img
            src="https://laplaciancpp.github.io/images/repos.jpg"
            alt="倉庫"
            align="center"
            className="usecases"
            height="300"
            width="auto"
          />
          <br />
          商品や部品の棚入れ、ピッキングを効率化できます。初心者でも作業にかかる時間やミスを削減へ！
          <br />
        </Paragraph>
      </Section>

      <div id="news"></div>
      <div
        style={{
          width: "100%",
          height: "60px",
        }}
      ></div>
      <Section delay={0.4}>
        <Heading as="h1" variant="section-title">
          News
        </Heading>
        <News>
          <NewsHeading
            title="令和4年度学生ビジネスプランコンテストでアイデア賞を受賞しました"
            date="2022年12月20日"
          >
            <Link
              isExternal={true}
              href="http://www.gakusei-sc.or.jp/pdf/r3bis_4_1.pdf?221223"
            >
              http://www.gakusei-sc.or.jp/pdf/r3bis_4_1.pdf?221223
            </Link>
          </NewsHeading>

          <NewsHeading
            title="キャンパスベンチャーグランプリ東京大会で日刊工業新聞賞を受賞しました"
            date="2022年12月1日"
          >
            <Link
              isExternal={true}
              href="https://cvg.nikkan.co.jp/tokyo_backnumber/2022/"
            >
              https://cvg.nikkan.co.jp/tokyo_backnumber/2022/
            </Link>
          </NewsHeading>

          <NewsHeading
            title="総務省主催の2022年度異能vationジェネレーションアワード部門にノミネートされました"
            date="2022年11月30日"
          >
            <Link
              isExternal={true}
              href="https://www.inno.go.jp/result/2022/generation/nominate/"
            >
              https://www.inno.go.jp/result/2022/generation/nominate/
            </Link>
          </NewsHeading>

          <NewsHeading
            title="茨城県学生ビジネスプランコンテストでサザコーヒー賞と常陽銀行賞を受賞しました"
            date="2022年11月27日"
          >
            <Link
              isExternal={true}
              href="https://www.scc.ibaraki.ac.jp/contest2022final/"
            >
              https://www.scc.ibaraki.ac.jp/contest2022final/
            </Link>
          </NewsHeading>

          <NewsHeading title="技育展2022に登壇しました" date="2022年9月10日">
            <Link
              isExternal={true}
              href="https://talent.supporterz.jp/geekten/2022/exhibition.html#theme4"
            >
              https://talent.supporterz.jp/geekten/2022/exhibition.html#theme4
            </Link>
          </NewsHeading>
        </News>
      </Section>

      <div id="members"></div>
      <div
        style={{
          width: "100%",
          height: "60px",
        }}
      ></div>
      <Section delay={0.5}>
        <Heading as="h1" variant="section-title">
          Members
        </Heading>
        <SimpleGrid columns={1} gap={6}>
          <GridItem
            title="今村翔太"
            nefposition="代表取締役"
            thumbnail={imamuu}
          >
            <br />
            筑波大学情報科学類4年
            <br />
            じげんグループの長期インターンにて、PMとして新規事業の立ち上げ等を担った。その後、イベント募集を起点としたSNSの開発・運営を経て、Nefrontの立ち上げへ。
            <br />
          </GridItem>
          <GridItem
            title="逸見一喜"
            nefposition="機械学習エンジニア"
            thumbnail={hemmi}
          >
            <br />
            筑波大学大学院 博士前期課程2年
            <br />
            国立東京高専情報工学科卒業後、同専攻科に進学。
            <br />
            その後、筑波大学大学院で経営工学を専攻しつつ、産業技術総合研究所人工知能研究センターのリサーチアシスタントとしてAutoML（機械学習の自動化）を研究している。
            <br />
          </GridItem>
          <GridItem
            title="秋山馨"
            nefposition="インフラ・機械学習エンジニア"
            thumbnail={lapla}
          >
            <br />
            筑波大学情報科学類2年
            <br />
            私立海城高等学校在学中に競技プログラミングに出会いプログラミングの道に入る。筑波大学進学後は株式会社AVILENの長期インターンとしてAI系の事業やAutoMLツールのバックエンド実装に関わったり、文章を打ち込むとそれに合わせた効果音を生成するモデルの研究開発を行っている。
            <br />
          </GridItem>
          <GridItem
            title="渡邉蒼太"
            nefposition="フロントエンドエンジニア"
            thumbnail={asuto}
          >
            <br />
            筑波大学情報科学類2年
            <br />
            静岡県立富士高校では電子工作を趣味で行い、筑波大学進学後はスマートフォンアプリのフロントエンド開発やロボットコンテストのソフトウェア開発を担当。
            <br />
            株式会社Techouseの開発インターンでRailsでのバックエンド開発も務める。
            <br />
          </GridItem>
        </SimpleGrid>
      </Section>

      <div id="contact"></div>
      <div
        style={{
          width: "100%",
          height: "60px",
        }}
      ></div>
      <Section delay={0.6}>
        <Heading as="h1" variant="section-title">
          Contact
        </Heading>
        <Box textAlign="center">
          <Button
            colorScheme="blue"
            as="a"
            href="https://forms.gle/HJXsrsk5myVrmEqC6"
            target="_blank"
            rel="noopener"
            m="auto"
          >
            お問い合わせはこちら
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
);

export default Home;
