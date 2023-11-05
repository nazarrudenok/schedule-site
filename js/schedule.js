const url = 'jsons/hours.json';

var dayCont = document.getElementsByClassName('day-cont')[0];

fetch(url)
  .then(response => {
    if (response.status !== 200) {
      console.error(`Помилка: ${response.status}`);
      return;
    }
    return response.json();
  })
  .then(data => {
    var full = data['full'];

    for (i in full) {
        var num = i;
        var clockCont = document.createElement('div');
        var clockNum = document.createElement('p');
        var clockItem = document.createElement('p');
        clockCont.classList.add('clock-cont');
        clockNum.classList.add('clock-num');
        clockItem.classList.add('clock-item');
        clockNum.textContent = `${i}`;
        clockItem.textContent = `${full[i]}`;
        clockCont.appendChild(clockNum);
        clockCont.appendChild(clockItem);
        dayCont.appendChild(clockCont);
        num++;
    }
  })
  .catch(error => {
    console.error('Помилка:', error);
  });