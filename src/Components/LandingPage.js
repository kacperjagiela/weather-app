import * as React from 'react';
import { Typography, Input, Button, message } from 'antd';
import '../Styles/landing.css';

const { Title } = Typography;
const { Search } = Input;

export default class LandingPage extends React.Component {
    onSearch = (val) => {
        const { history } = this.props;
        history.push(`/forecast/${val}`);
    }

    currentLocation = () => {
        const { history } = this.props;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                history.push(`/forecast/${position.coords.longitude}/${position.coords.latitude}`);
            });
          } else {
            message.warning('This browser does not support geolocation');
          }
    }

    render() {
        return (
            <div className='landing-page'>
                <Title level={1}>Get your forecast!</Title>
                <div className='landing-page-inputs'>
                    <Search
                        placeholder='Input city name...'
                        enterButton='Get forecast'
                        size='large'
                        onSearch={value => this.onSearch(value)}
                        style={{ marginRight: '10px' }}
                    />
                    <Button
                        icon='compass'
                        type='primary'
                        size='large'
                        style={{ marginLeft: '10px'}}
                        onClick={() => this.currentLocation()}
                    >
                        Current location
                    </Button>
                </div>
            </div>
        );
    }
}
