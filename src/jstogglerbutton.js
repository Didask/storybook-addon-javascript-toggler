import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { IconButton } from '@storybook/components';
import { SET_STORIES } from '@storybook/core-events';

const iframeId = 'storybook-preview-iframe';

const noJSIcon = 'M921.002 473h-368.008v-368.004c0.002-22.090-17.906-39.996-39.996-39.996-22.088 0-39.998 17.91-39.998 40v368h-368.002c-22.094 0-40 17.908-39.998 40-0.002 22.090 17.904 39.996 39.996 39.996l368.004-0.002v368.010c0 22.094 17.908 40 40 39.996 22.090 0.004 39.996-17.902 39.996-39.996v-368.010h368.010c22.090 0.002 39.994-17.906 39.994-39.996-0-22.088-17.908-39.998-39.998-39.998z'

export default class JSTogglerButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isJSEnabled: true
    }

    this.listener = (e) => {
      console.log('listener', e)
    }
  }

  componentDidMount() {
    const { api } = this.props;
    api.on(SET_STORIES, this.listener);
  }

  componentWillUnmount() {
    const { api } = this.props;
    api.off(SET_STORIES, this.listener);
  }

  toggleJS() {
    this.setState({ isJSEnabled: !this.state.isJSEnabled })
  }

  render() {
    const { isJSEnabled } = this.state;

    return (
      <Fragment>
        <IconButton
          key="javascript-toggler"
          title="Click to toggle javascript"
          active={isJSEnabled}
          onClick={e => this.toggleJS(e)}
        >
          <svg viewBox="0 0 1024 1024">
            <path d={noJSIcon}  style={{fill: 'currentColor'}}/>
          </svg>
        </IconButton>
      </Fragment>
    )
  }
}

JSTogglerButton.propTypes = { api: PropTypes.shape({ on: PropTypes.func }).isRequired }
