import React from 'react';
import Card from './Card';

export default function CardList({robots}) {
    return (
        <div>
            { robots.map(bot => 
                <Card 
                    key={bot.id} 
                    id={bot.id} 
                    name={bot.name} 
                    email={bot.email}    
                />
            ) }
        </div>
    )
}
