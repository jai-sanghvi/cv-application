import '../styles/Form.css'

export default function Form({title, children}) {
  return (
    <section className='card'>
      <h2>{title}</h2>
      <form>
        {children}
      </form>
    </section>
  )
}