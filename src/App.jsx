


const App = () => {

  const a = 2;

  return (
    <div>
      {a%2 === 0 && <p>Broj {a} je paran</p>}
      {a%2 !== 0 && <p>Broj {a} je neparan</p>}
      {a === 0 && <p>Broj je nula.</p>}
      

    </div>
  );
}

export default App;
