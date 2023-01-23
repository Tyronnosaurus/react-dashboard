import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from '../../data/mockData';

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";

import Header from "../../components/Header";


const Team = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    // Define the columns of the table
    const columns = [
        {field: "id", headerName:"ID"},
        {field: "name", headerName:"Name", flex:1, cellClassName:"name-column--cell"},
        {field: "age", headerName:"Age", type:"number", headerAlign:"left", align:"left"},
        {field: "phone", headerName:"Phone number", flex:1},
        {field: "email", headerName:"Email", flex:1},
        {field: "acces", headerName:"Acces Levels", flex:1, renderCell:
            ({row:{access}}) => {
                return(<Box
                        width="60%"
                        margin="0 auto"
                        padding="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={(access==="admin") ? colors.greenAccent[600] : colors.greenAccent[700]}
                        borderRadius="4px">
                            {access==="admin" && <AdminPanelSettingsOutlinedIcon/>}
                            {access==="manager" && <SecurityOutlinedIcon/>}
                            {access==="user" && <LockOpenOutlinedIcon/>}
                            <Typography color={colors.grey[100]} sx={{marginLeft:"5px"}}>
                                {access}
                            </Typography>
                       </Box>)
            }
        }
    
    ];

    return(
        <Box margin="20px">
            <Header title="TEAM" subtitle="Managing the team members"/>
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
                }
            }}>
                <DataGrid rows={mockDataTeam} columns={columns}/>
            </Box>
        </Box>
    );

};

export default Team;