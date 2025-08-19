import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function CitySelector({ city, setCity, cities }) {
  return (
    <FormControl fullWidth variant="filled" sx={{ my: 2 , background:'white'  , borderTopRightRadius:'5px' , borderTopLeftRadius:'5px'}}>
      <InputLabel sx={{color:'rgba(11, 11, 26, 1)' , fontSize:'25px'}} id="city-label">City</InputLabel>
      <Select
        sx={{color:'rgba(11, 11, 26, 1)' , pt:2 , fontSize:'12px'}}
        labelId="city-label"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      >
        {cities.map((cityName, index) => (
          <MenuItem key={index} value={cityName}>
            {cityName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
