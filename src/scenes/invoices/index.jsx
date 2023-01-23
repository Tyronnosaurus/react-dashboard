import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from '../../data/mockData';

import Header from "../../components/Header";


const Invoices = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Define the columns of the table
    const columns = [
        {field: "id", headerName:"ID", flex:0.5},
        {field: "name", headerName:"Name", flex:1, cellClassName:"name-column--cell"},      
        {field: "email", headerName:"Email", flex:1},
        {field: "cost", headerName:"Cost", flex:1, renderCell: (params) =>
                                                                    (<Typography color={colors.greenAccent[500]}>
                                                                        ${params.row.cost}
                                                                    </Typography>
                                                                    )},
        {field: "phone", headerName:"Phone number", flex:1},
        {field: "date", headerName:"Date", flex:1},

    ];

    return(
        <Box margin="20px">
            <Header title="INVOICES" subtitle="List of invoice balances"/>
            <Box margin="40px 0 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root": {    /* To edit the style of the grid we find out the applied classes with the Inspector */
                    border:"none"
                },
                "& .MuiDataGrid-cell":{
                    borderBottom:"none"
                },
                "& .name-column--cell":{
                    color: colors.greenAccent[300] 
                },
                "& .MuiDataGrid-columnHeaders":{
                    backgroundColor:colors.blueAccent[700],
                    borderBottom:"none"
                },
                "& .MuiDataGrid-virtualScroller":{
                    backgroundColor: colors.primary[400]
                },
                "& .MuiDataGrid-footerContainer":{
                    borderTop:"none",
                    backgroundColor:colors.blueAccent[700]
                },
                "& .MuiCheckbox-root":{
                    color: `${colors.greenAccent[200]} !important`
                }
            }}>
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns}/>
            </Box>
        </Box>
    );

};

export default Invoices;