import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

function Result(props) {
    return (
        <CSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <div>
                <p>Twoja super moc to: <strong>{props.quizResult}</strong>!</p>
                <p>Gdzie możesz jej użyć? <strong>SPOŁECZNE LICEUM OGÓLNOKSZTAŁCĄCE NR 3</strong></p>
            </div>
        </CSSTransitionGroup>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired
};

export default Result;