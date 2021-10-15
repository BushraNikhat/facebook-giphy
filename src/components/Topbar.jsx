import React from "react";
import { Person, Search, Chat, Notifications } from "@material-ui/icons";
import {Badge,Avatar} from "@material-ui/core";

const Topbar = () => {
  return (
    <>
      <div className="topbar_container shadow">
        <div className="row topbar_content flex-grow-1 d-flex align-items-center mx-4">
          <div className="col-sm-3 col-4 topbar_left  p-0 ">
            <span>Facebook</span>

          </div>
          <div className=" col-sm-6 col-10 topbar_center ">
            <div className="searchBar d-flex justify-content-center align-items-center">
              <Search className="searchIcon" />
              <input
                placeholder="Search for friend or post"
                className="searchInput"
              />
            </div>
          </div>
          <div className="col-sm-3 col-2 topbar_right  d-flex align-items-center  p-0 justify-content-between ">
            <div className="topbarIcons d-flex align-items-center justify-content-around  flex-grow-1">
              <Badge badgeContent={2} color="secondary">
                <Person />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <Chat />
              </Badge>
              <Badge badgeContent={3} color="secondary">
                <Notifications />
              </Badge>
            </div>
            <div className=" flex-grow-2 d-flex justify-content-end">
            <Avatar alt="profile" src="/favicon.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
