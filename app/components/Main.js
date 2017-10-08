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

import TodoItem from './todo_item';
import { addTodo, deleteTodo } from '../actions/todos';

const mapStateToProps = (state) => ({
  todos: state.todos
});

class Main extends Component<{}> {

  constructor(props) {
    super(props); 
    this.state = { newTodoText: "" };
    this.addNewTodo = this.addNewTodo.bind(this);
    // this.renderTodos = this.renderTodos.bind(this);
  }

  updateInput(e) {
    this.setState({
      newTodoText: e.nativeEvent.text
    })
  }
  addNewTodo() {
    const { newTodoText } = this.state;
    if (newTodoText && newTodoText != "")
      this.setState({
        newTodoText: ""
      });
    this.props.dispatch(addTodo(newTodoText));
  }

  render() {
    

    const renderTodos = () => {
      return this.props.todos.map((todo) => {
        return (
          <TodoItem text={todo.text} key={todo.id} id={todo.id} />
        )
      });
    };

    
    return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content"/>
           <View style={styles.topBar}>
            <Text style={styles.title}>
              To-Do List
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} 
              returnKeyType="done"
              placeholder="New To-Do"
              value={this.state.newTodoText}
              onChange={e=> this.updateInput(e)} 
              onSubmitEditing={this.addNewTodo}/>
          </View>
          <ScrollView automaticallyAdjustContentInsets={false}>
            {renderTodos()}
          </ScrollView>
          

        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#2c3e50',
  },
  topBar: {
    padding:16,
    paddingTop: 28,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71'
  },
  title: {
    color: 'white',
    fontSize: 20
  }, 
  inputContainer: {
    padding: 8,
    paddingTop: 0,
    backgroundColor: '#2ecc71'
  }, 
  input: {
    height: 26,
    padding: 4,
    paddingLeft: 8,
    borderRadius: 8,
    backgroundColor: 'white'
  }

  
});

export default connect(mapStateToProps)(Main);