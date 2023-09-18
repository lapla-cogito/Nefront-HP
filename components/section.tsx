import { motion } from 'framer-motion';
import React from 'react';
import { ResponsiveValue, chakra, shouldForwardProp } from '@chakra-ui/react';

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
        transition={{ duration: 0.8, delay } as ResponsiveValue<any>}
        mb={6}
    >
        {children}
    </StyledDiv>
);

export default Section;
