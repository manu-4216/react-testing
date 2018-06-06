import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        };

        this.submit = this.submit.bind(this);
    }

    submit() {
        const { notes, text } = this.state;

        notes.push({ text });
        this.setState({ notes, text: '' });
    }

    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl
                        onChange={event =>
                            this.setState({ text: event.target.value })
                        }
                        value={this.state.text}
                    />{' '}
                    <Button onClick={this.submit}>Submit</Button>
                    {this.state.notes.map(note => (
                        <Note key={note.text} note={note} />
                    ))}
                </Form>
            </div>
        );
    }
}

export default App;
