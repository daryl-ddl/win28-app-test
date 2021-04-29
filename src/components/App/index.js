import React from 'react';
import Header from '../Header/index';
import RaceMeetingsList from '../RaceMeetingsList/index';
import PreviousRacesList from '../PreviousRacesList/index';
import Subscribe from '../Subscribe/index';
import Checkout from '../Checkout/index.jsx';
import { Flex, Container } from '@chakra-ui/react';
import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import axios from 'axios';

const api = new WooCommerceRestApi({
  url: 'https://win28dev.wpengine.com',
  consumerKey: process.env.REACT_APP_WC_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_WC_CONSUMER_SECRET,
  version: 'wc/v3'
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.setPageTitle = this.setPageTitle.bind(this);

    // https://reactjs.org/docs/lifting-state-up.html
    this.state = {
      title: '',
      raceMeetingsList: {
        isLoaded: true,
        raceMeetings: []
      },
      previousRacesList: {
        isLoaded: true,
        raceMeetings: []
      },
      subscribe: {
        isLoaded: true,
        products: []
      }
    };
  }

  setPageTitle(title) {
    this.setState({
      title: title
    })
  }

  componentDidMount() {

    // Update the Race Meetings list
    this.setState({ raceMeetingsList: { isLoaded: false, raceMeetings: [] } });
    this.setState({ previousRacesList: { isLoaded: false, raceMeetings: [] } });

    axios.post(process.env.REACT_APP_WP_API_URL + 'custom/v1/race-meetings', {
      betting_location_code: 'SG'
    })
      .then((response) => {
        this.setState({ raceMeetingsList: { isLoaded: true, raceMeetings: response.data.current } });
        this.setState({ previousRacesList: { isLoaded: true, raceMeetings: response.data.previous } });
      })
      .catch((error) => {
        console.log(error.response);
      });

    // Update the Subscribe page with new Subscription plans
    this.setState({ subscribe: { isLoaded: false, products: [] } });

    api.get('products', {
      status: 'publish',
      type: 'subscription',
      category: '23'
    })
      .then((response) => {
        this.setState({ subscribe: { isLoaded: true, products: response.data } });
      });
  }

  render() {
    return (
      <Flex direction="column" h="100%">
        <HashRouter>
          <Header title={this.state.title} />
          <Flex grow="1" as="main">
            <Container w="100%" maxWidth="1140px" mx="auto" px={3}>
              <Switch>
                <Route exact path="/">
                  <RaceMeetingsList setPageTitle={this.setPageTitle} raceMeetingsList={this.state.raceMeetingsList} title={this.state.title} />
                </Route>
                <Route exact path="/previous-races">
                  <PreviousRacesList setPageTitle={this.setPageTitle} raceMeetingsList={this.state.previousRacesList} />
                </Route>
                <Route exact path="/subscribe">
                  <Subscribe setPageTitle={this.setPageTitle} subscribe={this.state.subscribe} />
                </Route>
                <Route exact path="/checkout">
                  <Checkout />
                </Route>
              </Switch>
            </Container>
          </Flex>
        </HashRouter>
        <footer></footer>
      </Flex>
    );
  }
}

export default App;