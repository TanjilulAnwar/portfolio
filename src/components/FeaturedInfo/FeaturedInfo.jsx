import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import NetCore from "../../assets/netcore.png";
import ReactLogo from "../../assets/react.png";
import NodeJS from "../../assets/nodejs.png";
import Angular from "../../assets/angular.svg";
import CS from "../../assets/cs.png";
import JS from "../../assets/javascript.png";
import MYSQL from "../../assets/mysql.png";
import MSSQL from "../../assets/mssql.png";
import POSTGRES from "../../assets/postgres.png";
import "./featuredInfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem gradient-green">
        <span className="featuredTitle ">Front End</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            <img src={ReactLogo} alt="" className="featuredImage" />
          </span>

          <span className="featuredMoney">
            <img src={Angular} alt="" className="featuredImage" />
          </span>
          <span className="featuredMoney">
            <img src={JS} alt="" className="featuredImage" />
          </span>
          {/* <span className="featuredMoneyRate">
            20% <ArrowUpward className="featuredIcon" />
          </span> */}
        </div>
        <span className="featuredSub"></span>
      </div>
      <div className="featuredItem gradient-purple">
        <span className="featuredTitle ">Back End</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            <img src={NetCore} alt="" className="featuredImage" />
          </span>
          <span className="featuredMoney">
            <img
              src={NodeJS}
              alt=""
              href="www.nodejs.org"
              className="featuredImage"
            />
          </span>
          <span className="featuredMoney">
            <img src={CS} alt="" className="featuredImage" />
          </span>
          {/* <span className="featuredMoneyRate">
            14% <ArrowUpward className="featuredIcon" />
          </span> */}
        </div>
        <span className="featuredSub"></span>
      </div>
      <div className="featuredItem gradient-orange">
        <span className="featuredTitle">Database</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            <img src={MYSQL} alt="" className="featuredImage" />
          </span>
          <span className="featuredMoney">
            <img src={MSSQL} alt="" className="featuredImage" />
          </span>
          <span className="featuredMoney">
            <img src={POSTGRES} alt="" className="featuredImage" />
          </span>
          {/* <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon" />
          </span> */}
        </div>
        {/* <span className="featuredSub"> Compared to last Month</span> */}
      </div>
    </div>
  );
}
