import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { deleteTodo } from '../actions/todos';

class TodoItem extends Component<{}> {

  constructor(props) {
    super(props);
    this.deleteSelf = this.deleteSelf.bind(this);
  }

  deleteSelf() {
    console.log(this);
    console.log(this.props);
    this.props.deleteTodo(this.props.id);
  }
  render() {
    return (
      <TouchableOpacity onPress={this.deleteSelf}>
        <View style={styles.todoContainer}>
          <Text style={styles.todoText}>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: -1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id))
});

export default connect(undefined, mapDispatchToProps)(TodoItem);