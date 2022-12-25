import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


export default function Item({ val, key, num, mode,list ,setList}) {

   
    const bookmarkUrl=()=>{
        // list.push(val);
        setList(list=>list.concat(val));
        console.log(list);
    }
    const [copy, setCopy] = React.useState(0);
    const copyText = () => {
        navigator.clipboard.writeText(val);
        setCopy(1);
        setTimeout(() => {
            setCopy(0);
        }, 2000);
        // alert("Copied the text: " );

        // <Alert severity="success">Url Copied</Alert>
    }
    const [show, setShow] = React.useState(0);
    const showUrl = () => {
        if (show)
            setShow(0);
        else
            setShow(1);

    }
    const card = (
        <React.Fragment>
            <CardContent background={(mode == "light") ? "white" : "#302e2e"}>
                <Typography sx={{ fontSize: 25, fontWeight: "900", color: (mode == "light") ? "white" : "black" }}  >
                    Item no {num}
                </Typography>
                <Typography sx={{ color: (mode == "light") ? "white" : "black" }}>

                    {(show) ? val : val.substring(0, 100)}
                </Typography>
                {/* <h3 href={val}>{(val.length <= 50) ? val : val.substring(0, 100) + "..."}</h3> */}
            </CardContent>
            <CardActions>
                <Button size="large" href={val} target="_blank" sx={{ color: (mode == "dark") ? "black" : "white" }}>Vist URL</Button>
                <Button size="large" onClick={copyText} sx={{ color: (mode == "dark") ? "black" : "white" }}>Copy URL</Button>
                <Button size="large" onClick={bookmarkUrl} sx={{ color: (mode == "dark") ? "black" : "white" }}>Bookmark URL</Button>

            </CardActions>
        </React.Fragment>
    );

    return (
        <div style={{ disply: "flex", flexDirection: "row", width: "100vw" }}>

            <div style={{ display: "flex", flexDirection: "row" }}>

                <Box sx={{ width: "40vw", margin: "20px", flexDirection: "row" }}>
                    <Card variant="outlined" sx={{ background: (mode == "dark") ? "white" : "grey" }}>{card} </Card>
                </Box>

                {(copy) ? <Stack sx={{ width: 'auto', margin: "5px 0 0 0" }} spacing={2}>
                    <Alert onClose={() => { setCopy(0) }}>Copied</Alert>
                </Stack> : ""}

            
            </div>
              
            
        </div>
    )
}
