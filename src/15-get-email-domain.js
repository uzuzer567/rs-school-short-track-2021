/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(/* email */) {
  let emailArray = email.split('');
  let answerArray = [];
  let answer = "";
  let counter = 0;
  for(let i = emailArray.length; i > 0; i--) {
	  if(counter === 0) {
		 if(emailArray[i] !== "@") {
		   answerArray.push(emailArray[i]);
		 }
		 else {
			 counter++;
		 }
	  }
  }
  for(let i = 0; i < answerArray.length; i++) {
	  answer += answerArray[i];
  }
  return answer;
}

module.exports = getEmailDomain;
