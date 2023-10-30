import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function MediaCard(){
    return(
        <Card variant= {"outlined"} style={{maxWidth: "59.2rem" , padding: 20 }}>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/128/722/722302.png" alt="" />
                <Typography variant={"h6"}>$ZOMI</Typography>
            </div>
        </Card>
    )
}

export default MediaCard;