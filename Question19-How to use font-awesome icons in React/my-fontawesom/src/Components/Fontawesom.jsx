import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faHome } from "@fortawesome/free-solid-svg-icons";
export const Fontawesom = () => {
  return (
  <>
  <ul>
  <li><FontAwesomeIcon icon={faHome} /> Home </li>
          <li><FontAwesomeIcon icon={faAddressBook} /> Contact Us </li>

  </ul>

  </>
  )
}
