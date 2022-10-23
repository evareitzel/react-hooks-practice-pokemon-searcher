import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  // console.log(pokemon)
  const {sprites, name, hp} = pokemon
  const [sprite, setSprite]  = useState(sprites.front)

  function onClick(){
    sprite === sprites.front 
    ? setSprite(sprites.back) 
    : setSprite(sprites.front)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img onClick={onClick} src={sprite} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
