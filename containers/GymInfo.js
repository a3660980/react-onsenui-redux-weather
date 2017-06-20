import React from 'react';
import { connect } from 'react-redux';

import { platform } from 'onsenui';
import { getGymById } from '../actions'
import {
  Page,
  ProgressCircular,
  Icon
} from 'react-onsenui';
import NavBar from '../components/NavBar';

const styles = {
  main: {
    fontFamily: platform.isIOS() ? 'Lato' : null,
    textAlign: 'center',
    width: '100%',
  },
  invalid: {
    color: 'red',
    fontSize: '20px'
  },
  progress: {
    width: '50px',
    height: '50px'
  },
  name: {
    textTransform: 'uppercase',
    fontSize: '24px',
    lineHeight: '24px'
  },
  country: {
    margin: '2px 0 0 0',
    textTransform: 'uppercase',
    fontSize: '12px',
    lineHeight: '12px'
  },
  icon: {
    fontSize: '100px',
    margin: '20px 0 0px 0'
  },
  data: {
    fontSize: '40px',
    fontWeight: 300,
    display: 'flex',
    margin: '40px 25px'
  },
  dataColumn: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  dataValue: {
    fontSize: '60px'
  },
  dataCaption: {
    fontSize: '14px',
    fontWeight: 400
  }
};


class GymInfo extends React.Component {
    constructor(props) {
    super(props);
  }

  componentWillMount() {
     this.props.getGymById(this.props.GymID)
  }

  render() {
      console.log(this.props.gym)
      let gym = this.props.gym;
    return (
        <Page renderToolbar={() => <NavBar backButton={true} title={`${gym.Name}`} navigator={this.props.navigator} />}>
            {this.props.isFetching===true ?
                <div style={styles.main}>
                    <div sytle={{flex:1}}>
                        <img src={gym.Photo1Url} style={{height:200, marginBottom:30}}/>
                    </div>
                    <div style={{background:'#52c7c3', margin:5}}>場地介紹</div>
                    <div style={{flex:1 ,flexDirection: 'column', textAlign:'left', paddingLeft:30}}>
                        <Icon icon='map-marker' style={{marginRight:5}}  /> 
                        {gym.Addr}
                    </div>
                    <div style={{flex:1 ,flexDirection: 'column', textAlign:'left', paddingLeft:30}}>
                        <Icon icon='phone' style={{marginRight:5}}  />
                        {gym.OperationTel}
                    </div>
                     <div style={{flex:1 ,flexDirection: 'column', textAlign:'left', paddingLeft:30}}>
                        <Icon icon='info-circle' style={{marginRight:5}}  />
                        <a href={gym.WebUrl}>{gym.WebUrl}</a>
                    </div>
                    <div style={{flex:1 ,flexDirection: 'column', textAlign:'left', paddingLeft:30}}>
                        <Icon icon='cogs' style={{marginRight:5}}  />
                        {gym.GymType}
                    </div>
                    <div style={{background:'#52c7c3', margin:5}}>場地簡介</div>
                    <div style={{textAlign:'left', paddingLeft:30}}>
                      {gym.Introduction}
                    </div>
                     <div style={{background:'#52c7c3', margin:5}}>賽事經歷</div>
                     <div style={{textAlign:'left', paddingLeft:30}}>
                      {gym.Contest}
                    </div>
                </div>
            :
                <div style={{textAlign: 'center', alignItems: 'center'}} >
                    <ProgressCircular style={{width: '100px', height: '100px', alignItems: 'center'}} indeterminate />
                </div>
             }
        </Page>
    )
  }
}

export default connect((state) => (
    {
        GymID: state.getIn(['gym','GymID']),
        gym: state.getIn(['gym', 'gym']),
        isFetching: state.getIn(['gym', 'isFetching'])
    }),{
        getGymById
    }
)(GymInfo);
