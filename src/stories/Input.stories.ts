import { Input } from './Inputs/Input';


export default {
  title: 'Input',
  component: Input,
};

export const Basic =  {
  args: {
    disabled: false,
    required: false,
    error: false,
    placeholder: 'placeholder',
    label: '',
    defaultValue: '',
    helperText: '',
  },
  argTypes: {
    type: {
      options: ['password', 'number', 'search', 'string'],
      control: { type: 'radio' },
    },
    color: {
      options: ['success', 'secondary', 'warning', 'primary', 'error', 'info'],
      control: { type: 'radio' },
    },
    rows: { control: 'number', if: { arg: 'multiline' } },
    maxRows: { control: 'number', if: { arg: 'multiline' } },
    minRows: { control: 'number', if: { arg: 'multiline' } },
    serviceProps: {
      table: {
        disable: true
      }
    }
  },
};

export const XAdornment =  {
  args: {
    serviceProps: { xAdornment: true },
    ...Basic.args, 
  },  
  argTypes: {
    ...Basic.argTypes, 
  },
};

export const Search =  {
  args: {
    serviceProps: { search: true },
    ...Basic.args, 
  },  
  argTypes: {
    ...Basic.argTypes, 
  },
};

export const Select =  {
  args: {
    disabled: false,
    required: false,
    error: false,
    select: true,  
    label: '',
    defaultValue: 'test2',
    helperText: '',   
  }, 
};

export const MultiSelect =  {
  args: {
    serviceProps: { multiSelect: true },
  },  
  argTypes: {
    serviceProps: {
      table: {
        disable: true
      }
    }
  },
};

export const Password =  {
  args: {
    serviceProps: { password: true },
  },  
  argTypes: {
    serviceProps: {
      table: {
        disable: true
      }
    }
  },
};

export const SelectAndTextField =  {
  args: {
    serviceProps: { selectAndTextField: true },
  },  
  argTypes: {
    serviceProps: {
      table: {
        disable: true
      }
    }
  },
};

export const DateAndTimePicker =  {
  args: {
    serviceProps: { dateAndTimePicker: true },
  },  
  argTypes: {
    serviceProps: {
      table: {
        disable: true
      }
    }
  },
};