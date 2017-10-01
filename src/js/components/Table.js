import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component {


    
    render() {

        const rows = [];

        console.log(this.props);
        this.props.lines.forEach(function(element) {
            rows.push(
                <TableRow line={element} />
            );
        }, this);

        return (
            <table>
                <thead>
                    <th>Sport Name</th>
                    <th>Time</th>
                    <th>Home team</th>
                    <th>Away team</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>

        );
    }
}

export default Table;
