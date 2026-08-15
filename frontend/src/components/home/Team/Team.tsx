import { useState } from 'react'
import { team } from '@src/config/mantis'

function Team() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const active = team.find((m) => m.id === activeId)

  return (
    <section className="team-section" id="about">
      <div className="team-section__header">
        <p className="section-eyebrow">The team</p>
        <h2 className="section-title">Our biggest trust asset</h2>
      </div>
      <div className="team-grid">
        {team.map((member) => (
          <button
            key={member.id}
            type="button"
            className={`team-card${activeId === member.id ? ' team-card--active' : ''}`}
            onClick={() => setActiveId(activeId === member.id ? null : member.id)}
          >
            <div className="team-card__avatar" aria-hidden="true">
              {member.name.split(' ').map((n) => n[0]).join('')}
            </div>
            <h3 className="team-card__name">{member.name}</h3>
            <p className="team-card__title">{member.title}</p>
          </button>
        ))}
      </div>
      {active && (
        <div className="team-detail">
          <p className="team-detail__bio">{active.bio}</p>
          <p className="team-detail__fun">
            <span>Fun fact:</span> {active.funFact}
          </p>
        </div>
      )}
    </section>
  )
}

export default Team
