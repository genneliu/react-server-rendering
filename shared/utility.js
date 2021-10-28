export function handleVote(answers, answerId, increment){

    return state.answers.map(answer => {
        if (answer.answerId !== answerId) {
            return answer;
        } else {
            return {...answer, upvotes:answer.upvotes + increment}
        }
    })
};
