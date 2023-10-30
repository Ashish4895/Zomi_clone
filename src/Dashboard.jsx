import { Container, Typography, Box, Grid} from "@mui/material";
import * as React from 'react';
import eth from "./images/eth.svg";
import { DataGrid } from '@mui/x-data-grid';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import one from "./images/one.png";
import two from "./images/two.png";
import Avatar from '@mui/material/Avatar';
import ethereum from "./images/ethereum.svg";
import bitcoin from "./images/bitcoin.svg";
import ape from "./images/ape.svg";
import usdc from "./images/usdc.svg";

const arr = [
    {token:{
        src:ethereum,
        name:"Ethereum",
        abb:"ETH"
    },price:"$1,817.14",pool:"$19",weight:"50.49% / 25.00%" ,utilization:"0.00%"},
    {token:{
        src:bitcoin,
        name:"Wrapped Bitcoin",
        abb:"WBTC"
    },price:"$34,828.56",pool:"$0",weight:"0.00% / 25.00%" ,utilization:"0.00%"},
    {token:{
        src:ape,
        name:"ApeCoin",
        abb:"EAPE"
    },price:"$1.37",pool:"$0",weight:"0.00% / 25.00%" ,utilization:"0.00%"},
    {token:{
        src:usdc,
        name:"USD Coin",
        abb:"USDC"
    },price:"$1.00",pool:"$14",weight:"49.50% / 25.00%" ,utilization:"0.00%%"},
]

export function TokenGrid(){

    return(
        <>
            {arr.map((item,index) => (
                <Grid key = {index} item sx={{display:"flex", justifyContent:"space-between", width:"100%", color:"white", marginY:2}}>
                <Box width="30%" display="flex" justifyContent="flex-start">
                    <Avatar src={item.token.src} alt="logo"/>
                    <Box>
                        <Typography sx={{color:"white",fontSize:16,fontWeight:150,lineHeight:1, marginX:1}}>{item.token.name}</Typography>
                        <Typography sx={{color:"#B8B8B8",fontSize:12, marginX:1}}>{item.token.abb}</Typography>
                    </Box>
                </Box>
                <Box width="20%" display="flex" justifyContent="flex-start">
                    <Typography sx={{fontSize:"1.2rem"}}>{item.price}</Typography>
                </Box>
                <Box width="15%" display="flex" justifyContent="flex-start">
                    <Typography sx={{fontSize:"1.2rem", textDecorationStyle:"dashed", textDecorationLine:"underline"}}>{item.pool}</Typography>
                </Box>
                <Box width="20%" display="flex" justifyContent="flex-start">
                    <Typography sx={{fontSize:"1.2rem", textDecorationStyle:"dashed", textDecorationLine:"underline"}}>{item.weight}</Typography>
                </Box>
                <Box width="15%" display="flex" justifyContent="flex-end">
                    <Typography sx={{fontSize:"1.2rem"}}>{item.utilization}</Typography>
                </Box>
            </Grid>
            ))}
        </>
    )
}


const data = [
  { value: 6, label: 'A', color:"#5C0AF5"},
  { value: 94, label: 'B', color:"#0598FA" }
];

const size = {
  width: 300,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
  fill:"white"
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

export function PieChartWithCenterLabel() {
  return (
    <PieChart series={[{ data, innerRadius: 85 }]} {...size}>
      <PieCenterLabel>Distribution</PieCenterLabel>
    </PieChart>
  );
}



const columns = [
  {
    field: 'token',
    headerName: 'TOKEN',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'PRICE',
    width: 150,
    editable: true,
  },
  {
    field: 'pool',
    headerName: 'POOL',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'weight',
    headerName: 'WEIGHT',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'utilization',
    headerName: 'UTILIZATION',
    type: 'number',
    width: 110,
    editable: true,
  }
  
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 }
 
];

export function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%'}}>
      <DataGrid
        sx={{color:"white"}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4
            },
          },
        }}
        pageSizeOptions={[4]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}


