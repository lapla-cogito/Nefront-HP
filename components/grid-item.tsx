import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox } from '@chakra-ui/react';
import { Global } from '@emotion/react';

type Props = {
    children: any;
    title: string;
    nefposition: string;
    thumbnail: string;
};

export const GridItem = ({ children, title, nefposition, thumbnail }: any) => (
    <Box w="100%">
        <LinkBox>
            {/*@ts-ignore*/}
            <img src={thumbnail} alt={title} className="grid-item-thumbnail" align="center" />
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
