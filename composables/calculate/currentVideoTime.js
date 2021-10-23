function calculateCurrentVideoTime(percentDisintegrated) {
  return parseFloat(((percentDisintegrated * 60) / 100).toFixed(1));
}

export { calculateCurrentVideoTime };
