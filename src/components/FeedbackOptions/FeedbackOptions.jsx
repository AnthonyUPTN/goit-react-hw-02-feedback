function FeedbackOptions({ options }) {
  const elements = options.map((el, idx) => <button key={idx}>{el}</button>);
  return <>{elements}</>;
}

export default FeedbackOptions;
