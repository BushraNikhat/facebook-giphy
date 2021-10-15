import React ,{useState} from "react";
import { Avatar } from "@material-ui/core";
import { VideoCall,InsertEmoticon ,MonochromePhotos} from "@material-ui/icons";
import ShareModal from "./ShareModal"

const Share = () => {
  const [modal,setModal]=useState(false)



// for closing share modal
  const closeModal=(close)=>{
    setModal(close)
}

 

  return (
    <>
      <div className="share_wrapper ">
        <div className="share_top d-flex align-items-center justify-content-center">
          <Avatar alt="profile" src="/images/profile.jpg" />
          <input
            placeholder="What's on your mind, Bushra?"
            className="shareInput ms-2 px-3 py-2 flex-grow-1"
            onClick={()=>setModal(true)}
          />
        </div>
        <hr/>
        <div className="share_bottom  d-flex align-items-center justify-content-around">
            <div className="share_icon_container d-flex align-items-center">
                    <VideoCall className="text-danger"/>
                    <span className="ms-1">Live video</span>
            </div>
            <div className="share_icon_container d-flex align-items-center">
                    <MonochromePhotos className="text-success"/>
                    <span className="ms-1">Photo/Video</span>
            </div>
            <div className="share_icon_container d-flex align-items-center">
                    <InsertEmoticon className="text-warning"/>
                    <span className="ms-1">Feelings</span>
            </div>
            
        </div>
      </div>

      <ShareModal modals={modal}
                  closeModal={closeModal}
      />
    </>
  );
};

export default Share;
