export default function Email(props) {
    return (
        <div className='form-control'>
          <label htmlFor={props.id}>{props.label}</label>
          <input type='email' id={props.id} value={props.value} onChange={(e) => props.handler(e, props.id)}/>
        </div>
    )
}