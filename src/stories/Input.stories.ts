import { Input } from './Inputs/Input';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story =  {
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

export const XAdornment: Story =  {
  args: {
    serviceProps: { xAdornment: true },
    ...Basic.args, 
  },  
  argTypes: {
    ...Basic.argTypes, 
  },
};

export const Search: Story =  {
  args: {
    serviceProps: { search: true },
    ...Basic.args, 
  },  
  argTypes: {
    ...Basic.argTypes, 
  },
};

export const Select: Story =  {
  args: {
    disabled: false,
    required: false,
    error: false,
    select: true,  
    label: '',
    defaultValue: 'test2',
    helperText: '',   
  },
  argTypes: {
    ...Basic.argTypes, 
  },
};

export const MultiSelect: Story =  {
  args: {
    serviceProps: { multiSelect: true },
  },  
  argTypes: {
    ...Basic.argTypes,
    serviceProps: {
      table: {
        disable: true
      }
    }
  },
};

export const Password: Story =  {
  args: {
    serviceProps: { password: true },
  },  
  argTypes: {
    ...Basic.argTypes,
    serviceProps: {
      table: {
        disable: true
      }
    }
  },
};

export const SelectAndTextField: Story =  {
  args: {
    serviceProps: { selectAndTextField: true },
  },  
  argTypes: {
    ...Basic.argTypes,
    serviceProps: {
      table: {
        disable: true
      }
    }
  },
};

export const DateAndTimePicker: Story =  {
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