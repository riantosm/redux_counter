import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {ADD, SUBTRACT, UPDATE} from '../../redux/action';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {props, state} = this;

    const {counter, textInput, add, subtract, update} = props;
    return (
      <View style={s.container}>
        <Text>Counter</Text>
        <View style={s.space(10)} />
        <View style={s.row}>
          <TouchableOpacity onPress={subtract}>
            <View style={s.btn}>
              <Text style={s.btnText}>-</Text>
            </View>
          </TouchableOpacity>
          <Text style={s.count}>{counter}</Text>
          <TouchableOpacity onPress={add}>
            <View style={s.btn}>
              <Text style={s.btnText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={s.space(40)} />
        <Text>Text Input</Text>
        <View style={s.space(10)} />
        <TextInput
          placeholder={'Text'}
          value={textInput}
          onChangeText={value => update(value)}
          style={s.textInput}
        />
      </View>
    );
  }
}

const mapStateToProps = ({counter, textInput}) => ({
  counter,
  textInput,
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({type: ADD}),
  subtract: () => dispatch({type: SUBTRACT}),
  update: value => dispatch({type: UPDATE, value: value}),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  btn: {
    backgroundColor: 'green',
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btnText: {color: 'white'},
  count: {marginHorizontal: 30, fontSize: 50},
  textInput: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: 'green',
    width: 200,
    paddingHorizontal: 20,
    fontWeight: 'bold',
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
});
