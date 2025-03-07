import '../styles/globals.scss';
import classnames from 'classnames';
import { cocomat, micraDi } from '@/styles/fonts';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html className={classnames(cocomat.variable, micraDi.variable)} lang='ru'>
    <body>
      {children}
    </body>
  </html>
);

export default RootLayout;
