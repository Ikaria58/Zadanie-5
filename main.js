const form = document.getElementById('birthdayForm');
const dialog = document.getElementById('resultDialog');
const dialogContent = document.getElementById('dialogContent');
const closeBtn = document.getElementById('closeDialog');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputDateValue = document.getElementById('birthDate').value;
  if (!inputDateValue) return;

  const dzis = dayjs();
  const dataUrodzenia = dayjs(inputDateValue);
  
  const mineloDni = dzis.diff(dataUrodzenia, 'day');

  const biezacyRok = dzis.year();
  let najblizszeUrodziny = dataUrodzenia.year(biezacyRok);

  if (najblizszeUrodziny.isBefore(dzis, 'day')) {
    najblizszeUrodziny = najblizszeUrodziny.add(1, 'year');
  }

  const czyDzisUrodziny = dzis.format('MM-DD') === dataUrodzenia.format('MM-DD');
  const pozostaloTygodni = najblizszeUrodziny.diff(dzis, 'week');

  let tekstDialogu = `<p>Od Twojego dnia narodzin minęło już: ${mineloDni} dni.</p>`;

  if (czyDzisUrodziny) {
    alert("wszystkiego najlepszego!");
  } else {
    if (pozostaloTygodni === 0) {
      tekstDialogu += `<p class="font-bold">masz urodziny w tym tygodniu!</p>`;
    } else {
      tekstDialogu += `<p>Ilość tygodni, które pozostały do urodzin: ${pozostaloTygodni}</p>`;
    }
  }

  dialogContent.innerHTML = tekstDialogu;
  dialog.showModal();
});

closeBtn.addEventListener('click', () => {
  dialog.close();
});
