const dayStart = "7:30";
const dayEnd = "17:30"

function scheduleMeeting(startTime, durationMinutes){
    const [, meetingStartHour, meetingStartMinutes] =
    startTime.match(/^(\d{1,2}): (\d{2})$/) || [];

    console.log(meetingStartHour, meetingStartMinutes)
}

scheduleMeeting("abd", 15)