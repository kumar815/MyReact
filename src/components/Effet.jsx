import React, { useEffect, useState } from 'react';

function Effect(props) {
  const [state, setState] = useState(0);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(d => d.json())
      .then((data) => {
        console.log(data);
        setPhones(data.products);
      });
  }, []);

  useEffect(() => {
    console.log('state dependency array');
  }, [state]);

  return (
    <div>
      {console.log('inside Return')}
      <h1>Effect {state}</h1>
      <button onClick={() => { setState(state + 1) }}>Increase</button>
      <div className='row'>
        <div className='col-sm-4'>
          {
            phones.length > 0 ? phones.map((phone, i) => {
              return (
                <>
                  <h3>name: {phone.title}</h3>
                  <p>description: {phone.description}</p>
                  <img alt={phone.title} style={{ width: '100px', height: '100px' }} src={phone.thumbnail} />
                </>
              );
            }) : (
              <div class='spinner-border' role='status'>
                <span class='sr-only'>Loading...</span>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Effect;