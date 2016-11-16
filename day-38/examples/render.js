// old version: 
// const questions = this.props.clue;
//
// if (this.state.clicked === false && this.state.answered === false) {
//   return (
//     <li className="points" onClick={this.handleQuestion}>
//       ${questions.value}
//     </li>
// 	)
// } else if (this.state.clicked === true && this.state.answered === false) {
// 	return (
// 		<div>
// 			<li className = "points" onClick = {this.handleQuestion}>
// 				${questions.value}
// 			</li>
// 			<div className = "modal">
//         <div className = "question">
// 					<h3>{questions.question}</h3>
// 					<form>
// 						<input id="answer" type="text" placeholder="Answer Here" />
// 						<input id="submit" type="submit" value="Submit" onClick={this.handleSubmit} />
// 					</form>
// 				</div>
// 			</div>
// 		</div>
// 	);
// } else if (this.state.clicked === true &&
// 					this.state.answered === true &&
// 					this.state.correct === false) {
// 	return (
// 		<li className="empty-points">
// 			<span className="answer">{questions.answer.replace(/\<[\/]?i\>/, '')}</span>
// 		</li>
// 	)
// } else if (this.state.clicked === true &&
// 					this.state.answered === true &&
// 					this.state.correct === true) {
// 	return (
// 		<li className="empty-points">
// 			<span className="correct-answer">CORRECT !</span>
// 		</li>
// 	);
// }




render() {
	const questions = this.props.clue;

	let liClassName = 'points';
	let spanClassName;
	let liClick;
	let spanContents = questions.value;
	let modal;

	if (this.state.clicked === false && this.state.answered === false) {
		liClick = this.handleQuestion;
	}

	else if (this.state.clicked === true && this.state.answered === false) {
		liClick = this.handleQuestion;
		modal = (
			<Modal message={questions.question}
				submitHandler={this.handleSubmit}/>
		);
	}

	else if (this.state.clicked === true &&
						this.state.answered === true &&
						this.state.correct === false) {
		liClassName = 'empty-' + liClassName;
		spanClassName = 'answer';
		spanContents = questions.answer.replace(/\<[\/]?i\>/, '');
	}

	else if (this.state.clicked === true &&
						this.state.answered === true &&
						this.state.correct === true) {
		liClassName = 'empty-' + liClassName;
		spanClassName = 'correct-answer';
		spanContents = 'CORRECT !'
	}

	return (
		<li className={liClassName} onClick={liClick}>
			<span className={spanClassName}>{spanContents}</span>
			{modal}
		</li>
	);
}
