import { Font } from '@react-pdf/renderer';
import robotoRegular from './font/roboto_regular.ttf';
import robotoBold from './font/roboto_bold.ttf';

Font.register({
  family: 'Roboto',
  fonts: [{ src: robotoRegular }, { src: robotoBold, fontWeight: 'bold' }],
});
