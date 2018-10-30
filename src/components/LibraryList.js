import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderLibraryList(library) {
    return <ListItem library={library.item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderLibraryList}
        keyExtractor={library => String(library.id)}
      />
    );
  }
}

const mapStateToProps = state => ({
  libraries: state.libraries
});

export default connect(mapStateToProps)(LibraryList);
