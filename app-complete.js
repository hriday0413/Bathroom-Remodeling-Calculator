// Using React globals
const { useState } = React;

// Main Calculator Component
function BathroomCalculator() {
  const [formData, setFormData] = useState({
    currentLength: '', currentWidth: '', currentHeight: '8',
    newLength: '', newWidth: '', newHeight: '',
    wallsModified: { north: false, south: false, east: false, west: false },
    doorWall: '',
    windowWalls: { north: false, south: false, east: false, west: false },
    windowDimensions: {
      north: { width: 0, height: 0 }, south: { width: 0, height: 0 },
      east: { width: 0, height: 0 }, west: { width: 0, height: 0 }
    },
    basicSpecs: {
      accessDoor: true, commode: true, bathroomAccessories: true,
      medicineCabinet: true, underfloorPlumbing: true
    },
    includeShower: false, showerType: 'walk-in',
    showerBase: { length: 5, width: 3 },
    showerWalls: { numberOfNewWalls: 0, walls: [] },
    includeToilet: false, toiletShape: 'elongated', toiletHeight: '19',
    includeVanity: false, vanitySize: '19', vanityCustomSize: '',
    grabBars: {
      include12Inch: false, include18Inch: false, include24Inch: false,
      include36Inch: false, includeFlipUp: false, includeWallToFloor: false,
      quantity12Inch: 1, quantity18Inch: 1, quantity24Inch: 1,
      quantity36Inch: 1, quantityFlipUp: 1, quantityWallToFloor: 1
    },
    widenDoor: false, prehungDoor: false,
    demolition: {
      removeTub: false, partitionWall: false, partitionWallSize: 'small',
      hasRadiator: false, radiatorAction: 'move'
    },
    wallHeater: false,
    homeInfo: { hasBasement: false, numberOfFloors: 1 },
    electrical: {
      showerLight: true, vanityLight: true, carbonMonoxide: false,
      smokeDetectors: true, smokeDetectorQuantity: 1,
      underwriterInspection: true, arcFault: true, groundFault: true,
      groundFaultLocation: 'first'
    },
    framing: {
      buildingNewWall: false, extendingWalls: false,
      extensionLength: 0, extensionHeight: 9, roomAdjacentToExtension: false
    },
    wallboard: { includeCeiling: false, showerWallMultiplier: 2 },
    fiberglass: { exteriorWalls: { north: false, south: false, east: false, west: false } },
    removeDispose: {
      currentFloorType: 'tile', hasWallTiles: false,
      wallTileHeights: { north: 0, south: 0, east: 0, west: 0 },
      hasFloorTiles: false
    }
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [calculationResult, setCalculationResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes('.')) {
      const parts = name.split('.');
      if (parts.length === 2) {
        const [parent, child] = parts;
        setFormData(prev => ({
          ...prev, [parent]: { ...prev[parent], [child]: type === 'checkbox' ? checked : value }
        }));
      } else if (parts.length === 3) {
        const [parent, child, grandchild] = parts;
        setFormData(prev => ({
          ...prev,
          [parent]: {
            ...prev[parent],
            [child]: {
              ...prev[parent][child],
              [grandchild]: type === 'checkbox' ? checked : (type === 'number' ? Number(value) : value)
            }
          }
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    }
  };

  const handleNumericChange = (e) => {
    const { name, value } = e.target;
    const numericValue = value === '' ? '' : Number(value);
    if (name.includes('.')) {
      const parts = name.split('.');
      if (parts.length === 2) {
        const [parent, child] = parts;
        setFormData(prev => ({ ...prev, [parent]: { ...prev[parent], [child]: numericValue } }));
      } else if (parts.length === 3) {
        const [parent, child, grandchild] = parts;
        setFormData(prev => ({
          ...prev,
          [parent]: { ...prev[parent], [child]: { ...prev[parent][child], [grandchild]: numericValue } }
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: numericValue }));
    }
  };

  const handleShowerWallsChange = (numberOfWalls) => {
    const walls = Array.from({ length: numberOfWalls }, (_, i) =>
      formData.showerWalls.walls[i] || { length: 0, height: 8 }
    );
    setFormData(prev => ({
      ...prev,
      showerWalls: { numberOfNewWalls: numberOfWalls, walls },
      wallboard: { ...prev.wallboard, showerWallMultiplier: numberOfWalls > 0 ? numberOfWalls : 2 }
    }));
  };

  const handleIndividualWallChange = (index, field, value) => {
    const updatedWalls = [...formData.showerWalls.walls];
    updatedWalls[index] = { ...updatedWalls[index], [field]: Number(value) };
    setFormData(prev => ({
      ...prev, showerWalls: { ...prev.showerWalls, walls: updatedWalls }
    }));
  };

  const nextStep = () => {
    if (currentStep === 2) {
      setFormData(prev => ({
        ...prev,
        electrical: {
          ...prev.electrical,
          carbonMonoxide: prev.homeInfo.hasBasement,
          smokeDetectorQuantity: prev.homeInfo.numberOfFloors
        }
      }));
    }
    if (currentStep === 9 && formData.widenDoor) {
      setFormData(prev => ({ ...prev, prehungDoor: true }));
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => setCurrentStep(currentStep - 1);

  const calculateMaterials = () => {
    const materials = [];
    const addMaterial = (description, quantity, unit = "unit") => {
      if (quantity > 0) materials.push({ description, quantity: Math.ceil(quantity), unit });
    };

    const current = {
      length: Number(formData.currentLength) || 0,
      width: Number(formData.currentWidth) || 0,
      height: Number(formData.currentHeight) || 8
    };

    const newDim = {
      length: Number(formData.newLength) || current.length,
      width: Number(formData.newWidth) || current.width,
      height: Number(formData.newHeight) || current.height
    };

    const showerBaseArea = formData.includeShower ?
      Number(formData.showerBase.length) * Number(formData.showerBase.width) : 0;
    const showerBasePerimeter = formData.includeShower ?
      2 * (Number(formData.showerBase.length) + Number(formData.showerBase.width)) : 0;

    let totalShowerWallArea = 0;
    if (formData.includeShower && formData.showerWalls.numberOfNewWalls > 0) {
      totalShowerWallArea = formData.showerWalls.walls.reduce((total, wall) =>
        total + (Number(wall.length) * Number(wall.height)), 0);
    }

    let framingArea = 0;
    if (formData.includeShower && formData.showerWalls.numberOfNewWalls > 0) {
      framingArea += totalShowerWallArea;
    }
    if (formData.framing.extendingWalls && formData.framing.extensionLength > 0) {
      const extensionFramingArea = Number(formData.framing.extensionLength) * 9;
      framingArea += formData.framing.roomAdjacentToExtension ? extensionFramingArea * 2 : extensionFramingArea;
    }
    addMaterial("Frame", framingArea, "sq ft");

    const wallPerimeter = 2 * (newDim.length + newDim.width);
    let drywallArea = wallPerimeter * newDim.height - totalShowerWallArea;
    Object.entries(formData.windowWalls).forEach(([wall, hasWindow]) => {
      if (hasWindow) {
        const windowWidth = Number(formData.windowDimensions[wall].width) / 12;
        const windowHeight = Number(formData.windowDimensions[wall].height) / 12;
        drywallArea -= (windowWidth * windowHeight);
      }
    });
    addMaterial("Drywall", drywallArea, "sq ft");

    let wallboardArea = 0;
    if (formData.wallboard.includeCeiling) wallboardArea += newDim.length * newDim.width;
    if (formData.includeShower && totalShowerWallArea > 0) {
      wallboardArea += totalShowerWallArea * Number(formData.wallboard.showerWallMultiplier);
    }
    addMaterial("Wall board", wallboardArea, "sq ft");

    const baseboardLength = formData.basicSpecs.accessDoor ?
      2 * (newDim.length + newDim.width) - showerBasePerimeter : 0;
    addMaterial("Baseboard", baseboardLength, "linear ft");

    let fiberglassArea = 0;
    Object.entries(formData.fiberglass.exteriorWalls).forEach(([wall, isExterior]) => {
      if (isExterior) {
        const wallLength = (wall === 'north' || wall === 'south') ? newDim.length : newDim.width;
        fiberglassArea += wallLength * newDim.height;
      }
    });
    addMaterial("Fiberglass insulate", fiberglassArea, "sq ft");

    const bathroomArea = newDim.length * newDim.width;
    const ceramicTileArea = bathroomArea - showerBaseArea;
    addMaterial("Ceramic tile", ceramicTileArea, "sq ft");

    const paintArea = drywallArea + wallboardArea;
    addMaterial("Paint", paintArea, "sq ft");
    addMaterial("Underlayment", showerBaseArea, "sq ft");

    if (formData.removeDispose.currentFloorType === 'tile') {
      addMaterial("Remove/dispose wet bed material", ceramicTileArea, "sq ft");
    }
    if (formData.removeDispose.hasFloorTiles) {
      addMaterial("Remove/dispose floor material", bathroomArea, "sq ft");
    }
    if (formData.removeDispose.hasWallTiles) {
      let totalWallTileArea = 0;
      Object.entries(formData.removeDispose.wallTileHeights).forEach(([wall, height]) => {
        if (height > 0) {
          const wallLength = (wall === 'north' || wall === 'south') ? newDim.length : newDim.width;
          totalWallTileArea += wallLength * (height / 12);
        }
      });
      if (totalWallTileArea > 0) addMaterial("Remove/dispose wall material", totalWallTileArea, "sq ft");
    }

    addMaterial("Access door", 1);
    addMaterial("Bathroom accessories", 1);
    addMaterial("Medicine cabinet", 1);
    addMaterial("Underfloor plumbing", 1);

    if (formData.includeShower) addMaterial(`${formData.showerType} shower base`, 1);
    if (formData.includeToilet) addMaterial(`${formData.toiletHeight}" ${formData.toiletShape} toilet`, 1);
    addMaterial("Portable commode", 1);

    if (formData.includeVanity) {
      const vanityDesc = formData.vanitySize === 'custom' ?
        `${formData.vanityCustomSize}" vanity` : `${formData.vanitySize}" vanity`;
      addMaterial(vanityDesc, 1);
    }

    if (formData.grabBars.include12Inch) addMaterial("12\" grab bar", formData.grabBars.quantity12Inch);
    if (formData.grabBars.include18Inch) addMaterial("18\" grab bar", formData.grabBars.quantity18Inch);
    if (formData.grabBars.include24Inch) addMaterial("24\" grab bar", formData.grabBars.quantity24Inch);
    if (formData.grabBars.include36Inch) addMaterial("36\" grab bar", formData.grabBars.quantity36Inch);
    if (formData.grabBars.includeFlipUp) addMaterial("Flip-up/hinged grab bar", formData.grabBars.quantityFlipUp);
    if (formData.grabBars.includeWallToFloor) addMaterial("Wall to floor grab bar", formData.grabBars.quantityWallToFloor);

    if (formData.widenDoor) {
      addMaterial("Enlarge door", 1);
      addMaterial("Pre-hung door", 1);
    }

    if (formData.demolition.removeTub) addMaterial("Remove tub", 1);
    if (formData.demolition.partitionWall) {
      addMaterial(formData.demolition.partitionWallSize === 'small' ?
        "Remove small partition wall" : "Remove large partition wall", 1);
    }
    if (formData.demolition.hasRadiator) {
      addMaterial(formData.demolition.radiatorAction === 'remove' ?
        "Remove radiator, cap lines" : "Move radiator", 1);
    }

    if (formData.wallHeater) addMaterial("Electric wall heater", 1);

    addMaterial("Shower light", 1);
    addMaterial("Vanity light", 1);
    addMaterial("Underwriter inspection", 1);
    addMaterial("Arc fault circuit breaker", 1);
    addMaterial(`Ground fault receptacle (${formData.electrical.groundFaultLocation})`, 1);
    if (formData.electrical.carbonMonoxide) addMaterial("Carbon monoxide detector", 1);
    if (formData.electrical.smokeDetectors) addMaterial("Smoke detector", formData.electrical.smokeDetectorQuantity);

    setCalculationResult({
      materials,
      dimensions: {
        current: { length: formData.currentLength, width: formData.currentWidth, height: formData.currentHeight },
        new: {
          length: formData.newLength || formData.currentLength,
          width: formData.newWidth || formData.currentWidth,
          height: formData.newHeight || formData.currentHeight
        }
      },
      calculations: {
        framingArea, drywallArea, wallboardArea, baseboardLength,
        fiberglassArea, ceramicTileArea, paintArea, showerBaseArea,
        showerBasePerimeter, totalShowerWallArea
      }
    });

    setCurrentStep(13);
  };

  // Render step components conditionally
  let stepComponent = null;

  if (currentStep === 1) {
    stepComponent = React.createElement(Step1, {
      data: formData,
      onChange: handleChange,
      onNumeric: handleNumericChange,
      onNext: nextStep
    });
  } else if (currentStep === 2) {
    stepComponent = React.createElement(Step2, {
      data: formData,
      onChange: handleChange,
      onNumeric: handleNumericChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 3) {
    stepComponent = React.createElement(Step3, {
      data: formData,
      onChange: handleChange,
      onNumeric: handleNumericChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 4) {
    stepComponent = React.createElement(Step4, {
      data: formData,
      onChange: handleChange,
      onNumeric: handleNumericChange,
      onWallsChange: handleShowerWallsChange,
      onWallChange: handleIndividualWallChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 5) {
    stepComponent = React.createElement(Step5, {
      data: formData,
      onChange: handleChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 6) {
    stepComponent = React.createElement(Step6, {
      data: formData,
      onChange: handleChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 7) {
    stepComponent = React.createElement(Step7, {
      data: formData,
      onChange: handleChange,
      onNumeric: handleNumericChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 8) {
    stepComponent = React.createElement(Step8, {
      data: formData,
      onChange: handleChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 9) {
    stepComponent = React.createElement(Step9, {
      data: formData,
      onChange: handleChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 10) {
    stepComponent = React.createElement(Step10, {
      data: formData,
      onChange: handleChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 11) {
    stepComponent = React.createElement(Step11, {
      data: formData,
      onChange: handleChange,
      onNext: nextStep,
      onPrev: prevStep
    });
  } else if (currentStep === 12) {
    stepComponent = React.createElement(Step12, {
      data: formData,
      onChange: handleChange,
      onCalculate: calculateMaterials,
      onPrev: prevStep
    });
  } else if (currentStep === 13) {
    stepComponent = React.createElement(ResultsStep, {
      result: calculationResult,
      onReset: () => {
        setCurrentStep(1);
        setCalculationResult(null);
      }
    });
  }

  return React.createElement('div', { className: 'container' },
    React.createElement('div', { className: 'header' },
      React.createElement('h1', null, 'All Access LLC'),
      React.createElement('h2', null, 'Complete Bathroom Remodeling Calculator')
    ),

    currentStep < 13 && React.createElement('div', { className: 'progress-bar' },
      React.createElement('div', { className: 'progress-steps' },
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(step =>
          React.createElement('div', {
            key: step,
            className: `progress-step ${currentStep === step ? 'active' : ''}`
          }, step)
        )
      ),
      React.createElement('div', { className: 'progress-info' }, `Step ${currentStep} of 12`)
    ),

    stepComponent
  );
}

// Render to DOM
ReactDOM.render(
  React.createElement(BathroomCalculator),
  document.getElementById('root')
);
