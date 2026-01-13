// Step Components for Bathroom Calculator
// All components use React.createElement (no JSX)

// Step 1: Bathroom Dimensions
function Step1({ data, onChange, onNumeric, onNext }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 1: Bathroom Dimensions'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Original Bathroom Dimensions'),
      React.createElement('div', { className: 'grid-3' },
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Length (feet)'),
          React.createElement('input', {
            type: 'number',
            name: 'currentLength',
            value: data.currentLength,
            onChange: onNumeric,
            className: 'form-input',
            min: '0',
            step: '0.1'
          })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Width (feet)'),
          React.createElement('input', {
            type: 'number',
            name: 'currentWidth',
            value: data.currentWidth,
            onChange: onNumeric,
            className: 'form-input',
            min: '0',
            step: '0.1'
          })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Height (feet)'),
          React.createElement('input', {
            type: 'number',
            name: 'currentHeight',
            value: data.currentHeight,
            onChange: onNumeric,
            className: 'form-input',
            min: '0',
            step: '0.1'
          })
        )
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Modified Bathroom Dimensions (leave blank if same)'),
      React.createElement('div', { className: 'grid-3' },
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'New Length (feet)'),
          React.createElement('input', {
            type: 'number',
            name: 'newLength',
            value: data.newLength,
            onChange: onNumeric,
            className: 'form-input',
            min: '0',
            step: '0.1',
            placeholder: 'Leave blank if same'
          })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'New Width (feet)'),
          React.createElement('input', {
            type: 'number',
            name: 'newWidth',
            value: data.newWidth,
            onChange: onNumeric,
            className: 'form-input',
            min: '0',
            step: '0.1',
            placeholder: 'Leave blank if same'
          })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'New Height (feet)'),
          React.createElement('input', {
            type: 'number',
            name: 'newHeight',
            value: data.newHeight,
            onChange: onNumeric,
            className: 'form-input',
            min: '0',
            step: '0.1',
            placeholder: 'Leave blank if same'
          })
        )
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Which walls are being modified?'),
      React.createElement('div', { className: 'checkbox-grid' },
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'wallsModified.north',
            checked: data.wallsModified.north,
            onChange: onChange
          }),
          ' North Wall'
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'wallsModified.south',
            checked: data.wallsModified.south,
            onChange: onChange
          }),
          ' South Wall'
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'wallsModified.east',
            checked: data.wallsModified.east,
            onChange: onChange
          }),
          ' East Wall'
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'wallsModified.west',
            checked: data.wallsModified.west,
            onChange: onChange
          }),
          ' West Wall'
        )
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 2: Home Information and Windows
function Step2({ data, onChange, onNumeric, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 2: Home Information'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Door Location'),
      React.createElement('label', { className: 'form-label' }, 'Which wall is connected to the door?'),
      React.createElement('select', {
        name: 'doorWall',
        value: data.doorWall,
        onChange: onChange,
        className: 'form-input'
      },
        React.createElement('option', { value: '' }, 'Select wall'),
        React.createElement('option', { value: 'north' }, 'North Wall'),
        React.createElement('option', { value: 'south' }, 'South Wall'),
        React.createElement('option', { value: 'east' }, 'East Wall'),
        React.createElement('option', { value: 'west' }, 'West Wall')
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Windows'),
      React.createElement('label', { className: 'form-label' }, 'Which walls have windows?'),
      React.createElement('div', { className: 'checkbox-grid' },
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'windowWalls.north',
            checked: data.windowWalls.north,
            onChange: onChange
          }),
          ' North Wall'
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'windowWalls.south',
            checked: data.windowWalls.south,
            onChange: onChange
          }),
          ' South Wall'
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'windowWalls.east',
            checked: data.windowWalls.east,
            onChange: onChange
          }),
          ' East Wall'
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'windowWalls.west',
            checked: data.windowWalls.west,
            onChange: onChange
          }),
          ' West Wall'
        )
      ),

      Object.entries(data.windowWalls).map(([wall, hasWindow]) =>
        hasWindow ? React.createElement('div', { key: wall, className: 'subsection' },
          React.createElement('h4', null, wall.charAt(0).toUpperCase() + wall.slice(1) + ' Wall Window Dimensions (inches)'),
          React.createElement('div', { className: 'grid-2' },
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Width'),
              React.createElement('input', {
                type: 'number',
                name: `windowDimensions.${wall}.width`,
                value: data.windowDimensions[wall].width,
                onChange: onNumeric,
                className: 'form-input',
                min: '0'
              })
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Height'),
              React.createElement('input', {
                type: 'number',
                name: `windowDimensions.${wall}.height`,
                value: data.windowDimensions[wall].height,
                onChange: onNumeric,
                className: 'form-input',
                min: '0'
              })
            )
          )
        ) : null
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Home Information'),
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'homeInfo.hasBasement',
          checked: data.homeInfo.hasBasement,
          onChange: onChange
        }),
        ' Home has basement (for carbon monoxide detector)'
      ),
      React.createElement('div', { className: 'form-group' },
        React.createElement('label', { className: 'form-label' }, 'Number of floors in home'),
        React.createElement('input', {
          type: 'number',
          name: 'homeInfo.numberOfFloors',
          value: data.homeInfo.numberOfFloors,
          onChange: onNumeric,
          className: 'form-input',
          min: '1'
        })
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 3: Shower Specifications
function Step3({ data, onChange, onNumeric, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 3: Shower Specifications'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'includeShower',
          checked: data.includeShower,
          onChange: onChange
        }),
        ' Include shower in renovation'
      )
    ),

    data.includeShower && React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Shower Type'),
      React.createElement('div', { className: 'radio-group' },
        React.createElement('label', { className: 'radio-label' },
          React.createElement('input', {
            type: 'radio',
            name: 'showerType',
            value: 'walk-in',
            checked: data.showerType === 'walk-in',
            onChange: onChange
          }),
          ' Walk-in shower'
        ),
        React.createElement('label', { className: 'radio-label' },
          React.createElement('input', {
            type: 'radio',
            name: 'showerType',
            value: 'rolling',
            checked: data.showerType === 'rolling',
            onChange: onChange
          }),
          ' Rolling shower'
        )
      ),

      React.createElement('h3', null, 'Shower Base Dimensions'),
      React.createElement('div', { className: 'grid-2' },
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Length (feet)'),
          React.createElement('input', {
            type: 'number',
            name: 'showerBase.length',
            value: data.showerBase.length,
            onChange: onNumeric,
            className: 'form-input',
            min: '0',
            step: '0.1'
          })
        ),
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Width (feet)'),
          React.createElement('input', {
            type: 'number',
            name: 'showerBase.width',
            value: data.showerBase.width,
            onChange: onNumeric,
            className: 'form-input',
            min: '0',
            step: '0.1'
          })
        )
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 4: Shower Walls
function Step4({ data, onChange, onNumeric, onWallsChange, onWallChange, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 4: Shower Walls'),

    data.includeShower ? React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'New Shower Walls'),
      React.createElement('label', { className: 'form-label' }, 'Number of new walls for shower'),
      React.createElement('select', {
        value: data.showerWalls.numberOfNewWalls,
        onChange: (e) => onWallsChange(Number(e.target.value)),
        className: 'form-input'
      },
        React.createElement('option', { value: 0 }, '0'),
        React.createElement('option', { value: 1 }, '1'),
        React.createElement('option', { value: 2 }, '2'),
        React.createElement('option', { value: 3 }, '3'),
        React.createElement('option', { value: 4 }, '4')
      ),

      data.showerWalls.walls.map((wall, index) =>
        React.createElement('div', { key: index, className: 'subsection' },
          React.createElement('h4', null, `Wall ${index + 1} Dimensions`),
          React.createElement('div', { className: 'grid-2' },
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Length (feet)'),
              React.createElement('input', {
                type: 'number',
                value: wall.length,
                onChange: (e) => onWallChange(index, 'length', e.target.value),
                className: 'form-input',
                min: '0',
                step: '0.1'
              })
            ),
            React.createElement('div', { className: 'form-group' },
              React.createElement('label', { className: 'form-label' }, 'Height (feet)'),
              React.createElement('input', {
                type: 'number',
                value: wall.height,
                onChange: (e) => onWallChange(index, 'height', e.target.value),
                className: 'form-input',
                min: '0',
                step: '0.1'
              })
            )
          )
        )
      )
    ) : React.createElement('div', { className: 'form-section' },
      React.createElement('p', null, 'No shower selected. Click Next to continue.')
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 5: Toilet and Vanity
function Step5({ data, onChange, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 5: Toilet and Vanity'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Toilet'),
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'includeToilet',
          checked: data.includeToilet,
          onChange: onChange
        }),
        ' Include toilet'
      ),

      data.includeToilet && React.createElement('div', { className: 'subsection' },
        React.createElement('h4', null, 'Toilet Shape'),
        React.createElement('div', { className: 'radio-group' },
          React.createElement('label', { className: 'radio-label' },
            React.createElement('input', {
              type: 'radio',
              name: 'toiletShape',
              value: 'elongated',
              checked: data.toiletShape === 'elongated',
              onChange: onChange
            }),
            ' Elongated'
          ),
          React.createElement('label', { className: 'radio-label' },
            React.createElement('input', {
              type: 'radio',
              name: 'toiletShape',
              value: 'round',
              checked: data.toiletShape === 'round',
              onChange: onChange
            }),
            ' Round'
          )
        ),

        React.createElement('h4', null, 'Toilet Height'),
        React.createElement('div', { className: 'radio-group' },
          React.createElement('label', { className: 'radio-label' },
            React.createElement('input', {
              type: 'radio',
              name: 'toiletHeight',
              value: '19',
              checked: data.toiletHeight === '19',
              onChange: onChange
            }),
            ' 19 inch (comfort height)'
          ),
          React.createElement('label', { className: 'radio-label' },
            React.createElement('input', {
              type: 'radio',
              name: 'toiletHeight',
              value: '17',
              checked: data.toiletHeight === '17',
              onChange: onChange
            }),
            ' 17 inch (standard)'
          )
        )
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Vanity'),
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'includeVanity',
          checked: data.includeVanity,
          onChange: onChange
        }),
        ' Include vanity'
      ),

      data.includeVanity && React.createElement('div', { className: 'subsection' },
        React.createElement('h4', null, 'Vanity Size'),
        React.createElement('select', {
          name: 'vanitySize',
          value: data.vanitySize,
          onChange: onChange,
          className: 'form-input'
        },
          React.createElement('option', { value: '19' }, '19 inches'),
          React.createElement('option', { value: '24' }, '24 inches'),
          React.createElement('option', { value: 'custom' }, 'Custom size')
        ),

        data.vanitySize === 'custom' && React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Custom size (inches)'),
          React.createElement('input', {
            type: 'text',
            name: 'vanityCustomSize',
            value: data.vanityCustomSize,
            onChange: onChange,
            className: 'form-input',
            placeholder: 'Enter custom size'
          })
        )
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 6: Grab Bars
function Step6({ data, onChange, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 6: Grab Bars'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Select Grab Bars'),

      React.createElement('div', { className: 'grab-bar-item' },
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'grabBars.include12Inch',
            checked: data.grabBars.include12Inch,
            onChange: onChange
          }),
          ' 12" Grab Bar'
        ),
        data.grabBars.include12Inch && React.createElement('div', { className: 'quantity-input' },
          React.createElement('label', null, 'Quantity: '),
          React.createElement('input', {
            type: 'number',
            name: 'grabBars.quantity12Inch',
            value: data.grabBars.quantity12Inch,
            onChange: onChange,
            className: 'form-input-small',
            min: '1'
          })
        )
      ),

      React.createElement('div', { className: 'grab-bar-item' },
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'grabBars.include18Inch',
            checked: data.grabBars.include18Inch,
            onChange: onChange
          }),
          ' 18" Grab Bar'
        ),
        data.grabBars.include18Inch && React.createElement('div', { className: 'quantity-input' },
          React.createElement('label', null, 'Quantity: '),
          React.createElement('input', {
            type: 'number',
            name: 'grabBars.quantity18Inch',
            value: data.grabBars.quantity18Inch,
            onChange: onChange,
            className: 'form-input-small',
            min: '1'
          })
        )
      ),

      React.createElement('div', { className: 'grab-bar-item' },
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'grabBars.include24Inch',
            checked: data.grabBars.include24Inch,
            onChange: onChange
          }),
          ' 24" Grab Bar'
        ),
        data.grabBars.include24Inch && React.createElement('div', { className: 'quantity-input' },
          React.createElement('label', null, 'Quantity: '),
          React.createElement('input', {
            type: 'number',
            name: 'grabBars.quantity24Inch',
            value: data.grabBars.quantity24Inch,
            onChange: onChange,
            className: 'form-input-small',
            min: '1'
          })
        )
      ),

      React.createElement('div', { className: 'grab-bar-item' },
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'grabBars.include36Inch',
            checked: data.grabBars.include36Inch,
            onChange: onChange
          }),
          ' 36" Grab Bar'
        ),
        data.grabBars.include36Inch && React.createElement('div', { className: 'quantity-input' },
          React.createElement('label', null, 'Quantity: '),
          React.createElement('input', {
            type: 'number',
            name: 'grabBars.quantity36Inch',
            value: data.grabBars.quantity36Inch,
            onChange: onChange,
            className: 'form-input-small',
            min: '1'
          })
        )
      ),

      React.createElement('div', { className: 'grab-bar-item' },
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'grabBars.includeFlipUp',
            checked: data.grabBars.includeFlipUp,
            onChange: onChange
          }),
          ' Flip-up/Hinged Grab Bar'
        ),
        data.grabBars.includeFlipUp && React.createElement('div', { className: 'quantity-input' },
          React.createElement('label', null, 'Quantity: '),
          React.createElement('input', {
            type: 'number',
            name: 'grabBars.quantityFlipUp',
            value: data.grabBars.quantityFlipUp,
            onChange: onChange,
            className: 'form-input-small',
            min: '1'
          })
        )
      ),

      React.createElement('div', { className: 'grab-bar-item' },
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'grabBars.includeWallToFloor',
            checked: data.grabBars.includeWallToFloor,
            onChange: onChange
          }),
          ' Wall to Floor Grab Bar'
        ),
        data.grabBars.includeWallToFloor && React.createElement('div', { className: 'quantity-input' },
          React.createElement('label', null, 'Quantity: '),
          React.createElement('input', {
            type: 'number',
            name: 'grabBars.quantityWallToFloor',
            value: data.grabBars.quantityWallToFloor,
            onChange: onChange,
            className: 'form-input-small',
            min: '1'
          })
        )
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 7: Framing
function Step7({ data, onChange, onNumeric, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 7: Framing'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'framing.extendingWalls',
          checked: data.framing.extendingWalls,
          onChange: onChange
        }),
        ' Extending walls'
      ),

      data.framing.extendingWalls && React.createElement('div', { className: 'subsection' },
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { className: 'form-label' }, 'Extension Length (feet)'),
          React.createElement('input', {
            type: 'number',
            name: 'framing.extensionLength',
            value: data.framing.extensionLength,
            onChange: onNumeric,
            className: 'form-input',
            min: '0',
            step: '0.1'
          })
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'framing.roomAdjacentToExtension',
            checked: data.framing.roomAdjacentToExtension,
            onChange: onChange
          }),
          ' Room adjacent to extension (doubles framing requirement)'
        )
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 8: Wallboard
function Step8({ data, onChange, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 8: Wallboard'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'wallboard.includeCeiling',
          checked: data.wallboard.includeCeiling,
          onChange: onChange
        }),
        ' Include ceiling wallboard'
      ),
      React.createElement('p', { className: 'info-text' },
        'Note: Shower wall wallboard is automatically calculated based on shower specifications.'
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 9: Door Options
function Step9({ data, onChange, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 9: Door Options'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'widenDoor',
          checked: data.widenDoor,
          onChange: onChange
        }),
        ' Widen door'
      ),
      data.widenDoor && React.createElement('p', { className: 'info-text' },
        'Pre-hung door will be automatically included when widening door.'
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 10: Demolition
function Step10({ data, onChange, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 10: Demolition'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'demolition.removeTub',
          checked: data.demolition.removeTub,
          onChange: onChange
        }),
        ' Remove tub'
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'demolition.partitionWall',
          checked: data.demolition.partitionWall,
          onChange: onChange
        }),
        ' Remove partition wall'
      ),

      data.demolition.partitionWall && React.createElement('div', { className: 'subsection' },
        React.createElement('h4', null, 'Partition Wall Size'),
        React.createElement('div', { className: 'radio-group' },
          React.createElement('label', { className: 'radio-label' },
            React.createElement('input', {
              type: 'radio',
              name: 'demolition.partitionWallSize',
              value: 'small',
              checked: data.demolition.partitionWallSize === 'small',
              onChange: onChange
            }),
            ' Small'
          ),
          React.createElement('label', { className: 'radio-label' },
            React.createElement('input', {
              type: 'radio',
              name: 'demolition.partitionWallSize',
              value: 'bigger',
              checked: data.demolition.partitionWallSize === 'bigger',
              onChange: onChange
            }),
            ' Bigger'
          )
        )
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'demolition.hasRadiator',
          checked: data.demolition.hasRadiator,
          onChange: onChange
        }),
        ' Has radiator'
      ),

      data.demolition.hasRadiator && React.createElement('div', { className: 'subsection' },
        React.createElement('h4', null, 'Radiator Action'),
        React.createElement('div', { className: 'radio-group' },
          React.createElement('label', { className: 'radio-label' },
            React.createElement('input', {
              type: 'radio',
              name: 'demolition.radiatorAction',
              value: 'move',
              checked: data.demolition.radiatorAction === 'move',
              onChange: onChange
            }),
            ' Move radiator'
          ),
          React.createElement('label', { className: 'radio-label' },
            React.createElement('input', {
              type: 'radio',
              name: 'demolition.radiatorAction',
              value: 'remove',
              checked: data.demolition.radiatorAction === 'remove',
              onChange: onChange
            }),
            ' Remove radiator and cap lines'
          )
        )
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'wallHeater',
          checked: data.wallHeater,
          onChange: onChange
        }),
        ' Install electric wall heater'
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 11: Fiberglass and Remove/Dispose
function Step11({ data, onChange, onNext, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 11: Insulation and Material Removal'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Fiberglass Insulation'),
      React.createElement('label', { className: 'form-label' }, 'Which walls are exterior walls?'),
      React.createElement('div', { className: 'checkbox-grid' },
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'fiberglass.exteriorWalls.north',
            checked: data.fiberglass.exteriorWalls.north,
            onChange: onChange
          }),
          ' North Wall'
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'fiberglass.exteriorWalls.south',
            checked: data.fiberglass.exteriorWalls.south,
            onChange: onChange
          }),
          ' South Wall'
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'fiberglass.exteriorWalls.east',
            checked: data.fiberglass.exteriorWalls.east,
            onChange: onChange
          }),
          ' East Wall'
        ),
        React.createElement('label', { className: 'checkbox-label' },
          React.createElement('input', {
            type: 'checkbox',
            name: 'fiberglass.exteriorWalls.west',
            checked: data.fiberglass.exteriorWalls.west,
            onChange: onChange
          }),
          ' West Wall'
        )
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Remove/Dispose'),
      React.createElement('div', { className: 'form-group' },
        React.createElement('label', { className: 'form-label' }, 'Current floor type'),
        React.createElement('select', {
          name: 'removeDispose.currentFloorType',
          value: data.removeDispose.currentFloorType,
          onChange: onChange,
          className: 'form-input'
        },
          React.createElement('option', { value: 'tile' }, 'Tile'),
          React.createElement('option', { value: 'vinyl' }, 'Vinyl')
        )
      ),

      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'removeDispose.hasFloorTiles',
          checked: data.removeDispose.hasFloorTiles,
          onChange: onChange
        }),
        ' Has floor tiles to remove'
      ),

      React.createElement('label', { className: 'checkbox-label' },
        React.createElement('input', {
          type: 'checkbox',
          name: 'removeDispose.hasWallTiles',
          checked: data.removeDispose.hasWallTiles,
          onChange: onChange
        }),
        ' Has wall tiles to remove'
      ),

      data.removeDispose.hasWallTiles && React.createElement('div', { className: 'subsection' },
        React.createElement('h4', null, 'Wall Tile Heights (inches from floor)'),
        React.createElement('div', { className: 'grid-2' },
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'North Wall'),
            React.createElement('input', {
              type: 'number',
              name: 'removeDispose.wallTileHeights.north',
              value: data.removeDispose.wallTileHeights.north,
              onChange: onChange,
              className: 'form-input',
              min: '0'
            })
          ),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'South Wall'),
            React.createElement('input', {
              type: 'number',
              name: 'removeDispose.wallTileHeights.south',
              value: data.removeDispose.wallTileHeights.south,
              onChange: onChange,
              className: 'form-input',
              min: '0'
            })
          ),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'East Wall'),
            React.createElement('input', {
              type: 'number',
              name: 'removeDispose.wallTileHeights.east',
              value: data.removeDispose.wallTileHeights.east,
              onChange: onChange,
              className: 'form-input',
              min: '0'
            })
          ),
          React.createElement('div', { className: 'form-group' },
            React.createElement('label', { className: 'form-label' }, 'West Wall'),
            React.createElement('input', {
              type: 'number',
              name: 'removeDispose.wallTileHeights.west',
              value: data.removeDispose.wallTileHeights.west,
              onChange: onChange,
              className: 'form-input',
              min: '0'
            })
          )
        )
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onNext,
        className: 'btn btn-primary'
      }, 'Next')
    )
  );
}

