import {useState} from 'react';
import './list.css';
import store from '../../store';
import * as actions from '../../actions';

const List = () => {
    const [list, setList] = useState(store.getState());

    store.subscribe(() => {
        setList(store.getState());
    });

    const resolve = (id, btn) => {
        store.dispatch(actions.resolveBug(id));
        btn.setAttribute('data-resolved', 'true');
    };

    const deleteBug = (id) => {
        store.dispatch(actions.removeBug(id));
    };

    const unResolve = (id, btn) => {
        store.dispatch(actions.unResolveBug(id));
        btn.setAttribute('data-resolved', 'false');
    };

    return (
        <div className='list'>
            <ul className='bugs-list'>
                { list.map(bug => (
                    <li
                        key={bug.id}
                        className='list-item'
                    >
                        <span className={`desc ${bug.resolved ? 'resolved' : ''}`}>{bug.description}</span>
                        <span className='btns'>
                            <button
                                className='resolve-btn'
                                data-resolved='false'
                                title={bug.resolved ? 'UnResolve bug' : 'Resolve bug'}
                                onClick={(e) => e.target.getAttribute('data-resolved') === 'false' ? resolve(bug.id, e.target) : unResolve(bug.id, e.target)}
                            >
                                { bug.resolved ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle" viewBox="0 0 16 16">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
                                    </svg>
                                }
                            </button>
                            <button
                                className='delete-btn'
                                onClick={() => deleteBug(bug.id)}
                                title='Delete bug'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                                </svg>
                            </button>
                        </span>
                    </li>
                ))

                }
            </ul>
        </div>
    );
};

export default List;