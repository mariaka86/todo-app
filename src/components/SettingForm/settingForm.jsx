import React from 'react';
import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';

const AddForm = ({ children }) => {
  const { defaultValues, addItem } = useContext(SettingsContext);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  
  