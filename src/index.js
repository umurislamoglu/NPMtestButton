import React from 'react'
import styles from './styles.module.css'

export const Button = ({ type, text , ...otherProps}) => {
  return <button className={styles[type]} {...otherProps}>{text}</button>
}
