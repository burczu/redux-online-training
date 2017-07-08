import React from 'react';
import { connect } from 'react-redux';
import EventItem from './EventItem';
import EventFilters from './EventFilters';
import EventAdd from './EventAdd';
import * as eventActions from '../actions/events';

class Events extends React.Component {
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
    const isValid = value.length > 0;

    switch (field) {
      case 'name':
        this.props.nameChanged(value, isValid);
        break;
      case 'place':
        this.props.whereChanged(value, isValid);
        break;
      case 'date':
        this.props.dateChanged(value, isValid);
        break;
      case 'time':
        this.props.hourChanged(value, isValid);
        break;
      default:
        break;
    }
  }

  onEventAdd(event) {
    event.preventDefault();

    const {
      newName,
      newNameValid,
      newWhere,
      newWhereValid,
      newDate,
      newDateValid,
      newHour,
      newHourValid
    } = this.props;

    if (newNameValid && newWhereValid && newHourValid && newDateValid) {
      this.props.addEvent(newName, newWhere, newDate, newHour);
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
                  place={this.props.newWhere}
                  date={this.props.newDate}
                  time={this.props.newHour}
                  nameValid={this.props.newNameValid}
                  placeValid={this.props.newWhereValid}
                  dateValid={this.props.newDateValid}
                  timeValid={this.props.newHourValid}
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
    nameChanged: (name, valid) => dispatch(eventActions.nameChanged(name, valid)),
    whereChanged: (where, valid) => dispatch(eventActions.whereChanged(where, valid)),
    dateChanged: (date, valid) => dispatch(eventActions.dateChanged(date, valid)),
    hourChanged: (hour, valid) => dispatch(eventActions.hourChanged(hour, valid)),
    addEvent: (name, where, date, hour) => dispatch(eventActions.addEvent(name, where, date, hour))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
