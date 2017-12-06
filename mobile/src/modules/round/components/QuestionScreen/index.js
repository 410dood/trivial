import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { iOSColors, iOSUIKit, human } from 'react-native-typography';
import * as roundActions from '../../actions';

import AnswersList from '../AnswersList';


class QuestionScreen extends React.Component {
  render() {
    const { question } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: iOSColors.black, padding: 12 }}>
        {question ?
          <View>
            <Text style={human.bodyWhite}>{question.text}</Text>
            <AnswersList answers={question.answers} />
          </View>
          :
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' } }>
            <Text style={[iOSUIKit.largeTitleEmphasizedWhite, { textAlign: 'center'}]}>Waiting for question...</Text>
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  question: state.round.default.question,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    question: bindActionCreators(roundActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionScreen);