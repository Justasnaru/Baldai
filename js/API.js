const serverURL = 'http://localhost:3000';

class API {
  static getFurniture = (success, failure) => {
    setTimeout(() => {
      fetch(`${serverURL}/furniture`)
        .then(res => res.json())
        .then(success)
        .catch(failure)
    }, 1000);
  }

  static deleteFurniture = (id, success, failure) => {
    fetch(`${serverURL}/furniture/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then(success)
      .catch(failure)
  }
}