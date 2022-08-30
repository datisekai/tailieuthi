import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const AdminProfile = () => {
  return (
    <div className="h-full flex items-center border-l pl-4">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <img
          src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/139437052_801021070484467_6579343261364892799_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Fps_M9j01R8AX-P8t9P&tn=0wnyszsRcBnCLsBq&_nc_ht=scontent.fvca1-2.fna&oh=00_AT_gsMWPyJlEtUJmR7YaxjYc-rsKFSL0wuJyRRkBDyqgpA&oe=6331862E"
          alt="avatar"
        />
      </div>

      <div className="ml-4 cursor-pointer">
        <ArrowDownwardIcon />
      </div>
    </div>
  );
};

export default AdminProfile;
