import { useMemo } from 'react';
import {
  MRT_Table, //import alternative sub-component if we do not want toolbars
  useMantineReactTable,
} from 'mantine-react-table';
import { useMantineTheme } from '@mantine/core';
// import { data } from './makeData';

const data = [
    {
        rank: 0,
        teamName: "Hello World",
        wins: 5,
        losses: 0,
        ties: 1
    },
    {
        rank: 0,
        teamName: "Hello World",
        wins: 5,
        losses: 0,
        ties: 1
    },
    {
        rank: 0,
        teamName: "Hello World",
        wins: 5,
        losses: 0,
        ties: 1
    },
    {
        rank: 0,
        teamName: "Hello World",
        wins: 5,
        losses: 0,
        ties: 1
    },
    {
        rank: 0,
        teamName: "Hello World",
        wins: 5,
        losses: 0,
        ties: 1
    },
    {
        rank: 0,
        teamName: "Hello World Hello World Hello World",
        wins: 5,
        losses: 0,
        ties: 1
    },

]

export const LeagueStanding = () => {
  const { colorScheme } = useMantineTheme();

  const columns = useMemo(
    () => [
      {
        accessorKey: 'rank',
        header: 'Rank',
        size: 20
      },
      {
        accessorKey: 'teamName',
        header: 'Team Name',
        minSize: 20,
        maxSize: 100
      },
      {
        accessorKey: 'wins',
        header: 'W',
        size: 20
      },
      {
        accessorKey: 'losses',
        header: 'L',
        size: 20
      },
      {
        accessorKey: 'ties',
        header: 'T',
        size: 20
      },

    ],
    [],
  );

  const table = useMantineReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enablePagination: false,
    enableSorting: false,
    mantineTableProps: {
      highlightOnHover: false,
      withColumnBorders: true,
      withBorder: colorScheme === 'light',
      sx: {
        'thead > tr': {
          backgroundColor: 'inherit',
        },
        'thead > tr > th': {
          backgroundColor: 'inherit',
        },
        'tbody > tr > td': {
          backgroundColor: 'inherit',
        },
      },
    },
  });

  //using MRT_Table instead of MantineReactTable if we do not want any of the toolbar features
  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-1 md:col-span-3'></div>
      <div className='col-span-10 md:col-span-6'>
        <div className='p-2.5 md:p-5  bg-gray-400 rounded-xl' >
          <h3 className='font-bold text-2xl p-2 text-center'>League Standings</h3>
          <MRT_Table table={table} style={{width: "100%"}}/>
        </div>
      
      </div>
      <div className='col-span-1 md:col-span-3'></div>
    
        
    </div>
   );
};

export default LeagueStanding;