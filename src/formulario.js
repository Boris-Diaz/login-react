/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Formulario = () => {
  return (
    <Formik
      initialValues={{
        nombre: '',
        correo: ''
      }}
      validate={(valores) => {
        const errores = {};

        if (!valores.nombre) {
          errores.nombre = 'Por favor ingresa un nombre';
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
          errores.nombre = 'El nombre solo puede contener letras y espacios';
        }

        if (!valores.correo) {
          errores.correo = 'Por favor ingresa un correo electrónico';
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
          errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guion bajo.';
        }

        return errores;
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm();
      }}
    >
      {({ errors }) => (
        <div className="login-box">
          <h2>Login</h2>
          <Form className='formulario'>
            <div className="user-box">
              <label htmlFor='nombre'></label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder='Nombre'
              />
              <ErrorMessage name="nombre" component={() => (
                <div className='error'>{errors.nombre}</div>
              )} />
            </div>
            <div className="user-box">
              <label htmlFor='correo'></label>
              <Field
                type="text"
                id="correo"
                name="correo"
                placeholder='correo@correo.com'
              />
              <ErrorMessage name="correo" component={() => (
                <div className='error'>{errors.correo}</div>
              )} />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Formulario;

