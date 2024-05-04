import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function MyTeam() {
    const [columnDefs] = useState([
        { field: 'athlete', rowDrag: true},
        { field: 'position' },
        { field: 'opponent' },
        { field: 'average_score', headerName: "Average Score" },
        { field: 'actual_score', headerName: "Actual Score" },
    ]);

    const [rowData, setRowData] = useState([
        { id: 1, athlete: "Hey 1" },
        { id: 2, athlete: "Hey 2" },
        { id: 3, athlete: "Hey 3" },
        { id: 4, athlete: "Hey 4" },
        { id: 5, athlete: "Hey 5" },
        { id: 6, athlete: "Hey 6" },
    ]);

    return (
        <div>
            <div className="bg-white rounded-md m-5 p-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                        <div className="flex justify-center items-center h-full">
                            <span>
                                <h1 className='gap-x-5 flex items-center'><div className='font-bold text-2xl'>Team 1</div> <div>8-2-0 (4th of 10)</div></h1>
                                <p><Link to={"/league-standings/2"} className='cursor-pointer text-blue-400 font-bold'>DSG League</Link> | Joseph Guidi</p>
                            </span>
                           
                        </div>
                    </div>
                    <div className="col-span-6">
                        <div className="text-center">
                            <h1 className='p-2 font-bold'>LAST MATCHUP</h1>
                            <div className='border border-black rounded-lg p-2'>
                                <div className='grid grid-cols-12 p-2'>
                                    <div className='col-span-6'>
                                        <h1 className='text-left'>Team 1</h1>
                                    </div>
                                    <div className='col-span-6'>
                                        <p className='text-right text-green-700'>76.7</p>
                                    </div>
                                    <div className='col-span-6'>
                                        <h1 className='text-left'>Team 3</h1>
                                    </div>
                                    <div className='col-span-6'>
                                        <p className='text-right text-red-700'>72.1</p>
                                    </div>
                             
                                 
                                </div>
                            
                            </div>
                          
                       
                        </div>
                    </div>
                </div>
            </div>
            <div className="ag-theme-quartz m-5" style={{ height: '500px' }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    rowDragEntireRow={true}
                />
            </div>
        </div>
    );
}
