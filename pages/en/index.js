import { Container, Heading, Box, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import { GridItem } from '../components/grid-item';
import Section from '../components/section';
import Subsection from '../components/subsection';
import Paragraph from '../components/paragraph';
import News from '../components/news';
import NewsHeading from '../components/newsheading';
import TypeNefront from '../components/typeNefront';
import ReactGA from 'react-ga4';
import dynamic from 'next/dynamic';

const imamuu = 'https://www.nefront.com/images/imamura.jpg';
const hemmi = 'https://www.nefront.com/images/hemmi.jpg';
const lapla = 'https://www.nefront.com/images/akiyama.jpg';
const asuto = 'https://www.nefront.com/images/watanabe.jpg';

const dir = '/Nefront-HP';

ReactGA.initialize('G-FBQ0WYNGEZ');
ReactGA.send('pageview');

const Particles = dynamic(() => import('../components/particles'), {
    ssr: false,
});

const Home = () => {
    return (
        <Layout>
            <Container maxW="99999999px">
                <div id="top" />
                <div id="parent">
                    <div id="hoge" />
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
                            Our solutions make it easy to provide Augmented Reality (AR)
                            applications that superimpose information on real space in places and
                            ways that have never been seen before.
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
                            - Indoor AR Cloud Service (IndooAR) -
                        </span>
                        <span className="exagsentence">
                            IndooAR provides guidance applications and AR content by linking
                            information to indoor space.
                        </span>
                    </Paragraph>
                    <div className="flex">
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="images/vps.svg"
                                    style={{ display: 'block', margin: 'auto' }}
                                    alt="VPS"
                                    className="svgs"
                                />
                                <Subsection>Indoor locating</Subsection>
                                <br />
                                Provides a VPS (Visual Positioning System) to locate in indoor
                                spaces where GPS cannot be used, using only a smartphone.
                            </Paragraph>
                        </div>
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="images/reg.svg"
                                    style={{ display: 'block', margin: 'auto' }}
                                    alt="Register items"
                                    className="svgs"
                                />
                                <Subsection>
                                    Integrating item location info with real space
                                </Subsection>
                                <br />
                                Allows the product’s location and AR contents to be set in indoor
                                spaces, with real-time updates through API.
                            </Paragraph>
                        </div>
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="images/navigate.svg"
                                    style={{ display: 'block', margin: 'auto' }}
                                    alt="Navigation"
                                    className="svgs"
                                />
                                <Subsection>Guidance and display of AR content</Subsection>
                                <br />
                                Guidances are provided based on the identified location and the
                                registered location of the item. AR contents can be displayed only
                                with a setting on the console.
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
                        Usecases
                    </Heading>

                    <div className="flex">
                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="https://www.nefront.com/images/super.jpg"
                                    alt="Retail stores"
                                    className="imgs"
                                />
                                <Subsection>Retail stores</Subsection>
                                <br />
                                Guides users to the products they want and displays AR promotions
                                tailored to the sales floor. Even shopping with characters!
                                <br />
                            </Paragraph>
                        </div>

                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="https://www.nefront.com/images/underground.jpg"
                                    alt="City Facilities"
                                    className="imgs"
                                />
                                <Subsection>City Facilities</Subsection>
                                <br />
                                Guides through the facility and presents recommended information.
                                Coupons and hands-on Exhibits in AR for shops and restaurants!
                                <br />
                            </Paragraph>
                        </div>

                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="https://www.nefront.com/images/repos.jpg"
                                    alt="Warehouses"
                                    className="imgs"
                                />
                                <Subsection>Warehouses</Subsection>
                                <br />
                                Picking products and parts can be made more efficient using IndooAR.
                                Even beginners can reduce time and errors!
                                <br />
                            </Paragraph>
                        </div>

                        <div className="flexdiv">
                            <Paragraph>
                                <img
                                    src="https://www.nefront.com/images/exhibi.jpg"
                                    alt="Exhibitions"
                                    className="imgs"
                                />
                                <Subsection>Exhibitions</Subsection>
                                <br />
                                It&apos;s easy to get lost in many booths at an exhibition. Identify
                                where you are and get smooth guidance to your destination!
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
                    <News>
                        <NewsHeading
                            title="Idea Prize in the 2022 Student Business Plan Contest (Japan)"
                            date="2022/12/20"
                            link="http://www.gakusei-sc.or.jp/pdf/r3bis_4_1.pdf?221223"
                        ></NewsHeading>

                        <NewsHeading
                            title="Nikkan Kogyo Shimbun Award at the 19th Campus Venture Grand Prix in Tokyo"
                            date="2022/12/1"
                            link="https://cvg.nikkan.co.jp/tokyo_backnumber/2022/"
                        ></NewsHeading>

                        <NewsHeading
                            title="Nominated for the 2022 Ino-Vation Generation Award category by the Japanese Ministry of Internal Affairs and Communications."
                            date="2022/11/30"
                            link="https://www.inno.go.jp/result/2022/generation/nominate/"
                        ></NewsHeading>

                        <NewsHeading
                            title="Saza Coffee Award and Joyo Bank Award at the Ibaraki Prefecture Student Business Plan Contest 2022"
                            date="2022/11/27"
                            link="https://www.scc.ibaraki.ac.jp/contest2022final/"
                        ></NewsHeading>

                        <NewsHeading
                            title="Speaker at the Technology and Education Exhibition 2022"
                            date="2022/9/10"
                            link="https://talent.supporterz.jp/geekten/2022/exhibition.html#theme4"
                        ></NewsHeading>
                    </News>
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
                        <GridItem
                            title="Shota Imamura"
                            nefposition="Representative Director, CEO"
                            thumbnail={imamuu}
                        >
                            <br />
                            After graduating from the University of Tsukuba with a bachelor&apos;s degree
                            in Information Science, he entered the graduate school of the University
                            of Tokyo.
                            <br />
                            In addition to developing and commercializing IndooAR, he is also
                            researching eye gaze interfaces for AR/VR head-mounted displays.
                            <br />
                            As a long-term intern at the Jigen Group, he was responsible for
                            launching new businesses as a PM. After developing and managing an event
                            recruitment-based SNS, he went on to launch Nefront.
                            <br />
                        </GridItem>
                        <GridItem
                            title="Kazuki Hemmi"
                            nefposition="Executive Officer, COO"
                            thumbnail={hemmi}
                        >
                            <br />
                            Graduated from Tokyo National College of Technology with a associate&apos;s
                            degree in Information Technology, he entered the department of Computer
                            Science and Engineering of the college.
                            <br />
                            Since then, he&apos;s been studying AutoML (Automated Machine Learning) as a
                            research assistant at the Artificial Intelligence Research Center of the
                            National Institute of Advanced Industrial Science and Technology (AIST),
                            while studying management engineering at the University of Tsukuba
                            Graduate School.
                            <br />
                            A genuine idea man who just loves to touch new technology.
                            <br />
                        </GridItem>
                        <GridItem
                            title="Kei Akiyama"
                            nefposition="Executive Officer, CTO"
                            thumbnail={lapla}
                        >
                            <br />
                            While a student at private Kaijo High School, he encountered competitive
                            programming and started his programming career.
                            <br />
                            After that, he entered the College of Information Science at the
                            University of Tsukuba, and was involved in AI-related projects and
                            back-end implementation of AutoML tools as a contract software engineer
                            at AVILEN Corporation, as well as research and development of a model
                            that generates sound effects in response to typed text by individuals.
                            Currently, he is also working as an SRE at Cookpad Inc.
                            <br />
                            He programs from operating systems to web front.
                            <br />
                            Website：{' '}
                            <a href="https://lapla.dev/" target="_blank" rel="noopener noreferrer">
                                lapla.dev
                            </a>
                            <br />
                        </GridItem>
                        <GridItem
                            title="Sota Watanabe"
                            nefposition="Executive Officer, VP of Engineering"
                            thumbnail={asuto}
                        >
                            <br />
                            While a student at Fuji High School in Shizuoka Prefecture, he began
                            doing electronic work as a hobby.
                            <br />
                            He then went on to study at College of Information Science at the
                            University of Tsukuba, where he was in charge of front-end development
                            for a smartphone application and software development for a robotics
                            contest.
                            <br />
                            He was also a development intern student as a backend engineer using
                            Rails in Techhouse Inc.
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
                        Company Name: Nefront Inc.
                        <br />
                        Address: Shibuya Dougenzaka Tokyu Building 2F-C, 1-10-8, Shibuya Dogenzaka,
                        Tokyo, Japan
                        <br />
                        CEO: Shota Imamura
                        <br />
                        Founded: June 2021
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
                            Contact us here
                        </a>
                    </Box>
                </Section>
                <Particles />
            </Container>
        </Layout>
    );
};

export default Home;
