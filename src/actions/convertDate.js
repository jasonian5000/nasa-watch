const convertDate = (publishedAt) => {
    let months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December",
    };
    let year = publishedAt.substr(0, 4)
    let month = publishedAt.substr(5, 2)
    let day = publishedAt.substr(8, 2)
    return `${months[month]} ${day}, ${year}`
}

export default convertDate