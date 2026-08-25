import { useState } from 'react'
import { team } from '@src/config/mantis'

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function memberInitials(name: string) {
  return name.split(' ').map((part) => part[0]).join('')
}

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
          <div
            key={member.id}
            className={`team-card${activeId === member.id ? ' team-card--active' : ''}`}
          >
            <button
              type="button"
              className="team-card__body"
              onClick={() => setActiveId(activeId === member.id ? null : member.id)}
              aria-expanded={activeId === member.id}
            >
              <div className="team-card__avatar">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt=""
                    className="team-card__photo"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span className="team-card__initials">{memberInitials(member.name)}</span>
                )}
              </div>
              <div className="team-card__meta">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__title">{member.title}</p>
              </div>
            </button>
            {member.linkedinUrl && (
              <a
                href={member.linkedinUrl}
                className="team-card__linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        ))}
      </div>
      {active && (
        <div className="team-detail">
          <p className="team-detail__name">{active.name}</p>
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
