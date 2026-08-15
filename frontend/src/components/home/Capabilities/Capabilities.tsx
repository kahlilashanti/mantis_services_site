import { capabilities } from '@src/config/mantis'

function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <p className="section-eyebrow">Capabilities</p>
      <ul className="capabilities__list">
        {capabilities.map((cap) => (
          <li key={cap}>{cap}</li>
        ))}
      </ul>
    </section>
  )
}

export default Capabilities
