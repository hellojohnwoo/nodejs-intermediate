async function getUser() { // Function that the user gets when loading
  try {
    const res = await axios.get('/users');
    const users = res.data;
    const list = document.getElementById('list');
    list.innerHTML = '';

    // Repeated display of screens and event links for each user
    Object.keys(users).map(function (key) {
      const userDiv = document.createElement('div');
      const span = document.createElement('span');
      span.textContent = users[key];
      const edit = document.createElement('button');
      edit.textContent = 'modify';
      
      edit.addEventListener('click', async () => { // Click the Modify button
        const name = prompt('Please enter the username, you want to modify');
        if (!name) {
          return alert('You must enter your username');
        }
        try {
          await axios.put('/user/' + key, { name });
          getUser();
        } catch (err) {
          console.error(err);
        }
      });

      const remove = document.createElement('button');
      remove.textContent = 'delite';
      remove.addEventListener('click', async () => { // Click the Delete button
        try {
          await axios.delete('/user/' + key);
          getUser();
        } catch (err) {
          console.error(err);
        }
      });
      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      list.appendChild(userDiv);
      console.log(res.data);
    });

  } catch (err) {
    console.error(err);
  }
}

window.onload = getUser; // Call getUser when loading screen

// Run on form submission(submit)
document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = e.target.username.value;
  if (!name) {
    return alert('Please enter the username');
  }
  try {
    await axios.post('/user', { name });
    getUser();
  } catch (err) {
    console.error(err);
  }
  e.target.username.value = '';
});
