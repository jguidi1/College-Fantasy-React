import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const teams = [
    {   
        teamName: 'Joe Bukets',
        id: 1,
        name: 'Joseph Guidi',
        league: 'DSG League',
        record: '8-2-0',
        current_placement: 1,
        placement_out_of: 10,
        imageUrl: "data:image/png;base64,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",
        last_matchup: {
            opponent_team: 'Team A',
            opponent_score: 72.1,
            ally_team: 'Team 1',
            ally_score: 76.6,
        }
    },
    {   
        teamName: 'Bad Boys',
        id: 2,
        name: 'Joseph Guidi',
        league: 'Ballers League',
        record: '5-5-0',
        current_placement: 7,
        placement_out_of: 8,
        imageUrl: "data:image/jpeg;base64,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",
        last_matchup: {
            opponent_team: 'Vattana man',
            opponent_score: 80.6,
            ally_team: 'Team 1',
            ally_score: 70.6,
        }
    },
    {   
        teamName: 'Soccer Dad',
        id: 3,
        name: 'Joseph Guidi',
        league: 'Senior League',
        record: '0-10-0',
        current_placement: 10,
        placement_out_of: 10,
        imageUrl: "data:image/png;base64,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",
        last_matchup: {
            opponent_team: 'Dougs team',
            opponent_score: 92.1,
            ally_team: 'Team 1',
            ally_score: 96.8,
        }
    },
]

const Card = ({ team }) => {
  const nav = useNavigate()

    return (
          <div style={{cursor: 'pointer'}} onClick={() => {nav("/my-team/{team.id}")}}>
            <div className="bg-white rounded-md m-5 p-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-6">
                      <div className='flex justify-center items-center h-full pe-20'>
                    <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={team.imageUrl} alt={team.name} className="relative inline-block h-12 w-12 !rounded-full object-cover object-center" style={{ maxWidth: '100%' }} />
                    </div>
                        <div className="flex justify-center items-center h-full">
                            <span>
                                <h1 className='gap-x-5 flex items-center'><div className='font-bold text-2xl'>{team.teamName}</div> <div>{team.record} ({team.current_placement} out of {team.placement_out_of})</div></h1>
                                <p><Link to={"/league-standings/2"} className='cursor-pointer text-blue-400 font-bold'>{team.league}</Link>  | {team.name}</p>
                            </span>
                           
                        </div>
                    </div>
                    </div>
                    <div className="col-span-6">
                        <div className="text-center">
                            <h1 className='p-2 font-bold'>LAST MATCHUP</h1>
                            <div className='border border-black rounded-lg p-2'>
                                <div className='grid grid-cols-12 p-2'>
                                    <div className='col-span-6'>
                                        <h1 className='text-left'>{team.teamName}</h1>
                                    </div>
                                    <div className='col-span-6'>
                                        <p className='text-right text-green-700'>{team.last_matchup.ally_score}</p>
                                    </div>
                                    <div className='col-span-6'>
                                        <h1 className='text-left'>{team.last_matchup.opponent_team}</h1>
                                    </div>
                                    <div className='col-span-6'>
                                        <p className='text-right text-red-700'>{team.last_matchup.opponent_score}</p>
                                    </div>
                             
                                 
                                </div>
                            
                            </div>
                          
                       
                        </div>
                    </div>
                </div>
            </div>
          </div>
    );
  };
  
  
  // TeamPage component
  const TeamPage = ({ match }) => {
    const teamId = parseInt(match.params.id);
    const team = teams.find(team => team.id === teamId);
  
    if (!team) return <div>Team not found</div>;
  
    return (
      <div>
        <h2>{team.name}</h2>
        <p>{team.record}</p>
        <p>{team.league}</p>
        <p>{team.last_matchup.opponent_team} vs {team.last_matchup.ally_team}</p>
        <img src={team.imageUrl} alt={team.name} style={{ maxWidth: '100%' }} />
      </div>
    );
  };
  
  // App component
  const App = () => {
    return (
      <div>
        <h1 className="text-center font-bold text-2xl p-5">Select Team</h1>
        {teams.map((team, index) => (
          <Card key={index} team={team} className={"rounded-lg"} />
        ))}
      </div>
    );
  };
  
  export default App;
  