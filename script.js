$(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // updateUi();

  const currentHour = dayjs().hour() - 9;
  for (let i = 0; i < 9; i++) {
    const workRow = $(`#hour-${i}`);
    i < currentHour && workRow.removeClass("past").removeClass("present").removeClass("future").addClass("past");
    i === currentHour && workRow.removeClass("past").removeClass("present").removeClass("future").addClass("present");
    i > currentHour && workRow.removeClass("past").removeClass("present").removeClass("future").addClass("future");
  }

  $("button").click((e) => {
    const parentId = Object.values($(e.currentTarget).parent())[0].id.substring(5);
    const targetText = $(e.currentTarget).siblings("textarea").val();

    let schedule = [];
    const prevSchedule = JSON.parse(localStorage.getItem("schedule"));

    if (prevSchedule) {
      schedule = [...prevSchedule];
      schedule[parentId].text = targetText.trim();
      localStorage.setItem("schedule", JSON.stringify(schedule));
    } else {
      schedule = [
        { time: "9AM", text: "" },
        { time: "10AM", text: "" },
        { time: "11AM", text: "" },
        { time: "12PM", text: "" },
        { time: "1PM", text: "" },
        { time: "1PM", text: "" },
        { time: "3PM", text: "" },
        { time: "4PM", text: "" },
        { time: "5PM", text: "" },
      ];

      schedule[parentId].text = targetText.trim();
      localStorage.setItem("schedule", JSON.stringify(schedule));
    }

    // updateUi();
  });

  // function updateUi() {
  //   const prevSchedule = JSON.parse(localStorage.getItem("schedule"));
  //   if (prevSchedule) {
  //     for (let i = 0; i < 9; i++) {
  //       const workRow = $(`#hour-${i}`);
  //       workRow.children(1).val(prevSchedule[i].text);
  //     }
  //   }
  // }
});
