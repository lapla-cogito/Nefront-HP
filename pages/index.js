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
import TypeNefront from "../components/typeNefront";
// import imageVideo from "../public/images/imageVideo.mp4";
// import nefrontlogo from "../public/images/nefrontlogo.jpg";
// import background from "../public/images/background.jpg";
// import particle from "../particles.min.js";
// import configjs from "../config.js";
import Image from "next/image";
import dynamic from "next/dynamic";

const imamura ="https://laplaciancpp.github.io/images/imamura.jpg";

const dir = "/Nefront-HP";

const Home = () => (
  <Layout>
    <Container>
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
          <Image
            src="https://laplaciancpp.github.io/images/vps.png"
            alt="VPS"
            placeholder="blur"
            loading="lazy"
            align="center"
          />
          スマートフォンのみでGPSの使えない屋内空間での位置特定を行うVPS（画像位置認識システム）を提供します。
        </Paragraph>
        <Paragraph>
          <Subsection>アイテム位置情報の登録や連携</Subsection>
          <Image
            src="https://laplaciancpp.github.io/images/reg.png"
            alt="register item"
            placeholder="blur"
            loading="lazy"
            align="center"
          />
          屋内空間に商品やARコンテンツの位置を設定できます。API連携でリアルタイムの更新も可能です。
        </Paragraph>
        <Paragraph>
          <Subsection>誘導やARコンテンツの表示</Subsection>
          <Image
            src="https://laplaciancpp.github.io/images/navigate.png"
            alt="navigation"
            placeholder="blur"
            loading="lazy"
            align="center"
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
          <Image
            src="https://laplaciancpp.github.io/images/mall.jpg"
            alt="小売店"
            placeholder="blur"
            loading="lazy"
            align="center"
            className="usecases"
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
          <Image
            src="https://laplaciancpp.github.io/images/underground.jpg"
            alt="都市施設"
            placeholder="blur"
            loading="lazy"
            align="center"
            className="usecases"
          />
          <br />
          施設内の誘導やおすすめ情報の提示。ショップやレストランのクーポン、ARコンテンツによる体験型展示も。
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
          <Image
            src="https://laplaciancpp.github.io/images/repos.jpg"
            alt="倉庫"
            placeholder="blur"
            loading="lazy"
            align="center"
            className="usecases"
          />
          <br />
          商品や部品の棚入れ、ピッキングを効率化。初心者でも作業にかかる時間やミスを削減へ。
          <br />
        </Paragraph>
      </Section>
      <div id="members"></div>
      <div
        style={{
          width: "100%",
          height: "60px",
        }}
      ></div>
      <Section delay={0.4}>
        <Heading as="h1" variant="section-title">
          Members
        </Heading>
        <SimpleGrid columns={1} gap={6}>
          <GridItem
            title="今村翔太"
            nefposition="代表取締役"
            thumbnail={imamura}
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
            thumbnail="https://laplaciancpp.github.io/images/hemmi.jpg"
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
            thumbnail="https://laplaciancpp.github.io/images/akiyama.jpg"
          >
            <br />
            筑波大学情報科学類2年
            <br />
          </GridItem>
          <GridItem
            title="渡邉蒼太"
            nefposition="フロントエンドエンジニア"
            thumbnail="https://laplaciancpp.github.io/images/watanabe.jpg"
          >
            <br />
            筑波大学情報科学類2年
            <br />
            静岡県立富士高校では電子工作を趣味で行い、筑波大学進学後はスマートフォンアプリのフロントエンド開発やロボットコンテストのソフトウェア開発を担当。
            <br />
            現在、株式会社Techouseの開発インターンでRailsでのバックエンド開発を務める。
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
      <Section delay={0.5}>
        <Heading as="h1" variant="section-title">
          Contact
        </Heading>
        <Box textAlign="center">
          <Button
            colorScheme="blue"
            as="a"
            href="https://forms.gle/HJXsrsk5myVrmEqC6"
            target="_blank"
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
