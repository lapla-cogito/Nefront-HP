import { motion } from 'framer-motion';
import React from 'react';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: (prop: any) => {
        return shouldForwardProp(prop) || prop === 'transition';
    },
});

type SectionProps = {
    children: any;
    delay?: number;
};

const Section = ({ children, delay = 0 }: SectionProps) => (
    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // @ts-ignore
        transition={{ duration: 0.8, delay }}
        mb={6}
    >
        {children}
    </StyledDiv>
);

export default Section;
