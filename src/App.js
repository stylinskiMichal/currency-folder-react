import React from 'react';
import './App.css';

function App() {
  return (
    <body className="body">
    <div className="container">

        <form className="form ">
            <h1 className="form__header">
                Kalkulator walut
            </h1>
            <fieldset className="form__fieldset">
                
                <p>
                    <label>
                        <span className="form__labelText">Złoty:</span>
                        <input className="form__field " type="number" min="1" step="0.01" required />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">Waluta:</span>
                        <select className="form__field">
                            <option value="EUR">Euro</option>
                            <option value="USD">Dolar amerykański</option>
                            <option value="GBP">Funt brytyjski</option>
                        </select>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className=" form__button">Oblicz kurs</button>
            </p>
            <p>
                <button type="reset" className=" form__button">Wyczyść!</button>
            </p>
        </form>
        <p className="text_result">Posiadasz: <strong className=" text_result">N/A</strong></p>
    </div>
</body>
  );
}

export default App;
