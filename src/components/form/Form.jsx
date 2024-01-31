import { useState } from 'react';
import './form.css';
import store from "../../store";
import { addBug } from "../../actions";

const Form = () => {
    const [bug, setBug] = useState('');

    const submit = (e) => {
        e.preventDefault();
        if (bug.length < 3) return;
        store.dispatch(addBug(bug));
        setBug('');
    };

    return (
        <form className='form'>
            <div>
                <input
                    type='text'
                    className='desc-input'
                    title='Bug description'
                    required
                    minLength={3}
                    id='bug-desc'
                    value={bug}
                    onChange={(e) => setBug(e.target.value)}
                />
                <label
                    htmlFor='bug-desc'
                    className={`desc-label ${bug.length > 0 ? 'focused' : ''}`}
                >
                    Enter bug description
                </label>
                <button
                    className='submit-btn'
                    onClick={submit}
                >
                    Add
                </button>
            </div>
        </form>
    );
};

export default Form;