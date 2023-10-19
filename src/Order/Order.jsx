import React, { useState } from 'react'
import './Order.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
const Order = () => {

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function createData(name, orderNum, qty, price, date) {
        return { name, orderNum, qty, price, date };
    }

    const rows = [
        createData('Ms.Olinda Kallirrhoe', 159, 6, 24, "2023-09-20"),
        createData('Mr.Demyan Vissarion', 237, 9, 37, "2023-09-21"),
        createData('Mr.Urban Ball Zevuv', 262, 16, 24, "2023-09-22"),
        createData('Mrs.Jaroslava Indrani', 305, 3.7, 67, "2023-09-25"),
        createData('Mrs.Sibongile Zackary', 356, 16, 49, "2023-09-26"),
        createData('Ms.Esmee Zorione', 159, 6, 24, "2023-09-27"),
        createData('Mr.Chatzkel Mikula', 237, 9, 37, "2023-09-28"),
        createData('Mr.Félicien Gadisa', 262, 16, 24, "2023-09-29"),
        createData('Ms.Alle Widald', 305, 3.7, 67, "2023-10-10"),
        createData('Ms.Snezhana Hjørdis', 356, 16, 49, "2023-10-12"),
        createData('Mr.Iovianus Izabelė', 159, 6, 24, "2023-10-13"),
        createData('Mr.Abner Maj', 237, 9, 37, "2023-10-19"),
        createData('Mrs.Anil Svana', 262, 16, 24, "2023-10-23"),
        createData('Mrs.Aimee Shavkat', 305, 3.7, 67, "2023-10-25"),
        createData('Mr.Kamryn Uinseann', 356, 16, 49, "2023-10-26"),

    ];

    return (
        <div className='containerMain'>
            <div className="wrapper-order">
                <h1>Order</h1>
                <div className="box">
                    <TableContainer component={Paper} className='table'>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table"  >
                            <TableHead style={{ backgroundColor: "#459a7d", }}>
                                <TableRow >
                                    <TableCell style={{ color: "white" }}>Name</TableCell>
                                    <TableCell style={{ color: "white" }} align="right">Order</TableCell>
                                    <TableCell style={{ color: "white" }} align="right">Qty</TableCell>
                                    <TableCell style={{ color: "white" }} align="right">Price</TableCell>
                                    <TableCell style={{ color: "white" }} align="center">Date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, e) => (
                                    <TableRow
                                        key={e}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" >
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">00{row.orderNum}</TableCell>
                                        <TableCell align="right">{row.qty}</TableCell>
                                        <TableCell align="right">${row.price}</TableCell>
                                        <TableCell align="center">{row.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, 50]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage} />

                </div>
            </div>
        </div>
    )
}

export default Order