import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from '../App';
import {S} from '../styles/Styles'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState(false)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim());
            setTitle('');
        }

        setError(true)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return (
        <S.Todolist>
            <h3>{props.title}</h3>
            <div>
                <input
                    className={error ? 'empty-value-error' : ''}
                    value={title}
                    onChange={onChangeHandler}
                    onKeyDown={onKeyPressHandler}
                />
                <button onClick={addTask}>+</button>
                {error && <div className={'error-text'}>Title is required</div>}
            </div>
            <S.Items>
                {
                    props.tasks.map(t => {
                        const onClickHandler = () => props.removeTask(t.id)
                        const onChangeAlterTaskHandler = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked)

                        return <S.List key={t.id} className={t.isDone ? 'task-done' : 'task'}
                                       data-testod={t.isDone ? 'task-done-1' : 'task'}>
                            <input type="checkbox" checked={t.isDone} onChange={onChangeAlterTaskHandler}/>
                            <span>{t.title}</span>
                            <button onClick={onClickHandler} data-testid={'x-1'}>x</button>
                        </S.List>
                    })
                }
            </S.Items>
            <div>
                <button className={props.filter === 'all' ? 'btn-filter-active' : 'btn'} onClick={onAllClickHandler}>All
                </button>
                <button className={props.filter === 'active' ? 'btn-filter-active' : 'btn'}
                        onClick={onActiveClickHandler}>Active
                </button>
                <button className={props.filter === 'completed' ? 'btn-filter-active' : 'btn'}
                        onClick={onCompletedClickHandler}>Completed
                </button>
            </div>
        </S.Todolist>
    )
}
