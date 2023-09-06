import {fireEvent, render, screen} from '@testing-library/react';
import App from "../App";
import {TaskType} from "../Todolist/Todolist";
import {v1} from "uuid";


let tasks: TaskType[] = [
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "ReactJS", isDone: false},
    {id: v1(), title: "Rest API", isDone: false},
    {id: v1(), title: "GraphQL", isDone: false},
]

test('Big test', () => {
    render(<App/>)
    //проверяем длинну массива
    expect(tasks.length).toBe(5)

    //проверяем что в инпут печатается текст
    const input = screen.getByRole('textbox')
    fireEvent.change(input, {target: {value: 'Hello World!'}})
    expect(input).toHaveValue('Hello World!')

    //проверяем добавление новой таски
    fireEvent.click(screen.getByText('+'))
    const newTask = screen.getByText('Hello World!')
    expect(newTask).toBeInTheDocument()

    // Находим кнопку удаления для первой задачи и кликаем на нее
    // Тут у меня возникли трудности, но я обязательно этому научусь
})