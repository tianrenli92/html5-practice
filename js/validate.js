function validate(nickName, vote, comment) {
  if (nickName === '') {
    alert('Please enter your nickname.');
    return false;
  } else if (vote === undefined) {
    alert('Please vote.');
    return false;
  } else if (comment === '') {
    alert('Please enter your comment.');
    return false;
  }
  return true;
}

export {validate};
