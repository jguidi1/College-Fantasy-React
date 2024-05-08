import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useState } from 'react';
import { Link } from "react-router-dom";

export default function MyTeam() {
    const [columnDefs] = useState([
        { field: 'Position', lockPosition: true, width: 100, suppressMovable: true },
        { field: 'Player', rowDrag: true },
        { field: 'Opponent', rowDrag: true },
        { field: 'average_score', headerName: "Average Score", rowDrag: true },
        { field: 'actual_score', headerName: "Actual Score", rowDrag: true },
    ]);

    const [rowData, setRowData] = useState([
        { id: 1, Position: "QB", Player: "Bryce Young", Opponent: "Georgia", average_score: "32.7", actual_score: "29.6"},
        { id: 2, Position: "RB", Player: "Kenneth Walker III", Opponent: "Ohio State", average_score: "25.3", actual_score: "22.1"},
        { id: 3, Position: "WR", Player: "Garrett Wilson", Opponent: "Michigan", average_score: "18.5", actual_score: "20.2"},
        { id: 4, Position: "TE", Player: "Charlie Kolar", Opponent: "Iowa State", average_score: "12.8", actual_score: "14.3"},
        { id: 5, Position: "Flex", Player: "Drake London", Opponent: "Oregon", average_score: "19.9", actual_score: "18.4"},
        { id: 6, Position: "Defense", Player: "Will Anderson Jr.", Opponent: "Cincinnati", average_score: "10.2", actual_score: "11.8"},
        { id: 7, Position: "Kicker", Player: "Anders Carlson", Opponent: "Alabama", average_score: "9.5", actual_score: "10.1"},
        { id: 8, Position: "Total", Player: "----------", Opponent: "----------", average_score: "128.9", actual_score: "126.5"},
        { id: 9, Position: "Bench", Player: "CJ Stroud", Opponent: "Penn State", average_score: "32.7", actual_score: "29.5"},
        { id: 10, Position: "Bench", Player: "Breece Hall", Opponent: "Oklahoma", average_score: "23.6", actual_score: "21.9"},
        { id: 11, Position: "Bench", Player: "Sam Howell", Opponent: "NC State", average_score: "19.8", actual_score: "18.7"}
    ]);

    const [isDragging, setIsDragging] = useState(false);

    const onRowDragMove = (event) => {
        const { overIndex, node } = event;
        if (isDragging && overIndex !== node.rowIndex) {
            const newData = [...rowData];
            const movedRow = newData.splice(node.rowIndex, 1)[0];
            newData.splice(overIndex, 0, movedRow);
            setRowData(newData);
        }
    };

    const onRowDragEnter = () => {
        setIsDragging(true);
    };

    const onRowDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div>
            <div className="flex justify-center items-center ">
                <div className="bg-white rounded-md m-5 p-5 w-full max-w-4xl mb-5">
                    <div className="grid grid-cols-12">
                        <div className="col-span-6">
                            <div className="flex justify-center items-center h-full">
                                <span>
                                    <h1 className='gap-x-5 flex items-center'><div className='font-bold text-2xl'>Joe Bukets</div> <div>8-2-0 (1 of 10)</div></h1>
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
            </div>   
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-md m-5 p-5 w-full max-w-4xl">
                    <div className="ag-theme-quartz" style={{ height: '500px', width: '100%' }}>
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            rowDragManaged={true}
                            animateRows={true}
                            domLayout='autoHeight'
                            onRowDragMove={onRowDragMove}
                            onRowDragEnter={onRowDragEnter}
                            onRowDragEnd={onRowDragEnd}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
