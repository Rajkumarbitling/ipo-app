'use client'
import { Container, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, tableHeadClasses, TableRow } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#f5f5f5',
      color: '#98979c',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
  
export default function IpoList({ data }) {
  return (
    <Container disableGutters>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Company / Issue Date</StyledTableCell>
              <StyledTableCell align="center">Issue Size</StyledTableCell>
              <StyledTableCell align="center">Price Range</StyledTableCell>
              <StyledTableCell align="center">Min Invest/Qty</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.company}>
                <TableCell>
                  <Link href={`/ipo/${row.id}`}>
                      <div className='flex align-middle'>
                          <Image className='round-image  mx-2' src={'https://avatar.iran.liara.run/public'} priority width={50} height={50} alt='brand-logo' />
                          <div>
                              <div className='font-bold text-lg'>{row.company}</div>
                              <span className='text-xs text-textGray'>{row?.details?.["Issue dates"]}</span>
                          </div>
                      </div>
                  </Link>
                </TableCell>
                <TableCell align="center" className='font-bold text-lg'>{row?.details?.["Issue size"]}</TableCell>
                <TableCell align="center" className='font-bold text-lg'>{row?.details?.["Price range"]}</TableCell>
                <TableCell align="center" className='font-bold text-lg'>
                  <div>
                      <div className='font-bold text-lg'>{row?.details?.["Minimum amount"]}</div>
                      <span className='text-xs text-textGray font-normal'>{row?.details?.["Lot size"]}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
