import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

export default function QualificationsSelectPlaceholder(props) {
    const { setDoctorData, doctorData, constDoctorName, setConstDoctorName } = props.drop;

    const theme = useTheme();
    const [personName, setPersonName] = React.useState(constDoctorName.qualification || []);

    const handleChange = (event) => {
        const { target: { value } } = event;
        const selectedValues = typeof value === 'string' ? value.split(',') : value;
        setPersonName(selectedValues);

    };

    const qualificationsName = [
        " MBBS (Bachelor of Medicine, Bachelor of Surgery)  ",
        " BDS (Bachelor of Dental Surgery) ",
        " BHMS (Bachelor of Homeopathic Medicine & Surgery) ",
        " BAMS (Bachelor of Ayurvedic Medicine & Surgery) ",
        " BNYS (Bachelor of Naturopathy and Yogic Sciences)  ",
        " MD  (Doctor of Medicine)",
        " MS  (Master of Surgery ",
        " DM  (Doctorate of Medicine)  ",
        " MCh  (Master of Chirurgiae) ",
        " DNB (Diplomate of National Board) ",
        " Fellowships  ",
    ];

    React.useEffect(() => {
        setDoctorData({ ...doctorData, qualification: personName });
    }, [personName]);

    React.useEffect(() => {
        if (!constDoctorName.qualification) {
            setConstDoctorName({ ...constDoctorName, qualification: [] });
        }
    }, [constDoctorName]);

    return (
        <div>
            <FormControl fullWidth>
                <Select
                    multiple
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>Quialification</em>;
                        }
                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Select qualification</em>
                    </MenuItem>
                    {qualificationsName.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
