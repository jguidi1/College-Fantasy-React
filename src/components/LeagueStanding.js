import { useMemo } from 'react';
import {
  MRT_Table, //import alternative sub-component if we do not want toolbars
  useMantineReactTable,
} from 'mantine-react-table';
import { useMantineTheme } from '@mantine/core';
// import { data } from './makeData';

const data = [
  {
      rank: 1,
      teamName: "Joe Bukets",
      wins: 8,
      losses: 2,
      ties: 0
  },
  {
      rank: 2,
      teamName: "Team C",
      wins: 6,
      losses: 2,
      ties: 2
  },
  {
      rank: 3,
      teamName: "Team F",
      wins: 5,
      losses: 2,
      ties: 3
  },
  {
      rank: 4,
      teamName: "Team D",
      wins: 4,
      losses: 3,
      ties: 3
  },
  
  {
      rank: 5,
      teamName: "Team J",
      wins: 4,
      losses: 2,
      ties: 4
  },
  {
      rank: 6,
      teamName: "Team A",
      wins: 3,
      losses: 3,
      ties: 4
  },
  {
      rank: 7,
      teamName: "Team I",
      wins: 3,
      losses: 3,
      ties: 4
  },
  {
      rank: 8,
      teamName: "Team B",
      wins: 2,
      losses: 4,
      ties: 4
  },
  {
      rank: 9,
      teamName: "Team G",
      wins: 2,
      losses: 6,
      ties: 2
  },
  {
      rank: 10,
      teamName: "Team E",
      wins: 1,
      losses: 5,
      ties: 4
  }
];



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