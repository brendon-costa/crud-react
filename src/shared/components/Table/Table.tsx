import {ColumnModel} from "../../model/column.model.ts";
import {FunctionComponent} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DisplayMask} from "../DisplayMask/DisplayMask.tsx";


interface ITable {
    dataList: any[];
    columns: ColumnModel[];
}

export const ManagementTable: FunctionComponent<ITable> = ({
    dataList,
    columns
}) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.key}
                                style={{ minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataList.map((row: any, index) => {
                        return (
                            <TableRow hover role="checkbox" tabIndex={-1} key={'row'+index}>
                                {columns.map((column: ColumnModel) => {
                                    const value = row[column.key];
                                    return (
                                        <TableCell key={column.key}>
                                            <DisplayMask value={value} mask={column.type} />
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
