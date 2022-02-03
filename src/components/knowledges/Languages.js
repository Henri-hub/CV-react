import React, { Component } from 'react'
import ProgressBar from './ProgressBar'

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: 'Html', xp: 1.8 },
      { id: 2, value: 'Css', xp: 1.8 },
      { id: 3, value: 'Javascript', xp: 1.8 },
      { id: 4, value: 'Php', xp: 1.6 },
      { id: 5, value: 'Python', xp: 0.5 }
    ],
    frameworks: [
      { id: 1, value: 'Bootstrap', xp: 1.8 },
      { id: 2, value: 'Symphony', xp: 1 },
      { id: 3, value: 'Saas', xp: 0.7 },
      { id: 4, value: 'Django', xp: 0.5 },
      //{ id: 5, value: 'React', xp: 0.5 }
    ]
  }

  render () {
    let { languages, frameworks } = this.state

    return (
      <div className='languagesFrameworks'>
        <ProgressBar
          languages={languages}
          className='languagesDisplay'
          title='langages'
        />
        <ProgressBar
          languages={frameworks}
          className='frameworksDisplay'
          title='frameworks & bibliothèques'
        />
      </div>
    )
  }
}

export default Languages
