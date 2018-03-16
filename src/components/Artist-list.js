import React, {Component} from 'react';
import ArtistListItem from './Artist-list-item';

const ArtistList = ( {artistas} ) => (
  <ul className="col-md-4 list-group">
    {artistas.map(artista => 
      <ArtistListItem 
        key = {artista.name}
          {...artista}
        />
    )} 
  </ul>
) 

// class ArtistList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             artistas:[
//               {name : 'Shakira', bio : 'cantautora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana', url : 'shakira.jpg' , canciones : ['ojos asi', 'tu', 'inevitable']},
//               {name : 'Thalia', bio : 'cantante, compositora, actriz, empresaria y modelo mexicana', url:'thalia.jpg', canciones:['arrasando', 'amor a la mexicana']},
//               {name : 'Jenifer Lopez', bio:'actriz, cantante, bailarina, compositora, productora discográfica, diseñadora de modas, empresaria, productora de televisión, coreógrafa, perfumista y filántropa estadounidense de origen puertorriqueño.', url:'jenifer.jpg', canciones : ['lets get loud','love the cost a thing']},
//             ]
//         }
//     }

//     render() {
//         const info = this.state.artistas.map(artista => <ArtistListItem key = {artista.name}{...artista}/>);
//         return(
//           <ul className="col-md-4 list-group">{info}</ul>
//         )
//     }
// } 

export default ArtistList