// Step 12: Review and Calculate
function Step12({ data, onChange, onCalculate, onPrev }) {
  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Step 12: Review and Calculate'),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Electrical'),
      React.createElement('p', { className: 'info-text' },
        'The following electrical items are included based on your specifications:'
      ),
      React.createElement('ul', { className: 'review-list' },
        React.createElement('li', null, '✓ Shower light'),
        React.createElement('li', null, '✓ Vanity light'),
        React.createElement('li', null, '✓ Underwriter inspection'),
        React.createElement('li', null, '✓ Arc fault circuit breaker'),
        React.createElement('li', null, `✓ Ground fault receptacle (${data.electrical.groundFaultLocation})`),
        data.electrical.carbonMonoxide && React.createElement('li', null, '✓ Carbon monoxide detector'),
        data.electrical.smokeDetectors && React.createElement('li', null,
          `✓ Smoke detector (${data.electrical.smokeDetectorQuantity})`
        )
      ),

      React.createElement('div', { className: 'form-group' },
        React.createElement('label', { className: 'form-label' }, 'Ground fault receptacle location'),
        React.createElement('select', {
          name: 'electrical.groundFaultLocation',
          value: data.electrical.groundFaultLocation,
          onChange: onChange,
          className: 'form-input'
        },
          React.createElement('option', { value: 'first' }, 'First'),
          React.createElement('option', { value: 'second' }, 'Second'),
          React.createElement('option', { value: 'third' }, 'Third')
        )
      )
    ),

    React.createElement('div', { className: 'form-section' },
      React.createElement('h3', null, 'Summary'),
      React.createElement('p', null, 'Review your selections and click Calculate to generate the materials list.')
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: onPrev,
        className: 'btn btn-secondary'
      }, 'Previous'),
      React.createElement('button', {
        onClick: onCalculate,
        className: 'btn btn-primary btn-large'
      }, 'Calculate Materials')
    )
  );
}

