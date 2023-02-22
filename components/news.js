import styled from "@emotion/styled";

const NewsDiv = styled.div`
  overflow: auto;
  height: 300px;
  width: 100%;
`;

const News = ({ children }) => <NewsDiv>{children}</NewsDiv>;

export default News;
