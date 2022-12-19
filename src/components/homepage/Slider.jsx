// import { ArrowLeftOutlined,ArrowRightOutlined } from "@mui/icons-material";
// import styled from "styled-components";
// import { useState } from "react";
// import "./slider.css";



// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   overflow: hidden;
//   margin-left:-8px;
//   padding-right:23px;
 
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin-top:220px ;
//   cursor: pointer;
  
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   height: 100%;
  
  
 
  
// `;

// const Slide = styled.div`
//   width: 110vw;
//   height: 120vh;
//   display: flex;
//   align-items:center;
//   background-color:#${props=>props.bg};

 
// `;

// const ImgContainer = styled.div`
//   height: 100%;
//   width: 100px;
//   flex: 1;
  
// `;

// const Image = styled.img`
//   height: 50%;
//   width:100%;
//   margin-right:-10px;
  
// `;

// const Slider = () => {

//   return (
//     <Container>
//       <Arrow direction="left" onClick={()=>handleClick("left")} >
//         <ArrowLeftOutlined />
//       </Arrow>
//       <Wrapper className="coverimg" >
//           <Slide >
//             <ImgContainer className="img">
//               <Image src="sliding1.jpg"/>
//             </ImgContainer>
            
//           </Slide>
//           <Slide >
//             <ImgContainer className="img">
//               <Image src="Sherlock-Holmes.jpg"/>
//             </ImgContainer>
            
//           </Slide>
//            <Slide >
//             <ImgContainer className="img">
//               <Image src="sliding1.jpg"/>
//             </ImgContainer>
            
//           </Slide>
        
//       </Wrapper>
//       <Arrow direction="right" onClick={()=>handleClick("right")}>
//         <ArrowRightOutlined />
//       </Arrow>
//     </Container>
//   );
// };

// export default Slider;

import "react-responsive-carousel/lib/styles/carousel.min.css";



import { Typography } from '@mui/material';
import{shades} from "../../theme";

import { ArrowLeftOutlined,ArrowRightOutlined, Texture } from "@mui/icons-material";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const importAll=(r)=>
r.keys().reduce((acc,item)=>{
  acc[item.replace("./","")] = r(item);
  return acc;
},{});

const heroTextureImports = importAll(
 require.context("../../assets",false,/\.(png|jpe?g|svg)$/)
);



const Slider = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <ArrowLeftOutlined sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <ArrowRightOutlined sx={{ fontSize: 40 }} />
        </IconButton>
      )}
    >
      {Object.values(heroTextureImports).map((texture, index) => (
        <Box key={`carousel-image-${index}`}>
          <img
            src={texture}
            alt={`carousel-${index}`}
            style={{
              margin:"0px",
              width: "100%",
              height: "500px",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
          />
          <Box
            color="white"
            padding="20px"
            borderRadius="1px"
            textAlign="left"
            backgroundColor="rgb(0, 0, 0, 0.4)"
            position="absolute"
            top="46%"
            left={isNonMobile ? "10%" : "0"}
            right={isNonMobile ? undefined : "0"}
            margin={isNonMobile ? undefined : "0 auto"}
            maxWidth={isNonMobile ? undefined : "240px"}
          >
            <Typography color={shades.secondary[200]}>-- Real Deal</Typography>
            <Typography variant="h3">THE INVESTIGATION THRILLER</Typography>
            <Typography
              fontWeight="bold"
              color={shades.secondary[300]}
              sx={{ textDecoration: "underline" }}
            >
              
            </Typography>
          </Box>
        </Box>
      ))}
    </Carousel>
  );
};

  
export default Slider