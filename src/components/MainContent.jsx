
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { usePrayers } from '../hooks/usePrayers';
import Countdown from './CountDown';
import PrayersList from './PrayersList';
import CitySelector from './CitySelector';



function MainContent() {
  const { city, setCity, today, prayers, remainingTime, nextPrayer } =
    usePrayers();

  const availableCities = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Aswan",
    "Luxor",
    "Assiut",
    "Minya",
    "Qena",
    "Ismailia",
    "Suez",
    "Damietta",
    "Sharqia",
  ];
  return (
    <main className="main-section">
      <section className="over-layer">
        <h1>Iqamah | إقامة</h1>
        <Stack>
          <CitySelector
            city={city}
            setCity={setCity}
            cities={availableCities}
          />
        </Stack>

        <Grid container>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ color: "rgba(255, 255, 255, 0.87)" }}
          >
            <h3> {city} </h3>
            <span> {today} </span>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ color: "rgba(255, 255, 255, 0.87)" }}
          >
            <Countdown
              prayer={prayers[nextPrayer]}
              remainingTime={remainingTime}
            />
          </Grid>
        </Grid>
        <Divider sx={{ borderBlockColor: "gray" }} />

        <PrayersList prayers={prayers} />
      </section>
    </main>
  );
}

export default MainContent