import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Note from './Note';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

class App extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            notes: []
        };

        this.submit = this.submit.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount() {
        this.setState({ notes: read_cookie(cookie_key) });
    }

    submit() {
        const { notes, text } = this.state;

        notes.push({ text });
        this.setState({ notes, text: '' });

        bake_cookie(cookie_key, notes);
    }

    clear() {
        this.setState({ notes: [] });
        delete_cookie(cookie_key);
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
                    <Button onClick={this.clear}>Clear Notes</Button>
                </Form>
            </div>
        );
    }
}

export default App;
