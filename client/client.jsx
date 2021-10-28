import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { handleVote } from "../shared/utility"

let state = undefined;

//bult in api for ajax
fetch("http://localhost:7777/data")
    .then(data => data.json())
    .then(json => {
        state = json;
        console.log("Got the state", state)
        render();
    });

    function handleVote(answerId, increment) {
        state.answer = handleModifyAnswerVotes(state.answers, answerId, increment)
    }


// ReactDOM.render(<App />, document.querySelector("#Container"))

function handleVote(answerId, increment){

    state.answers = state.answers.map(answer => {
        if (answer.answerId !== answerId) {
            return answer;
        } else {
            return {...answer, upvotes:answer.upvotes + increment}
        }
    })
};

//app may render multiple times

function render() {
    ReactDOM.hydrate(<App {...state} handleVote={handleVote}/>, document.querySelector("#Container"))
}

// render()