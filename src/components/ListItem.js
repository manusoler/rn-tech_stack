import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  onPressListItem(id) {
    this.props.selectLibrary(id);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { expanded, library } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text>{library.description}</Text>
        </CardSection>
      );
    }
    return null;
  }

  render() {
    const { id, title } = this.props.library;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onPressListItem.bind(this, id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15
  }
};

const mapStateToProps = (state, ownProps) => ({
  //selected: state.selected
  expanded: state.selected === ownProps.library.id
});

export default connect(
  mapStateToProps,
  actions
)(ListItem);
