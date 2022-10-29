const countComments = (commentsArray) => {
  let countComment = 0;
  for (let i = 0; i < commentsArray.length; i += 1) {
    countComment += 1;
  }
  return countComment;
};

module.exports = { countComments };