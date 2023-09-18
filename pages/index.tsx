import { getNewPosts } from 'lib/posts';
import dynamic from 'next/dynamic';
import React from 'react';
import ReactGA from 'react-ga4';
import { Post } from 'types/posts';
import { Box, Container, Heading, SimpleGrid } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { GridItem } from '@/grid-item';
import Layout from '@/layouts/article';
import NewsHeading from '@/newsheading';
import Paragraph from '@/paragraph';
import PostsList from '@/plist';
import Section from '@/section';
import Subsection from '@/subsection';
import TypeNefront from '@/typeNefront';

const imamuu = 'https://www.nefront.com/images/imamura.jpg';
const hemmi = 'https://www.nefront.com/images/hemmi.jpg';
const lapla = 'https://www.nefront.com/images/akiyama.jpg';
const asuto = 'https://www.nefront.com/images/watanabe.jpg';

const dir = '/Nefront-HP';

ReactGA.initialize('G-FBQ0WYNGEZ');
ReactGA.send('pageview');

const Particles = dynamic(() => import('components/particles'), {
    ssr: false,
});

type Props = {
    newPosts: Post;
};

const NewsDiv = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    padding: 50px 0;
`;

const Home = ({ newPosts }: Props) => {
    return (
        <Layout>
            <Container maxW="99999999px">
                <div id="top" />
                <div id="parent">
                    <Particles />
                    <TypeNefront />
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />

                <div id="about" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.1}>
                    <Heading as="h1" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        <span className="exagsentence">
                            現実空間に情報を重ね合わせる拡張現実（AR）のアプリケーションを、今までにない場所や使い方で提供できるソリューションを開発しています。
                        </span>
                    </Paragraph>
                </Section>

                <div id="product" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />

                <Section delay={0.2}>
                    <Heading as="h1" variant="section-title">
                        Product
                    </Heading>
                    <Paragraph>
                        <span className="exagsentence" style={{ margin: '0 0 20px 0' }}>
                            - 屋内ARクラウドサービス IndooAR -
                        </span>
                        <span className="exagsentence">
                            屋内空間に情報を紐づけて、誘導アプリケーションやARコンテンツを提供します。
                        </span>
                    </Paragraph>
                    <div className="flex">
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="/images/vps.svg"
                                    style={{ display: 'block', margin: 'auto' }}
                                    alt="VPS"
                                    className="svgs"
                                />
                                <Subsection>屋内での位置特定</Subsection>
                                <br />
                                スマートフォンのみでGPSの使えない屋内空間での位置特定を行うVPS（画像位置認識システム）を提供します。
                            </Paragraph>
                        </div>
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="/images/reg.svg"
                                    style={{ display: 'block', margin: 'auto' }}
                                    alt="Register items"
                                    className="svgs"
                                />
                                <Subsection>アイテム位置情報の登録や連携</Subsection>
                                <br />
                                屋内空間に商品やARコンテンツの位置を設定できます。API連携により、リアルタイムの更新も可能です。
                            </Paragraph>
                        </div>
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="/images/navigate.svg"
                                    style={{ display: 'block', margin: 'auto' }}
                                    alt="Navigation"
                                    className="svgs"
                                />
                                <Subsection>誘導やARコンテンツの表示</Subsection>
                                <br />
                                特定した位置やアイテムの登録位置に基づき誘導を行います。また、ARコンテンツの表示も行えます。
                            </Paragraph>
                        </div>
                    </div>
                </Section>

                <div id="usecase" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />

                <Section delay={0.3}>
                    <Heading as="h1" variant="section-title">
                        Usecase
                    </Heading>

                    <div className="flex">
                        <div className="flexdiv">
                            <Paragraph>
                                <img src="/images/super.jpg" alt="小売店" className="imgs" />
                                <Subsection>小売店</Subsection>
                                <br />
                                欲しい商品への誘導や売り場に合わせたARプロモーションを表示。キャラクターと買い物も！？
                                <br />
                            </Paragraph>
                        </div>

                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="/images/underground.jpg"
                                    alt="都市施設"
                                    className="imgs"
                                />
                                <Subsection>都市施設</Subsection>
                                <br />
                                施設内の誘導やおすすめ情報の提示が可能です。ショップやレストランのクーポン、ARコンテンツによる体験型展示も！
                                <br />
                            </Paragraph>
                        </div>

                        <div className="flexdiv">
                            <Paragraph>
                                <img src="/images/repos.jpg" alt="倉庫" className="imgs" />
                                <Subsection>倉庫</Subsection>
                                <br />
                                商品や部品の棚入れ、ピッキングを効率化できます。初心者でも作業にかかる時間やミスを削減へ！
                                <br />
                            </Paragraph>
                        </div>

                        <div className="flexdiv">
                            <Paragraph>
                                <img src="/images/exhibi.jpg" alt="展示会" className="imgs" />
                                <Subsection>展示会</Subsection>
                                <br />
                                たくさんのブースがあって迷いがちな展示会会場。今いる場所を特定し、目的地までのスムーズな案内を実現します！
                                <br />
                            </Paragraph>
                        </div>
                    </div>
                </Section>

                <div id="news" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.4}>
                    <Heading as="h1" variant="section-title">
                        News
                    </Heading>
                    <NewsDiv>
                        <PostsList isHome post={newPosts}></PostsList>
                        <NewsHeading
                            title="茨城県学生ビジネスプランコンテスト 2022 でサザコーヒー賞と常陽銀行賞を受賞しました"
                            date="2022/11/27"
                            link="https://www.scc.ibaraki.ac.jp/contest2022final/"
                        />
                        <NewsHeading
                            title="技育展 2022 に登壇しました"
                            date="2022/9/10"
                            link="https://talent.supporterz.jp/geekten/2022/exhibition.html#theme4"
                        />
                    </NewsDiv>
                </Section>

                <div id="members" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.5}>
                    <Heading as="h1" variant="section-title">
                        Members
                    </Heading>
                    <SimpleGrid columns={1} gap={6}>
                        <GridItem title="今村翔太" nefposition="代表取締役 CEO" thumbnail={imamuu}>
                            <br />
                            筑波大学情報科学類卒業後、東京大学大学院へ進学。
                            <br />
                            屋内ARクラウドの開発・事業化の他、AR/VRヘッドマウントディスプレイ向け視線インタフェースの研究も行っている。
                            <br />
                            じげんグループの長期インターンにて、PMとして新規事業の立ち上げ等を担った後、イベント募集を起点としたSNSの開発・運営を経て、Nefrontの立ち上げへ。
                            <br />
                        </GridItem>
                        <GridItem title="逸見一喜" nefposition="執行役員 COO" thumbnail={hemmi}>
                            <br />
                            国立東京高専情報工学科卒業後、同専攻科に進学。
                            <br />
                            その後は筑波大学大学院で経営工学を専攻しつつ、産業技術総合研究所人工知能研究センターのリサーチアシスタントとしてAutoML（機械学習の自動化）を研究している。
                            <br />
                            新しい技術を触るのがとにかく大好きな生粋のアイデアマン。
                            <br />
                            個人サイト：{' '}
                            <a
                                href="https://itigo11111.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sim"
                            >
                                itigo11111.com
                            </a>
                            <br />
                        </GridItem>
                        <GridItem title="秋山馨" nefposition="執行役員 CTO" thumbnail={lapla}>
                            <br />
                            私立海城高等学校在学中に競技プログラミングに出会いプログラミングの道に入る。
                            <br />
                            その後、筑波大学情報科学類へ進学し、株式会社AVILENの業務委託ソフトウェアエンジニアとしてAI系の事業やAutoMLツールのバックエンド実装に関わったり、個人で文章を打ち込むとそれに合わせた効果音を生成するモデルの研究開発も行っていた。現在、株式会社クックパッドでSRE業務をしている。
                            <br />
                            OSからWebフロントエンドまで、何でも書く。
                            <br />
                            個人サイト：{' '}
                            <a
                                href="https://lapla.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sim"
                            >
                                lapla.dev
                            </a>
                            <br />
                        </GridItem>
                        <GridItem
                            title="渡邉蒼太"
                            nefposition="執行役員 VP of Engineering"
                            thumbnail={asuto}
                        >
                            <br />
                            静岡県立富士高校在学中に電子工作を趣味で行いはじめる。
                            <br />
                            その後、筑波大学情報科学類へ進学し、スマートフォンアプリのフロントエンド開発やロボットコンテストでソフトウェア開発を担当。
                            <br />
                            株式会社Techouseの開発インターンでRailsでのバックエンド開発も務める。
                            <br />
                        </GridItem>
                    </SimpleGrid>
                </Section>

                <div id="company" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.6}>
                    <Heading as="h1" variant="section-title">
                        Company
                    </Heading>
                    <Box className="table">
                        <br />
                        ・会社名：株式会社Nefront
                        <br />
                        ・住所： 東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル2F−C
                        <br />
                        ・代表者氏名：今村翔太
                        <br />
                        ・資本金：81万円（資本準備金を含む）
                        <br />
                        ・設立年月：2021年6月
                        <br />
                    </Box>
                </Section>

                <div id="contact" />
                <div
                    style={{
                        width: '100%',
                        height: '60px',
                    }}
                />
                <Section delay={0.7}>
                    <Heading as="h1" variant="section-title">
                        Contact
                    </Heading>
                    <Box className="table">
                        <a
                            className="contactform"
                            href="https://forms.gle/HJXsrsk5myVrmEqC6"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            お問い合わせはこちら
                        </a>
                    </Box>
                </Section>
            </Container>
        </Layout>
    );
};

export default Home;

export const getStaticProps = async () => {
    const newPosts = getNewPosts(['title', 'date', 'slug']);
    return {
        props: { newPosts },
    };
};
