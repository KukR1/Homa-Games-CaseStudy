import React, { useState } from 'react';
import {
  Box,
  MenuItem,
  Paper,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Selector from '../selectors/selector';
import { fetchGeoData } from '../fetchData/fetchData';
import { useQuery } from 'react-query';

const Homepage = () => {
  const [continents, setContinents] = useState('');
  const metrics = ['All', 'areaInSqKm', 'population'];
  const chartMaxRes = ['5', ' 10', '15', '20'];

  const { data, isError, isLoading } = useQuery('data', fetchGeoData);

  const handleFilterChange = (e: SelectChangeEvent<string>) => {
    setContinents(e.target.value);
  };
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error!</div>;
  }
  /* 
      The app is not functionable as I sent too many req,
      and could not work more on it.. 
      If another API I would surely be better :)  
  */
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: '2rem' }}>
        <Selector
          onChange={handleFilterChange}
          value={continents}
          title="Continents"
        >
          {data &&
            data /* Sorry about these types, but this API really made my life harder */
              .filter(
                (value: { continentName: any }, index: any, self: any[]) =>
                  index ===
                  self.findIndex(
                    (t: { continentName: any }) =>
                      t.continentName === value.continentName
                  )
              )
              .sort((a: { continentName: string }, b: { continentName: any }) =>
                a.continentName.localeCompare(b.continentName)
              )
              .map((item: { geonameId: number; continentName: string }) => {
                return (
                  <MenuItem key={item.geonameId} value={item.continentName}>
                    {item.continentName}
                  </MenuItem>
                );
              })}
        </Selector>
        <Selector
          onChange={handleFilterChange}
          value={continents}
          title="Metrics"
        >
          {metrics.map((metric) => {
            return (
              <MenuItem key={metric} value={metric}>
                {metric}
              </MenuItem>
            );
          })}
        </Selector>
        <Selector
          onChange={handleFilterChange}
          value={chartMaxRes[0]}
          title="Max Results"
        >
          {chartMaxRes.map((chartMR) => {
            return (
              <MenuItem key={chartMR} value={chartMR}>
                {chartMR}
              </MenuItem>
            );
          })}
        </Selector>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ width: '90vw', margin: '0 auto' }}>
          <TableHead>
            <TableRow>
              <TableCell>Country Name</TableCell>
              <TableCell align="right">Area in SQKM</TableCell>
              <TableCell align="right">Population</TableCell>
              <TableCell align="right">Continent</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map(
                (item: {
                  /* Sorry about these types, but this API really made my life harder */
                  geonameId: React.Key | null | undefined;
                  countryName:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  areaInSqKm:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  population:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  continentName:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                }) => (
                  <TableRow
                    key={item.geonameId}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.countryName}
                    </TableCell>
                    <TableCell align="right">{item.areaInSqKm}</TableCell>
                    <TableCell align="right">{item.population}</TableCell>
                    <TableCell align="right">{item.continentName}</TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Homepage;
