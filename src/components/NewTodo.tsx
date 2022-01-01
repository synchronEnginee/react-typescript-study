import React, {useRef} from 'react'

type NewTodoProps = {
    onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null)
    const todoSubmitHandler = (event: React.FormEvent) => {
        // reactじゃないデフォルトイベントが動いちゃうのを止める
        event.preventDefault()
        //usetRefで取得したtextをcurrentフィールドのvalueから取得
        const enteredText = textInputRef.current!.value
        props.onAddTodo(enteredText)

    }
    return (
    <form onSubmit={todoSubmitHandler}>
        <div>
            <label htmlFor="todo-text">Todo内容</label>
            <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">Todoの追加</button>
    </form>
    )
}

export default NewTodo 