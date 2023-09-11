import { ChakraProvider } from '@chakra-ui/react';
import theme from '../lib/theme';

type Props = {
    children: any;
};

export default function Chakra({ children }: Props) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
