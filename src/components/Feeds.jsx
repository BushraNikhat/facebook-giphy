import React from 'react'
import { Avatar } from "@material-ui/core";
import { ThumbUpAltOutlined,ChatBubbleOutlineOutlined ,ShareOutlined,MoreHoriz} from "@material-ui/icons";


const Feeds = ({text,gify}) => {

   
    return (
        <>
         <div className="feeds_wrapper p-3 mb-4">
             <div className="feeds_top d-flex align-items-center justify-content-between mb-2">
                 <div className="feeds_top_left d-flex align-items-center">
                 <Avatar alt="profile" src="/images/profile.jpg" />
                 <div className="feed_info ms-3">
                        <p className="mb-0">Bushra Nikhat</p>
                        <p className="mb-0">5 hours ago</p>
                 </div>
                 </div>
                 <div className="feeds_top_right p-2">
                    <MoreHoriz/>
                 </div>
             </div>
             <div className="feed_center d-flex flex-column">
            <span className="feed_text mb-2">{text}</span>
            {
                gify && <img src={gify} alt="postImage" className="feed_img" />
            }
            
          </div>
          <hr/>
          <div className="feed_bottom  d-flex align-items-center justify-content-around">
            <div className="feed_icon_container d-flex align-items-center">
                    <ThumbUpAltOutlined className="text-danger"/>
                    <span className="ms-1">Like</span>
            </div>
            <div className="feed_icon_container d-flex align-items-center">
                    <ChatBubbleOutlineOutlined className="text-success"/>
                    <span className="ms-1">Comment</span>
            </div>
            <div className="feed_icon_container d-flex align-items-center">
                    <ShareOutlined className="text-warning"/>
                    <span className="ms-1">Share</span>
            </div>
            
        </div>
         </div>
        </>
    )
}

export default Feeds
