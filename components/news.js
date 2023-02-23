import styled from "@emotion/styled";

const NewsDiv = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 50px 0;
  // background: #FFF7EA;
`;

const News = ({ children }) => <NewsDiv>{children}</NewsDiv>;

export default News;
