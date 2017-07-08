import React from 'react';
import { connect } from 'react-redux';
import * as detailsActions from '../actions/details';

class Details extends React.Component {
  componentDidMount() {
    this.props.getDetails();
  }

  componentDidUpdate() {
    const { dataLoaded } = this.props.detailsStore;

    if (dataLoaded) {
      const id = this.props.match.params.eventId;
      this.props.selectEvent(id);
    }
  }

  render() {
    const { name, place, date, time } = this.props.detailsStore.event;

    return (
      <div>
        <strong>Nazwa:</strong> {name}<br />
        <strong>Miejsce:</strong> {place}<br />
        <strong>Data:</strong> {date}<br />
        <strong>Godzina:</strong> {time}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: () => dispatch(detailsActions.getDetails()),
    selectEvent: (id) => dispatch(detailsActions.selectEvent(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