// Results Step
function ResultsStep({ result, onReset }) {
  if (!result) {
    return React.createElement('div', { className: 'step-container' },
      React.createElement('p', null, 'No results available.')
    );
  }

  return React.createElement('div', { className: 'step-container' },
    React.createElement('h2', { className: 'step-title' }, 'Materials Calculation Results'),

    React.createElement('div', { className: 'results-section' },
      React.createElement('h3', null, 'Bathroom Dimensions'),
      React.createElement('div', { className: 'dimensions-grid' },
        React.createElement('div', null,
          React.createElement('strong', null, 'Original:'),
          React.createElement('p', null,
            `${result.dimensions.current.length}' × ${result.dimensions.current.width}' × ${result.dimensions.current.height}'`
          )
        ),
        React.createElement('div', null,
          React.createElement('strong', null, 'Modified:'),
          React.createElement('p', null,
            `${result.dimensions.new.length}' × ${result.dimensions.new.width}' × ${result.dimensions.new.height}'`
          )
        )
      )
    ),

    React.createElement('div', { className: 'results-section' },
      React.createElement('h3', null, 'Materials List'),
      React.createElement('div', { className: 'materials-table' },
        React.createElement('div', { className: 'table-header' },
          React.createElement('div', null, 'Description'),
          React.createElement('div', null, 'Quantity'),
          React.createElement('div', null, 'Unit')
        ),
        result.materials.map((material, index) =>
          React.createElement('div', { key: index, className: 'table-row' },
            React.createElement('div', null, material.description),
            React.createElement('div', null, material.quantity),
            React.createElement('div', null, material.unit)
          )
        )
      )
    ),

    React.createElement('div', { className: 'results-section' },
      React.createElement('h3', null, 'Calculation Details'),
      React.createElement('ul', { className: 'calculation-list' },
        React.createElement('li', null, `Framing Area: ${Math.ceil(result.calculations.framingArea)} sq ft`),
        React.createElement('li', null, `Drywall Area: ${Math.ceil(result.calculations.drywallArea)} sq ft`),
        React.createElement('li', null, `Wallboard Area: ${Math.ceil(result.calculations.wallboardArea)} sq ft`),
        React.createElement('li', null, `Baseboard Length: ${Math.ceil(result.calculations.baseboardLength)} linear ft`),
        React.createElement('li', null, `Fiberglass Insulation: ${Math.ceil(result.calculations.fiberglassArea)} sq ft`),
        React.createElement('li', null, `Ceramic Tile: ${Math.ceil(result.calculations.ceramicTileArea)} sq ft`),
        React.createElement('li', null, `Paint Area: ${Math.ceil(result.calculations.paintArea)} sq ft`)
      )
    ),

    React.createElement('div', { className: 'button-group' },
      React.createElement('button', {
        onClick: () => window.print(),
        className: 'btn btn-secondary'
      }, 'Print Results'),
      React.createElement('button', {
        onClick: onReset,
        className: 'btn btn-primary'
      }, 'Start New Calculation')
    )
  );
}
