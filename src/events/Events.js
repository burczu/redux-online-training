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
    this.props.changeFormField(field, value);
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
    } = this.props.eventsStore;

    if (newNameValid && newWhereValid && newDateValid && newHourValid) {
      this.props.addEvent(newName, newWhere, newDate, newHour);
    }
  }

  render() {
    return (
      <div>
        <EventFilters onFilterChange={this.onFilterChange.bind(this)} />
        <ul>
          {this.props.eventsStore.events.map(item => {
            const date = new Date(item.date);

            if (date >= Date.now() && item.name.indexOf(this.props.eventsStore.filter) > -1) {
              return (
                <EventItem {...item} key={item.id} onDeleteClicked={this.onDeleteClicked.bind(this)} />
              );
            }

            return null;
          })}
        </ul>
        <button onClick={this.onClearClicked.bind(this)}>Wyczyść</button>
        <EventAdd name={this.props.eventsStore.newName}
                  place={this.props.eventsStore.newWhere}
                  date={this.props.eventsStore.newDate}
                  time={this.props.eventsStore.newHour}
                  nameValid={this.props.eventsStore.newNameValid}
                  placeValid={this.props.eventsStore.newWhereValid}
                  dateValid={this.props.eventsStore.newDateValid}
                  timeValid={this.props.eventsStore.newHourValid}
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
    changeFormField: (field, value) => dispatch(eventActions.changeFormField(field, value)),
    addEvent: (name, place, date, time) => dispatch(eventActions.addEvent(name, place, date, time))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
