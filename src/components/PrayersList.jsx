import { Stack } from "@mui/material";
import { Prayer } from "./Prayer";

export default function PrayersList({ prayers }) {
  return (
    <Stack
      spacing={2}
      sx={{ marginBlock: "1rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}
      direction="row"
    >
      {prayers.map((prayerData, index) => (
        <Prayer key={index} name={prayerData.name} time={prayerData.time} />
      ))}
    </Stack>
  );
}