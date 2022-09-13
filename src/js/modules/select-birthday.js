import $ from "jquery";
export function birthday() {
  let Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];// index => month [0-11]
  $(document).ready(function () {
    let optionDays = '<option value="day">---</option>';
    const selectedDay = "day";
    for (let i = 1; i <= Days[0]; i++) { //add option days
      optionDays += '<option value="' + i + '">' + i + '</option>';
    }
    $('#day').append(optionDays);
    $('#day').val(selectedDay);

    let optionMonth = '<option value="month">---</option>';
    const selectedMon = "month";
    for (let i = 1; i <= 12; i++) {
      optionMonth += '<option value="' + i + '">' + i + '</option>';
    }
    $('#month').append(optionMonth);
    $('#month').val(selectedMon);

    let d = new Date();
    let optionYear = '<option value="year">---</option>';
    const selectedYear = "year";
    for (let i = 1930; i <= d.getFullYear(); i++) {// years start i
      optionYear += '<option value="' + i + '">' + i + '</option>';
    }
    $('#year').append(optionYear);
    $('#year').val(selectedYear);
  });


  function isLeapYear(year) {
    year = parseInt(year);
    if (year % 4 != 0) {
      return false;
    } else if (year % 400 == 0) {
      return true;
    } else if (year % 100 == 0) {
      return false;
    } else {
      return true;
    }
  }

  function change_year(select) {
    if (isLeapYear($(select).val())) {
      Days[1] = 29;

    }
    else {
      Days[1] = 28;
    }
    if ($("#month").val() == 2) {
      let day = $('#day');
      let val = $(day).val();
      $(day).empty();
      let option = '<option value="day">---</option>';
      for (let i = 1; i <= Days[1]; i++) { //add option days
        option += '<option value="' + i + '">' + i + '</option>';
      }
      $(day).append(option);
      if (val > Days[month]) {
        val = 1;
      }
      $(day).val(val);
    }
  }

  function change_month(select) {
    let day = $('#day');
    let val = $(day).val();
    $(day).empty();
    let option = '<option value="day">---</option>';
    let month = parseInt($(select).val()) - 1;
    for (var i = 1; i <= Days[month]; i++) { //add option days
      option += '<option value="' + i + '">' + i + '</option>';
    }
    $(day).append(option);
    if (val > Days[month]) {
      val = 1;
    }
    $(day).val(val);
  }
}