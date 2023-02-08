import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return(
        <Box m="20px">

            <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important question
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse melasuada lacus ex, sit amet blandit leo labortis eget.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another important question
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse melasuada lacus ex, sit amet blandit leo labortis eget.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An unimportant question
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse melasuada lacus ex, sit amet blandit leo labortis eget.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Random fact about plancton
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse melasuada lacus ex, sit amet blandit leo labortis eget.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Your favourite question
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse melasuada lacus ex, sit amet blandit leo labortis eget.</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Look ma no version control
                    </Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse melasuada lacus ex, sit amet blandit leo labortis eget.</Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default FAQ;