function Dashboard(){
      
    return(
        <Container sx={{marginBottom:10,paddingX:{xs:10},minWidth:{xs:"100%"}}}>
            <Container sx={{minWidth:"100%",paddingTop:7}}>
                <Box sx={{display:"flex",paddingBottom:1.5}}>
                    <Typography sx={{color:"white", fontSize:35, fontWeight:700, lineHeight:1.2,paddingRight:1}}>
                        Stats
                    </Typography>
                    <img src={eth} alt="logo" />
                </Box>
                <Typography sx={{color:"#B8B8B8",fontSize:18,fontWeight:100,maxWidth:380}}>
                    Ethereum Total Stats start from 06 Jan 2022.
                    For detailed stats:
                </Typography>
            </Container>
            <Container sx={{display:"flex",marginTop:5, gap:2, flexDirection:{xs:"column", lg:"row"}, minWidth:"100%"}}>
                <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515"}}>
                    <Grid item xs={12} sx={{color:"white", borderBottom:"1px solid #4D4D4E", padding:2}}>
                        <Typography>Overview</Typography>
                    </Grid>
                    <Grid container sx={{padding:2}}>
                        <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                            <Typography>AUM</Typography>
                            <Typography>$ZLP Pool</Typography>
                            <Typography>24h Volume</Typography>
                            <Typography>Long Positions</Typography>
                            <Typography>Short Positions</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                            <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$34</Typography>
                            <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$34</Typography>
                            <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$0</Typography>
                            <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$0</Typography>
                            <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$0</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515"}}>
                    <Grid item xs={12} sx={{color:"white", borderBottom:"1px solid #4D4D4E", padding:2}}>
                        <Typography>Total Stats</Typography>
                    </Grid>
                    <Grid container sx={{padding:2}}>
                        <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                            <Typography>Total Fees</Typography>
                            <Typography>Total Volume</Typography>
                            <Typography>Floor Price Fumd</Typography>
                        </Grid>
                        <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                            <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$0</Typography>
                            <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$0</Typography>
                            <Typography>$627,600</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Container sx={{minWidth:"100%",marginTop:5}}>
                <Box sx={{display:"flex",paddingBottom:1.5}}>
                    <Typography sx={{color:"white", fontSize:35, fontWeight:700, lineHeight:1.2,paddingRight:1}}>
                        Tokens
                    </Typography>
                    <img src={eth} alt="logo" />
                </Box>
                <Typography sx={{color:"#B8B8B8",fontSize:18,fontWeight:100,maxWidth:380, marginBottom:3}}>
                    Platform and $ZLP index tokens.
                </Typography>
                <Box sx={{display:"flex",gap:2, width:{xs:"100%"}}}>
                    <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515",display:"flex"}}>
                        <Box sx={{minWidth:"62%"}}>
                            <span style={{display:"flex",justifyContent:"flex-start", margin:15}}>
                                <img style={{paddingRight:"5px",maxWidth:"50px"}} src={one} alt="logo" />
                                <span style={{margin:5}}>
                                <Typography sx={{color:"white",fontSize:20,fontWeight:150,lineHeight:1}}>$ROMI</Typography>
                                <Typography sx={{color:"#B8B8B8",fontSize:12}}>$ROMI</Typography>
                                </span>
                            </span>
                            <Grid container sx={{padding:2,borderTop:"1px solid #4D4D4E"}}>
                                <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                    <Typography>Price</Typography>
                                    <Typography>Supply</Typography>
                                    <Typography>Total Staked</Typography>
                                    <Typography>Market Cap</Typography>
                                </Grid>
                                <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                    <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$0.00</Typography>
                                    <Typography>10,000$ZOMI</Typography>
                                    <Typography sx={{textDecorationStyle:"dashed", textDecorationLine:"underline"}}>$0</Typography>
                                    <Typography>$10</Typography>
                                </Grid>
                            </Grid>         
                        </Box>
                        <Box marginTop={3} marginLeft={2}>
                            <PieChartWithCenterLabel></PieChartWithCenterLabel>
                        </Box>
                    </Box>
                    <Box sx={{width:{lg:"50%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515",display:"flex"}}>
                        <Box sx={{minWidth:"62%"}}>
                            <span style={{display:"flex",justifyContent:"flex-start", margin:15}}>
                                <img style={{paddingRight:"5px",maxWidth:"50px"}} src={two} alt="logo" />
                                <span style={{margin:5}}>
                                <Typography sx={{color:"white",fontSize:20,fontWeight:150,lineHeight:1}}>$ZLP</Typography>
                                <Typography sx={{color:"#B8B8B8",fontSize:12}}>$ZLP</Typography>
                                </span>
                            </span>
                            <Grid container sx={{padding:2,borderTop:"1px solid #4D4D4E"}}>
                                <Grid item xs={8} sx={{color:"#B8B8B8", gap:1, display:"flex", alignItems:"flex-start", flexDirection:"column"}}>
                                    <Typography>Price</Typography>
                                    <Typography>Supply</Typography>
                                    <Typography>Total Staked</Typography>
                                    <Typography>Market Cap</Typography>
                                    <Typography>Stablecoin Percentage</Typography>
                                </Grid>
                                <Grid item xs={4} sx={{color:"white", gap:1, display:"flex", alignItems:"flex-end", flexDirection:"column"}}>
                                    <Typography>$1.140</Typography>
                                    <Typography>29 $ZLP</Typography>
                                    <Typography>$34</Typography>
                                    <Typography>$34</Typography>
                                    <Typography>49.50%</Typography>
                                </Grid>
                            </Grid>         
                        </Box>
                        <Box marginTop={3} marginLeft={2}>
                            <PieChartWithCenterLabel></PieChartWithCenterLabel>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{width:{lg:"100%"},border:"1px solid #4D4D4E",borderRadius:"4px", background:"#151515",marginTop:5}}>
                    <Grid item xs={12} sx={{color:"white", borderBottom:"1px solid #4D4D4E", padding:2,display:"flex"}}>
                        <Typography sx={{color:"white",fontSize:20,fontWeight:150,lineHeight:1,paddingRight:1}}>$ZLP Index Composition</Typography>
                        <img src={eth} alt="logo" />
                    </Grid>
                    <Grid container sx={{padding:2}}>
                        <Grid item sx={{display:"flex", justifyContent:"space-between", width:"100%", color:"#A8A8AF", marginY:2}}>
                            <Box width="30%" display="flex" justifyContent="flex-start">
                                <Typography sx={{fontSize:"1.2rem"}}>TOKEN</Typography>
                            </Box>
                            <Box width="20%" display="flex" justifyContent="flex-start">
                                <Typography sx={{fontSize:"1.2rem"}}>PRICE</Typography>
                            </Box>
                            <Box width="15%" display="flex" justifyContent="flex-start">
                                <Typography sx={{fontSize:"1.2rem"}}>POOL</Typography>
                            </Box>
                            <Box width="20%" display="flex" justifyContent="flex-start">
                                <Typography sx={{fontSize:"1.2rem"}}>WEIGHT</Typography>
                            </Box>
                            <Box width="15%" display="flex" justifyContent="flex-end">
                                <Typography sx={{fontSize:"1.2rem"}}>UTILIZATION</Typography>
                            </Box>
                        </Grid>
                        <TokenGrid></TokenGrid>
                    </Grid>
                </Box>
            </Container>
        </Container>
    )
}

export default Dashboard;