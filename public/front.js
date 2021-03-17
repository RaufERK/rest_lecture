console.log(Math.random());
const urlAdress = 'http://localhost:3000';

const list = document.getElementById('list');
console.log('list --->', list);
list.addEventListener('click', async (event) => {
  // console.log('  event  =>', event.target.dataset.delete);

  if (event.target.dataset.delete) {
    console.log('Удаляю!!!!');
    const responce = await fetch(urlAdress, {
      method: 'DELETE', // или 'PUT'
      body: JSON.stringify({ id: event.target.dataset.delete }), // данные могут быть 'строкой' или {объектом}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else if (event.target.dataset.like) {
    console.log('Ставлю лайк!!!!');
    const responce = await fetch(`${urlAdress}/${event.target.dataset.like}`, {
      method: 'PUT', // или 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
});
