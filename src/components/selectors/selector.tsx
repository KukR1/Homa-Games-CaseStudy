import { FormControl, InputLabel } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Props = {
  value: string;
  title: string;
  children: React.ReactNode;
  onChange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void;
};

const Selector = ({ value, title, children, onChange }: Props) => {
  return (
    <FormControl sx={{ minWidth: 140 }}>
      <InputLabel>{title}</InputLabel>
      <Select label="Continents" value={value} onChange={onChange}>
        {children}
      </Select>
    </FormControl>
  );
};

export default Selector;
