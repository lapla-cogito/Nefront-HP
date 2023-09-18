import { url } from 'lib/img';
import { Box, LinkBox, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';

type Props = {
    children: any;
    title: string;
    nefposition: string;
    thumbnail: string;
};

export const GridItem = ({ children, title, nefposition, thumbnail }: Props) => (
    <Box w="100%">
        <LinkBox>
            <img src={url(thumbnail)} alt={title} className="grid-item-thumbnail" />
            <Text fontSize={25} textAlign="center">
                {title}
            </Text>
            <Text fontSize={18} textAlign="center" color="gray">
                {nefposition}
            </Text>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
);

export const GridItemStyle = () => (
    <Global
        styles={`
      .grid-item-thumbnail {
        border-radius: 50%;
        width:  180px;
        height: 180px;
        margin:auto;
        display:flex;
      }
    `}
    />
);
