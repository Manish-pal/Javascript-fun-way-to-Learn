/*
 * Problem: Meeting Room Scheduler
 * ================================
 * You are managing a company with `m` meeting rooms numbered from 1 to m.
 * There are already some meetings booked in different rooms. Each booking contains:
 *   - roomId      → the room number
 *   - startTime   → booking start time
 *   - endTime     → booking end time
 *
 * You are given a new meeting request with:
 *   - requestedStartTime
 *   - requestedEndTime
 *
 * Your task is to determine which meeting rooms are available for the requested
 * time slot. A room is considered unavailable if an existing booking overlaps
 * with the requested meeting time.
 *
 * Overlap Condition:
 *   existingStart < requestedEndTime  AND  existingEnd > requestedStartTime
 *
 * Return a list of all available room IDs in ascending order.
 *
 * Example:
 *   m = 3
 *   existingBookings = [
 *     [1, 9, 11],   // room 1 is booked from 9 to 11
 *     [2, 13, 15],  // room 2 is booked from 13 to 15
 *   ]
 *   requestedStartTime = 10, requestedEndTime = 14
 *
 *   Room 1: booking (9–11) overlaps (10–14) → unavailable
 *   Room 2: booking (13–15) overlaps (10–14) → unavailable
 *   Room 3: no bookings → available
 *
 *   Output: [3]
 */

function scheduleMeetings(requestedStartTime, requestedEndTime, m, existingBookings) {
    var unavailable = {};

    for (var i = 0; i < existingBookings.length; i++) {
        var roomId = existingBookings[i][0];
        var bookingStart = existingBookings[i][1];
        var bookingEnd = existingBookings[i][2];

        if (bookingStart < requestedEndTime && bookingEnd > requestedStartTime) {
            unavailable[roomId] = true;
        }
    }

    var available = [];
    for (var roomId = 1; roomId <= m; roomId++) {
        if (!unavailable[roomId]) {
            available.push(roomId);
        }
    }

    return available;
}

// --- Tests ---
var bookings = [
    [1, 9, 11],
    [2, 13, 15],
];

console.log(scheduleMeetings(10, 14, 3, bookings)); // [3]
console.log(scheduleMeetings(12, 16, 3, bookings)); // [1, 3]  — room 1 is free (11 ≤ 12)
console.log(scheduleMeetings(1,  5,  3, bookings)); // [1, 2, 3] — no overlap
