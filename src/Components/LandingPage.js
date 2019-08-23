import * as React from 'react';
import { Typography, Input, Button, message } from 'antd';
import '../Styles/landing.css';

const { Title } = Typography;
const { Search } = Input;

export default class LandingPage extends React.Component {
    state = {
        loadingSearch: false,
        loadingButton: false,
    }

    onSearch = (val) => {
        const { history } = this.props;
        this.setState({
            loadingSearch: true,
        })
        history.push(`/forecast/${val}`);
    }

    currentLocation = () => {
        const { history } = this.props;
        this.setState({
            loadingButton: true,
        })
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(position => {
                history.push(`/forecast/${position.coords.longitude}/${position.coords.latitude}`);
            }, err => {
                if (err) {
                    message.warning('Could not get your location.');
                    this.setState({
                        loadingButton: false,
                    });
                }
            });
          } else {
            message.warning('This browser does not support geolocation!');
            this.setState({
                loadingButton: false,
            })
          }
    }

    render() {
        const { loadingSearch, loadingButton} = this.state;
        return (
            <div className='landing-page'>
                <Title level={1}>Get your forecast!</Title>
                <div className='landing-page-inputs'>
                    <Search
                        placeholder='Input city name...'
                        enterButton={<Button type='primary' loading={loadingSearch}>Get forecast!</Button>}
                        size='large'
                        onSearch={value => this.onSearch(value)}
                        style={{ marginRight: '10px' }}
                    />
                    <Button
                        icon='compass'
                        type='primary'
                        size='large'
                        style={{ marginLeft: '30px'}}
                        onClick={() => this.currentLocation()}
                        loading={loadingButton}
                    >
                        Current location
                    </Button>
                </div>
            </div>
        );
    }
}
