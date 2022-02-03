import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Centre d'intérêts</h3>
            <ul>
               <li className='hobby'>
                    <i className="fas fa-code"></i>
                    <span>Programmation</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Course à pied</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-book-reader'></i>
                    <span>Littérature</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-pray'></i>
                    <span>Méditation</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;