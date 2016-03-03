import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/lib/app-bar';
import Main from './Main'
import DrinkSelection from './DrinkSelection'
import IconButton from 'material-ui/lib/icon-button';

injectTapEventPlugin();
class Home extends Component {

  renderContent() {
    const { title } = this.props;
    if (title === 'Can I drive yet?') return <Main />
    return <DrinkSelection />
  }

  getBarButton = () => {
    const { title } = this.props;
    if (title === 'Can I drive yet?') return null;

    return <IconButton iconClassName="material-icons">arrow_back</IconButton>
  };

  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    const barButton = this.getBarButton();

    const styles = {
      main: {
        maxWidth: '750px',
        width: '100%',
        margin: '0 auto',
        height: '100%',
      }
    }
    return (
      <main>
        <AppBar title={ title } showMenuIconButton={ !!barButton } iconElementLeft={ barButton } iconClassNameLeft="" />

        <div style={ styles.main }>
          { this.renderContent() }
        </div>
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)