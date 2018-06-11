import React from 'react';
import classNames from 'classnames';

import './style.css';

const SelectComponent = ({ selectOptions, showSelectOptions, selectedText, placeHolder }) => {

  return (
    <div>
      {!placeHolder
        ? <div className="btn-group">
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
        : <div className="btn-group">
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

export default SelectComponent;