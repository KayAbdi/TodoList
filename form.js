function TodoForm({addTodo}){
    const [value, setValue] = React.useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    return (
        <form>
            <div className="hoos">
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add ToDo"
                    onChange={e => setValue(e.target.value)}
                />
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    );
}