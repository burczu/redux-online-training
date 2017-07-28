import React from 'react';
import { connect } from 'react-redux';
import events from '../data/events';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';
import * as eventActions from '../actions/events';

class Events extends React.Component {
  componentDidMount() {
    this.setState({
      events
    });
  }

  onClearClicked(event) {
    event.preventDefault();

    this.props.clearEvents();
  }

  onDeleteClicked(id, event) {
    event.preventDefault();

    this.props.deleteEvent(id);
  }

  onFilterChange(event) {
    const value = event.currentTarget.value;

    this.props.filterEvents(value);
  };

  onEventFieldChange(field, event) {
    const value = event.currentTarget.value;
    this.props.changeFormField(field, value);
  }

  onEventAdd(event) {
    event.preventDefault();

    const {
      events,
      newName,
      newNameValid,
      newPlace,
      newPlaceValid,
      newDate,
      newDateValid,
      newTime,
      newTimeValid
    } = this.props;

    const maxId = Math.max(...events.map(item => item.id));

    events.push({
      id: maxId + 1,
      name: newName,
      place: newPlace,
      date: newDate,
      time: newTime
    });

    if (newNameValid && newPlaceValid && newDateValid && newTimeValid) {
      this.setState({
        events
      });
    }
  }

  render() {
    return (
      <div>
        <EventFilters onFilterChange={this.onFilterChange.bind(this)} />
        <ul>
          {this.props.events.map(item => {
            const date = new Date(item.date);

            if (date >= Date.now() && item.name.indexOf(this.props.filter) > -1) {
              return (
                <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
              );
            }

            return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <EventAdd name={this.props.newName}
                  place={this.props.newPlace}
                  date={this.props.newDate}
                  time={this.props.newTime}
                  nameValid={this.props.newNameValid}
                  placeValid={this.props.newPlaceValid}
                  dateValid={this.props.newDateValid}
                  timeValid={this.props.newTimeValid}
                  onFieldChange={this.onEventFieldChange.bind(this)}
                  onFormSubmit={this.onEventAdd.bind(this)}
        />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearEvents: () => dispatch(eventActions.clearEvents()),
    deleteEvent: (id) => dispatch(eventActions.deleteEvent(id)),
    filterEvents: (filter) => dispatch(eventActions.filterEvents(filter)),
    changeFormField: (field, value) => dispatch(eventActions.changeFormField(field, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
