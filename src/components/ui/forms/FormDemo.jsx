import React, { useState } from 'react';
import {
  TextInput, DefaultTextInput, FilledTextInput, OutlinedTextInput,
  TextArea, DefaultTextArea, FilledTextArea, OutlinedTextArea,
  Dropdown, DefaultDropdown, FilledDropdown, OutlinedDropdown,
  Toggle, DefaultToggle, SuccessToggle, DangerToggle
} from './index';

const FormDemo = () => {
  // State for form inputs
  const [textInputs, setTextInputs] = useState({
    default: '',
    filled: '',
    outlined: '',
    withError: 'Error example'
  });
  
  const [textAreas, setTextAreas] = useState({
    default: '',
    filled: '',
    outlined: ''
  });
  
  const [dropdowns, setDropdowns] = useState({
    default: '',
    filled: '',
    outlined: ''
  });
  
  const [toggles, setToggles] = useState({
    default: false,
    success: true,
    danger: false
  });
  
  // Options for dropdowns
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' }
  ];
  
  // Handler functions
  const handleTextChange = (field) => (e) => {
    setTextInputs({
      ...textInputs,
      [field]: e.target.value
    });
  };
  
  const handleTextAreaChange = (field) => (e) => {
    setTextAreas({
      ...textAreas,
      [field]: e.target.value
    });
  };
  
  const handleDropdownChange = (field) => (value) => {
    setDropdowns({
      ...dropdowns,
      [field]: value
    });
  };
  
  const handleToggleChange = (field) => (checked) => {
    setToggles({
      ...toggles,
      [field]: checked
    });
  };
  
  return (
    <div className="p-6 space-y-8">
      {/* Text Inputs */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Text Inputs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <DefaultTextInput
            id="default-input"
            label="Default Input"
            placeholder="Enter text..."
            value={textInputs.default}
            onChange={handleTextChange('default')}
          />
          
          <FilledTextInput
            id="filled-input"
            label="Filled Input"
            placeholder="Enter text..."
            value={textInputs.filled}
            onChange={handleTextChange('filled')}
          />
          
          <OutlinedTextInput
            id="outlined-input"
            label="Outlined Input"
            placeholder="Enter text..."
            value={textInputs.outlined}
            onChange={handleTextChange('outlined')}
          />
          
          <TextInput
            id="error-input"
            label="Input with Error"
            placeholder="Enter text..."
            value={textInputs.withError}
            onChange={handleTextChange('withError')}
            error="This field has an error"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <TextInput
            id="small-input"
            label="Small Input"
            placeholder="Small size..."
            size="sm"
          />
          
          <TextInput
            id="medium-input"
            label="Medium Input"
            placeholder="Medium size..."
            size="md"
          />
          
          <TextInput
            id="large-input"
            label="Large Input"
            placeholder="Large size..."
            size="lg"
          />
          
          <TextInput
            id="disabled-input"
            label="Disabled Input"
            placeholder="Disabled..."
            disabled
          />
          
          <TextInput
            id="required-input"
            label="Required Input"
            placeholder="Required..."
            required
          />
        </div>
      </div>
      
      {/* Text Areas */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Text Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DefaultTextArea
            id="default-textarea"
            label="Default Text Area"
            placeholder="Enter multi-line text..."
            value={textAreas.default}
            onChange={handleTextAreaChange('default')}
          />
          
          <FilledTextArea
            id="filled-textarea"
            label="Filled Text Area"
            placeholder="Enter multi-line text..."
            value={textAreas.filled}
            onChange={handleTextAreaChange('filled')}
          />
          
          <OutlinedTextArea
            id="outlined-textarea"
            label="Outlined Text Area"
            placeholder="Enter multi-line text..."
            value={textAreas.outlined}
            onChange={handleTextAreaChange('outlined')}
          />
          
          <TextArea
            id="small-textarea"
            label="Small Text Area"
            placeholder="Small size..."
            size="sm"
            rows={3}
          />
          
          <TextArea
            id="error-textarea"
            label="Text Area with Error"
            placeholder="Error example..."
            error="This text area has an error"
          />
          
          <TextArea
            id="disabled-textarea"
            label="Disabled Text Area"
            placeholder="Disabled..."
            disabled
          />
        </div>
      </div>
      
      {/* Dropdowns */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Dropdowns</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DefaultDropdown
            id="default-dropdown"
            label="Default Dropdown"
            options={options}
            value={dropdowns.default}
            onChange={handleDropdownChange('default')}
          />
          
          <FilledDropdown
            id="filled-dropdown"
            label="Filled Dropdown"
            options={options}
            value={dropdowns.filled}
            onChange={handleDropdownChange('filled')}
          />
          
          <OutlinedDropdown
            id="outlined-dropdown"
            label="Outlined Dropdown"
            options={options}
            value={dropdowns.outlined}
            onChange={handleDropdownChange('outlined')}
          />
          
          <Dropdown
            id="small-dropdown"
            label="Small Dropdown"
            options={options}
            size="sm"
          />
          
          <Dropdown
            id="error-dropdown"
            label="Dropdown with Error"
            options={options}
            error="This dropdown has an error"
          />
          
          <Dropdown
            id="disabled-dropdown"
            label="Disabled Dropdown"
            options={options}
            disabled
          />
        </div>
      </div>
      
      {/* Toggles */}
      <div>
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Toggles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DefaultToggle
            id="default-toggle"
            label="Default Toggle"
            checked={toggles.default}
            onChange={handleToggleChange('default')}
          />
          
          <SuccessToggle
            id="success-toggle"
            label="Success Toggle"
            checked={toggles.success}
            onChange={handleToggleChange('success')}
          />
          
          <DangerToggle
            id="danger-toggle"
            label="Danger Toggle"
            checked={toggles.danger}
            onChange={handleToggleChange('danger')}
          />
          
          <Toggle
            id="disabled-toggle"
            label="Disabled Toggle"
            checked={true}
            disabled
          />
          
          <Toggle
            id="small-toggle"
            label="Small Toggle"
            size="sm"
          />
          
          <Toggle
            id="large-toggle"
            label="Large Toggle"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FormDemo; 