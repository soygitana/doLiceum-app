import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import Question from './Question.jsx';
import QuestionCount from './QuestionCount.jsx';
import AnswerOption from './AnswerOption.jsx';

function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }
    return (
        <CSSTransitionGroup
            className="container"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={0.1}
            transitionAppear
            transitionAppearTimeout={800}
        >
            <div key={props.questionId}>
                <QuestionCount counter={props.questionId} total={props.questionTotal} />
                <Question content={props.question} />
                <div className="container-flex">
                    <ul className="answerOptions">
                        {props.answerOptions.map(renderAnswerOptions)}
                    </ul>
                </div>
            </div>
        </CSSTransitionGroup>
    );
}

Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;