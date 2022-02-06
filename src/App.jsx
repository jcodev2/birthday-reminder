/* **************** Imports **************** */
import React, { useState } from 'react'
import Card from './components/Card'
import Container from './components/Container'
import User from './components/User'
import getImage from './utilities/functions/getImage'

/* **************** Variables **************** */
const userImage = getImage('user')
const initialState = {
  cards: [
    {
      id: 1,
      userName: '@johndoe',
      years: '29',
      image: userImage
    },
    {
      id: 2,
      userName: '@camila',
      years: '15',
      image: userImage
    },
    {
      id: 3,
      userName: '@fernando',
      years: '25',
      image: userImage
    },
    {
      id: 4,
      userName: '@juan',
      years: '20',
      image: userImage
    },
    {
      id: 5,
      userName: '@pedro',
      years: '30',
      image: userImage
    }
  ]
}

/* **************** Functions **************** */
const App = () => {
  const [state, setState] = useState(initialState)

  const clearBirthdays = () => {
    // * if the user clicks the button, the cards should be cleared
    setState({
      cards: []
    })
  }

  return (
    <Container>
      <Card>
        {state.cards.length < 1 ? (
          <div className='no-birthdays'>No birthdays today</div>
        ) : (
          <p className='birthdays'>
            Today we have {state.cards.length} birthdays
          </p>
        )}
        {state.cards.map((card) => (
          <User key={card.id} {...card} />
        ))}
        {
          // * if the cards are not empty, show the button to clear the cards
          state.cards.length > 0 && (
            <button className='clear-button' onClick={clearBirthdays}>
              Clear Birthdays
            </button>
          )
        }
      </Card>
    </Container>
  )
}

/* **************** Code Execution **************** */
export default App
