export default function Input(props) {
    return (
        <div className='form-control'>
          <label htmlFor={props.id}>{props.label}</label>
          <input type='text' id={props.id} value={props.value} onChange={(e) => props.handler(e, props.id)}/>
        </div>
    )
}