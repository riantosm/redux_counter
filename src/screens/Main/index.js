import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
} from 'react-native';
import {connect} from 'react-redux';
import {ADD, SUBTRACT, UPDATE} from '../../redux/action';
import {fonts as f, colors as c} from '../../styles';

const {width, height} = Dimensions.get('window');

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {props, state} = this;

    const {counter, textInput, add, subtract, update} = props;
    return (
      <ScrollView style={s.scrollView}>
        <View style={s.container}>
          <Text style={s.title}>redux</Text>
          <Text style={s.text}>Counter</Text>
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
          <Text style={s.text}>Text Input</Text>
          <View style={s.space(10)} />
          <TextInput
            placeholder={'Text'}
            value={textInput}
            onChangeText={value => update(value)}
            style={s.textInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://github.com/riantosm')}
          style={s.link}>
          <Text style={s.linkText}>https://github.com/riantosm</Text>
        </TouchableOpacity>
      </ScrollView>
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
  scrollView: {
    backgroundColor: '#f2f2f2',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: height - 50,
  },
  title: {
    fontSize: 64,
    marginBottom: 30,
    color: c.primary,
    fontFamily: f.Aquawax,
  },
  text: {fontFamily: f.GoogleSans_Medi, color: c.secondary},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: c.primary,
    width: 200,
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: c.primary,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  btnText: {color: 'white'},
  count: {fontSize: 20},
  textInput: {
    borderWidth: 1,
    borderRadius: 100,
    borderColor: c.primary,
    width: 200,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {position: 'absolute', bottom: 0, width: '100%'},
  linkText: {
    textAlign: 'center',
    fontFamily: f.GoogleSans_Bold,
    color: c.primary,
    fontSize: 10,
  },
  space: value => {
    return {
      marginBottom: value,
    };
  },
});
