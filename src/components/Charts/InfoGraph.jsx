import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import { Box } from '@chakra-ui/react';

const InfoGraph = () => {
  return (
    <Box
      w={'100%'}
      marginX={4}
      justifyContent={'center'}
      display='flex'
      alignItems={'center'}
    >
      <TradingViewWidget
        symbol='BTCUSD'
        theme={Themes.DARK}
        locale='fr'
        autosize
        hide_side_toolbar={false}
      />
    </Box>
  );
};

export default InfoGraph;
