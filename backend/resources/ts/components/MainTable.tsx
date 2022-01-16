import {
    createStyles,
    makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";
import React, { FC } from "react";
import { TableData } from "../interface";

const useStyles = makeStyles((theme) =>
    createStyles({
        table: {
            minWidth: 650,
        },
        tableHead: {
            backgroundColor: purple["A100"],
        },
    })
);

type Props = {
    headerList: string[];
    rows: TableData[];
};

const MainTable: FC<Props> = ({ headerList, rows }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        {headerList.map((item, idx) => (
                            <TableCell align="center" key={idx}>
                                {item}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.content}</TableCell>
                            <TableCell align="center">{row.editBtn}</TableCell>
                            <TableCell align="center">
                                {row.deleteBtn}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MainTable;
