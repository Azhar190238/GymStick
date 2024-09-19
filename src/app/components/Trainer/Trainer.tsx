
import React  from 'react';
import TeamCard from '../card/TeamCard';

const teams = [
    { _id: 1, name: "Dianne Russell", role: "Gym Instructor", image:'/images/Team/1.png' },
    { _id: 2, name: "Jane Cooper", role: "Yoga Instructor" , image:'/images/Team/1.png' },
    { _id: 3, name: "Kristin Watson", role: "Pilates Trainer" , image:'/images/Team/1.png' },
    { _id: 4, name: "Wade Warren", role: "Bodybuilding Coach" , image:'/images/Team/1.png' },
    { _id: 5, name: "Esther Howard", role: "Crossfit Instructor" , image:'/images/Team/1.png' },
    { _id: 6, name: "Cody Fisher", role: "Personal Trainer" , image:'/images/Team/1.png' },
    { _id: 7, name: "Savannah Nguyen", role: "Fitness Coach" , image:'/images/Team/1.png' },
    { _id: 8, name: "Leslie Alexander", role: "Nutritionist" , image:'/images/Team/1.png' },
    { _id: 9, name: "Esther Howard", role: "Crossfit Instructor" , image:'/images/Team/1.png' },
    { _id: 10, name: "Cody Fisher", role: "Personal Trainer" , image:'/images/Team/1.png' },
    { _id: 11, name: "Savannah Nguyen", role: "Fitness Coach" , image:'/images/Team/1.png' },
    { _id: 12, name: "Leslie Alexander", role: "Nutritionist" , image:'/images/Team/1.png' },
];

const Trainer: React.FC = () => {
    
    return (
        <div className="mx-8 md:mx-auto max-w-[1320px] relative">
           <h1 className='heading capitalize mb-14'>meet the pros</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {teams.map((team, index) => (
                            <div
                                key={index}                            
                            >
                                <TeamCard team={team} />
                            </div>
                        ))}
                        </div>
        

        </div>
    );
};

export default Trainer;
