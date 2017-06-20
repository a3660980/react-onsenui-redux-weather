import React from 'react';
import $ from "jquery";
import {
  Select
} from 'react-onsenui';

const GymSearchHearder = (props) => {
  const gymIDChange = () => {
   
    /* Act on the event */
		switch ($("#GymKindID").val()){
        case "": 
          $("#GymType option").remove();
          $("#GymType").append($("<option value=''>全部運動類型</option>"));
      break;
        case "綜合性場館": 
          $("#GymType option").remove();
          var array = [ "體育館", "活動中心"];
          //利用each遍歷array中的值並將每個值新增到Select中
          $.each(array, function(i, val) {
            $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
            });      
            break;
        case "球類運動": 
          $("#GymType option").remove();
      var array = [ "棒球場", "棒、壘球打擊練習場", "籃球場", "網球場(館)", "足球場", "高爾夫球練習場", "迷你高爾夫球場" ,"羽球場(館)","撞球場","桌球場(館)","排球場(館)","保齡球館","壘球場","橄欖球場(聯合式橄欖球場)","沙灘排球場","曲棍球場","手球場(館)","壁球場","躲避球場","槌球場","木球場","滾球場","板球場","卡巴迪球場","浮士德球場","合球場","回力球場"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "戶外運動": 
      $("#GymType option").remove();
      var array = [ "田徑場", "環形/直線慢跑道(非田徑場型)", "射箭場","馬術場"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "水上活動": 
      $("#GymType option").remove();
      var array = [ "游泳池(館)"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "技擊類": 
      $("#GymType option").remove();
      var array = [ "跆拳道場/館", "拳擊場/館", "柔道場/館","角力場/場、武術館(教室)","劍道場/館","空手道場/館","擊劍場","柔術場","相撲道場","武術場"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "伸展運動/舞蹈": 
      $("#GymType option").remove();
      var array = [ "體操室/館", "舞蹈教室"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "競速運動": 
      $("#GymType option").remove();
      var array = [ "賽車場", "自由車場"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "射擊運動": 
      $("#GymType option").remove();
      var array = [ "靶場/射擊場"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "冰上運動": 
      $("#GymType option").remove();
      var array = [ "滑冰場(冰宮)"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "冒險性運動": 
      $("#GymType option").remove();
      var array = [ "極限運動場", "滑輪場(直排輪場)", "攀岩場","戶外探索教育場","BMX土坡競速場"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "健身房運動": 
      $("#GymType option").remove();
      var array = [ "健身房(含重量訓練室)", "舉重室", "健力室"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "身心障礙/銀髮族運動": 
      $("#GymType option").remove();
      var array = [ "樂活運動站", "身心障礙(銀髮族)運動休閒會館"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
      case "其他": 
      $("#GymType option").remove();
      var array = [ "其他"];
      //利用each遍歷array中的值並將每個值新增到Select中
      $.each(array, function(i, val) {
        $("#GymType").append($("<option value='" + array[i] + "'>" + array[i] + "</option>"));
      });      
      break;
    }
     props.onKindChange();
  }
  return (
    <div style={{alignItems:'center', flex:1 ,flexDirection: 'row'}}>
      <select style={{flex:1}} id='city' onChange={props.onChange}>
        <option value=''>全部縣市</option>
        <option value='臺北市'>臺北市</option>
        <option value='高雄市'>高雄市</option>
        <option value='基隆市'>基隆市</option>
        <option value='新北市'>新北市</option>
        <option value='桃園市'>桃園市</option>
        <option value='新竹縣'>新竹縣</option>
        <option value='新竹市'>新竹市</option>
        <option value='苗栗縣'>苗栗縣</option>
        <option value='臺中市'>臺中市</option>
        <option value='彰化縣'>彰化縣</option>
        <option value='南投縣'>南投縣</option>
        <option value='雲林縣'>雲林縣</option>
        <option value='嘉義縣'>嘉義縣</option>
        <option value='嘉義市'>嘉義市</option>
        <option value='臺南市'>臺南市</option>
        <option value='屏東縣'>屏東縣</option>
        <option value='宜蘭縣'>宜蘭縣</option>
        <option value='花蓮縣'>花蓮縣</option>
        <option value='臺東縣'>臺東縣</option>
        <option value='澎湖縣'>澎湖縣</option>
        <option value='金門縣'>金門縣</option>
        <option value='連江縣(馬祖)'>連江縣(馬祖)</option>
      </select>

      <select style={{flex:1}} id="GymKindID" name="GymKindID" onChange={gymIDChange}>
        <option value="">全部設施類型</option>
        <option class="MultiFunction" value="綜合性場館">綜合性場館</option>
        <option class="BallSport" value="球類運動">球類運動</option>
        <option class="AquaticSport" value="水上活動">水上活動</option>
        <option class="OutdoorSport" value="戶外運動">戶外運動</option>
        <option class="KungfuSport" value="技擊類">技擊類</option>
        <option class="GymnasticsSport" value="伸展運動/舞蹈">伸展運動/舞蹈</option>
        <option class="RacingSport" value="競速運動">競速運動</option>
        <option class="ShootingSport" value="射擊運動">射擊運動</option>
        <option class="IceSport" value="冰上運動">冰上運動</option>
        <option class="Adventure" value="冒險性運動">冒險性運動</option>
        <option class="FitnessSport" value="健身房運動">健身房運動</option>
        <option class="SpecificSport" value="身心障礙/銀髮族運動">身心障礙/銀髮族運動</option>
        <option class="OtherSport" value="其他">其他</option>
    </select>
  	
  	<select style={{flex:1}} id="GymType" name="GymType"  onChange={props.onChange}>
  	 <option value=''>全部運動類型</option>
    </select>
    </div>
  )
}

export default GymSearchHearder;
