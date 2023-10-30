import {ColumnModel} from "../../model/column.model.ts";
import {FunctionComponent} from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {DisplayMask} from "../DisplayMask/DisplayMask.tsx";
import EditIcon from '@mui/icons-material/Edit';


interface ITable {
    dataList: any[];
    columns: ColumnModel[];
    editHandle: (rowValue: any) => void;
    deleteHandle: (rowValue: any) => void;
}

export const ManagementTable: FunctionComponent<ITable> = ({
    dataList,
    columns,
    editHandle,
    deleteHandle
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
                        <TableCell>
                            Ações
                        </TableCell>
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
                                <TableCell>
                                    <div className="mb-2">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            style={{ marginLeft: 16 }}
                                            onClick={() => editHandle(row)}
                                        >
                                            Editar
                                        </Button>
                                    </div>
                                    <div>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            style={{ marginLeft: 16 }}
                                            onClick={() => deleteHandle(row)}
                                        >
                                            Deletar
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
