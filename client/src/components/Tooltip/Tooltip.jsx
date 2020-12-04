import React, { useState } from "react";

// import Slide from "react-swipeable-views";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { red, blue, green } from "@material-ui/core/colors";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

export default function Tooltip(){
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <>
     
      <Button   variant="contained" color="secondary" onClick={handleClick}>toolbar 가이드</Button>
      <AutoRotatingCarouselModal
        isMobile={matches}
        handleOpen={handleOpen}
        setHandleOpen={setHandleOpen}
      />
    </>
  );
}




const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Close"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: "absolute" }}
      >
        <Slide
          media={
            <img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' width='450' height='400'/>
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="기록정보등록"
          subtitle="지도를 클릭하여 원하는 기록정보를 남겨보세요"
        />

        <Slide
          media={
            <img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' width='450' height='400'/>
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="카테고리,날짜별 조회"
          subtitle="카테고리,날짜별로 원하는 기록정보를 조회해 보세요"
        />


<Slide
          media={
            <img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' width='450' height='400'/>
          }
          mediaBackgroundStyle={{ backgroundColor: red[400] }}
          style={{ backgroundColor: red[600] }}
          title="코스추가하기"
          subtitle="코스추가하기 버튼을 눌러 원하는 코스를 만들어 보세요"
        />
         
       
        
      </AutoRotatingCarousel>
    </div>
  );
};




