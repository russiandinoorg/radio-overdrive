import '../styles/globals.scss';
import classnames from 'classnames';
import { cocomat, micraDi } from '@/styles/fonts';
import { YandexMetrika } from '@/components/YandexMetrika';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={classnames(cocomat.variable, micraDi.variable)} lang='ru'>
    <body>
      <YandexMetrika/>
      {children}
    </body>
  </html>
);

export default RootLayout;
