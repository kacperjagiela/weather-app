import * as React from 'react';
import { Icon } from 'antd';

export default class Forecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: ''
        }
        const { match } = this.props;
        // https for heroku
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${match.params.latitude}&lon=${match.params.longitude}&units=metric&APPID=27b52f2d96109ac0a634c200d7092254`)
            .then(async res => {
                this.setState({
                    data: await res.json(),
                    loading: false,
                });
                console.log(this.state.data);
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        const { loading, data } = this.state;
        return (
            <div className='landing-page'>
                {
                    loading ? <Icon type='loading' style={{ fontSize: '3rem' }} />
                        : <React.Fragment>
                            <h1>Your location: {data.name}</h1>
                            <h1>Temperature for your location: {data.main.temp}</h1>
                        </React.Fragment>
                }
            </div>
        );
    }
}
