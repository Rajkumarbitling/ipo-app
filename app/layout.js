import { Container, ThemeProvider } from '@mui/material';
import './globals.css';
import { theme } from '@/themeConfig';
import Breadcrumb from '../components/Breadcrumb';

export const metadata = {
  title: 'IPO Tracker',
  description: 'Track IPOs easily',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        <main className='md:m-4'>
          <Container>
            <Breadcrumb />
            {children}    
          </Container>
        </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
