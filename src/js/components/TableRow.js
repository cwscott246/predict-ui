import React from 'react';

class TableRow extends React.Component {

    constructor() {
        super();
        this.state = { items : [] };
        this.isHome = this.isHome.bind(this);
        // this.props.items = { };
        // this.getLines = this.getLines.bind(this);
        // this.state = { data : []}
      }

    isHome(participant) {
        return participant.homeOrAway.toUpperCase() === "HOME";
    }

    isAway(participant) {
        return participant.homeOrAway.toUpperCase() !== "HOME";
    }

    render() {

        const line = this.props.line;
        const homeTeam = line.participants.find(this.isHome);
        const awayTeam = line.participants.find(this.isAway);
        return (
            <tr>
                <td>{line.sportType}</td>
                <td>{line.gmtDateTime}</td>
                <td>{homeTeam.name}</td>
                <td>{awayTeam.name}</td>
            </tr>
        );
    }
}

export default TableRow;