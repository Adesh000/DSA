function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); // Sort the intervals based on the start time

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false; // There is an overlap, person cannot attend all meetings
    }
  }

  return true; // No overlapping intervals, person can attend all meetings
}

const intervals1 = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(canAttendMeetings(intervals1)); // Output: false (Intervals [0, 30] and [5, 10] overlap)

const intervals2 = [
  [1, 5],
  [6, 10],
  [11, 15],
];
console.log(canAttendMeetings(intervals2)); // Output: true (No overlapping intervals, person can attend all meetings)
