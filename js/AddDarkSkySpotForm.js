import React, { useState, useEffect, useRef } from 'react';

const AddDarkSkySpotForm = () => {
  const [name, setName] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [description, setDescription] = useState();
  const [type, setType] = useState();
  const [errors, setErrors] = useState([]);
  const myErrorRef = useRef(null);

  const handleNameChange = e => {
    setName(e.target.value);
  }
  const handleLatChange = e => {
    setLat(e.target.value);
  }
  const handleLngChange = e => {
    setLng(e.target.value);
  }
  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  }
  const handleTypeChange = e => {
    setType(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (validationErrors.length !== 0) {
      setErrors(validationErrors);
      window.scrollTo(0, myErrorRef.current.offsetTop);
      // scroll nie dziala!!!
    } else {
      createSpot();
    }

  }
  const validate = () => {
    const validationErrors = [];
    const letters = /^[A-Za-z]+$/;
    if (!name || name.length < 5 || !name.match(letters)) {
        validationErrors.push('Nazwa powinna składać się z min 5 liter!')
    }
    if (!lat || isNaN(lat) || !(lat >= -90 && lat <= 90)) {
        validationErrors.push('Podaj szerokość w prawidłowym zasiegu(-90 do 90)!')
    }
    if (!lng || isNaN(lng) || !(lng >= -180 && lng <= 180)) {
        validationErrors.push('Podaj długość w prawidłowym zasiegu(-180 do 180)!')
    }
    if (!description || description.length <= 20 || !description.match(letters)) {
        validationErrors.push('Dodaj opis składający sięz min 20 liter!')
    }
    if (!type) {
        validationErrors.push('Wybierz rodzaj miejscówki!')
    }
    return validationErrors;
  }

  const createSpot = () => {
    const url = 'http://localhost:3000/spots';
    const spot = {
      name,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      description,
      type
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(spot)
    })
      .then(response => {
      if (response.status === 201) {
        setName('');
        setLat('');
        setLng('');
        setDescription('');
        setType('');
        setErrors([]);
      }
    })
  }

  return (
    <div className="container visible_form">
      <fieldset className="form_field">
        <form onSubmit={handleSubmit} className="form_flex">
          <label className="form_label">Nazwa</label>
          <input  value={name} type="text" name="name" onChange={handleNameChange}/>
          <label className="form_label">Szerokość geograficzna</label>
          <input value={lat} type="number" name="lat" onChange={handleLatChange}/>
          <label className="form_label">Długość geograficzna</label>
          <input value={lng} type="number" name="lng" onChange={handleLngChange}/>
          <label className="form_label">Dodaj opis miejsca</label>
          <textarea value={description} type="text" name="description" onChange={handleDescriptionChange} rows="10" cols="40" placeholder="Dodaj opis"/>
          <label className="form_label">Wybierz typ miejsca</label>
          <select value={type} name="type" onChange={handleTypeChange}>
            <option></option>
            <option value="spot">Miejscówka</option>
            <option value="observatory">Obserwatorium</option>
          </select>
          <button className="form_btn" type="submit">Dodaj!</button>
        </form>
      </fieldset>
      <ul ref={myErrorRef} className="form_errors">
          {errors.map((error, index) => {
              return <li style={{color: "red", fontWeight: "bold"}} key={index}>{error}</li>
          })}
      </ul>
    </div>
  )
};

export default AddDarkSkySpotForm;
