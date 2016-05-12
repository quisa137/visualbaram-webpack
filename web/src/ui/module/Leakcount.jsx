import React from 'react';
import $ from 'jquery';
semantic;
import moment from 'moment';
import daterangepicker from 'semantic-ui-daterangepicker';


class Leakcount extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Leakcount';
    }
    componentDidMount() {
      $('.ui.toggle.checkbox').checkbox();
      $('.ui.toggle.button');
    }
    render() {
        return (
          <div className="ui container margin7em">
            <form className="ui form">
              <h4 className="ui dividing header">실시간 통계</h4>
              <div className="field types">
                <label>유형</label>
                <div className="field right aligned">
                  <div className="ui toggle checkbox marginRight20">
                    <input type="checkbox" name="selectAll" className="hidden"/>
                    <label>SelectAll</label>
                  </div>
                  <button className="ui red basic toggle button">전염병</button>
                  <button className="ui orange basic toggle button">화재</button>
                  <button className="ui yellow basic toggle button">대설</button>
                  <button className="ui olive basic toggle button">산불</button>
                  <button className="ui green basic toggle button">산사태</button>
                  <button className="ui teal basic toggle button">지반침하</button>
                  <button className="ui blue basic toggle button">지진</button>
                  <button className="ui violet basic toggle button">태풍</button>
                  <button className="ui purple basic toggle button">해일</button>
                  <button className="ui pink basic toggle button">호우</button>
                  <button className="ui brown basic toggle button">홍수</button>
                  <button className="ui grey basic toggle button">황사</button>
                  <button className="ui black basic toggle button">붕괴</button>
                </div>
                <div className="field date_select">
                  <label>기간</label>
                  <div className="field"></div>
                </div>
                <div className="field location">
                  <div className="two fields">
                    <dif className="field">
                      <label>지역</label>
                      <div className="field">

                      </div>
                    </dif>
                    <dif className="field">
                      <label>단위</label>
                      <div className="field"></div>
                    </dif>
                  </div>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default Leakcount;
