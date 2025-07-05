import React, { useEffect, useState } from 'react';

const SavedData = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('formData'));
    setFormData(data);
  }, []);

  if (!formData) {
    return <p>No hay datos guardados.</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Datos Guardados</h1>
      <ul>
        <li><strong>Nombre:</strong> {formData.name}</li>
        <li><strong>Apellidos:</strong> {formData.surname}</li>
        <li><strong>Fecha:</strong> {formData.date}</li>
        <li><strong>Email:</strong> {formData.email}</li>
      </ul>
    </div>
  );
};

export default SavedData;
