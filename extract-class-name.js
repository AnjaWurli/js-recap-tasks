function extractClassName(sessionTitle) {
  //session title="Live-Session Class 2022 September"
  //return Jahr-Monat "2022-09"

  let result = "";
  sessionTitle = sessionTitle.split(" "); //[Live-Session, Class, 2022, Sept]
  let year = sessionTitle[2];
  let month = sessionTitle[3];

  if (year.length === 4 && +year) {
    result += year + "-";
  } else {
    return null;
  }

  switch (month) {
    case "Januar":
      result += "01";
      break;
    case "Februar":
      result += "02";
      break;
    case "März":
    case "Maerz":
      result += "03";
      break;
    case "April":
      result += "04";
      break;
    case "Mai":
      result += "05";
      break;
    case "Juni":
      result += "06";
      break;
    case "Juli":
      result += "07";
      break;
    case "August":
      result += "08";
      break;
    case "September":
      result += "09";
      break;
    case "Oktober":
      result += "10";
      break;
    case "November":
      result += "11";
      break;
    case "Dezember":
      result += "12";
      break;
    default:
      return null;
  }

  return result;
}
