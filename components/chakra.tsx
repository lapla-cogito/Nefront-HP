import theme from 'lib/theme';
import { ChakraProvider } from '@chakra-ui/react';

type Props = {
    children: any;
};

export default function Chakra({ children }: Props) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
