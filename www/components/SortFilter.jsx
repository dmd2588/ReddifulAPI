import React from 'react';
import { FormGroup, ControlLabel, FormControl, Panel} from 'react-bootstrap';

export default function SortFilter () {
  return (
    <Panel header="Filtering and Sorting">
        <FormGroup controlId="filterText">
          <ControlLabel>Filter Text</ControlLabel>
          <FormControl componentClass="input" type="text" placeholder="Search" />
        </FormGroup>
      <FormGroup controlId="filterSelect">
        <ControlLabel>Filter by Attribute</ControlLabel>
        <FormControl componentClass="select">
          <option value="name">Name</option>
          <option value="link_karma">Link Karma</option>
          <option value="comment_karma">Comment Karma</option>
        </FormControl>
      </FormGroup>
      <FormGroup controlId="sortSelect">
        <ControlLabel>Sort by Attribute</ControlLabel>
        <FormControl componentClass="select">
          <option value="name">Name</option>
          <option value="link_karma">Link Karma</option>
          <option value="comment_karma">Comment Karma</option>
        </FormControl>
      </FormGroup>
    </Panel>
  )
}
