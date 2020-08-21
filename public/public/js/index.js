const deleteItem = async () => {

    const data = {
        cities : event.target.value
    };

    const url =`http://localhost:3000/delete/${data.cities}`;

   await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }

    });

   return window.location.replace("http://localhost:3000/favourites");

}