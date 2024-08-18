'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@mui/material';
import { NavigateNext } from '@material-ui/icons';

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter((path) => path);

  return (
    <Breadcrumbs separator={<NavigateNext fontSize="small" />} aria-label="breadcrumb" className='py-5'>
        <Link underline="hover" color="inherit" href="/">
            Home
        </Link>
        {pathArray.map((path, index) => {
          const href = `/${pathArray.slice(0, index + 1).join('/')}`;
          return (
            <Link key={path} underline="hover" color="inherit" href={href}>
                {path}
            </Link>
          );
        })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
