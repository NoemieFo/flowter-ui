import {
  CarCategories,
  CarOptions,
  carCategories,
} from "@application/constants/categories.constants";
import { FormSectionTitle } from "@application/elements/formSectionTitle.component";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  capitalize,
} from "@mui/material";
import Car from "@pictures/icons/menu/car.svg";

interface Props {
  selectedCategory: CarCategories;
  selectedCarOptions: CarOptions[];
  selectedOptions: Record<CarOptions, boolean>;
  isError: boolean;
  updateOptions: (newSelectedOptions: Record<CarOptions, boolean>) => void;
  updateCategory: (newCategory: CarCategories) => void;
}

export const PickVehicleComponent = ({
  selectedCategory,
  selectedCarOptions,
  selectedOptions,
  isError,
  updateOptions,
  updateCategory,
}: Props) => {
  const handleChangeCategory = (e: SelectChangeEvent) => {
    const newCategory = e.target.value as CarCategories;
    updateCategory(newCategory);
  };

  const handleChangeOptions = (e: any) => {
    const newOptsMap = { ...selectedOptions };
    newOptsMap[e.target.getAttribute("name") as CarOptions] = e.target.checked;
    updateOptions(newOptsMap);
  };

  return (
    <>
      <FormSectionTitle icon={Car} title={"Sélection du véhicule"} />
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={3}>
          <FormControl fullWidth error={isError}>
            <InputLabel id="categories-dropdown">Catégorie *</InputLabel>
            <Select
              labelId="categories-dropdown"
              id="category-select"
              value={selectedCategory}
              label="Catégorie *"
              onChange={handleChangeCategory}
            >
              {carCategories.map((c: CarCategories) => (
                <MenuItem key={c} value={c}>
                  {capitalize(c)}
                </MenuItem>
              ))}
            </Select>
            {isError && (
              <FormHelperText>
                Aucune voiture correspondant aux critères n'est enregistrée.
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} md={9}>
          {selectedCarOptions?.length > 0 && (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                rowGap: "6px",
              }}
            >
              {selectedCarOptions.map((option: CarOptions) => (
                <FormControlLabel
                  key={option}
                  control={<Checkbox key={`${option}-checkbox`} />}
                  label={capitalize(option)}
                  onChange={handleChangeOptions}
                  name={option}
                  checked={selectedOptions[option] ?? false}
                />
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};
