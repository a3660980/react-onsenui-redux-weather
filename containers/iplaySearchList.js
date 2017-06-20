import React from 'react';
import { connect } from 'react-redux';
import { getGymList, getPos, getSelectGymID } from '../actions';
import { List, ProgressCircular, ListItem, ListHeader, Icon, Button } from 'react-onsenui';
import GymSearchHearder from '../components/GymSearchHearder';
import $ from "jquery";
import iplay from '../api/iplay';
import GymInfo from './GymInfo';


class iplaySearchList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    iplay.getPos().then((pos)=>{
      let lat = pos.coords.latitude;
      let lng = pos.coords.longitude;
      this.props.getGymList({
            City: '高雄市',
            Latitude: lat,
            Longitude: lng
          })
      }
    ).then(this.props.getPos())
    .catch(
      this.props.getGymList({
      City: '高雄市',
      Latitude: this.props.lat,
      Longitude: this.props.lng
    })
    );
    
  }

  selectCity() {
    let city = $('#city').val();
    let kind = $('#GymKindID').val();
    let type = $('#GymType').val();
    this.props.getGymList({
      City: city,
      GymKind: kind,
      GymType: type,
      Latitude: this.props.lat,
      Longitude: this.props.lng
    })
  }

  handleClick() {
    console.log(123)
  }

  renderRow(gym) {
    return (
      <ListItem onClick={() => {
        this.props.getSelectGymID(gym.GymID);
        this.props.navigator.pushPage({component: GymInfo, id:gym.GymID});
      }} 
      tappable 
      key={gym.GymID}
      >
        <div className='left'>
          <img style={{width:150, height:123}} src={gym.Photo1} />
        </div>
        <div className='center' >
          <div style={{flex:1 ,flexDirection: 'column'}}>
            <div style={{flex:1, color:'blue'}} >{gym.Name}</div>
            <div style={{flex:1, fontSize:10, color:'#1f1f2e'}}>距離 {gym.Distance}公里</div>
            <div style={{flex:1, fontSize:10, color:'#1f1f2e'}}>
              <div style={{flex:1 ,flexDirection: 'column'}}>
                <Icon icon='map-marker' style={{marginRight:5}}  /> 
                {gym.Address}
              </div>
              <div style={{flex:1 ,flexDirection: 'column'}}> 
                <Icon icon='phone'  style={{marginRight:5}} /> 
                {gym.OperationTel}
              </div>
            </div>
          </div>
         
        </div>
      </ListItem>
    );
  }


  render() {
    return (
      <div>
        <GymSearchHearder  onChange={this.selectCity.bind(this)} onKindChange={this.selectCity.bind(this)}/>
        <div id='pos'></div>
        {this.props.isFetching===true ?
          <div>
            <List
              dataSource={this.props.gyms}
              renderHeader={() => <ListHeader>搜尋到 {this.props.gyms.length} 筆資料</ListHeader>}
              renderRow={(gym)=>this.renderRow(gym)}
            />
          </div>
          :
          <div style={{textAlign: 'center', alignItems: 'center'}} >
            <ProgressCircular style={{width: '100px', height: '100px', alignItems: 'center'}} indeterminate />
          </div>
        }
      </div>
    );
  }
}

export default connect((state) =>(
  {
    gyms: state.getIn(['iplay', 'gyms']),
    isFetching: state.getIn(['iplay', 'isFetching']),
    lat: state.getIn(['iplay', 'lat']),
    lng: state.getIn(['iplay', 'lng'])
  }), {
    getGymList,
    getPos,
    getSelectGymID
  })(iplaySearchList);
