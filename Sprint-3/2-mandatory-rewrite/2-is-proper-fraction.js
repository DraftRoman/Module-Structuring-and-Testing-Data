function isProperFraction(numerator, denominator) {
    if (numerator < 0 && denominator < 0) {
        numerator = -numerator;
        denominator = -denominator;
    }
    if (denominator === 0) return false;
    if (numerator < denominator) return true;
  else return false;
}

module.exports = isProperFraction;