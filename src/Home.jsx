import { Container, Typography, Button, Box, Card } from "@mui/material";
import arrow from "./images/arrow.svg";
import interest from "./images/interest.svg";
import user from "./images/user.svg";
import liquidation from "./images/liquidation.svg";
import cost from "./images/cost.svg";
import swap from "./images/swap.svg";
import one from "./images/one.png";
import two from "./images/two.png";

function Home(){

    return(
        <Container sx={{paddingTop:10, minWidth:{xs:"100%"}}}>
            <Container sx={{marginLeft:5}}>
                <Typography sx={{color:"white", fontSize:60, fontWeight:700, lineHeight:1.2}}>
                    Decentralized
                    <br /> 
                    Perpetual Exchange
                </Typography>
                <Typography sx={{color:"#B8B8B8", fontSize:20, fontWeight:500, marginTop:1}}>
                    Trade BTC, ETH, AVAX and other top 
                    <br />
                    cryptocurrencies with up to 30x leverage 
                    <br />
                    directly from your wallet
                </Typography>
                <Button variant="contained" sx={{textTransform:"none", background:"#3EB489", marginTop:3}}>Launch Exchange</Button>
            </Container>
            <Container sx={{marginLeft:5 ,display:"flex",justifyContent:"space-between", minWidth:"95%", marginY:10}}>
                <Box sx={{border:"1px solid #2B2B2B",borderRadius:"4px",marginY:"16px",paddingY:"28px",display:"flex",alignItems:"Center",boxShadow:10, width:"31.5%"}}>
                    <Box marginLeft={3} marginRight={5}>
                        <img src={arrow} alt="icon" />
                    </Box>
                    <Box marginRight={12}>
                        <Typography sx={{color:"#B8B8B8",fontSize:20}}>Total Trading Volume</Typography>
                        <Typography sx={{color:"white",fontSize:35,fontWeight:150}}>$0</Typography>
                    </Box>
                </Box>
                <Box sx={{border:"1px solid #2B2B2B",borderRadius:"4px",marginY:"16px",paddingY:"28px",display:"flex",alignItems:"center",boxShadow:10, width:"31.5%"}}>
                    <Box marginLeft={3} marginRight={5}>
                        <img src={interest} alt="icon" />
                    </Box>
                    <Box marginRight={12}>
                        <Typography sx={{color:"#B8B8B8",fontSize:20}}>Open Interest</Typography>
                        <Typography sx={{color:"white",fontSize:35,fontWeight:150}}>$0</Typography>
                    </Box>
                </Box>
                <Box sx={{border:"1px solid #2B2B2B",borderRadius:"4px",marginY:"16px",paddingY:"28px",display:"flex",alignItems:"center",boxShadow:10, width:"31.5%"}}>
                    <Box marginLeft={3} marginRight={5}>
                        <img src={user} alt="icon" />
                    </Box>
                    <Box marginRight={12}>
                        <Typography sx={{color:"#B8B8B8",fontSize:20}}>Total Users</Typography>
                        <Typography sx={{color:"white",fontSize:35,fontWeight:150}}>0</Typography>
                    </Box>
                </Box>
                
            </Container>
            <Container sx={{marginLeft:5 ,display:"flex",justifyContent:"space-between", minWidth:"95%", paddingY:12,borderTop:"1px solid #2B2B2B"}}>
                <Card sx={{backgroundColor:"#191919",maxWidth:400}}>
                    <Box sx={{display:"flex",justifyContent:"normal",paddingBottom:2}}>
                        <img src={liquidation} alt="logo" />
                        <Typography sx={{color:"white",fontSize:25,fontWeight:150,marginLeft:3}}>Reduce Liquidation Risks</Typography>
                    </Box>
                    <Typography sx={{color:"#B8B8B8",fontSize:20,fontWeight:100}}>
                        An aggregate of high-quality price feeds determine when liquidations occur.
                        This keeps positions safe from temporary wicks.
                    </Typography>
                </Card>
                <Card sx={{backgroundColor:"#191919",maxWidth:400}}>
                    <Box sx={{display:"flex",justifyContent:"normal",paddingBottom:2}}>
                        <img src={cost} alt="logo" />
                        <Typography sx={{color:"white",fontSize:25,fontWeight:150,marginLeft:3}}>Save on Costs</Typography>
                    </Box>
                    <Typography sx={{color:"#B8B8B8",fontSize:20,fontWeight:100}}>
                        Enter and exit positions with minimal spread and zero price impact.
                        Get the optimal price without incurring additional costs.
                    </Typography>
                </Card>
                <Card sx={{backgroundColor:"#191919",maxWidth:400}}>
                    <Box sx={{display:"flex",justifyContent:"normal",paddingBottom:2}}>
                        <img src={swap} alt="logo" />
                        <Typography sx={{color:"white",fontSize:25,fontWeight:150,marginLeft:3}}>Simple Swaps</Typography>
                    </Box>
                    <Typography sx={{color:"#B8B8B8",fontSize:20,fontWeight:100}}>
                        Open positions through a simple swap interface. 
                        Conveniently swap from any supported asset into the position of your choice.
                    </Typography>
                </Card>
            </Container>
            <Container sx={{marginLeft:5,paddingY:7,minWidth:"95%"}}>
                <Typography sx={{color:"white", fontSize:45, fontWeight:700, lineHeight:1.2}}>
                    Two tokens create
                    <br />
                    our ecosystem
                </Typography>
                <Box sx={{paddingTop:5,display:"flex",justifyContent:"space-between",paddingBottom:5}}>
                    <Card sx={{backgroundColor:"#191919",boxShadow:10,maxWidth:625,border:"1px solid #4D4D4E",borderRadius:"8px",paddingLeft:3,paddingY:2}}>
                        <span style={{display:"flex",justifyContent:"flex-start"}}>
                            <img style={{maxWidth:"50px",paddingRight:"5px"}} src={one} alt="" />
                            <Typography sx={{color:"white",fontSize:35,fontWeight:150}}>$ROMI</Typography>
                        </span>
                        <Typography sx={{color:"white",fontSize:20,paddingTop:2}}>
                            $ROMI is the utility and governance token. Accrues 30% of the platform's generated fees.
                        </Typography>
                        <Typography sx={{color:"#B8B8B8",fontSize:17,fontWeight:150,paddingTop:2}}>
                            Ethereum APR: 0.00%
                        </Typography>
                        <span>
                        <Button variant="contained" sx={{textTransform:"none", background:"#3EB489", marginTop:3,marginRight:2,border:"1px solid #3EB489"}}>Buy</Button>
                        <Button variant="contained" sx={{textTransform:"none", background:"#191919", marginTop:3,border:"1px solid white"}}>Read more</Button>
                        </span>
                    </Card>
                    <Card sx={{backgroundColor:"#191919",boxShadow:10,maxWidth:625,border:"1px solid #4D4D4E",borderRadius:"8px",paddingLeft:3,paddingY:2}}>
                        <span style={{display:"flex",justifyContent:"flex-start"}}>
                            <img style={{maxWidth:"50px",paddingRight:"5px"}} src={two} alt="" />
                            <Typography sx={{color:"white",fontSize:35,fontWeight:150}}>$ZLP</Typography>
                        </span>
                        <Typography sx={{color:"white",fontSize:20,paddingTop:2}}>
                            $ZLP is the liquidity provider token. Accrues 70% of the platform's generated fees.
                        </Typography>
                        <Typography sx={{color:"#B8B8B8",fontSize:17,fontWeight:150,paddingTop:2}}>
                            Ethereum APR: 1,649,699,928.60%
                        </Typography>
                        <span>
                        <Button variant="contained" sx={{textTransform:"none", background:"#3EB489", marginTop:3,marginRight:2,border:"1px solid #3EB489"}}>Buy</Button>
                        <Button variant="contained" sx={{textTransform:"none", background:"#191919", marginTop:3,border:"1px solid white"}}>Read more</Button>
                        </span>
                    </Card>
                </Box>
            </Container>
        </Container>
    )
}

export default Home;