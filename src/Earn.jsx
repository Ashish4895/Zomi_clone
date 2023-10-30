import { Container, Box, Typography, Grid, Button } from "@mui/material";
// import Footer from "./footer";


function Earn(){

    return(
        <>
        <Container sx={{marginBottom:10,padding:0,minWidth:"100vw"}}>
            <Container sx={{minWidth:"92vw",paddingTop:7}}>
                <Box>
                    <Typography sx={{color:"white", fontSize:35, fontWeight:700, lineHeight:1.5,paddingRight:1}}>
                        Earn
                    </Typography>
                    <Typography sx={{color:"#B8B8B8",fontSize:18,fontWeight:100,maxWidth:380}}>
                        Stake $ROMI and $ZLP to earn rewards.
                    </Typography>
                </Box>
                <Box sx={{display:"flex",gap:2}}>
                    <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515",marginTop:3}}>
                        <Grid item xs={12} sx={{color:"white", borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Typography>$ROMI</Typography>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>Price</Typography>
                                <Typography>Wallet</Typography>
                                <Typography>Staked</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$0.00</Typography>
                                <Typography>...$ROMI ($...)</Typography>
                                <Typography>...$ROMI ($...)</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>APR</Typography>
                                <Typography>Rewards</Typography>
                                <Typography>Multiple Points APR</Typography>
                                <Typography>Boosting Percentage</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>...%</Typography>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$...</Typography>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>100.00%</Typography>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>...%</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>Total Staked</Typography>
                                <Typography>Total Supply</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography>0 $ZOMI ($...)</Typography>
                                <Typography>10,000 $ZOMI ($10)</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Button variant="contained" size="large" sx={{textTransform:"none", background:"#3EB489"}}>Buy $ROMI</Button>
                        </Grid>
                    </Box>
                    <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515",marginTop:3}}>
                        <Grid item xs={12} sx={{color:"white", borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Typography>Total Rewards</Typography>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E",paddingBottom:20.3}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>ETH (WETH)</Typography>
                                <Typography>$ROMI</Typography>
                                <Typography>Escrowed $ROMI</Typography>
                                <Typography>Multiplier Points</Typography>
                                <Typography>Staked Multiplier Points</Typography> 
                                <Typography>Total</Typography> 
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography>...($...)</Typography>
                                <Typography>...($...)</Typography>
                                <Typography>...($...)</Typography>
                                <Typography>...</Typography>
                                <Typography>...</Typography>
                                <Typography>$...</Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12} sx={{borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Button variant="contained" size="large" sx={{textTransform:"none", background:"#3EB489"}}>Connect Wallet</Button>
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{display:"flex",gap:2}}>
                    <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515",marginTop:3}}>
                        <Grid item xs={12} sx={{color:"white", borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Typography>$ZLP (Ethereum)</Typography>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>Price</Typography>
                                <Typography>Wallet</Typography>
                                <Typography>Staked</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography>$...</Typography>
                                <Typography>... $ZLP ($...)</Typography>
                                <Typography>... $ZLP ($...)</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>APR</Typography>
                                <Typography>Rewards</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>...%</Typography>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$...</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>Total Staked</Typography>
                                <Typography>Total Supply</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography>... $ZLP ($...)</Typography>
                                <Typography>... $ZLP ($...)</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Button variant="contained" size="large" sx={{textTransform:"none", background:"#3EB489",marginRight:2}}>Buy $ZLP</Button>
                            <Button variant="contained" size="large" sx={{textTransform:"none", background:"#3EB489"}}>Sell $ZLP</Button>
                        </Grid>
                    </Box>
                    <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515",marginTop:3}}>
                        <Grid item xs={12} sx={{color:"white", borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Typography>Escrowed $ROMI</Typography>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>Price</Typography>
                                <Typography>Wallet</Typography>
                                <Typography>Staked</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography>$0.00</Typography>
                                <Typography>... esZOMI ($...)</Typography>
                                <Typography>... esZOMI ($...)</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>APR</Typography>
                                <Typography>Multiplier Points APR</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>...%</Typography>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>100.00%.</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>Total Staked</Typography>
                                <Typography>Total Supply</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                <Typography>... esZOMI ($...)</Typography>
                                <Typography>1,023,379 esZOMI ($1,071)</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sx={{borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Button variant="contained" size="large" sx={{textTransform:"none", background:"#3EB489"}}>Connect Wallet</Button>
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{marginTop:5}}> 
                    <Typography sx={{color:"white", fontSize:35, fontWeight:700, lineHeight:1.5,paddingRight:1}}>
                        Vest
                    </Typography>
                    <Typography sx={{color:"#B8B8B8",fontSize:18,fontWeight:100,maxWidth:500}}>
                        Convert esROMI tokens to $ROMI tokens.
                        <br />
                        Please read the vesting details before using the vaults
                    </Typography>
                </Box>
                <Box sx={{display:"flex",gap:2}}>
                    <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515",marginTop:3}}>
                        <Grid item xs={12} sx={{color:"white", borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Typography>$ROMI Vault</Typography>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>Staked Tokens</Typography>
                                <Typography>Reserved for Vesting</Typography>
                                <Typography>Vesting Status</Typography>
                                <Typography>Claimable</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                            <Typography>... $ZLP</Typography>
                                <Typography>0.00 / ...</Typography>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>0.0000 / 0.0000</Typography>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>0.0000 $ROMI</Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12} sx={{borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Button variant="contained" size="large" sx={{textTransform:"none", background:"#3EB489"}}>Connect Wallet</Button>
                        </Grid>
                    </Box>
                    <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515",marginTop:3}}>
                        <Grid item xs={12} sx={{color:"white", borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Typography>$ZLP Vault</Typography>
                        </Grid>
                        <Grid container sx={{padding:2,borderBottom:"1px solid #4D4D4E"}}>
                            <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                <Typography>Staked Tokens</Typography>
                                <Typography>Reserved for Vesting</Typography>
                                <Typography>Vesting Status</Typography>
                                <Typography>Claimable</Typography>
                            </Grid>
                            <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                            <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>... </Typography>
                                <Typography>0.00 / ...</Typography>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>0.0000 / 0.0000</Typography>
                                <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>0.0000 $ROMI</Typography>
                            </Grid>
                        </Grid>
                        
                        <Grid item xs={12} sx={{borderBottom:"1px solid #4D4D4E", padding:2}}>
                            <Button variant="contained" size="large" sx={{textTransform:"none", background:"#3EB489"}}>Connect Wallet</Button>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Container>
        {/* <Footer></Footer> */}
        </>
    )
}

export default Earn;