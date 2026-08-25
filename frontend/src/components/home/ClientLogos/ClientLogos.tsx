import { clients } from '@src/config/mantis'

function ClientLogos() {
  return (
    <section className="client-logos client-logos--after-hero">
      <p className="section-eyebrow text-center">Trusted by</p>
      <div className="client-logos__track">
        {[...clients, ...clients].map((client, i) => (
          <span key={`${client}-${i}`} className="client-logos__item">
            {client}
          </span>
        ))}
      </div>
    </section>
  )
}

export default ClientLogos
