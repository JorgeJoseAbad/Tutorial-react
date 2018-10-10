import React, {Component} from 'react';


const TableHeader = () => {
    return (
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
    );
}

const TableBody = (props) => {
  console.log(props.characterData)
  const rows = props.characterData.map((row,index)=>{
    return (
        <tr key={row.name} id={row.name}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
        </tr>
    );
  })
  console.log(rows);
  return <tbody>{rows}</tbody>
}

class Table extends Component {

    render() {

      const {characters,removeCharacter}=this.props;


        return (
          <div>
            <h2>Table with name and job, and delete button</h2>
            <table>
              <TableHeader />
              <TableBody
                characterData={characters}
                removeCharacter={removeCharacter}
              />
            </table>
          </div>
        );
    }
}

export default Table;
