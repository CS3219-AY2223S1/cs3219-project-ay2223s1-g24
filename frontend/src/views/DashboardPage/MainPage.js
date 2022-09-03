import * as React from 'react';
import "./mainpage.scss";
import DashboardTopBar from "./DashboardTopBar";

function MainPage() {

  return (
    <div className="main">
      <DashboardTopBar />
      <div class="flexbox-container">
        <div className='flexbox-item'>This is Placeholder content 1</div>
        <div className='flexbox-item'>This is Placeholder content 2</div>
        <div className='flexbox-item'>This is Placeholder content 3</div>
      </div>
    </div>
  );
}

export default MainPage;
