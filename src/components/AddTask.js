import {useState} from 'react';
 

const Addtask = ({onAdd}) => {
    const [text,setText]=useState('')
    const [day,setDay]=useState('')
    const [reminder,setReminder]=useState(false)
const onSubmit=(e)=>{
    e.preventDefault();
    
    if(!text){
        alert('Please add a task')
        return
    }
    onAdd({text,day,reminder})
    setText('')
    setDay('')
    setReminder(false)
}
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>
                    Task
                    <input type="text " placeholder="Add Task"
                     value={text} onChange={
                        (e)=>setText(e.target.value)
                    }/>
                </label>
            </div>
            <div className="form-control">
                <label>
                    Day & Time
                    <input type="text " placeholder="Add Day & Time"  value={day} onChange={
                        (e)=>setDay(e.target.value)
                    }/>
                </label>
            </div>
            <div className="form-control form-control-check">
                <label>
                    SetReminder
                    <input type="checkbox" checked={reminder}  value={reminder} onChange={
                        (e)=>setReminder(e.currentTarget.checked)
                    } />
                </label>
            </div>

            <input type="submit" value="Save Task" className='btn  btn-black'/>
        </form>
    )
}

export default Addtask
