import styled from "@emotion/styled";

const NewsDiv = styled.div`
  overflow: auto;
  height: 300px;
`;

const News = ({ children }) => <NewsDiv>{children}</NewsDiv>;

export default News;
