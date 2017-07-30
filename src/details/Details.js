import React from 'react';
import { connect } from 'react-redux';
import * as detailsActions from '../actions/details';

class Details extends React.Component {
  componentDidMount() {
    this.props.getEvents();
  }

  componentDidUpdate() {
    if (this.props.detailsStore.shouldUpdate) {
      const id = this.props.match.params.eventId;
      this.props.findEvent(id);
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
    findEvent: (eventId) => dispatch(detailsActions.findEvent(eventId)),
    getEvents: () => dispatch(detailsActions.getEvents())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
