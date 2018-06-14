import React from 'react';
import classNames from 'classnames';

import './style.css';

const SelectComponent = ({ selectOptions, selectTheme, showSelectOptions, selectedText, placeHolder }) => {

  let selectClass = classNames({
    'btn-group': true,
    'dropdown-bg-light': selectTheme == 'light' || selectTheme == null,
    'dropdown-bg-dark': selectTheme == 'dark'
  })

  return (
    <div>
      {!placeHolder
        ? <div className={selectClass}>
            <button
              className="btn btn-default dropdown-toggle"
              type="button"
              onMouseUp={(event) => showSelectOptions(event)} >
              {!selectedText
                ? "Please select..."
                : selectedText }
            </button>
            <div className="dropdown-menu">
              {selectOptions}
            </div>
          </div>
        : <div className={selectClass}>
          <button
            className="btn btn-default dropdown-toggle"
            type="button"
            onMouseUp={(event) => showSelectOptions(event)} >
            {!selectedText
              ? placeHolder
              : selectedText }
          </button>
          <div className="dropdown-menu">
            {selectOptions}
          </div>
        </div>
      }
    </div>
  )
}

export default SelectComponent